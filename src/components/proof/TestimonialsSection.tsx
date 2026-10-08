import React, { useState } from 'react';
import { 
  Building2, 
  GraduationCap, 
  Star, 
  TrendingUp, 
  ShieldCheck 
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/cyberData';

export const TestimonialsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'enterprise' | 'alumni'>('enterprise');

  const filteredTestimonials = TESTIMONIALS_DATA.filter(
    (t) => t.category === activeCategory
  );

  return (
    <section id="testimonials" className="relative py-20 bg-slate-50 dark:bg-[#070A0F]/90 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/70 border border-[#B38728]/40 dark:border-amber-500/40 text-[#9E721D] dark:text-amber-300 font-mono text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-[#B38728] dark:text-amber-400" />
            <span>VERIFIED OUTCOMES &amp; PROOF</span>
          </div>

          <h2 className="font-serif-header font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
            Trusted by Enterprise CISOs &amp; Certified Alumni
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            Read authentic feedback from organizations we defend and graduates who launched high-growth cybersecurity careers from our Coimbatore academy.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-md mt-2">
            <button
              onClick={() => setActiveCategory('enterprise')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === 'enterprise'
                  ? 'bg-gradient-to-r from-[#B38728] to-[#D4AF37] text-slate-950 shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Enterprise Client Audits (B2B)</span>
            </button>

            <button
              onClick={() => setActiveCategory('alumni')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === 'alumni'
                  ? 'bg-gradient-to-r from-[#881337] to-[#7A1426] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Alumni Placed in MNCs (B2C)</span>
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-1 ${
                activeCategory === 'enterprise' ? 'hover:border-[#B38728]' : 'hover:border-rose-500'
              }`}
            >
              {/* Subtle top indicator */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] ${
                activeCategory === 'enterprise' ? 'bg-[#D4AF37]' : 'bg-[#881337]'
              }`} />

              <div>
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>

                  <span className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                    activeCategory === 'enterprise'
                      ? 'text-[#9E721D] dark:text-amber-300 bg-[#FFFBEB] dark:bg-amber-950/60 border-[#FDE68A] dark:border-amber-500/30'
                      : 'text-[#881337] dark:text-rose-300 bg-[#FFF1F2] dark:bg-rose-950/60 border-[#FECDD3] dark:border-rose-800/40'
                  }`}>
                    {item.verifiedBadge}
                  </span>
                </div>

                {/* Quote */}
                <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6 font-medium">
                  "{item.quote}"
                </p>

                {/* Outcome Pill */}
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-700 dark:text-slate-300 mb-6 flex items-center space-x-2 shadow-sm">
                  <TrendingUp className={`w-4 h-4 ${activeCategory === 'enterprise' ? 'text-[#B38728] dark:text-amber-400' : 'text-[#881337] dark:text-rose-400'} shrink-0`} />
                  <span className="font-bold text-slate-900 dark:text-white">{item.outcomeMetric}</span>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center space-x-3.5">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-serif-header font-bold text-sm text-white ${
                  activeCategory === 'enterprise' ? 'bg-[#D4AF37] text-slate-950 font-black' : 'bg-[#881337] text-white'
                }`}>
                  {item.avatarText}
                </div>

                <div>
                  <div className="font-serif-header font-bold text-sm text-slate-900 dark:text-white">
                    {item.name}
                  </div>
                  <div className="font-sans text-xs text-slate-600 dark:text-slate-400 font-medium">
                    {item.role}
                  </div>
                  <div className={`font-mono text-[11px] mt-0.5 font-bold ${
                    activeCategory === 'enterprise' ? 'text-[#9E721D] dark:text-amber-400' : 'text-[#881337] dark:text-rose-400'
                  }`}>
                    {item.organization}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
