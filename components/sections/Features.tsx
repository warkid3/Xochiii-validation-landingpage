import React from 'react';
import { Container, SectionBox } from '../ui/Layout';
import { Bug, Cpu, ShieldAlert, Terminal, Zap, Globe, Database, Moon } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <div className="space-y-32 py-24 scroll-mt-28" id="features">
      
      {/* Pain Points: The Problem */}
      <section>
        <Container>
           <div className="flex items-center gap-4 mb-12">
              <ShieldAlert className="w-8 h-8 text-magenta" />
              <h2 className="font-pixel text-4xl md:text-5xl text-white">THE PROBLEM</h2>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Bug className="w-8 h-8 text-magenta" />, 
                  title: "Overwhelmed", 
                  desc: "Manual data entry is consuming your energy. Repetitive loops cause deadlock for your creative work." 
                },
                { 
                  icon: <Cpu className="w-8 h-8 text-magenta" />, 
                  title: "Unreliable", 
                  desc: "Manual execution leads to fatigue and mistakes. We handle the mundane so your team can focus on strategy." 
                },
                { 
                  icon: <Terminal className="w-8 h-8 text-magenta" />, 
                  title: "Wasting Time", 
                  desc: "You should be building strategy, not copy-pasting into spreadsheets all day." 
                }
              ].map((item, i) => (
                <SectionBox key={i} variant="alert" className="h-full">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="font-mono text-xl font-bold mb-4 text-magenta">{item.title}</h3>
                  <p className="text-gray-400 font-mono text-sm leading-relaxed">{item.desc}</p>
                </SectionBox>
              ))}
           </div>
        </Container>
      </section>

      {/* Solutions: Features */}
      <section>
        <Container>
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-2 border-surface pb-6">
              <div>
                <div className="flex items-center gap-4 mb-2">
                   <Zap className="w-8 h-8 text-cyan" />
                   <h2 className="font-pixel text-4xl md:text-5xl text-white">OUR FEATURES</h2>
                </div>
                <p className="font-mono text-gray-400">Upgrade your operational stack.</p>
              </div>
              <div className="font-mono text-cyan text-sm mt-4 md:mt-0">
                Status: Ready
              </div>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                   icon: <Globe className="w-6 h-6 text-grape" />,
                   title: "Web Crawler",
                   desc: "Navigates real websites. Clicks buttons. Scrolls infinite feeds. Not a hallucination."
                },
                {
                   icon: <Moon className="w-6 h-6 text-grape" />,
                   title: "Always On",
                   desc: "Runs in background processes while you sleep. Wake up to completed datasets."
                },
                {
                   icon: <Terminal className="w-6 h-6 text-grape" />,
                   title: "Simple English",
                   desc: "Input: 'Find SaaS founders'. Output: Clean CSV. No complicated code required."
                },
                {
                   icon: <Database className="w-6 h-6 text-grape" />,
                   title: "Clean Data",
                   desc: "Auto-formats unstructured web chaos into clean, type-safe JSON or CSV reports."
                }
              ].map((feature, i) => (
                 <SectionBox key={i} className="hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-12 h-12 bg-grape/10 border border-grape flex items-center justify-center mb-6">
                       {feature.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-mono">{feature.desc}</p>
                 </SectionBox>
              ))}
           </div>
        </Container>
      </section>

    </div>
  );
};