import { motion } from 'motion/react';
import { Shield, MessageCircle, Users, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const values = [
  { icon: Shield, key: 'responsibility' },
  { icon: MessageCircle, key: 'integrity' },
  { icon: Users, key: 'respect' },
  { icon: Target, key: 'commitment' },
] as const;

export function Values() {
  const { t } = useTranslation();

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
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
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
              <p className="text-gray-400 text-sm leading-relaxed">
                {t(`values.items.${value.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}