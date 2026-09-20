'use client';

import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '@/data/portfolioData';
import { Info, Maximize2, MapPin, Camera, Filter } from 'lucide-react';

interface PortfolioGalleryProps {
  onSelectPhoto: (item: PortfolioItem) => void;
}

type CategoryType = 'All' | 'Landscape' | 'Portrait' | 'Fashion' | 'Wedding' | 'Street' | 'Wildlife';

const CATEGORIES: CategoryType[] = ['All', 'Landscape', 'Portrait', 'Fashion', 'Wedding', 'Street', 'Wildlife'];

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onSelectPhoto }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Filter className="w-3.5 h-3.5" />
            <span>Interactive Portfolio Gallery</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Curated Visual Spectrum
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Click on any photograph to open full-screen lightbox and inspect complete technical EXIF metadata (camera, lens, shutter speed, location).
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const count = cat === 'All'
              ? PORTFOLIO_ITEMS.length
              : PORTFOLIO_ITEMS.filter((i) => i.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectPhoto(item)}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-card-hover transition-all duration-300 cursor-pointer border border-slate-200/80 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-800 shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-amber-300 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.exif.location}
                    </span>
                    <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-brand-500 transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-lg font-bold leading-snug">{item.title}</h3>
                  
                  <div className="mt-2 pt-2 border-t border-white/20 flex items-center justify-between text-xs text-slate-200 font-mono">
                    <span className="flex items-center gap-1">
                      <Camera className="w-3.5 h-3.5 text-brand-400" />
                      {item.exif.camera.split(' ')[0]} {item.exif.aperture}
                    </span>
                    <span className="text-brand-300 font-sans font-semibold flex items-center gap-1">
                      <Info className="w-3.5 h-3.5" />
                      View EXIF
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-4 flex items-center justify-between bg-white border-t border-slate-100 text-slate-700">
                <div>
                  <h4 className="font-semibold text-sm text-slate-900 group-hover:text-brand-500 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 truncate max-w-[220px]">
                    {item.exif.camera} • {item.exif.lens}
                  </p>
                </div>
                <div className="text-xs font-bold text-brand-500 px-2.5 py-1 rounded-lg bg-brand-50 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  Details
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
