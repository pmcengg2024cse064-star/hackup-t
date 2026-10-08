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
    <section id="defcon" className="relative py-20 bg-[#070A0F]/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>OFFICIAL CYBERSECURITY COMMUNITY IN TAMIL NADU</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            DEFCON Coimbatore Chapter Hub
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed">
            Hackup Technology is the proud host and active technical backbone of the DEFCON Coimbatore community. We run monthly technical workshops, red team live demos, and capture-the-flag (CTF) tournaments.
          </p>

          {/* Sub Tab Switcher */}
          <div className="inline-flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 mt-2">
            <button
              onClick={() => setActiveTab('events')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeTab === 'events'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Upcoming Meetups &amp; Talks
            </button>
            <button
              onClick={() => setActiveTab('ctfLeaderboard')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeTab === 'ctfLeaderboard'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
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
            <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-cyan-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  NEXT MEETUP #18 REGISTRATION OPEN
                </span>
                <span className="font-mono text-xs text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-500/30 font-semibold">
                  Prize Pool: ₹25,000
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  {DEFCON_EVENTS[0].title}
                </h3>
                <p className="font-sans text-sm text-slate-300 mt-2">
                  Deep-dive technical session exploring prompt injection defense, red teaming localized language models, and an interactive 2-hour live CTF challenge.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300">
                <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>{DEFCON_EVENTS[0].date} ({DEFCON_EVENTS[0].time})</span>
                </div>
                <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="truncate">Hackup Campus, Ganapathy, Coimbatore</span>
                </div>
              </div>

              {/* Topics */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Technical Talk Breakdown:
                </div>
                {DEFCON_EVENTS[0].topics.map((topic: string, i: number) => (
                  <div key={i} className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onRSVP(DEFCON_EVENTS[0].title)}
                  className="px-6 py-3.5 rounded-xl font-mono font-bold text-xs sm:text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-xl shadow-cyan-500/25 transition-all flex items-center space-x-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>RSVP Free Pass for Meetup #18</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3.5 rounded-xl font-mono font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-950 hover:bg-slate-800 border border-slate-700/80 transition-all flex items-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span>Join Discord</span>
                </a>
              </div>
            </div>

            {/* Right Community Stats & Past Meetups */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="font-mono text-xs text-slate-400 uppercase">Community Impact</span>
                  <span className="font-mono text-xs text-cyan-400 font-bold">COIMBATORE CHAPTER</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                    <div className="font-display font-bold text-2xl text-white">18+</div>
                    <div className="font-mono text-[11px] text-slate-400 mt-0.5">Meetups Hosted</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                    <div className="font-display font-bold text-2xl text-amber-400">1,200+</div>
                    <div className="font-mono text-[11px] text-slate-400 mt-0.5">Hacker Members</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 space-y-1.5">
                  <div className="text-cyan-400 font-semibold mb-1">Speaker Call for Papers (CFP):</div>
                  <p className="font-sans text-slate-400 text-[11px]">
                    Have an original vulnerability discovery, 0-day exploit technique, or hardware hacking demo? Present at DEFCON Coimbatore!
                  </p>
                  <a
                    href="mailto:info@hackuptechnology.com?subject=DEFCON%20Coimbatore%20CFP%20Submission"
                    className="inline-flex items-center space-x-1 text-cyan-300 hover:text-cyan-200 font-semibold pt-1"
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
          <div className="rounded-3xl bg-slate-900/90 border border-amber-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  Kovai Cyber HackCon CTF • Live Standings
                </h3>
                <p className="font-mono text-xs text-slate-400 mt-1">
                  Target: Multi-Tier Active Directory &amp; Web Microservices Lab
                </p>
              </div>
              <span className="font-mono text-xs font-bold text-amber-400 bg-amber-950/70 border border-amber-500/30 px-3 py-1 rounded-full">
                PRIZE POOL: ₹25,000
              </span>
            </div>

            <div className="space-y-2.5">
              {ctfTeams.map((team) => (
                <div
                  key={team.rank}
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-slate-950/80 border border-slate-800 font-mono text-xs hover:border-amber-500/40 transition-all"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm ${
                      team.rank === 1 ? 'bg-amber-400 text-slate-950' : team.rank === 2 ? 'bg-slate-300 text-slate-950' : team.rank === 3 ? 'bg-amber-700 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      #{team.rank}
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm sm:text-base text-white">
                        {team.name}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        {team.flags} Captured
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-display font-bold text-sm sm:text-base text-cyan-400">
                      {team.score.toLocaleString()} PTS
                    </div>
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
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
