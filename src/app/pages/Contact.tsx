import { motion } from 'motion/react';
import { Mail, MessageCircle, Phone, CheckCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiRequest } from '@/app/utils/auth';
import { useTranslation } from 'react-i18next';

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: any) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

export function Contact() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [turnstileWidgetId, setTurnstileWidgetId] = useState<string | null>(null);

  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;
    if (!siteKey) {
      setError(t('pages.contact.turnstileSiteKeyNotConfigured'));
      return;
    }

    let cancelled = false;
    let intervalId: number | null = null;

    const init = () => {
      if (cancelled) return;
      if (!turnstileContainerRef.current) return;
      if (!window.turnstile) return;
      if (turnstileWidgetId) return;

      const id = window.turnstile.render(turnstileContainerRef.current, {
        sitekey: siteKey,
        callback: (token: string) => setCaptchaToken(token),
        'expired-callback': () => setCaptchaToken(null),
        'error-callback': () => setCaptchaToken(null),
      });

      setTurnstileWidgetId(id);
    };

    init();
    intervalId = window.setInterval(init, 200);

    return () => {
      cancelled = true;
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [turnstileWidgetId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!captchaToken) {
      setError(t('pages.contact.captchaRequired'));
      return;
    }

    setIsSubmitting(true);

    try {
      await apiRequest('/api/requests', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          message,
          captchaToken,
        }),
      });

      setIsSubmitted(true);

      if (window.turnstile && turnstileWidgetId) {
        window.turnstile.reset(turnstileWidgetId);
      }

      setCaptchaToken(null);
      setName('');
      setEmail('');
      setMessage('');

      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('pages.contact.failedToSubmitRequest'));
      if (window.turnstile && turnstileWidgetId) {
        window.turnstile.reset(turnstileWidgetId);
      }
      setCaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
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
            {t('pages.contact.title')}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('pages.contact.subtitle')}
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
                {t('pages.contact.emailUs')}
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
                {t('pages.contact.address')}
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
                {t('pages.contact.callUs')}
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
              {t('pages.contact.formTitle')}
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                  {t('pages.contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#39FF14]/40 transition-all"
                  placeholder={t('pages.contact.namePlaceholder')}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  {t('pages.contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#39FF14]/40 transition-all"
                  placeholder={t('pages.contact.emailPlaceholder')}
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  {t('pages.contact.message')}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#39FF14]/40 transition-all resize-none"
                  placeholder={t('pages.contact.messagePlaceholder')}
                  required
                />
              </div>

              <div className="flex justify-center">
                <div ref={turnstileContainerRef} />
              </div>

              {error && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-[#39FF14] to-[#1E9BFF] text-black hover:shadow-[0_0_40px_rgba(57,255,20,0.5)] transition-all duration-300 disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? t('pages.contact.sending') : t('pages.contact.send')}
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
                  {t('pages.contact.successTitle')}
                </h3>
                <p className="text-center text-gray-300">
                  {t('pages.contact.successText')}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}