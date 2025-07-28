import React, { useContext, useState } from 'react';
import { LanguageContext } from '../App';
import { ChevronLeft, ChevronRight, ExternalLink, Sparkles, Zap, Shield, Crown, Wand2, Castle, Search, Skull } from 'lucide-react';

const ROMUniverse: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const [currentGame, setCurrentGame] = useState(0);

  const games = [
    {
      name: 'Exploring Vilintrius',
      description: 'Venture into the mystical realm of Vilintrius, where ancient secrets lie buried beneath ethereal landscapes and reality bends to the will of forgotten magic.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
      genre: 'Mystical Exploration',
      icon: <Sparkles className="w-6 h-6" />,
      narrative: 'The gateway to understanding the deeper mysteries of the ROM Universe begins here.',
      color: 'from-purple-500 to-indigo-700',
    },
    {
      name: 'The Battle for Zhion',
      description: 'Command vast armies across the war-torn dimensions of Zhion, where strategic mastery determines the fate of entire civilizations and the balance of cosmic power.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      genre: 'Epic Strategy',
      icon: <Shield className="w-6 h-6" />,
      narrative: 'The eternal conflict that shapes the very foundations of reality across all realms.',
      color: 'from-red-500 to-orange-700',
    },
    {
      name: 'BitRoyale',
      description: 'Survive in the digital wasteland where code becomes flesh and algorithms hunt the unwary. Only the most cunning will emerge from this cybernetic nightmare.',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
      genre: 'Digital Survival',
      icon: <Zap className="w-6 h-6" />,
      narrative: 'Where the boundaries between digital and physical reality dissolve into chaos.',
      color: 'from-cyan-500 to-blue-700',
    },
    {
      name: 'The Heroes Supremacy',
      description: 'Ascend to legendary status as champions clash in arenas where gods once walked. Each victory brings you closer to ultimate supremacy over destiny itself.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
      genre: 'Legendary Combat',
      icon: <Crown className="w-6 h-6" />,
      narrative: 'The proving ground where mortals transcend their limitations to become legends.',
      color: 'from-yellow-500 to-amber-700',
    },
    {
      name: 'Vetirent Magic Cards',
      description: 'Master the arcane arts through mystical card battles where each spell cast reshapes reality and every duel determines the flow of magical energy across dimensions.',
      image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop',
      genre: 'Arcane Strategy',
      icon: <Wand2 className="w-6 h-6" />,
      narrative: 'The ancient art of Vetirent magic, channeled through mystical card mastery.',
      color: 'from-emerald-500 to-teal-700',
    },
    {
      name: 'The Player Fortress',
      description: 'Construct impregnable strongholds that stand as bastions against the encroaching darkness. Your fortress becomes the last hope for civilization\'s survival.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
      genre: 'Fortress Defense',
      icon: <Castle className="w-6 h-6" />,
      narrative: 'Sanctuaries of hope built to withstand the storms of an uncertain multiverse.',
      color: 'from-stone-500 to-gray-700',
    },
    {
      name: 'The Search for Vetirents',
      description: 'Embark on a perilous quest to uncover the lost Vetirents, ancient artifacts of immense power that hold the key to understanding the true nature of existence.',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop',
      genre: 'Mystical Quest',
      icon: <Search className="w-6 h-6" />,
      narrative: 'The eternal search for artifacts that bridge the gap between mortal and divine.',
      color: 'from-violet-500 to-purple-700',
    },
    {
      name: 'The Release of Madness',
      description: 'Descend into the psychological abyss where sanity becomes currency and madness reveals hidden truths. Face the darkness within to emerge transformed.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      genre: 'Psychological Horror',
      icon: <Skull className="w-6 h-6" />,
      narrative: 'The final revelation where all threads of the ROM Universe converge in terrifying clarity.',
      color: 'from-red-600 to-black',
    },
  ];

  const nextGame = () => {
    setCurrentGame((prev) => (prev + 1) % games.length);
  };

  const prevGame = () => {
    setCurrentGame((prev) => (prev - 1 + games.length) % games.length);
  };

  return (
    <section id="rom-universe" className="py-20 bg-black relative overflow-hidden">
      {/* Mystical background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-purple-900/20" />
        <div className="dark-grid-pattern absolute inset-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            {t('rom.title')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Enter a mystical multiverse where eight interconnected realms weave together the fabric of existence itself. 
              Each world tells a fragment of an eternal story, where heroes rise, civilizations fall, and the very nature 
              of reality is questioned and reshaped.
            </p>
            <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-xl p-6 border border-red-700">
              <p className="text-lg text-gray-200 italic">
                "In the ROM Universe, every choice echoes across dimensions, every victory reshapes destiny, 
                and every player becomes part of a legend that transcends the boundaries of individual games."
              </p>
            </div>
          </div>
        </div>

        {/* Featured Game Showcase */}
        <div className="relative mb-16">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-900/20 to-red-800/20 backdrop-blur-sm border border-red-900">
            <div className="flex items-center justify-between p-8">
              <button
                onClick={prevGame}
                className="p-3 rounded-full bg-black/70 hover:bg-gray-800 transition-all duration-300 hover:shadow-red-glow border border-red-900 hover:border-red-500 group"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:text-red-300" />
              </button>

              <div className="flex-1 mx-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={games[currentGame].image}
                        alt={games[currentGame].name}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${games[currentGame].color} opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      
                      {/* Game icon overlay */}
                      <div className="absolute top-4 left-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${games[currentGame].color} text-white shadow-lg`}>
                          {games[currentGame].icon}
                        </div>
                      </div>
                      
                      {/* Genre badge */}
                      <div className="absolute bottom-4 left-4">
                        <span className={`px-4 py-2 bg-gradient-to-r ${games[currentGame].color} text-white text-sm font-semibold rounded-full shadow-lg`}>
                          {games[currentGame].genre}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-left space-y-6">
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                        {games[currentGame].name}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {games[currentGame].description}
                      </p>
                    </div>
                    
                    {/* Narrative connection */}
                    <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-red-900">
                      <div className="flex items-center mb-3">
                        <Sparkles className="w-5 h-5 text-red-500 mr-2" />
                        <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">
                          Universal Thread
                        </span>
                      </div>
                      <p className="text-gray-300 italic">
                        {games[currentGame].narrative}
                      </p>
                    </div>
                    
                    <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-105 hover:shadow-red-glow border border-red-500 hover:border-red-400 font-semibold">
                      Discover This Realm
                      <ExternalLink className="ml-3 w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={nextGame}
                className="p-3 rounded-full bg-black/70 hover:bg-gray-800 transition-all duration-300 hover:shadow-red-glow border border-red-900 hover:border-red-500 group"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:text-red-300" />
              </button>
            </div>
          </div>

          {/* Game indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {games.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentGame(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 hover:shadow-red-glow ${
                  index === currentGame 
                    ? 'bg-red-500 shadow-lg shadow-red-500/50' 
                    : 'bg-gray-600 hover:bg-red-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Interconnected Universe Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-red-500">
              The Interconnected Multiverse
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Each realm exists as both a standalone epic and an integral part of a greater cosmic narrative. 
              Characters, artifacts, and consequences flow between worlds, creating an ever-evolving tapestry of legend.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game, index) => (
              <div
                key={index}
                className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border transition-all duration-300 transform hover:scale-105 cursor-pointer hover:shadow-red-glow ${
                  index === currentGame
                    ? 'border-red-500 shadow-lg shadow-red-500/25'
                    : 'border-red-900 hover:border-red-400'
                }`}
                onClick={() => setCurrentGame(index)}
              >
                <div className="relative">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${game.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  
                  {/* Game icon */}
                  <div className="absolute top-3 left-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${game.color} text-white shadow-lg`}>
                      {game.icon}
                    </div>
                  </div>
                  
                  {/* Genre badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-black/70 text-white text-xs rounded backdrop-blur-sm">
                      {game.genre}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h4 className="font-bold text-white mb-2 group-hover:text-red-300 transition-colors text-lg">
                    {game.name}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors line-clamp-3">
                    {game.description}
                  </p>
                  
                  {/* Connection indicator */}
                  <div className="mt-4 flex items-center">
                    <div className="flex-1 h-px bg-gradient-to-r from-red-600 to-transparent" />
                    <Sparkles className="w-4 h-4 text-red-500 mx-2" />
                    <div className="flex-1 h-px bg-gradient-to-l from-red-600 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Universe Lore Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-12 border border-red-700">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-red-500">
                The Eternal Cycle
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                In the ROM Universe, every ending becomes a beginning, every defeat seeds future victory, 
                and every player's journey contributes to an ever-expanding mythology. The Vetirents—ancient 
                artifacts of unimaginable power—serve as the connecting thread that binds all realms together, 
                their influence felt across every dimension, every battle, every quest for truth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Mystical Connections</h4>
                  <p className="text-gray-400 text-sm">
                    Actions in one realm ripple across all others, creating a living, breathing multiverse
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Legendary Artifacts</h4>
                  <p className="text-gray-400 text-sm">
                    The Vetirents transcend individual games, becoming keys to universal understanding
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Evolving Narrative</h4>
                  <p className="text-gray-400 text-sm">
                    Player choices shape not just individual stories, but the destiny of the entire universe
                  </p>
                </div>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-red-900">
                <p className="text-xl text-gray-200 italic font-medium">
                  "Step into the ROM Universe, where your legend begins not with a single game, 
                  but with your first choice in an infinite tapestry of interconnected destinies."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROMUniverse;
