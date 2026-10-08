import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  Lock, 
  ArrowUpRight,
  ShieldCheck,
  Scale,
  Sparkles,
  Building2,
  GraduationCap,
  Users
} from 'lucide-react';

interface FooterProps {
  onRequestConsultation: () => void;
  onOpenDisclosure: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onRequestConsultation,
  onOpenDisclosure,
}) => {
  return (
    <footer className="relative bg-slate-100 dark:bg-[#050408] border-t border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 font-sans pt-16 pb-12 overflow-hidden">
      
      {/* Top Subtle Brushed Gold Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Clean Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-300 dark:border-slate-800/80">
          
          {/* Column 1: Hackup Enterprise (Rich Gold) */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-[#9E721D] dark:text-[#D4AF37] font-mono text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-[#B38728] dark:text-[#D4AF37]" />
              <span>Hackup Enterprise</span>
            </div>
            
            <ul className="space-y-2 text-xs font-sans font-medium">
              <li>
                <Link to="/enterprise" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Vulnerability Assessment &amp; Penetration Testing (VAPT)
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Privilege Access Management (PAM) &amp; Zero-Trust
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  SOC Deployment &amp; 24/7 SIEM Ingestion
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Digital Forensics &amp; Incident Response (DFIR)
                </Link>
              </li>
              <li>
                <button
                  onClick={onRequestConsultation}
                  className="text-[#9E721D] dark:text-[#D4AF37] hover:underline text-left font-mono font-bold mt-1 block cursor-pointer"
                >
                  &rarr; Request Fast-Track NDA Audit
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Hackup Academy (White & Burgundy) */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-[#881337] dark:text-rose-300 font-mono text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-[#881337] dark:text-rose-400" />
              <span>Hackup Academy</span>
            </div>
            
            <ul className="space-y-2 text-xs font-sans font-medium">
              <li>
                <Link to="/academy" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Certified Ethical Hacker (CEH v13 AI-Powered)
                </Link>
              </li>
              <li>
                <Link to="/academy" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Certified Penetration Tester (CPENT)
                </Link>
              </li>
              <li>
                <Link to="/cyber-range" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Live Attack &amp; Defense Cyber Range
                </Link>
              </li>
              <li>
                <Link to="/internship" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Coimbatore College Industrial Internships
                </Link>
              </li>
              <li>
                <Link to="/academy" className="text-[#881337] dark:text-rose-300 hover:underline font-mono font-bold mt-1 block">
                  &rarr; Download Aspen Certification Syllabus
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional & Community */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-slate-800 dark:text-slate-200 font-mono text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#B38728] dark:text-[#D4AF37]" />
              <span>Institutional &amp; R&amp;D</span>
            </div>
            
            <ul className="space-y-2 text-xs font-sans font-medium">
              <li>
                <Link to="/about" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  About Hackup &amp; Leadership Story
                </Link>
              </li>
              <li>
                <Link to="/founder-patents" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Dr. Dinesh Paranthagan (M.C.A., Ph.D.) Bio
                </Link>
              </li>
              <li>
                <Link to="/founder-patents" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  2 Proprietary Issued Cyber Patents
                </Link>
              </li>
              <li>
                <Link to="/institutional-reach" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  54+ Partner Colleges in Tamil Nadu
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-cyan-700 dark:text-cyan-400 hover:underline font-mono font-bold mt-1 block">
                  &rarr; DEFCON Coimbatore Chapter (#DC91422)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Coimbatore HQ Office */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-[#9E721D] dark:text-[#D4AF37] font-mono text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Coimbatore HQ Office</span>
            </div>
            
            <div className="space-y-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
              <p>
                <strong className="text-slate-900 dark:text-white">Hackup Technology Pvt Ltd</strong><br />
                No.4, First Street, Sri Venkatesapuram,<br />
                Ganapathy, Coimbatore - 641006,<br />
                Tamil Nadu, India.
              </p>

              <div className="space-y-1 pt-2 font-mono text-[11px]">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-[#B38728] dark:text-[#D4AF37] shrink-0" />
                  <a href="tel:+919362012339" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                    +91 93620 12339 / +91 96262 15976
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-[#B38728] dark:text-[#D4AF37] shrink-0" />
                  <a href="mailto:info@hackuptechnology.com" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                    info@hackuptechnology.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-[#B38728] dark:text-[#D4AF37] shrink-0" />
                  <a href="mailto:dinesh@hackuptechnology.com" className="text-[#9E721D] dark:text-[#D4AF37] hover:underline transition-colors font-bold">
                    dinesh@hackuptechnology.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Legal Affiliations */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-center md:text-left font-medium">
            <span>&copy; {new Date().getFullYear()} Hackup Technology Pvt Ltd. All Rights Reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>EC-Council ATC #ATC-IND-2024</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>TANCCAO Secretariat</span>
          </div>

          <div className="flex items-center space-x-4 font-semibold">
            <button
              onClick={onOpenDisclosure}
              className="text-[#9E721D] dark:text-[#D4AF37] hover:underline cursor-pointer"
            >
              Responsible Disclosure Policy
            </button>
            <span>&bull;</span>
            <span className="text-slate-500 dark:text-slate-400">Section 65B Admissible</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
