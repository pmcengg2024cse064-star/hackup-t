import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  ArrowUpRight,
  Star,
  ChevronLeft,
  ChevronRight,
  Send,
  Phone,
  Mail,
  CheckCircle2,
  HelpCircle,
  FileSearch,
  Search,
  Server,
  ShieldAlert,
  Calendar,
  Clock,
  HeartPulse,
  Briefcase
} from 'lucide-react';
import { TechMarquee } from '../components/common/TechMarquee';
import { SEOHead } from '../components/common/SEOHead';
import { 
  ENTERPRISE_SERVICES, 
  ACADEMY_COURSES, 
  BLOG_POSTS, 
  GOOGLE_REVIEWS, 
  COMPANY_FACTS, 
  FOUNDER_PROFILE,
  CYBER_PATENTS,
  PARTNER_INSTITUTIONS
} from '../data/cyberData';

interface HomePageProps {
  onRequestAudit: (serviceTitle?: string) => void;
  onBookDemo: (courseTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onRequestAudit,
  onBookDemo,
}) => {
  // Toggle between Services and Courses (default: 'services')
  const [activeCatalogTab, setActiveCatalogTab] = useState<'services' | 'courses'>('services');

  // Google reviews carousel state
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  // Final CTA Consultation Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    serviceInterest: 'Penetration Testing (VAPT)',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNextReview = () => {
    setActiveReviewIdx((prev) => (prev + 1) % GOOGLE_REVIEWS.length);
  };

  const handlePrevReview = () => {
    setActiveReviewIdx((prev) => (prev - 1 + GOOGLE_REVIEWS.length) % GOOGLE_REVIEWS.length);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const experienceMetrics = [
    { num: '10 Years', label: 'Cyber Defense Experience', sub: 'Foundational Industry Leadership' },
    { num: '100+', label: 'Colleges & Corporates', sub: 'Audited & Modernized' },
    { num: '54', label: 'College Partners', sub: 'Active Higher-Ed MoUs in Tamil Nadu' },
    { num: '7', label: 'MNC Partners', sub: 'Corporate Hiring & Technology Alliances' }
  ];

  const whyHackupPillars = [
    {
      title: '10 Years of Field Experience',
      desc: 'Over a decade defending state infrastructure, banking networks, and training national-grade cyber defenders.',
      icon: Award
    },
    {
      title: '2 Issued Cyber Patents',
      desc: 'Proprietary IP in AI-based Firewall Security (2024) and Automated Pentesting & Binary Reverse Engineering (2023).',
      icon: Sparkles
    },
    {
      title: 'Police Cyber Cell Technical Advisor',
      desc: 'Active consultant to the Tamil Nadu Police Cyber Crime Department on ransomware triage and Section 65B evidence.',
      icon: Scale
    },
    {
      title: '100% Manual Exploit Verification',
      desc: 'Zero scanner noise. We simulate real adversaries with chained PoCs and provide guaranteed Safe-to-Host certification.',
      icon: ShieldCheck
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Assess',
      tagline: 'Scope & Threat Modeling',
      desc: 'Define testing boundaries, review network topology, and model threat vectors without touching live operations.'
    },
    {
      num: '02',
      title: 'Test',
      tagline: 'Controlled Exploitation',
      desc: 'Simulate real adversaries to uncover business logic flaws and chained vulnerabilities with zero production downtime.'
    },
    {
      num: '03',
      title: 'Report',
      tagline: 'CVSS Risk Scoring',
      desc: 'Deliver executive summaries for leadership and step-by-step code-level remediation blueprints for development teams.'
    },
    {
      num: '04',
      title: 'Fix & Retest',
      tagline: 'Patch Verification',
      desc: 'Provide developer consultation and conduct complimentary 30-day re-testing to verify all remediation actions.'
    },
    {
      num: '05',
      title: 'Monitor',
      tagline: 'Continuous Defense & Attestation',
      desc: 'Issue official Safe-to-Host Certificate and configure 24/7 SIEM monitoring for ongoing threat resilience.'
    }
  ];

  const industrySectors = [
    {
      name: 'BFSI & Fintech',
      desc: 'Core banking ledgers, mobile payment apps, and API corridors audited under strict RBI & SEBI mandates.',
      icon: Building2
    },
    {
      name: 'Healthcare IT',
      desc: 'Securing hospital PACS servers, medical IoT, and patient records aligned with the Indian DPDP Act 2023.',
      icon: HeartPulse
    },
    {
      name: 'Law Enforcement & Government',
      desc: 'Digital evidence preservation, dark web investigations, and Section 65B forensic court dossiers.',
      icon: Scale
    },
    {
      name: 'Higher Education & CoE',
      desc: 'Campus Cyber Centers of Excellence, syllabus modernization, and hands-on cyber range labs for 54+ universities.',
      icon: GraduationCap
    },
    {
      name: 'Manufacturing & Industrial IoT',
      desc: 'SCADA, PLC, and firmware reverse engineering ensuring uninterrupted plant operations under IEC 62443.',
      icon: Cpu
    }
  ];

  return (
    <div className="space-y-20 animate-fadeIn pb-20 overflow-hidden font-sans text-slate-900">
      
      {/* SEO HEAD FOR HOMEPAGE */}
      <SEOHead
        title="Cyber Security Company in Coimbatore | Hackup Technology"
        description="Premier cyber security company in Coimbatore. Patented AI firewall, VAPT audits, 24/7 SOC, digital forensics & official EC-Council training center."
        canonical="https://hackuptechnology.com/"
        primaryKeyword="cyber security company in Coimbatore"
        breadcrumbs={[{ name: 'Home', url: '/' }]}
      />

      {/* 1. HERO SECTION: ACCREDITATION PILL, HACKUP TECHNOLOGY HEADLINE, DUAL PORTAL CARDS */}
      <section className="relative pt-8 sm:pt-14 pb-16 overflow-hidden">
        {/* Subtle Tech Grid Background matching attached image */}
        <div 
          className="absolute inset-0 pointer-events-none -z-10 opacity-70"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.045) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.045) 1px, transparent 1px)
            `,
            backgroundSize: '44px 44px'
          }}
        />
        {/* Soft Center Ambient Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[450px] bg-amber-500/10 blur-[160px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Top Accreditations Pill with Pulsing Green Dot & Shield */}
          <div className="flex justify-center mb-5">
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2 rounded-full bg-white/95 border border-slate-200/90 shadow-sm backdrop-blur-md"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse shrink-0" />
              <Shield className="w-3.5 h-3.5 text-amber-800 shrink-0" />
              <span className="font-mono text-[10px] sm:text-xs font-bold tracking-wider text-slate-800 uppercase">
                OFFICIAL EC-COUNCIL ATC &bull; TANCCAO SECRETARIAT &bull; COIMBATORE HQ
              </span>
            </motion.div>
          </div>

          {/* Sub-headline Kicker with Sparkles */}
          <div className="flex items-center justify-center space-x-2 mb-4 text-[#9E721D]">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="font-mono text-xs sm:text-sm uppercase font-bold tracking-[0.2em] text-[#9E721D]">
              SOVEREIGN CYBER ADVISORY &bull; RESEARCH &bull; EDUCATION
            </span>
            <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          </div>

          {/* Massive Display Headline: HACKUP TECHNOLOGY */}
          <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-center mb-6">
            <span className="text-[#0B132B] inline-block mr-2 sm:mr-4">
              HACKUP
            </span>
            <span className="bg-gradient-to-r from-amber-800 via-[#B8860B] to-amber-900 bg-clip-text text-transparent inline-block">
              TECHNOLOGY
            </span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto text-center leading-relaxed font-normal mb-7">
            South India's premier cybersecurity enterprise. Defending mission-critical digital assets while engineering the next generation of certified national cyber defenders.
          </p>

          {/* 4 Micro Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12 sm:mb-16">
            {[
              '2 Issued Cyber Patents',
              'Tamil Nadu Police Consultant',
              '54+ Partner Universities',
              '100% Practical Cyber Range'
            ].map((pill, idx) => (
              <div
                key={idx}
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/95 border border-slate-200/90 shadow-sm text-xs font-sans font-semibold text-slate-700"
              >
                <span className="mr-1.5 text-slate-400 font-bold">&bull;</span>
                <span>{pill}</span>
              </div>
            ))}
          </div>

          {/* Dual Portal Layout: Enterprise Solutions Hub & Hackup Academy Portal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
            
            {/* Left Card: Enterprise Solutions Hub */}
            <div className="bg-white rounded-3xl border-2 border-amber-300/80 shadow-xl hover:shadow-2xl hover:border-amber-400 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              {/* Top Image Banner with Overlays */}
              <div className="relative h-60 sm:h-68 overflow-hidden bg-slate-950 image-banner-dark">
                <img
                  src="/images/portal_enterprise.jpg"
                  alt="Enterprise Solutions Hub - Offensive Advisory, SOC, Audits"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />
                
                {/* Top-Left Category Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-amber-300 shadow-md backdrop-blur-md z-10">
                  <Briefcase className="w-3.5 h-3.5 text-amber-700" />
                  <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-900">
                    FOR ENTERPRISE &amp; BFSI
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-6 right-6 z-10 dark-overlay-content">
                  <span className="font-mono text-[10px] sm:text-xs uppercase font-bold tracking-widest text-amber-400 block mb-1 drop-shadow">
                    OFFENSIVE ADVISORY &bull; SOC &bull; AUDITS
                  </span>
                  <h3 
                    className="font-serif-header font-bold text-2xl sm:text-3xl tracking-tight drop-shadow-md text-white"
                    style={{ color: '#FFFFFF' }}
                  >
                    Enterprise Solutions Hub
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Protect digital assets with zero-downtime Penetration Testing (VAPT), cloud security posture, compliance certifications, and 24/7 managed detection.
                </p>

                {/* Feature Checkmarks */}
                <div className="space-y-3">
                  {[
                    'Enterprise VAPT & Red Teaming (Web, Mobile & APIs)',
                    'Cloud Security & Kubernetes CIS Benchmark Hardening',
                    'Turnkey 24/7 Managed SOC Deployment (Wazuh/Splunk)',
                    'Privilege Access Governance (PAM) & Zero-Trust',
                    'Section 65B Forensics & Emergency DFIR Triage'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm font-sans font-medium text-slate-800">
                      <div className="w-5 h-5 rounded-full bg-amber-100 border border-amber-300/80 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-amber-700 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA & Sub-link */}
                <div className="pt-2 space-y-3">
                  <Link
                    to="/services"
                    className="w-full btn-gold-filled py-4 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  >
                    <span>ENTER ENTERPRISE PORTAL</span>
                    <ArrowRight className="w-4 h-4 ml-1 text-slate-950" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => onRequestAudit('Direct Enterprise VAPT Scope Request')}
                    className="w-full text-center text-xs font-mono font-semibold text-slate-600 hover:text-amber-800 transition-colors cursor-pointer block"
                  >
                    Schedule Rapid Assessment / NDA &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* Right Card: Hackup Academy Portal */}
            <div className="bg-white rounded-3xl border-2 border-rose-300/80 shadow-xl hover:shadow-2xl hover:border-rose-400 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              {/* Top Image Banner with Overlays */}
              <div className="relative h-60 sm:h-68 overflow-hidden bg-slate-950 image-banner-dark">
                <img
                  src="/images/portal_student.jpg"
                  alt="Hackup Academy Portal - EC-Council, Cyber Range, Internships"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />
                
                {/* Top-Left Category Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-rose-300 shadow-md backdrop-blur-md z-10">
                  <GraduationCap className="w-3.5 h-3.5 text-[#6B1D2F]" />
                  <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#6B1D2F]">
                    FOR STUDENTS &amp; ASPIRING HACKERS
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-6 right-6 z-10 dark-overlay-content">
                  <span className="font-mono text-[10px] sm:text-xs uppercase font-bold tracking-widest text-rose-300 block mb-1 drop-shadow">
                    EC-COUNCIL &bull; CYBER RANGE &bull; INTERNSHIPS
                  </span>
                  <h3 
                    className="font-serif-header font-bold text-2xl sm:text-3xl tracking-tight drop-shadow-md text-white"
                    style={{ color: '#FFFFFF' }}
                  >
                    Hackup Academy Portal
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Master offensive and defensive cyber warfare with official EC-Council certifications, Coimbatore live cyber range, and industry internships.
                </p>

                {/* Feature Checkmarks */}
                <div className="space-y-3">
                  {[
                    'Certified Ethical Hacker (CEH v13) AI-Powered',
                    'Certified SOC Analyst & SIEM Threat Hunting (CSA)',
                    'Computer Hacking Forensic Investigator (CHFI)',
                    'Coimbatore 1/3/6-Month Hands-On Industrial Internships',
                    'Guaranteed Placement Assistance & 54+ College Network'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm font-sans font-medium text-slate-800">
                      <div className="w-5 h-5 rounded-full bg-rose-100 border border-rose-300/80 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#6B1D2F] stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA & Sub-link */}
                <div className="pt-2 space-y-3">
                  <Link
                    to="/courses"
                    className="w-full btn-burgundy-filled py-4 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all cursor-pointer text-white"
                  >
                    <span>ENTER HACKUP ACADEMY</span>
                    <ArrowRight className="w-4 h-4 ml-1 text-white" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => onBookDemo('Certified Ethical Hacker (CEH v13)')}
                    className="w-full text-center text-xs font-mono font-semibold text-slate-600 hover:text-[#6B1D2F] transition-colors cursor-pointer block"
                  >
                    Download Free EC-Council Syllabus PDF &rarr;
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. TRUST BAR: GOOGLE REVIEWS, EC-COUNCIL, TANCCAO, PATENTS, PARTNERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xl backdrop-blur-xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            
            {/* Trust 1: Google Reviews */}
            <div className="pt-2 sm:pt-0 space-y-1">
              <div className="flex items-center justify-center space-x-1 text-amber-600 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <div className="font-serif-header font-black text-2xl sm:text-3xl text-slate-900">
                3,398 Reviews
              </div>
              <div className="font-sans text-xs text-slate-600 font-medium">
                4.9★ Average Rating
              </div>
            </div>

            {/* Trust 2: EC-Council Training Center */}
            <div className="pt-2 sm:pt-0 sm:pl-4 space-y-1">
              <div className="flex items-center justify-center space-x-1.5 text-amber-700 mb-1">
                <ShieldCheck className="w-4 h-4 text-[#9E721D]" />
                <span className="font-mono text-[10px] uppercase font-bold text-slate-600">Accredited ATC</span>
              </div>
              <div className="font-serif-header font-black text-2xl sm:text-3xl text-slate-900">
                EC-Council
              </div>
              <div className="font-sans text-xs text-slate-600 font-medium">
                Official Training Partner
              </div>
            </div>

            {/* Trust 3: TANCCAO */}
            <div className="pt-2 sm:pt-0 sm:pl-4 space-y-1">
              <div className="flex items-center justify-center space-x-1.5 text-amber-700 mb-1">
                <Scale className="w-4 h-4 text-[#9E721D]" />
                <span className="font-mono text-[10px] uppercase font-bold text-slate-600">State Secretariat</span>
              </div>
              <div className="font-serif-header font-black text-2xl sm:text-3xl text-slate-900">
                TANCCAO
              </div>
              <div className="font-sans text-xs text-slate-600 font-medium">
                Secretary General Lead
              </div>
            </div>

            {/* Trust 4: 2 Issued Patents */}
            <div className="pt-2 sm:pt-0 sm:pl-4 space-y-1">
              <div className="flex items-center justify-center space-x-1.5 text-amber-700 mb-1">
                <Sparkles className="w-4 h-4 text-[#9E721D]" />
                <span className="font-mono text-[10px] uppercase font-bold text-slate-600">Proprietary IP</span>
              </div>
              <div className="font-serif-header font-black text-2xl sm:text-3xl text-slate-900">
                2 Patents
              </div>
              <div className="font-sans text-xs text-slate-600 font-medium">
                AI Firewall &amp; Binary RE
              </div>
            </div>

            {/* Trust 5: 54 Colleges & 7 MNC Partners */}
            <div className="pt-2 sm:pt-0 sm:pl-4 col-span-2 md:col-span-1 space-y-1">
              <div className="flex items-center justify-center space-x-1.5 text-amber-700 mb-1">
                <GraduationCap className="w-4 h-4 text-[#9E721D]" />
                <span className="font-mono text-[10px] uppercase font-bold text-slate-600">Alliances</span>
              </div>
              <div className="font-serif-header font-black text-2xl sm:text-3xl text-slate-900">
                54+ Colleges
              </div>
              <div className="font-sans text-xs text-slate-600 font-medium">
                &amp; 7 Corporate MNCs
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVICES / COURSES TOGGLE SECTION: SERVICES DEFAULT (8 CARDS), COURSES (5 CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Toggle Header & Control */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-amber-800 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>SOLUTIONS DIRECTORY &bull; OFFENSIVE &bull; DEFENSIVE &bull; ACADEMY</span>
          </div>
          
          <h2 className="font-serif-header font-bold text-3xl sm:text-4xl text-slate-900">
            Specialized Enterprise Services &amp; Accredited Courses
          </h2>

          <p className="font-sans text-xs sm:text-sm text-slate-600 font-medium">
            Toggle seamlessly between our 8 enterprise defense services (white &amp; gold) and 5 EC-Council certified academic tracks (burgundy).
          </p>

          {/* Cross-fade Tab Control Pill */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-slate-100 border border-slate-300 shadow-inner mt-2">
            <button
              onClick={() => setActiveCatalogTab('services')}
              className={`relative z-10 px-6 py-2.5 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wider cursor-pointer transition-colors duration-300 flex items-center space-x-2 ${
                activeCatalogTab === 'services'
                  ? 'text-slate-950 font-extrabold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Enterprise Services (8)</span>
              {activeCatalogTab === 'services' && (
                <motion.div
                  layoutId="catalog-active-pill"
                  className="absolute inset-0 rounded-full btn-gold-filled shadow-lg shadow-[#D4AF37]/35 -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>

            <button
              onClick={() => setActiveCatalogTab('courses')}
              className={`relative z-10 px-6 py-2.5 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wider cursor-pointer transition-colors duration-300 flex items-center space-x-2 ${
                activeCatalogTab === 'courses'
                  ? 'text-white font-extrabold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Certified Courses (5)</span>
              {activeCatalogTab === 'courses' && (
                <motion.div
                  layoutId="catalog-active-pill"
                  className="absolute inset-0 rounded-full btn-burgundy-filled shadow-lg shadow-[#881337]/40 -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Dynamic Cross-Fading Cards Grid */}
        <AnimatePresence mode="wait">
          {activeCatalogTab === 'services' ? (
            <motion.div
              key="services-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {ENTERPRISE_SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  className="rounded-3xl bg-white border-2 border-amber-300 hover:border-[#D4AF37] p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                        {srv.badge}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">
                        {srv.turnaroundDays}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-serif-header font-bold text-lg text-slate-900 group-hover:text-[#9E721D] transition-colors leading-snug">
                        {srv.shortTitle}
                      </h3>
                      <p className="font-sans text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {srv.description}
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-amber-100">
                      <span className="font-mono text-[10px] uppercase font-bold text-slate-500 block">
                        Standards &bull; Compliance
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {srv.standards.slice(0, 2).map((std, idx) => (
                          <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                            {std}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 space-y-2">
                    <Link
                      to={`/services/${srv.id}`}
                      className="btn-gold-filled w-full py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-md hover:scale-101"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="courses-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {ACADEMY_COURSES.map((course) => (
                <div
                  key={course.id}
                  className="rounded-3xl bg-white border-2 border-rose-300 hover:border-rose-400 p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-rose-50 text-rose-900 border border-rose-200">
                        {course.badge}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">
                        {course.duration}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-serif-header font-bold text-lg text-slate-900 group-hover:text-rose-900 transition-colors leading-snug">
                        {course.title}
                      </h3>
                      <p className="font-sans text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-rose-100">
                      <span className="font-mono text-[10px] uppercase font-bold text-slate-500 block">
                        Lab Scenarios &bull; Mode
                      </span>
                      <div className="text-xs font-mono text-slate-700">
                        {course.practicalLabHours} &bull; {course.mode}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 space-y-2">
                    <Link
                      to={`/courses/${course.id}`}
                      className="btn-burgundy-filled w-full py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-md hover:scale-101 text-white"
                    >
                      <span>View Course Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </section>

      {/* 4. WHY HACKUP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-xl space-y-8">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-amber-800 uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>THE HACKUP DISTINCTION</span>
            </div>
            <h2 className="font-serif-header font-bold text-3xl text-slate-900">
              Why Indian Enterprises &amp; Universities Choose Hackup
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600">
              Offensive capability honed by 10 years on the frontlines of real cyber warfare and law enforcement forensics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {whyHackupPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-amber-800" />
                  </div>
                  <h3 className="font-serif-header font-bold text-base text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. EXPERIENCE IN NUMBERS (10 YEARS, 100+ COLLEGES & CORPORATES, 54 COLLEGE PARTNERS, 7 MNC PARTNERS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden dark-surface">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-widest">
                VERIFIABLE TRACK RECORD
              </span>
              <h2 className="font-serif-header font-bold text-3xl sm:text-4xl text-white">
                Experience in Numbers
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-300">
                A sovereign footprint spanning executive cyber advisory, state police support, and university education.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800 text-center">
              {experienceMetrics.map((item, idx) => (
                <div key={idx} className={`pt-4 sm:pt-0 ${idx !== 0 ? 'sm:pl-6' : ''} space-y-2`}>
                  <div className="font-serif-header font-black text-3xl sm:text-5xl text-amber-400">
                    {item.num}
                  </div>
                  <div className="font-sans text-sm font-bold text-white">
                    {item.label}
                  </div>
                  <div className="font-sans text-xs text-slate-400">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. AUTHORITY: FOUNDER CARD, PATENTS, PARTNERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border-2 border-amber-300 p-8 sm:p-12 shadow-xl space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Founder Card Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-amber-800 uppercase tracking-widest">
                <Award className="w-4 h-4 text-amber-600" />
                <span>STATE &bull; NATIONAL &bull; ACADEMIC AUTHORITY</span>
              </div>

              <h2 className="font-serif-header font-bold text-2xl sm:text-3xl text-slate-900">
                Led by Dr. Dinesh Paranthagan
              </h2>

              <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                As Founder &amp; CEO of Hackup Technology and Secretary General of TANCCAO, Dr. Dinesh Paranthagan has steered over 2,100 enterprise cybersecurity audits, authored 2 proprietary defense patents, and serves as an official technical consultant to the Tamil Nadu Police Cyber Crime Department.
              </p>

              {/* Patent Cards Snapshot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {CYBER_PATENTS.map((pat) => (
                  <div key={pat.id} className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5">
                    <span className="font-mono text-[9px] uppercase font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                      {pat.patentNumber}
                    </span>
                    <h4 className="font-serif-header font-bold text-xs text-slate-900">
                      {pat.title}
                    </h4>
                    <p className="font-sans text-[11px] text-slate-600 line-clamp-2">
                      {pat.shortDesc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-3 text-xs font-mono">
                <Link to="/about-us" className="text-amber-800 hover:text-amber-950 font-bold hover:underline flex items-center space-x-1">
                  <span>Read Complete Leadership Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span>&bull;</span>
                <Link to="/institutions-workshops" className="text-slate-600 hover:text-slate-900 font-semibold hover:underline">
                  54+ Partner Universities
                </Link>
              </div>
            </div>

            {/* Partner Institutions Snapshot */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h4 className="font-serif-header font-bold text-sm text-slate-900 uppercase tracking-wider">
                Trusted Across 54+ Higher Education Campuses
              </h4>
              <div className="space-y-2 text-xs font-sans text-slate-700">
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 font-medium">
                  &bull; Vellore Institute of Technology (VIT)
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 font-medium">
                  &bull; PSG College of Technology (PSG TECH)
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 font-medium">
                  &bull; Sri Ramakrishna Engineering College (SREC)
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 font-medium">
                  &bull; Madras Christian College (MCC)
                </div>
              </div>
              <Link
                to="/institutions-workshops"
                className="btn-gold-filled w-full py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider block text-center"
              >
                View All Partner Institutions &rarr;
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 7. PROCESS: ASSESS, TEST, REPORT, FIX AND RETEST, MONITOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-amber-800 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>OPERATIONAL RIGOR</span>
          </div>
          <h2 className="font-serif-header font-bold text-3xl sm:text-4xl text-slate-900">
            Our 5-Stage Cyber Defense Lifecycle
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-600">
            Engineered to eliminate false positives and guarantee verifiable Safe-to-Host compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all space-y-3 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif-header font-black text-2xl text-amber-700/40 group-hover:text-amber-700 transition-colors">
                  {step.num}
                </span>
                <span className="w-2 h-2 rounded-full bg-amber-500" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif-header font-bold text-base text-slate-900">
                  {step.title}
                </h3>
                <div className="font-mono text-[10px] text-amber-800 font-semibold uppercase">
                  {step.tagline}
                </div>
                <p className="font-sans text-xs text-slate-600 leading-relaxed pt-1">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 8. INDUSTRIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-amber-800 uppercase tracking-widest">
            <Building2 className="w-4 h-4 text-amber-600" />
            <span>DOMAIN EXPERTISE</span>
          </div>
          <h2 className="font-serif-header font-bold text-3xl text-slate-900">
            Industries We Defend
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-600">
            Custom-tailored security posture aligned with industry-specific regulatory frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industrySectors.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 shadow-sm space-y-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-amber-800" />
                </div>
                <h3 className="font-serif-header font-bold text-sm text-slate-900">
                  {ind.name}
                </h3>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            );
          })}
        </div>

      </section>

      {/* 9. GOOGLE REVIEWS CAROUSEL (3,398 GOOGLE REVIEWS) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-amber-800 uppercase tracking-widest">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>3,398 VERIFIED GOOGLE REVIEWS (4.9★)</span>
          </div>
          <h2 className="font-serif-header font-bold text-3xl text-slate-900">
            What Clients &amp; Alumni Say
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative rounded-3xl bg-white border-2 border-amber-300 p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            
            {/* Stars */}
            <div className="flex items-center justify-center space-x-1 text-amber-500">
              {[...Array(GOOGLE_REVIEWS[activeReviewIdx].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
              ))}
            </div>

            {/* Review Quote */}
            <blockquote className="font-serif-header font-normal text-base sm:text-xl text-slate-800 leading-relaxed italic">
              "{GOOGLE_REVIEWS[activeReviewIdx].text}"
            </blockquote>

            {/* Reviewer Details */}
            <div className="space-y-1">
              <div className="font-sans font-bold text-sm sm:text-base text-slate-900">
                {GOOGLE_REVIEWS[activeReviewIdx].name}
              </div>
              <div className="font-mono text-xs text-amber-800 font-semibold">
                {GOOGLE_REVIEWS[activeReviewIdx].role}
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                Verified Google Review &bull; {GOOGLE_REVIEWS[activeReviewIdx].date}
              </div>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center justify-center space-x-4 pt-4">
              <button
                onClick={handlePrevReview}
                className="p-2.5 rounded-full bg-slate-100 hover:bg-amber-100 border border-slate-300 text-slate-700 cursor-pointer transition-colors"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="text-xs font-mono text-slate-500">
                {activeReviewIdx + 1} / {GOOGLE_REVIEWS.length}
              </div>
              <button
                onClick={handleNextReview}
                className="p-2.5 rounded-full bg-slate-100 hover:bg-amber-100 border border-slate-300 text-slate-700 cursor-pointer transition-colors"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

      </section>

      {/* 10. LATEST BLOG POSTS (3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-amber-800 uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>THREAT RESEARCH &amp; INDUSTRY ADVISORIES</span>
            </div>
            <h2 className="font-serif-header font-bold text-3xl text-slate-900">
              Latest Cyber Defense Insights
            </h2>
          </div>
          <Link
            to="/blog"
            className="text-xs font-mono font-bold text-[#9E721D] hover:underline flex items-center space-x-1"
          >
            <span>View All Research Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <article
              key={post.slug}
              className="rounded-3xl bg-white border border-slate-200 hover:border-amber-300 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 font-bold border border-amber-200">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif-header font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#9E721D] transition-colors leading-snug">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="font-sans text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">{post.publishedDate}</span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-amber-800 font-bold hover:underline flex items-center space-x-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </section>

      {/* 11. FINAL CALL TO ACTION WITH CONSULTATION FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden border border-amber-400/30 dark-surface">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left CTA Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>CONFIDENTIAL &bull; PRODUCTION-SAFE &bull; NDA GUARANTEED</span>
              </div>

              <h2 className="font-serif-header font-bold text-3xl sm:text-4xl text-white leading-tight">
                Schedule Your Executive Cyber Consultation
              </h2>

              <p className="font-sans text-sm text-slate-300 leading-relaxed">
                Connect directly with our security architects to scope your penetration testing requirements, 24/7 SIEM monitoring deployment, or academic MoU tie-up under complete confidentiality.
              </p>

              <div className="space-y-3 pt-2 font-mono text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>{COMPANY_FACTS.phones[0]} / {COMPANY_FACTS.phones[1]}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>{COMPANY_FACTS.emails[0]}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4 text-amber-400" />
                  <span>Ganapathy, Coimbatore - 641006, Tamil Nadu</span>
                </div>
              </div>
            </div>

            {/* Right Consultation Form */}
            <div className="lg:col-span-6 bg-white text-slate-900 p-6 sm:p-8 rounded-2xl shadow-xl">
              {formSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif-header font-bold text-xl text-slate-900">
                    Consultation Request Received
                  </h3>
                  <p className="font-sans text-xs text-slate-600 max-w-sm mx-auto">
                    Our technical team in Coimbatore will review your scope and contact you within 2 hours under strict mutual NDA.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="btn-gold-filled px-6 py-2 rounded-xl font-mono text-xs font-bold"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 font-sans text-xs">
                  <h3 className="font-serif-header font-bold text-lg text-slate-900">
                    Request Fast-Track Scoping Call
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-mono text-[11px] font-bold text-slate-700">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Arun Kumar"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-mono text-[11px] font-bold text-slate-700">Official Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. arun@enterprise.com"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-mono text-[11px] font-bold text-slate-700">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-mono text-[11px] font-bold text-slate-700">Company / College Name</label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Organization Name"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[11px] font-bold text-slate-700">Primary Service of Interest</label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none font-sans"
                    >
                      <option value="Penetration Testing (VAPT)">Penetration Testing (VAPT)</option>
                      <option value="Vulnerability Management & Security Audit">Vulnerability Management & Security Audit</option>
                      <option value="24/7 Managed SOC Deployment">24/7 Managed SOC Deployment</option>
                      <option value="ISO 27001 & DPDP Act Compliance">ISO 27001 & DPDP Act Compliance</option>
                      <option value="Red Team vs Blue Team Emulation">Red Team vs Blue Team Emulation</option>
                      <option value="Digital Forensics & 65B Investigation">Digital Forensics & 65B Investigation</option>
                      <option value="EC-Council Certified Training / Internship">EC-Council Certified Training / Internship</option>
                      <option value="College Cyber Range CoE Tie-up">College Cyber Range CoE Tie-up</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[11px] font-bold text-slate-700">Scope Overview / Target Details</label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Brief details about target assets, expected deadlines, or specific requirements..."
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-gold-filled py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Send className="w-3.5 h-3.5 text-slate-950" />
                    <span>Submit Confidential Request</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Trust marquee at the bottom */}
      <div className="space-y-4 text-center pt-6">
        <div className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold">
          DEFENDING LAW ENFORCEMENT, CRITICAL INFRASTRUCTURE &amp; 54+ UNIVERSITIES
        </div>
        <TechMarquee />
      </div>

    </div>
  );
};
