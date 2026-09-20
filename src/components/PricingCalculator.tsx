'use client';

import React, { useState } from 'react';
import { PRICING_PACKAGES } from '@/data/portfolioData';
import { Check, Sparkles, Calculator, Clock, Users, Video, Book, Zap, ArrowRight } from 'lucide-react';

interface PricingCalculatorProps {
  onSelectPackage: (packageName: string, estimatedPrice: number) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onSelectPackage }) => {
  // Custom Estimator State
  const [hours, setHours] = useState<number>(4);
  const [extraShooter, setExtraShooter] = useState<boolean>(false);
  const [droneCoverage, setDroneCoverage] = useState<boolean>(true);
  const [photoBook, setPhotoBook] = useState<boolean>(false);
  const [expressDelivery, setExpressDelivery] = useState<boolean>(false);

  // Price Calculation Logic
  const baseRatePerHour = 150;
  const extraShooterCost = extraShooter ? 350 : 0;
  const droneCost = droneCoverage ? 250 : 0;
  const photoBookCost = photoBook ? 200 : 0;
  const expressCost = expressDelivery ? 150 : 0;

  const totalCalculatedEstimate = hours * baseRatePerHour + extraShooterCost + droneCost + photoBookCost + expressCost;

  return (
    <section id="pricing" className="py-20 bg-white relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Pricing & Calculator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Invest in Timeless Memories
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Choose from fixed curated packages or use our interactive pricing estimator to calculate a custom shoot tailored to your exact event vision.
          </p>
        </div>

        {/* Curated Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-2xl scale-105 border-2 border-amber-400/60'
                  : 'bg-slate-50 text-slate-900 border border-slate-200/80 hover:shadow-lg hover:border-slate-300'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-brand-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-md">
                  {pkg.badge || 'Most Popular'}
                </div>
              )}

              <div>
                <h3 className={`font-serif text-2xl font-bold ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-xs mt-1 ${pkg.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                  {pkg.tagline}
                </p>

                {/* Price tag */}
                <div className="my-6 flex items-baseline gap-1">
                  <span className="text-sm font-semibold">$</span>
                  <span className="font-serif text-4xl font-extrabold tracking-tight">{pkg.price}</span>
                  <span className={`text-xs font-medium ml-1 ${pkg.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                    / package
                  </span>
                </div>

                <p className={`text-xs leading-relaxed mb-6 ${pkg.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                  {pkg.description}
                </p>

                {/* Feature Bullet List */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs font-medium">
                      <div className={`p-0.5 rounded-full mt-0.5 ${pkg.popular ? 'bg-amber-400 text-slate-950' : 'bg-brand-500 text-white'}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className={pkg.popular ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onSelectPackage(pkg.name, pkg.price)}
                className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-amber-400 to-brand-500 text-slate-950 hover:brightness-110 shadow-lg'
                    : 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm'
                }`}
              >
                <span>Select Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Custom Calculator Panel */}
        <div className="rounded-3xl bg-gradient-to-tr from-brand-50 via-amber-50/50 to-azure-50 p-6 sm:p-10 border border-brand-200/60 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-white shadow-sm text-brand-500 border border-brand-100">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">Custom Shoot Estimator</h3>
                  <p className="text-xs text-slate-600">Adjust coverage parameters to see instant estimated investment.</p>
                </div>
              </div>

              {/* Slider for Hours */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="flex justify-between items-center text-sm font-bold text-slate-800">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-500" />
                    Coverage Duration
                  </span>
                  <span className="px-3 py-1 rounded-full bg-brand-50 text-brand-600 font-mono text-xs">
                    {hours} Hours (${hours * baseRatePerHour})
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="12"
                  step="1"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>2 Hours (Mini shoot)</span>
                  <span>6 Hours (Standard)</span>
                  <span>12 Hours (Full Day)</span>
                </div>
              </div>

              {/* Add-on Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Extra Shooter */}
                <button
                  type="button"
                  onClick={() => setExtraShooter(!extraShooter)}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                    extraShooter
                      ? 'bg-white border-brand-500 ring-2 ring-brand-500/20 shadow-md'
                      : 'bg-white/80 border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Users className={`w-5 h-5 ${extraShooter ? 'text-brand-500' : 'text-slate-400'}`} />
                    <div>
                      <div className="text-xs font-bold text-slate-900">2nd Shooter</div>
                      <div className="text-[10px] text-slate-500">+$350 flat</div>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${extraShooter ? 'bg-brand-500 text-white' : 'border border-slate-300'}`}>
                    {extraShooter && '✓'}
                  </div>
                </button>

                {/* Drone */}
                <button
                  type="button"
                  onClick={() => setDroneCoverage(!droneCoverage)}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                    droneCoverage
                      ? 'bg-white border-azure-500 ring-2 ring-azure-500/20 shadow-md'
                      : 'bg-white/80 border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Video className={`w-5 h-5 ${droneCoverage ? 'text-azure-500' : 'text-slate-400'}`} />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Drone Aerial Photos</div>
                      <div className="text-[10px] text-slate-500">+$250 flat</div>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${droneCoverage ? 'bg-azure-500 text-white' : 'border border-slate-300'}`}>
                    {droneCoverage && '✓'}
                  </div>
                </button>

                {/* Photobook */}
                <button
                  type="button"
                  onClick={() => setPhotoBook(!photoBook)}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                    photoBook
                      ? 'bg-white border-amber-500 ring-2 ring-amber-500/20 shadow-md'
                      : 'bg-white/80 border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Book className={`w-5 h-5 ${photoBook ? 'text-amber-500' : 'text-slate-400'}`} />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Hardcover Album</div>
                      <div className="text-[10px] text-slate-500">+$200 flat</div>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${photoBook ? 'bg-amber-500 text-white' : 'border border-slate-300'}`}>
                    {photoBook && '✓'}
                  </div>
                </button>

                {/* Express 48h Delivery */}
                <button
                  type="button"
                  onClick={() => setExpressDelivery(!expressDelivery)}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                    expressDelivery
                      ? 'bg-white border-purple-500 ring-2 ring-purple-500/20 shadow-md'
                      : 'bg-white/80 border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Zap className={`w-5 h-5 ${expressDelivery ? 'text-purple-500' : 'text-slate-400'}`} />
                    <div>
                      <div className="text-xs font-bold text-slate-900">48h Rush Delivery</div>
                      <div className="text-[10px] text-slate-500">+$150 flat</div>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${expressDelivery ? 'bg-purple-500 text-white' : 'border border-slate-300'}`}>
                    {expressDelivery && '✓'}
                  </div>
                </button>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-slate-900 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block mb-2">
                  Live Custom Estimate
                </span>

                <div className="flex items-baseline gap-1 my-3">
                  <span className="text-2xl font-bold text-slate-400">$</span>
                  <span className="font-serif text-5xl font-extrabold text-slate-900 tracking-tight">
                    {totalCalculatedEstimate}
                  </span>
                  <span className="text-xs text-slate-500 font-medium ml-1">USD total</span>
                </div>

                {/* Summary list breakdown */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Base Duration ({hours} hrs)</span>
                    <span className="font-mono font-bold">${hours * baseRatePerHour}</span>
                  </div>
                  {extraShooter && (
                    <div className="flex justify-between text-brand-600">
                      <span>2nd Professional Shooter</span>
                      <span className="font-mono font-bold">+$350</span>
                    </div>
                  )}
                  {droneCoverage && (
                    <div className="flex justify-between text-azure-600">
                      <span>Drone Aerial Package</span>
                      <span className="font-mono font-bold">+$250</span>
                    </div>
                  )}
                  {photoBook && (
                    <div className="flex justify-between text-amber-600">
                      <span>Linen Photobook</span>
                      <span className="font-mono font-bold">+$200</span>
                    </div>
                  )}
                  {expressDelivery && (
                    <div className="flex justify-between text-purple-600">
                      <span>Express 48h Delivery</span>
                      <span className="font-mono font-bold">+$150</span>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => onSelectPackage(`Custom ${hours}h Package`, totalCalculatedEstimate)}
                className="mt-8 w-full py-4 rounded-2xl bg-gradient-to-r from-brand-500 via-amber-500 to-brand-600 text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Book This Custom Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
