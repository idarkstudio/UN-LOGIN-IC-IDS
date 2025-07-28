import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { Code, Layers, Zap, Shield, Globe, Cpu } from 'lucide-react';

const Technology: React.FC = () => {
  const { t } = useContext(LanguageContext);

  const technologies = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'KernNetz SDK',
      description: 'Advanced game development framework for Web3 integration',
      features: ['Cross-chain compatibility', 'Real-time synchronization', 'Modular architecture'],
      color: 'from-red-500 to-red-700',
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Cross-chain Bridges',
      description: 'Seamless asset transfer between different blockchain networks',
      features: ['Multi-chain support', 'Low transaction fees', 'Instant settlements'],
      color: 'from-red-600 to-red-800',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '4K Streaming',
      description: 'High-quality game streaming with minimal latency',
      features: ['Ultra-low latency', 'Adaptive bitrate', 'Global CDN'],
      color: 'from-red-400 to-red-600',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Layer',
      description: 'Enterprise-grade security for all gaming operations',
      features: ['End-to-end encryption', 'Smart contract audits', 'Anti-cheat systems'],
      color: 'from-red-500 to-red-700',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Matchmaking',
      description: 'Intelligent player matching and lobby management',
      features: ['Skill-based matching', 'Regional optimization', 'Fair play algorithms'],
      color: 'from-red-600 to-red-800',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Edge Computing',
      description: 'Distributed computing for optimal game performance',
      features: ['Edge node network', 'Dynamic scaling', 'Regional processing'],
      color: 'from-red-400 to-red-600',
    },
  ];

  const techStack = [
    { category: 'Blockchain', technologies: ['Internet Computer', 'Ethereum', 'Polygon', 'Solana'] },
    { category: 'Backend', technologies: ['Motoko', 'Rust', 'Node.js', 'GraphQL'] },
    { category: 'Frontend', technologies: ['React', 'TypeScript', 'WebGL', 'Three.js'] },
    { category: 'Infrastructure', technologies: ['IPFS', 'Cloudflare', 'AWS', 'Docker'] },
    { category: 'Gaming', technologies: ['Unity', 'Unreal Engine', 'WebRTC', 'WebAssembly'] },
    { category: 'AI/ML', technologies: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP'] },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            {t('tech.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('tech.subtitle')}
          </p>
        </div>

        {/* Core Technologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-red-900 hover:border-red-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${tech.color} text-white mb-4`}>
                {tech.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-red-300 transition-colors">
                {tech.title}
              </h3>
              
              <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                {tech.description}
              </p>
              
              <ul className="space-y-2">
                {tech.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start text-sm">
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${tech.color} rounded-full mt-2 mr-2 flex-shrink-0`} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-red-900 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Technology Stack
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold mb-4 text-red-500">
                  {stack.category}
                </h4>
                <div className="space-y-2">
                  {stack.technologies.map((tech, tIndex) => (
                    <div
                      key={tIndex}
                      className="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-sm hover:bg-gray-800 transition-colors"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Advantages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-8 border border-red-700">
            <h3 className="text-2xl font-bold mb-6 text-red-500">
              Technical Advantages
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-gray-300">100% on-chain game logic ensures true decentralization</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Cross-chain interoperability for maximum reach</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Real-time NFT streaming for dynamic gameplay</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Scalable infrastructure built for millions of users</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-8 border border-red-700">
            <h3 className="text-2xl font-bold mb-6 text-red-500">
              Innovation Highlights
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-gray-300">No external capital required for development</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Proprietary KernNetz SDK for rapid game development</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Advanced AI-powered matchmaking and anti-cheat</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Edge computing for ultra-low latency gaming</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
