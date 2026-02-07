import { motion } from 'motion/react';
import { Target, Eye, Compass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import omniMarketLogo from 'figma:asset/089d0c59ea97d542d6425bcc74497222f9b56651.png';
import omniCareLogo from 'figma:asset/1c8626a24a7f1fd1d942519d971825008aed15fa.png';
import omniSchoolLogo from 'figma:asset/cfc3575040f39d62c270fba77eea555896b704e8.png';

export function About() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sections = [
    {
      icon: Target,
      title: 'Our Story',
      description: 'Omni Links was founded on a simple belief: technology should simplify life — not complicate it. We help organizations move away from fragmented systems and short-term solutions by building connected digital ecosystems designed for clarity, scalability, and real impact.',
      gradientFrom: 'from-[#39FF14]/20',
      gradientTo: 'to-[#1E9BFF]/20',
      iconColor: 'text-[#39FF14]',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'Our vision is to build and support digital ventures that create real value across borders, industries, and generations — shaping a more efficient and human-centered digital future.',
      gradientFrom: 'from-[#1E9BFF]/20',
      gradientTo: 'to-[#39FF14]/20',
      iconColor: 'text-[#1E9BFF]',
    },
    {
      icon: Compass,
      title: 'Our Mission',
      description: 'We build digital ventures by connecting technology, people, and long-term thinking — where innovation is driven by purpose, not short-term gains. This is what we call Tech with Soul.',
      gradientFrom: 'from-[#39FF14]/20',
      gradientTo: 'to-[#1E9BFF]/20',
      iconColor: 'text-[#39FF14]',
    },
  ];

  const projects = [
    {
      logo: omniMarketLogo,
      name: 'OmniMarket',
      description: 'A cutting-edge digital marketplace platform connecting buyers and sellers in a seamless ecosystem',
    },
    {
      logo: omniCareLogo,
      name: 'OmniCare',
      description: 'Comprehensive healthcare platform delivering personalized care and wellness solutions',
    },
    {
      logo: omniSchoolLogo,
      name: 'Omni School',
      description: 'Modern education platform transforming learning through innovative digital solutions',
    },
  ];

  return (
    <section id="about" className="relative py-24 px-6">
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
            About Omni Links
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We build digital ventures by connecting technology, people, and long-term thinking
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm cursor-pointer overflow-hidden hover:border-[#39FF14]/40 hover:shadow-[0_0_30px_rgba(57,255,20,0.15)] transition-all duration-300"
              style={{ minHeight: '280px' }}
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
              <div className="relative z-10 p-10 h-full flex flex-col">
                {/* Icon */}
                <div className={`mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${section.gradientFrom} ${section.gradientTo} flex items-center justify-center hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all duration-300`}>
                  <section.icon className={`w-8 h-8 ${section.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-white transition-all duration-300" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
                  {section.title}
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
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {section.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Project Section */}
        <motion.div
          className="mt-20 text-center"
          id="partners"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="mb-12 text-white/90" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
            Our Current Projects
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-[#39FF14]/40 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(57,255,20,0.2)'
                }}
                onClick={() => navigate('/contact')}
              >
                <img 
                  src={project.logo} 
                  alt={project.name} 
                  className="h-24 w-auto mx-auto"
                />
                <p className="mt-6 text-gray-400 text-sm">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}