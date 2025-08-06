import {
  Calendar,
  Coins,
  Crown,
  Gamepad2,
  Gift,
  MapPin,
  Percent,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import React, { useContext } from "react";

import { LanguageContext } from "../App";

const Token = () => {
  const { t } = useContext(LanguageContext);

  const tokenFeatures = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: t("token.uses.1.title"),
      description: t("token.uses.1.description"),
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t("token.uses.2.title"),
      description: t("token.uses.2.description"),
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: t("token.uses.3.title"),
      description: t("token.uses.3.description"),
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: t("token.uses.4.title"),
      description: t("token.uses.4.description"),
    },
  ];

  const earningMethods = [
    t("token.earning.1"),
    t("token.earning.2"),
    t("token.earning.3"),
    t("token.earning.4"),
    t("token.earning.5"),
    t("token.earning.6"),
  ];

  const rarityTiers = [
    {
      tier: "S",
      name: t("token.rarity.1"),
      color: "from-yellow-400 to-yellow-600",
      bgColor: "from-yellow-900/20 to-yellow-800/20",
      borderColor: "border-yellow-500",
      icon: <Crown className="w-6 h-6" />,
      percentage: "1%",
      inventory: "7 NFTs",
    },
    {
      tier: "A",
      name: t("token.rarity.2"),
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-900/20 to-purple-800/20",
      borderColor: "border-purple-500",
      icon: <Star className="w-6 h-6" />,
      percentage: "5%",
      inventory: "33 NFTs",
    },
    {
      tier: "B",
      name: t("token.rarity.3"),
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-900/20 to-blue-800/20",
      borderColor: "border-blue-500",
      icon: <Shield className="w-6 h-6" />,
      percentage: "15%",
      inventory: "100 NFTs",
    },
    {
      tier: "C",
      name: t("token.rarity.4"),
      color: "from-green-400 to-green-600",
      bgColor: "from-green-900/20 to-green-800/20",
      borderColor: "border-green-500",
      icon: <Zap className="w-6 h-6" />,
      percentage: "30%",
      inventory: "200 NFTs",
    },
    {
      tier: "D",
      name: t("token.rarity.5"),
      color: "from-gray-400 to-gray-600",
      bgColor: "from-gray-900/20 to-gray-800/20",
      borderColor: "border-gray-500",
      icon: <Users className="w-6 h-6" />,
      percentage: "49%",
      inventory: "326 NFTs",
    },
  ];

  const rarityPerks = [
    {
      title: t("token.rarity.perk.1.title"),
      description: t("token.rarity.perk.1.subtitle"),
      icon: <Coins className="w-6 h-6" />,
      details: t("token.rarity.perk.1.description"),
    },
    {
      title: t("token.rarity.perk.2.title"),
      description: t("token.rarity.perk.2.subtitle"),
      icon: <TrendingUp className="w-6 h-6" />,
      details: t("token.rarity.perk.2.description"),
    },
    {
      title: t("token.rarity.perk.3.title"),
      description: t("token.rarity.perk.3.subtitle"),
      icon: <Percent className="w-6 h-6" />,
      details: t("token.rarity.perk.3.description"),
    },
  ];

  const sharedPerks = [
    t("token.holders.1"),
    t("token.holders.2"),
    t("token.holders.3"),
    t("token.holders.4"),
    t("token.holders.5"),
    t("token.holders.6"),
  ];

  const factions = [
    {
      name: t("token.factions.1.title"),
      description: t("token.factions.1.description"),
      color: "from-red-500 to-red-700",
      icon: "/images/factions/emperor.avif",
    },
    {
      name: t("token.factions.2.title"),
      description: t("token.factions.2.description"),
      color: "from-blue-500 to-blue-700",
      icon: "/images/factions/civil.avif",
    },
    {
      name: t("token.factions.3.title"),
      description: t("token.factions.3.description"),
      color: "from-purple-500 to-purple-700",
      icon: "/images/factions/mercenarius.png",
    },
  ];

  return (
    <section id="token" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            {/* <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mr-4">
              <Coins className="w-8 h-8 text-white" />
            </div> */}
            <img src="/images/agld.png" alt="Ancient Gold Token" className="w-16 h-16 mr-4" />
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent font-cinzel">
                {t("token.title")}
              </h2>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("token.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Token Uses */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-red-500">{t("token.uses")}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tokenFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-red-900 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-red-glow"
                >
                  <div className="text-red-500 mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-semibold mb-2 text-white">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Earning Methods */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-red-500">
              {t("token.earning")}
            </h3>
            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-red-900">
              <ul className="space-y-4">
                {earningMethods.map((method, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{method}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Genesis Collection */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              {t("token.genesis")}
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              {t("token.genesis.description")}
            </p>
          </div>

          {/* Release Details */}
          {/* <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-8 border border-red-700 mb-12">
            <h4 className="text-2xl font-bold text-center mb-8 text-red-500">
              Release Information
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-black/50 rounded-xl border border-red-900">
                <Calendar className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <div className="text-lg font-bold text-white mb-1">Dec 8, 2022</div>
                <div className="text-gray-400 text-sm">Mint Date</div>
              </div>

              <div className="text-center p-4 bg-black/50 rounded-xl border border-red-900">
                <Users className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <div className="text-lg font-bold text-white mb-1">2PM UTC</div>
                <div className="text-gray-400 text-sm">Whitelist Sale</div>
              </div>

              <div className="text-center p-4 bg-black/50 rounded-xl border border-red-900">
                <MapPin className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <div className="text-lg font-bold text-white mb-1">3PM UTC</div>
                <div className="text-gray-400 text-sm">Public Sale</div>
              </div>

              <div className="text-center p-4 bg-black/50 rounded-xl border border-red-900">
                <Coins className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <div className="text-lg font-bold text-white mb-1">yumi.io</div>
                <div className="text-gray-400 text-sm">Exclusive on Yumi</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-black/50 rounded-xl border border-red-900">
                <div className="text-2xl font-bold text-red-500 mb-1">666</div>
                <div className="text-gray-400 text-sm">Total Supply</div>
              </div>

              <div className="text-center p-4 bg-black/50 rounded-xl border border-red-900">
                <div className="text-2xl font-bold text-red-500 mb-1">516</div>
                <div className="text-gray-400 text-sm">For Sale</div>
              </div>

              <div className="text-center p-4 bg-black/50 rounded-xl border border-red-900">
                <div className="text-2xl font-bold text-red-500 mb-1">150</div>
                <div className="text-gray-400 text-sm">Marketing</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-8 bg-black/50 rounded-xl p-6 border border-red-900">
                <div className="text-center">
                  <div className="text-xl font-bold text-white mb-1">2.5 ICP</div>
                  <div className="text-gray-400 text-sm">Regular Price</div>
                </div>
                <div className="w-px h-12 bg-gray-600" />
                <div className="text-center">
                  <div className="text-xl font-bold text-red-500 mb-1">1.875 ICP</div>
                  <div className="text-gray-400 text-sm">Whitelist Price</div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Rarity System */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-center mb-8 text-red-500">
              {t("token.rarity")}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {rarityTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`group bg-gradient-to-br ${tier.bgColor} backdrop-blur-sm rounded-xl p-6 border ${tier.borderColor} hover:scale-105 transition-all duration-300 hover:shadow-red-glow`}
                >
                  <div className="text-center">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${tier.color} text-white mb-4`}
                    >
                      {tier.icon}
                    </div>

                    <div
                      className={`text-3xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-2`}
                    >
                      {tier.tier}
                    </div>

                    <div className="text-lg font-semibold text-white mb-2">{tier.name}</div>

                    <div className="text-gray-300 text-sm mb-1">{tier.percentage}</div>

                    <div className="text-gray-400 text-xs">{tier.inventory}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rarity Perks */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-center mb-8 text-red-500">
              {t("token.rarity.perk")}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {rarityPerks.map((perk, index) => (
                <div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-red-900 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-red-glow"
                >
                  <div className="text-red-500 mb-4">{perk.icon}</div>

                  <h5 className="text-xl font-semibold mb-3 text-white">{perk.title}</h5>

                  <p className="text-gray-300 mb-4">{perk.description}</p>

                  <p className="text-gray-400 text-sm">{perk.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ancient Gold Details */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-8 border border-red-700">
              <h4 className="text-2xl font-bold text-center mb-6 text-red-500">
                {t("token.details.title")}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold text-white mb-4">
                    {t("token.details.1.title")}
                  </h5>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{t("token.details.1.1")}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{t("token.details.1.2")}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{t("token.details.1.3")}</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-white mb-4">
                    {t("token.details.2.title")}
                  </h5>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{t("token.details.2.1")}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{t("token.details.2.2")}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{t("token.details.2.3")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Shared Perks */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-center mb-8 text-red-500">
              {t("token.holders.title")}
            </h4>

            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-red-900">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sharedPerks.map((perk, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Factions */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-center mb-8 text-red-500">
              {t("token.factions.title")}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {factions.map((faction, index) => (
                <div
                  key={index}
                  className={`group bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-red-900 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-red-glow text-center`}
                >
                  {/* <div className="text-4xl mb-4">{faction.icon}</div> */}
                  <img
                    src={faction.icon}
                    alt={faction.name}
                    className={`h-24 mx-auto ${
                      faction.name === "Extraneus Mercenarius" ? "p-3" : ""
                    }`}
                  />

                  <h5
                    className={`text-xl font-bold mb-3 bg-gradient-to-r ${faction.color} bg-clip-text text-transparent`}
                  >
                    {faction.name}
                  </h5>

                  <p className="text-gray-300 text-sm">{faction.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Collection Summary */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-8 border border-red-700">
              <h4 className="text-2xl font-bold mb-4 text-red-500">{t("token.og.title")}</h4>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">{t("token.og.description")}</p>
              <div className="inline-flex items-center space-x-4 bg-black/50 rounded-xl p-4 border border-red-900">
                <Crown className="w-6 h-6 text-red-500" />
                <span className="text-white font-semibold">{t("token.og.badge")}</span>
                <Crown className="w-6 h-6 text-red-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
