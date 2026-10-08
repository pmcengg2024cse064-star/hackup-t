import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  Check, 
  Lock, 
  FileCheck2, 
  ShieldAlert,
  Sparkles,
  Layers,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { EnterpriseServices } from '../enterprise/EnterpriseServices';
import { SecurityMethodology } from '../enterprise/SecurityMethodology';
import { DualEstimatorPathFinder } from '../interactive/DualEstimatorPathFinder';
import { TestimonialsSection } from '../proof/TestimonialsSection';
import { FaqSection } from '../faq/FaqSection';


interface EnterpriseViewProps {
  onRequestAudit: (serviceTitle?: string) => void;
  onRequestAuditWithScope: (scopeDetails: any) => void;
}

export const EnterpriseView: React.FC<EnterpriseViewProps> = ({
  onRequestAudit,
  onRequestAuditWithScope,
}) => {
  return (
    <div className="space-y-16 animate-fadeIn pb-16">
      
      {/* Dedicated Enterprise Hero */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1A0D30] border border-[#C4A77D]/40 shadow-xl backdrop-blur-xl">
              <Building2 className="w-4 h-4 text-[#C4A77D]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#C4A77D]">
                ENTERPRISE CYBER DEFENSE &amp; ADVISORY • COIMBATORE
              </span>
            </div>

            <h1 className="font-serif-header font-bold text-3xl sm:text-5xl lg:text-6xl text-[#F8FAFC] tracking-wide leading-[1.15]">
              Securing Critical Digital Assets.{' '}
              <span className="text-gold-pure block mt-2">
                Zero Downtime Penetration Testing &amp; Compliance.
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#A79AB2] max-w-3xl mx-auto leading-relaxed">
              We simulate real-world advanced persistent threats (APTs), audit cloud architectures, and guide corporate software engineering teams with code-level remediation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onRequestAudit()}
                className="btn-gold-filled px-7 py-4 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center space-x-2 cursor-pointer shadow-xl"
              >
                <Sparkles className="w-4 h-4 text-[#08040F]" />
                <span>Schedule Security Audit</span>
                <ArrowRight className="w-4 h-4 text-[#08040F]" />
              </button>

              <a
                href="#estimator"
                className="btn-gold-outline px-6 py-4 rounded-xl font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center space-x-2"
              >
                <span>Calculate Audit Scope</span>
              </a>
            </div>
          </div>

          {/* Enterprise Key Guarantees Strip */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto">
            {[
              { title: 'Zero False Positives', desc: '100% manual exploit validation' },
              { title: 'Safe-to-Host Cert', desc: 'Free 30-day re-test attestation' },
              { title: 'Mutual NDA Protected', desc: 'Strict regulatory confidentiality' },
              { title: '24/7 DFIR Hotline', desc: 'Emergency breach response in TN' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#1A0D30]/80 border border-[#C4A77D]/20 font-mono text-xs text-center space-y-1 backdrop-blur-md"
              >
                <div className="font-serif-header font-bold text-sm text-[#F8FAFC]">
                  {item.title}
                </div>
                <div className="text-[11px] text-[#A79AB2]">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6 Core Enterprise Practice Cards */}
      <EnterpriseServices onRequestAudit={onRequestAudit} />

      {/* 5-Stage VAPT Methodology */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SecurityMethodology />
      </div>

      {/* Scope Estimator & Pricing Matrix */}
      <DualEstimatorPathFinder
        onRequestAuditWithScope={onRequestAuditWithScope}
        onEnrollCustomTrack={() => {}}
      />

      {/* Enterprise Case Studies & Testimonials */}
      <TestimonialsSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

    </div>
  );
};

