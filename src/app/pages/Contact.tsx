import { motion } from 'motion/react';
import { Mail, MessageCircle, Phone, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Show success message for 3 seconds, then navigate to home
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

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
            Let's Start a Conversation
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to build something meaningful together? Get in touch with Omni Links.
          </motion.p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-[#39FF14]/20 to-[#1E9BFF]/20 flex items-center justify-center">
                <Mail className="w-8 h-8 text-[#39FF14]" />
              </div>
              <h3 className="mb-3 text-white" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                Email Us
              </h3>
              <p className="text-gray-400">
                contact@omnilinks.tn
              </p>
            </motion.div>

            {/* Message */}
            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-[#39FF14]/20 to-[#1E9BFF]/20 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-[#39FF14]" />
              </div>
              <h3 className="mb-3 text-white" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                Address
              </h3>
              <p className="text-gray-400">
                Immeuble TAMAYOUZ A11<br />
                Centre Urbain Nord, El Menzah<br />
                Tunis 1082
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-[#39FF14]/20 to-[#1E9BFF]/20 flex items-center justify-center">
                <Phone className="w-8 h-8 text-[#39FF14]" />
              </div>
              <h3 className="mb-3 text-white" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                Call Us
              </h3>
              <p className="text-gray-400">
                <a href="tel:+21655618060" className="hover:text-[#39FF14] transition-colors">
                  55 618 060
                </a>
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="max-w-2xl mx-auto p-10 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2
              className="mb-8 text-center bg-gradient-to-r from-[#39FF14] to-[#1E9BFF] bg-clip-text text-transparent"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', lineHeight: 1.2, fontWeight: 700 }}
            >
              Send Us a Message
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#39FF14]/40 transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#39FF14]/40 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#39FF14]/40 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-[#39FF14] to-[#1E9BFF] text-black hover:shadow-[0_0_40px_rgba(57,255,20,0.5)] transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                className="mt-6 p-6 rounded-xl bg-gradient-to-br from-[#39FF14]/10 to-[#1E9BFF]/10 border border-[#39FF14]/30"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#39FF14] to-[#1E9BFF] flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-black" />
                  </div>
                </div>
                <h3 className="text-center text-white mb-2" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  Thank You for Trusting Us!
                </h3>
                <p className="text-center text-gray-300">
                  We've received your message and will contact you as soon as possible.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}