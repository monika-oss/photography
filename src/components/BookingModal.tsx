'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, Sparkles, Send, CheckCircle2, User, Mail, Phone, MapPin, Tag } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackage?: { name: string; price: number } | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, preselectedPackage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    serviceType: preselectedPackage?.name || 'Destination Wedding',
    location: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedPackage) {
      setFormData((prev) => ({ ...prev, serviceType: preselectedPackage.name }));
    }
  }, [preselectedPackage]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger colorful celebratory confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff5733', '#f59e0b', '#0284c7', '#34d399', '#8b5cf6'],
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 p-6 sm:p-10 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-bold uppercase tracking-wider mb-2 border border-brand-200">
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Your Date</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900">
                Book a Photography Session
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill out the form below to lock in availability. We respond within 24 hours with custom location proposals.
              </p>

              {preselectedPackage && (
                <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                    <Tag className="w-4 h-4 text-amber-600" />
                    Selected Package: {preselectedPackage.name}
                  </span>
                  <span className="font-mono text-sm font-bold text-amber-800">
                    ${preselectedPackage.price}
                  </span>
                </div>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    />
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Target Shoot Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-800"
                  />
                </div>
              </div>

              {/* Service Type Dropdown */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Service / Shoot Category</label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-800"
                >
                  <option value="Destination Wedding">Destination Wedding Coverage</option>
                  <option value="Creative Portrait">Creative Fine Art Portrait</option>
                  <option value="Commercial Editorial">Commercial & Brand Lookbook</option>
                  <option value="Landscape Print">Landscape Print Licensing</option>
                  <option value="Custom Project">Custom Photography Project</option>
                </select>
              </div>

              {/* Event Location */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Shoot Location / Venue</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. Amalfi Coast, Italy or Studio NYC"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                  />
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Tell Us About Your Vision</label>
                <textarea
                  rows={3}
                  placeholder="Share details about mood board, outfit changes, guest count, or special timing..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-500 via-amber-500 to-brand-600 text-white font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Confirm Booking Request</span>
              </button>
            </form>
          </div>
        ) : (
          /* Submission Success State */
          <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-serif text-3xl font-extrabold text-slate-900">
              Booking Request Received!
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-slate-900">{formData.name}</span>! We have reserved your initial interest for <span className="font-bold text-brand-600">{formData.serviceType}</span> on <span className="font-bold text-slate-900">{formData.date || 'TBD'}</span>. Our studio team will review your location details and email you back within 24 hours.
            </p>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                Done / Back to Portfolio
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
