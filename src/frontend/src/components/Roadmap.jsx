import { CheckCircle, Circle, Clock } from "lucide-react";
import React, { useContext } from "react";

import { LanguageContext } from "../App";

const Roadmap = () => {
  const { t } = useContext(LanguageContext);

  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      status: "completed",
      date: "Q1 2024",
      milestones: [
        "KernNetz SDK Development",
        "Core Team Assembly",
        "Initial Funding Secured",
        "Technical Architecture Design",
      ],
    },
    {
      phase: "Phase 2",
      title: "Development",
      status: "in-progress",
      date: "Q2-Q3 2024",
      milestones: [
        "First Game Prototype",
        "Cross-chain Integration",
        "NFT Asset Streaming",
        "Beta Testing Program",
      ],
    },
    {
      phase: "Phase 3",
      title: "Launch",
      status: "upcoming",
      date: "Q4 2024",
      milestones: [
        "AGLD Token Launch",
        "Genesis Collection Drop",
        "First Game Release",
        "Community Building",
      ],
    },
    {
      phase: "Phase 4",
      title: "Expansion",
      status: "upcoming",
      date: "Q1-Q2 2025",
      milestones: [
        "Multi-Game Ecosystem",
        "Strategic Partnerships",
        "Mobile App Launch",
        "Global Marketing Campaign",
      ],
    },
    {
      phase: "Phase 5",
      title: "Ecosystem",
      status: "upcoming",
      date: "Q3-Q4 2025",
      milestones: [
        "Full ROM Universe",
        "DAO Governance",
        "Developer Tools",
        "Exit Strategy Options",
      ],
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-400" />;
      case "in-progress":
        return <Clock className="w-6 h-6 text-red-500" />;
      default:
        return <Circle className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "border-green-400 bg-green-900/20";
      case "in-progress":
        return "border-red-500 bg-red-900/20";
      default:
        return "border-gray-600 bg-gray-900/20";
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            {t("roadmap.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("roadmap.subtitle")}</p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-red-800 transform -translate-y-1/2" />

            <div className="flex justify-between items-center">
              {roadmapPhases.map((phase, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  {/* Timeline dot */}
                  <div
                    className={`w-4 h-4 rounded-full border-4 ${getStatusColor(phase.status)} mb-4`}
                  />

                  {/* Phase card */}
                  <div
                    className={`w-64 p-6 rounded-xl border backdrop-blur-sm ${getStatusColor(
                      phase.status
                    )} transform hover:scale-105 transition-all duration-300`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-red-500">{phase.phase}</span>
                      {getStatusIcon(phase.status)}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{phase.date}</p>

                    <ul className="space-y-2">
                      {phase.milestones.map((milestone, mIndex) => (
                        <li key={mIndex} className="flex items-start text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                          {milestone}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {roadmapPhases.map((phase, index) => (
            <div key={index} className="relative">
              {/* Connecting line */}
              {index < roadmapPhases.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-red-600 to-red-800" />
              )}

              <div className="flex items-start">
                {/* Timeline dot */}
                <div
                  className={`w-12 h-12 rounded-full border-4 ${getStatusColor(
                    phase.status
                  )} flex items-center justify-center mr-4 flex-shrink-0`}
                >
                  {getStatusIcon(phase.status)}
                </div>

                {/* Phase content */}
                <div
                  className={`flex-1 p-6 rounded-xl border backdrop-blur-sm ${getStatusColor(
                    phase.status
                  )}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-red-500">{phase.phase}</span>
                    <span className="text-sm text-gray-400">{phase.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>

                  <ul className="space-y-2">
                    {phase.milestones.map((milestone, mIndex) => (
                      <li key={mIndex} className="flex items-start text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                        {milestone}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
