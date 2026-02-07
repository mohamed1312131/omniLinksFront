import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Languages } from 'lucide-react';
import logo from 'figma:asset/3b116380632049ae9483c80ba65c02f33bf5b032.png';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'What We Do', path: '/what-we-do' },
    { label: 'About', path: '/about' },
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
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img src={logo} alt="OmniLinks" className="h-14 w-auto" />
              <span className="text-2xl tracking-tight font-bold">OmniLinks</span>
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
            {/* Language Selector */}
            <div className="relative">
              <motion.button
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-sm text-gray-300 hover:text-white hover:border-[#39FF14]/40 transition-all duration-300"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Languages className="w-4 h-4" />
                <span>{selectedLanguage}</span>
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
                        setSelectedLanguage('English');
                        setLanguageMenuOpen(false);
                      }}
                    >
                      English
                    </button>
                    <button
                      className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-[#39FF14]/10 transition-colors"
                      onClick={() => {
                        setSelectedLanguage('Français');
                        setLanguageMenuOpen(false);
                      }}
                    >
                      Français
                    </button>
                    <button
                      className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-[#39FF14]/10 transition-colors"
                      onClick={() => {
                        setSelectedLanguage('العربية');
                        setLanguageMenuOpen(false);
                      }}
                    >
                      العربية
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <motion.button
              className="px-6 py-2 rounded-full bg-black border-2 border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}