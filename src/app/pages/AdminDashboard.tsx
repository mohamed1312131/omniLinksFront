import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Mail, CheckCircle, Clock, Trash2 } from 'lucide-react';
import { apiRequest } from '@/app/utils/auth';

type DashboardRequest = {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
  status: 'pending' | 'handled';
  created_at?: string;
};

type AnalyticsResponse = {
  success: boolean;
  data: {
    visitorData: Array<{ month: string; visitors: string | number }>;
    requestData: Array<{ month: string; requests: string | number }>;
    stats: {
      total_visitors: string | number;
      pending_requests: string | number;
      handled_requests: string | number;
      total_requests: string | number;
    };
  };
};

type RequestsResponse = {
  success: boolean;
  data: DashboardRequest[];
};

export function AdminDashboard() {
  const [requests, setRequests] = useState<DashboardRequest[]>([]);
  const [visitorData, setVisitorData] = useState<Array<{ month: string; visitors: number }>>([]);
  const [requestData, setRequestData] = useState<Array<{ month: string; requests: number }>>([]);
  const [totalVisitors, setTotalVisitors] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      setIsLoading(true);
      setError(null);

      try {
        const [analytics, reqs] = await Promise.all([
          apiRequest<AnalyticsResponse>('/api/analytics'),
          apiRequest<RequestsResponse>('/api/requests'),
        ]);

        if (!isMounted) return;

        setVisitorData(
          (analytics.data.visitorData || []).map((row) => ({
            month: row.month,
            visitors: Number(row.visitors) || 0,
          }))
        );

        setRequestData(
          (analytics.data.requestData || []).map((row) => ({
            month: row.month,
            requests: Number(row.requests) || 0,
          }))
        );

        setTotalVisitors(Number(analytics.data.stats?.total_visitors) || 0);
        setRequests(reqs.data || []);
      } catch (err) {
        if (!isMounted) return;
        setError(err instanceof Error ? err.message : 'Failed to load dashboard');
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleStatusChange = async (id: number, newStatus: 'pending' | 'handled') => {
    setRequests((prev) => prev.map((req) => (req.id === id ? { ...req, status: newStatus } : req)));

    try {
      await apiRequest('/api/requests/' + id + '/status', {
        method: 'PATCH',
        body: JSON.stringify({ status: newStatus }),
      });
    } catch (err) {
      setRequests((prev) => prev.map((req) => (req.id === id ? { ...req, status: newStatus === 'pending' ? 'handled' : 'pending' } : req)));
      setError(err instanceof Error ? err.message : 'Failed to update status');
    }
  };

  const handleDelete = async (id: number) => {
    const previous = requests;
    setRequests((prev) => prev.filter((req) => req.id !== id));

    try {
      await apiRequest('/api/requests/' + id, {
        method: 'DELETE',
      });
    } catch (err) {
      setRequests(previous);
      setError(err instanceof Error ? err.message : 'Failed to delete request');
    }
  };

  const pendingCount = useMemo(() => requests.filter((r) => r.status === 'pending').length, [requests]);
  const handledCount = useMemo(() => requests.filter((r) => r.status === 'handled').length, [requests]);

  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="mb-4 bg-gradient-to-r from-[#39FF14] to-[#1E9BFF] bg-clip-text text-transparent"
            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.1, fontWeight: 700 }}
          >
            Admin Dashboard
          </h1>
          <p className="text-xl text-gray-400">
            Monitor website analytics and manage contact requests
          </p>
        </motion.div>
 
        {error && (
          <div className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200">
            {error}
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400">Total Visitors</h3>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#39FF14]/20 to-[#1E9BFF]/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-[#39FF14]" />
              </div>
            </div>
            <p className="text-4xl font-bold text-white mb-2">{isLoading ? '—' : totalVisitors.toLocaleString()}</p>
            <p className="text-sm text-gray-500">+12% from last year</p>
          </motion.div>

          <motion.div
            className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400">Pending Requests</h3>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#39FF14]/20 to-[#1E9BFF]/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#1E9BFF]" />
              </div>
            </div>
            <p className="text-4xl font-bold text-white mb-2">{pendingCount}</p>
            <p className="text-sm text-gray-500">Awaiting response</p>
          </motion.div>

          <motion.div
            className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400">Handled Requests</h3>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#39FF14]/20 to-[#1E9BFF]/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[#39FF14]" />
              </div>
            </div>
            <p className="text-4xl font-bold text-white mb-2">{handledCount}</p>
            <p className="text-sm text-gray-500">Completed this month</p>
          </motion.div>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Visitors Chart */}
          <motion.div
            className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-white mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              Website Visitors
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={visitorData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff15" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1a1a1a',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="visitors" 
                  stroke="#39FF14" 
                  strokeWidth={3}
                  dot={{ fill: '#39FF14', r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Requests Chart */}
          <motion.div
            className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-white mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              Requests Per Month
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={requestData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff15" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1a1a1a',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Legend />
                <Bar 
                  dataKey="requests" 
                  fill="url(#colorGradient)"
                  radius={[8, 8, 0, 0]}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#39FF14" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#1E9BFF" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Requests Table */}
        <motion.div
          className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              Contact Requests
            </h2>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#39FF14]" />
              <span className="text-gray-400">{requests.length} Total</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Name</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Email</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Message</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Date</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Status</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request) => (
                  <motion.tr
                    key={request.id}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <td className="py-4 px-4 text-white">{request.name}</td>
                    <td className="py-4 px-4 text-gray-400">{request.email}</td>
                    <td className="py-4 px-4 text-gray-400 max-w-xs truncate">
                      {request.message}
                    </td>
                    <td className="py-4 px-4 text-gray-400">{request.date}</td>
                    <td className="py-4 px-4">
                      {request.status === 'pending' ? (
                        <span className="px-3 py-1 rounded-full bg-[#1E9BFF]/20 text-[#1E9BFF] text-sm">
                          Pending
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-[#39FF14]/20 text-[#39FF14] text-sm">
                          Handled
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        {request.status === 'pending' ? (
                          <button
                            onClick={() => handleStatusChange(request.id, 'handled')}
                            className="p-2 rounded-lg bg-[#39FF14]/10 hover:bg-[#39FF14]/20 text-[#39FF14] transition-colors"
                            title="Mark as handled"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                        ) : (
                          <button
                            onClick={() => handleStatusChange(request.id, 'pending')}
                            className="p-2 rounded-lg bg-[#1E9BFF]/10 hover:bg-[#1E9BFF]/20 text-[#1E9BFF] transition-colors"
                            title="Mark as pending"
                          >
                            <Clock className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(request.id)}
                          className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-500 transition-colors"
                          title="Delete request"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
