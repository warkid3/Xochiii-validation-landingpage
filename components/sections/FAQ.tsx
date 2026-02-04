import React, { useState } from 'react';
import { Container, SectionBox } from '../ui/Layout';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: "How is this different from ChatGPT?",
    a: "ChatGPT is a text generator. Xochiii is an action engine. It spawns a real headless browser instance, navigates websites, clicks buttons, and scrolls. It does not hallucinate data; it extracts it."
  },
  {
    q: "Do I need to know how to code?",
    a: "No. The interface is Natural Language. You simply type 'Find yoga studios in Mumbai', and Xochiii creates the workflow automatically."
  },
  {
    q: "Is my data secure?",
    a: "Yes. Your data is encrypted. We use isolated containers for every task. We do not train models on your specific output data. You own the artifacts."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-surface/30 scroll-mt-28" id="faq">
      <Container className="max-w-3xl">
        <h2 className="font-pixel text-4xl mb-12 text-center">FAQ</h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <SectionBox 
              key={i} 
              className={`transition-all duration-300 cursor-pointer ${openIndex === i ? 'border-grape' : 'border-surface hover:border-gray-600'}`}
            >
               <div 
                 className="flex items-center justify-between"
                 onClick={() => setOpenIndex(openIndex === i ? null : i)}
               >
                  <h3 className="font-mono font-bold text-lg pr-8 select-none">
                     <span className="text-grape mr-2">Q{i+1}:</span> {faq.q}
                  </h3>
                  <div className="text-grape">
                     {openIndex === i ? <Minus /> : <Plus />}
                  </div>
               </div>
               
               {openIndex === i && (
                  <div className="mt-4 pt-4 border-t border-gray-800 text-gray-300 font-mono text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200">
                     <span className="text-emerald-500 mr-2">A:</span> {faq.a}
                  </div>
               )}
            </SectionBox>
          ))}
        </div>
      </Container>
    </section>
  );
};