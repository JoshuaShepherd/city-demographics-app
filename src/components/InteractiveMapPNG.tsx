'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { CITIES } from '@/lib/data';
import { getCityCoordinates } from '@/lib/us-map';
import Image from 'next/image';

interface InteractiveMapProps {
  onCitySelect?: (cityId: string) => void;
}

export default function InteractiveMap({ onCitySelect }: InteractiveMapProps = {}) {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-grid-pattern bg-repeat"></div>
      </div>

      {/* Main Map Container */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="relative w-full max-w-7xl aspect-[1280/800]">
          {/* US Map PNG */}
          <div className="relative w-full h-full">
            <Image
              src="/us-map.png"
              alt="United States Map"
              fill
              className="object-contain opacity-80 filter brightness-75 contrast-125"
              priority
            />
            
            {/* City dots overlay */}
            <div className="absolute inset-0">
              {CITIES.map((city, index) => {
                const coords = getCityCoordinates(city.id);
                if (!coords) return null;

                const isHovered = hoveredCity === city.id;

                // Convert coordinates to percentage positions - corrected for proper alignment
                const leftPercent = ((coords.x + 50) / 960) * 100; // Corrected positioning
                const topPercent = ((coords.y + 30) / 500) * 100;   // Corrected positioning

                return (
                  <motion.div
                    key={city.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                    style={{
                      left: `${leftPercent}%`,
                      top: `${topPercent}%`,
                    }}
                    onMouseEnter={() => setHoveredCity(city.id)}
                    onMouseLeave={() => {
                      if (selectedCity !== city.id) {
                        setHoveredCity(null);
                      }
                    }}
                    onClick={() => {
                      // Double-click or tap to navigate to city page
                      if (selectedCity === city.id) {
                        router.push(`/city/${city.id}`);
                      } else {
                        setSelectedCity(city.id);
                        setHoveredCity(city.id);
                      }
                      onCitySelect?.(city.id);
                    }}
                  >
                    {/* City pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `radial-gradient(circle, ${city.accent.primary}40, transparent 70%)`,
                        width: isHovered ? '48px' : '32px',
                        height: isHovered ? '48px' : '32px',
                        marginLeft: isHovered ? '-24px' : '-16px',
                        marginTop: isHovered ? '-24px' : '-16px',
                      }}
                      animate={{
                        scale: isHovered ? [1, 1.3, 1] : 1,
                        opacity: isHovered ? [0.6, 0.2, 0.6] : 0.4,
                      }}
                      transition={{
                        duration: isHovered ? 2 : 0.3,
                        repeat: isHovered ? Infinity : 0,
                      }}
                    />

                    {/* City dot */}
                    <motion.div
                      className="relative z-20 rounded-full border-3 border-white shadow-xl"
                      style={{
                        backgroundColor: city.accent.primary,
                        width: isHovered ? '16px' : '12px',
                        height: isHovered ? '16px' : '12px',
                        marginLeft: isHovered ? '-8px' : '-6px',
                        marginTop: isHovered ? '-8px' : '-6px',
                        boxShadow: `0 0 ${isHovered ? '24px' : '16px'} ${city.accent.primary}80, 0 4px 12px rgba(0,0,0,0.5)`,
                      }}
                      whileHover={{ scale: 1.4 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* City label */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.8 }}
                          className="absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-30"
                        >
                          <div 
                            className="px-4 py-2 rounded-xl text-white text-sm font-bold shadow-2xl border border-white/30 backdrop-blur-lg"
                            style={{
                              background: `linear-gradient(135deg, ${city.accent.primary}95, ${city.accent.secondary}95)`,
                              textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                            }}
                          >
                            {city.name}
                          </div>
                          {/* Arrow */}
                          <div 
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0"
                            style={{
                              borderLeft: '6px solid transparent',
                              borderRight: '6px solid transparent',
                              borderBottom: `6px solid ${city.accent.primary}95`,
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* City Info Panel */}
      <AnimatePresence>
        {(selectedCity || hoveredCity) && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.8 }}
            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-40"
            onMouseEnter={() => setHoveredCity(selectedCity || hoveredCity)}
            onMouseLeave={() => {
              if (!selectedCity) {
                setHoveredCity(null);
              }
            }}
          >
            {(() => {
              const currentCityId = selectedCity || hoveredCity;
              const city = CITIES.find(c => c.id === currentCityId);
              if (!city) return null;

              return (
                <motion.div 
                  className="backdrop-blur-2xl rounded-3xl p-4 md:p-8 text-white border border-white/30 max-w-xs md:max-w-sm shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${city.accent.primary}25, ${city.accent.secondary}25)`,
                    boxShadow: `0 25px 50px rgba(0, 0, 0, 0.6), 0 0 50px ${city.accent.primary}30`
                  }}
                  layoutId={`city-panel-${city.id}`}
                >
                  {/* Close button for mobile/touch */}
                  <button 
                    onClick={() => {
                      setSelectedCity(null);
                      setHoveredCity(null);
                    }}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:bg-black/40 transition-all md:hidden"
                  >
                    ✕
                  </button>
                  
                  <motion.h3 
                    className="text-4xl font-bold mb-2"
                    style={{ 
                      color: city.accent.primary,
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)' 
                    }}
                  >
                    {city.name}
                  </motion.h3>
                  <p className="text-xl opacity-95 mb-6 italic font-light">&ldquo;{city.vibe.tagline}&rdquo;</p>
                  
                  <div className="space-y-4 text-base">
                    <div className="flex justify-between items-center">
                      <span className="opacity-80 font-medium">Population</span>
                      <span className="font-mono text-xl text-white">{city.population.toLocaleString()}</span>
                    </div>
                    {city.medianIncome > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="opacity-80 font-medium">Median Income</span>
                        <span className="font-mono text-xl text-white">${city.medianIncome.toLocaleString()}</span>
                      </div>
                    )}
                    {city.medianAge > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="opacity-80 font-medium">Median Age</span>
                        <span className="font-mono text-xl text-white">{city.medianAge} years</span>
                      </div>
                    )}
                  </div>

                  <Link href={`/city/${city.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all text-white shadow-xl"
                      style={{
                        background: `linear-gradient(135deg, ${city.accent.primary}, ${city.accent.secondary})`,
                        boxShadow: `0 10px 20px ${city.accent.primary}50, 0 4px 8px rgba(0,0,0,0.3)`
                      }}
                    >
                      Explore {city.name} →
                    </motion.button>
                  </Link>
                </motion.div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Title Overlay */}
      <div className="absolute top-8 left-8 z-30">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-7xl md:text-9xl font-black text-white tracking-tight"
          style={{ 
            textShadow: '0 6px 12px rgba(0, 0, 0, 0.9), 0 2px 4px rgba(0, 0, 0, 0.8)' 
          }}
        >
          City Pulse
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-2xl text-slate-200 mt-6 max-w-lg font-light"
          style={{ textShadow: '0 3px 6px rgba(0, 0, 0, 0.9)' }}
        >
          Interactive demographic exploration across North America
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-30"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span 
            className="text-base mb-3 opacity-80 font-medium" 
            style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.9)' }}
          >
            Scroll to explore cities
          </span>
          <motion.svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="opacity-80"
            whileHover={{ scale: 1.3 }}
          >
            <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
