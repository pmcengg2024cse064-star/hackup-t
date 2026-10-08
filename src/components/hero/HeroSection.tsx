import React from 'react';
import { 
  GraduationCap, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Terminal,
  Building
} from 'lucide-react';

interface HeroSectionProps {
  onDiscoverEnterprise: () => void;
  onExploreAcademy: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDiscoverEnterprise,
  onExploreAcademy,
}) => {
  return (
    <section className="relative pt-12 pb-16 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#C4A77D]/6 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-[#C4A77D]/30 shadow-xl backdrop-blur-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4A77D] inline-block animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#C4A77D]">
              OFFICIAL EC-COUNCIL ACCREDITED TRAINING CENTER • COIMBATORE
            </span>
          </div>
        </div>

        {/* Main Headline (High-Contrast Luxury Serif) & Sub-headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="font-serif-header font-bold text-3xl sm:text-4xl lg:text-5xl tracking-wide text-[#F1F5F9] leading-[1.2]">
            Premier Cybersecurity &amp; Tech Advisory:{' '}
            <span className="text-gold-pure block mt-2">
              Securing Your Enterprise, Training Your Talent.
            </span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Trusted Partners in Digital Excellence. Delivering high-assurance penetration testing and elite EC-Council certified cyber workforce development.
          </p>
        </div>

        {/* Dual Portal Layout (Side-by-Side Glassmorphic Panels with 1px Gold Borders) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14 max-w-5xl mx-auto">
          
          {/* Left Panel: Enterprise Solutions */}
          <div className="luxury-glass-card rounded-3xl p-7 sm:p-9 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Gold Skyscraper / Lock Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-900/90 border border-[#C4A77D]/40 p-3.5 flex items-center justify-center text-[#C4A77D] shadow-lg group-hover:scale-105 transition-transform">
                  <Building className="w-7 h-7" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C4A77D] bg-slate-900/80 px-3 py-1 rounded-full border border-[#C4A77D]/30">
                  B2B ASSURANCE
                </span>
              </div>

              <h2 className="font-serif-header font-bold text-2xl sm:text-3xl text-[#F1F5F9] tracking-wide mb-3">
                Enterprise Solutions
              </h2>

              <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                Comprehensive offensive security assessments and compliance frameworks defending critical corporate infrastructure with zero downtime.
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 mb-8">
                {[
                  'Enterprise VAPT (Web, Mobile & APIs)',
                  'Cloud Security & CIS Benchmark Audits',
                  'Red Teaming & Adversary Simulation',
                  'Digital Forensics & Incident Triage (DFIR)',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm font-sans text-[#E2E8F0]">
                    <div className="w-5 h-5 rounded-full bg-[#C4A77D]/15 border border-[#C4A77D]/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#C4A77D]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button: Gold Filled */}
            <div>
              <button
                onClick={onDiscoverEnterprise}
                className="btn-gold-filled w-full py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Discover Enterprise Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Panel: Hackup Academy */}
          <div className="luxury-glass-card rounded-3xl p-7 sm:p-9 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Gold Graduation Cap / Shield Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-900/90 border border-[#C4A77D]/40 p-3.5 flex items-center justify-center text-[#C4A77D] shadow-lg group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C4A77D] bg-slate-900/80 px-3 py-1 rounded-full border border-[#C4A77D]/30">
                  EC-COUNCIL ATC
                </span>
              </div>

              <h2 className="font-serif-header font-bold text-2xl sm:text-3xl text-[#F1F5F9] tracking-wide mb-3">
                Hackup Academy
              </h2>

              <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                Global EC-Council accredited training, live cyber range attack-defense simulations, and Coimbatore industrial internship programs.
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 mb-8">
                {[
                  'Certified Ethical Hacker (CEH v13 AI)',
                  'Live SOC Analyst & Threat Hunting Labs',
                  'DevSecOps & Multi-Cloud Defense',
                  '1/3/6-Month College Industrial Internships',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm font-sans text-[#E2E8F0]">
                    <div className="w-5 h-5 rounded-full bg-[#C4A77D]/15 border border-[#C4A77D]/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#C4A77D]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button: Gold Outline */}
            <div>
              <button
                onClick={onExploreAcademy}
                className="btn-gold-outline w-full py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Explore The Academy</span>
                <ArrowRight className="w-4 h-4 text-[#C4A77D]" />
              </button>
            </div>
          </div>

        </div>

        {/* Trust Bar (Centered Elegant Icons & Numbers) */}
        <div className="mt-14 max-w-4xl mx-auto pt-8 border-t border-[#C4A77D]/20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            
            <div className="flex flex-col items-center space-y-1">
              <div className="flex items-center space-x-2 text-[#C4A77D]">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-serif-header font-bold text-2xl text-[#F1F5F9]">50+</span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#94A3B8]">
                Corporate Partners
              </span>
            </div>

            <div className="flex flex-col items-center space-y-1">
              <div className="flex items-center space-x-2 text-[#C4A77D]">
                <Users className="w-5 h-5" />
                <span className="font-serif-header font-bold text-2xl text-[#F1F5F9]">1,000+</span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#94A3B8]">
                Certified Alumni
              </span>
            </div>

            <div className="flex flex-col items-center space-y-1">
              <div className="flex items-center space-x-2 text-[#C4A77D]">
                <Terminal className="w-5 h-5" />
                <span className="font-serif-header font-bold text-2xl text-[#F1F5F9]">100%</span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#94A3B8]">
                Practical Labs
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
