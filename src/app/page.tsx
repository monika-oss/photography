'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { PortfolioGallery } from '@/components/PortfolioGallery';
import { ExifModal } from '@/components/ExifModal';
import { PricingCalculator } from '@/components/PricingCalculator';
import { AboutSection } from '@/components/AboutSection';
import { Testimonials } from '@/components/Testimonials';
import { BookingModal } from '@/components/BookingModal';
import { Footer } from '@/components/Footer';
import { PortfolioItem } from '@/data/portfolioData';

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState<PortfolioItem | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedPackage, setPreselectedPackage] = useState<{ name: string; price: number } | null>(null);

  const handleSelectPackage = (packageName: string, estimatedPrice: number) => {
    setPreselectedPackage({ name: packageName, price: estimatedPrice });
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen relative">
      {/* Sticky Header Navbar */}
      <Navbar onOpenBooking={() => {
        setPreselectedPackage(null);
        setIsBookingOpen(true);
      }} />

      {/* Hero Section */}
      <Hero onOpenBooking={() => {
        setPreselectedPackage(null);
        setIsBookingOpen(true);
      }} />

      {/* Filterable Portfolio Gallery */}
      <PortfolioGallery onSelectPhoto={(item) => setSelectedPhoto(item)} />

      {/* Pricing & Interactive Custom Estimator */}
      <PricingCalculator onSelectPackage={handleSelectPackage} />

      {/* Meet Photographer & Gear Bag */}
      <AboutSection />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ExifModal item={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedPackage={preselectedPackage}
      />
    </main>
  );
}
