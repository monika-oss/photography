'use client';

import React from 'react';
import { GEAR_ITEMS } from '@/data/portfolioData';
import { Camera, Award, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photographer Portrait & Award Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Main Portrait Frame */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white p-2">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                    alt="Lead Photographer Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-xl font-bold">Julian Vance</h3>
                    <p className="text-xs text-amber-300 font-medium">Principal Photographer & Visual Director</p>
                  </div>
                </div>
              </div>

              {/* Floating Award Badge */}
              <div className="absolute -bottom-6 -left-6 z-20 p-4 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="p-3 rounded-xl bg-amber-100 text-amber-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">IPA International Award 2025</div>
                  <div className="text-[10px] text-slate-500">1st Place Fine Art Color Photography</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Interactive Gear Drawer */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-600 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Meet The Artist</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                "Photography isn't about looking; it's about feeling the light."
              </h2>

              <p className="mt-4 text-slate-600 text-base leading-relaxed">
                With over a decade traveling across 30+ countries, my approach merges fine art color science with candid emotional documentary. Whether framing the silence of alpine mountain peaks or capturing unscripted laughter during wedding celebrations, I strive for vibrant, timeless perfection.
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Color Grading Masterclass</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Tailored skin tone correction & custom cinematic LUTs.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Triple-Backup Safety</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Dual SD card recording + encrypted cloud storage.</p>
                </div>
              </div>
            </div>

            {/* Gear Bag Breakdown */}
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
                <Camera className="w-5 h-5 text-brand-500" />
                <span>Inside My Camera Gear Bag</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {GEAR_ITEMS.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">{item.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-mono">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
