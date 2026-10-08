import React from 'react';
import { 
  X, 
  BookOpen, 
  Clock, 
  Terminal, 
  CheckCircle2, 
  Award, 
  ArrowRight, 
  Sparkles,
  Layers
} from 'lucide-react';
import { AcademyCourse } from '../../data/cyberData';

interface CourseSyllabusDrawerProps {
  course: AcademyCourse | null;
  isOpen: boolean;
  onClose: () => void;
  onBookDemo: (courseTitle: string) => void;
}

export const CourseSyllabusDrawer: React.FC<CourseSyllabusDrawerProps> = ({
  course,
  isOpen,
  onClose,
  onBookDemo,
}) => {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white dark:bg-[#0B1220] border-l border-rose-300 dark:border-slate-800 p-6 sm:p-8 h-full overflow-y-auto shadow-2xl flex flex-col justify-between text-slate-900 dark:text-slate-100">
        
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs font-bold text-[#881337] dark:text-rose-300 bg-rose-100 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-800/60 px-2.5 py-1 rounded-full">
                {course.badge}
              </span>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-semibold">
                {course.level} Track
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight leading-tight">
            {course.title}
          </h3>

          {course.ecCouncilCode && (
            <div className="font-mono text-xs text-[#881337] dark:text-rose-400 font-semibold mt-1">
              Official Exam Code: {course.ecCouncilCode}
            </div>
          )}

          <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed font-normal">
            {course.description}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3 my-5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs font-semibold">
            <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
              <Clock className="w-4 h-4 text-[#881337] dark:text-rose-400" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
              <Terminal className="w-4 h-4 text-[#881337] dark:text-rose-400" />
              <span>{course.practicalLabHours}</span>
            </div>
          </div>

          {/* Detailed Module Breakdown */}
          <div className="space-y-4 my-6">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-700 dark:text-slate-400 font-bold flex items-center justify-between">
              <span>Curriculum Modules &amp; Practical Labs:</span>
              <Layers className="w-3.5 h-3.5 text-[#881337] dark:text-rose-400" />
            </div>

            {course.modules.map((mod, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#881337] dark:text-rose-300">
                  <span>{mod.moduleNum}</span>
                  <span className="text-slate-900 dark:text-slate-200 font-display">{mod.title}</span>
                </div>
                <div className="space-y-1 pt-1 border-t border-slate-200 dark:border-slate-900">
                  {mod.labs.map((lab, lIdx) => (
                    <div key={lIdx} className="flex items-start space-x-2 text-[11px] text-slate-600 dark:text-slate-400 font-mono font-medium">
                      <span className="text-[#881337] dark:text-rose-400 shrink-0">▸</span>
                      <span>{lab}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Prerequisites & Target Career Outcomes */}
          <div className="space-y-3 pt-2 text-xs font-mono text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80">
            <div>
              <span className="text-slate-900 dark:text-slate-300 font-bold">Prerequisites: </span>
              <span>{course.prerequisites}</span>
            </div>
            <div>
              <span className="text-slate-900 dark:text-slate-300 font-bold">Target Job Roles: </span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">{course.targetRoles.join(' • ')}</span>
            </div>
          </div>
        </div>

        {/* Bottom Drawer CTA */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 mt-6 space-y-2">
          <button
            onClick={() => {
              onClose();
              onBookDemo(course.title);
            }}
            className="w-full py-3.5 rounded-xl font-mono font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#881337] to-[#7A1426] hover:from-[#5B0E1B] hover:to-[#881337] shadow-xl shadow-rose-950/30 transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Enroll / Book Free Demo for This Track</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </div>
  );
};
