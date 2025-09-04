import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getCityById, CITIES } from '@/lib/data';

// Required for static export
export async function generateStaticParams() {
  return CITIES.map((city) => ({
    id: city.id,
  }));
}

interface CityPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CityPage({ params }: CityPageProps) {
  const { id } = await params;
  const city = getCityById(id);
  
  if (!city) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
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

      {/* City Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 
            className="text-6xl md:text-8xl font-black mb-4"
            style={{ color: city.accent.primary }}
          >
            {city.name}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">{city.state}</p>
          <p className="text-2xl italic text-slate-700 dark:text-slate-300 font-light">
            &ldquo;{city.vibe.tagline}&rdquo;
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              {city.population.toLocaleString()}
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide">Population</div>
          </div>
          
          {city.medianIncome > 0 && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                ${city.medianIncome.toLocaleString()}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide">Median Income</div>
            </div>
          )}
          
          {city.medianAge > 0 && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {city.medianAge}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide">Median Age</div>
            </div>
          )}
          
          {city.bachelors > 0 && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {city.bachelors}%
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide">Bachelor&apos;s+</div>
            </div>
          )}
        </div>

        {/* Culture & Strategy */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Culture */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Culture & Vibe</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {city.vibe.keywords.map((keyword: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm border"
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
            </div>
          </div>

          {/* Strategy */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Marketing Strategy</h3>
            <div className="space-y-3">
              {city.strategies.map((strategy: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                    style={{ backgroundColor: city.accent.secondary }}
                  >
                    {index + 1}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    {strategy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}