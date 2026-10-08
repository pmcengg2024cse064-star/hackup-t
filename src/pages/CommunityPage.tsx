import React from 'react';
import { Shield, Users, Trophy, Sparkles, MessageSquare, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { DefconChapterHub } from '../components/community/DefconChapterHub';
import { DefconContactSection } from '../components/community/DefconContactSection';

interface CommunityPageProps {
  onGetInvolved: (title: string) => void;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({ onGetInvolved }) => {
  return (
    <div className="space-y-16 animate-fadeIn pb-16">
      
      {/* Community Dedicated Hero */}
      <section className="relative pt-12 pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1A0D30] border border-[#C4A77D]/40 shadow-xl backdrop-blur-xl">
            <Users className="w-4 h-4 text-[#C4A77D]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#C4A77D]">
              TAMIL NADU ETHICAL HACKER COMMUNITY HUB
            </span>
          </div>

          <h1 className="font-serif-header font-bold text-3xl sm:text-5xl lg:text-6xl text-[#F8FAFC] tracking-wide leading-tight">
            DEFCON Coimbatore &amp; <span className="text-gold-pure">Research Hub</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#A79AB2] max-w-2xl mx-auto leading-relaxed">
            Connect with 1,200+ security researchers, attend monthly red team technical workshops, and compete in the Kovai HackCon CTF tournament.
          </p>
        </div>
      </section>

      {/* DEFCON Meetup & CTF Hub */}
      <DefconChapterHub onRSVP={onGetInvolved} />

      {/* Integrated Contact Section */}
      <DefconContactSection onGetInvolvedCommunity={() => onGetInvolved('DEFCON Community Pass')} />

    </div>
  );
};
