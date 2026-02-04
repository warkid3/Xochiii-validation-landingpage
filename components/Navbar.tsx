import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Button } from './ui/Layout';
import { Menu, X } from 'lucide-react';
import { Logo } from './ui/Logo';

interface NavbarProps {
  onOpenWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 border-b-2 ${
      isScrolled ? 'bg-obsidian/90 backdrop-blur-md border-grape/50 py-2' : 'bg-transparent border-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={scrollToTop}
              className="text-white hover:text-grape transition-colors w-32 md:w-40"
            >
              <Logo className="w-full" />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-sm font-mono text-gray-400 hover:text-cyan tracking-wider transition-colors relative group"
              >
                <span className="opacity-0 -ml-4 group-hover:opacity-100 transition-opacity absolute text-cyan">&gt;</span>
                {item.label}
              </a>
            ))}
            <Button size="sm" onClick={onOpenWaitlist}>
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-obsidian border-b-2 border-grape p-4 flex flex-col gap-4 shadow-hard">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="block font-mono text-gray-300 hover:text-cyan p-2 border-b border-gray-800 last:border-0"
            >
              &gt; {item.label}
            </a>
          ))}
          <Button className="w-full mt-2" onClick={() => {
            setIsMobileMenuOpen(false);
            onOpenWaitlist();
          }}>
            Join Waitlist
          </Button>
        </div>
      )}
    </nav>
  );
};