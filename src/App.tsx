import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CanvasBackground } from './components/common/CanvasBackground';
import { Navbar } from './components/common/Navbar';
import { ScrollToTop } from './components/common/ScrollToTop';
import { BackToTop } from './components/common/BackToTop';
import { Footer } from './components/footer/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { EnterprisePage } from './pages/EnterprisePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AcademyPage } from './pages/AcademyPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { CyberRangePage } from './pages/CyberRangePage';
import { InternshipPage } from './pages/InternshipPage';
import { CommunityPage } from './pages/CommunityPage';
import { EstimatorPage } from './pages/EstimatorPage';
import { AboutPage } from './pages/AboutPage';
import { FounderPatentsPage } from './pages/FounderPatentsPage';
import { InstitutionalReachPage } from './pages/InstitutionalReachPage';

// Modals & Drawers
import { B2BAuditModal } from './components/modals/B2BAuditModal';
import { B2CDemoModal } from './components/modals/B2CDemoModal';
import { CourseSyllabusDrawer } from './components/modals/CourseSyllabusDrawer';
import { ResponsibleDisclosureModal } from './components/modals/ResponsibleDisclosureModal';
import { AcademyCourse } from './data/cyberData';

export function App() {
  // Modal & Drawer States
  const [b2bAuditModalOpen, setB2bAuditModalOpen] = useState(false);
  const [b2cDemoModalOpen, setB2cDemoModalOpen] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState<string | undefined>(undefined);
  const [disclosureModalOpen, setDisclosureModalOpen] = useState(false);
  const [prefilledScope, setPrefilledScope] = useState<any>(null);

  // Syllabus Drawer State
  const [selectedSyllabusCourse, setSelectedSyllabusCourse] = useState<AcademyCourse | null>(null);
  const [syllabusDrawerOpen, setSyllabusDrawerOpen] = useState(false);

  // Handlers
  const handleOpenAuditModal = (serviceTitle?: string) => {
    setPrefilledScope(serviceTitle ? { serviceTitle } : null);
    setB2bAuditModalOpen(true);
  };

  const handleOpenAuditWithScope = (scopeDetails: any) => {
    setPrefilledScope(scopeDetails);
    setB2bAuditModalOpen(true);
  };

  const handleOpenDemoModal = (courseTitle?: string) => {
    setSelectedCourseTitle(courseTitle);
    setB2cDemoModalOpen(true);
  };

  const handleOpenSyllabusDrawer = (course: AcademyCourse) => {
    setSelectedSyllabusCourse(course);
    setSyllabusDrawerOpen(true);
  };

  const handleEnrollCustomTrack = (trackDetails: any) => {
    setSelectedCourseTitle(trackDetails.recommendedTrack);
    setB2cDemoModalOpen(true);
  };

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        
        <div className="relative min-h-screen bg-[#080711] dark:bg-[#080711] light:bg-[#F8FAFC] text-slate-300 dark:text-slate-300 light:text-slate-800 selection:bg-amber-500/25 selection:text-white luxury-grid-bg transition-colors duration-300">
          
          {/* Interactive Particle Mesh */}
          <CanvasBackground />

          {/* Sticky Luxury Navbar with Custom Logo & Theme Switcher */}
          <Navbar
            onRequestConsultation={() => handleOpenAuditModal()}
            onRequestAudit={() => handleOpenAuditModal('Full-Stack VAPT')}
          />

          {/* Main Content Area Rendering SPA Route Pages */}
          <main className="relative z-10 min-h-[70vh]">
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    onRequestAudit={handleOpenAuditModal}
                    onBookDemo={handleOpenDemoModal}
                  />
                }
              />

              <Route
                path="/enterprise"
                element={
                  <EnterprisePage
                    onRequestAudit={handleOpenAuditModal}
                    onRequestAuditWithScope={handleOpenAuditWithScope}
                  />
                }
              />

              <Route
                path="/enterprise/services/:serviceId"
                element={
                  <ServiceDetailPage
                    onRequestAudit={handleOpenAuditModal}
                  />
                }
              />

              <Route
                path="/academy"
                element={
                  <AcademyPage
                    onDownloadSyllabus={handleOpenDemoModal}
                    onApplyInternship={() => handleOpenDemoModal('Coimbatore 1/3/6-Month Industrial Internship')}
                    onEnrollCustomTrack={handleEnrollCustomTrack}
                  />
                }
              />

              <Route
                path="/academy/courses/:courseId"
                element={
                  <CourseDetailPage
                    onBookDemo={handleOpenDemoModal}
                  />
                }
              />

              <Route
                path="/founder-patents"
                element={
                  <FounderPatentsPage
                    onRequestAudit={handleOpenAuditModal}
                    onBookExecutiveAdvisory={() => handleOpenAuditModal('Executive Advisory with Dinesh Paranthagan')}
                  />
                }
              />

              <Route
                path="/patents"
                element={
                  <FounderPatentsPage
                    onRequestAudit={handleOpenAuditModal}
                    onBookExecutiveAdvisory={() => handleOpenAuditModal('Executive Advisory with Dinesh Paranthagan')}
                  />
                }
              />

              <Route
                path="/institutional-reach"
                element={
                  <InstitutionalReachPage
                    onRequestConsultation={() => handleOpenDemoModal('Campus Center of Excellence (CoE)')}
                  />
                }
              />

              <Route
                path="/cyber-range"
                element={
                  <CyberRangePage
                    onRequestDemo={() => handleOpenDemoModal('Cyber Range Live Sandbox Access')}
                  />
                }
              />

              <Route
                path="/internship"
                element={
                  <InternshipPage
                    onApply={() => handleOpenDemoModal('Coimbatore 1/3/6-Month Industrial Internship')}
                  />
                }
              />

              <Route
                path="/community"
                element={
                  <CommunityPage
                    onGetInvolved={(title) => handleOpenDemoModal(title)}
                  />
                }
              />

              <Route
                path="/defcon"
                element={
                  <CommunityPage
                    onGetInvolved={(title) => handleOpenDemoModal(title)}
                  />
                }
              />

              <Route
                path="/estimate"
                element={
                  <EstimatorPage
                    onRequestAuditWithScope={handleOpenAuditWithScope}
                    onEnrollCustomTrack={handleEnrollCustomTrack}
                  />
                }
              />

              <Route
                path="/about"
                element={
                  <AboutPage
                    onOpenDisclosure={() => setDisclosureModalOpen(true)}
                    onRequestConsultation={() => handleOpenAuditModal('Executive Consultation')}
                    onRequestAudit={(title) => handleOpenAuditModal(title || 'Enterprise Security Audit')}
                    onBookAcademicDemo={(subject) => handleOpenDemoModal(subject || 'Academic & Admissions Tie-up')}
                  />
                }
              />

              {/* Fallback route */}
              <Route
                path="*"
                element={
                  <HomePage
                    onRequestAudit={handleOpenAuditModal}
                    onBookDemo={handleOpenDemoModal}
                  />
                }
              />
            </Routes>
          </main>

          {/* Luxury Minimalist Footer */}
          <Footer
            onRequestConsultation={() => handleOpenAuditModal()}
            onOpenDisclosure={() => setDisclosureModalOpen(true)}
          />

          {/* Floating Scroll Progress & Back To Top Control */}
          <BackToTop />

          {/* Modals & Drawers */}
          <B2BAuditModal
            isOpen={b2bAuditModalOpen}
            onClose={() => setB2bAuditModalOpen(false)}
            prefilledScope={prefilledScope}
          />

          <B2CDemoModal
            isOpen={b2cDemoModalOpen}
            onClose={() => setB2cDemoModalOpen(false)}
            prefilledCourseTitle={selectedCourseTitle}
          />

          <CourseSyllabusDrawer
            course={selectedSyllabusCourse}
            isOpen={syllabusDrawerOpen}
            onClose={() => setSyllabusDrawerOpen(false)}
            onBookDemo={handleOpenDemoModal}
          />

          <ResponsibleDisclosureModal
            isOpen={disclosureModalOpen}
            onClose={() => setDisclosureModalOpen(false)}
          />

        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
