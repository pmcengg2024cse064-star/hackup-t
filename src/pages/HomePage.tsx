import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  GraduationCap, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  Award, 
  Users, 
  Cpu, 
  Scale, 
  Lock, 
  Terminal,
  FileCheck2,
  Building,
  Shield,
  Download,
  Flame,
  ArrowUpRight
} from 'lucide-react';
import { TechMarquee } from '../components/common/TechMarquee';

interface HomePageProps {
  onRequestAudit: (serviceTitle?: string) => void;
  onBookDemo: (courseTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onRequestAudit,
  onBookDemo,
}) => {
  const unifiedMetrics = [
    {
      num: '1,00,000+',
      label: 'Minds Trained',
      sub: 'Engineers, Faculty & Officers',
      icon: Users
    },
    {
      num: '2,100+',
      label: 'Enterprise Audits',
      sub: 'VAPT, SOC & Compliance Scopes',
      icon: FileCheck2
    },
    {
      num: '54+',
      label: 'Partner Colleges',
      sub: 'Universities Across South India',
      icon: GraduationCap
    },
    {
      num: '2',
      label: 'Proprietary Patents',
      sub: 'AI Firewall & Binary RE Suite',
      icon: Sparkles
    }
  ];

  return (
    <div className="space-y-16 animate-fadeIn pb-20 overflow-hidden font-sans text-white">
      
      {/* 1. HERO SECTION: COMPANY NAME "HACKUP TECHNOLOGY" WITH ANIMATED GRAPHICS */}
      <section className="relative pt-10 sm:pt-16 pb-12 overflow-hidden">
        
        {/* Animated Background Cyber Grid & Radiant Halos */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,20,40,0.25),rgba(255,255,255,0))] pointer-events-none -z-10" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[400px] bg-amber-500/10 blur-[170px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Top Accreditations Badge with Pulse */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#111C30]/80 border border-amber-500/30 shadow-2xl backdrop-blur-xl"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-mono text-[11px] sm:text-xs uppercase font-bold tracking-widest text-slate-200">
                OFFICIAL EC-COUNCIL ATC &bull; TANCCAO SECRETARIAT &bull; COIMBATORE HQ
              </span>
            </motion.div>

            {/* ANIMATED COMPANY NAME WITH LETTER-BY-LETTER STAGGER & SHIMMER */}
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
                <Sparkles className="w-4 h-4 text-[#D4AF37] animate-spin" style={{ animationDuration: '6s' }} />
                <span>SOVEREIGN CYBER ADVISORY &bull; RESEARCH &bull; EDUCATION</span>
                <Sparkles className="w-4 h-4 text-[#D4AF37] animate-spin" style={{ animationDuration: '6s' }} />
              </div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.04,
                      delayChildren: 0.1,
                    },
                  },
                }}
                className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 gap-y-1 select-none"
                aria-label="Hackup Technology"
              >
                {/* WORD 1: HACKUP */}
                <span className="inline-flex overflow-hidden py-1">
                  {"HACKUP".split("").map((char, index) => (
                    <motion.span
                      key={`hackup-${index}`}
                      variants={{
                        hidden: { opacity: 0, y: 40, rotateX: -60, filter: "blur(6px)" },
                        visible: {
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          filter: "blur(0px)",
                          transition: { type: "spring", damping: 10, stiffness: 120 },
                        },
                      }}
                      whileHover={{
                        y: -10,
                        scale: 1.18,
                        rotateZ: index % 2 === 0 ? 3 : -3,
                        transition: { type: "spring", stiffness: 400 },
                      }}
                      className="font-serif-header font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-none inline-block bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(255,255,255,0.25)] cursor-default"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>

                {/* WORD 2: TECHNOLOGY */}
                <span className="inline-flex overflow-hidden py-1">
                  {"TECHNOLOGY".split("").map((char, index) => (
                    <motion.span
                      key={`tech-${index}`}
                      variants={{
                        hidden: { opacity: 0, y: 40, rotateX: -60, filter: "blur(6px)" },
                        visible: {
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          filter: "blur(0px)",
                          transition: { type: "spring", damping: 10, stiffness: 120 },
                        },
                      }}
                      whileHover={{
                        y: -10,
                        scale: 1.18,
                        rotateZ: index % 2 === 0 ? -3 : 3,
                        transition: { type: "spring", stiffness: 400 },
                      }}
                      className="font-serif-header font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-none inline-block bg-gradient-to-r from-amber-200 via-[#D4AF37] to-amber-500 bg-clip-text text-transparent animate-text-shimmer-flow animate-gold-glow-pulse cursor-default"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-sans text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed pt-2"
              >
                South India's premier cybersecurity enterprise. Defending mission-critical digital assets while engineering the next generation of certified national cyber defenders.
              </motion.p>
            </div>

            {/* Quick Micro Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-2 pt-1 font-mono text-[11px]"
            >
              <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300">
                &bull; 2 Issued Cyber Patents
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300">
                &bull; Tamil Nadu Police Consultant
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300">
                &bull; 54+ Partner Universities
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300">
                &bull; 100% Practical Cyber Range
              </span>
            </motion.div>

          </div>

          {/* 2. TWO HIGH-TECH GLASS CARDS WITH IMAGES: ENTERPRISE vs STUDENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-14 items-stretch">
            
            {/* LEFT GLASS CARD: ENTERPRISE PORTAL (RICH WHITE & GOLD) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-3xl bg-gradient-to-b from-[#1E190A]/95 via-[#120F06]/95 to-[#080703]/98 border-2 border-amber-500/40 hover:border-[#D4AF37] flex flex-col justify-between shadow-2xl transition-all duration-500 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

              <div>
                {/* Visual Image Header */}
                <div className="h-52 sm:h-56 w-full relative overflow-hidden bg-slate-950">
                  <img
                    src="/images/portal_enterprise.jpg"
                    alt="Enterprise Cyber Defense & VAPT Security Operations"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120F06] via-[#120F06]/40 to-transparent" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#1A1505] text-[#D4AF37] border border-amber-500/40 text-xs font-mono font-bold shadow-lg">
                    <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>FOR ENTERPRISE &amp; BFSI</span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="font-mono text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider block">
                      OFFENSIVE ADVISORY &bull; SOC &bull; AUDITS
                    </span>
                    <h2 className="font-serif-header font-bold text-2xl text-white">
                      Enterprise Solutions Hub
                    </h2>
                  </div>
                </div>

                {/* Card Content & Features */}
                <div className="p-6 sm:p-8 space-y-5">
                  <p className="font-sans text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                    Protect digital assets with zero-downtime Penetration Testing (VAPT), Privilege Access Management (PAM), 24/7 SIEM SOC deployments, and DFIR response.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {[
                      'Full-Spectrum VAPT (Web, Mobile, Network & API)',
                      'Cloud Security & Kubernetes CIS Benchmark Hardening',
                      'Turnkey 24/7 Managed SOC Deployment (Wazuh/Splunk)',
                      'Privilege Access Governance (PAM) & Zero-Trust',
                      'Section 65B Forensics & Emergency DFIR Triage'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs font-mono text-amber-100">
                        <div className="w-4 h-4 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#D4AF37]" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 sm:p-8 pt-0 border-t border-amber-950/60 mt-4 space-y-3">
                <Link
                  to="/enterprise"
                  className="btn-gold-filled w-full py-3.5 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-xl hover:scale-102"
                >
                  <span>Enter Enterprise Portal</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </Link>

                <button
                  onClick={() => onRequestAudit('Direct Enterprise VAPT Scope Request')}
                  className="w-full py-2 text-center text-xs font-mono text-[#D4AF37] hover:underline transition-colors cursor-pointer"
                >
                  Schedule Rapid Assessment / NDA &rarr;
                </button>
              </div>
            </motion.div>

            {/* RIGHT GLASS CARD: STUDENT & ACADEMY PORTAL (WHITE & BURGUNDY) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-3xl bg-gradient-to-b from-[#2E070D]/95 via-[#180407]/95 to-[#0D0204]/98 border-2 border-rose-400/30 hover:border-rose-400 flex flex-col justify-between shadow-2xl transition-all duration-500 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

              <div>
                {/* Visual Image Header */}
                <div className="h-52 sm:h-56 w-full relative overflow-hidden bg-slate-950">
                  <img
                    src="/images/portal_student.jpg"
                    alt="Hackup Academy EC-Council Certified Practical Cyber Range"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#180407] via-[#180407]/40 to-transparent" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#5B0E1B] text-white border border-rose-300/40 text-xs font-mono font-bold shadow-lg">
                    <GraduationCap className="w-3.5 h-3.5 text-rose-300" />
                    <span>FOR STUDENTS &amp; ASPIRING HACKERS</span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="font-mono text-[10px] uppercase font-bold text-rose-300 tracking-wider block">
                      EC-COUNCIL &bull; CYBER RANGE &bull; INTERNSHIPS
                    </span>
                    <h2 className="font-serif-header font-bold text-2xl text-white">
                      Hackup Academy Portal
                    </h2>
                  </div>
                </div>

                {/* Card Content & Features */}
                <div className="p-6 sm:p-8 space-y-5">
                  <p className="font-sans text-xs sm:text-sm text-rose-100/90 leading-relaxed">
                    Master offensive and defensive cyber warfare with official EC-Council certifications, live sandbox labs, and Coimbatore college internships.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {[
                      'Certified Ethical Hacker (CEH v13 AI-Powered)',
                      'Certified Penetration Testing Professional (CPENT)',
                      'Certified SOC Analyst & SIEM Threat Hunting (CSA)',
                      'Computer Hacking Forensic Investigator (CHFI)',
                      'Coimbatore 1/3/6-Month Hands-On Industrial Internships'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs font-mono text-rose-100">
                        <div className="w-4 h-4 rounded-full bg-rose-900/80 border border-rose-400/50 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 sm:p-8 pt-0 border-t border-rose-900/50 mt-4 space-y-3">
                <Link
                  to="/academy"
                  className="btn-burgundy-filled w-full py-3.5 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-xl hover:scale-102"
                >
                  <span>Enter Hackup Academy</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>

                <button
                  onClick={() => onBookDemo('Certified Ethical Hacker (CEH v13)')}
                  className="w-full py-2 text-center text-xs font-mono text-rose-300 hover:text-white transition-colors cursor-pointer"
                >
                  Download Free EC-Council Syllabus PDF &rarr;
                </button>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 3. UNIFIED METRICS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0B1220]/90 border border-amber-500/20 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800 text-center">
            {unifiedMetrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={`pt-4 sm:pt-0 ${idx !== 0 ? 'sm:pl-6' : ''} space-y-1`}>
                  <div className="flex items-center justify-center space-x-1.5 text-[#D4AF37] mb-1">
                    <Icon className="w-4 h-4" />
                    <span className="font-mono text-[11px] uppercase font-bold text-slate-400">
                      {item.label}
                    </span>
                  </div>
                  <div className="font-serif-header font-extrabold text-3xl sm:text-4xl text-white">
                    {item.num}
                  </div>
                  <div className="font-sans text-xs text-slate-400">
                    {item.sub}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TRUST MARQUEE */}
      <div className="space-y-4 text-center">
        <div className="text-xs font-mono text-slate-400 uppercase tracking-widest font-semibold">
          TRUSTED BY POLICE FORCES, SOVEREIGN INSTITUTIONS &amp; 54+ UNIVERSITIES
        </div>
        <TechMarquee />
      </div>

      {/* 5. EXECUTIVE FOUNDATION SUMMARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0B1220] via-[#111C30] to-[#0B1220] border border-amber-500/30 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#D4AF37] uppercase">
                <Sparkles className="w-4 h-4" />
                <span>EXECUTIVE FOUNDATION &bull; DR. DINESH PARANTHAGAN</span>
              </div>
              
              <h2 className="font-serif-header font-bold text-2xl sm:text-3xl text-white">
                Sovereign Defense Research &amp; 2 Issued Patents
              </h2>

              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Headquartered in Ganapathy, Coimbatore, Hackup Technology combines proprietary AI firewall patents, law enforcement advisory for the Tamil Nadu Police Cyber Crime Department, and academic curriculum modernization for 54+ higher education institutions.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono">
                <Link to="/about" className="text-[#D4AF37] hover:underline flex items-center gap-1 font-bold">
                  <span>Explore Leadership &amp; Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-slate-600">|</span>
                <Link to="/founder-patents" className="text-slate-300 hover:text-white flex items-center gap-1">
                  <span>View Proprietary Patents</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-slate-600">|</span>
                <Link to="/institutional-reach" className="text-slate-300 hover:text-white flex items-center gap-1">
                  <span>54+ Partner Colleges</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                to="/enterprise"
                className="w-full p-4 rounded-2xl bg-[#1A1505] hover:bg-[#282008] border border-amber-500/40 text-[#D4AF37] font-mono text-xs font-bold uppercase flex items-center justify-between transition-all shadow-lg"
              >
                <span>Enterprise Hub</span>
                <Building2 className="w-4 h-4 text-[#D4AF37]" />
              </Link>
              <Link
                to="/academy"
                className="w-full p-4 rounded-2xl bg-[#450A12] hover:bg-[#5B0E1B] border border-rose-300/30 text-white font-mono text-xs font-bold uppercase flex items-center justify-between transition-all shadow-lg"
              >
                <span>Academy &amp; Range Hub</span>
                <GraduationCap className="w-4 h-4 text-rose-300" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
