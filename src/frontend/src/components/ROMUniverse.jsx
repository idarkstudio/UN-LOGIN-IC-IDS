import {
  Castle,
  ChevronLeft,
  ChevronRight,
  Crown,
  ExternalLink,
  Search,
  Shield,
  Skull,
  Sparkles,
  Wand2,
  Zap,
} from "lucide-react";
import React, { useContext, useState } from "react";

import { LanguageContext } from "../App";

const ROMUniverse = () => {
  const { t } = useContext(LanguageContext);
  const [currentGame, setCurrentGame] = useState(0);

  const games = [
    {
      name: "Exploring Vilintrius",
      description: t("vilintrius.description"),
      image: "/images/vilintrius.png",
      genre: "Dungeon Crawler",
      // icon: <Sparkles className="w-6 h-6" />,
      narrative: t("vilintrius.text"),
      color: "from-purple-500 to-indigo-700",
      ready: true,
    },
    {
      name: "The Battle for Zhion",
      description: t("tbfz.description"),
      image: "/images/tbfz.png",
      genre: "FPS",
      // icon: <Shield className="w-6 h-6" />,
      narrative: t("tbfz.text"),
      color: "from-red-500 to-orange-700",
      ready: true,
    },
    {
      name: "BitRoyale",
      description: t("bit.description"),
      image: "/images/bit.png",
      genre: "Turn-Based Strategy",
      // icon: <Zap className="w-6 h-6" />,
      narrative: t("bit.text"),
      color: "from-cyan-500 to-blue-700",
      ready: false,
    },
    {
      name: "The Heroes Supremacy",
      description: t("ths.description"),
      image: "/images/ths.png",
      genre: "MOBA",
      // icon: <Crown className="w-6 h-6" />,
      narrative: t("ths.text"),
      color: "from-yellow-500 to-amber-700",
      ready: false,
    },
    {
      name: "Vetirent Magic Cards",
      description: t("vetirent.description"),
      image: "/images/vetirent.png",
      genre: "Card Game",
      // icon: <Wand2 className="w-6 h-6" />,
      narrative: t("vetirent.text"),
      color: "from-emerald-500 to-teal-700",
      ready: false,
    },
    {
      name: "The Player Fortress",
      description: t("fortress.description"),
      image: "/images/fortress.png",
      genre: "Player Fortress",
      // icon: <Castle className="w-6 h-6" />,
      narrative: t("fortress.text"),
      color: "from-stone-500 to-gray-700",
      ready: false,
    },
    {
      name: "The Search for Vetirents",
      description: t("vetirents.description"),
      image: "/images/vetirents.png",
      genre: "RPG",
      // icon: <Search className="w-6 h-6" />,
      narrative: t("vetirents.text"),
      color: "from-violet-500 to-purple-700",
      ready: false,
    },
    {
      name: "The Release of Madness",
      description: t("rom.description"),
      image: "/images/rom.png",
      genre: "RPGMMO",
      // icon: <Skull className="w-6 h-6" />,
      narrative: t("rom.text"),
      color: "from-red-600 to-black",
      ready: false,
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
          {/* <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            {t("rom.title")}
          </h2> */}
          <div className="grid place-items-center">
            <img src="/images/rom-universe.png" alt="ROM Universe" className="h-32 mb-8" />
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">{t("rom.subtitle")}</p>
            <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-xl p-6 border border-red-700">
              <p className="text-lg text-gray-200 italic">"{t("rom.quote")}"</p>
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
                        className="w-full h-80 object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${games[currentGame].color} opacity-0 group-hover:opacity-0 transition-opacity duration-300`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                      {/* Game icon overlay */}
                      {/* <div className="absolute top-4 left-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${games[currentGame].color} text-white shadow-lg`}
                        >
                          {games[currentGame].icon}
                        </div>
                      </div> */}

                      {/* Genre badge */}
                      <div className="absolute bottom-4 left-4">
                        <span
                          className={`px-4 py-2 bg-gradient-to-r text-white text-sm font-semibold rounded-full shadow-lg`}
                        >
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
                      <p className="text-gray-300 italic">{games[currentGame].narrative}</p>
                    </div>

                    <button
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-105 hover:shadow-red-glow border border-red-500 hover:border-red-400 font-semibold disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none"
                      disabled={!games[currentGame].ready}
                    >
                      {games[currentGame].ready ? (
                        <>
                          {t("btn.ready")}
                          <ExternalLink className="ml-3 w-5 h-5" />
                        </>
                      ) : (
                        <>{t("btn.coming")}</>
                      )}
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
                    ? "bg-red-500 shadow-lg shadow-red-500/50"
                    : "bg-gray-600 hover:bg-red-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Interconnected Universe Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-red-500">
              {t("multiverse.title")}
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">{t("multiverse.description")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game, index) => (
              <div
                key={index}
                className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border transition-all duration-300 transform hover:scale-105 cursor-pointer hover:shadow-red-glow ${
                  index === currentGame
                    ? "border-red-500 shadow-lg shadow-red-500/25"
                    : "border-red-900 hover:border-red-400"
                }`}
                onClick={() => setCurrentGame(index)}
              >
                <div className="relative">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-40 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 ${game.color} opacity-0 group-hover:opacity-0 transition-opacity duration-300`}
                  />

                  {/* Game icon */}
                  {/* <div className="absolute top-3 left-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${game.color} text-white shadow-lg`}
                    >
                      {game.icon}
                    </div>
                  </div> */}

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
              <h3 className="text-3xl font-bold mb-6 text-red-500">{t("bigcard.title")}</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {t("bigcard.description")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{t("bigcard.1.title")}</h4>
                  <p className="text-gray-400 text-sm">{t("bigcard.1.description")}</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{t("bigcard.2.title")}</h4>
                  <p className="text-gray-400 text-sm">{t("bigcard.2.description")}</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{t("bigcard.3.title")}</h4>
                  <p className="text-gray-400 text-sm">{t("bigcard.3.description")}</p>
                </div>
              </div>

              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-red-900">
                <p className="text-xl text-gray-200 italic font-medium">"{t("bigcard.quote")}"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROMUniverse;
