# 📸 Aura Studio - Fine Art Photography & Cinematic Scroll Portfolio

A high-performance, vibrant, light-themed photography portfolio web application built with **Next.js 14**, **Tailwind CSS**, **TypeScript**, **Lucide Icons**, and an **HTML5 Canvas Cinematic Frame Scroll Sequence**.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=for-the-badge&logo=tailwind-css)

---

## 🌟 Key Features

### 🎬 1. Cinematic Frame Scroll Animation
- **Sticky HTML5 Canvas**: Smooth scroll-linked image sequence animation rendering `frame_001.jpg` through `frame_010.jpg`.
- **Bicubic High-Res Resampling**: High-definition canvas image smoothing (`imageSmoothingQuality = 'high'`).
- **Retina 2X DPR Buffer**: Crisp clarity on High-DPI, 2K, and 4K displays.
- **Alpha Cross-Fade Blending**: Continuous pixel opacity morphing between adjacent frames with 60fps LERP inertia (`0.08`).
- **Progressive Frame Reveal**: Viewport-centered Hero text elements (Badge, Headline, Subtitle, Buttons, Statistics) reveal frame-by-frame as you scroll.

### 🎨 2. Filterable Portfolio Gallery
- Category filter tabs (*All, Landscape, Portrait, Fashion, Wedding, Street, Wildlife*).
- Interactive card grid with location tags, camera gear badges, and hover overlays.

### 🔬 3. EXIF Technical Metadata Lightbox Modal
- Click any photo to view full-resolution lightbox.
- Inspect complete EXIF data: Camera body, Lens model, Aperture (`f-stop`), Shutter speed, ISO sensitivity, Focal length, Location, and Shooting Date.

### 💰 4. Service Packages & Live Custom Pricing Estimator
- Curated packages (*Creative Portrait*, *Destination Wedding*, *Commercial Editorial*).
- Live custom shoot calculator with coverage hours slider, 2nd shooter, drone aerials, photobooks, and express delivery.

### 📅 5. Booking System & Client Experience
- Interactive booking request modal with celebratory confetti animation (`canvas-confetti`).
- Photographer bio & interactive camera gear drawer list.
- Client reviews & Instagram preview footer.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/monika-oss/photography.git
cd photography
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```text
├── public/
│   └── frames/          # Frame image sequence (frame_001.jpg to frame_010.jpg)
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles & mesh gradients
│   │   ├── layout.tsx   # Master root layout & metadata
│   │   └── page.tsx     # Home page assembling all sections
│   ├── components/
│   │   ├── Navbar.tsx   # Glassmorphic header
│   │   ├── Hero.tsx     # Viewport-centered progressive hero
│   │   ├── ScrollCanvasSequence.tsx # HTML5 Canvas LERP scroll engine
│   │   ├── PortfolioGallery.tsx      # Multi-category filterable gallery
│   │   ├── ExifModal.tsx             # Technical EXIF viewer lightbox
│   │   ├── PricingCalculator.tsx     # Live custom shoot quote estimator
│   │   ├── AboutSection.tsx          # Photographer bio & gear bag
│   │   ├── BookingModal.tsx          # Session booking form & confetti
│   │   ├── Testimonials.tsx          # Client ratings grid
│   │   └── Footer.tsx                # Instagram strip & footer links
│   └── data/
│       └── portfolioData.ts          # Technical EXIF specifications & presets
```

---

## 📄 License

This project is licensed under the MIT License.
