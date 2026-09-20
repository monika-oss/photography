'use client';

import React, { useState } from 'react';
import { Camera, Instagram, Youtube, Twitter, Send, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 relative overflow-hidden border-t border-slate-900">
      
      {/* Top Instagram Preview Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Instagram className="w-5 h-5 text-brand-500" />
            <span className="text-sm font-bold text-white tracking-wide">@aurastudio.photo</span>
          </div>
          <span className="text-xs text-slate-500">Follow on Instagram for daily field notes</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {[
            'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80',
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=300&q=80',
            'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=80',
            'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=300&q=80',
            'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=300&q=80',
          ].map((url, idx) => (
            <a
              key={idx}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-slate-900"
            >
              <img
                src={url}
                alt="Instagram shot preview"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-brand-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="w-5 h-5 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Main Footer Links & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-500 via-amber-500 to-azure-500 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Camera className="w-5 h-5 text-brand-500" />
                </div>
              </div>
              <span className="font-serif font-bold text-2xl text-white tracking-tight">
                AURA <span className="text-brand-500 text-xs font-sans px-2 py-0.5 bg-brand-950 rounded-full border border-brand-800">STUDIO</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Fine art, portrait, and destination photography studio creating vibrant visual stories with complete camera technical transparency.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-brand-500 text-slate-300 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-azure-500 text-slate-300 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-rose-500 text-slate-300 hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#gallery" className="hover:text-brand-400 transition-colors">Portfolio Categories</a></li>
              <li><a href="#pricing" className="hover:text-brand-400 transition-colors">Pricing Packages</a></li>
              <li><a href="#pricing" className="hover:text-brand-400 transition-colors">Custom Shoot Calculator</a></li>
              <li><a href="#about" className="hover:text-brand-400 transition-colors">Photographer Bio & Gear</a></li>
              <li><a href="#testimonials" className="hover:text-brand-400 transition-colors">Client Testimonials</a></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Field Notes Newsletter</h4>
            <p className="text-xs text-slate-400">
              Receive monthly camera presets, travel location tips, and exclusive shoot slot announcements.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs transition-colors flex items-center gap-1"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Join</span>
                </button>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-bold">
                ✓ You're subscribed to Aura Field Notes!
              </div>
            )}
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Aura Fine Art Photography Studio. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-500" />
          </button>
        </div>

      </div>
    </footer>
  );
};
