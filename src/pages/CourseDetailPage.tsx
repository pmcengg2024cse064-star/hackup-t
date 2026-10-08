import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  Terminal, 
  Layers, 
  Award, 
  Download, 
  MapPin, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { ACADEMY_COURSES } from '../data/cyberData';

interface CourseDetailPageProps {
  onBookDemo: (courseTitle: string) => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ onBookDemo }) => {
  const { courseId } = useParams<{ courseId: string }>();

  const course = ACADEMY_COURSES.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-6">
        <h2 className="font-serif-header font-bold text-3xl text-slate-900 dark:text-white">Course Not Found</h2>
        <p className="text-slate-600 dark:text-slate-400">The requested cybersecurity certification course could not be located.</p>
        <Link to="/academy" className="btn-burgundy-filled inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-xs font-mono font-bold text-white">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Courses</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeIn">
      
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 font-mono text-xs text-slate-500 dark:text-slate-400">
        <Link to="/" className="hover:text-[#881337] dark:hover:text-rose-400 transition-colors">Home</Link>
        <span>/</span>
        <Link to="/academy" className="hover:text-[#881337] dark:hover:text-rose-400 transition-colors">Academy</Link>
        <span>/</span>
        <span className="text-[#881337] dark:text-rose-400 font-semibold">{course.title}</span>
      </div>

      {/* Main Course Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-rose-300 dark:border-rose-900/40 shadow-xl">
        {course.imageUrl && (
          <div className="h-64 sm:h-80 w-full overflow-hidden bg-slate-950 relative">
            <img
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            
            <div className="absolute top-6 left-6 flex items-center space-x-3">
              <span className="font-mono text-xs uppercase font-bold tracking-widest text-rose-200 bg-rose-950/90 px-3.5 py-1.5 rounded-full border border-rose-600/50 backdrop-blur-md">
                {course.badge}
              </span>
              <span className="font-mono text-xs text-slate-200 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-700 backdrop-blur-md">
                {course.level} Track
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="font-serif-header font-bold text-2xl sm:text-4xl text-white tracking-wide leading-tight">
                {course.title}
              </h1>
              {course.ecCouncilCode && (
                <p className="font-mono text-xs sm:text-sm text-rose-300 mt-2 font-bold">
                  Official Exam Code: {course.ecCouncilCode}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="p-6 sm:p-10 space-y-8">
          <p className="font-sans text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl font-normal">
            {course.description}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-slate-500 dark:text-slate-400 block font-semibold">Duration</span>
              <span className="text-slate-900 dark:text-white font-semibold flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#881337] dark:text-rose-400" />
                {course.duration}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-slate-500 dark:text-slate-400 block font-semibold">Lab Scenarios</span>
              <span className="text-slate-900 dark:text-white font-semibold flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-[#881337] dark:text-rose-400" />
                {course.practicalLabHours}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-slate-500 dark:text-slate-400 block font-semibold">Delivery Format</span>
              <span className="text-slate-900 dark:text-white font-semibold flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Coimbatore + Online
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-slate-500 dark:text-slate-400 block font-semibold">Accreditation</span>
              <span className="text-[#881337] dark:text-rose-300 font-semibold flex items-center gap-1.5 truncate">
                <Award className="w-4 h-4 text-[#881337] dark:text-rose-400" />
                {course.certificationPartner}
              </span>
            </div>
          </div>

          {/* Detailed Curriculum Breakdown */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center space-x-2 text-[#881337] dark:text-rose-400 font-mono text-xs uppercase font-bold tracking-wider">
                <Layers className="w-4 h-4" />
                <span>Complete Curriculum Modules &amp; Hands-On Labs</span>
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">100% Weaponized Lab Access</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.modules.map((mod, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#881337] dark:text-rose-300 bg-rose-100 dark:bg-rose-950/80 px-2 py-0.5 rounded border border-rose-300 dark:border-rose-800/40">
                      {mod.moduleNum}
                    </span>
                    <span className="font-display font-semibold text-sm text-slate-900 dark:text-white">
                      {mod.title}
                    </span>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-slate-900">
                    {mod.labs.map((lab, lIdx) => (
                      <div key={lIdx} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300 font-mono font-medium">
                        <span className="text-[#881337] dark:text-rose-400 shrink-0">▸</span>
                        <span>{lab}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites & Target Career Roles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs">
            <div className="space-y-2">
              <span className="text-[#881337] dark:text-rose-400 font-bold uppercase block">Prerequisites:</span>
              <p className="font-sans text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {course.prerequisites}
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-emerald-700 dark:text-emerald-400 font-bold uppercase block">Target Career Roles &amp; Salaries:</span>
              <div className="space-y-1 font-sans text-xs text-slate-700 dark:text-slate-300">
                {course.targetRoles.map((role, idx) => (
                  <div key={idx} className="flex items-center space-x-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTA Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-300 dark:border-rose-900/40">
            <div>
              <h3 className="font-serif-header font-bold text-lg text-slate-900 dark:text-white">
                Ready to Master {course.title}?
              </h3>
              <p className="font-sans text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
                Next Coimbatore weekend and weekday batches starting soon. Reserve your seat for a free live lab demo.
              </p>
            </div>

            <button
              onClick={() => onBookDemo(course.title)}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#881337] to-[#7A1426] hover:from-[#5B0E1B] hover:to-[#881337] text-white shadow-xl shadow-rose-950/30 flex items-center justify-center space-x-2 cursor-pointer shrink-0"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Download Syllabus &amp; Demo Pass</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};
