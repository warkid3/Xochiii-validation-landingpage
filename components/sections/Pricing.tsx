import React, { useState } from 'react';
import { Container, SectionBox, Button } from '../ui/Layout';
import { Check, Loader2 } from 'lucide-react';
import { SOCIAL_PROOF } from '../../constants';

export const Pricing: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className="py-24 relative scroll-mt-28" id="pricing">
      <div className="absolute inset-0 bg-grape/5 skew-y-3 -z-10" />
      
      <Container>
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-pixel text-5xl mb-4">PRICING</h2>
            <p className="font-mono text-cyan">Limited founding member slots available.</p>
          </div>

          {/* Pricing Card */}
          <div className="grid md:grid-cols-5 gap-8 items-stretch">
            
            {/* Left: The Offer */}
            <div className="md:col-span-3">
               <SectionBox variant="default" className="h-full border-grape shadow-[8px_8px_0px_0px_#8B5CF6]">
                  <div className="absolute top-0 right-0 bg-magenta text-white text-xs font-bold px-3 py-1 font-mono transform translate-x-2 -translate-y-2 border border-black">
                     50 SLOTS LEFT
                  </div>
                  
                  <div className="mb-8">
                     <h3 className="font-bold text-2xl text-white mb-2">LIFETIME ACCESS</h3>
                     <div className="flex items-baseline gap-4">
                        <span className="text-6xl font-pixel text-grape">$199</span>
                        <span className="text-gray-500 line-through font-mono decoration-red-500 decoration-2">$99/mo</span>
                     </div>
                     <p className="text-sm text-gray-400 mt-2 font-mono">One-time payment. Execute forever.</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                     {[
                        "500 Task Executions / Month",
                        "Unlimited Agent Instances",
                        "Real-time Browser View",
                        "CSV / JSON Export",
                        "Priority Support",
                        "All Future Updates Included"
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 font-mono text-sm text-gray-300">
                           <div className="w-5 h-5 bg-emerald-500/20 text-emerald-500 flex items-center justify-center border border-emerald-500/50">
                              <Check className="w-3 h-3" />
                           </div>
                           {item}
                        </li>
                     ))}
                  </ul>
               </SectionBox>
            </div>

            {/* Right: The Form */}
            <div className="md:col-span-2 flex flex-col justify-center" id="waitlist">
              <SectionBox className="h-full flex flex-col justify-center bg-obsidian">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                       <label htmlFor="email" className="font-mono text-xs text-grape uppercase font-bold">
                          Enter your email
                       </label>
                       <input 
                          type="email" 
                          id="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-black border-2 border-surface p-3 text-white font-mono focus:border-grape focus:outline-none transition-colors"
                          placeholder="dev@startup.com"
                       />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={loading}
                      glitch
                    >
                      {loading ? <Loader2 className="animate-spin" /> : 'JOIN WAITLIST'}
                    </Button>
                    <p className="text-[10px] text-gray-500 font-mono text-center">
                       No payment required yet.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                     <div className="w-16 h-16 bg-emerald-500 mx-auto mb-4 flex items-center justify-center text-black border-2 border-white shadow-hard">
                        <Check className="w-8 h-8" />
                     </div>
                     <h3 className="font-bold text-white text-xl mb-2">ACCESS REQUESTED</h3>
                     <p className="text-gray-400 text-sm font-mono">We will email {email} when your account is ready.</p>
                     <Button 
                        variant="ghost" 
                        size="sm" 
                        className="mt-6"
                        onClick={() => { setSubmitted(false); setEmail(''); }}
                     >
                        Reset
                     </Button>
                  </div>
                )}

                {/* Mini Testimonial */}
                <div className="mt-8 pt-6 border-t border-gray-800 flex items-start gap-3">
                   <div className="flex-shrink-0">
                     <div className="w-10 h-10 rounded bg-gradient-to-br from-magenta to-grape p-[1px]">
                        <div className="w-full h-full bg-black rounded flex items-center justify-center text-white font-bold font-mono">
                           SJ
                        </div>
                     </div>
                   </div>
                   <div>
                      <p className="font-mono text-xs text-gray-400 italic mb-2 leading-relaxed">
                         "{SOCIAL_PROOF[0].text}"
                      </p>
                      <p className="font-mono text-[10px] text-cyan font-bold tracking-wider">
                         SARAH JENKINS // {SOCIAL_PROOF[0].role}
                      </p>
                   </div>
                </div>
              </SectionBox>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};