import { motion } from 'motion/react';
import { Mail, Linkedin, Facebook, Instagram, MapPin, Phone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/Gemini_Generated_Image_8fik28fik28fik28-removebg-preview.png';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.contactUs'), path: '/contact' },
  ];

  return (
    <footer id="contact" className="relative py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="OmniLinks" className="h-10 w-auto" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white mb-4" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-[#39FF14] text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white mb-4" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
              {t('footer.contactInfo')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#39FF14] mt-1 flex-shrink-0" />
                <div className="text-white/60 text-sm leading-relaxed">
                  <p className="text-white/80 font-medium mb-1">NSBS INVEST & CONSULTING</p>
                  <p>Immeuble TAMAYOUZ A11</p>
                  <p>Centre Urbain Nord, El Menzah</p>
                  <p>Tunis 1082</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#39FF14] flex-shrink-0" />
                <a href="tel:+21655618060" className="text-white/60 text-sm hover:text-[#39FF14] transition-colors">
                  55 618 060
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-[#39FF14] flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  MF: 1959722M
                </span>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white mb-4" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
              {t('footer.connectWithUs')}
            </h4>
            <p className="text-white/60 text-sm mb-4">
              {t('footer.followUs')}
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#39FF14]/40 transition-all"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(57,255,20,0.3)' }}
              >
                <Facebook className="w-4 h-4 text-[#1877F2]" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#39FF14]/40 transition-all"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(57,255,20,0.3)' }}
              >
                <Instagram className="w-4 h-4 text-[#E4405F]" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#39FF14]/40 transition-all"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(57,255,20,0.3)' }}
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#39FF14]/40 transition-all"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(57,255,20,0.3)' }}
              >
                <Mail className="w-4 h-4 text-[#39FF14]" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-white/50 text-sm">
            © {currentYear} Omni Links. {t('footer.rights')}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              {t('footer.privacyPolicy')}
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              {t('footer.terms')}
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              {t('footer.legal')}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}