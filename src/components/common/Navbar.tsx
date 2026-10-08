import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowUpRight,
  Building2,
  GraduationCap,
  Terminal,
  Users,
  Compass,
  Building,
  Award,
  Sun,
  Moon,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Download,
  FileText
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export type TabType = 'overview' | 'enterprise' | 'academy' | 'cyber-range' | 'internship' | 'community' | 'about';

interface NavbarProps {
  onRequestConsultation: (topic?: string) => void;
  onRequestAudit?: (serviceTitle?: string) => void;
  onBookDemo?: (courseTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onRequestConsultation,
  onRequestAudit,
  onBookDemo
}) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isEnterprise = location.pathname.startsWith('/enterprise');
  const isAcademy = location.pathname.startsWith('/academy') || location.pathname.startsWith('/cyber-range') || location.pathname.startsWith('/internship');

  const sharedLinks = [
    { path: '/about', label: 'About & Leadership', icon: Building },
    { path: '/founder-patents', label: 'Patents & R&D', icon: Award, badge: 'IP' },
    { path: '/institutional-reach', label: 'Institutional Reach', icon: Building2, badge: '54+' },
    { path: '/community', label: 'DEFCON Chapter', icon: Users },
  ];

  return (
    <header className="sticky top-0 z-50 w-full font-sans">
      
      {/* 1. TOP TRUST BAR */}
      <div className="bg-[#050408] text-slate-300 border-b border-white/10 py-1.5 px-4 sm:px-6 lg:px-8 text-[10px] sm:text-[11px] font-mono">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto scrollbar-none py-0.5">
            <span className="inline-flex items-center space-x-1.5 text-[#D4AF37] font-bold shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>EC-Council Accredited Training Partner</span>
            </span>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-slate-300 font-semibold shrink-0">
              TANCCAO Affiliated
            </span>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4 shrink-0 text-slate-400">
            <span className="hidden md:inline-flex items-center space-x-1">
              <MapPin className="w-3 h-3 text-[#D4AF37]" />
              <span>Ganapathy, Coimbatore</span>
            </span>
            <span className="text-slate-700 hidden md:inline">|</span>
            <a 
              href="tel:+919362012339" 
              className="hover:text-white transition-colors flex items-center space-x-1 text-slate-300"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>+91 93620 12339</span>
            </a>
            <span className="text-slate-700 hidden lg:inline">|</span>
            <a 
              href="mailto:info@hackuptechnology.com" 
              className="hover:text-white transition-colors hidden lg:flex items-center space-x-1"
            >
              <Mail className="w-3 h-3 text-[#D4AF37]" />
              <span>info@hackuptechnology.com</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. STICKY MAIN NAVIGATION BAR */}
      <div
        className={`w-full transition-all duration-300 ${
          isEnterprise
            ? 'bg-white/95 dark:bg-[#141414]/95 border-b border-amber-300 dark:border-amber-500/25 backdrop-blur-xl shadow-xl'
            : isAcademy
            ? 'bg-white/95 dark:bg-[#2A060C]/95 border-b border-rose-300 dark:border-rose-900/50 backdrop-blur-xl shadow-xl'
            : isScrolled
            ? 'bg-white/95 dark:bg-[#080711]/95 border-b border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xl'
            : 'bg-white/90 dark:bg-[#0A0E17]/90 border-b border-slate-200 dark:border-white/5 backdrop-blur-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo Emblem */}
            <div className="flex items-center space-x-3 shrink-0">
              <Link
                to="/"
                className="flex items-center space-x-3 group text-left cursor-pointer"
              >
                <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl overflow-hidden shadow-xl shadow-black/50 border border-white/20 group-hover:border-[#D4AF37] transition-all bg-[#080711]">
                  <img
                    src="/images/hackup_logo.png"
                    alt="Hackup Technology Official Shield"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                  />
                </div>

                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className="font-serif-header font-extrabold text-lg sm:text-xl tracking-wider text-slate-900 dark:text-white group-hover:text-[#9E721D] dark:group-hover:text-[#D4AF37] transition-colors">
                      HACKUP
                    </span>
                    <span className="font-serif-header font-bold text-sm sm:text-base tracking-widest text-[#9E721D] dark:text-[#D4AF37]">
                      TECHNOLOGY
                    </span>
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-slate-500 dark:text-slate-400 -mt-0.5 font-bold">
                    CORPORATE CYBER DEFENSE &amp; ACADEMY
                  </div>
                </div>
              </Link>
            </div>

            {/* PRIMARY AUDIENCE SWITCHER SEGMENTED CONTROL PILL */}
            <div className="hidden md:flex items-center p-1 rounded-full bg-slate-100 dark:bg-black/50 border border-slate-200 dark:border-white/10 shadow-inner">
              <NavLink
                to="/enterprise"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all cursor-pointer ${
                    isActive || isEnterprise
                      ? 'btn-gold-filled text-slate-950 shadow-lg shadow-[#D4AF37]/30'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5'
                  }`
                }
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Enterprise Solutions</span>
              </NavLink>

              <NavLink
                to="/academy"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all cursor-pointer ${
                    (isActive || isAcademy) && !isEnterprise
                      ? 'btn-burgundy-filled text-white border border-rose-400/40 shadow-lg shadow-[#881337]/50'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5'
                  }`
                }
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Hackup Academy</span>
              </NavLink>
            </div>

            {/* SHARED MENU (DESKTOP) */}
            <nav className="hidden xl:flex items-center space-x-1 text-xs font-mono">
              {sharedLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-lg transition-colors flex items-center space-x-1.5 ${
                      isActive
                        ? 'text-[#9E721D] dark:text-[#D4AF37] font-bold bg-amber-50 dark:bg-white/5'
                        : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 font-semibold'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-500/20 text-[#9E721D] dark:text-[#D4AF37] font-bold border border-amber-300 dark:border-amber-500/30">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* DYNAMIC AUDIENCE-AWARE CTA BUTTON */}
            <div className="hidden lg:flex items-center space-x-3">
              
              {/* Theme Switcher */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:scale-105 transition-all cursor-pointer shadow-sm"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-[#D4AF37]" /> : <Moon className="w-4 h-4 text-amber-600" />}
              </button>

              {/* Dynamic Button depending on current route */}
              {isEnterprise ? (
                <button
                  onClick={() => {
                    if (onRequestAudit) onRequestAudit('Full-Stack VAPT & Cloud Audit');
                    else onRequestConsultation();
                  }}
                  className="btn-gold-filled px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shadow-xl cursor-pointer hover:scale-102"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Request VAPT Audit</span>
                </button>
              ) : isAcademy ? (
                <button
                  onClick={() => {
                    if (onBookDemo) onBookDemo('Certified Ethical Hacker (CEH v13)');
                    else onRequestConsultation();
                  }}
                  className="btn-burgundy-filled px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shadow-xl cursor-pointer hover:scale-102 text-white"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Download Syllabus</span>
                </button>
              ) : (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      if (onRequestAudit) onRequestAudit('Enterprise VAPT');
                      else onRequestConsultation();
                    }}
                    className="btn-gold-filled px-3.5 py-2 rounded-xl text-xs font-mono font-bold cursor-pointer"
                  >
                    Enterprise VAPT
                  </button>
                  <button
                    onClick={() => {
                      if (onBookDemo) onBookDemo('EC-Council Training');
                      else onRequestConsultation();
                    }}
                    className="btn-burgundy-filled px-3.5 py-2 rounded-xl text-xs font-mono font-bold cursor-pointer text-white"
                  >
                    Academy
                  </button>
                </div>
              )}

            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-[#D4AF37]" /> : <Moon className="w-4 h-4 text-amber-600" />}
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0E17]/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-fadeIn">
          
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest px-1 font-bold">
            Select Audience Hub:
          </div>

          <div className="grid grid-cols-2 gap-2">
            <NavLink
              to="/enterprise"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `p-3 rounded-xl text-xs font-mono font-bold flex items-center space-x-2 border transition-all ${
                  isActive
                    ? 'bg-[#D4AF37] text-slate-950 border-amber-300 shadow-md'
                    : 'bg-[#141414] text-amber-200 border-amber-500/30'
                }`
              }
            >
              <Building2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Enterprise B2B</span>
            </NavLink>

            <NavLink
              to="/academy"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `p-3 rounded-xl text-xs font-mono font-bold flex items-center space-x-2 border transition-all ${
                  isActive
                    ? 'bg-[#881337] text-white border-rose-400 shadow-md'
                    : 'bg-[#180508] text-rose-200 border-rose-900/40'
                }`
              }
            >
              <GraduationCap className="w-4 h-4 text-rose-400" />
              <span>Academy B2C</span>
            </NavLink>
          </div>

          <div className="pt-2 border-t border-white/10 space-y-1">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest px-1 font-bold">
              General Navigation:
            </div>
            {sharedLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white hover:bg-white/5 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </NavLink>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onRequestAudit) onRequestAudit('Enterprise VAPT Audit');
                else onRequestConsultation();
              }}
              className="btn-gold-filled w-full py-3 rounded-xl font-mono text-xs font-bold uppercase flex items-center justify-center space-x-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Request VAPT Audit</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onBookDemo) onBookDemo('EC-Council Training');
                else onRequestConsultation();
              }}
              className="btn-burgundy-filled w-full py-3 rounded-xl font-mono text-xs font-bold uppercase flex items-center justify-center space-x-2 shadow-lg"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Download Syllabus / Enroll</span>
            </button>
          </div>

        </div>
      )}

    </header>
  );
};
