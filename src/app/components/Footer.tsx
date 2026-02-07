import { motion } from 'motion/react';
import { Mail, Linkedin, Twitter, MapPin, Phone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from 'figma:asset/3b116380632049ae9483c80ba65c02f33bf5b032.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'What We Do', path: '/what-we-do' },
    { label: 'Platforms', path: '/admindashboard' },
    { label: 'About', path: '/about' },
    { label: 'Partners', path: '/partners' },
    { label: 'Contact', path: '/contact' },
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
              <span className="text-xl text-white font-bold">OmniLinks</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Ready to build something meaningful? Start a conversation with OmniLinks.
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
              Quick Links
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
              Contact Info
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
              Connect With Us
            </h4>
            <p className="text-white/60 text-sm mb-4">
              Follow us on social media
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#39FF14]/40 transition-all"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(57,255,20,0.3)' }}
              >
                <Mail className="w-4 h-4 text-white/80" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#39FF14]/40 transition-all"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(57,255,20,0.3)' }}
              >
                <Linkedin className="w-4 h-4 text-white/80" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#39FF14]/40 transition-all"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(57,255,20,0.3)' }}
              >
                <Twitter className="w-4 h-4 text-white/80" />
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
            © {currentYear} Omni Links. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Legal
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}