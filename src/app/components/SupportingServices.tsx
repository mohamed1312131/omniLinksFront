import { motion } from 'motion/react';
import { Wifi, Building2, Printer, Wrench } from 'lucide-react';

const services = [
  {
    icon: Wifi,
    title: 'Connectivity & IT setup',
  },
  {
    icon: Building2,
    title: 'Office & business infrastructure',
  },
  {
    icon: Printer,
    title: 'Printing & hardware solutions',
  },
  {
    icon: Wrench,
    title: 'Ongoing technical support',
  },
];

export function SupportingServices() {
  return (
    <section id="supporting-services" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
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
            Supporting Services
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            In addition to our core digital offerings, we provide essential technical services 
            that ensure stable and efficient day-to-day operations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-[#39FF14]/40 transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#39FF14]/20 to-[#1E9BFF]/20 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all duration-300">
                <service.icon className="w-6 h-6 text-[#39FF14]" />
              </div>

              {/* Title */}
              <div className="flex-1 pt-1">
                <h3 className="text-white text-lg leading-relaxed">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
