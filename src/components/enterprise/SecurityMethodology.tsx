import React, { useState } from 'react';
import { Search, ShieldAlert, Cpu, FileCheck2, RefreshCw, CheckCircle2, ChevronRight, Lock } from 'lucide-react';

export const SecurityMethodology: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Scoping & OSINT Reconnaissance',
      subtitle: 'Target Mapping & Rules of Engagement',
      icon: Search,
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/40',
      bgColor: 'bg-cyan-500/10',
      description: 'We establish legal Rules of Engagement (RoE), define non-destructive testing windows, and perform active/passive external reconnaissance across subdomains, IP blocks, and cloud perimeter assets.',
      details: [
        'Passive DNS & WHOIS asset correlation',
        'Leaked credential & GitHub secret triage',
        'Firewall & WAF perimeter rule fingerprinting',
        'Signed mutual NDA & explicit authorization letter'
      ],
      deliverable: 'Asset Perimeter Surface Matrix'
    },
    {
      num: '02',
      title: 'Threat Modeling & Architecture Review',
      subtitle: 'Deep Attack Surface Mapping',
      icon: ShieldAlert,
      color: 'text-blue-400',
      borderColor: 'border-blue-500/40',
      bgColor: 'bg-blue-500/10',
      description: 'We analyze your underlying application architecture, authentication flows (JWT/OAuth2/SAML), database structures, and third-party API dependencies to identify structural blind spots.',
      details: [
        'Data flow diagram (DFD) vulnerability decomposition',
        'Business logic flaw identification',
        'Privilege tier matrix (Admin vs User vs Tenant)',
        'STRIDE threat modeling classification'
      ],
      deliverable: 'Threat Model & Attack Vector Blueprint'
    },
    {
      num: '03',
      title: 'Active Exploitation & Red Teaming',
      subtitle: 'Manual Exploit Proofs-of-Concept',
      icon: Cpu,
      color: 'text-amber-400',
      borderColor: 'border-amber-500/40',
      bgColor: 'bg-amber-500/10',
      description: 'Our senior ethical hackers manually chain vulnerabilities (e.g. BOLA + SQLi -> Remote Code Execution) without crashing production databases, proving real-world business impact.',
      details: [
        'OWASP Top 10 & API Security Top 10 manual exploits',
        'Privilege escalation & horizontal tenant hopping',
        'Zero-day CVE payload testing & WAF bypass validation',
        'Zero production downtime execution'
      ],
      deliverable: 'Proof-of-Concept (PoC) Exploit Chains'
    },
    {
      num: '04',
      title: 'Risk Scoring & Executive Debrief',
      subtitle: 'CVSS 3.1/4.0 & Remediation Blueprint',
      icon: FileCheck2,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/40',
      bgColor: 'bg-emerald-500/10',
      description: 'We publish an exhaustive audit dossier containing both executive summaries for Board/CISOs and precise code-level remediation code snippets for engineering teams.',
      details: [
        'CVSS 3.1 & 4.0 severity scoring with business context',
        'Developer remediation blueprints in Python/Node/Java/Go',
        'Regulatory compliance mapping (ISO 27001, DPDP Act 2023)',
        'Live CISO & Technical Engineering walkthrough call'
      ],
      deliverable: 'Comprehensive Audit Dossier & Exec Summary'
    },
    {
      num: '05',
      title: '30-Day Re-Testing & Safe-to-Host Cert',
      subtitle: 'Verification & Regulatory Attestation',
      icon: RefreshCw,
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/40',
      bgColor: 'bg-cyan-500/10',
      description: 'After your engineering team deploys patches, our red team re-tests every identified finding for free within 30 days and awards an official Safe-to-Host Attestation Certificate.',
      details: [
        'Free 100% re-test of all identified vulnerabilities',
        'Verification of regression safety',
        'Official tamper-proof "Safe-to-Host" Certificate',
        'Auditor-ready report for RBI/SEBI/ISO certification'
      ],
      deliverable: 'Official Safe-to-Host Attestation Certificate'
    }
  ];

  return (
    <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800/80">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFFBEB] dark:bg-amber-950/70 border border-amber-500/30 text-[#9E721D] dark:text-[#D4AF37] font-mono text-xs font-bold mb-3">
          <Lock className="w-3.5 h-3.5" />
          <span>PROVEN 5-STAGE VAPT &amp; RED TEAM METHODOLOGY</span>
        </div>
        <h3 className="font-serif-header font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
          How Hackup Technology Executes Enterprise Engagements
        </h3>
        <p className="font-sans text-sm sm:text-base text-slate-700 dark:text-slate-300 mt-2">
          From initial reconnaissance to verified safe-to-host certification with zero production downtime.
        </p>
      </div>

      {/* Step Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-8">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;
          return (
            <button
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-amber-50 dark:bg-amber-500/20 border-[#B38728] dark:border-amber-500/60 shadow-md'
                  : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-[#B38728]/50 text-slate-600 dark:text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono font-bold text-xs ${isActive ? 'text-[#9E721D] dark:text-amber-300' : 'text-slate-500'}`}>
                  PHASE {step.num}
                </span>
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#9E721D] dark:text-amber-300' : 'text-slate-400 dark:text-slate-600'}`} />
              </div>
              <div className={`font-display font-bold text-xs leading-snug line-clamp-2 ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                {step.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Showcase Card */}
      <div className="rounded-3xl bg-white dark:bg-[#141414] border border-slate-200 dark:border-slate-700/80 p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center space-x-3">
              <span className={`font-mono text-3xl sm:text-4xl font-extrabold ${steps[activeStep].color}`}>
                {steps[activeStep].num}
              </span>
              <div>
                <h4 className="font-serif-header font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                  {steps[activeStep].title}
                </h4>
                <p className="font-mono text-xs text-[#9E721D] dark:text-[#D4AF37] font-semibold">
                  {steps[activeStep].subtitle}
                </p>
              </div>
            </div>

            <p className="font-sans text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {steps[activeStep].description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {steps[activeStep].details.map((item, i) => (
                <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                  <CheckCircle2 className={`w-4 h-4 ${steps[activeStep].color} shrink-0 mt-0.5`} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-950/80 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 font-mono text-xs space-y-4">
            <div className="flex items-center justify-between text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2.5 font-bold">
              <span>PHASE OUTCOME</span>
              <span className="text-[#9E721D] dark:text-[#D4AF37]">VERIFIED DELIVERABLE</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/60 shadow-sm">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 font-bold">Official Output</div>
              <div className="text-slate-900 dark:text-white font-bold text-sm">
                {steps[activeStep].deliverable}
              </div>
            </div>

            <div className="text-[11px] text-slate-600 dark:text-slate-400 space-y-1.5 font-medium">
              <div className="flex justify-between">
                <span>Standard SLA:</span>
                <span className="text-slate-900 dark:text-slate-200 font-bold">Production-Safe Testing</span>
              </div>
              <div className="flex justify-between">
                <span>Assigned Leads:</span>
                <span className="text-[#881337] dark:text-cyan-300 font-bold">Certified Red Teamers (Coimbatore)</span>
              </div>
              <div className="flex justify-between">
                <span>Safe Re-Testing:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Included within 30 Days</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
