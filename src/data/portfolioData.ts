export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Landscape' | 'Portrait' | 'Fashion' | 'Wedding' | 'Street' | 'Wildlife';
  imageUrl: string;
  thumbnailUrl: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  featured?: boolean;
  story: string;
  exif: {
    camera: string;
    lens: string;
    aperture: string;
    shutterSpeed: string;
    iso: number;
    focalLength: string;
    location: string;
    capturedDate: string;
  };
}

export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  tagline: string;
  description: string;
  popular?: boolean;
  badge?: string;
  features: string[];
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Alpine Sunrise Glow',
    category: 'Landscape',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'landscape',
    featured: true,
    story: 'Captured at 5:30 AM on the edge of Lake Braies in the Italian Dolomites. The morning light cast a mesmerizing golden fire across the jagged mountain ridges while water remained mirror-still.',
    exif: {
      camera: 'Sony Alpha A7R V',
      lens: 'FE 16-35mm F2.8 GM II',
      aperture: 'f/11',
      shutterSpeed: '1/4 sec',
      iso: 100,
      focalLength: '24mm',
      location: 'Dolomites, Italy',
      capturedDate: 'October 12, 2025'
    }
  },
  {
    id: 'p2',
    title: 'Serenade of Golden Hour',
    category: 'Portrait',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'portrait',
    featured: true,
    story: 'Natural sunlight filtering through autumn leaves, creating a glowing rim light around the subject. Minimal retouching to preserve authentic skin warmth and raw emotion.',
    exif: {
      camera: 'Canon EOS R5',
      lens: 'RF 85mm F1.2 L USM',
      aperture: 'f/1.4',
      shutterSpeed: '1/1250 sec',
      iso: 160,
      focalLength: '85mm',
      location: 'Kyoto, Japan',
      capturedDate: 'November 4, 2025'
    }
  },
  {
    id: 'p3',
    title: 'Neon Horizon Editorial',
    category: 'Fashion',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'portrait',
    featured: true,
    story: 'High fashion runway editorial shot in downtown Tokyo. Styled with vibrant silk tones juxtaposed against modern architectural concrete facades.',
    exif: {
      camera: 'Fujifilm GFX 100 II',
      lens: 'GF 110mm F2 R LM WR',
      aperture: 'f/2.0',
      shutterSpeed: '1/800 sec',
      iso: 200,
      focalLength: '110mm',
      location: 'Shibuya, Tokyo',
      capturedDate: 'September 18, 2025'
    }
  },
  {
    id: 'p4',
    title: 'Euphoric Promises',
    category: 'Wedding',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'landscape',
    featured: true,
    story: 'A joyful candid moment following the vow exchange in Santorini. Natural confetti thrown by loved ones under the Mediterranean sun.',
    exif: {
      camera: 'Nikon Z9',
      lens: 'NIKKOR Z 50mm f/1.2 S',
      aperture: 'f/1.8',
      shutterSpeed: '1/2000 sec',
      iso: 100,
      focalLength: '50mm',
      location: 'Santorini, Greece',
      capturedDate: 'June 22, 2025'
    }
  },
  {
    id: 'p5',
    title: 'Cyberpunk Shadows',
    category: 'Street',
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'portrait',
    featured: false,
    story: 'Rain-slicked streets reflecting vibrant neon signs at night. Captured on a hand-held street stroll focusing on urban solitude.',
    exif: {
      camera: 'Leica M11',
      lens: 'Summilux-M 35mm f/1.4 ASPH',
      aperture: 'f/1.4',
      shutterSpeed: '1/125 sec',
      iso: 800,
      focalLength: '35mm',
      location: 'Seoul, South Korea',
      capturedDate: 'August 14, 2025'
    }
  },
  {
    id: 'p6',
    title: 'The Sovereign Monarch',
    category: 'Wildlife',
    imageUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1600&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'landscape',
    featured: true,
    story: 'Early morning safari encounter in the Masai Mara reserve. The lion stood atop a kopje surveying his territory in misty dawn atmosphere.',
    exif: {
      camera: 'Sony Alpha A9 III',
      lens: 'FE 600mm F4 GM OSS',
      aperture: 'f/4.0',
      shutterSpeed: '1/1600 sec',
      iso: 400,
      focalLength: '600mm',
      location: 'Masai Mara, Kenya',
      capturedDate: 'July 5, 2025'
    }
  },
  {
    id: 'p7',
    title: 'Geometric Glass Horizons',
    category: 'Street',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'square',
    featured: false,
    story: 'Dynamic architectural framing of modern skyscraper glass reflections against azure blue skies in Singapore financial center.',
    exif: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 38mm f/2.5 V',
      aperture: 'f/8.0',
      shutterSpeed: '1/500 sec',
      iso: 64,
      focalLength: '38mm',
      location: 'Marina Bay, Singapore',
      capturedDate: 'January 10, 2026'
    }
  },
  {
    id: 'p8',
    title: 'Vibrant Colors of Rajasthan',
    category: 'Portrait',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'portrait',
    featured: false,
    story: 'Expressive cultural portrait captured during the Holi spring festival. Natural light highlighting rich pigments and expressive eyes.',
    exif: {
      camera: 'Canon EOS R3',
      lens: 'RF 50mm F1.2 L USM',
      aperture: 'f/1.6',
      shutterSpeed: '1/4000 sec',
      iso: 100,
      focalLength: '50mm',
      location: 'Jaipur, India',
      capturedDate: 'March 15, 2025'
    }
  },
  {
    id: 'p9',
    title: 'Coastline Emerald Waves',
    category: 'Landscape',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'landscape',
    featured: false,
    story: 'Aerial ocean perspective over turquoise waters in French Polynesia. Coral reefs forming intricate patterns beneath the sea floor.',
    exif: {
      camera: 'DJI Mavic 3 Pro Cine',
      lens: 'Hasselblad 24mm equivalent',
      aperture: 'f/2.8',
      shutterSpeed: '1/1000 sec',
      iso: 100,
      focalLength: '24mm',
      location: 'Bora Bora',
      capturedDate: 'February 2, 2026'
    }
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'pkg-portrait',
    name: 'Creative Portrait',
    price: 350,
    tagline: 'Ideal for Individuals, Artists & Brand Personalities',
    description: 'A 2-hour outdoor or studio session focused on capturing authentic human emotion with signature color editing.',
    features: [
      '2 Hours Shooting Time',
      '15 High-Resolution Retouched Photos',
      'Private Online Client Gallery',
      'Full Commercial & Personal Rights',
      'Styling & Location Consultation',
    ]
  },
  {
    id: 'pkg-wedding',
    name: 'Destination Wedding',
    price: 2400,
    popular: true,
    badge: 'Most Popular Choice',
    tagline: 'Full Day Coverage for Unforgettable Celebrations',
    description: 'Comprehensive coverage of your special day from morning preparation to evening dance floor magic.',
    features: [
      'Up to 10 Hours Continuous Coverage',
      'Second Professional Photographer Included',
      '450+ Color Graded Master Files',
      'Complimentary Engagement Session',
      'Handcrafted Linen Hardcover Album (30 pages)',
      'Drone Aerial Ceremony Photography',
    ]
  },
  {
    id: 'pkg-commercial',
    name: 'Commercial & Editorial',
    price: 1200,
    tagline: 'Tailored Content for Brands, Fashion & Advertising',
    description: 'High-impact visual assets designed to elevate product identity, campaign releases, and modern brand lookbooks.',
    features: [
      'Half-Day Studio or Location Production',
      'Complete Lighting & Equipment Setup',
      'Advanced High-End Retouching & Color Matching',
      'Unlimited Digital Usage Rights',
      'Fast 48-Hour Rush Delivery Available',
    ]
  }
];

export const GEAR_ITEMS = [
  { name: 'Sony Alpha A7R V', category: 'Camera Body', desc: '61MP full-frame beast for ultimate resolution detail.' },
  { name: 'Canon EOS R5', category: 'Camera Body', desc: '8K RAW capability & legendary portrait skin tones.' },
  { name: 'Sony FE 50mm f/1.2 GM', category: 'Prime Lens', desc: 'Ultra-fast aperture delivering creamy bokeh & razor sharpness.' },
  { name: 'Canon RF 85mm f/1.2 L', category: 'Prime Lens', desc: 'The holy grail portrait lens for dramatic separation.' },
  { name: 'Profoto B10X Plus Flash', category: 'Lighting', desc: 'Portable battery-powered studio lights for sun overpowering.' },
  { name: 'DJI Mavic 3 Pro Cine', category: 'Aerial Drone', desc: 'Tri-camera drone with Apple ProRes 422 HQ recording.' },
];

export const TESTIMONIALS = [
  {
    quote: "Working with this studio was the smoothest experience of our entire wedding! Every photo looks like it belongs on the front cover of a luxury magazine.",
    clientName: "Elena & Marcus Vance",
    role: "Married in Amalfi Coast",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    color: "from-rose-500 to-amber-500"
  },
  {
    quote: "The vibrant colors, composition, and technical precision are unreal. Our commercial campaign conversion increased by 40% using their visual assets!",
    clientName: "David Sterling",
    role: "Creative Director, Lumina Co.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    color: "from-sky-500 to-indigo-500"
  },
  {
    quote: "The EXIF details and photo stories add so much depth! You're not just hiring a photographer; you are commissioning a true fine art artist.",
    clientName: "Sophia Chen",
    role: "Fashion Designer & Stylist",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    color: "from-emerald-500 to-teal-500"
  }
];
