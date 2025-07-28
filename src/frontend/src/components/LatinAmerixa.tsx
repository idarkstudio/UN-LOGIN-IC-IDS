import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { TrendingUp, Smartphone, Users, Globe } from 'lucide-react';

const LatinAmerica: React.FC = () => {
  const { t } = useContext(LanguageContext);

  const countries = [
    { name: 'Brazil', gamers: '67M', growth: '+15%', flag: '🇧🇷' },
    { name: 'Mexico', gamers: '55M', growth: '+18%', flag: '🇲🇽' },
    { name: 'Argentina', gamers: '19M', growth: '+12%', flag: '🇦🇷' },
    { name: 'Colombia', gamers: '16M', growth: '+20%', flag: '🇨🇴' },
    { name: 'Chile', gamers: '8M', growth: '+14%', flag: '🇨🇱' },
    { name: 'Peru', gamers: '12M', growth: '+16%', flag: '🇵🇪' },
  ];

  const highlights = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Fastest Growing Market',
      description: '20% annual growth in gaming revenue',
      stat: '20%',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Dominance',
      description: '85% of gamers play on mobile devices',
      stat: '85%',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Young Demographics',
      description: '60% of gamers are under 35 years old',
      stat: '60%',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Cultural Affinity',
      description: 'Strong community and social gaming culture',
      stat: '100%',
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            {t('latam.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('latam.subtitle')}
          </p>
        </div>

        {/* Market Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-red-900 hover:border-red-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-red-500 mb-4 group-hover:text-red-400 transition-colors">
                {highlight.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
                {highlight.stat}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {highlight.title}
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Country Statistics */}
        <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-red-900">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Gaming Market by Country
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <div
                key={index}
                className="group bg-black/50 rounded-xl p-6 border border-red-900 hover:border-red-500 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{country.flag}</span>
                    <span className="text-lg font-semibold text-white group-hover:text-red-300 transition-colors">
                      {country.name}
                    </span>
                  </div>
                  <span className="text-green-400 text-sm font-semibold">
                    {country.growth}
                  </span>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500 mb-1">
                    {country.gamers}
                  </div>
                  <div className="text-gray-400 text-sm">
                    Active Gamers
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Insights */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-8 border border-red-700">
            <h3 className="text-2xl font-bold mb-4 text-red-500">
              Market Opportunity
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Latin America represents the world's fastest-growing gaming market with over 290 million gamers. 
              The region's strong mobile adoption, young demographics, and cultural affinity for social gaming 
              make it the perfect launchpad for Web3 gaming innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">$7.8B</div>
                <div className="text-gray-400">Market Size 2024</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-600" />
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">290M+</div>
                <div className="text-gray-400">Total Gamers</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-600" />
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">$12.5B</div>
                <div className="text-gray-400">Projected 2027</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatinAmerica;
