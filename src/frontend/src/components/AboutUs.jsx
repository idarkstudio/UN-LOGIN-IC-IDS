import { ArrowLeft, Award, ChevronRight, Lightbulb, Target, Users } from "lucide-react";
import { LanguageContext, NavigationContext } from "../App";
import React, { useContext } from "react";

import Footer from "./Footer.jsx";

const AboutUs = () => {
  const { t } = useContext(LanguageContext);
  const { setCurrentPage } = useContext(NavigationContext);

  const handleBackToHome = () => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const leadershipTeam = [
    {
      name: "Mariano Stoll",
      role: "CEO",
      description:
        "Visionary leader with extensive experience in Web3 gaming and blockchain technology",
      image: "/images/team/stoll.png",
    },
    {
      name: "Francisca Morales",
      role: "CCO",
      description: "Creative strategist driving innovative content and community engagement",
      image: "/images/team/fran.png",
    },
    {
      name: "Francisco Rappazzini",
      role: "CTO",
      description: "Technical architect behind our cutting-edge blockchain infrastructure",
      image: "/images/team/rappa.png",
    },
    {
      name: "Lautaro Prado",
      role: "Game Dev Manager",
      description: "Leading game development with expertise from top-tier gaming studios",
      image: "/images/team/lauti.jpg",
    },
    {
      name: "Lucía Mamud",
      role: "Art Manager",
      description: "Creative director shaping the visual identity of our gaming universe",
      image: "/images/team/lu.png",
    },
  ];

  const companyValues = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "Rigorous research methodologies and scholarly precision in every project",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Industry Innovation",
      description: "Battle-tested expertise from leading gaming and entertainment companies",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Vision",
      description: "Long-term thinking that shapes the future of decentralized gaming",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={handleBackToHome}
            className="group inline-flex items-center mb-8 text-gray-300 hover:text-white transition-all duration-300 hover:shadow-red-glow"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </button>

          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              {t("aboutus.title")}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t("aboutus.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Team Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-red-500 mr-4" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  {t("aboutus.team.title")}
                </h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {t("aboutus.team.description")}
              </p>
              <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-xl p-6 border border-red-700">
                <h3 className="text-xl font-semibold text-red-500 mb-4">Industry Veterans From:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {["Warner", "Blizzard", "Bandai Namco", "Nway", "Roblox", "Academia"].map(
                    (company, index) => (
                      <div
                        key={index}
                        className="text-center p-3 bg-black/50 rounded-lg border border-red-900"
                      >
                        <span className="text-gray-300 font-medium">{company}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/personajes completo.png"
                alt="Team collaboration"
                className="w-full h-80 object-cover rounded-2xl border border-red-900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-red-900">
                  <div className="text-3xl font-bold text-red-500 mb-1">30+</div>
                  <div className="text-white font-semibold">Team Members</div>
                  <div className="text-gray-300 text-sm">Across 5 Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              {t("aboutus.leadership.title")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionaries driving the future of Web3 gaming
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-red-900 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-red-glow"
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-red-900 group-hover:border-red-500 transition-colors duration-300">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full rounded-full object-cover grayscale"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-300 transition-colors">
                    {leader.name}
                  </h3>
                  <div className="text-red-500 font-semibold mb-3">{leader.role}</div>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {leader.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Vision */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-red-500">
                {t("aboutus.vision.title")}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {t("aboutus.vision.description")}
              </p>

              <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-xl p-8 border border-red-700">
                <h3 className="text-xl font-semibold text-white mb-4">Our Commitment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">
                      Pioneering fully decentralized gaming ecosystems
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">
                      Empowering players with true digital ownership
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">
                      Establishing Latin America as a Web3 gaming hub
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-red-500">
                {t("aboutus.expertise.title")}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {t("aboutus.expertise.description")}
              </p>

              <div className="space-y-6">
                {companyValues.map((value, index) => (
                  <div
                    key={index}
                    className="group bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-red-900 hover:border-red-500 transition-all duration-300 hover:shadow-red-glow"
                  >
                    <div className="flex items-start">
                      <div className="text-red-500 mr-4 group-hover:text-red-400 transition-colors">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-300 transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-12 border border-red-700">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Ready to Join the Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of the team that's redefining the future of gaming. We're always looking for
              exceptional talent to join our mission.
            </p>
            <button
              onClick={handleBackToHome}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-105 hover:shadow-red-glow border border-red-500 hover:border-red-400 font-semibold text-lg"
            >
              Explore Our Universe
              <ChevronRight className="ml-3 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
