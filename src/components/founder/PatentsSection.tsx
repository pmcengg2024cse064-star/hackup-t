import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Lock, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Layers, 
  Award,
  Zap,
  Activity
} from 'lucide-react';
import { CYBER_PATENTS, CyberPatent } from '../../data/cyberData';

interface PatentsSectionProps {
  onRequestAudit?: () => void;
  onExplorePatent?: (patent: CyberPatent) => void;
}

export const PatentsSection: React.FC<PatentsSectionProps> = ({ 
  onRequestAudit,
  onExplorePatent 
}) => {
  const [selectedPatent, setSelectedPatent] = useState<CyberPatent | null>(null);

  return (
    <section id="patents" className="relative py-16 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-[#111C30]/90 border border-amber-300 dark:border-amber-500/30 shadow-md">
            <Sparkles className="w-4 h-4 text-amber-700 dark:text-[#D4AF37]" />
            <span className="font-mono text-xs uppercase font-bold tracking-widest text-amber-800 dark:text-[#D4AF37]">
              INTELLECTUAL PROPERTY &amp; PROPRIETARY INNOVATIONS
            </span>
          </div>

          <h2 className="font-serif-header font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-[#F8FAFC] tracking-tight leading-[1.15]">
            Patented Cyber Defense <span className="text-amber-700 dark:text-[#D4AF37]">Architecture</span>
          </h2>

          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-2 mb-3" />

          <p className="font-sans text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            Beyond standard open-source tools, Hackup Technology builds and deploys proprietary government-recognized patented technologies for autonomous threat interception and deep binary deconstruction.
          </p>
        </div>

        {/* 2-Column Luxury Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CYBER_PATENTS.map((patent) => {
            const isAI = patent.id === 'patent-ai-firewall';
            const Icon = isAI ? ShieldCheck : Terminal;

            return (
              <div
                key={patent.id}
                className="relative rounded-3xl bg-white dark:bg-[#0B1220]/95 border border-slate-200 dark:border-amber-500/30 hover:border-[#D4AF37] p-6 sm:p-8 flex flex-col justify-between shadow-xl dark:shadow-2xl transition-all duration-300 group hover:-translate-y-1 overflow-hidden"
              >
                {/* Gold Sheen Indicator on Top Edge */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-75 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-6">
                  
                  {/* Card Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-500/15 border border-amber-300 dark:border-amber-500/40 flex items-center justify-center text-amber-800 dark:text-[#D4AF37] shadow-inner group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase font-bold text-amber-800 dark:text-[#D4AF37] tracking-wider block">
                          PATENT SPECIFICATION • {patent.grantYear}
                        </span>
                        <span className="font-mono text-xs font-semibold text-slate-800 dark:text-slate-300">
                          {patent.patentNumber}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/40 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping inline-block" />
                      <span>{patent.filingStatus}</span>
                    </span>
                  </div>

                  {/* Patent Title */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-amber-800 dark:text-[#D4AF37] bg-amber-100/80 dark:bg-amber-950/40 px-2.5 py-0.5 rounded border border-amber-300 dark:border-amber-500/30 inline-block">
                      {patent.category}
                    </span>
                    <h3 className="font-serif-header font-bold text-xl sm:text-2xl text-slate-900 dark:text-[#F8FAFC] leading-snug group-hover:text-amber-700 dark:group-hover:text-[#D4AF37] transition-colors">
                      {patent.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      {patent.abstract}
                    </p>
                  </div>

                  {/* Core Technical Innovations Checklist */}
                  <div className="space-y-2.5 pt-2">
                    <div className="font-mono text-[11px] uppercase font-bold text-slate-700 dark:text-slate-400 tracking-wider flex items-center space-x-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-600 dark:text-[#D4AF37]" />
                      <span>Key Architectural Claims &amp; Inventions:</span>
                    </div>

                    <div className="space-y-2">
                      {patent.coreInnovations.map((item, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-start space-x-2.5 text-xs text-slate-800 dark:text-slate-200 font-sans p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80"
                        >
                          <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-[#D4AF37] shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enterprise Application Context */}
                  <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 text-xs font-mono text-slate-800 dark:text-slate-300">
                    <span className="text-amber-800 dark:text-[#D4AF37] font-bold block mb-1">
                      Enterprise &amp; Sovereign Deployment:
                    </span>
                    <span>{patent.enterpriseApplication}</span>
                  </div>

                </div>

                {/* Card Footer Actions */}
                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => {
                      if (onExplorePatent) onExplorePatent(patent);
                      else setSelectedPatent(patent);
                    }}
                    className="w-full sm:w-1/2 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-300 dark:bg-[#111C30] dark:hover:bg-[#1A2844] dark:text-[#D4AF37] dark:border-amber-500/40 transition-all flex items-center justify-center space-x-1.5 cursor-pointer shadow-md"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Patent Claims</span>
                  </button>

                  <button
                    onClick={onRequestAudit}
                    className="w-full sm:w-1/2 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider btn-gold-filled flex items-center justify-center space-x-1.5 cursor-pointer shadow-lg"
                  >
                    <span>Request VAPT Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Patent Claims Detailed Modal */}
      {selectedPatent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-[#0B1220] border border-amber-400 dark:border-amber-500/40 p-6 sm:p-8 shadow-2xl text-slate-900 dark:text-slate-100 overflow-hidden max-h-[90vh] overflow-y-auto space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-[#B38728] dark:text-[#D4AF37]" />
                <span className="font-mono text-xs font-bold text-[#9E721D] dark:text-[#D4AF37] uppercase">
                  OFFICIAL PATENT DOSSIER • {selectedPatent.patentNumber}
                </span>
              </div>
              <button
                onClick={() => setSelectedPatent(null)}
                className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <h3 className="font-serif-header font-bold text-2xl text-slate-900 dark:text-white">
              {selectedPatent.title}
            </h3>

            <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {selectedPatent.abstract}
            </p>

            <div className="space-y-3 font-mono text-xs">
              <div className="text-[#9E721D] dark:text-[#D4AF37] font-bold uppercase tracking-wider">
                Full Technical Architecture Claims:
              </div>
              {selectedPatent.coreInnovations.map((inn, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-medium">
                  <span className="text-[#9E721D] dark:text-[#D4AF37] font-bold mr-2">Claim {i + 1}:</span>
                  <span>{inn}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => {
                  setSelectedPatent(null);
                  if (onRequestAudit) onRequestAudit();
                }}
                className="btn-gold-filled px-6 py-2.5 rounded-xl font-mono text-xs font-bold uppercase cursor-pointer"
              >
                Inquire for Enterprise Deployment →
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
