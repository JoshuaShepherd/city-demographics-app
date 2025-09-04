'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Info, Users, DollarSign, GraduationCap, Globe, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';
import { CityData, METRIC_TOOLTIPS, formatNumber, formatCurrency, formatPercentage } from '@/lib/data';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface CityPageClientProps {
  city: CityData;
}

export default function CityPageClient({ city }: CityPageClientProps) {
  return (
    <TooltipProvider>
      <div 
        className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900"
        style={{
          '--city-primary': city.accent.primary,
          '--city-secondary': city.accent.secondary,
        } as React.CSSProperties}
      >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Cities</span>
          </Link>
          <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-100">City Pulse</h1>
        </div>
      </header>

      {/* Hero Band */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative py-16 px-4 text-center overflow-hidden"
      >
        {/* Background Glow */}
        <div 
          className="absolute inset-0 bg-gradient-to-br opacity-5"
          style={{
            background: `radial-gradient(circle at 30% 60%, ${city.accent.primary}40, transparent 60%), radial-gradient(circle at 70% 40%, ${city.accent.secondary}30, transparent 50%)`
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-slate-900 dark:text-slate-100 mb-6"
            style={{ color: city.accent.primary }}
          >
            {city.name}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 mb-8"
          >
            <MapPin size={20} />
            <span className="text-xl">{city.state}</span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 italic font-light max-w-3xl mx-auto leading-relaxed"
          >
            &ldquo;{city.vibe.tagline}&rdquo;
          </motion.p>
        </div>
      </motion.section>

      {/* Quick Stats Bar */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="py-8 px-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-y border-slate-200 dark:border-slate-700"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">
              {formatNumber(city.population)}
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide">Population</div>
          </div>
          
          {city.medianIncome > 0 && (
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                {formatCurrency(city.medianIncome)}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide">Median Income</div>
            </div>
          )}
          
          {city.medianAge > 0 && (
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                {city.medianAge}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide">Median Age</div>
            </div>
          )}
          
          {city.bachelors > 0 && (
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                {formatPercentage(city.bachelors)}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide">Bachelor&apos;s+</div>
            </div>
          )}
        </div>
      </motion.section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column - Demographics */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Demographics Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-3 mb-8">
                <div 
                  className="p-3 rounded-2xl"
                  style={{ backgroundColor: `${city.accent.primary}20`, color: city.accent.primary }}
                >
                  <Users size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Demographics</h2>
                  <p className="text-slate-500 dark:text-slate-400">Population & social characteristics</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { label: 'Population', value: formatNumber(city.population), icon: Users },
                  { label: 'Median Age', value: city.medianAge > 0 ? `${city.medianAge} years` : 'N/A', icon: Calendar },
                  { label: 'Foreign Born', value: city.foreignBorn > 0 ? formatPercentage(city.foreignBorn) : 'N/A', icon: Globe },
                  { label: 'Language Other Than English at Home', value: city.languageAtHome ? formatPercentage(city.languageAtHome) : 'N/A', icon: Globe },
                ].map((metric, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/50 group-hover:bg-slate-100 dark:group-hover:bg-slate-700 transition-colors">
                      <div className="flex items-center gap-3">
                        <metric.icon size={20} className="text-slate-500 dark:text-slate-400" />
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{metric.label}</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                              <Info size={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="max-w-xs">
                            {METRIC_TOOLTIPS[metric.label as keyof typeof METRIC_TOOLTIPS] || 'No description available.'}
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div className="text-xl font-mono font-bold text-slate-900 dark:text-slate-100">
                        {metric.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Economic Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-3 mb-8">
                <div 
                  className="p-3 rounded-2xl"
                  style={{ backgroundColor: `${city.accent.secondary}20`, color: city.accent.secondary }}
                >
                  <DollarSign size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Economics</h2>
                  <p className="text-slate-500 dark:text-slate-400">Income & poverty indicators</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { label: 'Median Household Income', value: city.medianIncome > 0 ? formatCurrency(city.medianIncome) : 'N/A', icon: DollarSign },
                  { label: 'Poverty Rate', value: city.poverty > 0 ? formatPercentage(city.poverty) : 'N/A', icon: DollarSign },
                ].map((metric, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/50 group-hover:bg-slate-100 dark:group-hover:bg-slate-700 transition-colors">
                      <div className="flex items-center gap-3">
                        <metric.icon size={20} className="text-slate-500 dark:text-slate-400" />
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{metric.label}</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                              <Info size={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="max-w-xs">
                            {METRIC_TOOLTIPS[metric.label as keyof typeof METRIC_TOOLTIPS] || 'No description available.'}
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div className="text-xl font-mono font-bold text-slate-900 dark:text-slate-100">
                        {metric.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Education Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-3 mb-8">
                <div 
                  className="p-3 rounded-2xl"
                  style={{ backgroundColor: `${city.accent.primary}20`, color: city.accent.primary }}
                >
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Education</h2>
                  <p className="text-slate-500 dark:text-slate-400">Educational attainment levels</p>
                </div>
              </div>

              <div className="grid md:grid-cols-1 gap-6">
                {[
                  { label: 'Bachelor\'s Degree or Higher', value: city.bachelors > 0 ? formatPercentage(city.bachelors) : 'N/A', icon: GraduationCap },
                ].map((metric, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/50 group-hover:bg-slate-100 dark:group-hover:bg-slate-700 transition-colors">
                      <div className="flex items-center gap-3">
                        <metric.icon size={20} className="text-slate-500 dark:text-slate-400" />
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{metric.label}</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                              <Info size={16} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="max-w-xs">
                            {METRIC_TOOLTIPS[metric.label as keyof typeof METRIC_TOOLTIPS] || 'No description available.'}
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div className="text-xl font-mono font-bold text-slate-900 dark:text-slate-100">
                        {metric.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column - Culture & Strategy */}
          <div className="space-y-12">
            
            {/* Culture & Vibe */}
            <motion.section
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">Culture & Vibe</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {city.vibe.keywords.map((keyword: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-2 rounded-full text-sm font-medium border"
                        style={{
                          backgroundColor: `${city.accent.primary}15`,
                          borderColor: `${city.accent.primary}30`,
                          color: city.accent.primary,
                        }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">Imagery Notes</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {city.vibe.imagery}
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Strategy Recommendations */}
            <motion.section
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">Marketing Strategy</h2>
              
              <div className="space-y-4">
                {city.strategies.map((strategy: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-2xl"
                    style={{ backgroundColor: `${city.accent.secondary}10` }}
                  >
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                      style={{ backgroundColor: city.accent.secondary }}
                    >
                      {index + 1}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {strategy}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 px-4 text-center bg-white dark:bg-slate-900">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          U.S. figures: ACS 2023 (Census Bureau). Toronto figures: Statistics Canada 2021.
        </p>
      </footer>
    </div>
    </TooltipProvider>
  );
}
