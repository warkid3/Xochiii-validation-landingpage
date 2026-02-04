import React from 'react';
import { Container, Button } from '../ui/Layout';
import { SOCIAL_PROOF } from '../../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenWaitlist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWaitlist }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-grape/10 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 border border-grape/50 bg-grape/10 text-grape text-xs font-mono mb-8"
          >
            <span className="w-2 h-2 bg-emerald-400 animate-pulse rounded-full" />
            System Online v2.4
          </motion.div>

          <h1 className="font-pixel text-6xl md:text-8xl leading-[0.9] mb-6 text-white">
            DELEGATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-grape via-magenta to-grape animate-gradient bg-300%">
              THE BORING
            </span> <br />
            STUFF.
          </h1>

          <p className="text-gray-400 font-mono text-lg mb-8 max-w-xl leading-relaxed">
            > Executing web tasks... <br/>
            > Finding leads... [DONE] <br/>
            > Analyzing competitors... [DONE] <br/>
            <span className="text-white mt-2 block">
              Xochiii is your AI assistant that works 24/7. Automate browser-based workflows without writing a single line of code.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" onClick={onOpenWaitlist}>
              Join Waitlist <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>

          <div className="border-t border-gray-800 pt-6">
             <div className="flex flex-wrap gap-8 text-xs font-mono text-gray-500">
                {SOCIAL_PROOF.slice(0, 2).map(proof => (
                  <div key={proof.id} className="flex items-center gap-2">
                     <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                     <span>"{proof.text}"</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Right: Hero Visual */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center relative"
        >
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-grape/20 blur-[60px] rounded-full transform scale-75" />
          
          <motion.img 
            src="https://i.postimg.cc/XXSL8DWG/Gemini-Generated-Image-vowkobvowkobvowk-removebg-preview.png" 
            alt="Xochiii AI Octopus"
            className="relative z-10 w-full max-w-2xl drop-shadow-[0_0_50px_rgba(139,92,246,0.3)]"
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Decorative floating elements */}
          <motion.div 
            className="absolute top-10 right-10 bg-black/80 border border-grape p-2 rounded backdrop-blur-sm z-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="flex items-center gap-2 text-xs font-mono text-cyan">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Task Running...
            </div>
          </motion.div>

          <motion.div 
            className="absolute bottom-20 left-0 bg-black/80 border border-magenta p-2 rounded backdrop-blur-sm z-20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="text-xs font-mono text-magenta">
              > Efficiency: 300%
            </div>
          </motion.div>

        </motion.div>

      </Container>
    </section>
  );
};