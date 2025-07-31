import { ExternalLink, Heart } from "lucide-react";
import React, { useContext } from "react";

import { LanguageContext } from "../App";

const Footer = () => {
  const { t } = useContext(LanguageContext);

  const footerLinks = {
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Roadmap", href: "#roadmap" },
        { name: "Careers", href: "#" },
        { name: "Press Kit", href: "#" },
      ],
    },
    games: {
      title: "Games",
      links: [
        { name: "ROM Universe", href: "#rom-universe" },
        { name: "Dark Realms", href: "#" },
        { name: "Cyber Nexus", href: "#" },
        { name: "Mystic Cards", href: "#" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "KernNetz SDK", href: "#" },
        { name: "Developer Portal", href: "#" },
        { name: "API Reference", href: "#" },
      ],
    },
    community: {
      title: "Community",
      links: [
        { name: "Discord", href: "https://discord.gg/idarkstudio" },
        { name: "Twitter", href: "https://twitter.com/idarkstudio" },
        { name: "Telegram", href: "https://t.me/idarkstudio" },
        { name: "LinkedIn", href: "https://linkedin.com/company/idarkstudio" },
      ],
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                IDS
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Latin America's premier Web3 game studio creating fully on-chain gaming experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/idarkstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                🐦
              </a>
              <a
                href="https://discord.gg/idarkstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                💬
              </a>
              <a
                href="https://t.me/idarkstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                📱
              </a>
              <a
                href="https://linkedin.com/company/idarkstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                💼
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                      >
                        {link.name}
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                        onClick={(e) => {
                          if (link.href.startsWith("#")) {
                            e.preventDefault();
                            const element = document.getElementById(link.href.substring(1));
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth" });
                            }
                          }
                        }}
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-red-900 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest news about ROM Universe and Web3 gaming
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-900 border border-red-900 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-r-lg hover:from-red-700 hover:to-red-900 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-red-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <span>
                © {new Date().getFullYear()}. {t("footer.built")}{" "}
              </span>
              <Heart className="w-4 h-4 mx-1 text-red-400" />
            </div>

            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="hover:text-white transition-colors flex items-center"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
