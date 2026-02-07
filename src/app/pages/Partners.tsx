import { motion } from 'motion/react';
import { Handshake } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Partners() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="mb-6 bg-gradient-to-r from-[#39FF14] to-[#1E9BFF] bg-clip-text text-transparent"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', lineHeight: 1.1, fontWeight: 700 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('pages.partners.title')}
          </motion.h1>
        </div>
      </section>

      {/* Placeholder Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Icon */}
            <div className="mb-8 mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-[#39FF14]/20 to-[#1E9BFF]/20 border border-[#39FF14]/20 flex items-center justify-center">
              <Handshake className="w-12 h-12 text-[#39FF14]" />
            </div>

            {/* Content */}
            <h2
              className="mb-6 bg-gradient-to-r from-[#39FF14] to-[#1E9BFF] bg-clip-text text-transparent"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, fontWeight: 700 }}
            >
              {t('pages.partners.heading')}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
              {t('pages.partners.text')}
            </p>
            <motion.button
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#39FF14] to-[#1E9BFF] text-black flex items-center gap-2 mx-auto hover:shadow-[0_0_40px_rgba(57,255,20,0.5)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
            >
              {t('pages.partners.button')}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
