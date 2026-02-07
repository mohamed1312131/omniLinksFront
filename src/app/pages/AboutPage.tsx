import { motion } from 'motion/react';
import { About } from '@/app/components/About';
import { TechWithSoul } from '@/app/components/TechWithSoul';
import { useNavigate } from 'react-router-dom';

export function AboutPage() {
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
            About Us
          </motion.h1>
        </div>
      </section>

      <About />
      <TechWithSoul />

      {/* CTA Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="mb-6 bg-gradient-to-r from-[#39FF14] to-[#1E9BFF] bg-clip-text text-transparent"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, fontWeight: 700 }}
            >
              Let's build something meaningful — together
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Start a conversation with Omni Links.
            </p>
            <motion.button
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#39FF14] to-[#1E9BFF] text-black flex items-center gap-2 mx-auto hover:shadow-[0_0_40px_rgba(57,255,20,0.5)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
