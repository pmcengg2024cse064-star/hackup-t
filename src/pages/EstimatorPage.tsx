import React from 'react';
import { Calculator } from 'lucide-react';
import { DualEstimatorPathFinder } from '../components/interactive/DualEstimatorPathFinder';
import { FaqSection } from '../components/faq/FaqSection';

interface EstimatorPageProps {
  onRequestAuditWithScope: (scopeDetails: any) => void;
  onEnrollCustomTrack: (trackDetails: any) => void;
}

export const EstimatorPage: React.FC<EstimatorPageProps> = ({
  onRequestAuditWithScope,
  onEnrollCustomTrack,
}) => {
  return (
    <div className="space-y-16 animate-fadeIn pb-16">
      
      {/* Estimator Hero */}
      <section className="relative pt-12 pb-8 overflow-hidden text-center space-y-4 max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1A0D30] border border-[#C4A77D]/40 shadow-xl backdrop-blur-xl">
          <Calculator className="w-4 h-4 text-[#C4A77D]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#C4A77D]">
            INSTANT SCOPE &amp; CAREER ROADMAP GENERATOR
          </span>
        </div>

        <h1 className="font-serif-header font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
          Interactive <span className="text-gold-pure">Configurator</span>
        </h1>

        <p className="font-sans text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Calculate your enterprise VAPT turnaround timelines and regulatory scope, or generate a tailored 3-stage cybersecurity career roadmap based on your current experience.
        </p>
      </section>

      {/* Estimator Component */}
      <DualEstimatorPathFinder
        onRequestAuditWithScope={onRequestAuditWithScope}
        onEnrollCustomTrack={onEnrollCustomTrack}
      />

      {/* FAQs */}
      <FaqSection />

    </div>
  );
};
