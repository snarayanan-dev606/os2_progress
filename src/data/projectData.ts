// ============================================================================
// OS2 STUDIO — INSURANCE AI PROJECT SHOWCASE DATA SOURCE
// Source of Truth: October 2026 Engineering Reports & AWS Production Records
// ============================================================================

export interface ProjectMeta {
  title: string;
  shortTitle: string;
  company: string;
  projectPeriod: string;
  developerRole: string;
  subtitle: string;
  executiveSummary: string;
  status: string;
  cloudHost: string;
}

export const projectMeta: ProjectMeta = {
  title: "AI-Powered Motor Insurance Claims Investigation & Fraud Detection System",
  shortTitle: "Insurance AI Investigation Platform",
  company: "OS2 Studio",
  projectPeriod: "October 2026",
  developerRole: "Junior Full Stack Developer",
  subtitle: "A full-stack insurance claims investigation platform designed to streamline document processing, AI-assisted analysis, investigator workflows, report generation, and cloud deployment.",
  executiveSummary: "Manual motor insurance claims investigation historically required 4 to 8 hours per claim to parse through 50+ pages of unstructured police statements, hospital records, and workshop repair estimates. Throughout October 2026, our team engineered an end-to-end multi-tenant platform combining React, FastAPI, Google Gemini Multimodal AI, and Celery workers deployed on AWS (EC2, S3, RDS PostgreSQL, CloudFront). The system reduces extraction and draft report synthesis time to seconds with strict human-in-the-loop verification.",
  status: "AWS Production Verified",
  cloudHost: "AWS Asia Pacific (Malaysia / Singapore) Cloud Infrastructure"
};

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
}

export const heroMetrics: MetricItem[] = [
  {
    id: "sections",
    value: "17 Sections",
    label: "Statutory Report Engine",
    subtext: "Automated forensic breakdown across police, medical, and repair data"
  },
  {
    id: "questions",
    value: "38 Bilingual Q&As",
    label: "Standardized Driver Matrix",
    subtext: "Malay/English statements with Gemini automated draft generation"
  },
  {
    id: "templates",
    value: "3 Dynamic Templates",
    label: "Statutory Report Output",
    subtext: "Dynamic UI builders and structured Word (.docx) export builders"
  },
  {
    id: "aws",
    value: "100% Cloud-Native",
    label: "AWS Production Deployment",
    subtext: "Dockerized EC2 + RDS PostgreSQL + S3 Vault + CloudFront CDN"
  }
];

export interface WorkflowStage {
  step: number;
  id: string;
  title: string;
  role: string;
  description: string;
  inputs: string[];
  outputs: string[];
  safeguard: string;
  tech: string;
}

export const workflowStages: WorkflowStage[] = [
  {
    step: 1,
    id: "claim-intake",
    title: "Claim Submission & Multi-Party Registration",
    role: "Investigator / Claims Handler",
    description: "Investigators register a claim with primary policy details, insured vehicle number, accident timestamp, and initial adverse party identifiers.",
    inputs: ["Policyholder NRIC & Name", "Vehicle Plate Number", "Accident Date & Location", "Adverse Party Plate & Contact"],
    outputs: ["Unique Claim ID (UUID)", "Relational Database Record in AWS RDS", "Claims Vault Directory Initialized"],
    safeguard: "Data integrity validation via Pydantic v2 schemas preventing duplicate registrations.",
    tech: "React 18 • FastAPI • PostgreSQL"
  },
  {
    step: 2,
    id: "document-ingestion",
    title: "Multimodal Document & Image Ingestion",
    role: "System Pipeline",
    description: "Upload multimodal evidence files including multi-page PDF police reports, JPJ vehicle searches, repair invoices, and high-resolution crash scene photographs.",
    inputs: ["PDF Police Reports (1-10+ pages)", "Medical Treatment Summaries", "Workshop Estimate Invoices", "Accident Scene Photographs"],
    outputs: ["Categorized Evidence Artifacts", "Content-Hashed S3 Vault Storage", "AI Vision Classification Tags"],
    safeguard: "Private S3 storage with short-lived cryptographically signed JWT file tokens for zero public access.",
    tech: "AWS S3 • Base64 Streaming • PyMuPDF"
  },
  {
    step: 3,
    id: "ai-extraction",
    title: "AI Extraction & Entity Disambiguation",
    role: "Google Gemini AI & Celery Worker",
    description: "Google Gemini multimodal pipeline analyzes raw text and photographs, applying the proprietary Anchor Ground-Truth algorithm to separate insured parties from third-party drivers.",
    inputs: ["Raw Evidence Stream", "Anchor Metadata (Insured vs Adverse Party)", "Standardized Forensic Extraction Prompts"],
    outputs: ["27 Relational Data Models Populated", "Discrepancy & Red-Flag Warnings", "Preliminary Liability Apportionment"],
    safeguard: "AI assists investigators. All extracted fields preserve raw OCR references for full auditability.",
    tech: "Gemini Multimodal API • Celery • Redis"
  },
  {
    step: 4,
    id: "investigation-workspace",
    title: "Interactive Investigation & Driver Statement Matrix",
    role: "Senior Forensic Investigator",
    description: "Investigators review extracted findings, inspect high-resolution documents via side-by-side previews, and complete 38 bilingual driver statement questions with AI draft assistance.",
    inputs: ["AI Draft Findings", "38 Standardized Bilingual Questions", "Scene Photos & Road Sketch Plans"],
    outputs: ["Validated Investigation Dossier", "Custom Question Additions", "Itemized Repair Cost Validations"],
    safeguard: "Human-in-the-loop review: Every single field can be overridden with inline editing and changelog recording.",
    tech: "TypeScript • Custom UI Grid • Inline Diff"
  },
  {
    step: 5,
    id: "report-synthesis",
    title: "Statutory Report Synthesis & Word Builder",
    role: "Automated Report Engine",
    description: "Dynamic report builder compiles validated findings into formal statutory templates (Template 1, Template 2, or Template 3) with monochrome tables and dynamic vehicle classification.",
    inputs: ["Approved Forensic Findings", "Template Specification Selection", "Driver Statements & Crash Photos"],
    outputs: ["Pixel-Perfect Microsoft Word (.docx)", "Dynamic In-App Interactive Report", "Statutory Disclaimers Appended"],
    safeguard: "Explicit safety disclaimers included in all exports noting AI-assisted synthesis requiring formal adjuster sign-off.",
    tech: "python-docx • Structured Schemas"
  },
  {
    step: 6,
    id: "manager-approval",
    title: "Manager Verification & Approval Pending Lifecycle",
    role: "Claims Manager",
    description: "Claims managers access the Approval Pending workspace to inspect the complete investigation dossier, verify investigator workload, and grant final statutory clearance.",
    inputs: ["Completed 17-Section Dossier", "Investigator Workload Metrics", "Discrepancy Audit Logs"],
    outputs: ["Final Legal Sign-Off", "Archival in S3 Production Vault", "Claims Lifecycle State: APPROVED"],
    safeguard: "Two-man rule: Claims cannot be self-approved; managers can request itemized corrections with automatic status rollbacks.",
    tech: "FastAPI RBAC • AWS RDS • Audit Trail"
  }
];

export interface FeatureItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  techStack: string[];
  architectureNote: string;
  metrics: { label: string; value: string }[];
}

export const applicationFeatures: FeatureItem[] = [
  {
    id: "ai-document-extraction",
    badge: "Multimodal AI Engine",
    title: "AI Document Extraction",
    subtitle: "High-precision factual extraction from unstructured insurance evidence",
    description: "Automated extraction pipeline capable of parsing multi-page scanned police reports, handwritten driver reports, hospital invoices, and vehicle registration cards. Streams entire multi-page PDF documents in a single base64 payload to Google Gemini, preserving cross-page narrative context without file-lock bottlenecks.",
    details: [
      "Base64 multimodal PDF streaming eliminates temporary file disk locks on Windows and Linux",
      "Real-time animated extraction progress bar with live completion updates and timeout safeguards",
      "Comprehensive error handling with graceful fallback to local OCR processing if network limits occur",
      "Populates 27 relational forensic data models covering road conditions, speed estimates, and traffic violations",
      "Permanent safety disclaimer rendered during AI extraction reminding investigators of verification duty"
    ],
    techStack: ["Google Gemini Multimodal API", "PyMuPDF (fitz)", "FastAPI", "Pydantic v2"],
    architectureNote: "Processes multi-page documents without splitting pages, preserving holistic context across police stamps, officer notes, and statutory sections.",
    metrics: [
      { label: "Document Ingestion", value: "Multi-Page PDF" },
      { label: "Extraction Schema", value: "27 Models" },
      { label: "Extraction Speed", value: "< 25 Seconds" }
    ]
  },
  {
    id: "ai-vision-processing",
    badge: "Computer Vision",
    title: "AI Vision Processing",
    subtitle: "Automatic classification of crash scene photographs vs documents",
    description: "Computer vision classification system engineered to automatically distinguish vehicle impact photographs from scanned paperwork, preventing layout breakage and ensuring photographs are properly scaled, cropped, and routed to statutory photographic evidence exhibits.",
    details: [
      "Image classification workflow separating crash scenes, vehicle damage, and document scans",
      "Fixed image fitting and aspect ratio cropping in side-by-side evidence previewers",
      "Prevented image slot overlap during multiple concurrent high-resolution photo uploads",
      "Automated categorization into: Insured Vehicle Damage, Third-Party Vehicle Damage, Crash Scene, and Sketch Plan",
      "High-resolution modal preview with zooming and rotation controls for forensics review"
    ],
    techStack: ["Gemini Vision API", "Pillow (PIL)", "React Custom Canvas", "CSS Aspect-Ratio Tokens"],
    architectureNote: "Pre-calculates display slots to prevent UI re-flow and layout shifts when handling 10+ accident photographs simultaneously.",
    metrics: [
      { label: "Image Classification", value: "Photos vs Scans" },
      { label: "Upload Handling", value: "Slot Overlap Prevention" },
      { label: "Preview", value: "Zero Layout Shift" }
    ]
  },
  {
    id: "driver-statement-management",
    badge: "Forensic Matrix",
    title: "Driver Statement Management",
    subtitle: "38 standardized bilingual driver statement questions with AI draft synthesis",
    description: "Comprehensive driver examination module containing 38 standardized questions in English and Bahasa Malaysia. Gemini AI analyzes police reports and initial notices to pre-fill drafted answers, allowing investigators to conduct rapid inline editing and add custom accident-specific questions.",
    details: [
      "38 standardized bilingual questions covering visibility, weather, lane position, right of way, and impact angle",
      "AI automatically pre-fills drafted answers using extracted police and witness statements",
      "Full inline question and answer editing with instant auto-save to backend API",
      "Custom question insertion allows investigators to add situational questions for complex pileups",
      "Custom questions and answers are dynamically injected into generated Word (.docx) reports"
    ],
    techStack: ["React State Machine", "Gemini Grounded Extraction", "python-docx Schema", "Bilingual Lexicon"],
    architectureNote: "Questions are linked with relational foreign keys to the claim dossier, ensuring custom questions persist across template switches and report regenerations.",
    metrics: [
      { label: "Standardized Questions", value: "38 Questions" },
      { label: "Languages", value: "English & Bahasa Malaysia" },
      { label: "Custom Questions", value: "Fully Supported in .docx" }
    ]
  },
  {
    id: "dynamic-report-templates",
    badge: "Statutory Reporting",
    title: "Dynamic Report Templates",
    subtitle: "Multi-template architecture supporting varied statutory formats",
    description: "Flexible reporting engine supporting three distinct statutory report templates. Enables adjusters to switch between reporting standards without data loss, featuring dynamic UI builders and automated generation of structured Word documents.",
    details: [
      "Template 1: Dynamic UI and statutory report builder for standard motor damage claims",
      "Template 2: Dynamic UI and report builder customized for commercial transport & fleet incidents",
      "Template 3: Structured schema and Word report builder with strict monochrome tables and sequential numbering",
      "Dynamic vehicle classification: Automatically adapts report sections for motorcycles vs passenger cars vs heavy commercial vehicles",
      "Standardized N/A fallback handling replacing broken em-dashes and empty placeholders"
    ],
    techStack: ["python-docx", "Dynamic Component Registry", "SQLAlchemy", "TypeScript Generics"],
    architectureNote: "Separates the core forensic data model from the presentation template, allowing arbitrary template additions without altering stored claim data.",
    metrics: [
      { label: "Templates Delivered", value: "3 Formal Templates" },
      { label: "Vehicle Logic", value: "Car & Motorcycle Adaptive" },
      { label: "Table Formatting", value: "Monochrome Statutory" }
    ]
  },
  {
    id: "ai-assisted-investigation",
    badge: "Entity Disambiguation",
    title: "AI-Assisted Investigation & Anchor Ground-Truth",
    subtitle: "Gemini-grounded analysis with zero insured vs third-party confusion",
    description: "Proprietary Anchor Ground-Truth algorithm engineered to eliminate entity hallucinations. In multi-vehicle collisions, the system anchors known policyholder identifiers before prompting the AI, strictly separating insured records from third-party vehicles, drivers, and injury claims.",
    details: [
      "Anchor Ground-Truth algorithm pre-identifies insured vehicle registration and driver NRIC",
      "Strict system prompt constraints explicitly prevent LLM from reassigning adverse party details to policyholder",
      "Grounded question answering allows investigators to ask conversational questions against the uploaded evidence",
      "Automated extraction of statutory traffic law violations (e.g., Road Transport Act 1987 Section 41/42/43)",
      "Red-flag fraud detection flags mismatched damage heights, late police reports, and inconsistent injury dates"
    ],
    techStack: ["Google Gemini API", "FastAPI Prompt Engineering", "Vector Disambiguation", "Pydantic"],
    architectureNote: "Injects deterministic anchor tags into the prompt context, slashing entity misattribution rates to zero in multi-car pileups.",
    metrics: [
      { label: "Disambiguation", value: "Anchor Ground-Truth" },
      { label: "Entity Separation", value: "Insured vs Third-Party" },
      { label: "Fraud Red Flags", value: "Statutory Conflict Check" }
    ]
  },
  {
    id: "workspaces-and-governance",
    badge: "Enterprise Security",
    title: "Employee & Manager Workspaces",
    subtitle: "Role-segregated operational control, workload distribution, and approvals",
    description: "Enterprise workspace architecture separating Investigator operational flows from Claims Manager oversight. Features automatic investigator assignment, live employee directory workload tracking, and an Approval Pending workspace with strict sign-off safeguards.",
    details: [
      "Dedicated Employee workspace focused on active claims investigation, evidence ingestion, and draft editing",
      "Executive Manager dashboard with KPI overview cards, pending review gates, and investigator assignment",
      "Dynamic Employee Directory displaying real-time active case counts and workload distribution",
      "Automatic claim assignment algorithm routes incoming claims to adjusters with lowest active capacity",
      "Approval Pending workspace with one-click clearance or itemized revision requests with automatic rollback"
    ],
    techStack: ["JWT RBAC (HS256)", "React Context & Hooks", "PostgreSQL Aggregations", "Tailored Layouts"],
    architectureNote: "Removed deprecated customer role and customer queues to focus 100% on internal forensic investigator and manager workflows.",
    metrics: [
      { label: "Workspaces", value: "Employee & Manager" },
      { label: "Assignment", value: "Automated & Manual" },
      { label: "Workload Tracking", value: "Live Capacity Monitor" }
    ]
  },
  {
    id: "word-report-generation",
    badge: "Document Synthesis",
    title: "Word Report Generation",
    subtitle: "Pixel-perfect Microsoft Word (.docx) export with monochrome tables",
    description: "Code-driven document generation pipeline compiling forensic findings into publishable Microsoft Word documents adhering to statutory insurance standards, featuring strict monochrome tables, sequential section numbering, and photo exhibits.",
    details: [
      "Dynamic 17-section report synthesis generating native .docx files directly on the backend",
      "Strict monochrome table layouts complying with statutory court and arbitration requirements",
      "Sequential section numbering ensuring legal compliance across all template variations",
      "Seamlessly includes investigator-added custom driver statement questions and answers",
      "Appends mandatory legal disclaimers noting AI-assisted synthesis and requiring signed adjuster verification"
    ],
    techStack: ["python-docx", "FastAPI FileResponse", "AWS S3 Vault", "Table XML Engine"],
    architectureNote: "Direct byte stream generation eliminates temporary file locks and provides instant downloads without server disk buildup.",
    metrics: [
      { label: "Output Format", value: ".docx Document" },
      { label: "Sections Built", value: "17 Formal Sections" },
      { label: "Formatting", value: "Monochrome Legal Tables" }
    ]
  }
];

export interface TimelineEntry {
  date: string;
  displayDate: string;
  week: number;
  title: string;
  category: "Architecture" | "Frontend" | "AI & Vision" | "Backend" | "Reporting" | "AWS Cloud" | "Security";
  summary: string;
  tasks: string[];
  techTags: string[];
  notes?: string;
}

export const developmentTimeline: TimelineEntry[] = [
  // WEEK 1
  {
    date: "2026-10-06",
    displayDate: "October 6, 2026",
    week: 1,
    title: "Project Initiation and Research",
    category: "Architecture",
    summary: "Started working on the assigned insurance investigation project. Researched the end-to-end motor insurance workflow, evaluated technology stacks, and prepared initial project documentation.",
    tasks: [
      "Started working on the assigned insurance project at OS2 Studio.",
      "Researched and understood the statutory motor insurance workflow (police reports, adjuster claims, insurer review).",
      "Conducted research and development on the technology stack (React, FastAPI, PostgreSQL, and AI engines).",
      "Prepared and submitted project-related documentation and initial scope alignment."
    ],
    techTags: ["System Architecture", "Insurance Domain Research", "Tech Stack R&D"],
    notes: "Mapped the traditional 4-8 hour manual claims journey to identify automated bottleneck targets."
  },
  {
    date: "2026-10-07",
    displayDate: "October 7, 2026",
    week: 1,
    title: "Frontend Development and Workflow Planning",
    category: "Frontend",
    summary: "Initiated frontend development, created navigable UI views, and established category and user login workflows with SMS OTP research.",
    tasks: [
      "Developed the frontend UI foundations using React and modern component structuring.",
      "Implemented functional navigation and core application routing workflows.",
      "Added categories and user login types with their respective information and access flows.",
      "Researched SMS OTP authentication workflows for investigator identity verification."
    ],
    techTags: ["React", "UI Routing", "Authentication Flows", "SMS OTP R&D"],
    notes: "Laid out responsive screen primitives and established navigation shells for role-based access."
  },
  {
    date: "2026-10-08",
    displayDate: "October 8, 2026",
    week: 1,
    title: "Initial Frontend and AI Research",
    category: "AI & Vision",
    summary: "Completed the basic frontend UI, evaluated local Ollama AI models, tested Google Gemini API integration, and researched AI document extraction and report generation.",
    tasks: [
      "Completed the basic frontend structure and initial operational UI.",
      "Explored local Ollama AI models for offline air-gapped document processing.",
      "Tested Google Gemini API integration for multimodal document understanding.",
      "Researched AI document extraction pipelines for unstructured handwriting and scans.",
      "Explored AI-generated statutory report functionality."
    ],
    techTags: ["Google Gemini API", "Ollama AI", "Document Extraction", "React UI"],
    notes: "Identified Gemini Multimodal API as superior in parsing noisy Asian police report scans."
  },
  {
    date: "2026-10-09",
    displayDate: "October 9, 2026",
    week: 1,
    title: "Backend Improvements and Code-Based Extraction",
    category: "Backend",
    summary: "Improved backend architecture, replaced initial placeholder document processing with code-based extraction pipelines, and fixed backend bugs.",
    tasks: [
      "Improved backend architecture using FastAPI and modular route structuring.",
      "Replaced placeholder document processing with programmatic, code-based extraction.",
      "Resolved backend schema serialization and validation bugs.",
      "Pushed initial stabilized backend commits to repository."
    ],
    techTags: ["FastAPI", "Python", "Code Extraction", "Backend Architecture"],
    notes: "Replaced stub JSON responses with real Pydantic parsing routines."
  },

  // WEEK 2
  {
    date: "2026-10-12",
    displayDate: "October 12, 2026",
    week: 2,
    title: "AI Vision and Application Stability",
    category: "AI & Vision",
    summary: "Implemented AI vision functionality to distinguish crash photographs from documents, fixed image fitting and cropping in previews, removed redundant columns, resolved employee page freezing, and pushed verified updates.",
    tasks: [
      "Implemented AI vision functionality to distinguish crash photographs from documents.",
      "Fixed image fitting and cropping in evidence previewers to prevent distortion.",
      "Removed the Assigned Role column from user tables to streamline layout.",
      "Resolved employee page freezing issues caused by unoptimized re-renders.",
      "Pushed verified stability updates to GitHub."
    ],
    techTags: ["Computer Vision", "Image Classification", "React Optimization", "GitHub"],
    notes: "Prevented crash photos from being fed to text-only OCR pipelines, cutting processing overhead."
  },
  {
    date: "2026-10-13",
    displayDate: "October 13, 2026",
    week: 2,
    title: "Authentication and Extraction Improvements",
    category: "Security",
    summary: "Refined the login UI, enhanced AI document extraction pipelines, purged obsolete code, and fixed application bugs.",
    tasks: [
      "Improved login UI with cleaner typography and responsive field validation.",
      "Enhanced AI document extraction prompt structures for higher factual recall.",
      "Removed obsolete code paths and unused prototype dependencies.",
      "Fixed application bugs across document upload state handlers."
    ],
    techTags: ["Login UI", "Extraction Prompts", "Code Cleanup", "Bug Fixing"],
    notes: "Cleaned up deprecated mock endpoints to prepare for multi-party claim handling."
  },
  {
    date: "2026-10-14",
    displayDate: "October 14, 2026",
    week: 2,
    title: "Frontend and Backend Section Development",
    category: "Frontend",
    summary: "Upgraded frontend UI, added new page sections, developed corresponding backend endpoints, and resolved bugs and performance issues.",
    tasks: [
      "Improved frontend UI with consistent spacing tokens and card structures.",
      "Added new dedicated page sections for claim details, evidence lists, and analysis.",
      "Developed backend FastAPI functionality and database queries for the new sections.",
      "Fixed bugs and resolved UI rendering performance bottlenecks."
    ],
    techTags: ["React Components", "FastAPI Endpoints", "Performance Optimization"],
    notes: "Added dedicated modular containers for police findings, vehicle specs, and driver background."
  },
  {
    date: "2026-10-15",
    displayDate: "October 15, 2026",
    week: 2,
    title: "Driver Statement Development and Standardization",
    category: "Reporting",
    summary: "Standardized 38 bilingual driver statement questions, automated answer filling with Gemini AI, enabled inline editing, added custom question insertion, and included custom questions in Word report exports.",
    tasks: [
      "Fixed empty driver statement questions and answer display bugs.",
      "Automatically filled driver statement answers using Gemini AI contextual analysis.",
      "Standardized 38 bilingual driver statement questions (English and Bahasa Malaysia).",
      "Enabled inline question and answer editing with instant save capabilities.",
      "Added custom question insertion to accommodate unique accident scenarios.",
      "Included custom questions and answers in generated Word report exports.",
      "Fixed spacing and responsive alignment issues across statement forms."
    ],
    techTags: ["38 Bilingual Questions", "Gemini AI", "python-docx", "Inline Editor"],
    notes: "Major milestone: Allowed investigators to tailor the standardized question bank with custom case inquiries."
  },
  {
    date: "2026-10-16",
    displayDate: "October 16, 2026",
    week: 2,
    title: "Workflow and Dashboard Improvements",
    category: "Frontend",
    summary: "Added an animated AI extraction progress bar with live completion updates, developed the Approval Pending workspace and automatic clearance lifecycle, removed the Review queue, added investigator details and automatic assignment to manager dashboard, and standardized SVG icons.",
    tasks: [
      "Added an animated AI extraction progress bar with live completion updates.",
      "Developed the Approval Pending workspace and automatic clearance lifecycle.",
      "Removed the redundant Review queue to simplify approval governance.",
      "Added investigator details and automatic assignment functionality to the manager dashboard.",
      "Standardized SVG refresh and reprocess icons across all dashboard tables."
    ],
    techTags: ["Progress Bar Animation", "Approval Workspace", "Manager Dashboard", "Auto-Assignment"],
    notes: "Replaced ambiguous review stages with a streamlined two-tier governance model."
  },

  // WEEK 3
  {
    date: "2026-10-20",
    displayDate: "October 20, 2026",
    week: 3,
    title: "Insurance Data and Report Improvements",
    category: "AI & Vision",
    summary: "Fixed an AI pipeline crash related to policyholder attributes, prevented image slot overlap during multiple-image uploads, separated insured and third-party vehicle and driver records, implemented dynamic car and motorcycle classification, and generated Template 1 and Template 2.",
    tasks: [
      "Fixed an AI pipeline crash related to missing policyholder attributes in legacy claims.",
      "Prevented image slot overlap during concurrent multiple-image uploads.",
      "Separated insured and third-party vehicle and driver records to eliminate entity confusion.",
      "Implemented dynamic car and motorcycle classification in report logic.",
      "Generated and verified Template 1 and Template 2 outputs."
    ],
    techTags: ["Entity Disambiguation", "Image Slot Handling", "Template 1 & 2", "Vehicle Classification"],
    notes: "Crucial engineering fix: Solved the collision between insured and third-party drivers in multi-vehicle crashes."
  },
  {
    date: "2026-10-21",
    displayDate: "October 21, 2026",
    week: 3,
    title: "Dynamic Report Generation and Grounded Q&A",
    category: "Reporting",
    summary: "Developed Template 1 and Template 2 dynamic UI and report builders, implemented Gemini-grounded question answering across templates, improved entity separation rules, replaced em-dash fallback values with N/A, removed brand mentions, and updated GitHub.",
    tasks: [
      "Developed the Template 1 dynamic UI and report builder.",
      "Developed the Template 2 dynamic UI and report builder.",
      "Implemented Gemini-grounded question answering across templates for investigator inquiries.",
      "Improved entity separation rules using deterministic identifier matching.",
      "Replaced em-dash fallback values with clean 'N/A' to prevent encoding corruptions in Word.",
      "Removed legacy brand mentions and pushed updated code to GitHub."
    ],
    techTags: ["Template Builder", "Grounded Q&A", "Gemini API", "Data Hygiene", "GitHub"],
    notes: "Grounded Q&A allows adjusters to ask 'What was the third party vehicle speed according to the police report?' and receive cited excerpts."
  },
  {
    date: "2026-10-22",
    displayDate: "October 22, 2026",
    week: 3,
    title: "Template 3 and Backend Stability",
    category: "Backend",
    summary: "Developed the Template 3 schema and full Word report builder, fixed undefined Optional references, added graceful fallback for PaddleOCR, installed Celery with worker queue fixes, safely purged claims data while preserving accounts, and implemented sequential section numbering.",
    tasks: [
      "Developed the Template 3 schema and full Word report builder with structured monochrome tables.",
      "Fixed an undefined Optional reference in Pydantic models preventing clean startup.",
      "Added graceful fallback handling for PaddleOCR imports in environments without native C++ wheels.",
      "Installed Celery and resolved background worker queue import errors.",
      "Safely purged corrupted test claims data while strictly preserving user accounts.",
      "Implemented sequential section numbering across all generated report headers."
    ],
    techTags: ["Template 3", "Word Report Builder", "Celery", "PaddleOCR Fallback", "Sequential Numbering"],
    notes: "Template 3 finalized as the formal statutory standard with monochrome tables for court submissions."
  },
  {
    date: "2026-10-23",
    displayDate: "October 23, 2026",
    week: 3,
    title: "Application Cleanup and Manager Workspace",
    category: "Architecture",
    summary: "Removed customer role and customer request queue across frontend and backend, deleted customer routes, removed manual refresh buttons, improved header navigation and whitespace, implemented dynamic manager employee directory with workload info, and verified clean production build.",
    tasks: [
      "Removed the customer role from frontend and backend architectures.",
      "Deleted customer request queue functionality and deprecated customer routes/endpoints.",
      "Removed redundant manual refresh buttons in favor of automated state syncing.",
      "Improved header navigation, whitespace balance, and responsive layout.",
      "Implemented a dynamic manager employee directory with live workload information.",
      "Fixed backend circular imports and verified a clean production build."
    ],
    techTags: ["Architecture Refactoring", "Manager Directory", "Workload Metrics", "Clean Production Build"],
    notes: "Streamlined system scope to internal claim forensics, cutting unnecessary attack surface and legacy queues."
  },

  // WEEK 4
  {
    date: "2026-10-27",
    displayDate: "October 27, 2026",
    week: 4,
    title: "Documentation and Report Polish",
    category: "Reporting",
    summary: "Improved Template 3 structured monochrome tables, added safety disclaimer during AI extraction, completed project README and documentation, fixed dashboard KPI card layout overlap, prepared the AWS Malaysia deployment guide, and added disclaimer related to report regeneration.",
    tasks: [
      "Improved Template 3 structured monochrome tables with exact border widths and padding.",
      "Added a safety disclaimer during AI extraction clarifying the verification mandate.",
      "Completed comprehensive project README, SETUP, and architectural documentation.",
      "Fixed dashboard KPI card layout overlap on medium tablet screens.",
      "Prepared the AWS Malaysia deployment guide with step-by-step infrastructure blueprints.",
      "Added a disclaimer related to report regeneration to inform users of overwrite consequences."
    ],
    techTags: ["Monochrome Tables", "Safety Disclaimer", "Documentation", "AWS Deployment Guide", "UI Polish"],
    notes: "Established strict regulatory disclaimer standards matching PIAM / BNM guidelines."
  },
  {
    date: "2026-10-28",
    displayDate: "October 28, 2026",
    week: 4,
    title: "AWS Environment Setup",
    category: "AWS Cloud",
    summary: "Connected to AWS EC2 instance, cloned the project repository, ran and verified frontend and backend in cloud environment, created a Python virtual environment, audited requirements for cloud readiness, and prepared dependency installation.",
    tasks: [
      "Connected securely to AWS EC2 (Ubuntu 24.04 LTS).",
      "Cloned the project repository into the cloud instance.",
      "Ran and verified frontend and backend services in cloud staging environment.",
      "Created a dedicated Python virtual environment for isolated execution.",
      "Audited requirements.txt and package.json for cloud readiness and missing shared C-libraries.",
      "Prepared system dependency installation (apt-get packages for headless graphics)."
    ],
    techTags: ["AWS EC2", "Ubuntu 24.04", "Virtual Environment", "Cloud Audit", "Git"],
    notes: "Identified need to dockerize FastAPI to prevent environment drift between local Windows and cloud Linux."
  },
  {
    date: "2026-10-29",
    displayDate: "October 29, 2026",
    week: 4,
    title: "AWS Application Deployment",
    category: "AWS Cloud",
    summary: "Deployed React frontend using AWS S3 and CloudFront, deployed FastAPI backend using Docker containers on AWS EC2, configured AWS RDS PostgreSQL, unified API routing through CloudFront with HTTPS, configured S3 claims evidence vault, and fixed background AI report processing with automated status polling.",
    tasks: [
      "Deployed the React frontend using AWS S3 and CloudFront global CDN distribution.",
      "Deployed the FastAPI backend using Docker containers on AWS EC2.",
      "Configured managed AWS RDS PostgreSQL database instance.",
      "Unified API routing through CloudFront HTTPS (path routing /api/v1/* to EC2, /* to S3).",
      "Configured the secure S3 claims evidence vault with private bucket policies.",
      "Fixed background AI report processing and automated status polling (/claims/{id}/ai-status)."
    ],
    techTags: ["AWS S3", "AWS CloudFront", "AWS EC2", "Docker", "AWS RDS PostgreSQL", "HTTPS Unified Routing"],
    notes: "Achieved single-origin HTTPS architecture, completely eliminating cross-origin preflight latency."
  },
  {
    date: "2026-10-30",
    displayDate: "October 30, 2026",
    week: 4,
    title: "Production Hardening and Optimization",
    category: "Security",
    summary: "Fixed progress bar behavior to prevent premature completion, added password visibility toggle, added Register New Claim navigation for managers, addressed Gemini rate limits through prompt batching, secured Gemini API key transmission using HTTP request headers, and deployed updates to AWS production.",
    tasks: [
      "Fixed progress bar behavior to prevent premature completion during heavy AI analysis.",
      "Added interactive password visibility toggle on authentication forms.",
      "Added 'Register New Claim' direct navigation for claims managers.",
      "Addressed Gemini rate limits (429 HTTP errors) through prompt batching and a 5-second process pacer.",
      "Secured Gemini API key transmission using HTTP request headers (x-goog-api-key) instead of URL parameters.",
      "Deployed final verified updates to AWS production cloud."
    ],
    techTags: ["Rate Limit Batching", "API Security (Headers)", "Progress Bar Safeguards", "AWS Production Push"],
    notes: "Production finalized and verified live on AWS infrastructure on October 30, 2026."
  }
];

export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Database & Cache" | "AI & Vision" | "Background Processing" | "Cloud & Deployment" | "Document Processing";
  version: string;
  role: string;
  whyChosen: string;
}

export const techStackData: TechItem[] = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    version: "18.3.1",
    role: "Component-driven declarative user interface architecture",
    whyChosen: "Fast re-rendering, mature ecosystem for forensic tabular data, and seamless state management across complex investigation stages."
  },
  {
    name: "TypeScript",
    category: "Frontend",
    version: "5.5",
    role: "Type safety and strict data contract enforcement",
    whyChosen: "Ensures 27 forensic data models maintain identical typings across frontend forms, API payloads, and database entities."
  },
  {
    name: "Vite",
    category: "Frontend",
    version: "5.4.6",
    role: "Next-generation frontend tooling and build engine",
    whyChosen: "Ultra-fast Hot Module Replacement (HMR) during rapid UI iteration and optimized production asset minification with content hashing."
  },
  {
    name: "Inter & JetBrains Mono",
    category: "Frontend",
    version: "Google Fonts",
    role: "Executive editorial typography & forensic tabular readability",
    whyChosen: "Inter provides clean executive readability; JetBrains Mono ensures zero ambiguity when reading vehicle plates, NRICs, and policy codes."
  },
  {
    name: "Custom CSS Design Tokens",
    category: "Frontend",
    version: "Bespoke System",
    role: "Light theme design tokens, responsive grids, and micro-interactions",
    whyChosen: "Bespoke styling avoids bloated utility overrides while matching the refined aesthetics of Linear, Stripe, and Apple presentation standards."
  },

  // Backend
  {
    name: "FastAPI",
    category: "Backend",
    version: "0.111.0",
    role: "High-throughput asynchronous REST API framework",
    whyChosen: "Native async/await support for non-blocking I/O during heavy multimodal AI streaming and automatic OpenAPI schema documentation."
  },
  {
    name: "Python",
    category: "Backend",
    version: "3.11 / 3.14",
    role: "Core server programming language",
    whyChosen: "Rich ecosystem for multimodal AI SDKs, document manipulation libraries, and forensic data parsing."
  },
  {
    name: "Pydantic v2",
    category: "Backend",
    version: "2.8.2",
    role: "Data validation and runtime schema serialization",
    whyChosen: "Rust-powered core delivers 5x faster data parsing with strict validation against corrupt or incomplete claim payloads."
  },
  {
    name: "SQLAlchemy & Alembic",
    category: "Backend",
    version: "2.0.31",
    role: "Object-Relational Mapping (ORM) and schema version control",
    whyChosen: "Robust connection pooling and transactional integrity for multi-tenant relational data models."
  },
  {
    name: "JWT Authentication",
    category: "Backend",
    version: "HS256",
    role: "Stateless role-based access control (RBAC)",
    whyChosen: "Cryptographically signs investigator and manager sessions without requiring session storage bottlenecks."
  },

  // Database & Cache
  {
    name: "AWS RDS PostgreSQL",
    category: "Database & Cache",
    version: "15.7",
    role: "Primary relational cloud database",
    whyChosen: "Enterprise ACID compliance, multi-AZ reliability, automated snapshots, and native JSONB indexing for flexible evidence schemas."
  },
  {
    name: "Redis",
    category: "Database & Cache",
    version: "7.2",
    role: "In-memory message broker & cache",
    whyChosen: "Ultra-low latency message broker facilitating task queuing between FastAPI and asynchronous Celery workers."
  },

  // AI & Vision
  {
    name: "Google Gemini Multimodal API",
    category: "AI & Vision",
    version: "gemini-3.5-flash-lite / 3.8-flash",
    role: "Forensic document extraction & computer vision analysis",
    whyChosen: "Native multimodal understanding parses raw multi-page PDF buffers, scanned handwriting, and crash photos in a single contextual pass."
  },
  {
    name: "Anchor Ground-Truth Algorithm",
    category: "AI & Vision",
    version: "Custom Algorithmic Engine",
    role: "Entity disambiguation (Insured vs Third-Party separation)",
    whyChosen: "Eliminates LLM entity hallucinations in multi-car pileups by anchoring policyholder facts before prompt synthesis."
  },
  {
    name: "Local Ollama Fallback",
    category: "AI & Vision",
    version: "0.3.x",
    role: "Air-gapped and offline processing resilience",
    whyChosen: "Provides local inference backup when external cloud connectivity is restricted or for sensitive on-premise review."
  },

  // Background Processing
  {
    name: "Celery",
    category: "Background Processing",
    version: "5.4.0",
    role: "Distributed asynchronous task queue",
    whyChosen: "Offloads 30-60 second AI extraction jobs from the web thread, preventing browser timeouts and worker blocking."
  },

  // Cloud & Deployment
  {
    name: "AWS EC2",
    category: "Cloud & Deployment",
    version: "Ubuntu 24.04 LTS",
    role: "Cloud compute host for Dockerized microservices",
    whyChosen: "Cost-effective, reliable compute instance hosting containerized FastAPI and Celery workers behind a reverse proxy."
  },
  {
    name: "Docker & Docker Compose",
    category: "Cloud & Deployment",
    version: "26.1",
    role: "Containerized deployment and microservice isolation",
    whyChosen: "Guarantees identical runtime environments between local development and AWS production, resolving C-library discrepancies."
  },
  {
    name: "AWS S3",
    category: "Cloud & Deployment",
    version: "Cloud Object Storage",
    role: "Frontend hosting & private claims evidence vault",
    whyChosen: "11 9s of data durability with private bucket encryption for sensitive PII, police records, and crash scene media."
  },
  {
    name: "AWS CloudFront",
    category: "Cloud & Deployment",
    version: "Global CDN",
    role: "Single-origin HTTPS routing & edge asset distribution",
    whyChosen: "Unifies frontend S3 assets and backend EC2 APIs under one domain, eliminating CORS preflight roundtrips."
  },

  // Document Processing
  {
    name: "python-docx",
    category: "Document Processing",
    version: "1.1.2",
    role: "Statutory Microsoft Word (.docx) report generation",
    whyChosen: "Programmatically generates pixel-perfect monochrome tables, section headers, and photo exhibits adhering to PIAM legal standards."
  },
  {
    name: "PyMuPDF & PaddleOCR Fallback",
    category: "Document Processing",
    version: "1.24.x",
    role: "Local PDF text extraction and fallback OCR handling",
    whyChosen: "Fast local PDF parsing with graceful error handling if OCR binary modules are unavailable."
  }
];

export interface TechnicalChallenge {
  id: string;
  title: string;
  category: string;
  problem: string;
  rootCause: string;
  solution: string;
  impact: string;
}

export const technicalChallenges: TechnicalChallenge[] = [
  {
    id: "ai-rate-limits",
    title: "Gemini API Rate Limits (429 & 15 RPM Quota)",
    category: "AI & Multimodal Scaling",
    problem: "Generating a comprehensive 17-section investigation report by firing individual prompts for each section instantly exceeded Google's Free Tier quota of 15 Requests Per Minute, triggering HTTP 429 'RESOURCE_EXHAUSTED' errors.",
    rootCause: "Naive prompt loops fired 20+ sequential requests within 10 seconds, blowing through rate limits.",
    solution: "Engineered a two-pronged solution: 1) Smart Process-Level Pacer enforcing a 5.0-second delay between outgoing calls across all threads, and 2) Prompt Batching grouping up to 25 section questions into a single structured prompt, slashing calls per report from 20+ down to just 1–2.",
    impact: "90% reduction in total API requests; zero 429 exceptions during stress testing."
  },
  {
    id: "worker-desync",
    title: "Asynchronous Worker State Desynchronization & Deadlocks",
    category: "Background Tasks & Concurrency",
    problem: "When processing large claims with 10+ evidence files taking 30–60 seconds, worker restarts or network hiccups left claims trapped in an indefinite 'PROCESSING' state, locking investigators out of the dossier.",
    rootCause: "Unmonitored background tasks lacked state transition timeouts and atomic error rollbacks.",
    solution: "Architected a robust finite state machine with atomic status transitions (PENDING → EXTRACTING → AI_GENERATED_DRAFT → COMPLETED or FAILED with error context). Implemented an AI Status API (/claims/{id}/ai-status) with failure timeouts allowing safe user retry.",
    impact: "100% self-healing workflow with zero orphaned 'frozen' claims in production."
  },
  {
    id: "report-synthesis",
    title: "Dynamic Multi-Template Report Generation",
    category: "Reporting & Document Synthesis",
    problem: "Different insurers and statutory bodies required three completely distinct report formats (standard motor, commercial fleet, and formal court submission), but hardcoded schemas caused template switching to corrupt stored claim data.",
    rootCause: "Coupling template presentation logic directly to underlying database entities.",
    solution: "Decoupled the 27 core forensic entities from report presentation. Developed dynamic template-specific UI builders and structured Word report builders (Template 1, 2, and 3) with monochrome tables, sequential numbering, and dynamic car/motorcycle adaptations.",
    impact: "Seamless switching between all 3 formal templates with instantaneous DOCX generation."
  },
  {
    id: "entity-confusion",
    title: "AI Hallucinations & Entity Confusion in Multi-Vehicle Crashes",
    category: "AI Forensics & Prompt Engineering",
    problem: "In complex accidents involving multiple cars, commercial trucks, and pedestrians, generic LLMs frequently assigned the adverse third-party's license plate or driver name to the insured policyholder.",
    rootCause: "Lack of deterministic grounding context in unstructured multimodal prompts.",
    solution: "Formulated the 'Anchor Ground-Truth' algorithm: Before prompting the AI, the backend extracts known primary identifiers (Policyholder, Authorized Driver, Vehicle Reg, Adverse Party) and injects strict disambiguation rules explicitly forbidding the model from reassigning third-party details.",
    impact: "Zero entity confusion errors across all verified test cases and live accident reviews."
  },
  {
    id: "image-slot-overlap",
    title: "Multi-Image Preview Overlap and Layout Breakage",
    category: "Frontend UI & Asset Ingestion",
    problem: "When investigators uploaded multiple high-resolution crash photographs concurrently, rendering slots overlapped, distorting preview aspect ratios and triggering browser layout shifts.",
    rootCause: "Dynamic DOM insertion without pre-allocated CSS aspect ratios and image classification tags.",
    solution: "Engineered an AI vision pre-processor to classify photos vs documents, implemented strict CSS aspect-ratio tokens, pre-calculated display slots, and eliminated layout shifts with responsive grid containers.",
    impact: "Smooth multi-photo grid supporting 15+ concurrent photos with instant zoom and zero layout shift."
  },
  {
    id: "single-origin-cors",
    title: "Reverse Proxy CORS Issues & Cloud Deployment",
    category: "Cloud Infrastructure & Networking",
    problem: "Browsers blocked frontend API calls with CORS preflight errors (OPTIONS 405/403) because the React frontend ran on an S3 static bucket while the backend ran on an EC2 instance with distinct ports.",
    rootCause: "Cross-origin requests between distinct cloud domains requiring expensive preflight handshakes.",
    solution: "Configured AWS CloudFront multi-origin routing: Path pattern '/api/v1/*' routes directly to the EC2 backend origin, while '/*' routes to the S3 frontend origin under a single unified HTTPS domain (https://*.cloudfront.net).",
    impact: "Zero CORS preflight requests; reduced network latency and simplified SSL certificate management."
  },
  {
    id: "api-key-security",
    title: "Security Hardening — Removing API Keys from URLs",
    category: "Security & Compliance",
    problem: "Default Gemini API examples suggest appending '?key=YOUR_KEY' to URL query strings, exposing confidential API keys in proxy server access logs, network monitors, and browser history.",
    rootCause: "Insecure credential transmission in HTTP query parameters.",
    solution: "Refactored the entire Gemini REST provider in FastAPI to authenticate strictly via Google's official 'x-goog-api-key' HTTP request header, completely masking credentials from logs.",
    impact: "Compliance with enterprise security standards and zero credential exposure in cloud traces."
  },
  {
    id: "progress-tracking",
    title: "Progress Tracking Reliability & Premature Completion",
    category: "User Experience & Polling",
    problem: "Frontend progress bars frequently jumped to 100% complete while background Celery workers were still processing heavy multi-page documents, misleading investigators into viewing incomplete dossiers.",
    rootCause: "Client-side timer extrapolation rather than synchronized server-side state reporting.",
    solution: "Implemented synchronized server-sent milestone polling (/claims/{id}/ai-status) with milestone-locked increments (15% Ingested → 45% Vision Analyzed → 75% Extraction Completed → 100% Report Assembled).",
    impact: "Accurate, trustworthy progress tracking preventing premature dossier reviews."
  }
];

export interface AwsDeploymentStep {
  step: number;
  title: string;
  service: string;
  description: string;
  commandSnippet: string;
  securityNote: string;
}

export const awsDeploymentSteps: AwsDeploymentStep[] = [
  {
    step: 1,
    title: "AWS EC2 Ubuntu Setup & Docker Containerization",
    service: "AWS EC2 (Ubuntu 24.04 LTS)",
    description: "Configured secure SSH connection, cloned the production repository, created a Python 3.11/3.14 virtual environment, and built isolated Docker containers for FastAPI and Celery workers to prevent Linux C-library compilation failures.",
    commandSnippet: "docker-compose -f docker/docker-compose.prod.yml up -d --build",
    securityNote: "EC2 security groups restrict inbound traffic strictly to CloudFront IP ranges on port 8000."
  },
  {
    step: 2,
    title: "AWS S3 Frontend Hosting & Private Claims Vault",
    service: "AWS S3 (Dual Buckets)",
    description: "Configured two isolated S3 buckets: 'insurance-frontend-app' for hosting minified React SPA static assets, and 'insurance-claims-vault' for private, encrypted storage of sensitive claim PDFs, police reports, and crash photos.",
    commandSnippet: "aws s3 sync ./dist s3://insurance-frontend-app --delete --cache-control 'no-cache'",
    securityNote: "Claims vault bucket is private with Block Public Access enabled; files accessed strictly via signed backend JWT tokens."
  },
  {
    step: 3,
    title: "AWS CloudFront CDN & Unified HTTPS Routing",
    service: "AWS CloudFront",
    description: "Configured a global CloudFront distribution with multi-origin routing rules. Serves frontend assets from S3 with edge caching while reverse-proxying '/api/v1/*' endpoints to the EC2 Docker container under a single SSL certificate.",
    commandSnippet: "PathPattern: /api/v1/* -> Origin: EC2-Backend | Default (*) -> Origin: S3-Frontend",
    securityNote: "Enforces TLS 1.3 encryption across all client-to-CDN and CDN-to-origin connections."
  },
  {
    step: 4,
    title: "AWS RDS PostgreSQL Cloud Database Migration",
    service: "AWS RDS PostgreSQL (v15.7)",
    description: "Migrated local SQLite database to AWS RDS PostgreSQL. Resolved UUID type discrepancies between SQLite text and native Postgres UUIDs, executed Alembic migrations, and established automated daily snapshots.",
    commandSnippet: "alembic upgrade head && python scripts/seed_production.py",
    securityNote: "Database resides inside private VPC subnets with zero public IP exposure."
  },
  {
    step: 5,
    title: "Background Processing & Production Verification",
    service: "Redis + Celery on EC2",
    description: "Spun up Redis message broker and Celery worker instances inside Docker, verified automated status polling, tested multi-page PDF extraction runs, and validated production monitoring.",
    commandSnippet: "celery -A backend.workers.celery_app worker --loglevel=info --concurrency=4",
    securityNote: "Redis password authenticated and bound strictly to localhost inside the Docker bridge network."
  }
];

export interface MockClaimData {
  claimId: string;
  policyNumber: string;
  incidentDate: string;
  incidentLocation: string;
  status: string;
  riskScore: string;
  insuredParty: {
    name: string;
    nric: string;
    vehiclePlate: string;
    vehicleMake: string;
    driverName: string;
    driverRelationship: string;
  };
  thirdParty: {
    name: string;
    nric: string;
    vehiclePlate: string;
    vehicleMake: string;
    driverName: string;
    damageDescription: string;
  };
  policeReport: {
    station: string;
    reportNo: string;
    officerName: string;
    roadActSection: string;
    summary: string;
  };
  questionsSample: {
    qId: number;
    questionEn: string;
    questionBm: string;
    answer: string;
  }[];
}

export const sampleClaimData: MockClaimData = {
  claimId: "MY-2026-KL-0914",
  policyNumber: "POL-OS2-8839210-M",
  incidentDate: "14 October 2026, 08:45 AM",
  incidentLocation: "Jalan Tun Razak intersection heading towards Ampang, Kuala Lumpur",
  status: "AI Generated Draft • Verification Pending",
  riskScore: "LOW RISK (92% Confidence)",
  insuredParty: {
    name: "Dato' Azman bin Hashim",
    nric: "780412-14-5591",
    vehiclePlate: "VKG 8821",
    vehicleMake: "Proton X70 1.8 TGDi Premium",
    driverName: "Dato' Azman bin Hashim (Insured Self)",
    driverRelationship: "Policyholder (Self-Driven)"
  },
  thirdParty: {
    name: "Tan Chee Keong",
    nric: "891103-10-5843",
    vehiclePlate: "WVP 3902",
    vehicleMake: "Honda Civic 1.5 VTEC Turbo",
    driverName: "Tan Chee Keong",
    damageDescription: "Right rear quarter panel deformation and rear bumper detachment"
  },
  policeReport: {
    station: "Balai Polis Trafik Jalan Tun H.S. Lee, Kuala Lumpur",
    reportNo: "TRAFIK/KL/1842/26",
    officerName: "Insp. Shahril bin Ramli",
    roadActSection: "Seksyen 43(1) Akta Pengangkutan Jalan 1987",
    summary: "Investigation indicates Vehicle B (WVP 3902) made an abrupt right-lane change without signaling, resulting in collision with Vehicle A (VKG 8821) traveling straight in the designated lane."
  },
  questionsSample: [
    {
      qId: 1,
      questionEn: "What was the weather condition and visibility at the time of the collision?",
      questionBm: "Apakah keadaan cuaca dan tahap penglihatan pada masa perlanggaran berlaku?",
      answer: "Clear morning daylight, dry road surface, visibility uncompromised."
    },
    {
      qId: 2,
      questionEn: "Were you traveling within the statutory speed limit prior to impact?",
      questionBm: "Adakah anda memandu dalam had laju yang dibenarkan sebelum perlanggaran?",
      answer: "Yes, estimated speed was 45-50 km/h in a 60 km/h metropolitan artery."
    },
    {
      qId: 3,
      questionEn: "Did the adverse party provide an indicator signal before executing lane change?",
      questionBm: "Adakah pihak lawan memberikan lampu isyarat sebelum menukar lorong?",
      answer: "No indicator signal was observed prior to the sudden lateral intrusion."
    }
  ]
};
