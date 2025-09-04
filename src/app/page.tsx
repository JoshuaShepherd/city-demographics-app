'use client';

import { motion } from 'framer-motion';
import { CITIES } from '@/lib/data';
import InteractiveMap from '@/components/InteractiveMapPNG';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Above the Fold - Interactive Map */}
      <section className="relative h-screen">
        <InteractiveMap />
      </section>

      {/* Below the Fold - City Cards */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-16">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Explore Every City
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Deep dive into demographic data, culture vibes, and strategic insights for each location.
          </p>
        </motion.div>

        {/* City Grid - Equal Heights */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CITIES.map((city, index) => (
              <motion.div
                key={city.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="h-full" // Ensure full height
              >
                <div className="block h-full">
                  <CityCard city={city} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 px-4 text-center bg-white dark:bg-slate-900">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          U.S. figures: ACS 2023 (Census Bureau). Toronto figures: Statistics Canada 2021.
        </p>
      </footer>
    </div>
  );
}

interface CityCardProps {
  city: typeof CITIES[0];
}

function CityCard({ city }: CityCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl h-full flex flex-col"
      style={{
        '--accent-color': city.accent.primary,
      } as React.CSSProperties}
    >
      {/* Accent Ring on Hover */}
      <div 
        className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-current opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{ color: city.accent.primary }}
      />
      
      {/* Card Content */}
      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              {city.name}
            </h3>
            <div 
              className="w-3 h-3 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: city.accent.primary }}
            />
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            {city.state}
          </p>
        </div>

        {/* Tagline */}
        <div className="flex-1 mb-4">
          <p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
            &ldquo;{city.vibe.tagline}&rdquo;
          </p>
        </div>

        {/* Key Metrics */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-xs">
            <span className="text-slate-500 dark:text-slate-400">Population</span>
            <span className="font-mono text-slate-700 dark:text-slate-300">
              {city.population.toLocaleString()}
            </span>
          </div>
          
          {city.medianIncome > 0 && (
            <div className="flex justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400">Median Income</span>
              <span className="font-mono text-slate-700 dark:text-slate-300">
                ${city.medianIncome.toLocaleString()}
              </span>
            </div>
          )}
          
          {city.medianAge > 0 && (
            <div className="flex justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400">Median Age</span>
              <span className="font-mono text-slate-700 dark:text-slate-300">
                {city.medianAge} years
              </span>
            </div>
          )}
        </div>

        {/* Culture Keywords */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {city.vibe.keywords.slice(0, 3).map((keyword, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                style={{
                  backgroundColor: index === 0 ? `${city.accent.primary}20` : undefined,
                  color: index === 0 ? city.accent.primary : undefined,
                }}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Action */}
        <div className="mt-auto">
          <div 
            className="w-full py-2 px-4 rounded-lg text-center text-sm font-medium transition-all duration-200 group-hover:shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${city.accent.primary}15, ${city.accent.secondary}15)`,
              color: city.accent.primary,
              border: `1px solid ${city.accent.primary}30`,
            }}
          >
            Explore Pulse →
          </div>
        </div>
      </div>

      {/* Bottom Accent Bar */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, ${city.accent.primary}, ${city.accent.secondary})`
        }}
      />
    </motion.div>
  );
}
