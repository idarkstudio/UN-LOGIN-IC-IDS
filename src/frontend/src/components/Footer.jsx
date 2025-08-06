import { DiscordIcon, LinkedinIcon, XIcon } from "../utils/svgs";
import React, { useContext } from "react";

import { ExternalLink } from "lucide-react";
import { LanguageContext } from "../App";

const Footer = () => {
  const { t } = useContext(LanguageContext);

  const footerLinks = {
    company: {
      title: t("footer.nav.1.title"),
      links: [
        { name: t("footer.nav.1.1"), href: "#about" },
        // { name: t("footer.nav.1.2"), href: "#roadmap" },
        // { name: t("footer.nav.1.3"), href: "#" },
        // { name: t("footer.nav.1.4"), href: "#" },
      ],
    },
    games: {
      title: t("footer.nav.2.title"),
      links: [
        { name: t("footer.nav.2.1"), href: "#rom-universe" },
        // { name: t("footer.nav.2.2"), href: "#" },
        // { name: t("footer.nav.2.3"), href: "#" },
        // { name: t("footer.nav.2.4"), href: "#" },
      ],
    },
    // resources: {
    //   title: "Resources",
    //   links: [
    //     { name: "Documentation", href: "#" },
    //     { name: "KernNetz SDK", href: "#" },
    //     { name: "Developer Portal", href: "#" },
    //     { name: "API Reference", href: "#" },
    //   ],
    // },
    community: {
      title: t("footer.nav.3.title"),
      links: [
        { name: "Discord", href: "https://discord.gg/zHez7fUBE8" },
        { name: "X", href: "https://twitter.com/idarkstudio" },
        // { name: "Telegram", href: "https://t.me/idarkstudio" },
        { name: "LinkedIn", href: "https://www.linkedin.com/company/inside-dark-studio/" },
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
              {/* <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                IDS
              </div> */}
              <img src="/images/ids.png" alt="Inside Dark Studio" className="h-16" />
            </div>
            <p className="text-gray-400 text-sm mb-4">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/idarkstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <XIcon className="w-6" />
              </a>
              <a
                href="https://discord.gg/zHez7fUBE8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors grid place-items-center"
              >
                <DiscordIcon className="w-6" />
              </a>
              {/* <a
                href="https://t.me/idarkstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <img src="/images/rrss/tg.png" alt="Telegram" className="h-6" />
              </a> */}
              <a
                href="https://www.linkedin.com/company/inside-dark-studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <LinkedinIcon className="w-6" />
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
        {/* <div className="border-t border-red-900 pt-8 mb-8">
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
        </div> */}

        {/* Bottom Footer */}
        <div className="border-t border-red-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <span>
                © {new Date().getFullYear()}. {t("footer.built")}{" "}
              </span>
            </div>

            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              {/* <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a> */}
              <button
                onClick={scrollToTop}
                className="hover:text-white transition-colors flex items-center"
              >
                {t("footer.top")} ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
