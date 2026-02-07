import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function TechWithSoul() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <motion.div
            className="mb-8 mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-[#39FF14]/20 to-[#1E9BFF]/20 border border-[#39FF14]/20 flex items-center justify-center"
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 0 40px rgba(57,255,20,0.4)'
            }}
            transition={{ duration: 0.3 }}
          >
            <Heart className="w-12 h-12 text-[#39FF14]" />
          </motion.div>

          {/* Title */}
          <h2
            className="mb-6 bg-gradient-to-r from-[#39FF14] to-[#1E9BFF] bg-clip-text text-transparent"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.2, fontWeight: 700 }}
          >
            Tech with Soul
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            At Omni Links, technology is not just about code or systems — it's about people.
            <br />
            <br />
            We combine technical expertise with human insight to create ethical, sustainable, 
            and long-lasting digital solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}