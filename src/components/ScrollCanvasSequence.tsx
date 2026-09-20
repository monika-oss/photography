'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';

interface ScrollCanvasSequenceProps {
  containerRef: React.RefObject<HTMLDivElement>;
  totalFrames?: number;
  framePrefix?: string;
  className?: string;
  onProgressChange?: (progress: number) => void;
}

export const ScrollCanvasSequence: React.FC<ScrollCanvasSequenceProps> = ({
  containerRef,
  totalFrames = 10,
  framePrefix = '/frames/frame_',
  className = '',
  onProgressChange,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const animFrameIdRef = useRef<number | null>(null);

  // Maximum Quality Canvas drawing function with Retina 2X/3X DPR & Bicubic High-Res Smoothing
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Use alpha: false context for maximum GPU rendering sharpness & speed
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const maxIdx = imagesRef.current.length - 1;
    const clampedIndex = Math.min(Math.max(0, frameIndex), maxIdx);

    const baseIdx = Math.floor(clampedIndex);
    const nextIdx = Math.min(baseIdx + 1, maxIdx);
    const blendFactor = clampedIndex - baseIdx;

    const img1 = imagesRef.current[baseIdx];
    const img2 = imagesRef.current[nextIdx];

    if (!img1 || !img1.complete || img1.naturalWidth === 0) return;

    // Force high resolution DPR multiplier (minimum 2x for crisp Retina text/details)
    const dpr = Math.max(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();

    if (rect.width === 0 || rect.height === 0) return;

    const targetWidth = Math.floor(rect.width * dpr);
    const targetHeight = Math.floor(rect.height * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Force maximum quality bicubic image resampling
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Clean luxury background fill
    ctx.fillStyle = '#0b0f19';
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Calculate aspect cover dimensions
    const imgRatio = img1.naturalWidth / img1.naturalHeight;
    const canvasRatio = rect.width / rect.height;

    let drawWidth = rect.width;
    let drawHeight = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = rect.width / imgRatio;
      offsetY = (rect.height - drawHeight) / 2;
    } else {
      drawWidth = rect.height * imgRatio;
      offsetX = (rect.width - drawWidth) / 2;
    }

    // 1. Draw base frame at maximum clarity
    ctx.globalAlpha = 1.0;
    ctx.drawImage(img1, offsetX, offsetY, drawWidth, drawHeight);

    // 2. High-precision cross-fade blend into next frame
    if (blendFactor > 0.001 && img2 && img2.complete && img2.naturalWidth > 0 && baseIdx !== nextIdx) {
      ctx.globalAlpha = blendFactor;
      ctx.drawImage(img2, offsetX, offsetY, drawWidth, drawHeight);
    }

    ctx.restore();
  }, []);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const numStr = String(i).padStart(3, '0');
      img.src = `${framePrefix}${numStr}.jpg`;

      const checkAllLoaded = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImagesLoaded(true);
        }
      };

      img.onload = checkAllLoaded;
      img.onerror = checkAllLoaded;

      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;
  }, [totalFrames, framePrefix]);

  // Initial draw once loaded
  useEffect(() => {
    if (imagesLoaded) {
      drawFrame(0);
    }
  }, [imagesLoaded, drawFrame]);

  // Persistent animation & scroll listener loop
  useEffect(() => {
    if (!imagesLoaded) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(0, currentScroll / totalScrollable), 1);

      targetFrameRef.current = progress * (totalFrames - 1);
      onProgressChange?.(progress);

      if (prefersReducedMotion) {
        currentFrameRef.current = targetFrameRef.current;
        drawFrame(targetFrameRef.current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    // 60FPS LERP loop
    const loop = () => {
      if (!prefersReducedMotion) {
        const diff = targetFrameRef.current - currentFrameRef.current;

        if (Math.abs(diff) > 0.0005) {
          currentFrameRef.current += diff * 0.08;
          drawFrame(currentFrameRef.current);
        } else {
          currentFrameRef.current = targetFrameRef.current;
          drawFrame(currentFrameRef.current);
        }
      }

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [imagesLoaded, containerRef, totalFrames, drawFrame, onProgressChange]);

  return (
    <div className={`sticky top-0 h-screen w-full overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-cover"
      />
    </div>
  );
};
