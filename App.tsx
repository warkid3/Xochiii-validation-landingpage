import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/Footer';
import { CRTOverlay, MatrixBackground } from './components/ui/Effects';
import { WaitlistModal } from './components/WaitlistModal';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <div className="min-h-screen bg-obsidian text-white overflow-x-hidden selection:bg-magenta selection:text-white">
      {/* Global Visual Effects */}
      <CRTOverlay />
      <MatrixBackground />
      
      {/* App Structure */}
      <div className="relative z-10">
        <Navbar onOpenWaitlist={openWaitlist} />
        
        <main>
          <Hero onOpenWaitlist={openWaitlist} />
          
          <div className="relative">
             {/* Divider Graphic */}
             <div className="h-4 w-full bg-grid-pattern opacity-20 border-y border-surface" />
             <Features />
          </div>

          <div className="relative">
             <div className="h-4 w-full bg-grid-pattern opacity-20 border-y border-surface" />
             <Pricing />
          </div>

          <FAQ />
        </main>

        <Footer />
      </div>

      {/* Modals */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  );
}

export default App;
