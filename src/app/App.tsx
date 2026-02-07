import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ParticleBackground } from '@/app/components/ParticleBackground';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { ScrollToTop } from '@/app/components/ScrollToTop';
import { Home } from '@/app/pages/Home';
import { WhatWeDo } from '@/app/pages/WhatWeDo';
import { AboutPage } from '@/app/pages/AboutPage';
import { Partners } from '@/app/pages/Partners';
import { Contact } from '@/app/pages/Contact';
import { AdminDashboard } from '@/app/pages/AdminDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-black overflow-x-hidden">
        {/* Cosmic Background with Particles */}
        <ParticleBackground />

        {/* Radial Gradient Overlay - Top (Green) */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#39FF14]/20 via-transparent to-transparent pointer-events-none z-0" />

        {/* Radial Gradient Overlay - Bottom (Blue) */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#1E9BFF]/20 via-transparent to-transparent pointer-events-none z-0" />

        {/* Content */}
        <div className="relative z-10">
          <ScrollToTop />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}