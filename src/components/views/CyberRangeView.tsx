import React from 'react';
import { Terminal, Shield, Flame, Award, Sparkles, ArrowRight } from 'lucide-react';
import { CyberRangeVisualizer } from '../academy/CyberRangeVisualizer';

interface CyberRangeViewProps {
  onRequestDemo: () => void;
}

export const CyberRangeView: React.FC<CyberRangeViewProps> = ({ onRequestDemo }) => {
  return (
    <div className="space-y-16 animate-fadeIn pb-16">
      
      {/* Cyber Range Dedicated Hero */}
      <section className="relative pt-12 pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1A0D30] border border-[#C4A77D]/40 shadow-xl backdrop-blur-xl">
            <Terminal className="w-4 h-4 text-[#C4A77D]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#C4A77D]">
              LIVE SIMULATION ENVIRONMENT • ZERO STATIC SLIDES
            </span>
          </div>

          <h1 className="font-serif-header font-bold text-3xl sm:text-5xl text-[#F8FAFC] tracking-wide leading-tight">
            The Hackup <span className="text-gold-pure">Cyber Range</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#A79AB2] max-w-2xl mx-auto leading-relaxed">
            Experience real attack-defense topology simulation. Click the vectors below to test simulated SQL Injections, Kerberoasting, and Cloud Container Escapes.
          </p>
        </div>
      </section>

      {/* Interactive Visualizer Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CyberRangeVisualizer />
      </div>

      {/* CTA Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="luxury-glass-card rounded-3xl p-8 space-y-4">
          <h3 className="font-serif-header font-bold text-2xl text-[#F8FAFC]">
            Want Full Access to Our Coimbatore Cyber Range?
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#A79AB2] max-w-xl mx-auto">
            Enroll in our CEH v13 or Practical SOC Analyst cohorts to receive personal VPN credentials to 2,200+ attack tools and target subnets.
          </p>
          <div className="pt-2">
            <button
              onClick={onRequestDemo}
              className="btn-gold-filled px-6 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center space-x-2 mx-auto cursor-pointer"
            >
              <span>Book a Live Cyber Range Demo Session</span>
              <ArrowRight className="w-4 h-4 text-[#08040F]" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
