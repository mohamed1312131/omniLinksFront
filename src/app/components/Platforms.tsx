import { motion } from 'motion/react';
import { Network, Cpu, Globe, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const platforms = [
  { icon: Network, key: 'digitalPlatforms' },
  { icon: Cpu, key: 'aiAutomation' },
  { icon: Globe, key: 'telecom' },
  { icon: TrendingUp, key: 'strategy' },
] as const;

export function Platforms() {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="platforms" className="relative py-24 px-6">
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
            {t('sections.platforms.heading')}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('sections.platforms.subheading')}
          </p>
        </motion.div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.key}
              className="relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden hover:border-[#39FF14]/40 hover:shadow-[0_0_30px_rgba(57,255,20,0.15)] transition-all duration-300"
              style={{ minHeight: '200px' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#39FF14]/0 to-[#1E9BFF]/0 hover:from-[#39FF14]/5 hover:to-[#1E9BFF]/5 transition-all duration-300" />

              {/* Card Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-[#39FF14]/20 to-[#1E9BFF]/20 flex items-center justify-center hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all duration-300">
                  <platform.icon className="w-7 h-7 text-[#39FF14]" />
                </div>

                {/* Title */}
                <h3 className="text-white transition-all duration-300" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {t(`sections.platforms.items.${platform.key}.title`)}
                </h3>

                {/* Description - Hidden by default, visible on hover */}
                <motion.div
                  className="overflow-hidden"
                  animate={{ 
                    height: hoveredIndex === index ? 'auto' : 0, 
                    opacity: hoveredIndex === index ? 1 : 0, 
                    marginTop: hoveredIndex === index ? 16 : 0 
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <p className="text-gray-400 leading-relaxed">
                    {t(`sections.platforms.items.${platform.key}.description`)}
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