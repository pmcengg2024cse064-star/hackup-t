import React from 'react';
import { MapPin, Phone, Mail, Award, ShieldAlert } from 'lucide-react';

interface TopBannerProps {
  onEmergencyClick: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({ onEmergencyClick }) => {
  return (
    <div className="relative z-50 bg-slate-100 border-b border-slate-200 text-xs font-mono text-slate-700 py-1.5 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1 gap-x-4">
        
        {/* Left: Location & EC-Council Badge */}
        <div className="flex items-center space-x-3 flex-wrap">
          <div className="flex items-center space-x-1 text-cyan-700">
            <MapPin className="w-3.5 h-3.5" />
            <span className="font-sans font-medium text-slate-800">Ganapathy, Coimbatore</span>
            <span className="text-slate-300 hidden sm:inline">|</span>
          </div>

          <div className="flex items-center space-x-1.5 text-slate-700">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-amber-800 font-medium">Official EC-Council Accredited Training Partner</span>
          </div>
        </div>

        {/* Right: Direct Lines & Emergency Breach Hotline */}
        <div className="flex items-center space-x-4 flex-wrap">
          <a
            href="tel:+919362012339"
            className="flex items-center space-x-1 hover:text-cyan-700 transition-colors"
          >
            <Phone className="w-3 h-3 text-cyan-600" />
            <span>+91 93620 12339</span>
          </a>

          <span className="text-slate-300 hidden md:inline">|</span>

          <a
            href="tel:+919626215976"
            className="hidden md:flex items-center space-x-1 hover:text-cyan-700 transition-colors"
          >
            <Phone className="w-3 h-3 text-cyan-600" />
            <span>+91 96262 15976</span>
          </a>

          <span className="text-slate-300 hidden lg:inline">|</span>

          <a
            href="mailto:info@hackuptechnology.com"
            className="hidden lg:flex items-center space-x-1 hover:text-cyan-700 transition-colors"
          >
            <Mail className="w-3 h-3 text-slate-500" />
            <span>info@hackuptechnology.com</span>
          </a>

          <button
            onClick={onEmergencyClick}
            className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-red-50 border border-red-300 text-red-700 hover:bg-red-100 hover:border-red-400 transition-all font-sans font-semibold text-[11px] group cursor-pointer shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <ShieldAlert className="w-3 h-3 text-red-600 group-hover:scale-110 transition-transform" />
            <span>24/7 DFIR Hotline</span>
          </button>
        </div>

      </div>
    </div>
  );
};
