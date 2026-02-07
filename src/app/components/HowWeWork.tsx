import { motion } from 'motion/react';
import { Search, Pencil, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discover',
    description: 'Understanding vision, challenges, and long-term goals.',
  },
  {
    icon: Pencil,
    number: '02',
    title: 'Design',
    description: 'Structuring platforms, systems, and user experiences.',
  },
  {
    icon: Code,
    number: '03',
    title: 'Build',
    description: 'Developing, integrating, and testing reliable solutions.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Scale',
    description: 'Optimizing, automating, and expanding for sustainable growth.',
  },
];

export function HowWeWork() {
  return (
    <section id="how-we-work" className="relative py-24 px-6 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
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
            How We Work
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Connecting Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#39FF14]/30 to-transparent z-0" />
              )}

              <div className="relative z-10">
                {/* Number Badge */}
                <div className="mb-4 text-[#39FF14]/40" style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1 }}>
                  {step.number}
                </div>

                {/* Icon Container */}
                <motion.div
                  className="mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-[#39FF14]/20 to-[#1E9BFF]/20 border border-[#39FF14]/20 flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 0 30px rgba(57,255,20,0.4)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className="w-9 h-9 text-[#39FF14]" />
                </motion.div>

                {/* Title */}
                <h3 className="mb-3 text-white" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}