export interface ServiceSpec {
  key: string;
  val: string;
}

export interface EnterpriseService {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  iconName: string;
  badge: string;
  accentColor: 'cyan' | 'blue' | 'emerald' | 'amber' | 'gold';
  description: string;
  standards: string[];
  keyDeliverables: string[];
  specs: ServiceSpec[];
  sampleFindings: { vuln: string; severity: 'CRITICAL' | 'HIGH' | 'MEDIUM'; cve: string }[];
  complianceCoverage: string[];
  turnaroundDays: string;
  imageUrl?: string;
}

export interface AcademyCourse {
  id: string;
  title: string;
  ecCouncilCode?: string;
  category: 'Offensive Security' | 'Defensive SOC' | 'Cloud & DevSecOps' | 'Forensics & Governance' | 'Specialized Suite';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  badge: string;
  duration: string;
  practicalLabHours: string;
  mode: 'Hybrid (Coimbatore Lab + Live Online)';
  description: string;
  highlights: string[];
  modules: { moduleNum: string; title: string; labs: string[] }[];
  prerequisites: string;
  careerOutcomes: string[];
  targetRoles: string[];
  certificationPartner: string;
  upcomingBatch: string;
  imageUrl?: string;
}

export interface CyberPatent {
  id: string;
  title: string;
  patentNumber: string;
  filingStatus: string;
  grantYear: string;
  category: 'AI Defense Architecture' | 'Offensive Automation & Binary Forensics';
  shortDesc: string;
  abstract: string;
  coreInnovations: string[];
  enterpriseApplication: string;
  iconName: string;
}

export interface CyberRangeNode {
  id: string;
  name: string;
  role: 'Attacker' | 'Perimeter WAF' | 'Kubernetes Cluster' | 'Active Directory' | 'SOC SIEM & EDR';
  ip: string;
  os: string;
  status: 'ONLINE' | 'DEFENDING' | 'ALERT' | 'COMPROMISED';
  description: string;
  iconName: string;
}

export interface CyberRangeScenario {
  id: string;
  title: string;
  type: 'Offensive Exploitation' | 'AD Lateral Movement' | 'Cloud Escape' | 'Ransomware Triage';
  mitreTactic: string;
  description: string;
  attackerStep: string;
  socAlertStep: string;
  affectedNodeIds: string[];
  cvssScore: number;
}

export interface TestimonialItem {
  id: string;
  category: 'enterprise' | 'alumni';
  name: string;
  role: string;
  organization: string;
  location: string;
  avatarText: string;
  quote: string;
  verifiedBadge: string;
  outcomeMetric: string;
  skillsOrServices: string[];
  rating: number;
}

export interface DefconEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  speaker: string;
  speakerRole: string;
  status: 'UPCOMING' | 'COMPLETED';
  rsvpCount: number;
  ctfPool: string;
  topics: string[];
}

export interface PartnerInstitution {
  name: string;
  location: string;
  category: 'Premier Tech & Universities' | 'Heritage & Arts Institutions' | 'Polytechnic & Specialized';
  engagement: string;
  badge: string;
}

export const CYBER_PATENTS: CyberPatent[] = [
  {
    id: 'patent-ai-firewall',
    title: 'Patented AI-Based Next-Gen Firewall Security System',
    patentNumber: 'IN-PAT-2024-AI-FW8910',
    filingStatus: 'Published & Government Recognized',
    grantYear: '2024',
    category: 'AI Defense Architecture',
    shortDesc: 'Autonomous real-time anomaly detection, zero-day threat mitigation, and predictive packet inspection neural engine.',
    abstract: 'An intelligent cybersecurity appliance and neural classification framework designed to analyze multi-terabit network stream telemetry in real time. Incorporates deep heuristic models to preemptively intercept zero-day payloads, polymorphic malware variants, and encrypted exfiltration tunnels prior to perimeter breach.',
    coreInnovations: [
      'Zero-Day Anomaly Detection Engine operating with sub-millisecond classification latency',
      'Predictive Packet Inspection filtering encrypted botnet Command & Control (C2) traffic without SSL termination degradation',
      'Autonomous Self-Hardening Dynamic Rule Synthesis adapting against distributed DDoS and Layer 7 API abuse',
      'Real-time behavioral telemetry streaming into centralized SOC SIEM & SOAR pipelines'
    ],
    enterpriseApplication: 'Deployed across high-throughput enterprise gateways, fintech payment corridors, and critical government infrastructure.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'patent-pentest-re',
    title: 'Patented Automated Pentesting & Binary Reverse Engineering Suite',
    patentNumber: 'IN-PAT-2023-RE-VAPT4421',
    filingStatus: 'Published & Intellectual Property Protected',
    grantYear: '2023',
    category: 'Offensive Automation & Binary Forensics',
    shortDesc: 'Automated vulnerability chaining, binary deconstruction, memory layout profiling, and exploit validation engine.',
    abstract: 'An offensive cyber warfare workbench that automates the discovery, deconstruction, and verifiable proof-of-concept validation of deep multi-stage vulnerabilities. Utilizes symbolic execution and binary graph reconstruction to trace exploitable logic flaws in compiled microservices, IoT firmware, and enterprise APIs.',
    coreInnovations: [
      'Automated Multi-Stage Vulnerability Chaining (linking low-tier information leaks to verified remote code execution)',
      'Deep Binary Deconstruction & Memory Layout Analysis for zero-day memory corruption triage',
      'Zero False Positive Exploit Validation Engine eliminating manual verification overhead for enterprise DevOps',
      'Seamless Section 65B Cyber Evidence extraction and forensic timeline generation'
    ],
    enterpriseApplication: 'Powers Hackup Technology’s commercial VAPT advisory, red team simulation drills, and law enforcement digital forensics investigations.',
    iconName: 'Terminal'
  }
];

export const PARTNER_INSTITUTIONS: PartnerInstitution[] = [
  { name: 'Vellore Institute of Technology (VIT)', location: 'Vellore / Chennai', category: 'Premier Tech & Universities', engagement: 'Advanced Red Team Masterclasses & CTF Co-Hosting', badge: 'Tier-1 University' },
  { name: 'PSG College of Technology (PSG TECH)', location: 'Coimbatore', category: 'Premier Tech & Universities', engagement: 'Industrial Curriculum Advisory & Student Range Training', badge: 'Premier Institute' },
  { name: 'SRM Institute of Science and Technology', location: 'Chennai', category: 'Premier Tech & Universities', engagement: 'EC-Council Certified Skill Accelerator Cohorts', badge: 'Deemed University' },
  { name: 'Madras Christian College (MCC)', location: 'Chennai', category: 'Heritage & Arts Institutions', engagement: 'Cyber Defense & Data Privacy Awareness Workshops', badge: 'Heritage Institution' },
  { name: 'Bannari Amman Institute of Technology', location: 'Sathyamangalam', category: 'Premier Tech & Universities', engagement: 'Cyber Range Bootcamp & Hackathon Mentorship', badge: 'Autonomous Center' },
  { name: 'Sri Ramakrishna Engineering College (SREC)', location: 'Coimbatore', category: 'Premier Tech & Universities', engagement: 'Board of Studies (BOS) Cybersecurity Member', badge: 'Autonomous College' },
  { name: 'Dr. N.G.P. Institute of Technology', location: 'Coimbatore', category: 'Premier Tech & Universities', engagement: 'Official Cyber Center of Excellence (CoE) Partner', badge: 'Premier CoE' },
  { name: 'The Lawrence School Lovedale', location: 'Lovedale, Ooty', category: 'Heritage & Arts Institutions', engagement: 'Executive Digital Safety & Cyber Literacy Seminars', badge: 'Historic Heritage' },
  { name: 'PSGR Krishnammal College for Women', location: 'Coimbatore', category: 'Heritage & Arts Institutions', engagement: 'Women in Cyber Defense Special Fellowship Program', badge: 'NIRF Top Rank' },
  { name: 'Sri Krishna Arts and Science College', location: 'Coimbatore', category: 'Heritage & Arts Institutions', engagement: 'B.Sc / M.Sc Cybersecurity Syllabus Development & Labs', badge: 'Autonomous Arts' },
  { name: 'Sree Saraswathi Thyagaraja College (STC)', location: 'Pollachi', category: 'Heritage & Arts Institutions', engagement: 'SOC Threat Hunting & Forensics Apprenticeship', badge: 'Autonomous College' },
  { name: 'Nehru Group of Institutions', location: 'Coimbatore / Kerala', category: 'Premier Tech & Universities', engagement: 'Campus Cyber Range Sandbox Lab Setup', badge: 'Multi-Campus' },
  { name: 'K.L.N. College of Engineering', location: 'Madurai / Sivagangai', category: 'Premier Tech & Universities', engagement: 'Offensive Security & CEH Certification Workshops', badge: 'Autonomous Tech' },
  { name: 'Subbalakshmi Lakshmipathy College of Science', location: 'Madurai', category: 'Heritage & Arts Institutions', engagement: 'Digital Forensics & Incident Triage Lab Program', badge: 'Autonomous College' },
  { name: 'Sankar Polytechnic College', location: 'Tirunelveli', category: 'Polytechnic & Specialized', engagement: 'Hardware Security & Network Hardening Training', badge: 'Polytechnic CoE' },
  { name: 'JCT College of Engineering and Technology', location: 'Coimbatore', category: 'Premier Tech & Universities', engagement: 'Industrial VAPT Apprenticeship & Placement Pipeline', badge: 'Engineering College' },
  { name: 'Nandha Arts and Science College', location: 'Erode', category: 'Heritage & Arts Institutions', engagement: 'Information Security & Cloud Defense Masterclass', badge: 'Autonomous Arts' },
  { name: 'SNS College of Technology', location: 'Coimbatore', category: 'Premier Tech & Universities', engagement: 'Design Thinking in Offensive Security Mentorship', badge: 'Autonomous Tech' },
  { name: 'Karpagam Academy of Higher Education', location: 'Coimbatore', category: 'Premier Tech & Universities', engagement: 'Cybercrime Forensics & Industry Guest Lectures', badge: 'Deemed University' },
  { name: 'Rathinam Group of Institutions', location: 'Coimbatore', category: 'Premier Tech & Universities', engagement: 'DEFCON Student Chapter & Tech Incubator Hub', badge: 'Innovation Hub' },
  { name: 'Kumaraguru College of Technology (KCT)', location: 'Coimbatore', category: 'Premier Tech & Universities', engagement: 'Red Team HackCon Mentorship & SIH Prep', badge: 'Autonomous College' },
  { name: 'Hindusthan College of Engineering and Technology', location: 'Coimbatore', category: 'Premier Tech & Universities', engagement: 'Industrial Cyber Range Practical Lab Days', badge: 'Autonomous College' }
];

export const FOUNDER_PROFILE = {
  name: 'Dinesh Paranthagan',
  qualifications: 'M.C.A., Ph.D.',
  title: 'Founder & Chief Executive Officer',
  company: 'Hackup Technology Pvt Ltd',
  visionQuote: 'To build a self-reliant cyber-resilient ecosystem by bridging the gap between offensive enterprise defense, law enforcement intelligence, and real-world hands-on student capability.',
  badges: [
    'Founder & CEO – Hackup Technology',
    'Secretary General – TANCCAO (Tamil Nadu Cyber Crime Action Organization)',
    'Technical Consultant – Tamil Nadu Police Cyber Crime Dept',
    'Board of Studies (BOS) Member (8 Universities)',
    'National Mentor – Smart India Hackathon (SIH)',
    'Recipient – NICA Entrepreneur of the Year & Best Speaker Awards'
  ],
  stats: {
    studentsTrained: '1,00,000+',
    auditsCompleted: '2,100+',
    proprietaryPatents: '2 Issued Patents',
    partnerUniversities: '54+ Institutions',
    policeWorkshops: '150+ Cyber Triage Sessions',
    yearsExperience: '12+ Years'
  },
  overview: 'Dr. Dinesh Paranthagan is a nationally recognized cybersecurity authority, technological innovator, and executive advisory leader. With over a decade on the frontlines of offensive cyber warfare, law enforcement digital forensic investigations, and academic curriculum modernization, he has guided government agencies, banking institutions, and over 1,00,000 engineers across India to security leadership.',
  keyContributions: [
    {
      title: 'Consultant to Tamil Nadu Police Cyber Crime Cells',
      desc: 'Provides specialized technical consultation on complex cyber crime investigations, financial fraud tracing, dark web surveillance, and Section 65B forensic evidence preservation for state law enforcement agencies.'
    },
    {
      title: 'Secretary General – TANCCAO',
      desc: 'Leads the Tamil Nadu Cyber Crime Action Organization, spearheading state-wide industry-government collaboration to neutralize ransomware epidemics and coordinate threat intelligence sharing.'
    },
    {
      title: 'National Mentor – Smart India Hackathon (SIH)',
      desc: 'Appointed as a premier National Mentor under the Ministry of Education & AICTE, guiding winning teams in building national-grade cyber defense prototypes.'
    },
    {
      title: 'Board of Studies (BOS) Member for 8 Universities',
      desc: 'Active curriculum architect modernizing computer science, cybersecurity, and digital forensics syllabi across premier universities and autonomous colleges in South India.'
    },
    {
      title: 'Proprietary Patent Holder & Inventor',
      desc: 'Invented and published 2 landmark cybersecurity patents in AI-driven autonomous firewall mitigation and automated binary reverse engineering.'
    }
  ],
  awards: [
    'NICA National Entrepreneur of the Year in Cybersecurity',
    'National Excellence Award – Best Keynote Cyber Speaker',
    'Police Cyber Crime Wing Commendation for Technical Support in High-Profile Triage',
    'EC-Council ATC Excellence in Cyber Training Award'
  ],
  contact: {
    email: 'dinesh@hackuptechnology.com',
    phone: '+91 93620 12339',
    office: 'Hackup Technology HQ, Ganapathy, Coimbatore - 641006, Tamil Nadu',
    linkedInUrl: 'https://linkedin.com/in/dinesh-paranthagan'
  }
};

export const ENTERPRISE_SERVICES: EnterpriseService[] = [
  {
    id: 'vapt',
    title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
    shortTitle: 'Full-Stack VAPT',
    tagline: 'Deep manual exploit verification beyond automated scanner noise.',
    iconName: 'ShieldAlert',
    badge: 'Flagship B2B Service',
    accentColor: 'gold',
    description: 'Comprehensive offensive security assessments covering Web Apps (OWASP Top 10), iOS/Android Mobile (OWASP MASTG), REST/GraphQL APIs, and internal/external infrastructure. We simulate real adversaries to uncover business logic flaws and chained exploits with zero production downtime.',
    standards: ['OWASP Top 10:2025', 'NIST SP 800-115', 'PTES Standard', 'OWASP MASTG'],
    keyDeliverables: [
      'Executive Summary with CVSS 3.1 & 4.0 Verified Risk Scores',
      'Step-by-step Proof-of-Concept (PoC) Exploit Chains',
      'Direct Code-Level Remediation Blueprints for Developers',
      'Free 30-Day Re-testing & Official VAPT Safe-to-Host Certificate'
    ],
    specs: [
      { key: 'Testing Methodology', val: '85% Manual Exploit Verification + 15% Deep Heuristic AI Scanning' },
      { key: 'Target Types', val: 'Web Apps, Microservices, iOS/Android Apps, Internal AD, Cloud Endpoints' },
      { key: 'Safe-to-Host Cert', val: 'ISO/IEC 27001 & DPDP Act 2023 Compliant Attestation' },
      { key: 'Testing Window', val: 'Zero Downtime / Production-Safe Scheduled Execution' }
    ],
    sampleFindings: [
      { vuln: 'Broken Object-Level Authorization (BOLA) on User Ledger', severity: 'CRITICAL', cve: 'CWE-285' },
      { vuln: 'SSRF in Webhook Processing Service -> AWS IMDSv2 Bypass', severity: 'CRITICAL', cve: 'CWE-918' },
      { vuln: 'Second-Order SQLi in Multi-Tenant Analytics Pipeline', severity: 'HIGH', cve: 'CWE-89' }
    ],
    complianceCoverage: ['RBI Cyber Guidelines', 'SEBI CS Framework', 'ISO 27001:2022', 'SOC 2 Type II'],
    turnaroundDays: '5 - 10 Business Days',
    imageUrl: '/images/enterprise_vapt.jpg'
  },
  {
    id: 'pam-identity',
    title: 'Privilege Access Management (PAM) & Identity Governance',
    shortTitle: 'PAM & Identity Governance',
    tagline: 'Securing critical credentials, bastion hosts, and zero-trust privileges.',
    iconName: 'Key',
    badge: 'Zero-Trust Identity',
    accentColor: 'amber',
    description: 'Enterprise privileged access architecture designed to eliminate credential theft, enforce Just-In-Time (JIT) access, audit root/admin credentials, and establish immutable session recording across DevOps pipelines, container clusters, multi-cloud tenants, and big data nodes.',
    standards: ['NIST SP 800-207 (Zero Trust)', 'CIS Controls v8 Safeguard 5 & 6', 'ISO 27001 A.9'],
    keyDeliverables: [
      'Privileged Account Discovery & Shadow Admin Audit',
      'Turnkey CyberArk / HashiCorp Vault / BeyondTrust Architecture',
      'Session Recording, Keystroke Logging & Real-Time Termination',
      'Multi-Cloud IAM Role Federation & Just-In-Time (JIT) Elevation'
    ],
    specs: [
      { key: 'Target Infrastructure', val: 'Linux/Windows Servers, AWS/Azure IAM, Kubernetes Root, Database Clusters' },
      { key: 'MFA Enforcement', val: 'FIDO2 / Hardware Token / Push-Based Conditional Access' },
      { key: 'Vault Automation', val: 'Automatic Password Rotation & Secrets-as-a-Service for CI/CD' },
      { key: 'Audit Readiness', val: 'SOC 2 Type II, ISO 27001, and RBI Access Control Attestation' }
    ],
    sampleFindings: [
      { vuln: 'Hardcoded Domain Admin Credentials in Internal Build Scripts', severity: 'CRITICAL', cve: 'CWE-798' },
      { vuln: 'Overprivileged AWS IAM Roles with Wildcard sts:AssumeRole', severity: 'CRITICAL', cve: 'CIS-AWS-1.16' },
      { vuln: 'Unmonitored SSH Root Keys Shared Across Production Servers', severity: 'HIGH', cve: 'CWE-321' }
    ],
    complianceCoverage: ['RBI Cyber Security Mandate', 'SOC 2 Type II CC6', 'ISO 27001:2022', 'PCI-DSS v4.0'],
    turnaroundDays: '7 - 14 Business Days',
    imageUrl: '/images/enterprise_cloud.jpg'
  },
  {
    id: 'soc-deployment',
    title: 'SOC Deployment & 24/7 SIEM Operations',
    shortTitle: 'SOC Deployment & 24/7 SIEM',
    tagline: 'Turnkey SOC architecture, Wazuh/Splunk ingestion & real-time triage.',
    iconName: 'Server',
    badge: 'Turnkey Blue Team',
    accentColor: 'blue',
    description: 'Design, deployment, and ongoing co-managed security operations. We integrate enterprise endpoint telemetry (Sysmon, EDR), network flow sensors (Zeek), and cloud audit trails into high-speed Wazuh, Splunk, or Elastic SIEM clusters with customized detection playbooks.',
    standards: ['MITRE ATT&CK Framework', 'SOC 2 Type II CC7', 'NIST SP 800-137'],
    keyDeliverables: [
      'Turnkey Wazuh / Splunk / Elastic SIEM Cluster Deployment',
      'Custom Correlation Rules mapped against MITRE ATT&CK vectors',
      'Automated Incident Alerting & SOAR Quarantine Integration',
      '24/7 Dedicated Cyber Security Incident Triage & Weekly CISO Briefings'
    ],
    specs: [
      { key: 'Ingestion Capacity', val: 'Scalable from 1,000 EPS to 50,000+ Events Per Second' },
      { key: 'Endpoint Coverage', val: 'Windows Server, macOS, Linux, AWS CloudTrail, Microsoft 365' },
      { key: 'SLA Triage', val: 'Under 15-Minute Alert Verification for Critical Anomalies' },
      { key: 'Compliance Dashboards', val: 'Out-of-the-box ISO 27001, PCI-DSS, and DPDP Act Telemetry' }
    ],
    sampleFindings: [
      { vuln: 'Undetected Pass-the-Hash Movement across Subnet B', severity: 'CRITICAL', cve: 'T1550.002' },
      { vuln: 'Unmonitored PowerShell Encoded Commands Executed on Domain Controller', severity: 'HIGH', cve: 'T1059.001' },
      { vuln: 'Unauthorized S3 Bucket Policy Alteration without SIEM Alert Trigger', severity: 'HIGH', cve: 'CIS-AWS-3.1' }
    ],
    complianceCoverage: ['ISO 27001:2022 A.8.15', 'SOC 2 Type II CC7.2', 'RBI Master Direction', 'DPDP Act 2023'],
    turnaroundDays: '10 - 20 Business Days Setup',
    imageUrl: '/images/enterprise_redteam.jpg'
  },
  {
    id: 'dfir',
    title: 'Digital Forensics & Incident Response (DFIR)',
    shortTitle: 'DFIR & Cybercrime Triage',
    tagline: 'Rapid 24/7 breach containment, memory forensics & litigation evidence.',
    iconName: 'FileSearch',
    badge: 'Emergency Response SLA',
    accentColor: 'emerald',
    description: 'Emergency response for active ransomware outbreaks, unauthorized data exfiltration, business email compromise (BEC), and insider espionage. We contain attackers, preserve legally admissible Section 65B forensic images, and provide root-cause litigation dossiers.',
    standards: ['NIST SP 800-61 Rev 2', 'ISO/IEC 27037 Evidence Handling', 'Indian Evidence Act Section 65B'],
    keyDeliverables: [
      'Emergency Breach Triage & Lateral Spread Containment within 90 mins',
      'Memory (RAM), Disk & Cloud Audit Log Timeline Reconstruction (Autopsy/FTK/Volatilty)',
      'Legally Admissible Section 65B Digital Evidence Dossier for Law Enforcement',
      'Ransomware Root-Cause Decryption & Post-Incident Hardening Roadmap'
    ],
    specs: [
      { key: 'Response SLA', val: 'Immediate 2-Hour Emergency Hotline Activation (Coimbatore & Pan-India)' },
      { key: 'Forensic Tooling', val: 'EnCase, FTK Imager, Volatility Framework, Autopsy, KAPE, Magnet AXIOM' },
      { key: 'Chain of Custody', val: 'Strictly compliant with Indian Courts, CERT-In & Police Cyber Cells' },
      { key: 'Post-Mortem', val: 'Comprehensive Executive & Board-Level Incident Posture Dossier' }
    ],
    sampleFindings: [
      { vuln: 'Initial Access via Exposed RDP on Remote Branch Gateway', severity: 'CRITICAL', cve: 'T1133' },
      { vuln: 'Data Exfiltration via Encrypted Mega.nz C2 Channel', severity: 'CRITICAL', cve: 'T1567.002' },
      { vuln: 'Shadow Copy Deletion Script Executed Prior to Ransomware', severity: 'HIGH', cve: 'T1490' }
    ],
    complianceCoverage: ['CERT-In Mandatory 6-Hour Reporting', 'Indian DPDP Act Breach Notification', 'ISO 27035'],
    turnaroundDays: '24/7 Rapid Activation',
    imageUrl: '/images/enterprise_dfir.jpg'
  },
  {
    id: 'cloud-devsecops',
    title: 'Cloud Security & DevSecOps Architecture',
    shortTitle: 'Cloud & DevSecOps',
    tagline: 'Hardening multi-cloud architectures from Git commit to Kubernetes runtime.',
    iconName: 'CloudCheck',
    badge: 'AWS / Azure / GCP',
    accentColor: 'blue',
    description: 'Full posture evaluation and automated pipeline hardening across multi-cloud environments. We audit IAM misconfigurations, container escape vectors, Kubernetes RBAC, Terraform/Pulumi IaC drift, and CI/CD secret leaks.',
    standards: ['CIS Cloud Benchmarks v3.0', 'Kubernetes Hardening Guide (NSA/CISA)', 'OWASP DevSecOps Guideline'],
    keyDeliverables: [
      'Multi-Cloud IAM Privilege Creep & Least-Privilege Policy Audit',
      'Kubernetes Cluster & Ingress Controller Security Blueprint',
      'Automated SAST/DAST/SCA Pipeline Integration in GitHub Actions / GitLab CI',
      'Zero-Trust Network Architecture (ZTNA) Design Matrix'
    ],
    specs: [
      { key: 'Cloud Coverage', val: 'AWS, Microsoft Azure, Google Cloud Platform, Hybrid Cloud' },
      { key: 'Container Sec', val: 'Docker Daemon, Containerd, EKS, GKE, Helm Chart Audits' },
      { key: 'IaC Scanning', val: 'Terraform, CloudFormation, Pulumi, Ansible Secrets Audit' },
      { key: 'Runtime EDR', val: 'Falco / eBPF kernel event monitoring & runtime policy enforcement' }
    ],
    sampleFindings: [
      { vuln: 'Public S3 Bucket with Sensitive Database Backup Snapshots', severity: 'CRITICAL', cve: 'CIS-AWS-2.1' },
      { vuln: 'Kubernetes Pod Running as Root with HostPath Mount Access', severity: 'HIGH', cve: 'CWE-250' },
      { vuln: 'Exposed Production API Keys in Public Container Layer History', severity: 'HIGH', cve: 'CWE-312' }
    ],
    complianceCoverage: ['SOC 2 Type II', 'ISO 27017 Cloud', 'PCI-DSS v4.0', 'HIPAA Security Rule'],
    turnaroundDays: '4 - 7 Business Days',
    imageUrl: '/images/enterprise_cloud.jpg'
  },
  {
    id: 'compliance-readiness',
    title: 'Regulatory Compliance & Audit Readiness',
    shortTitle: 'ISO 27001 & DPDP Compliance',
    tagline: 'Guaranteed first-attempt audit readiness for ISO, SOC 2, and Indian DPDP Act.',
    iconName: 'FileCheck2',
    badge: 'Audit Ready Guarantee',
    accentColor: 'gold',
    description: 'End-to-end governance, risk, and compliance (GRC) advisory. We perform gap assessments, author Information Security Management System (ISMS) policies, conduct mandatory vendor risk assessments, and prepare your organization for successful ISO 27001:2022, SOC 2 Type II, RBI, and Indian DPDP Act 2023 certifications.',
    standards: ['ISO/IEC 27001:2022', 'AICPA SOC 2 Type II', 'Indian Digital Personal Data Protection (DPDP) Act 2023', 'RBI / SEBI Cyber Mandate'],
    keyDeliverables: [
      'Comprehensive GRC Gap Assessment & Statement of Applicability (SoA)',
      'Custom ISMS Policy & Incident Response Procedure Drafting',
      'Third-Party Vendor Risk Management (TPRM) Framework Setup',
      'Mock Audit & Official Pre-Certification Attestation Report'
    ],
    specs: [
      { key: 'Frameworks', val: 'ISO 27001:2022, SOC 2 Type II, DPDP Act 2023, RBI Master Direction' },
      { key: 'Success Rate', val: '100% First-Attempt Certification Pass Record for Audited Clients' },
      { key: 'Policy Coverage', val: 'Access Control, Data Retention, Breach Notification, BCP/DR' },
      { key: 'Board Briefing', val: 'CISO / Board Risk Assessment Matrix & Governance Review' }
    ],
    sampleFindings: [
      { vuln: 'Absence of Documented Data Principal Consent Withdrawal Workflow (DPDP Act)', severity: 'HIGH', cve: 'DPDP-Sec-6' },
      { vuln: 'Unclassified Customer PII Stored in Unencrypted Staging Database', severity: 'CRITICAL', cve: 'ISO-A.8.11' },
      { vuln: 'Third-Party SaaS Vendor Lacking Valid SOC 2 or ISO Security Attestation', severity: 'MEDIUM', cve: 'ISO-A.5.19' }
    ],
    complianceCoverage: ['ISO 27001:2022', 'SOC 2 Type II', 'DPDP Act 2023', 'RBI Cyber Security Framework'],
    turnaroundDays: '2 - 4 Weeks Advisory',
    imageUrl: '/images/portal_enterprise.jpg'
  }
];

export const ACADEMY_COURSES: AcademyCourse[] = [
  {
    id: 'ceh-v13',
    title: 'Certified Ethical Hacker (CEH v13 AI-Powered)',
    ecCouncilCode: 'EC-Council Exam 312-50',
    category: 'Offensive Security',
    level: 'Intermediate',
    badge: 'Official EC-Council Flagship',
    duration: '60 Hours (6 Weeks / Weekend & Weekday)',
    practicalLabHours: '100+ Hands-On Lab Scenarios',
    mode: 'Hybrid (Coimbatore Lab + Live Online)',
    description: 'The world’s most globally recognized ethical hacking certification, updated for 2026 with AI-driven threat exploitation, automated reconnaissance, LLM prompt injection attack vectors, and automated defense evasion techniques. Learn directly from active red team practitioners in Coimbatore.',
    highlights: [
      'Official EC-Council Accredited Training Center Curriculum & Aspen Portal Access',
      'Official 6-Month Cloud Cyber Range Access with 2,200+ Attack Tools',
      'Covers 20 Comprehensive Security Domains from Footprinting to AI Hacking',
      '100% Practical Exam Preparation with Mock Simulations & Authorized Voucher Support'
    ],
    modules: [
      { moduleNum: 'MOD 01-04', title: 'Footprinting, Network Scanning & Enumeration', labs: ['Nmap Advanced Scripting', 'Recon-ng OSINT', 'SMB & SNMP Triage', 'Shodan API Recon'] },
      { moduleNum: 'MOD 05-08', title: 'Vulnerability Analysis, System Hacking & Malware Threats', labs: ['Metasploit Probing', 'Custom Shellcode Generation', 'Living off the Land (LOLBins)', 'Rootkit Detection'] },
      { moduleNum: 'MOD 09-13', title: 'Web App, API, Wireless & Mobile Hacking', labs: ['Burp Suite Professional OWASP Exploits', 'JWT & GraphQL Bypasses', 'WPA3 Cracking', 'Android APK Reversing'] },
      { moduleNum: 'MOD 14-20', title: 'AI Attack Vectors, Cloud, OT/IoT & Cryptography', labs: ['LLM Jailbreaks & Prompt Injections', 'AWS S3 Exploits', 'Kubernetes Pod Security', 'RSA/ECC Key Cracking'] }
    ],
    prerequisites: 'Basic knowledge of TCP/IP networking, Linux terminal commands, or Hackup Foundation Track.',
    careerOutcomes: ['Penetration Tester', 'Ethical Hacker', 'Cyber Security Consultant', 'Vulnerability Assessor'],
    targetRoles: ['Penetration Tester (₹6L - ₹14L/yr)', 'Security Analyst (₹5.5L - ₹12L/yr)'],
    certificationPartner: 'EC-Council (International Accredited)',
    upcomingBatch: 'Starting Next Monday & Weekend Batches',
    imageUrl: '/images/academy_ceh.jpg'
  },
  {
    id: 'cpent',
    title: 'Certified Penetration Testing Professional (CPENT)',
    ecCouncilCode: 'EC-Council Exam CPENT',
    category: 'Offensive Security',
    level: 'Expert',
    badge: 'Elite Red Team Level',
    duration: '80 Hours (8 Weeks)',
    practicalLabHours: '120+ Multi-Layered Range Labs',
    mode: 'Hybrid (Coimbatore Lab + Live Online)',
    description: 'The pinnacle of offensive security testing. Master multi-zone network pivoting, double-proxy evasion, binary deobfuscation, Active Directory forest takeovers, OT/SCADA penetration testing, and writing weaponized custom exploits.',
    highlights: [
      'Multi-disciplinary Penetration Testing across Enterprise AD & Cloud Topologies',
      'Advanced Pivoting through Deep Isolated Subnets and Firewalls',
      'Binary Analysis & 32/64-bit Assembly Buffer Overflow Exploitation',
      '24-Hour Live Practical Range Exam leading to prestigious CPENT / LPT Master status'
    ],
    modules: [
      { moduleNum: 'MOD 01-04', title: 'Advanced Scoping, Stealth Recon & Double Pivoting', labs: ['SSH Tunneling & Chisel Pivoting', 'Multi-homed Host Exploitation', 'Evasion of Next-Gen EDR'] },
      { moduleNum: 'MOD 05-08', title: 'Active Directory Forest Attacks & Kerberos Abuse', labs: ['BloodHound Mapping', 'Kerberoasting & AS-REP Roasting', 'Domain Escalation & DCSync'] },
      { moduleNum: 'MOD 09-11', title: 'Binary Exploitation, Shellcoding & Fuzzing', labs: ['x86/x64 Buffer Overflows', 'ROP Chain Construction', 'Custom Encoder Scripting in Python'] },
      { moduleNum: 'MOD 12-14', title: 'OT/SCADA, Cloud Pivoting & Professional Report Writing', labs: ['Modbus & DNP3 Protocol Attacks', 'AWS Metadata Escalation', 'Executive Dossier Drafting'] }
    ],
    prerequisites: 'CEH v13 or minimum 2 years of offensive security experience.',
    careerOutcomes: ['Senior Penetration Tester', 'Red Team Lead', 'Exploit Developer', 'Principal Cyber Consultant'],
    targetRoles: ['Red Team Consultant (₹12L - ₹26L/yr)', 'Lead Security Specialist (₹14L - ₹30L/yr)'],
    certificationPartner: 'EC-Council (CPENT)',
    upcomingBatch: 'Admissions Open for Next Cohort',
    imageUrl: '/images/academy_internship.jpg'
  },
  {
    id: 'soc-analyst',
    title: 'Practical SOC Analyst & Threat Hunting Bootcamp (CSA)',
    ecCouncilCode: 'EC-Council Exam CSA / Hackup Blue Team',
    category: 'Defensive SOC',
    level: 'Intermediate',
    badge: 'High Placement Demand',
    duration: '50 Hours (5 Weeks)',
    practicalLabHours: '80+ Live SIEM Triage Scenarios',
    mode: 'Hybrid (Coimbatore Lab + Live Online)',
    description: 'Master Blue Team defensive operations in our real-time Coimbatore Security Operations Center. Work with live enterprise SIEMs (Splunk, Wazuh, Elastic Security), analyze real malware packet captures, and triage simulated cyber breaches.',
    highlights: [
      'Live Enterprise Splunk & Wazuh SIEM Log Ingestion and Rule Writing',
      'MITRE ATT&CK Framework Mapping & Sigma Rule Authoring',
      'Real Malware PCAP Analysis with Wireshark and NetworkMiner',
      'Direct Campus & Corporate Placement Assistance with 40+ Hiring Partners'
    ],
    modules: [
      { moduleNum: 'MOD 01-03', title: 'SOC Architecture, Threat Intelligence & MITRE ATT&CK', labs: ['Splunk Enterprise Setup', 'MISP Threat Feed Sync', 'ATT&CK Navigator Mapping'] },
      { moduleNum: 'MOD 04-06', title: 'Log Management, SIEM Correlation & Sigma Rules', labs: ['Sysmon Log Triage', 'Writing Splunk SPL Queries', 'Wazuh Alert Configuration'] },
      { moduleNum: 'MOD 07-09', title: 'Network Traffic Forensics & Endpoint Detection (EDR)', labs: ['Wireshark Beaconing Analysis', 'Velociraptor Artifact Collection', 'Memory Forensics via Volatility'] },
      { moduleNum: 'MOD 10-12', title: 'Incident Response Playbooks & Containment Scenarios', labs: ['Ransomware Outbreak Containment', 'Phishing Header Analysis', 'Active Threat Hunting'] }
    ],
    prerequisites: 'Familiarity with Windows/Linux operating systems and basic networking concepts.',
    careerOutcomes: ['SOC Level 1 / Level 2 Analyst', 'Threat Intelligence Analyst', 'Incident Responder', 'Blue Team Engineer'],
    targetRoles: ['SOC Analyst L1/L2 (₹4.5L - ₹10L/yr)', 'Cyber Defense Specialist (₹6L - ₹13L/yr)'],
    certificationPartner: 'EC-Council CSA & Hackup Certified SOC Analyst',
    upcomingBatch: 'Weekday Evening & Weekend Fast-Track',
    imageUrl: '/images/academy_soc.jpg'
  },
  {
    id: 'chfi',
    title: 'Computer Hacking Forensic Investigator (CHFI)',
    ecCouncilCode: 'EC-Council Exam 312-49',
    category: 'Forensics & Governance',
    level: 'Advanced',
    badge: 'Law Enforcement & Legal',
    duration: '50 Hours (5 Weeks)',
    practicalLabHours: '70+ Forensic Lab Scenarios',
    mode: 'Hybrid (Coimbatore Lab + Live Online)',
    description: 'Learn the exact digital forensics techniques used by law enforcement, CBI, and police cyber crime cells. Master digital evidence seizure, chain of custody, volatile RAM memory extraction, mobile forensics, anti-forensics counter-measures, and Section 65B litigation reporting.',
    highlights: [
      'Digital Evidence Seizure & Chain of Custody strictly aligned with Indian Evidence Act 65B',
      'Hard Drive Bit-Stream Imaging & Carving using FTK Imager, EnCase & Autopsy',
      'Volatile Memory (RAM) Analysis & Unpacking Malware Artifacts using Volatility',
      'Mobile Phone (Android/iOS) Extraction, Call Detail Record (CDR) & Chat Forensics'
    ],
    modules: [
      { moduleNum: 'MOD 01-03', title: 'Forensic Investigation Process & Evidence Seizure', labs: ['Write-Blocker Evidence Imaging', 'FTK Imager Bit-Stream Capture', 'Chain of Custody Logs'] },
      { moduleNum: 'MOD 04-07', title: 'Disk, File System & Operating System Forensics', labs: ['Master File Table (MFT) Carving', 'Windows Registry Forensics', 'Prefetch & Shellbags Triage'] },
      { moduleNum: 'MOD 08-11', title: 'Network, Database & Cloud Forensics', labs: ['PCAP Log Reconstruction', 'SQL Transaction Log Forensics', 'AWS CloudTrail Forensic Triage'] },
      { moduleNum: 'MOD 12-14', title: 'Malware Forensics, Anti-Forensics & Court Testimony', labs: ['Memory Dump Analysis with Volatility', 'Steganography Detection', 'Section 65B Dossier Preparation'] }
    ],
    prerequisites: 'Basic knowledge of computer architecture, operating systems, and networking.',
    careerOutcomes: ['Digital Forensics Investigator', 'Cyber Crime Analyst', 'Incident Response Specialist', 'Litigation Consultant'],
    targetRoles: ['Forensics Investigator (₹7L - ₹15L/yr)', 'DFIR Specialist (₹8L - ₹18L/yr)'],
    certificationPartner: 'EC-Council (CHFI)',
    upcomingBatch: 'Weekend Batches Available',
    imageUrl: '/images/enterprise_dfir.jpg'
  },
  {
    id: 'cnd',
    title: 'Certified Network Defender (CND)',
    ecCouncilCode: 'EC-Council Exam 312-38',
    category: 'Defensive SOC',
    level: 'Intermediate',
    badge: 'Network Defense Core',
    duration: '40 Hours (4 Weeks)',
    practicalLabHours: '60+ Network Security Labs',
    mode: 'Hybrid (Coimbatore Lab + Live Online)',
    description: 'A comprehensive network defense program focusing on perimeter security, firewall/VPN engineering, zero-trust network segmentation, secure switch/router hardening, and threat-adaptive network defense architectures.',
    highlights: [
      'Network Attack Surface Defense & Topology Hardening',
      'Enterprise Firewall, IDS/IPS, and Next-Gen Proxy Policy Configuration',
      'VPN Architecture (IPSec / WireGuard / SSL-VPN) & Encryption Management',
      'Network Traffic Behavioral Anomaly Detection using Zeek and Snort'
    ],
    modules: [
      { moduleNum: 'MOD 01-04', title: 'Network Attacks & Defense In-Depth Protocols', labs: ['Wireshark Protocol Dissection', 'Port Security & 802.1X Auth', 'VLAN Segmentation'] },
      { moduleNum: 'MOD 05-08', title: 'Perimeter Appliances, Firewalls, IDS/IPS & Proxies', labs: ['pfSense Firewall Rules', 'Snort IDS Signatures', 'WAF Rule Hardening'] },
      { moduleNum: 'MOD 09-12', title: 'VPN Security, Zero Trust Architecture & Wireless', labs: ['IPSec Tunnel Hardening', 'WPA3-Enterprise Setup', 'Zero-Trust Bastion Gateways'] },
      { moduleNum: 'MOD 13-16', title: 'Network Incident Response, Auditing & Compliance', labs: ['Network Log Aggregation', 'Nessus Network Audits', 'Disaster Recovery Simulation'] }
    ],
    prerequisites: 'Basic networking and TCP/IP fundamentals.',
    careerOutcomes: ['Network Security Engineer', 'Systems Security Administrator', 'Infrastructure Defender'],
    targetRoles: ['Network Security Engineer (₹5.5L - ₹12L/yr)', 'Infrastructure Admin (₹5L - ₹10L/yr)'],
    certificationPartner: 'EC-Council (CND)',
    upcomingBatch: 'Starting Next Cohort',
    imageUrl: '/images/academy_ceh.jpg'
  },
  {
    id: 'ccse',
    title: 'Certified Cloud Security Engineer (CCSE)',
    ecCouncilCode: 'EC-Council Exam CCSE',
    category: 'Cloud & DevSecOps',
    level: 'Advanced',
    badge: 'Multi-Cloud Defense',
    duration: '45 Hours (4 Weeks)',
    practicalLabHours: '60+ Cloud Defense Labs',
    mode: 'Hybrid (Coimbatore Lab + Live Online)',
    description: 'Designed for engineers securing AWS, Azure, and Google Cloud environments. Master IAM least-privilege policies, cloud threat modeling, container security, zero-trust cloud perimeters, and automated incident recovery.',
    highlights: [
      'Multi-Cloud Security Configurations across AWS, Azure & GCP',
      'Cloud Architecture Threat Modeling & CIS Benchmark Auditing',
      'Securing Docker Containers & Kubernetes Pod Networking',
      'Real-world Cloud Incident Response & CloudTrail Forensic Investigations'
    ],
    modules: [
      { moduleNum: 'MOD 01-03', title: 'Cloud Concepts, Threat Vectors & Cloud Governance', labs: ['AWS IAM Least Privilege', 'Azure Role-Based Access Control', 'GCP Service Accounts'] },
      { moduleNum: 'MOD 04-06', title: 'Securing Cloud Storage, Compute & Network Virtualization', labs: ['S3 Bucket Policy Hardening', 'VPC Peering Security', 'Cloud Security Groups & WAF'] },
      { moduleNum: 'MOD 07-09', title: 'Container Security, Kubernetes (EKS/GKE) & Microservices', labs: ['Trivy Container Scanning', 'Falco Runtime Security', 'K8s Network Policies'] },
      { moduleNum: 'MOD 10-12', title: 'Cloud Incident Response, Auditing & Forensics', labs: ['AWS GuardDuty Alert Triage', 'CloudTrail Investigation', 'Automated Lambda Remediation'] }
    ],
    prerequisites: 'Basic knowledge of cloud computing (AWS/Azure) or ethical hacking fundamentals.',
    careerOutcomes: ['Cloud Security Architect', 'AWS/Azure Security Specialist', 'DevSecOps Consultant'],
    targetRoles: ['Cloud Security Engineer (₹8L - ₹18L/yr)', 'DevSecOps Architect (₹10L - ₹22L/yr)'],
    certificationPartner: 'EC-Council (CCSE)',
    upcomingBatch: 'Weekend Cohort',
    imageUrl: '/images/enterprise_cloud.jpg'
  },
  {
    id: 'ecde',
    title: 'Practical DevSecOps Engineer (ECDE & Pipeline Hardening)',
    ecCouncilCode: 'EC-Council Exam ECDE',
    category: 'Cloud & DevSecOps',
    level: 'Advanced',
    badge: 'CI/CD Automation',
    duration: '40 Hours (4 Weeks)',
    practicalLabHours: '50+ Pipeline Security Labs',
    mode: 'Hybrid (Coimbatore Lab + Live Online)',
    description: 'Bridge the gap between rapid software delivery and uncompromising security. Integrate SAST, DAST, Container Scanning, Software Composition Analysis (SCA), and Secret Detection directly into GitLab CI, GitHub Actions, and Jenkins.',
    highlights: [
      'Shift-Left Security Philosophy & Continuous Compliance as Code',
      'Automated SAST with SonarQube & Semgrep in GitHub Actions',
      'Dynamic DAST with OWASP ZAP automated in CI/CD pipelines',
      'Infrastructure as Code (IaC) Security with Checkov and tfsec'
    ],
    modules: [
      { moduleNum: 'MOD 01-03', title: 'DevSecOps Culture, Threat Modeling & Secure Coding', labs: ['Threat Modeling with PyTM', 'Git Pre-commit Hooks with GitLeaks', 'Secret Scanning'] },
      { moduleNum: 'MOD 04-06', title: 'SAST & Dependency Analysis (SCA) in Pipelines', labs: ['SonarQube Integration', 'Semgrep Rule Customization', 'OWASP Dependency-Check'] },
      { moduleNum: 'MOD 07-09', title: 'DAST, IAST & Container Pipeline Hardening', labs: ['OWASP ZAP Pipeline Automation', 'Docker Image Scanning with Grype/Trivy', 'Cosign Signing'] },
      { moduleNum: 'MOD 10-12', title: 'Infrastructure as Code (IaC) Security & Policy as Code', labs: ['Checkov Terraform Audits', 'Open Policy Agent (OPA) Gatekeeper', 'DefectDojo Dashboard'] }
    ],
    prerequisites: 'Basic understanding of software development, Git, and Linux.',
    careerOutcomes: ['DevSecOps Engineer', 'Security Automation Specialist', 'Application Security Engineer'],
    targetRoles: ['DevSecOps Engineer (₹7L - ₹16L/yr)', 'AppSec Specialist (₹8L - ₹17L/yr)'],
    certificationPartner: 'EC-Council (ECDE)',
    upcomingBatch: 'Starting Next Month',
    imageUrl: '/images/academy_ceh.jpg'
  },
  {
    id: 'ctia-ecih',
    title: 'Threat Intelligence & Incident Handling (CTIA & ECIH)',
    ecCouncilCode: 'EC-Council CTIA / ECIH Suite',
    category: 'Specialized Suite',
    level: 'Advanced',
    badge: 'Specialized Intelligence',
    duration: '45 Hours (4 Weeks)',
    practicalLabHours: '55+ Intel & Response Labs',
    mode: 'Hybrid (Coimbatore Lab + Live Online)',
    description: 'Learn to extract, analyze, and apply actionable cyber threat intelligence (CTI) to preempt advanced attacks, and execute enterprise-grade incident response playbooks for containment, eradication, and post-breach resilience.',
    highlights: [
      'Strategic, Operational & Tactical Cyber Threat Intelligence lifecycle',
      'STIX/TAXII standards, OpenCTI & MISP threat sharing platforms',
      'Incident Handling workflows for Ransomware, APT, BEC, and Insider Threats',
      'YARA Rule Authoring, IoC extraction & automated EDR response integration'
    ],
    modules: [
      { moduleNum: 'MOD 01-03', title: 'Threat Intel Lifecycle, OSINT & Dark Web Monitoring', labs: ['MISP Threat Intelligence Sharing', 'Tor/Dark Web Scraping', 'YARA Rule Authoring'] },
      { moduleNum: 'MOD 04-06', title: 'Threat Hunting with MITRE ATT&CK & Diamond Model', labs: ['ATT&CK Matrix TTP Mapping', 'Sigma Rule Writing', 'Adversary Profiling'] },
      { moduleNum: 'MOD 07-09', title: 'Incident Response Lifecycle & Evidence Handling', labs: ['Ransomware Containment Runbook', 'Memory Dump Triage', 'Network Quarantine'] },
      { moduleNum: 'MOD 10-12', title: 'Post-Incident Hardening, Remediation & Executive Reporting', labs: ['Root Cause Analysis (RCA)', 'CERT-In Incident Report Drafting', 'Security Posture Audit'] }
    ],
    prerequisites: 'Knowledge of networking and security fundamentals (CEH/CSA or equivalent).',
    careerOutcomes: ['Threat Intelligence Analyst', 'Incident Response Lead', 'Security Operations Manager'],
    targetRoles: ['CTI Analyst (₹8L - ₹18L/yr)', 'Incident Handler (₹7.5L - ₹16L/yr)'],
    certificationPartner: 'EC-Council (CTIA & ECIH)',
    upcomingBatch: 'Fast-Track Weekend Cohort',
    imageUrl: '/images/enterprise_redteam.jpg'
  },
  {
    id: 'industrial-internship',
    title: 'Coimbatore 1/3/6-Month Industrial Internship & Cyber Range Apprenticeship',
    ecCouncilCode: 'Hackup ATC Industrial Credential',
    category: 'Specialized Suite',
    level: 'Beginner',
    badge: 'Campus to MNC Pipeline',
    duration: '1, 3, or 6 Months (Flexible Offline / Hybrid)',
    practicalLabHours: '150+ Hours Cyber Range Live Shadowing',
    mode: 'Hybrid (Coimbatore Lab + Live Online)',
    description: 'The premier hands-on cyber internship for engineering and MCA students in Tamil Nadu. Shadow active penetration testers on sanitized enterprise scopes, conduct live SIEM threat hunting, and graduate with certified work experience and direct placement referrals.',
    highlights: [
      'Work directly at our high-tech Cyber Range in Ganapathy, Coimbatore',
      'Hands-on training across VAPT, SOC SIEM, Cloud Hardening, and Digital Forensics',
      'Official Industrial Training Certificate, Project Viva Guidance & Letter of Recommendation',
      'Referrals to 40+ MNC hiring partners with dedicated mock interview preparation'
    ],
    modules: [
      { moduleNum: 'PHASE 01', title: 'Linux Warfare, Networking & Exploit Fundamentals', labs: ['Kali Linux Mastery', 'Wireshark Packet Crafting', 'Bash/Python Automation'] },
      { moduleNum: 'PHASE 02', title: 'Web App & API Vulnerability Assessment (OWASP Top 10)', labs: ['Burp Suite Pro Exploitation', 'SQLi, XSS, IDOR, SSRF', 'API Token Tampering'] },
      { moduleNum: 'PHASE 03', title: 'SOC Blue Team Threat Hunting & SIEM Telemetry', labs: ['Wazuh Agent Deployment', 'Splunk Dashboard Creation', 'Malware PCAP Triage'] },
      { moduleNum: 'PHASE 04', title: 'Capstone Project, Sanitized Client Scope & Placement Prep', labs: ['Full Scope VAPT Report Writing', 'Mock Technical Interviews', 'Direct MNC Referrals'] }
    ],
    prerequisites: 'Engineering, BCA, MCA, or Science students passionate about cybersecurity.',
    careerOutcomes: ['Cybersecurity Apprentice', 'Junior Security Engineer', 'SOC Trainee', 'VAPT Associate'],
    targetRoles: ['Entry-Level Security Engineer (₹4L - ₹8.5L/yr)', 'Junior Penetration Tester (₹4.5L - ₹9L/yr)'],
    certificationPartner: 'Hackup Technology & EC-Council ATC',
    upcomingBatch: 'New Cohorts Starting Monthly',
    imageUrl: '/images/academy_internship.jpg'
  }
];

export const CYBER_RANGE_NODES: CyberRangeNode[] = [
  {
    id: 'kali-node',
    name: 'Offensive Kali Red VM',
    role: 'Attacker',
    ip: '198.51.100.44',
    os: 'Kali Linux 2026.1 (Rolling)',
    status: 'ONLINE',
    description: 'Isolated red team adversary node loaded with Burp Suite Pro, Metasploit, Impacket, and custom Python exploitation scripts.',
    iconName: 'Terminal'
  },
  {
    id: 'waf-node',
    name: 'Edge Perimeter WAF / Envoy',
    role: 'Perimeter WAF',
    ip: '203.0.113.10',
    os: 'Hardened Linux Gateway',
    status: 'DEFENDING',
    description: 'Dynamic edge reverse proxy with ModSecurity CRS and rate-limiting inspection filters.',
    iconName: 'Shield'
  },
  {
    id: 'k8s-node',
    name: 'EKS Microservices Cluster',
    role: 'Kubernetes Cluster',
    ip: '10.244.0.15',
    os: 'Containerd / K8s v1.31',
    status: 'ONLINE',
    description: 'Vulnerable cloud-native microservice architecture running customer ledger and payment processing pods.',
    iconName: 'Server'
  },
  {
    id: 'ad-node',
    name: 'Active Directory DC (corp.hackup.lab)',
    role: 'Active Directory',
    ip: '172.16.10.5',
    os: 'Windows Server 2022 DC',
    status: 'ONLINE',
    description: 'Simulated corporate domain controller with SPN service accounts, GPOs, and LDAP endpoints.',
    iconName: 'Layers'
  },
  {
    id: 'siem-node',
    name: 'Enterprise Splunk & Wazuh SIEM',
    role: 'SOC SIEM & EDR',
    ip: '172.16.99.200',
    os: 'Security Onion / Splunk Enterprise',
    status: 'ONLINE',
    description: 'Live Blue Team telemetry ingestion hub receiving Sysmon, Zeek network flow, and EDR behavioral alarms.',
    iconName: 'Activity'
  }
];

export const CYBER_RANGE_SCENARIOS: CyberRangeScenario[] = [
  {
    id: 'sqli',
    title: 'OWASP SQLi -> WAF Bypass & DB Exfiltration',
    type: 'Offensive Exploitation',
    mitreTactic: 'T1190 - Exploit Public-Facing Application',
    description: 'Simulate an attacker crafting a multi-line SQL union injection payload with hex encoding to bypass the edge WAF and extract hashed credentials.',
    attackerStep: 'sqlmap -u "https://target.lab/api/v2/ledger?id=1" --tamper=space2comment --dump-all',
    socAlertStep: 'SIEM Rule CR-0412 Triggered: Anomaly SQL syntax detected in URI params. Auto-blocked attacker IP for 15 mins.',
    affectedNodeIds: ['kali-node', 'waf-node', 'k8s-node', 'siem-node'],
    cvssScore: 9.1
  },
  {
    id: 'kerberoast',
    title: 'Kerberoasting -> Domain Admin Hash Extraction',
    type: 'AD Lateral Movement',
    mitreTactic: 'T1558.003 - Steal or Forge Kerberos Tickets',
    description: 'Request Kerberos TGS service tickets for SPN accounts, extract ticket hashes offline, and crack the Domain Admin password.',
    attackerStep: 'GetUserSPNs.py corp.hackup.lab/user:Pass123 -request -outputfile hashes.kerberoast',
    socAlertStep: 'Sysmon Event 4769 Spike: RC4 ticket requested for MSSQL_SVC. Blue Team EDR isolates compromised workstation.',
    affectedNodeIds: ['kali-node', 'ad-node', 'siem-node'],
    cvssScore: 8.8
  },
  {
    id: 'k8s-escape',
    title: 'Cloud Container Escape via Privileged Pod Mount',
    type: 'Cloud Escape',
    mitreTactic: 'T1611 - Escape to Host',
    description: 'Exploit an overprivileged Docker container with CAP_SYS_ADMIN capabilities to access the host node root filesystem.',
    attackerStep: 'nsenter --target 1 --mount --uts --ipc --net --pid -- /bin/bash',
    socAlertStep: 'Falco Runtime Alert: Notice namespace escape attempt detected on worker-node-03. Pod killed immediately.',
    affectedNodeIds: ['kali-node', 'k8s-node', 'siem-node'],
    cvssScore: 9.8
  },
  {
    id: 'ransomware',
    title: 'Simulated Ransomware Outbreak & EDR Isolation',
    type: 'Ransomware Triage',
    mitreTactic: 'T1486 - Data Encrypted for Impact',
    description: 'Adversary executes an obfuscated PowerShell script to tamper with volume shadow copies and encrypt shared network shares.',
    attackerStep: 'vssadmin delete shadows /all /quiet && Invoke-RansomSim -Path \\\\corp.hackup.lab\\share',
    socAlertStep: 'EDR Behavioral Engine: Mass file write and shadow copy tamper intercepted. Host network connection severed.',
    affectedNodeIds: ['kali-node', 'ad-node', 'siem-node'],
    cvssScore: 9.9
  }
];

export const DEFCON_EVENTS: DefconEvent[] = [
  {
    id: 'defcon-cb-01',
    title: 'DEFCON Coimbatore Meetup #18: LLM Security & Red Teaming AI',
    date: 'April 18, 2026',
    time: '10:00 AM - 2:00 PM IST',
    venue: 'Hackup Cyber Range Auditorium, Ganapathy, Coimbatore',
    speaker: 'Red Team Leads @ Hackup Technology',
    speakerRole: 'Offensive AI Security Researchers',
    status: 'UPCOMING',
    rsvpCount: 142,
    ctfPool: '₹25,000 + EC-Council Vouchers',
    topics: ['Indirect Prompt Injection & Agent Jailbreaking', 'Adversarial Attacks on Local LLMs', 'Live 2-Hour Live CTF Challenge']
  },
  {
    id: 'defcon-cb-02',
    title: 'DEFCON Coimbatore Meetup #17: Active Directory Attacks & Defense',
    date: 'February 21, 2026',
    time: '10:00 AM - 1:30 PM IST',
    venue: 'Hackup Technology Campus, Coimbatore',
    speaker: 'Senthil Kumar & Team Hackup',
    speakerRole: 'Principal Security Consultant',
    status: 'COMPLETED',
    rsvpCount: 186,
    ctfPool: '₹20,000 Cash Pool',
    topics: ['BloodHound Enterprise Mapping', 'ADCS Certificate Template Abuse', 'Defending Golden Tickets']
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  // Enterprise Clients
  {
    id: 'ent-1',
    category: 'enterprise',
    name: 'Rajesh Subramanian',
    role: 'Chief Technology Officer (CTO)',
    organization: 'FinVentures Payments Pvt Ltd',
    location: 'Chennai & Singapore',
    avatarText: 'RS',
    quote: 'Hackup Technology executed our annual VAPT and RBI compliance audits with surgical precision. Unlike other firms that just dump automated Nessus reports, their red team discovered a critical BOLA authorization flaw in our payment ledger within 48 hours and guided our developers with code-level fixes.',
    verifiedBadge: 'RBI & SOC 2 Audit Client',
    outcomeMetric: '100% Critical Vulnerabilities Remediated',
    skillsOrServices: ['Full-Stack VAPT', 'API Security', 'RBI CS Framework'],
    rating: 5
  },
  {
    id: 'ent-2',
    category: 'enterprise',
    name: 'Anandhi Venkatesh',
    role: 'VP of Infrastructure & Security',
    organization: 'CloudScale SaaS Solutions',
    location: 'Bengaluru / Coimbatore',
    avatarText: 'AV',
    quote: 'We engaged Hackup Technology for our Kubernetes & AWS CIS benchmark audit ahead of our SOC 2 Type II assessment. Their team hardened our EKS clusters, established automated CI/CD guardrails, and provided our CISO with an executive-ready attestation. They are true cybersecurity masters.',
    verifiedBadge: 'SOC 2 Type II Certified',
    outcomeMetric: '0 Unresolved Findings in External Audit',
    skillsOrServices: ['Cloud Security', 'Kubernetes Hardening', 'DevSecOps'],
    rating: 5
  },
  {
    id: 'ent-3',
    category: 'enterprise',
    name: 'Karthik Narayanan',
    role: 'Head of Information Security (CISO)',
    organization: 'Apex HealthTech Hospital Networks',
    location: 'Coimbatore & Madurai',
    avatarText: 'KN',
    quote: 'During an emergency ransomware attempt on a legacy subsidiary branch, Hackup’s DFIR hotline activated in under 90 minutes. They isolated the lateral spread, performed memory forensics, and ensured no patient PII was leaked. Outstanding technical capability right here in Tamil Nadu.',
    verifiedBadge: '24/7 DFIR Emergency Client',
    outcomeMetric: '90-Minute Incident Containment',
    skillsOrServices: ['Emergency DFIR', 'Ransomware Containment', 'Forensics'],
    rating: 5
  },
  // Academy Alumni
  {
    id: 'alm-1',
    category: 'alumni',
    name: 'Vigneshwaran K.',
    role: 'Security Analyst - Threat Intelligence',
    organization: 'Zoho Security Operations',
    location: 'Placed via Hackup Academy (Coimbatore Batch)',
    avatarText: 'VK',
    quote: 'I joined Hackup Academy with zero offensive security background during my final year at PSG Tech. The CEH v13 training and the 100% practical Cyber Range labs in Ganapathy gave me the real-world skills to crack 4 rounds of technical interviews at Zoho. The instructors are active penetration testers, not just theory teachers.',
    verifiedBadge: 'Placed at Zoho Security (₹8.5 LPA)',
    outcomeMetric: 'CEH v13 Certified (Score: 94%)',
    skillsOrServices: ['CEH v13', 'Network Pentesting', 'Wireshark'],
    rating: 5
  },
  {
    id: 'alm-2',
    category: 'alumni',
    name: 'Priyanka Sundar',
    role: 'SOC Level 2 Analyst',
    organization: 'Tata Consultancy Services (TCS Cyber)',
    location: 'Placed via Hackup Academy',
    avatarText: 'PS',
    quote: 'The Practical SOC Analyst Bootcamp with Splunk and Wazuh simulation is unbeatable. We literally handled simulated ransomware and brute-force PCAP logs in class every single day. When TCS interviewed me, every single scenario they questioned had already been practiced on Hackup’s live Cyber Range.',
    verifiedBadge: 'Placed at TCS Cyber Defense (₹7.2 LPA)',
    outcomeMetric: 'SOC Analyst Bootcamp Certified',
    skillsOrServices: ['Splunk SPL', 'Wazuh SIEM', 'MITRE ATT&CK'],
    rating: 5
  },
  {
    id: 'alm-3',
    category: 'alumni',
    name: 'Dinesh Kumar M.',
    role: 'Associate Penetration Tester',
    organization: 'Big 4 Cybersecurity Advisory',
    location: 'Placed via Hackup 6-Month Internship',
    avatarText: 'DM',
    quote: 'The 6-month industrial internship at Hackup Technology was the turning point of my career. Being in Coimbatore and working directly alongside red team consultants on real client anonymized scopes gave me 2 years worth of practical experience before even graduating.',
    verifiedBadge: 'Placed at Big 4 Consulting (₹9.0 LPA)',
    outcomeMetric: 'Hackup 6-Month Industrial Intern',
    skillsOrServices: ['Web App VAPT', 'API Security', 'Burp Suite Pro'],
    rating: 5
  }
];

export const COIMBATORE_INTERNSHIP_DETAILS = {
  title: 'Cybersecurity Industrial Internship & Red Team Apprenticeship',
  subtitle: 'Hands-on practical training designed specifically for engineering and MCA students in Coimbatore & Tamil Nadu.',
  officeLocation: 'Hackup Technology Campus, No.4, First Street, Sri Venkatesapuram, Ganapathy, Coimbatore - 641006',
  durations: [
    { period: '1 Month Fast-Track', desc: 'Core Linux, Network Scanning & Web Vulnerability Assessment Fundamentals.', target: 'Pre-final Year Students' },
    { period: '3 Months In-Depth', desc: 'Full OWASP Top 10, API Pentesting, SOC SIEM Triage, and EC-Council Exam Prep.', target: 'Final Year / Fresh Graduates' },
    { period: '6 Months Full Apprenticeship', desc: 'Live Red Team shadow engagements, client report authoring, and direct placement track.', target: 'Career Changers & Dedicated Red Teamers' }
  ],
  perks: [
    'Work from our high-tech Cyber Lab in Ganapathy, Coimbatore',
    'Personal access to dedicated Kali Linux virtual target subnets',
    'Guidance directly from active EC-Council Certified Instructors and Red Teamers',
    'Official Industrial Training Certificate, Project Viva Assistance & Letter of Recommendation',
    'Direct interview referrals to 40+ cyber hiring partners across Tamil Nadu & Bengaluru'
  ]
};

export const FAQ_DATA = {
  enterprise: [
    {
      q: 'How does Hackup Technology ensure zero production downtime during VAPT?',
      a: 'We conduct all penetration testing in accordance with strict Rules of Engagement (RoE). Our team uses throttled, production-safe exploit payloads, coordinates testing windows (including out-of-hours/maintenance windows), and performs non-destructive proofs-of-concept for denial-of-service vectors.'
    },
    {
      q: 'Are your VAPT certificates accepted by regulatory bodies like RBI, SEBI, and ISO auditors?',
      a: 'Yes. Our audit reports and "Safe-to-Host" Attestation Certificates adhere to ISO/IEC 27001:2022, CERT-In guidelines, RBI Cyber Security Framework, and Indian DPDP Act 2023 requirements, accepted by banking partners, external auditors, and enterprise vendor assessment teams.'
    },
    {
      q: 'Do you provide post-audit re-testing and developer remediation support?',
      a: 'Every Hackup Technology VAPT engagement includes complimentary re-testing within 30 days of initial report delivery, along with dedicated code-level guidance sessions for your software development and DevOps teams.'
    },
    {
      q: 'How quickly can your Digital Forensics & Incident Response (DFIR) team respond to a live breach?',
      a: 'Our emergency hotline is active 24/7/365. For critical breaches in Tamil Nadu, our on-site team activates within hours, while remote containment and cloud log isolation begin within 90 minutes of engagement initiation.'
    }
  ],
  academy: [
    {
      q: 'Is Hackup Technology an official EC-Council Accredited Training Center (ATC)?',
      a: 'Yes! Hackup Technology Pvt Ltd is an official, accredited EC-Council partner based in Coimbatore. Students receive genuine EC-Council official digital courseware, official Aspen portal access, official cloud cyber range credentials, and authorized exam voucher support.'
    },
    {
      q: 'Can non-technical or beginner students enroll in the CEH v13 or SOC Analyst tracks?',
      a: 'Absolutely. We include a foundational pre-bootcamp covering Linux terminal proficiency, TCP/IP networking, and computer architecture before diving into advanced penetration testing and SIEM tools.'
    },
    {
      q: 'What is the format of the classes (Classroom in Coimbatore vs Live Online)?',
      a: 'We offer flexible hybrid formats: in-person hands-on training at our high-tech Cyber Range in Ganapathy, Coimbatore, as well as live instructor-led interactive online batches with recorded session backups.'
    },
    {
      q: 'How does Hackup Academy assist with job placements for students?',
      a: 'We provide end-to-end placement support including resume optimization for cyber roles, LinkedIn & GitHub portfolio building, mock technical interviews with red teamers, and direct interview scheduling with our network of 40+ corporate hiring partners.'
    }
  ]
};
