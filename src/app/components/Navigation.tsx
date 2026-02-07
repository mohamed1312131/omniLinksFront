import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Languages, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/Gemini_Generated_Image_8fik28fik28fik28-removebg-preview.png';

export function Navigation() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.whatWeDo'), path: '/what-we-do' },
    { label: t('nav.about'), path: '/about' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/40 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img src={logo} alt="OmniLinks" className="h-12 md:h-16 w-auto" />
            </motion.div>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
              >
                <motion.div
                  className="relative text-sm text-gray-300 hover:text-white transition-colors cursor-pointer group"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#39FF14] to-[#1E9BFF] group-hover:w-full transition-all duration-300"
                  />
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* CTA Button */}
            <motion.button
              className="px-6 py-2 rounded-full bg-black border-2 border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
            >
              {t('nav.contactUs')}
            </motion.button>

            {/* Language Selector */}
            <div className="relative">
              <motion.button
                className="p-2 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-[#39FF14]/40 transition-all duration-300"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Languages className="w-5 h-5" />
              </motion.button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {languageMenuOpen && (
                  <motion.div
                    className="absolute right-0 top-full mt-2 min-w-[140px] bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-[#39FF14]/10 transition-colors"
                      onClick={() => {
                        void i18n.changeLanguage('en');
                        setLanguageMenuOpen(false);
                      }}
                    >
                      English
                    </button>
                    <button
                      className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-[#39FF14]/10 transition-colors"
                      onClick={() => {
                        void i18n.changeLanguage('fr');
                        setLanguageMenuOpen(false);
                      }}
                    >
                      Français
                    </button>
                    <button
                      className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-[#39FF14]/10 transition-colors"
                      onClick={() => {
                        void i18n.changeLanguage('ar');
                        setLanguageMenuOpen(false);
                      }}
                    >
                      العربية
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <div className="relative">
              <motion.button
                className="p-2 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-[#39FF14]/40 transition-all duration-300"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Languages className="w-5 h-5" />
              </motion.button>

              <AnimatePresence>
                {languageMenuOpen && (
                  <motion.div
                    className="absolute right-0 top-full mt-2 min-w-[140px] bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-[#39FF14]/10 transition-colors"
                      onClick={() => {
                        void i18n.changeLanguage('en');
                        setLanguageMenuOpen(false);
                      }}
                    >
                      English
                    </button>
                    <button
                      className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-[#39FF14]/10 transition-colors"
                      onClick={() => {
                        void i18n.changeLanguage('fr');
                        setLanguageMenuOpen(false);
                      }}
                    >
                      Français
                    </button>
                    <button
                      className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-[#39FF14]/10 transition-colors"
                      onClick={() => {
                        void i18n.changeLanguage('ar');
                        setLanguageMenuOpen(false);
                      }}
                    >
                      العربية
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              className="p-2 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-[#39FF14]/40 transition-all duration-300"
              onClick={() => {
                setLanguageMenuOpen(false);
                setMobileMenuOpen((v) => !v);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              className="absolute top-0 left-0 right-0 bg-black/95 border-b border-white/10"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-4 pt-20 pb-6">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="py-3 text-base text-gray-200 hover:text-white transition-colors">
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-6">
                  <motion.button
                    className="w-full px-6 py-3 rounded-full bg-black border-2 border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate('/contact');
                    }}
                  >
                    {t('nav.contactUs')}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}