import { motion } from 'motion/react';
import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { apiRequest, setAdminToken } from '@/app/utils/auth';

type LoginResponse = {
  success: boolean;
  message?: string;
  data?: {
    email: string;
    token: string;
  };
  error?: string;
};

export function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = useMemo(() => {
    const state = location.state as { from?: string } | null;
    return state?.from || '/admindashboard';
  }, [location.state]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const result = await apiRequest<LoginResponse>('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      const token = result?.data?.token;
      if (!token) {
        throw new Error('Login failed');
      }

      setAdminToken(token);
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-lg mx-auto">
        <motion.div
          className="p-10 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="mb-2 bg-gradient-to-r from-[#39FF14] to-[#1E9BFF] bg-clip-text text-transparent"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.1, fontWeight: 700 }}
          >
            Admin Login
          </h1>
          <p className="text-gray-400 mb-8">Sign in to access the dashboard.</p>

          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#39FF14]/40 transition-all"
                placeholder="admin@omnilinks.tn"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-gray-400 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#39FF14]/40 transition-all"
                placeholder="Your password"
                required
              />
            </div>

            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200">
                {error}
              </div>
            )}

            <motion.button
              type="submit"
              className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-[#39FF14] to-[#1E9BFF] text-black hover:shadow-[0_0_40px_rgba(57,255,20,0.5)] transition-all duration-300 disabled:opacity-70"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
