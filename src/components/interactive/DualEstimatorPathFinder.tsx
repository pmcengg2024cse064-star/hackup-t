import React, { useState } from 'react';
import { 
  Building2, 
  GraduationCap, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  TrendingUp, 
  Award,
  ShieldCheck 
} from 'lucide-react';

interface DualEstimatorPathFinderProps {
  onRequestAuditWithScope: (scopeDetails: any) => void;
  onEnrollCustomTrack: (trackDetails: any) => void;
}

export const DualEstimatorPathFinder: React.FC<DualEstimatorPathFinderProps> = ({
  onRequestAuditWithScope,
  onEnrollCustomTrack,
}) => {
  const [activeTab, setActiveTab] = useState<'enterprise' | 'student'>('enterprise');

  // Enterprise Estimator State
  const [webAppsCount, setWebAppsCount] = useState<number>(2);
  const [mobileAppsCount, setMobileAppsCount] = useState<number>(1);
  const [cloudAccounts, setCloudAccounts] = useState<number>(1);
  const [ipCount, setIpCount] = useState<number>(15);
  const [complianceFramework, setComplianceFramework] = useState<string>('ISO 27001 & DPDP Act');
  const [urgency, setUrgency] = useState<'standard' | 'expedited'>('standard');

  // Calculate Turnaround Days
  const calculateDays = () => {
    let baseDays = 3;
    baseDays += webAppsCount * 1.5;
    baseDays += mobileAppsCount * 2;
    baseDays += cloudAccounts * 2;
    baseDays += Math.ceil(ipCount / 10);
    if (urgency === 'expedited') {
      baseDays = Math.max(3, Math.ceil(baseDays * 0.6));
    }
    return Math.round(baseDays);
  };

  const estimatedDays = calculateDays();

  // Student Roadmap Pathfinder State
  const [studentBackground, setStudentBackground] = useState<string>('Engineering Student / Fresher');
  const [targetRole, setTargetRole] = useState<string>('Penetration Tester / Ethical Hacker');
  const [preferredPace, setPreferredPace] = useState<string>('Coimbatore Offline');

  const getRecommendedTrack = () => {
    if (targetRole.includes('Penetration Tester')) {
      return {
        cert: 'Certified Ethical Hacker (CEH v13) + Cyber Range Red Team Lab',
        duration: '3 Months (80 Practical Lab Hours)',
        salaryRange: '₹4.5 - ₹12 LPA',
        stages: [
          { step: 'Phase 1', title: 'Network & Linux Warfare', desc: 'Kali Linux, Wireshark, packet crafting, bash automation.' },
          { step: 'Phase 2', title: 'Web/API Exploitation', desc: 'OWASP Top 10, Burp Suite Pro, SQLi, IDOR, SSRF.' },
          { step: 'Phase 3', title: 'Active Directory & Red Teaming', desc: 'BloodHound, Kerberoasting, C2 frameworks, live range capture.' },
        ],
      };
    } else if (targetRole.includes('SOC')) {
      return {
        cert: 'SOC Level 1/2 Threat Hunter Bootcamp (Wazuh, Splunk, Zeek)',
        duration: '2.5 Months (60 Practical Lab Hours)',
        salaryRange: '₹4.2 - ₹10 LPA',
        stages: [
          { step: 'Phase 1', title: 'SIEM & Log Forensics', desc: 'Wazuh agents, Splunk search syntax, syslog correlation.' },
          { step: 'Phase 2', title: 'Incident Response & DFIR', desc: 'Memory dumps with Volatility, Autopsy, phishing triage.' },
          { step: 'Phase 3', title: 'Threat Intelligence & EDR', desc: 'MITRE ATT&CK mapping, YARA rules, automated playbook response.' },
        ],
      };
    } else {
      return {
        cert: 'Certified Cloud Security Engineer (CCSE) + DevSecOps Pipeline',
        duration: '3 Months (70 Practical Lab Hours)',
        salaryRange: '₹6 - ₹16 LPA',
        stages: [
          { step: 'Phase 1', title: 'AWS / Azure Cloud IAM', desc: 'IAM policies, SCPs, VPC peering, KMS encryption.' },
          { step: 'Phase 2', title: 'Container & K8s Security', desc: 'Trivy container scans, Docker CIS benchmarks, Falco runtime.' },
          { step: 'Phase 3', title: 'CI/CD DevSecOps Automation', desc: 'GitHub Actions, SonarQube SAST, DAST automation.' },
        ],
      };
    }
  };

  const roadmap = getRecommendedTrack();

  return (
    <section className="relative py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="font-mono text-xs uppercase font-bold tracking-widest text-[#B38728]">
            INTERACTIVE SLATE CALCULATOR
          </div>
          <h2 className="font-serif-header font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Tailored Scope Estimator &amp; Career Pathfinder
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-700 dark:text-slate-300">
            Select your journey to calculate project turnaround SLA or personalized training roadmap.
          </p>

          {/* Dual Toggle Bar */}
          <div className="inline-flex flex-col sm:flex-row items-center p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 shadow-md mt-4 w-full sm:w-auto gap-1">
            <button
              onClick={() => setActiveTab('enterprise')}
              className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'enterprise'
                  ? 'bg-gradient-to-r from-[#B38728] to-[#D4AF37] text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Enterprise Scope Estimator</span>
            </button>

            <button
              onClick={() => setActiveTab('student')}
              className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'student'
                  ? 'bg-gradient-to-r from-[#881337] to-[#7A1426] text-white shadow-md font-extrabold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Student Career Roadmap</span>
            </button>
          </div>
        </div>

        {/* Dynamic Calculator Container */}
        {activeTab === 'enterprise' ? (
          /* ENTERPRISE ESTIMATOR (White + Royal Gold) */
          <div className="rounded-3xl bg-white dark:bg-[#0B1220] border-2 border-amber-400/40 dark:border-amber-500/30 p-4 sm:p-8 lg:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Config Controls */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="font-serif-header font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-2">
                    Define Your Target Asset Scope
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    Adjust the sliders below to calculate audit turnaround SLAs and deliverables.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Web Apps Slider */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="flex justify-between text-xs font-mono font-bold">
                      <span className="text-slate-700 dark:text-slate-300">Web Applications &amp; APIs:</span>
                      <span className="text-[#9E721D] dark:text-[#D4AF37]">{webAppsCount} Apps</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="15"
                      value={webAppsCount}
                      onChange={(e) => setWebAppsCount(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>

                  {/* Mobile Apps Slider */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="flex justify-between text-xs font-mono font-bold">
                      <span className="text-slate-700 dark:text-slate-300">Mobile Apps (iOS/Android):</span>
                      <span className="text-[#9E721D] dark:text-[#D4AF37]">{mobileAppsCount} Apps</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="8"
                      value={mobileAppsCount}
                      onChange={(e) => setMobileAppsCount(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>

                  {/* Cloud Accounts Slider */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="flex justify-between text-xs font-mono font-bold">
                      <span className="text-slate-700 dark:text-slate-300">Cloud Accounts (AWS/GCP):</span>
                      <span className="text-[#9E721D] dark:text-[#D4AF37]">{cloudAccounts} Envs</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="6"
                      value={cloudAccounts}
                      onChange={(e) => setCloudAccounts(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>

                  {/* IP Ranges Slider */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="flex justify-between text-xs font-mono font-bold">
                      <span className="text-slate-700 dark:text-slate-300">Network IPs / Hosts:</span>
                      <span className="text-[#9E721D] dark:text-[#D4AF37]">{ipCount} IPs</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      step="5"
                      value={ipCount}
                      onChange={(e) => setIpCount(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>

                </div>

                {/* Compliance & Urgency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Compliance Framework Target:
                    </label>
                    <select
                      value={complianceFramework}
                      onChange={(e) => setComplianceFramework(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-xs font-mono text-slate-900 dark:text-white font-semibold focus:border-amber-500 focus:outline-none shadow-sm"
                    >
                      <option value="ISO 27001 & DPDP Act">ISO 27001:2022 &amp; Indian DPDP Act 2023</option>
                      <option value="SOC 2 Type II">AICPA SOC 2 Type II Security</option>
                      <option value="RBI Cyber Security Framework">RBI / SEBI Cyber Security Mandate</option>
                      <option value="Standard OWASP VAPT">Standard OWASP Top 10 Commercial Audit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Testing SLA Urgency:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setUrgency('standard')}
                        className={`py-2 px-3 rounded-xl text-xs font-mono font-bold cursor-pointer border ${
                          urgency === 'standard'
                            ? 'btn-gold-filled border-amber-500 shadow-sm'
                            : 'bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-400 border-slate-300 dark:border-slate-800'
                        }`}
                      >
                        Standard SLA
                      </button>
                      <button
                        onClick={() => setUrgency('expedited')}
                        className={`py-2 px-3 rounded-xl text-xs font-mono font-bold cursor-pointer border ${
                          urgency === 'expedited'
                            ? 'bg-amber-100 dark:bg-amber-950 text-[#9E721D] dark:text-amber-300 border-amber-400 shadow-sm'
                            : 'bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-400 border-slate-300 dark:border-slate-800'
                        }`}
                      >
                        ⚡ Expedited SLA
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Output Estimation Card */}
              <div className="lg:col-span-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 font-mono text-xs space-y-5 shadow-md">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-slate-600 dark:text-slate-400 uppercase tracking-wider font-bold">
                    ESTIMATED AUDIT SLA
                  </span>
                  <span className="text-[#9E721D] dark:text-[#D4AF37] font-bold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" />
                    VERIFIED ESTIMATE
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-sm">
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold">Turnaround Window</div>
                      <div className="text-slate-900 dark:text-white font-serif-header font-bold text-2xl mt-0.5">
                        {estimatedDays} Business Days
                      </div>
                    </div>
                    <Clock className="w-8 h-8 text-[#B38728] dark:text-[#D4AF37]" />
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-sm">
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold">Total Target Assets</div>
                      <div className="text-[#9E721D] dark:text-amber-300 font-serif-header font-bold text-xl mt-0.5">
                        {webAppsCount + mobileAppsCount + cloudAccounts} Systems + {ipCount} IPs
                      </div>
                    </div>
                    <Layers className="w-6 h-6 text-slate-400" />
                  </div>
                </div>

                <div className="space-y-1.5 text-[11px] text-slate-700 dark:text-slate-300 pt-2 border-t border-slate-200 dark:border-slate-800/80 font-medium">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B38728] dark:text-amber-400 shrink-0" />
                    <span>Free 30-day re-test &amp; Safe-to-Host certificate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B38728] dark:text-amber-400 shrink-0" />
                    <span>Mutual Non-Disclosure Agreement (NDA)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B38728] dark:text-amber-400 shrink-0" />
                    <span>Direct engineering remediation walkthrough call</span>
                  </div>
                </div>

                <button
                  onClick={() =>
                    onRequestAuditWithScope({
                      webAppsCount,
                      mobileAppsCount,
                      cloudAccounts,
                      ipCount,
                      complianceFramework,
                      estimatedDays,
                    })
                  }
                  className="btn-gold-filled w-full py-3.5 rounded-xl font-mono font-bold text-xs sm:text-sm shadow-xl transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Lock in Scope &amp; Request Formal Quote</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>

            </div>
          </div>
        ) : (
          /* STUDENT ROADMAP GENERATOR (White + Burgundy) */
          <div className="rounded-3xl bg-white dark:bg-[#0B1220] border-2 border-rose-300 dark:border-rose-900/50 p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Config Form */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="font-serif-header font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-2">
                    Personalized Cybersecurity Career Pathfinder
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    Select your current stage and career ambitions to generate your 3-stage training roadmap.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Current Background:
                    </label>
                    <select
                      value={studentBackground}
                      onChange={(e) => setStudentBackground(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-xs font-mono text-slate-900 dark:text-white font-semibold focus:border-[#881337] focus:outline-none shadow-sm"
                    >
                      <option value="Engineering Student / Fresher">Engineering / BCA / MCA Student (Coimbatore / TN)</option>
                      <option value="IT Support / System Administrator">IT Support / System Administrator (Looking to Switch)</option>
                      <option value="Software Developer / QA">Software Developer / QA (Aiming for DevSecOps)</option>
                      <option value="Complete Beginner">Complete Beginner with Passion for Ethical Hacking</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Target Dream Career Role:
                    </label>
                    <select
                      value={targetRole}
                      onChange={(e) => setTargetRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-xs font-mono text-slate-900 dark:text-white font-semibold focus:border-[#881337] focus:outline-none shadow-sm"
                    >
                      <option value="Penetration Tester / Ethical Hacker">Penetration Tester / Ethical Hacker (Offensive Red Team)</option>
                      <option value="SOC Analyst & Threat Hunter">SOC Level 1/2 Analyst &amp; Incident Responder (Blue Team)</option>
                      <option value="Cloud Security & DevSecOps Engineer">Cloud Security &amp; DevSecOps Engineer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Learning Mode:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setPreferredPace('Coimbatore Offline')}
                        className={`py-2 px-3 rounded-xl text-xs font-mono font-bold cursor-pointer border ${
                          preferredPace === 'Coimbatore Offline'
                            ? 'btn-burgundy-filled border-[#881337] shadow-sm text-white'
                            : 'bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-400 border-slate-300 dark:border-slate-800'
                        }`}
                      >
                        Coimbatore Lab (Offline)
                      </button>
                      <button
                        onClick={() => setPreferredPace('Live Online')}
                        className={`py-2 px-3 rounded-xl text-xs font-mono font-bold cursor-pointer border ${
                          preferredPace === 'Live Online'
                            ? 'btn-burgundy-filled border-[#881337] shadow-sm text-white'
                            : 'bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-400 border-slate-300 dark:border-slate-800'
                        }`}
                      >
                        Live Instructor Online
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Output Roadmap Preview */}
              <div className="lg:col-span-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-6 font-mono text-xs space-y-5 shadow-md">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-[#881337] dark:text-rose-400 uppercase tracking-wider font-bold">
                    RECOMMENDED CAREER ROADMAP
                  </span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {roadmap.salaryRange}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-300 dark:border-rose-900/50">
                  <div className="text-[10px] text-[#881337] dark:text-rose-300 uppercase font-bold">Recommended Certification Track</div>
                  <div className="text-slate-900 dark:text-white font-serif-header font-bold text-sm sm:text-base mt-0.5">
                    {roadmap.cert}
                  </div>
                </div>

                {/* 3-Step Stages */}
                <div className="space-y-2.5">
                  {roadmap.stages.map((st, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 shadow-sm">
                      <div className="flex items-center justify-between text-[11px] font-bold text-[#881337] dark:text-rose-300 mb-1">
                        <span>{st.step}</span>
                        <span className="text-slate-900 dark:text-slate-200">{st.title}</span>
                      </div>
                      <p className="font-sans text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                        {st.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() =>
                    onEnrollCustomTrack({
                      studentBackground,
                      targetRole,
                      preferredPace,
                      recommendedTrack: roadmap.cert,
                    })
                  }
                  className="btn-burgundy-filled w-full py-3.5 rounded-xl font-mono font-bold text-xs sm:text-sm text-white shadow-xl shadow-rose-950/30 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Award className="w-4 h-4 text-white" />
                  <span>Download Roadmap &amp; Book Free Demo Class</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
