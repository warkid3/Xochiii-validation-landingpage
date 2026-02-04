import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
    {children}
  </div>
);

interface SectionBoxProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  variant?: 'default' | 'alert' | 'success';
}

export const SectionBox: React.FC<SectionBoxProps> = ({ children, title, className, variant = 'default' }) => {
  const borderColor = variant === 'alert' ? 'border-magenta' : variant === 'success' ? 'border-emerald-500' : 'border-surface';
  const headerBg = variant === 'alert' ? 'bg-magenta text-white' : variant === 'success' ? 'bg-emerald-500 text-black' : 'bg-surface text-grape';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn("border-2 bg-obsidian relative", borderColor, className)}
    >
      {title && (
        <div className={cn("px-4 py-1 font-pixel text-xl uppercase tracking-widest border-b-2", borderColor, headerBg)}>
          {title}
        </div>
      )}
      <div className="p-6 md:p-8">
        {children}
      </div>
      
      {/* Corner decorations */}
      <div className={cn("absolute -top-1 -left-1 w-2 h-2 bg-obsidian border-2", borderColor)} />
      <div className={cn("absolute -top-1 -right-1 w-2 h-2 bg-obsidian border-2", borderColor)} />
      <div className={cn("absolute -bottom-1 -left-1 w-2 h-2 bg-obsidian border-2", borderColor)} />
      <div className={cn("absolute -bottom-1 -right-1 w-2 h-2 bg-obsidian border-2", borderColor)} />
    </motion.div>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glitch?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md', 
  glitch = false,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-100 active:translate-y-1 active:shadow-none border-2";
  
  const variants = {
    primary: "bg-grape border-grape text-white shadow-hard hover:shadow-hard-hover hover:-translate-y-1 hover:bg-grape/90",
    secondary: "bg-cyan border-cyan text-black shadow-hard-cyan hover:shadow-[6px_6px_0px_0px_#06B6D4] hover:-translate-y-1",
    outline: "bg-transparent border-grape text-grape hover:bg-grape/10",
    ghost: "bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 font-mono",
    md: "text-sm px-6 py-3 font-mono",
    lg: "text-base px-8 py-4 font-mono",
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className, glitch && "animate-glitch")}
      {...props}
    >
      {glitch && (
        <span className="absolute inset-0 bg-white opacity-20 mix-blend-overlay animate-pulse pointer-events-none" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};