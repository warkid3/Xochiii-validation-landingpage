import React, { useState } from 'react';
import { Modal } from './ui/Modal';
import { Button } from './ui/Layout';
import { Loader2, Check, Terminal } from 'lucide-react';
import { SOCIAL_PROOF } from '../constants';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="ACCESS_REQUEST">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-sm font-mono text-gray-400 mb-6">
            <p>> Initializing handshake protocol...</p>
            <p>> Enter your primary communication channel below.</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="modal-email" className="font-mono text-xs text-grape uppercase font-bold flex items-center gap-2">
              <Terminal className="w-3 h-3" />
              Input: Email Address
            </label>
            <div className="relative group">
              <input 
                type="email" 
                id="modal-email"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/50 border-2 border-surface p-4 text-white font-mono focus:border-grape focus:outline-none transition-all placeholder:text-gray-700"
                placeholder="user@corp.net"
              />
              <div className="absolute inset-0 border-2 border-grape opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity" />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={loading}
            glitch
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin w-4 h-4" /> PROCESSING...
              </span>
            ) : 'EXECUTE REQUEST'}
          </Button>

          <p className="text-[10px] text-gray-600 font-mono text-center pt-2">
            * By executing this request, you agree to join the elite queue.
          </p>
        </form>
      ) : (
        <div className="text-center py-4">
          <div className="w-20 h-20 bg-emerald-500 mx-auto mb-6 flex items-center justify-center text-black border-2 border-white shadow-hard relative group">
            <Check className="w-10 h-10" />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 animate-pulse" />
          </div>
          
          <h3 className="font-bold text-white text-2xl mb-2 font-pixel tracking-widest text-emerald-500">
            ACCESS GRANTED
          </h3>
          
          <div className="font-mono text-sm text-gray-400 space-y-1 mb-8">
            <p>ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            <p>STATUS: <span className="text-emerald-500">QUEUED</span></p>
            <p>TARGET: {email}</p>
          </div>

          <Button 
            variant="outline" 
            className="w-full border-emerald-500 text-emerald-500 hover:bg-emerald-500/10"
            onClick={handleReset}
          >
            CLOSE TERMINAL
          </Button>
        </div>
      )}
    </Modal>
  );
};
