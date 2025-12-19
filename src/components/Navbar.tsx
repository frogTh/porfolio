import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navKeys = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      for (const section of [...navKeys].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-zinc-900' : ''
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold">
            <span className="gradient-text">thang</span>
            <span className="text-zinc-600">.dev</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navKeys.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === key
                    ? 'text-cyan-400'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {t(`nav.${key}`)}
                {activeSection === key && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-cyan-500 to-purple-500"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Language Switcher + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 text-sm border border-zinc-700 text-zinc-400 rounded-lg hover:border-purple-500/50 hover:text-purple-400 transition-all"
            >
              <span className={i18n.language === 'en' ? 'text-purple-400 font-semibold' : ''}>EN</span>
              <span className="text-zinc-600">/</span>
              <span className={i18n.language === 'vi' ? 'text-purple-400 font-semibold' : ''}>VI</span>
            </button>
            <a
              href="/Resume-ThangPHQ.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all"
            >
              {t('hero.downloadCV')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505] border-t border-zinc-900"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navKeys.map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-lg ${
                    activeSection === key
                      ? 'text-cyan-400'
                      : 'text-zinc-400'
                  }`}
                >
                  {t(`nav.${key}`)}
                </a>
              ))}
              {/* Mobile Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="w-full mt-2 py-3 text-center border border-zinc-700 text-zinc-400 rounded-lg"
              >
                {i18n.language === 'en' ? '🇺🇸 EN → 🇻🇳 VI' : '🇻🇳 VI → 🇺🇸 EN'}
              </button>
              <a
                href="/Resume-ThangPHQ.pdf"
                download
                className="block mt-4 text-center py-3 border border-cyan-500/50 text-cyan-400 rounded-lg"
              >
                {t('hero.downloadCV')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
