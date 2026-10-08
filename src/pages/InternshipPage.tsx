import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Clock, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Building, 
  Calendar,
  Sparkles,
  Download
} from 'lucide-react';
import { COIMBATORE_INTERNSHIP_DETAILS } from '../data/cyberData';

interface InternshipPageProps {
  onApply: () => void;
}

export const InternshipPage: React.FC<InternshipPageProps> = ({ onApply }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeIn pb-20">
      
      {/* Hero Header */}
      <section className="text-center space-y-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-800/60 shadow-md">
          <GraduationCap className="w-4 h-4 text-[#881337] dark:text-rose-400" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#881337] dark:text-rose-300 font-bold">
            TAMIL NADU ENGINEERING &amp; MCA STUDENTS
          </span>
        </div>

        <h1 className="font-serif-header font-bold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight">
          Cybersecurity Industrial <span className="text-[#881337] dark:text-rose-400">Internship &amp; Apprenticeship</span>
        </h1>

        <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          {COIMBATORE_INTERNSHIP_DETAILS.subtitle} Work alongside practicing red teamers and SOC engineers directly at our Ganapathy, Coimbatore campus.
        </p>

        <div className="pt-2 max-w-md sm:max-w-none mx-auto">
          <button
            onClick={onApply}
            className="btn-burgundy-filled w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center space-x-2 cursor-pointer shadow-xl text-white"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Apply for Coimbatore Internship Cohort</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </section>

      {/* Visual Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-rose-300 dark:border-rose-900/40 shadow-xl">
        <div className="h-64 sm:h-96 w-full overflow-hidden bg-slate-950 relative">
          <img
            src="/images/academy_internship.jpg"
            alt="Coimbatore Cybersecurity Apprenticeship Lab"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-rose-200 uppercase tracking-wider bg-rose-950/90 px-3 py-1 rounded-full border border-rose-600/50">
                GANAPATHY CAMPUS LABS
              </span>
              <h2 className="font-serif-header font-bold text-xl sm:text-3xl text-white mt-2">
                Real Red Team Shadowing &amp; Live Client Scopes
              </h2>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-200 bg-slate-950/90 px-3 py-1.5 rounded-xl border border-slate-700">
              <MapPin className="w-4 h-4 text-[#881337] dark:text-rose-400" />
              <span>Ganapathy, Coimbatore</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Duration Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {COIMBATORE_INTERNSHIP_DETAILS.durations.map((tier, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-900 rounded-3xl p-7 flex flex-col justify-between space-y-6 border border-slate-200 dark:border-slate-800 hover:border-rose-400/60 shadow-lg transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#881337] dark:text-rose-300 bg-rose-100 dark:bg-rose-950/80 px-3 py-1 rounded-full border border-rose-300 dark:border-rose-800/40">
                  {tier.period}
                </span>
                <Clock className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              </div>

              <h3 className="font-serif-header font-bold text-xl text-slate-900 dark:text-white">
                {idx === 0 ? 'Foundation Track' : idx === 1 ? 'Advanced Specialization' : 'Full Red Team Apprenticeship'}
              </h3>

              <p className="font-sans text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {tier.desc}
              </p>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                <span className="text-[#881337] dark:text-rose-400 font-bold block mb-0.5">Target Applicants:</span>
                <span className="text-slate-900 dark:text-slate-200 font-semibold">{tier.target}</span>
              </div>
            </div>

            <button
              onClick={onApply}
              className="btn-burgundy-outline w-full py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Apply for this Track</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Internship Perks & Facilities */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 space-y-6 shadow-md">
        <h3 className="font-serif-header font-bold text-2xl text-slate-900 dark:text-white">
          Why Engineering College Students Choose Hackup Technology:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {COIMBATORE_INTERNSHIP_DETAILS.perks.map((perk, idx) => (
            <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-sans font-medium">
              <div className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-800/60 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#881337] dark:text-rose-400" />
              </div>
              <span>{perk}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
