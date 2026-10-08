import React from 'react';
import { X, ShieldAlert, CheckCircle2, Lock, Mail } from 'lucide-react';

interface ResponsibleDisclosureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResponsibleDisclosureModal: React.FC<ResponsibleDisclosureModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl text-slate-800 overflow-hidden max-h-[90vh] overflow-y-auto space-y-5">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-2xl bg-cyan-50 border border-cyan-300 text-cyan-700">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <span className="font-mono text-[10px] font-bold text-cyan-800 uppercase tracking-wider bg-cyan-100 px-2 py-0.5 rounded border border-cyan-300">
              SECURITY POLICY
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mt-0.5">
              Responsible Vulnerability Disclosure
            </h3>
          </div>
        </div>

        <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
          At Hackup Technology Pvt Ltd, security is our primary craft. We welcome reports from ethical hackers and independent researchers who discover potential vulnerabilities in our public systems.
        </p>

        <div className="space-y-3 font-mono text-xs text-slate-700">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="text-cyan-800 font-bold uppercase text-[11px]">Safe Harbor Guidelines:</div>
            <div className="flex items-start space-x-2 font-sans text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
              <span>Do not access, modify, or delete user or client data.</span>
            </div>
            <div className="flex items-start space-x-2 font-sans text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
              <span>Do not execute automated Denial of Service (DoS/DDoS) attacks.</span>
            </div>
            <div className="flex items-start space-x-2 font-sans text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
              <span>Give us a 30-day reasonable remediation window before public disclosure.</span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-cyan-50/70 border border-cyan-200 space-y-1">
            <div className="text-cyan-900 font-bold">PGP Encrypted Reporting Channel:</div>
            <div className="flex items-center space-x-2 text-slate-800">
              <Mail className="w-4 h-4 text-cyan-700" />
              <span>security@hackuptechnology.com</span>
            </div>
            <div className="text-[10px] text-slate-500 pt-1">
              PGP Key ID: <code className="text-cyan-800 font-bold">0x9F4C2A1E8D7B506C</code>
            </div>
          </div>
        </div>

        <div className="pt-2 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-700 transition-all cursor-pointer shadow-md"
          >
            Understood &amp; Close
          </button>
        </div>

      </div>
    </div>
  );
};
