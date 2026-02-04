import React, { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';

export const CRTOverlay: React.FC = () => (
  <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
    {/* Scanlines */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] opacity-20 pointer-events-none" />
    {/* Vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
  </div>
);

export const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;

    const chars = "$_\\/<>";
    const fontSize = 14;
    const columns = Math.ceil(width / fontSize);
    const drops = new Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'; // Fade effect
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#1E293B'; // Dark Slate for subtle background chars
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Randomly decide to draw
        if (Math.random() > 0.975) {
             const text = chars[Math.floor(Math.random() * chars.length)];
             const x = i * fontSize;
             const y = drops[i] * fontSize;
             
             // Occasional colored character
             if (Math.random() > 0.95) ctx.fillStyle = '#8B5CF6'; // Grape
             else ctx.fillStyle = '#334155'; // Slate 700

             ctx.fillText(text, x, y);

             if (y > height && Math.random() > 0.99) {
                drops[i] = 0;
             }
             drops[i]++;
        }
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => {
        clearInterval(interval);
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-40 pointer-events-none"
    />
  );
};

export const GlitchText: React.FC<{ text: string; as?: any; className?: string }> = ({ text, as: Component = 'span', className }) => {
  return (
    <Component className={clsx("relative inline-block group", className)}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-magenta opacity-0 group-hover:opacity-70 group-hover:animate-[glitch_0.3s_infinite] translate-x-[2px]">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyan opacity-0 group-hover:opacity-70 group-hover:animate-[glitch_0.3s_infinite_reverse] -translate-x-[2px]">{text}</span>
    </Component>
  );
};
