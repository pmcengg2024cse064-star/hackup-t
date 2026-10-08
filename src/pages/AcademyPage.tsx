import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  ArrowRight, 
  Download, 
  Terminal, 
  Clock, 
  BookOpen, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Award,
  Users,
  Compass,
  Cpu,
  Layers
} from 'lucide-react';
import { ACADEMY_COURSES } from '../data/cyberData';
import { InternshipSpotlight } from '../components/academy/InternshipSpotlight';
import { CyberRangeVisualizer } from '../components/academy/CyberRangeVisualizer';
import { AcademicFootprint } from '../components/institutional/AcademicFootprint';
import { FaqSection } from '../components/faq/FaqSection';

interface AcademyPageProps {
  onDownloadSyllabus: (courseTitle: string) => void;
  onApplyInternship: () => void;
  onEnrollCustomTrack: (trackDetails: any) => void;
}

export const AcademyPage: React.FC<AcademyPageProps> = ({
  onDownloadSyllabus,
  onApplyInternship,
  onEnrollCustomTrack,
}) => {
  const [selectedTab, setSelectedTab] = useState<'All' | 'Offensive' | 'Defensive' | 'Specialist'>('All');

  const filterCourses = () => {
    if (selectedTab === 'All') return ACADEMY_COURSES;
    if (selectedTab === 'Offensive') {
      return ACADEMY_COURSES.filter(c => c.category === 'Offensive Security');
    }
    if (selectedTab === 'Defensive') {
      return ACADEMY_COURSES.filter(c => c.category === 'Defensive SOC' || c.category === 'Forensics & Governance');
    }
    if (selectedTab === 'Specialist') {
      return ACADEMY_COURSES.filter(c => c.category === 'Cloud & DevSecOps' || c.category === 'Specialized Suite');
    }
    return ACADEMY_COURSES;
  };

  const currentCourses = filterCourses();

  return (
    <div className="space-y-20 animate-fadeIn pb-24 font-sans text-white bg-[#0D0204]">
      
      {/* 1. ACADEMY HERO (VELVET BURGUNDY THEME) */}
      <section className="relative pt-10 sm:pt-16 pb-16 overflow-hidden">
        
        {/* Background Burgundy Ambient Aura */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#5B0E1B]/35 blur-[170px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#5B0E1B]/80 border border-rose-300/30 shadow-xl backdrop-blur-md">
              <GraduationCap className="w-4 h-4 text-rose-300" />
              <span className="font-mono text-xs uppercase font-bold tracking-widest text-rose-100">
                OFFICIAL EC-COUNCIL ACCREDITED TRAINING CENTER &bull; COIMBATORE
              </span>
            </div>

            <h1 className="font-serif-header font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
              Launch Your Cybersecurity Career on{' '}
              <span className="text-rose-300 block mt-2">
                Live Attack Ranges.
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#E2C4C9] max-w-3xl mx-auto leading-relaxed">
              Master weaponized attack-defense simulations in our Coimbatore Cyber Range. Zero-PPT guarantee, official Aspen courseware, and direct placement referrals with 40+ hiring partners.
            </p>

            {/* Zero PPT & Accreditations Strip */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {[
                '100% Practical Hands-On Labs',
                'Official EC-Council Flagship Tracks',
                'Coimbatore Offline + Live Online',
                '40+ MNC Placement Pipelines',
                'TANCCAO Student Membership'
              ].map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-[#3D0811] border border-rose-400/30 text-[11px] font-mono text-rose-200 font-semibold"
                >
                  &bull; {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 max-w-xl mx-auto">
              <button
                onClick={() => onDownloadSyllabus('Certified Ethical Hacker (CEH v13 AI-Powered)')}
                className="w-full sm:w-auto btn-burgundy-filled px-8 py-4 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-2xl hover:scale-102 cursor-pointer"
              >
                <Download className="w-4 h-4 text-white" />
                <span>Download Official CEH v13 Syllabus</span>
              </button>

              <a
                href="#courses"
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#5B0E1B]/60 hover:bg-[#5B0E1B] text-white border border-rose-300/40 transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Explore Certification Tracks &darr;</span>
              </a>
            </div>

          </div>

          {/* Key Guarantees Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto">
            {[
              { title: 'Official Aspen Labs', desc: 'Genuine EC-Council exam vouchers & courseware' },
              { title: '100% Practical Labs', desc: 'Dedicated Kali subnets, Wazuh SIEM & Splunk' },
              { title: 'Offline Cyber Campus', desc: 'Ganapathy, Coimbatore lab + weekend batches' },
              { title: 'Placement Referral', desc: 'Direct corporate interview pipelines in TN & BLR' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#3E0812]/90 border border-rose-300/20 text-center space-y-1 shadow-lg"
              >
                <div className="font-serif-header font-bold text-sm text-white">
                  {item.title}
                </div>
                <div className="text-xs text-[#E2C4C9]">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. FILTERABLE CERTIFICATION MATRIX */}
      <section id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="font-mono text-xs uppercase font-bold tracking-widest text-rose-300">
            OFFICIAL ACCREDITED CURRICULUM
          </div>
          <h2 className="font-serif-header font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            EC-Council Certification Catalog
          </h2>
          <div className="w-16 h-[2px] bg-rose-400 mx-auto mt-2 mb-3" />
          <p className="font-sans text-xs sm:text-sm text-[#E2C4C9]">
            Select a specialized track to view syllabus modules, practical lab scenarios, and career outcomes.
          </p>

          {/* Segmented Control Tabs */}
          <div className="inline-flex p-1.5 rounded-full bg-[#2E070D] border border-rose-400/40 gap-1 mt-4">
            {(['All', 'Offensive', 'Defensive', 'Specialist'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-5 py-2 rounded-full font-mono text-xs font-bold uppercase transition-all cursor-pointer ${
                  selectedTab === tab
                    ? 'bg-[#881337] text-white shadow-md'
                    : 'text-rose-200 hover:text-white'
                }`}
              >
                {tab === 'All' ? 'All Tracks' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCourses.map((course) => (
            <div
              key={course.id}
              className="rounded-3xl bg-[#4A0A13]/90 border border-rose-300/25 hover:border-rose-300 p-7 flex flex-col justify-between space-y-6 shadow-2xl transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-300/50 to-transparent" />

              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-rose-300 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose-950 text-rose-200 border border-rose-400/40">
                    {course.category}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-rose-200">
                    {course.level}
                  </span>
                </div>

                <h3 className="font-serif-header font-bold text-xl text-white group-hover:text-rose-200 transition-colors leading-snug">
                  {course.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#E2C4C9] leading-relaxed">
                  {course.description}
                </p>

                {/* Practical Metric Pill */}
                <div className="p-3 rounded-2xl bg-black/40 border border-rose-900/60 font-mono text-xs flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 font-bold text-rose-100">
                    <Clock className="w-3.5 h-3.5 text-rose-300" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 font-bold text-rose-300">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>{course.practicalLabHours}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-1.5 pt-1">
                  {course.highlights.slice(0, 3).map((hl, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-rose-100">
                      <Check className="w-3.5 h-3.5 text-rose-300 shrink-0 mt-0.5" />
                      <span className="truncate">{hl}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-rose-900/60 space-y-2">
                <Link
                  to={`/academy/courses/${course.id}`}
                  className="w-full py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-white hover:bg-rose-50 text-[#5B0E1B] flex items-center justify-center space-x-2 shadow-md transition-all"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#5B0E1B]" />
                  <span>View Full Modules</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#5B0E1B]" />
                </Link>

                <button
                  onClick={() => onDownloadSyllabus(course.title)}
                  className="btn-burgundy-filled w-full py-2.5 rounded-xl text-xs font-mono font-bold uppercase flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                >
                  <Download className="w-3.5 h-3.5 text-white" />
                  <span>Download Syllabus PDF</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 3. THE LIVE CYBER RANGE (VISUAL DIAGRAM & TOOLSTACK) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CyberRangeVisualizer />
      </section>

      {/* 4. INDUSTRIAL COLLEGE INTERNSHIPS (COIMBATORE CENTER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InternshipSpotlight onApply={onApplyInternship} />
      </section>

      {/* 5. 54+ PARTNER COLLEGES FOOTPRINT */}
      <AcademicFootprint onPartnerInquiry={(col) => onDownloadSyllabus(col ? `Training for ${col}` : 'Campus Center of Excellence')} />

      {/* Frequently Asked Questions */}
      <FaqSection />

    </div>
  );
};
