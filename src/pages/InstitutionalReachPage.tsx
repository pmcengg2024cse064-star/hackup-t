import React from 'react';
import { 
  Building2, 
  GraduationCap, 
  Award, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';
import { AcademicFootprint } from '../components/institutional/AcademicFootprint';
import { PARTNER_INSTITUTIONS } from '../data/cyberData';

interface InstitutionalReachPageProps {
  onRequestConsultation: () => void;
}

export const InstitutionalReachPage: React.FC<InstitutionalReachPageProps> = ({
  onRequestConsultation
}) => {
  return (
    <div className="space-y-16 animate-fadeIn pb-20">
      
      {/* Hero Header */}
      <section className="relative pt-12 pb-8 overflow-hidden text-center space-y-4 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#111C30] border border-amber-500/40 shadow-xl backdrop-blur-xl">
          <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37]">
            ACADEMIC COLLABORATION &amp; 54+ HIGHER ED HUBS
          </span>
        </div>

        <h1 className="font-serif-header font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F8FAFC] tracking-tight leading-[1.15]">
          Institutional Footprint Across <span className="text-gold-pure">South India</span>
        </h1>

        <p className="font-sans text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
          From Tier-1 universities like VIT and PSG TECH to heritage colleges across Tamil Nadu, Hackup Technology modernizes cyber curriculum, deploys on-campus Cyber Ranges, and certifies over 1,00,000 national cyber defenders.
        </p>

        <div className="pt-2">
          <button
            onClick={onRequestConsultation}
            className="btn-gold-filled px-8 py-4 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider inline-flex items-center space-x-2 cursor-pointer shadow-xl"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Establish Cyber CoE at Your Institution</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </section>

      {/* Embedded Academic Footprint Component */}
      <AcademicFootprint onPartnerInquiry={() => onRequestConsultation()} />

    </div>
  );
};
