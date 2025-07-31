import { ArrowRight, Code, Gamepad2, Layers, Zap } from "lucide-react";
import { LanguageContext, NavigationContext } from "../App";
import React, { useContext } from "react";

const About = () => {
  const { t } = useContext(LanguageContext);
  const { setCurrentPage } = useContext(NavigationContext);

  const highlights = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: t("about.highlight1"),
      description: "Seamless interoperability across multiple blockchains",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: t("about.highlight2"),
      description: "Advanced SDK for Web3 game development",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: t("about.highlight3"),
      description: "Real-time NFT asset streaming technology",
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: t("about.highlight4"),
      description: "Complete decentralization with on-chain logic",
    },
  ];

  const handleAboutUsClick = () => {
    setCurrentPage("about-us");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            {t("about.title")}
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left column - Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl border border-red-900 hover:border-red-500 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop"
                alt="Inside Dark Studio"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-red-900">
                  <h3 className="text-white font-semibold mb-1">Inside Dark Studio</h3>
                  <p className="text-gray-300 text-sm">Latin America's Web3 Gaming Pioneer</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-red-600 to-red-800 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-red-500 to-red-700 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
          </div>

          {/* Right column - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">{t("about.description")}</p>
              <p className="text-gray-400 leading-relaxed mb-8">
                We combine cutting-edge blockchain technology with immersive gaming experiences,
                creating a new paradigm for digital entertainment in Latin America and beyond.
              </p>

              {/* Prominent About Us Button */}
              <button
                onClick={handleAboutUsClick}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-105 hover:shadow-red-glow border border-red-500 hover:border-red-400 font-semibold text-lg"
              >
                {t("about.cta")}
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Key highlights in a 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group relative bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-red-900 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-red-glow cursor-pointer"
                >
                  <div className="text-red-500 mb-4 group-hover:text-red-400 transition-colors">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-red-300 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {highlight.description}
                  </p>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-800/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            {/* Additional info */}
            <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-xl p-6 border border-red-700">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse" />
                <h4 className="text-red-500 font-semibold">Our Mission</h4>
              </div>
              <p className="text-gray-300 text-sm">
                To revolutionize the gaming industry by creating truly decentralized, player-owned
                gaming experiences that empower communities and foster innovation across Latin
                America's vibrant gaming ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
