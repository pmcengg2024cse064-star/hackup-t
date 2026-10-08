import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Users
} from 'lucide-react';
import { COIMBATORE_INTERNSHIP_DETAILS } from '../../data/cyberData';

interface InternshipSpotlightProps {
  onApply: () => void;
}

export const InternshipSpotlight: React.FC<InternshipSpotlightProps> = ({ onApply }) => {
  return (
    <div className="mt-16 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-rose-950/30 dark:via-slate-900/90 dark:to-slate-900 border-2 border-rose-400 dark:border-rose-900/50 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
      
      {/* Decorative background aura */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Info Column */}
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-800/60 text-[#881337] dark:text-rose-300 font-mono text-xs font-bold">
            <GraduationCap className="w-3.5 h-3.5 text-[#881337] dark:text-rose-400" />
            <span>COLLEGE INTERNSHIP &amp; INDUSTRIAL TRAINING</span>
          </div>

          <h3 className="font-serif-header font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-tight leading-tight">
            Cybersecurity Industrial Training in <span className="text-[#881337] dark:text-rose-400">Coimbatore</span>
          </h3>

          <p className="font-sans text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            {COIMBATORE_INTERNSHIP_DETAILS.subtitle}
          </p>

          <div className="flex items-center space-x-2 text-xs font-mono text-[#881337] dark:text-rose-300 bg-rose-50/70 dark:bg-slate-950/80 border border-rose-200 dark:border-slate-800 p-3 rounded-xl font-semibold">
            <MapPin className="w-4 h-4 text-[#881337] dark:text-rose-400 shrink-0" />
            <span>{COIMBATORE_INTERNSHIP_DETAILS.officeLocation}</span>
          </div>

          {/* Perks list */}
          <div className="space-y-2 pt-2">
            {COIMBATORE_INTERNSHIP_DETAILS.perks.map((perk, idx) => (
              <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#881337] dark:text-rose-400 shrink-0 mt-0.5" />
                <span>{perk}</span>
              </div>
            ))}
          </div>

          <div className="pt-3">
            <button
              onClick={onApply}
              className="px-6 py-3.5 rounded-xl font-mono font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#881337] to-[#7A1426] hover:from-[#5B0E1B] hover:to-[#881337] shadow-xl shadow-rose-950/30 transition-all flex items-center space-x-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Apply for Coimbatore Internship Batch</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Right Duration Tracks Grid */}
        <div className="lg:col-span-5 space-y-3.5">
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1 font-bold">
            Select Internship Duration:
          </div>

          {COIMBATORE_INTERNSHIP_DETAILS.durations.map((dur, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-rose-400/60 transition-all group shadow-sm"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-serif-header font-bold text-sm text-slate-900 dark:text-white group-hover:text-[#881337] dark:group-hover:text-rose-400 transition-colors">
                  {dur.period}
                </span>
                <span className="font-mono text-[10px] text-[#881337] dark:text-rose-300 bg-rose-100 dark:bg-rose-950/60 px-2 py-0.5 rounded border border-rose-300 dark:border-rose-800/40 font-bold">
                  {dur.target}
                </span>
              </div>
              <p className="font-sans text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {dur.desc}
              </p>
            </div>
          ))}

          <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-700 dark:text-slate-400 flex items-center justify-between font-bold">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-[#881337] dark:text-rose-400" />
              <span>Placement Assistance:</span>
            </div>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">40+ Hiring Partners</span>
          </div>
        </div>

      </div>
    </div>
  );
};
