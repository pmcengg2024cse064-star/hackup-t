import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ArrowRight, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  Cloud, 
  Terminal, 
  FileCheck2, 
  Scale, 
  AlertTriangle,
  FileCode,
  Users,
  Clock,
  ArrowUpRight,
  Shield,
  Download
} from 'lucide-react';
import { ENTERPRISE_SERVICES } from '../data/cyberData';
import { SecurityMethodology } from '../components/enterprise/SecurityMethodology';
import { TestimonialsSection } from '../components/proof/TestimonialsSection';
import { FaqSection } from '../components/faq/FaqSection';

interface EnterprisePageProps {
  onRequestAudit: (serviceTitle?: string) => void;
  onRequestAuditWithScope: (scopeDetails: any) => void;
}

export const EnterprisePage: React.FC<EnterprisePageProps> = ({
  onRequestAudit,
  onRequestAuditWithScope,
}) => {
  // Scoping calculator state
  const [webAppCount, setWebAppCount] = useState<number>(2);
  const [ipCount, setIpCount] = useState<number>(10);
  const [cloudAccounts, setCloudAccounts] = useState<number>(1);
  const [includePam, setIncludePam] = useState<boolean>(true);
  const [includeCompliance, setIncludeCompliance] = useState<boolean>(true);

  const calculateEstimate = () => {
    let days = 5;
    days += webAppCount * 2;
    days += Math.ceil(ipCount / 10);
    days += cloudAccounts * 3;
    if (includePam) days += 3;
    if (includeCompliance) days += 4;
    return {
      turnaroundDays: `${days} - ${days + 4} Business Days`,
      consultantTier: webAppCount > 4 || ipCount > 30 ? 'Principal Red Team Lead + 2 Senior Auditors' : 'Senior VAPT Consultant + SOC Reviewer',
      complianceReady: includeCompliance ? 'ISO 27001, SOC 2 & DPDP Aligned' : 'Standard OWASP Top 10 Attestation'
    };
  };

  const currentEst = calculateEstimate();

  return (
    <div className="space-y-20 animate-fadeIn pb-24 font-sans text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-[#080808]">
      
      {/* 1. EXECUTIVE HERO (RICH WHITE & GOLD THEME) */}
      <section className="relative pt-10 sm:pt-16 pb-16 overflow-hidden">
        
        {/* Background Brushed Gold Aura */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-amber-500/15 blur-[170px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-[#141414] border border-amber-300 dark:border-amber-500/40 shadow-md backdrop-blur-md">
              <Building2 className="w-4 h-4 text-amber-700 dark:text-[#D4AF37]" />
              <span className="font-mono text-xs uppercase font-bold tracking-widest text-amber-900 dark:text-[#D4AF37]">
                ENTERPRISE OFFENSIVE ADVISORY &bull; GANAPATHY, COIMBATORE
              </span>
            </div>

            <h1 className="font-serif-header font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Protecting Mission-Critical{' '}
              <span className="text-amber-700 dark:text-gold-pure block mt-2">
                Infrastructure &amp; Data Assets.
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Zero-downtime Penetration Testing, Cloud Security, Privilege Access Governance (PAM), and 24/7 Managed SOC operations engineered by active red team consultants.
            </p>

            {/* Compliance Badges Strip */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {['ISO/IEC 27001:2022', 'CERT-In Empaneled Methodologies', 'SOC 2 Type II', 'Indian DPDP Act 2023', 'RBI & SEBI Cyber Frameworks'].map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-amber-50 dark:bg-[#141414] border border-amber-300 dark:border-amber-500/30 text-[11px] font-mono text-amber-900 dark:text-amber-200 font-semibold shadow-sm"
                >
                  &bull; {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 max-w-xl mx-auto">
              <button
                onClick={() => onRequestAudit('Enterprise VAPT & Cloud Assessment')}
                className="w-full sm:w-auto btn-gold-filled px-8 py-4 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl flex items-center justify-center space-x-2 transition-all hover:scale-102 cursor-pointer text-slate-950"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Book Security Assessment</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <a
                href="#calculator"
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 dark:bg-[#141414] dark:hover:bg-[#1A1A1A] dark:text-[#D4AF37] dark:border-amber-500/40 transition-all flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>Calculate Audit Scope &amp; SLAs &darr;</span>
              </a>
            </div>

          </div>

          {/* Key SLA Guarantees Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto">
            {[
              { title: 'Zero False Positives', desc: '100% manual exploit validation & PoC replays' },
              { title: 'Safe-to-Host Cert', desc: 'Free 30-day remediation re-test attestation' },
              { title: 'Mutual NDA Protected', desc: 'Legally binding corporate confidentiality' },
              { title: '90-Min DFIR Triage', desc: 'Emergency incident response across Tamil Nadu' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-[#141414] border border-slate-200 dark:border-amber-500/25 text-center space-y-1 shadow-md"
              >
                <div className="font-serif-header font-bold text-sm text-slate-900 dark:text-white">
                  {item.title}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. MODULAR 6-CARD SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="font-mono text-xs uppercase font-bold tracking-widest text-amber-800 dark:text-[#D4AF37]">
            OFFENSIVE &amp; DEFENSIVE PRACTICE AREAS
          </div>
          <h2 className="font-serif-header font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white">
            Enterprise Services Matrix
          </h2>
          <div className="w-16 h-[2px] bg-amber-500 dark:bg-[#D4AF37] mx-auto mt-2 mb-3" />
          <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
            Engineered by active red team consultants. Click any service card to view complete specifications, CVSS findings samples, and compliance matrix.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ENTERPRISE_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="rounded-3xl bg-white dark:bg-[#141414] border border-slate-200 dark:border-amber-500/25 hover:border-amber-400 dark:hover:border-[#D4AF37] p-7 flex flex-col justify-between space-y-6 shadow-xl dark:shadow-2xl transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-amber-800 dark:text-[#D4AF37] uppercase tracking-wider">
                    0{index + 1}. {service.shortTitle}
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-900 dark:text-[#D4AF37] border border-amber-300 dark:border-amber-500/30">
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-serif-header font-bold text-xl text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {service.description}
                </p>

                {/* Standards Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {service.standards.slice(0, 3).map((std, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-medium">
                      {std}
                    </span>
                  ))}
                </div>

                {/* Key Deliverables */}
                <div className="space-y-1.5 pt-3 border-t border-slate-200 dark:border-slate-800">
                  {service.keyDeliverables.slice(0, 3).map((deliv, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <Check className="w-3.5 h-3.5 text-amber-600 dark:text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="truncate">{deliv}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
                <Link
                  to={`/enterprise/services/${service.id}`}
                  className="w-full py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-amber-50 dark:text-slate-950 flex items-center justify-center space-x-2 shadow-md transition-all"
                >
                  <span className="text-white dark:text-slate-950 font-bold">View Full Specs &amp; Findings</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white dark:text-slate-950" />
                </Link>

                <button
                  onClick={() => onRequestAudit(service.title)}
                  className="w-full py-2 rounded-xl text-xs font-mono font-bold text-amber-950 bg-amber-100 hover:bg-amber-200 border border-amber-300 dark:bg-[#1A1A1A] dark:hover:bg-[#252525] dark:text-[#D4AF37] dark:border-amber-500/30 transition-all cursor-pointer"
                >
                  Quick Scope Request &rarr;
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 3. INTERACTIVE ENTERPRISE SCOPING CALCULATOR */}
      <section id="calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="rounded-3xl bg-white dark:bg-[#141414] border-2 border-amber-300 dark:border-amber-500/30 p-8 sm:p-12 shadow-xl dark:shadow-2xl space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="font-mono text-xs uppercase font-bold text-amber-800 dark:text-[#D4AF37] tracking-widest">
              INSTANT AUDIT ESTIMATOR
            </div>
            <h2 className="font-serif-header font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              Configure Your Infrastructure Scope
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
              Adjust your application and cloud assets to generate estimated engagement duration and team composition.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Step 1: Select Scope Sliders */}
            <div className="lg:col-span-7 space-y-6 bg-slate-50 dark:bg-[#0A0A0A] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
              
              {/* Web / API Target Count */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-800 dark:text-slate-300 font-semibold">Web Apps &amp; API Microservices</span>
                  <span className="font-bold text-amber-800 dark:text-[#D4AF37]">{webAppCount} Target(s)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={webAppCount}
                  onChange={(e) => setWebAppCount(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* External / Internal IPs */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-800 dark:text-slate-300 font-semibold">Network IPs &amp; Subnets</span>
                  <span className="font-bold text-amber-800 dark:text-[#D4AF37]">{ipCount} IPs</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  step="5"
                  value={ipCount}
                  onChange={(e) => setIpCount(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Cloud Accounts */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-800 dark:text-slate-300 font-semibold">Cloud Accounts (AWS / Azure / GCP)</span>
                  <span className="font-bold text-amber-800 dark:text-[#D4AF37]">{cloudAccounts} Account(s)</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5"
                  value={cloudAccounts}
                  onChange={(e) => setCloudAccounts(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Checkbox Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <label className="flex items-center space-x-2 text-xs font-mono text-slate-800 dark:text-slate-300 cursor-pointer p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 font-medium">
                  <input
                    type="checkbox"
                    checked={includePam}
                    onChange={(e) => setIncludePam(e.target.checked)}
                    className="accent-amber-500"
                  />
                  <span>Privilege Access (PAM) Audit</span>
                </label>

                <label className="flex items-center space-x-2 text-xs font-mono text-slate-800 dark:text-slate-300 cursor-pointer p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 font-medium">
                  <input
                    type="checkbox"
                    checked={includeCompliance}
                    onChange={(e) => setIncludeCompliance(e.target.checked)}
                    className="accent-amber-500"
                  />
                  <span>ISO 27001 / DPDP Attestation</span>
                </label>
              </div>

            </div>

            {/* Step 2: Instant Results Slate */}
            <div className="lg:col-span-5 bg-amber-50/90 dark:bg-gradient-to-b dark:from-[#785215] dark:to-[#2B1B04] p-6 sm:p-8 rounded-2xl border-2 border-amber-300 dark:border-amber-400/40 space-y-5 shadow-xl">
              <div className="font-mono text-xs uppercase font-bold text-amber-900 dark:text-amber-200 tracking-wider">
                AUDIT SPECIFICATION SUMMARY
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-white dark:bg-black/40 border border-amber-200 dark:border-amber-400/20 space-y-1 shadow-sm">
                  <span className="text-amber-800 dark:text-amber-300 uppercase text-[10px] font-bold block">Estimated Duration</span>
                  <span className="text-lg font-serif-header font-bold text-slate-950 dark:text-white block">{currentEst.turnaroundDays}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-black/40 border border-amber-200 dark:border-amber-400/20 space-y-1 shadow-sm">
                  <span className="text-amber-800 dark:text-amber-300 uppercase text-[10px] font-bold block">Allocated Audit Team</span>
                  <span className="text-xs text-slate-800 dark:text-amber-100 font-semibold block">{currentEst.consultantTier}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-black/40 border border-amber-200 dark:border-amber-400/20 space-y-1 shadow-sm">
                  <span className="text-amber-800 dark:text-amber-300 uppercase text-[10px] font-bold block">Regulatory Alignment</span>
                  <span className="text-xs text-slate-800 dark:text-amber-100 font-semibold block">{currentEst.complianceReady}</span>
                </div>
              </div>

              <button
                onClick={() =>
                  onRequestAuditWithScope({
                    webApps: webAppCount,
                    ips: ipCount,
                    clouds: cloudAccounts,
                    pam: includePam,
                    compliance: includeCompliance,
                    turnaround: currentEst.turnaroundDays
                  })
                }
                className="btn-gold-filled w-full py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider shadow-xl flex items-center justify-center space-x-2 transition-all cursor-pointer hover:scale-102 text-slate-950"
              >
                <span>Request Formal Proposal &amp; NDA</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. LAW ENFORCEMENT & CORPORATE TRUST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white dark:bg-[#141414] border border-amber-300 dark:border-amber-500/30 p-8 sm:p-10 shadow-xl dark:shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-amber-800 dark:text-[#D4AF37]">
                <Scale className="w-4 h-4 text-amber-700 dark:text-[#D4AF37]" />
                <span>STATE DEFENSE &bull; SOVEREIGN LAW ENFORCEMENT ADVISORY</span>
              </div>
              <h2 className="font-serif-header font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                Trusted by the Tamil Nadu Police Cyber Crime Cell
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                Hackup Technology provides active technical advisory, memory analysis, cryptocurrency tracing, and Section 65B forensic reports for state law enforcement divisions and high-profile judicial inquiries.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                to="/about"
                className="btn-gold-filled w-full py-3.5 rounded-xl font-mono text-xs font-bold uppercase text-center flex items-center justify-center space-x-2 text-slate-950"
              >
                <span>Read Institutional Story</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Stage VAPT Methodology */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SecurityMethodology />
      </div>

      {/* Enterprise Testimonials */}
      <TestimonialsSection />

      {/* FAQs */}
      <FaqSection />

    </div>
  );
};
