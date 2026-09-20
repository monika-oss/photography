'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/portfolioData';
import { Star, Quote, Heart } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5" />
            <span>Love Notes From Clients</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Client Words & Experiences
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Read what couples, brand directors, and individuals have to say about their experience working with Aura Studio.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl p-8 bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-200 group-hover:text-brand-300 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Info Bar */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.clientName}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{item.clientName}</h4>
                  <p className="text-xs text-slate-500 font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
