import React, { useState } from 'react';
import { 
  Shield, 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DefconContactSectionProps {
  onGetInvolvedCommunity: () => void;
}

export const DefconContactSection: React.FC<DefconContactSectionProps> = ({
  onGetInvolvedCommunity,
}) => {
  const [name, setName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [interest, setInterest] = useState('Enterprise Security Audit (VAPT)');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#B38728', '#D4AF37', '#881337'],
    });
  };

  return (
    <section id="community" className="relative py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="font-mono text-xs uppercase font-bold tracking-widest text-[#B38728]">
            COLLABORATION &amp; ADVISORY
          </div>

          <h2 className="font-serif-header font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-wider">
            ENGAGE WITH HACKUP
          </h2>

          <div className="w-16 h-[2px] bg-[#B38728] mx-auto mt-3 mb-4" />

          <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            Connect with our advisory consultants for enterprise audits or join the DEFCON Coimbatore cybersecurity research community.
          </p>
        </div>

        {/* Two-Column Module */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Left Column: DEFCON Coimbatore Community */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 sm:p-9 flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-300 p-2.5 flex items-center justify-center text-[#B38728] shadow-sm">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#9E721D] bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                  OFFICIAL CHAPTER
                </span>
              </div>

              <h3 className="font-serif-header font-bold text-2xl text-slate-900 tracking-wide mb-2">
                DEFCON Coimbatore Community
              </h3>

              <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                Hackup Technology is the proud host of DEFCON Coimbatore. We organize monthly technical workshops, 0-day vulnerability deep-dives, and live CTF competitions.
              </p>

              {/* Elegant Date / Location Icons */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 font-medium">
                  <Calendar className="w-4 h-4 text-[#B38728] shrink-0" />
                  <span>Upcoming Meetup: April 18, 2026</span>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 font-medium">
                  <Clock className="w-4 h-4 text-[#B38728] shrink-0" />
                  <span>Time: Coimbatore - 13:00 PM IST</span>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 font-medium">
                  <MapPin className="w-4 h-4 text-[#B38728] shrink-0" />
                  <span>Venue: Hackup Cyber Range, Ganapathy, Coimbatore</span>
                </div>
              </div>
            </div>

            {/* Outline Button: Get Involved */}
            <div>
              <button
                onClick={onGetInvolvedCommunity}
                className="w-full py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer bg-[#FFFBEB] text-[#9E721D] border border-[#B38728]/50 hover:bg-[#FEF3C7] transition-all"
              >
                <span>Get Involved with DEFCON</span>
                <ArrowRight className="w-4 h-4 text-[#B38728]" />
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 sm:p-9 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#B38728]">
                  DIRECT INQUIRY
                </span>
                <span className="font-mono text-[10px] text-slate-500 font-semibold">
                  SLA: &lt; 4 Business Hours
                </span>
              </div>

              <h3 className="font-serif-header font-bold text-2xl text-slate-900 tracking-wide mb-2">
                Consult with Our Specialists
              </h3>

              <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                Submit your inquiry below. Our lead security practitioners will reach out to schedule an initial scoping session.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-800 mb-1.5 uppercase font-bold tracking-wider">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Senthil Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:border-[#B38728] focus:outline-none transition-colors shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-800 mb-1.5 uppercase font-bold tracking-wider">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:border-[#B38728] focus:outline-none transition-colors shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-800 mb-1.5 uppercase font-bold tracking-wider">
                      Area of Interest *
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs font-mono text-slate-900 font-semibold focus:border-[#B38728] focus:outline-none transition-colors shadow-sm"
                    >
                      <option value="Enterprise Security Audit (VAPT)">Enterprise Security Audit (VAPT)</option>
                      <option value="Cloud Security & DevSecOps Audit">Cloud Security &amp; DevSecOps Audit</option>
                      <option value="Red Team Adversary Simulation">Red Team Adversary Simulation</option>
                      <option value="EC-Council Certified Ethical Hacker (CEH v13)">EC-Council CEH v13 Certification</option>
                      <option value="Practical SOC Analyst Bootcamp">Practical SOC Analyst Bootcamp</option>
                      <option value="College Industrial Internship in Coimbatore">Coimbatore Industrial Internship</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer bg-gradient-to-r from-[#B38728] to-[#D4AF37] hover:from-[#9E721D] hover:to-[#B38728] text-slate-950 shadow-xl shadow-[#B38728]/25"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>SUBMIT REQUEST</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8 space-y-3 animate-fadeIn">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-[#B38728] text-[#B38728] mx-auto flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif-header font-bold text-xl text-slate-900">
                    Inquiry Received
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Thank you, <strong className="text-slate-900">{name}</strong>. A confirmation has been sent to <span className="text-[#9E721D] font-mono font-bold">{workEmail}</span>. Our Coimbatore advisory team will contact you shortly.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
