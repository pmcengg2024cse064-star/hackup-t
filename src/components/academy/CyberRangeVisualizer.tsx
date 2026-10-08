import React, { useState } from 'react';
import { 
  Terminal, 
  Shield, 
  Server, 
  Layers, 
  Activity, 
  Play, 
  RefreshCw,
  Cpu
} from 'lucide-react';
import { CYBER_RANGE_NODES, CYBER_RANGE_SCENARIOS, CyberRangeScenario } from '../../data/cyberData';

export const CyberRangeVisualizer: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<CyberRangeScenario>(CYBER_RANGE_SCENARIOS[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState<'idle' | 'attacking' | 'analyzing' | 'contained'>('idle');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    '[INIT] Hackup Cyber Range Target Subnets Online: 10.244.0.0/16, 172.16.0.0/16',
    '[READY] Red Team Kali VM 198.51.100.44 initialized with Burp Pro & Metasploit',
    '[READY] Blue Team Wazuh & Splunk SIEM ingestion rate: 4,200 EPS',
    '[*] Select an attack scenario below to trigger live attack-defense simulation.',
  ]);

  const getNodeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return Terminal;
      case 'Shield':
        return Shield;
      case 'Server':
        return Server;
      case 'Layers':
        return Layers;
      case 'Activity':
        return Activity;
      default:
        return Cpu;
    }
  };

  const triggerSimulation = (scenario: CyberRangeScenario) => {
    setSelectedScenario(scenario);
    setIsSimulating(true);
    setSimStep('attacking');

    setTerminalLogs([
      `\n[ATTACK START] Launching ${scenario.title} (${scenario.mitreTactic})`,
      `[EXEC] Kali Terminal: ${scenario.attackerStep}`,
      `[*] Payload sent through perimeter gateway...`,
    ]);

    setTimeout(() => {
      setSimStep('analyzing');
      setTerminalLogs((prev) => [
        ...prev,
        `[SIEM ALERT] Telemetry spike on target nodes: ${scenario.affectedNodeIds.join(', ')}`,
        `[ANALYZE] ${scenario.socAlertStep}`,
      ]);
    }, 1200);

    setTimeout(() => {
      setSimStep('contained');
      setTerminalLogs((prev) => [
        ...prev,
        `[CONTAINED] Threat mitigated. Exploit path neutralized. Zero persistent breach.`,
        `[REPORT] CVSS ${scenario.cvssScore} incident dossier logged to training scoreboard.`,
      ]);
      setIsSimulating(false);
    }, 2500);
  };

  return (
    <div id="cyber-range" className="relative mt-20 pt-16 border-t border-slate-200 dark:border-rose-900/30 overflow-hidden">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="font-mono text-xs uppercase font-bold tracking-widest text-rose-400 dark:text-rose-300">
          VIRTUAL TARGET NETWORK ARCHITECTURE
        </div>

        <h3 className="font-serif-header font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-wider">
          THE HACKUP CYBER RANGE
        </h3>

        <div className="w-16 h-[2px] bg-rose-500 mx-auto mt-2 mb-3" />

        <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-[#E2C4C9] leading-relaxed">
          Zero static slides. Real isolated target networks for offensive exploit development and defensive incident triage in Coimbatore.
        </p>
      </div>

      {/* Attack Scenario Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
        {CYBER_RANGE_SCENARIOS.map((scenario) => {
          const isSelected = selectedScenario.id === scenario.id;
          return (
            <button
              key={scenario.id}
              onClick={() => triggerSimulation(scenario)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                isSelected
                  ? 'bg-rose-50 dark:bg-[#4A0A13] border-rose-400 shadow-md'
                  : 'bg-white dark:bg-[#180407] border-slate-200 dark:border-rose-900/40 hover:border-rose-400/50 text-slate-700 dark:text-slate-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-[#881337] dark:text-rose-300 font-bold px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 border border-rose-300 dark:border-rose-400/30">
                    CVSS {scenario.cvssScore}
                  </span>
                  <Play className={`w-3.5 h-3.5 ${isSelected ? 'text-[#881337] dark:text-rose-300 fill-current' : 'text-slate-400 dark:text-slate-500 group-hover:text-rose-400'}`} />
                </div>
                <h4 className="font-serif-header font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-rose-400 transition-colors leading-snug">
                  {scenario.title}
                </h4>
              </div>
              <div className="font-mono text-[10px] text-slate-500 dark:text-rose-200/70 mt-2 truncate font-medium">
                {scenario.mitreTactic}
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Topology Board */}
      <div className="bg-white dark:bg-[#2E070D]/90 rounded-3xl border border-slate-200 dark:border-rose-900/60 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-7 shadow-xl">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-200 dark:border-rose-900/60 pb-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block animate-ping" />
              <span className="font-mono text-[11px] sm:text-xs font-bold text-[#881337] dark:text-rose-300 uppercase tracking-wider">
                RANGE STATUS: {simStep.toUpperCase()}
              </span>
            </div>
            <span className="hidden sm:inline text-slate-300 dark:text-rose-900">|</span>
            <span className="font-mono text-[11px] sm:text-xs text-slate-600 dark:text-[#E2C4C9] font-medium truncate max-w-xs">
              Vector: <span className="text-slate-900 dark:text-white font-bold">{selectedScenario.title}</span>
            </span>
          </div>

          <button
            onClick={() => triggerSimulation(selectedScenario)}
            disabled={isSimulating}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 cursor-pointer disabled:opacity-50 btn-burgundy-filled shadow-md"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
            <span>{isSimulating ? 'Simulating Vector...' : 'Re-Run Scenario'}</span>
          </button>
        </div>

        {/* Node Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CYBER_RANGE_NODES.map((node) => {
            const Icon = getNodeIcon(node.iconName);
            const isAffected = selectedScenario.affectedNodeIds.includes(node.id);
            
            let statusColor = 'text-[#881337] dark:text-rose-300 border-rose-300 dark:border-rose-400/30 bg-rose-50 dark:bg-rose-950/60';
            let statusText: string = node.status;

            if (isSimulating && isAffected) {
              if (simStep === 'attacking') {
                statusColor = 'text-red-600 dark:text-red-400 border-red-300 dark:border-red-500/50 bg-red-50 dark:bg-red-950/50 animate-pulse';
                statusText = node.role === 'Attacker' ? 'TRANSMITTING' : 'UNDER ATTACK';
              } else if (simStep === 'analyzing') {
                statusColor = 'text-amber-600 dark:text-amber-400 border-amber-300 dark:border-amber-500/50 bg-amber-50 dark:bg-amber-950/50';
                statusText = 'SIEM TRIAGE';
              } else if (simStep === 'contained') {
                statusColor = 'text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/50 bg-emerald-50 dark:bg-slate-900';
                statusText = 'ISOLATED & PATCHED';
              }
            }

            return (
              <div
                key={node.id}
                className={`p-4 rounded-2xl bg-slate-50 dark:bg-[#180407] border transition-all duration-300 flex flex-col justify-between shadow-sm ${
                  isAffected && isSimulating
                    ? 'border-rose-400 shadow-lg scale-[1.02]'
                    : 'border-slate-200 dark:border-rose-900/40 hover:border-slate-300 dark:hover:border-rose-400/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-white dark:bg-rose-950/80 border border-slate-200 dark:border-rose-900 text-rose-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold border ${statusColor}`}>
                      {statusText}
                    </span>
                  </div>

                  <div className="font-serif-header font-bold text-sm text-slate-900 dark:text-white">
                    {node.name}
                  </div>

                  <div className="font-mono text-[10px] font-bold text-[#881337] dark:text-rose-300 mt-1">
                    IP: {node.ip}
                  </div>

                  <p className="font-sans text-[11px] text-slate-600 dark:text-[#E2C4C9] mt-2 leading-relaxed">
                    {node.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-200 dark:border-rose-900/50 text-[10px] font-mono text-slate-500 dark:text-rose-200/60 flex justify-between font-medium">
                  <span>Role:</span>
                  <span className="text-slate-800 dark:text-white font-bold">{node.role}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Terminal Telemetry Console */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden font-mono text-xs shadow-inner">
          <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="text-[11px] text-slate-300 font-semibold">
                live_cyber_range_telemetry.log
              </span>
            </div>
            <span className="text-[10px] text-rose-400 font-bold">
              PORT 22 (SSH) • LOGSTREAM ACTIVE
            </span>
          </div>

          <div className="p-4 sm:p-5 h-36 overflow-y-auto space-y-1 text-slate-200">
            {terminalLogs.map((log, index) => {
              let logClass = 'text-slate-300';
              if (log.includes('[ATTACK START]')) logClass = 'text-red-400 font-bold';
              if (log.includes('[EXEC]')) logClass = 'text-rose-300 font-medium';
              if (log.includes('[SIEM ALERT]')) logClass = 'text-amber-300 font-bold';
              if (log.includes('[CONTAINED]')) logClass = 'text-emerald-400 font-bold';

              return (
                <div key={index} className={`font-mono text-xs leading-relaxed ${logClass}`}>
                  {log}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
