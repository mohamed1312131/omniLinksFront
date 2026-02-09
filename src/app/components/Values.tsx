import { motion } from 'motion/react';
import { Shield, MessageCircle, Users, Target } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const values = [
  { icon: Shield, key: 'responsibility' },
  { icon: MessageCircle, key: 'integrity' },
  { icon: Users, key: 'respect' },
  { icon: Target, key: 'commitment' },
] as const;

export function Values() {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="what-we-do" className="relative py-24 px-6 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="mb-4 bg-gradient-to-r from-[#39FF14] to-[#1E9BFF] bg-clip-text text-transparent"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.2, fontWeight: 700 }}
          >
            {t('values.heading')}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('values.subheading')}
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.key}
              className="relative text-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm overflow-hidden hover:border-[#39FF14]/40 hover:shadow-[0_0_30px_rgba(57,255,20,0.15)] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={() =>
                setHoveredIndex((current) => {
                  if (current === index) return null;
                  return index;
                })
              }
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/0 to-[#1E9BFF]/0 hover:from-[#39FF14]/5 hover:to-[#1E9BFF]/5 transition-all duration-300" />

              <div className="relative z-10 p-8">
              {/* Icon Container */}
              <motion.div
                className="mb-6 mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-[#39FF14]/20 to-[#1E9BFF]/20 border border-[#39FF14]/20 flex items-center justify-center"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 0 30px rgba(57,255,20,0.4)'
                }}
                transition={{ duration: 0.3 }}
              >
                <value.icon className="w-9 h-9 text-[#39FF14]" />
              </motion.div>

                {/* Title */}
                <h3 className="mb-3 text-white" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {t(`values.items.${value.key}.title`)}
                </h3>

                {/* Description */}
                <motion.div
                  className="overflow-hidden"
                  animate={{
                    height: hoveredIndex === index ? 'auto' : 0,
                    opacity: hoveredIndex === index ? 1 : 0,
                    marginTop: hoveredIndex === index ? 16 : 0,
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t(`values.items.${value.key}.description`)}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}