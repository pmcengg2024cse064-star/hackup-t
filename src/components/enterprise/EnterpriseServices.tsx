import React from 'react';
import { 
  ShieldAlert, 
  Cloud, 
  Crosshair, 
  FileSearch, 
  Radar, 
  FileCheck2, 
  ArrowRight, 
  Check, 
  ShieldCheck 
} from 'lucide-react';

interface EnterpriseServicesProps {
  onRequestAudit: (serviceTitle?: string) => void;
}

export const EnterpriseServices: React.FC<EnterpriseServicesProps> = ({ onRequestAudit }) => {
  const services = [
    {
      id: 'vapt',
      title: 'VULNERABILITY ASSESSMENT',
      subtitle: 'Identify Risks with Precision.',
      icon: ShieldAlert,
      description: 'Comprehensive manual penetration testing across Web Applications, Mobile iOS/Android, REST/GraphQL APIs, and corporate internal networks adhering to OWASP Top 10.',
      deliverables: ['Zero False-Positive Manual PoCs', 'Developer Remediation Code Guide', 'Free 30-Day Safe-to-Host Re-test'],
      badge: 'Manual VAPT',
    },
    {
      id: 'cloud-sec',
      title: 'CLOUD SECURITY',
      subtitle: 'CIS Benchmark Audits (AWS/Azure).',
      icon: Cloud,
      description: 'Multi-cloud security posture evaluation, Kubernetes cluster hardening, IAM least-privilege enforcement, and automated CI/CD security guardrails.',
      deliverables: ['AWS / Azure CIS Benchmarks', 'Kubernetes & Docker Hardening', 'Zero-Trust Architecture Review'],
      badge: 'Cloud & K8s',
    },
    {
      id: 'red-team',
      title: 'RED TEAMING',
      subtitle: 'Adversary Simulation Exercises.',
      icon: Crosshair,
      description: 'Black-box simulated cyber warfare emulating state-sponsored APT tactics against external perimeters, internal Active Directory domains, and personnel.',
      deliverables: ['MITRE ATT&CK Scenario Mapping', 'Active Directory Domain Takeover PoC', 'Purple Team SOC Detection Tuning'],
      badge: 'APT Drill',
    },
    {
      id: 'dfir',
      title: 'DIGITAL FORENSICS',
      subtitle: 'Incident Triage & Evidence.',
      icon: FileSearch,
      description: 'Rapid 24/7 incident containment, memory & disk forensic reconstruction, malware reverse engineering, and legally admissible Section 65B cyber evidence dossiers.',
      deliverables: ['Emergency Breach Triage & Isolation', 'Memory & CloudTrail Timeline Analysis', 'CERT-In / Court Admissible Dossier'],
      badge: '24/7 Incident',
    },
    {
      id: 'compliance',
      title: 'COMPLIANCE READINESS',
      subtitle: 'ISO 27001 & SOC 2 Prep.',
      icon: FileCheck2,
      description: 'Zero-friction advisory, gap assessments, policy drafting, and mock audits ensuring your enterprise clears international audits and Indian DPDP Act 2023 mandates.',
      deliverables: ['Clause-by-Clause Gap Assessment', 'Tailored Security Policies & SOPs', '100% First-Attempt Audit Pass SLA'],
      badge: 'Audit Ready',
    },
    {
      id: 'vmaas',
      title: 'VULNERABILITY MANAGEMENT',
      subtitle: 'Continuous Risk Scoring.',
      icon: Radar,
      description: 'Round-the-clock discovery of shadow IT, exposed subdomains, expiring SSL certificates, leaked developer API keys, and newly published 0-day exploits.',
      deliverables: ['24/7 External Attack Surface Discovery', 'Prioritized Risk Remediation Queue', 'Monthly CISO Executive Governance'],
      badge: 'Continuous',
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title (Center-Aligned Serif Header) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="font-mono text-xs uppercase tracking-widest text-[#9E721D] font-bold">
            HIGH-ASSURANCE CYBER DEFENSE
          </div>

          <h2 className="font-serif-header font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-wider">
            SERVICES
          </h2>

          <div className="w-16 h-[2px] bg-[#B38728] mx-auto mt-3 mb-4" />

          <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            Engineered by active red team practitioners. Protecting critical enterprise infrastructure through surgical manual exploit analysis.
          </p>
        </div>

        {/* 6-Card Clean Grid (2 Rows, 3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-7 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden border border-slate-200 hover:border-[#B38728] shadow-lg hover:-translate-y-1"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-300 p-2.5 flex items-center justify-center text-[#9E721D] shadow-md group-hover:border-[#B38728] group-hover:scale-105 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#9E721D] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-300 font-bold">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-serif-header font-bold text-lg text-slate-900 tracking-wide group-hover:text-[#9E721D] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <div className="font-mono text-xs text-[#9E721D] mt-1 mb-3 font-semibold">
                    {service.subtitle}
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    {service.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-slate-800 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#B38728] shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onRequestAudit(service.title)}
                    className="w-full py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-[#9E721D] hover:text-slate-950 bg-amber-50/60 hover:bg-[#D4AF37] border border-amber-300 transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
                  >
                    <span>Configure Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
