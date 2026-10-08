import React from 'react';
import { HeroSection } from '../hero/HeroSection';
import { StatsHUD } from '../hero/StatsHUD';
import { TechMarquee } from '../common/TechMarquee';
import { EnterpriseServices } from '../enterprise/EnterpriseServices';
import { AcademyCourses } from '../academy/AcademyCourses';
import { DefconContactSection } from '../community/DefconContactSection';
import { FaqSection } from '../faq/FaqSection';
import { TabType } from '../common/Navbar';
import { AcademyCourse } from '../../data/cyberData';

interface OverviewViewProps {
  setActiveTab: (tab: TabType) => void;
  onRequestAudit: (serviceTitle?: string) => void;
  onDownloadSyllabus: (courseTitle: string) => void;
  onViewCourseDetails?: (course: AcademyCourse) => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({
  setActiveTab,
  onRequestAudit,
  onDownloadSyllabus,
  onViewCourseDetails,
}) => {
  return (
    <div className="space-y-16 animate-fadeIn pb-16">
      
      {/* Split-Door Hero Section */}
      <HeroSection
        onDiscoverEnterprise={() => {
          setActiveTab('enterprise');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onExploreAcademy={() => {
          setActiveTab('academy');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Live Animated Stats HUD */}
      <StatsHUD />

      {/* Ticker Tech Marquee */}
      <TechMarquee />

      {/* Enterprise Services Grid */}
      <EnterpriseServices onRequestAudit={onRequestAudit} />

      {/* Academy Course Catalog */}
      <AcademyCourses
        onDownloadSyllabus={onDownloadSyllabus}
        onViewCourseDetails={onViewCourseDetails}
      />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Integrated Community & Contact Module */}
      <DefconContactSection
        onGetInvolvedCommunity={() => {
          setActiveTab('community');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

    </div>
  );
};

