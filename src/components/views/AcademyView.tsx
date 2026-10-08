import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Sparkles, 
  ArrowRight, 
  Download, 
  Terminal, 
  Users, 
  CheckCircle2, 
  Flame,
  Clock,
  BookOpen
} from 'lucide-react';
import { AcademyCourses } from '../academy/AcademyCourses';
import { DualEstimatorPathFinder } from '../interactive/DualEstimatorPathFinder';
import { InternshipSpotlight } from '../academy/InternshipSpotlight';
import { FaqSection } from '../faq/FaqSection';
import { AcademyCourse } from '../../data/cyberData';

interface AcademyViewProps {
  onDownloadSyllabus: (courseTitle: string) => void;
  onViewCourseDetails?: (course: AcademyCourse) => void;
  onApplyInternship: () => void;
  onEnrollCustomTrack: (trackDetails: any) => void;
}

export const AcademyView: React.FC<AcademyViewProps> = ({
  onDownloadSyllabus,
  onViewCourseDetails,
  onApplyInternship,
  onEnrollCustomTrack,
}) => {
  return (
    <div className="space-y-16 animate-fadeIn pb-16">
      
      {/* Dedicated Academy Hero */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1A0D30] border border-[#C4A77D]/40 shadow-xl backdrop-blur-xl">
              <GraduationCap className="w-4 h-4 text-[#C4A77D]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#C4A77D]">
                OFFICIAL EC-COUNCIL ACCREDITED TRAINING CENTER • COIMBATORE
              </span>
            </div>

            <h1 className="font-serif-header font-bold text-3xl sm:text-5xl lg:text-6xl text-[#F8FAFC] tracking-wide leading-[1.15]">
              Upskilling the Next-Gen{' '}
              <span className="text-gold-pure block mt-2">
                Cyber Defense Workforce.
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#A79AB2] max-w-3xl mx-auto leading-relaxed">
              Master weaponized attack-defense simulations in our Coimbatore Cyber Range. Official CEH v13 curriculum, live SIEM threat hunting, and engineering college internships.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onDownloadSyllabus('Certified Ethical Hacker (CEH v13)')}
                className="btn-gold-filled px-7 py-4 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center space-x-2 cursor-pointer shadow-xl"
              >
                <Download className="w-4 h-4 text-[#08040F]" />
                <span>Download Official CEH v13 Syllabus</span>
                <ArrowRight className="w-4 h-4 text-[#08040F]" />
              </button>

              <button
                onClick={onApplyInternship}
                className="btn-gold-outline px-6 py-4 rounded-xl font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center space-x-2 cursor-pointer"
              >
                <span>Apply for Coimbatore Internship</span>
              </button>
            </div>
          </div>

          {/* Academy Key Guarantees Strip */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto">
            {[
              { title: 'Official Aspen Access', desc: 'Genuine EC-Council courseware' },
              { title: '100% Practical Labs', desc: 'Dedicated Kali subnets & SIEM' },
              { title: 'Coimbatore Campus', desc: 'Ganapathy offline + Live online' },
              { title: '40+ Hiring Partners', desc: 'Direct MNC interview referrals' },
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

      {/* Academy Course Catalog */}
      <AcademyCourses
        onDownloadSyllabus={onDownloadSyllabus}
        onViewCourseDetails={onViewCourseDetails}
      />

      {/* Coimbatore College Internship Program */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InternshipSpotlight onApply={onApplyInternship} />
      </div>

      {/* Student Career Roadmap Pathfinder */}
      <DualEstimatorPathFinder
        onRequestAuditWithScope={() => {}}
        onEnrollCustomTrack={onEnrollCustomTrack}
      />

      {/* Frequently Asked Questions */}
      <FaqSection />

    </div>
  );
};

