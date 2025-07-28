import React, { useContext, useState } from 'react';
import { LanguageContext, NavigationContext } from '../App';
import { Menu, X, Globe, ExternalLink } from 'lucide-react';

const Navigation: React.FC = () => {
  const { language, setLanguage, t } = useContext(LanguageContext);
  const { currentPage, setCurrentPage } = useContext(NavigationContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDarkPitchClick = () => {
    window.open('https://www.canva.com/design/DAGt52im6fM/sjc3Y_mm5hE6XF4o-67Cdg/view?utm_content=DAGt52im6fM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdf120cf1f4', '_blank', 'noopener,noreferrer');
  };

  const navItems = [
    { key: 'about', section: 'about' },
    { key: 'games', section: 'rom-universe' },
    { key: 'token', section: 'token' },
    { key: 'roadmap', section: 'roadmap' },
    { key: 'contact', section: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={handleLogoClick}
              className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent hover:from-red-400 hover:to-red-600 transition-all duration-300"
            >
              IDS
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.section)}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-red-glow hover:bg-red-900/20"
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Right side controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-red-glow hover:bg-red-900/20"
              >
                <Globe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
              </button>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-black rounded-md shadow-lg border border-red-900 shadow-red-glow">
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsLanguageOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm transition-all duration-300 hover:bg-red-900/20 hover:shadow-red-glow ${
                      language === 'en' ? 'text-red-400' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('es');
                      setIsLanguageOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm transition-all duration-300 hover:bg-red-900/20 hover:shadow-red-glow ${
                      language === 'es' ? 'text-red-400' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    ES
                  </button>
                </div>
              )}
            </div>

            {/* The Dark Pitch Button */}
            <button
              onClick={handleDarkPitchClick}
              className="flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-red-glow bg-red-600 hover:bg-red-700 text-white border border-red-500 hover:border-red-400"
            >
              {t('nav.darkpitch')}
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 transition-all duration-300 hover:shadow-red-glow hover:bg-red-900/20 rounded-md"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-red-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.section)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 hover:shadow-red-glow hover:bg-red-900/20"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
            <div className="border-t border-red-900 pt-2 mt-2">
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-gray-300" />
                  <button
                    onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                    className="text-gray-300 hover:text-white text-sm transition-all duration-300 hover:shadow-red-glow"
                  >
                    {language === 'en' ? 'Español' : 'English'}
                  </button>
                </div>
                <button
                  onClick={handleDarkPitchClick}
                  className="flex items-center px-3 py-1 rounded text-sm transition-all duration-300 hover:shadow-red-glow bg-red-600 hover:bg-red-700 text-white border border-red-500 hover:border-red-400"
                >
                  {t('nav.darkpitch')}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
