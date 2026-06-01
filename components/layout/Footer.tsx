// src/components/layout/Footer.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <footer className="bg-[#1A1612] text-white/70">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* School Identity - 4 columns */}
          <div className="lg:col-span-4 space-y-5">
            <h3 className="text-2xl text-white font-serif font-light tracking-tight">
              Westbrook<span className="text-[#B8925C]">.</span>
            </h3>
            <p className="text-sm leading-relaxed text-white/50 max-w-sm">
              An independent day school where curiosity meets character, 
              and education extends beyond the classroom.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/30">Founded 2012</span>
              <span className="w-8 h-px bg-white/20" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/30">Accredited</span>
            </div>
          </div>

          {/* Quick Links - 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-sm font-medium mb-5 tracking-wide">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-white/50 hover:text-white transition-colors duration-300">About us</Link></li>
              <li><Link href="/programs" className="text-sm text-white/50 hover:text-white transition-colors duration-300">Programs</Link></li>
              <li><Link href="/admissions" className="text-sm text-white/50 hover:text-white transition-colors duration-300">Admissions</Link></li>
              <li><Link href="/calendar" className="text-sm text-white/50 hover:text-white transition-colors duration-300">Calendar</Link></li>
            </ul>
          </div>

          {/* Information - 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-sm font-medium mb-5 tracking-wide">Connect</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-sm text-white/50 hover:text-white transition-colors duration-300">Contact us</Link></li>
              <li><Link href="/careers" className="text-sm text-white/50 hover:text-white transition-colors duration-300">Careers</Link></li>
              <li><Link href="/news" className="text-sm text-white/50 hover:text-white transition-colors duration-300">News & events</Link></li>
              <li><Link href="/support" className="text-sm text-white/50 hover:text-white transition-colors duration-300">Give</Link></li>
            </ul>
          </div>

          {/* Stay Informed - 4 columns */}
          <div className="lg:col-span-4">
            <h4 className="text-white text-sm font-medium mb-5 tracking-wide">Stay informed</h4>
            <p className="text-sm text-white/50 mb-4 leading-relaxed">
              Subscribe to receive updates about admissions, events, and school news.
            </p>
            
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-0 py-2 bg-transparent border-b border-white/20 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#B8925C] transition-colors"
                required
              />
              <button
                type="submit"
                className="absolute right-0 bottom-2 text-white/50 hover:text-[#B8925C] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
            
            {isSubmitted && (
              <p className="text-[#B8925C] text-xs mt-2 animate-fadeIn">
                Thank you for subscribing.
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar - Clean and minimal */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/30 tracking-wide">
              © {new Date().getFullYear()} Westbrook Academy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-xs text-white/30 hover:text-white/50 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-xs text-white/30 hover:text-white/50 transition-colors">
                Terms
              </Link>
              <Link href="/accessibility" className="text-xs text-white/30 hover:text-white/50 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </footer>
  );
}