import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Check, 
  AlertTriangle, 
  FileCheck2, 
  Layers, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ENTERPRISE_SERVICES } from '../data/cyberData';

interface ServiceDetailPageProps {
  onRequestAudit: (serviceTitle?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onRequestAudit }) => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const service = ENTERPRISE_SERVICES.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-6">
        <h2 className="font-serif-header font-bold text-3xl text-white">Service Not Found</h2>
        <p className="text-slate-400">The requested cybersecurity service does not exist.</p>
        <Link to="/enterprise" className="btn-gold-filled inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-xs font-mono font-bold">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Enterprise Services</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeIn">
      
      {/* Top Breadcrumb */}
      <div className="flex items-center space-x-2 font-mono text-xs text-slate-500 dark:text-slate-400">
        <Link to="/" className="hover:text-[#9E721D] dark:hover:text-[#D4AF37] transition-colors">Home</Link>
        <span>/</span>
        <Link to="/enterprise" className="hover:text-[#9E721D] dark:hover:text-[#D4AF37] transition-colors">Enterprise</Link>
        <span>/</span>
        <span className="text-[#9E721D] dark:text-[#D4AF37] font-semibold">{service.shortTitle}</span>
      </div>

      {/* Main Service Header with Image Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-amber-300 dark:border-amber-500/30 shadow-xl">
        {service.imageUrl && (
          <div className="h-64 sm:h-80 w-full overflow-hidden bg-slate-950 relative">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            
            <div className="absolute top-6 left-6 flex items-center space-x-3">
              <span className="font-mono text-xs uppercase font-bold tracking-widest text-amber-300 bg-amber-950/90 px-3.5 py-1.5 rounded-full border border-amber-500/40 backdrop-blur-md">
                {service.badge}
              </span>
              <span className="font-mono text-xs text-slate-200 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-700 backdrop-blur-md">
                Turnaround: {service.turnaroundDays}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="font-serif-header font-bold text-2xl sm:text-4xl text-white tracking-wide leading-tight">
                {service.title}
              </h1>
              <p className="font-mono text-xs sm:text-sm text-amber-300 mt-2 font-semibold">
                {service.tagline}
              </p>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-10 space-y-8">
          <p className="font-sans text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl font-normal">
            {service.description}
          </p>

          {/* Key Deliverables & Testing Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Deliverables Box */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center space-x-2 text-[#9E721D] dark:text-[#D4AF37] font-mono text-xs uppercase font-bold tracking-wider">
                <FileCheck2 className="w-4 h-4 text-[#B38728] dark:text-[#D4AF37]" />
                <span>Executive &amp; Technical Deliverables</span>
              </div>
              <div className="space-y-3">
                {service.keyDeliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                    <div className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-500/20 border border-amber-300 dark:border-amber-500/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#9E721D] dark:text-amber-400" />
                    </div>
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specs Box */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center space-x-2 text-[#9E721D] dark:text-[#D4AF37] font-mono text-xs uppercase font-bold tracking-wider">
                <Layers className="w-4 h-4 text-[#B38728] dark:text-[#D4AF37]" />
                <span>Technical Specifications &amp; Standards</span>
              </div>
              <div className="space-y-3">
                {service.specs.map((spec, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs">
                    <span className="font-mono text-slate-500 dark:text-slate-400 block mb-0.5 font-medium">{spec.key}:</span>
                    <span className="font-sans font-semibold text-slate-900 dark:text-white">{spec.val}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sample Real-World Findings Detected by Hackup */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-[#9E721D] dark:text-amber-400 font-mono text-xs uppercase font-bold tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>Sample Real-World Vulnerabilities Uncovered</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-semibold">CVSS 3.1 &amp; 4.0 Standard</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {service.sampleFindings.map((finding, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      finding.severity === 'CRITICAL' ? 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400 border border-red-300 dark:border-red-500/40' : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-400 border border-amber-300 dark:border-amber-500/40'
                    }`}>
                      {finding.severity}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 font-bold">{finding.cve}</span>
                  </div>
                  <div className="text-xs text-slate-800 dark:text-slate-200 font-sans leading-snug font-medium">
                    {finding.vuln}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Frameworks Mapped */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-500/30">
            <div>
              <span className="font-mono text-xs text-[#9E721D] dark:text-amber-300 font-bold uppercase block mb-1">
                Audit &amp; Regulatory Compliance Coverage:
              </span>
              <div className="flex flex-wrap gap-2">
                {service.complianceCoverage.map((comp, i) => (
                  <span key={i} className="text-xs font-mono bg-white dark:bg-slate-950 px-2.5 py-1 rounded-md text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-semibold shadow-sm">
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => onRequestAudit(service.title)}
              className="btn-gold-filled px-6 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider shadow-lg flex items-center space-x-2 cursor-pointer shrink-0"
            >
              <Sparkles className="w-4 h-4" />
              <span>Configure Audit Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};
