import React from 'react';
import { Container } from './ui/Layout';
import { Logo } from './ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t-2 border-surface bg-obsidian py-12 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-grape via-magenta to-cyan" />
      
      <Container>
        <div className="mb-8 flex justify-center text-white/20 select-none">
           <Logo className="w-48 h-auto" />
        </div>
        
        <div className="flex justify-center gap-8 font-mono text-xs text-gray-500 mb-8">
           <a href="#" className="hover:text-grape hover:underline decoration-2 underline-offset-4">Privacy</a>
           <a href="#" className="hover:text-grape hover:underline decoration-2 underline-offset-4">Terms</a>
           <a href="mailto:hello@xochiii.in" className="hover:text-grape hover:underline decoration-2 underline-offset-4">Contact</a>
        </div>

        <p className="font-mono text-[10px] text-gray-600">
           © 2026 XOCHIII SYSTEMS. ALL RIGHTS RESERVED.
        </p>
      </Container>
    </footer>
  );
};