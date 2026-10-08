import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercentage(Math.round(scrollProgress));
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40">
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0F081D]/90 dark:bg-[#0F081D]/90 light:bg-white border border-[#C4A77D]/40 text-[#C4A77D] hover:text-white hover:border-[#D4AF37] hover:bg-[#1A0D30] shadow-xl shadow-black/50 backdrop-blur-xl transition-all cursor-pointer overflow-hidden"
        title="Scroll to top"
        aria-label="Scroll to top"
      >
        {/* Circular Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 p-1" viewBox="0 0 36 36">
          <path
            className="text-slate-800/40"
            strokeWidth="2.5"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="text-[#D4AF37] transition-all duration-150"
            strokeDasharray={`${scrollPercentage}, 100`}
            strokeWidth="2.5"
            strokeLinecap="round"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>

        <ArrowUp className="w-4 h-4 text-[#D4AF37] group-hover:-translate-y-0.5 transition-transform relative z-10" />
      </button>
    </div>
  );
};
