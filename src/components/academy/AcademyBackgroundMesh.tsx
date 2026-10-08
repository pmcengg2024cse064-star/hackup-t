import React from 'react';
import { motion } from 'framer-motion';

export const AcademyBackgroundMesh: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      
      {/* 1. Large Ambient Radiant Breathing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-rose-700/30 via-[#881337]/25 to-transparent blur-[140px] dark:from-rose-900/40 dark:via-[#881337]/30"
      />

      <motion.div
        animate={{
          scale: [1.2, 0.95, 1.2],
          x: [0, -60, 0],
          y: [0, 40, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 -right-28 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-amber-600/15 via-[#9F1239]/20 to-transparent blur-[160px] dark:from-amber-500/10 dark:via-[#881337]/25"
      />

      <motion.div
        animate={{
          scale: [0.9, 1.15, 0.9],
          x: [0, 40, 0],
          y: [0, -50, 0],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-40 left-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#5B0E1B]/35 via-rose-600/20 to-transparent blur-[150px] dark:from-[#450A12]/40"
      />

      {/* 2. Cyber Scanning Beam Line (Vertical Sweep) */}
      <motion.div
        animate={{
          y: ['-10%', '110%'],
          opacity: [0, 0.6, 0.8, 0.6, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500/60 to-transparent shadow-[0_0_20px_rgba(244,63,94,0.6)]"
      />

      {/* 3. Subtle Digital Hex/Grid Matrix Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(225, 29, 72, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(225, 29, 72, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* 4. Floating Cyber Range Status Nodes */}
      <div className="absolute inset-0 max-w-7xl mx-auto hidden lg:block">
        <motion.div
          animate={{
            y: [0, -18, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-28 right-12 px-3 py-1 rounded-full bg-rose-950/40 dark:bg-rose-950/60 border border-rose-500/30 text-[10px] font-mono text-rose-300 backdrop-blur-md shadow-lg"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 inline-block mr-1.5 animate-pulse" />
          SIMULATION_GRID: ARMED
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.35, 0.75, 0.35],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute top-96 left-8 px-3 py-1 rounded-full bg-rose-950/40 dark:bg-rose-950/60 border border-rose-500/30 text-[10px] font-mono text-rose-300 backdrop-blur-md shadow-lg"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-1.5 animate-pulse" />
          ZERO_PPT: 100% PRACTICAL
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-96 right-16 px-3 py-1 rounded-full bg-rose-950/40 dark:bg-rose-950/60 border border-rose-500/30 text-[10px] font-mono text-rose-300 backdrop-blur-md shadow-lg"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] inline-block mr-1.5 animate-pulse" />
          EC-COUNCIL ATC: 2026 ACTIVE
        </motion.div>
      </div>

    </div>
  );
};
