'use client';

import { motion } from 'framer-motion';

export default function InteractiveMap() {

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-slate-300" />
        </svg>
      </div>

      {/* Title Overlay */}
      <div className="absolute top-8 left-8 z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold text-white tracking-tight"
          style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.8)' }}
        >
          City Pulse
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-xl text-slate-300 mt-4 max-w-md"
          style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}
        >
          Interactive demographic exploration across North America
        </motion.p>
      </div>

      {/* Simple Map Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-7xl aspect-[960/500] bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center">
          <p className="text-white text-xl">Map Loading...</p>
        </div>
      </div>
    </div>
  );
}
