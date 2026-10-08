import React, { useState } from 'react';
import { 
  Building2, 
  GraduationCap, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  Search
} from 'lucide-react';
import { PARTNER_INSTITUTIONS, PartnerInstitution } from '../../data/cyberData';

interface AcademicFootprintProps {
  onPartnerInquiry?: (collegeName?: string) => void;
}

export const AcademicFootprint: React.FC<AcademicFootprintProps> = ({ 
  onPartnerInquiry 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Institutions');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All Institutions',
    'Premier Tech & Universities',
    'Heritage & Arts Institutions',
    'Polytechnic & Specialized'
  ];

  const filteredInstitutions = PARTNER_INSTITUTIONS.filter((inst) => {
    const matchesCategory = selectedCategory === 'All Institutions' || inst.category === selectedCategory;
    const matchesSearch = inst.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          inst.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          inst.engagement.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="academic-footprint" className="relative py-16 overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[300px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#111C30]/90 border border-amber-500/30 shadow-lg">
            <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#D4AF37]">
              VERIFIED INSTITUTIONAL FOOTPRINT • 54+ HIGHER EDUCATION PARTNERS
            </span>
          </div>

          <h2 className="font-serif-header font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F8FAFC] light:text-[#0F172A] tracking-tight leading-[1.15]">
            Empowering Tamil Nadu's <span className="text-gold-pure">Colleges &amp; Universities</span>
          </h2>

          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-2 mb-3" />

          <p className="font-sans text-sm sm:text-base text-slate-400 light:text-slate-600 leading-relaxed">
            Hackup Technology serves as the official cyber range and curriculum training partner for over 54 premier universities, engineering institutes, and autonomous colleges across South India.
          </p>
        </div>

        {/* Controls Row: Search & Category Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-slate-950 shadow-md font-bold'
                    : 'bg-[#111C30]/80 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-white border border-slate-800 light:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search college, city, or track..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9.5 pr-4 py-2 rounded-xl bg-[#111C30]/90 light:bg-white border border-slate-800 light:border-slate-300 text-xs font-mono text-white light:text-slate-900 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

        </div>

        {/* Institutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredInstitutions.map((inst, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0B1220]/90 dark:bg-[#0B1220]/90 light:bg-white border border-slate-800/80 light:border-slate-200 hover:border-amber-500/50 flex flex-col justify-between space-y-3 transition-all duration-300 shadow-md group hover:-translate-y-0.5"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-[#D4AF37] border border-amber-500/30">
                    {inst.badge}
                  </span>
                  <div className="flex items-center space-x-1 text-[11px] font-mono text-slate-400">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    <span>{inst.location}</span>
                  </div>
                </div>

                <h4 className="font-serif-header font-bold text-sm sm:text-base text-slate-100 light:text-slate-900 group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {inst.name}
                </h4>

                <p className="font-sans text-xs text-slate-400 light:text-slate-600 leading-relaxed font-medium">
                  <span className="text-[#D4AF37] font-semibold">Program: </span>
                  {inst.engagement}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/60 light:border-slate-200 flex items-center justify-between text-[11px] font-mono">
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified MoU &amp; ATC Labs
                </span>

                <button
                  onClick={() => onPartnerInquiry && onPartnerInquiry(inst.name)}
                  className="text-[#D4AF37] hover:underline cursor-pointer flex items-center gap-1 font-bold"
                >
                  <span>Inquire</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Partner CTA Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#111C30] via-[#0B1220] to-[#111C30] border border-amber-500/30 text-center space-y-4 shadow-xl">
          <h3 className="font-serif-header font-bold text-xl sm:text-2xl text-white">
            Looking to Establish an EC-Council Cyber Range / CoE at Your Institution?
          </h3>
          <p className="font-sans text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Hackup Technology sets up turn-key on-campus Cyber Ranges, provides accredited industrial training, curriculum modernization (BOS), and faculty development programs across South India.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onPartnerInquiry && onPartnerInquiry('Campus Center of Excellence (CoE)')}
              className="btn-gold-filled px-8 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center space-x-2 cursor-pointer shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Partner with Hackup Technology</span>
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
