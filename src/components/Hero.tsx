'use client';

import React, { useRef, useState } from 'react';
import { Sparkles, ArrowRight, Eye } from 'lucide-react';
import { ScrollCanvasSequence } from './ScrollCanvasSequence';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const heroContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Progressive frame reveal helpers (0 to 1 smooth opacity & slide-up)
  const getElementRevealStyle = (startProgress: number, endProgress: number) => {
    // Calculate normalized progress range [0, 1]
    const clamped = Math.min(Math.max(0, (scrollProgress - startProgress) / (endProgress - startProgress)), 1);
    const opacity = clamped;
    const translateY = (1 - clamped) * 24; // Slide up 24px

    return {
      opacity,
      transform: `translateY(${translateY}px)`,
      transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
    };
  };

  // Frame 1-2: Badge (0.00 -> 0.15)
  const badgeStyle = getElementRevealStyle(0.0, 0.15);
  // Frame 3-4: Headline (0.15 -> 0.35)
  const headlineStyle = getElementRevealStyle(0.15, 0.35);
  // Frame 5-6: Subtitle (0.35 -> 0.55)
  const subtitleStyle = getElementRevealStyle(0.35, 0.55);
  // Frame 7-8: Buttons (0.55 -> 0.75)
  const buttonsStyle = getElementRevealStyle(0.55, 0.75);
  // Frame 9-10: Statistics (0.75 -> 0.95)
  const statsStyle = getElementRevealStyle(0.75, 0.95);

  return (
    <div ref={heroContainerRef} className="relative h-[450vh] bg-slate-950">
      {/* Sticky Container holding Canvas & Progressive Text Overlay */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* 1. Background Scroll-Linked Canvas (Frames 001 - 010) */}
        <ScrollCanvasSequence
          containerRef={heroContainerRef}
          totalFrames={10}
          onProgressChange={setScrollProgress}
        />

        {/* 2. Gradient Readability Veil */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/85 pointer-events-none" />

        {/* 3. Progressive Frame-by-Frame Text & UI Reveal Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-auto">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center justify-center pt-8">
            <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-6">
              
              {/* Frame 1-2 Reveal: Top Pill Badge */}
              <div
                style={badgeStyle}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 shadow-lg border border-slate-200/80 backdrop-blur-md"
              >
                <Sparkles className="w-4 h-4 text-brand-500 animate-spin" style={{ animationDuration: '8s' }} />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Vibrant Light Theme Photography
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                <span className="text-xs font-medium text-brand-600">2026 Edition</span>
              </div>

              {/* Frame 3-4 Reveal: Main Headline */}
              <h1
                style={headlineStyle}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-lg"
              >
                Painting Stories with <br />
                <span className="text-gradient-primary">Vibrant Light & Emotion</span>
              </h1>

              {/* Frame 5-6 Reveal: Subtitle Paragraph */}
              <p
                style={subtitleStyle}
                className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed max-w-2xl drop-shadow-md mx-auto"
              >
                From breathtaking alpine landscapes to expressive editorial portraits and romantic destination weddings. Experience high-definition visual storytelling with complete EXIF transparency and custom pricing.
              </p>

              {/* Frame 7-8 Reveal: Call to Action Buttons */}
              <div
                style={buttonsStyle}
                className="pt-2 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
              >
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-500 via-amber-500 to-brand-600 text-white font-bold text-base shadow-soft-glow hover:shadow-xl hover:scale-[1.03] transition-all flex items-center justify-center gap-3 group"
                >
                  <span>Book Your Session</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#gallery"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/95 backdrop-blur-md text-slate-900 font-semibold text-base shadow-md border border-white hover:bg-white transition-all flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4 text-slate-600" />
                  <span>Explore Portfolio</span>
                </a>
              </div>

              {/* Frame 9-10 Reveal: Key Statistics Grid (Fully visible by Frame 10) */}
              <div
                style={statsStyle}
                className="pt-6 grid grid-cols-3 gap-8 border-t border-white/20 w-full max-w-lg mx-auto text-center justify-center items-center"
              >
                <div className="flex flex-col items-center">
                  <div className="font-serif font-bold text-2xl sm:text-3xl text-white flex items-center justify-center">
                    <span>10</span><span className="text-brand-500">+</span>
                  </div>
                  <div className="text-xs text-slate-300 font-medium">Years Experience</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="font-serif font-bold text-2xl sm:text-3xl text-white flex items-center justify-center">
                    <span>500</span><span className="text-azure-400">+</span>
                  </div>
                  <div className="text-xs text-slate-300 font-medium">Shoots Completed</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="font-serif font-bold text-2xl sm:text-3xl text-white flex items-center justify-center">
                    <span>48</span><span className="text-amber-400">+</span>
                  </div>
                  <div className="text-xs text-slate-300 font-medium">Global Awards</div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
