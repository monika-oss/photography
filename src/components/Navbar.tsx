'use client';

import React, { useState, useEffect } from 'react';
import { Camera, Calendar, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 text-slate-900'
          : 'py-5 bg-slate-950/20 backdrop-blur-xs text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-500 via-amber-500 to-azure-500 p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <Camera className="w-5 h-5 text-brand-400 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-xl tracking-tight flex items-center gap-1.5 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                AURA <span className="text-brand-500 text-xs font-sans px-2 py-0.5 bg-brand-50/10 rounded-full border border-brand-500/30">STUDIO</span>
              </span>
              <span className={`text-[10px] tracking-wider uppercase font-medium ${scrolled ? 'text-slate-500' : 'text-slate-300'}`}>
                Fine Art Photography
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className={`hidden md:flex items-center gap-8 text-sm font-semibold ${scrolled ? 'text-slate-700' : 'text-slate-100'}`}>
            <a href="#gallery" className="hover:text-brand-400 transition-colors">
              Portfolio
            </a>
            <a href="#pricing" className="hover:text-brand-400 transition-colors">
              Services & Calculator
            </a>
            <a href="#about" className="hover:text-brand-400 transition-colors">
              Meet Photographer
            </a>
            <a href="#testimonials" className="hover:text-brand-400 transition-colors">
              Client Stories
            </a>
          </nav>

          {/* Availability Indicator & CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border ${
              scrolled
                ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                : 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Available for Shoots 2026</span>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-500 via-amber-500 to-brand-600 text-white font-semibold text-sm shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Session</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-100 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-2 text-slate-900">
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-slate-700 font-medium hover:text-brand-500 hover:bg-slate-50 rounded-lg"
            >
              Portfolio Gallery
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-slate-700 font-medium hover:text-brand-500 hover:bg-slate-50 rounded-lg"
            >
              Services & Calculator
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-slate-700 font-medium hover:text-brand-500 hover:bg-slate-50 rounded-lg"
            >
              About & Gear
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-slate-700 font-medium hover:text-brand-500 hover:bg-slate-50 rounded-lg"
            >
              Client Reviews
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-brand-500 text-white font-semibold text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Session</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
