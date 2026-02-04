import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { cn } from './Layout';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, className }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-obsidian/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={cn(
                "w-full max-w-lg bg-obsidian border-2 border-grape pointer-events-auto relative shadow-[0_0_50px_rgba(139,92,246,0.2)]",
                className
              )}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b-2 border-grape bg-grape/10 p-4">
                <h3 className="font-pixel text-xl text-white uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 animate-pulse rounded-full" />
                  {title || 'SYSTEM_MESSAGE'}
                </h3>
                <button 
                  onClick={onClose}
                  className="text-grape hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                {children}
              </div>

              {/* Decorative Corners */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-magenta" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-magenta" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-magenta" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-magenta" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};
