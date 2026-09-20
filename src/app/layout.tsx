import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aura Studio | Fine Art & Destination Photography',
  description: 'Vibrant fine art, portrait, fashion, landscape, and destination wedding photography studio with interactive EXIF metadata lightbox and custom pricing calculator.',
  keywords: ['photography portfolio', 'nextjs photography website', 'light theme photography', 'exif data viewer', 'wedding photographer', 'fine art portrait'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-mesh-gradient antialiased text-slate-900 selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
