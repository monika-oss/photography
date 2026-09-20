'use client';

import React from 'react';
import { PortfolioItem } from '@/data/portfolioData';
import { X, Camera, Sliders, Aperture, Sun, MapPin, Calendar, BookOpen, Share2, Download } from 'lucide-react';

interface ExifModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const ExifModal: React.FC<ExifModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-colors"
          aria-label="Close EXIF modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column - High Res Image Viewer */}
        <div className="lg:col-span-7 bg-slate-950 flex items-center justify-center p-4 sm:p-8 relative min-h-[320px] lg:min-h-[550px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
          />

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-xs text-slate-300 font-medium border border-slate-800">
              {item.category} • High Resolution
            </span>
          </div>
        </div>

        {/* Right Column - EXIF Data & Story Panel */}
        <div className="lg:col-span-5 p-6 sm:p-8 overflow-y-auto bg-white flex flex-col justify-between">
          <div>
            {/* Header info */}
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-600 text-xs font-bold border border-brand-200">
                EXIF Metadata
              </span>
              <span className="text-xs text-slate-400 font-mono">ID: {item.id}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              {item.title}
            </h2>

            <div className="mt-2 flex items-center gap-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-brand-500" />
                {item.exif.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-azure-500" />
                {item.exif.capturedDate}
              </span>
            </div>

            {/* Behind the Shot Story */}
            <div className="mt-6 p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5 mb-1.5">
                <BookOpen className="w-4 h-4 text-amber-600" />
                Story Behind The Shot
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                "{item.story}"
              </p>
            </div>

            {/* Technical EXIF Specifications Grid */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-slate-600" />
                Technical Specifications
              </h4>

              <div className="grid grid-cols-2 gap-3">
                {/* Camera */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white shadow-xs text-brand-500">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Camera Body</div>
                    <div className="text-xs font-bold text-slate-800">{item.exif.camera}</div>
                  </div>
                </div>

                {/* Lens */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white shadow-xs text-azure-500">
                    <Aperture className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Lens</div>
                    <div className="text-xs font-bold text-slate-800">{item.exif.lens}</div>
                  </div>
                </div>

                {/* Aperture */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 font-mono text-xs font-bold flex items-center justify-center">
                    f
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Aperture</div>
                    <div className="text-xs font-bold text-slate-800">{item.exif.aperture}</div>
                  </div>
                </div>

                {/* Shutter Speed */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white shadow-xs text-emerald-500">
                    <Sun className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Shutter Speed</div>
                    <div className="text-xs font-bold text-slate-800">{item.exif.shutterSpeed}</div>
                  </div>
                </div>

                {/* ISO */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 font-mono text-[11px] font-bold flex items-center justify-center">
                    ISO
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">ISO Sensitivity</div>
                    <div className="text-xs font-bold text-slate-800">{item.exif.iso}</div>
                  </div>
                </div>

                {/* Focal Length */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 font-mono text-[11px] font-bold flex items-center justify-center">
                    mm
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Focal Length</div>
                    <div className="text-xs font-bold text-slate-800">{item.exif.focalLength}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-3">
            <button
              onClick={() => window.open(item.imageUrl, '_blank')}
              className="flex-1 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Full Spec View</span>
            </button>
            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Photo link copied to clipboard!');
                }
              }}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              title="Share photo link"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
