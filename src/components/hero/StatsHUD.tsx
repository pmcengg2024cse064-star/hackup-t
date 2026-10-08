import React, { useState, useEffect } from 'react';
import { ShieldCheck, Users, Terminal, Clock, Award } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  value: string;
  numberTarget: number;
  suffix: string;
  label: string;
  sublabel: string;
  color: string;
  borderColor: string;
}

export const StatsHUD: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: number]: number }>({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  });

  const stats: StatItem[] = [
    {
      icon: Users,
      value: '1,000+',
      numberTarget: 1000,
      suffix: '+',
      label: 'Engineers Trained',
      sublabel: 'EC-Council & Red Team alumni',
      color: 'text-amber-400',
      borderColor: 'border-amber-500/30',
    },
    {
      icon: ShieldCheck,
      value: '50+',
      numberTarget: 50,
      suffix: '+',
      label: 'Enterprise Audits',
      sublabel: 'VAPT & RBI / SOC 2 reports',
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
    },
    {
      icon: Terminal,
      value: '100%',
      numberTarget: 100,
      suffix: '%',
      label: 'Practical Labs',
      sublabel: 'Zero static slide decks',
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
    },
    {
      icon: Award,
      value: '100%',
      numberTarget: 100,
      suffix: '%',
      label: 'First-Attempt Audit Pass',
      sublabel: 'ISO 27001 & DPDP Act readiness',
      color: 'text-blue-400',
      borderColor: 'border-blue-500/30',
    },
    {
      icon: Clock,
      value: '24/7',
      numberTarget: 24,
      suffix: '/7',
      label: 'SOC & DFIR Response',
      sublabel: 'Rapid incident hotline in TN',
      color: 'text-red-400',
      borderColor: 'border-red-500/30',
    },
  ];

  useEffect(() => {
    const duration = 1600;
    const steps = 40;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      setCounts({
        0: Math.floor(1000 * easeProgress),
        1: Math.floor(50 * easeProgress),
        2: Math.floor(100 * easeProgress),
        3: Math.floor(100 * easeProgress),
        4: Math.floor(24 * easeProgress),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 mb-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          const displayVal = idx === 4 ? '24/7' : `${counts[idx]?.toLocaleString() || 0}${stat.suffix}`;

          return (
            <div
              key={stat.label}
              className={`relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:${stat.borderColor} p-3.5 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1 ${
                idx === 4 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              {/* Subtle top indicator line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B38728]/40 to-transparent" />

              <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                <div className="p-1.5 sm:p-2 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800">
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${stat.color}`} />
                </div>
                <span className="font-mono text-[9px] sm:text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                  LIVE STATS
                </span>
              </div>

              <div className="font-display font-extrabold text-xl sm:text-2xl lg:text-3xl text-slate-900 dark:text-white tracking-tight">
                {displayVal}
              </div>

              <div className="font-sans font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 mt-1 line-clamp-1">
                {stat.label}
              </div>

              <div className="font-mono text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 truncate font-medium">
                {stat.sublabel}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
