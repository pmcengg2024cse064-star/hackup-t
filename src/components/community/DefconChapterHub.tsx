import React, { useState } from 'react';
import { 
  Shield, 
  Calendar, 
  MapPin, 
  Users, 
  Trophy, 
  Terminal, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare,
  Award
} from 'lucide-react';
import { DEFCON_EVENTS } from '../../data/cyberData';

interface DefconChapterHubProps {
  onRSVP: (eventTitle: string) => void;
}

export const DefconChapterHub: React.FC<DefconChapterHubProps> = ({ onRSVP }) => {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'events' | 'ctfLeaderboard'>('events');

  const ctfTeams = [
    { rank: 1, name: 'Kovai_RedRoots', score: 2850, flags: '14/15 Flags', badge: 'GOLD' },
    { rank: 2, name: 'ByteBandits_PSG', score: 2600, flags: '13/15 Flags', badge: 'SILVER' },
    { rank: 3, name: 'ZeroDay_Hackup', score: 2450, flags: '12/15 Flags', badge: 'BRONZE' },
    { rank: 4, name: 'CipherSquad_CBE', score: 2100, flags: '10/15 Flags', badge: 'TOP 5' },
    { rank: 5, name: 'NullPointer_TN', score: 1950, flags: '9/15 Flags', badge: 'TOP 5' },
  ];

  return (
    <section id="defcon" className="relative py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-900 font-mono text-xs font-semibold">
            <Shield className="w-4 h-4 text-cyan-700" />
            <span>OFFICIAL CYBERSECURITY COMMUNITY IN TAMIL NADU</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            DEFCON Coimbatore Chapter Hub
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed">
            Hackup Technology is the proud host and active technical backbone of the DEFCON Coimbatore community. We run monthly technical workshops, red team live demos, and capture-the-flag (CTF) tournaments.
          </p>

          {/* Sub Tab Switcher */}
          <div className="inline-flex items-center p-1 rounded-xl bg-white border border-slate-200 shadow-sm mt-2">
            <button
              onClick={() => setActiveTab('events')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeTab === 'events'
                  ? 'bg-cyan-50 text-cyan-900 border border-cyan-300 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Upcoming Meetups &amp; Talks
            </button>
            <button
              onClick={() => setActiveTab('ctfLeaderboard')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeTab === 'ctfLeaderboard'
                  ? 'bg-amber-50 text-amber-900 border border-amber-300 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🏆 Live CTF Scoreboard
            </button>
          </div>
        </div>

        {/* Content Container */}
        {activeTab === 'events' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Event Card */}
            <div className="lg:col-span-7 rounded-3xl bg-white border border-cyan-300/60 p-6 sm:p-8 shadow-xl space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  NEXT MEETUP #18 REGISTRATION OPEN
                </span>
                <span className="font-mono text-xs text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-300 font-semibold">
                  Prize Pool: ₹25,000
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  {DEFCON_EVENTS[0].title}
                </h3>
                <p className="font-sans text-sm text-slate-600 mt-2">
                  Deep-dive technical session exploring prompt injection defense, red teaming localized language models, and an interactive 2-hour live CTF challenge.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-700">
                <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Calendar className="w-4 h-4 text-cyan-700" />
                  <span>{DEFCON_EVENTS[0].date} ({DEFCON_EVENTS[0].time})</span>
                </div>
                <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <MapPin className="w-4 h-4 text-cyan-700" />
                  <span className="truncate">Hackup Campus, Ganapathy, Coimbatore</span>
                </div>
              </div>

              {/* Topics */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
                  Technical Talk Breakdown:
                </div>
                {DEFCON_EVENTS[0].topics.map((topic: string, i: number) => (
                  <div key={i} className="flex items-center space-x-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-cyan-700 shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onRSVP(DEFCON_EVENTS[0].title)}
                  className="px-6 py-3.5 rounded-xl font-mono font-bold text-xs sm:text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-xl shadow-cyan-500/20 transition-all flex items-center space-x-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>RSVP Free Pass for Meetup #18</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3.5 rounded-xl font-mono font-semibold text-xs sm:text-sm text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 transition-all flex items-center space-x-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-cyan-700" />
                  <span>Join Discord</span>
                </a>
              </div>
            </div>

            {/* Right Community Stats & Past Meetups */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="font-mono text-xs text-slate-500 uppercase font-semibold">Community Impact</span>
                  <span className="font-mono text-xs text-cyan-700 font-bold">COIMBATORE CHAPTER</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                    <div className="font-display font-bold text-2xl text-slate-900">18+</div>
                    <div className="font-mono text-[11px] text-slate-500 mt-0.5">Meetups Hosted</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                    <div className="font-display font-bold text-2xl text-amber-700">1,200+</div>
                    <div className="font-mono text-[11px] text-slate-500 mt-0.5">Hacker Members</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-cyan-50/60 border border-cyan-200 text-xs font-mono text-slate-700 space-y-1.5">
                  <div className="text-cyan-900 font-bold mb-1">Speaker Call for Papers (CFP):</div>
                  <p className="font-sans text-slate-600 text-[11px]">
                    Have an original vulnerability discovery, 0-day exploit technique, or hardware hacking demo? Present at DEFCON Coimbatore!
                  </p>
                  <a
                    href="mailto:info@hackuptechnology.com?subject=DEFCON%20Coimbatore%20CFP%20Submission"
                    className="inline-flex items-center space-x-1 text-cyan-800 hover:text-cyan-950 font-semibold pt-1"
                  >
                    <span>Submit your talk proposal</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        ) : (
          /* CTF LEADERBOARD */
          <div className="rounded-3xl bg-white border border-amber-300/80 p-6 sm:p-8 shadow-xl max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-6">
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                  Kovai Cyber HackCon CTF • Live Standings
                </h3>
                <p className="font-mono text-xs text-slate-500 mt-1">
                  Target: Multi-Tier Active Directory &amp; Web Microservices Lab
                </p>
              </div>
              <span className="font-mono text-xs font-bold text-amber-900 bg-amber-50 border border-amber-300 px-3 py-1 rounded-full">
                PRIZE POOL: ₹25,000
              </span>
            </div>

            <div className="space-y-2.5">
              {ctfTeams.map((team) => (
                <div
                  key={team.rank}
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs hover:border-amber-400 transition-all"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm ${
                      team.rank === 1 ? 'bg-amber-400 text-slate-950' : team.rank === 2 ? 'bg-slate-300 text-slate-950' : team.rank === 3 ? 'bg-amber-700 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      #{team.rank}
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm sm:text-base text-slate-900">
                        {team.name}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        {team.flags} Captured
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-display font-bold text-sm sm:text-base text-cyan-800">
                      {team.score.toLocaleString()} PTS
                    </div>
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                      {team.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
