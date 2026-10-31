import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Cloud, 
  TrendingUp,
  Clock
} from 'lucide-react';
import './WeeklyReport.css';

export const WeeklyReport: React.FC = () => {
  const [activeWeekTab, setActiveWeekTab] = useState<number>(1);

  const weeklyReports = [
    {
      week: 1,
      period: "October 6 – October 9, 2026",
      headline: "Foundation, Schema Architecture & Secure Authentication",
      objective: "Researched insurance forensic requirements, engineered the multi-tenant relational schema, implemented JWT authentication, and explored multimodal AI integration.",
      hoursLogged: "42 Hours Dedicated",
      primaryDeliverables: [
        "Architected multi-tenant database schema across 27 relational entities (Companies, Users, Claims, Documents, Reports, Audit Logs).",
        "Engineered JWT-based stateless authentication supporting role-based access control (RBAC for Investigators and Claims Managers).",
        "Built responsive authentication screens with interactive password visibility toggles and field validation.",
        "Benchmarked local Ollama AI models vs Google Gemini Multimodal API on scanned handwritten police reports.",
        "Replaced early placeholder mock responses with programmatic, code-based extraction endpoints."
      ],
      impact: "Established the type-safe foundations and data boundaries, enabling rapid feature delivery in subsequent weeks.",
      techUsed: ["FastAPI", "Python 3.11/3.14", "SQLAlchemy", "JWT (HS256)", "React 18", "Pydantic v2"]
    },
    {
      week: 2,
      period: "October 12 – October 16, 2026",
      headline: "AI Computer Vision, 38 Statement Matrix & Workspace Workflows",
      objective: "Delivered computer vision image classification, built the 38-question bilingual driver statement matrix, and engineered animated extraction safeguards.",
      hoursLogged: "48 Hours Dedicated",
      primaryDeliverables: [
        "Implemented AI vision pipeline separating crash scene damage photos from scanned paperwork to prevent layout distortion.",
        "Fixed image fitting and aspect-ratio cropping in evidence previewers with pre-calculated slot geometry.",
        "Standardized 38 bilingual driver statement questions (English & Bahasa Malaysia) with automated Gemini draft generation.",
        "Built inline question and answer editing with instant API auto-save and support for situational custom question injection.",
        "Engineered an animated AI extraction progress bar with live milestone feedback and completion safeguards.",
        "Developed the Approval Pending workspace and automated clearance lifecycle, replacing ambiguous review stages."
      ],
      impact: "Transformed manual 4-8 hour evidence parsing into a sub-minute automated forensic extraction dossier.",
      techUsed: ["Gemini Multimodal", "Pillow (PIL)", "React State Machine", "Bilingual Lexicon", "CSS Aspect-Ratio"]
    },
    {
      week: 3,
      period: "October 20 – October 23, 2026",
      headline: "Dynamic Multi-Template Builders, Ground-Truth Disambiguation & Celery",
      objective: "Solved entity confusion in multi-vehicle crashes, developed 3 distinct statutory report builders, and installed background Celery workers.",
      hoursLogged: "50 Hours Dedicated",
      primaryDeliverables: [
        "Formulated the 'Anchor Ground-Truth' algorithm to strictly separate insured policyholders from third-party vehicles and drivers.",
        "Developed Template 1 and Template 2 dynamic UI and structured report builders with car/motorcycle adaptations.",
        "Developed Template 3 statutory schema and full Microsoft Word (.docx) report builder with monochrome tables.",
        "Implemented Gemini-grounded question answering allowing adjusters to query evidence with cited excerpts.",
        "Installed Celery and Redis message broker, refactoring long-running AI tasks out of the main HTTP thread.",
        "Engineered the dynamic manager employee directory displaying live adjuster workload capacity."
      ],
      impact: "Eliminated entity hallucinations and provided publication-ready Word documents adhering to statutory insurance standards.",
      techUsed: ["python-docx", "Celery 5.4", "Redis 7", "Anchor Ground-Truth", "FastAPI Workers"]
    },
    {
      week: 4,
      period: "October 27 – October 30, 2026",
      headline: "AWS Cloud Production Deployment & Performance Hardening",
      objective: "Migrated the entire stack to AWS cloud production (EC2, S3, RDS, CloudFront), solved API rate limits, and secured credentials.",
      hoursLogged: "52 Hours Dedicated",
      primaryDeliverables: [
        "Dockerized the FastAPI backend and Celery workers for clean execution on AWS EC2 (Ubuntu 24.04 LTS).",
        "Deployed React frontend to AWS S3 and configured AWS CloudFront global CDN distribution.",
        "Migrated relational database to AWS RDS PostgreSQL (v15.7) with automated snapshots in private VPC subnets.",
        "Configured CloudFront multi-origin routing (/* to S3, /api/v1/* to EC2), creating single-origin HTTPS and eliminating CORS preflights.",
        "Configured encrypted private S3 claims evidence vault with short-lived JWT streaming proxy tokens.",
        "Solved Gemini 429 rate limits using a 5.0-second process-level pacer and prompt batching (slashing calls per report by 90%).",
        "Hardened API security by moving credentials from URL query parameters strictly to 'x-goog-api-key' request headers."
      ],
      impact: "Achieved 100% cloud-native production deployment with enterprise zero-credential-leak security standards.",
      techUsed: ["AWS EC2", "Docker", "AWS S3", "AWS CloudFront", "AWS RDS PostgreSQL", "TLS 1.3"]
    }
  ];

  const currentReport = weeklyReports[activeWeekTab - 1];

  return (
    <section id="weekly-report" className="section weekly-report-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <TrendingUp size={13} />
            <span>Executive Progress Report</span>
          </div>
          <h2 className="section-title">
            Month-Long Engineering Contribution & Deliverables
          </h2>
          <p className="section-description">
            A comprehensive executive breakdown of what I architected, coded, debugged, and deployed across each week of October 2026 as a Junior Full Stack Developer.
          </p>
        </div>

        {/* Quick Month-Long Achievements Matrix */}
        <div className="monthly-highlights-row">
          <div className="monthly-hl-card card">
            <Clock size={20} className="hl-icon hl-icon-amber" />
            <div className="hl-text-block">
              <span className="hl-val">192+ Hours</span>
              <span className="hl-lbl">Total Engineering Effort</span>
              <span className="hl-sub">17 Documented Milestones</span>
            </div>
          </div>

          <div className="monthly-hl-card card">
            <Layers size={20} className="hl-icon hl-icon-blue" />
            <div className="hl-text-block">
              <span className="hl-val">27 Models</span>
              <span className="hl-lbl">Relational Schema</span>
              <span className="hl-sub">PostgreSQL ACID Architecture</span>
            </div>
          </div>

          <div className="monthly-hl-card card">
            <Sparkles size={20} className="hl-icon hl-icon-purple" />
            <div className="hl-text-block">
              <span className="hl-val">90% Fewer Calls</span>
              <span className="hl-lbl">Prompt Batching Optimization</span>
              <span className="hl-sub">Resolved 429 Rate Limits</span>
            </div>
          </div>

          <div className="monthly-hl-card card">
            <Cloud size={20} className="hl-icon hl-icon-green" />
            <div className="hl-text-block">
              <span className="hl-val">100% AWS Cloud</span>
              <span className="hl-lbl">Production Infrastructure</span>
              <span className="hl-sub">EC2 + S3 + RDS + CloudFront</span>
            </div>
          </div>
        </div>

        {/* Weekly Report Tab Controller */}
        <div className="weekly-report-card card">
          {/* Week Selector Bar */}
          <div className="weekly-tab-selector">
            {weeklyReports.map((r) => {
              const isActive = activeWeekTab === r.week;
              return (
                <button
                  key={r.week}
                  onClick={() => setActiveWeekTab(r.week)}
                  className={`week-tab-btn ${isActive ? 'week-tab-active' : ''}`}
                >
                  <span className="w-tab-idx">WEEK 0{r.week}</span>
                  <span className="w-tab-period font-mono">{r.period.split(',')[0]}</span>
                  {isActive && <div className="w-tab-indicator" />}
                </button>
              );
            })}
          </div>

          {/* Active Weekly Report Viewport */}
          <div key={currentReport.week} className="weekly-report-body animate-tab-fade">
            <div className="report-body-header">
              <div className="report-header-left">
                <div className="report-badge-line">
                  <span className="badge badge-primary">Week {currentReport.week} Executive Brief</span>
                  <span className="badge badge-accent font-mono">{currentReport.period}</span>
                </div>
                <h3 className="report-headline">{currentReport.headline}</h3>
                <p className="report-objective">{currentReport.objective}</p>
              </div>

              <div className="report-effort-box">
                <span className="effort-lbl">My Logged Effort:</span>
                <span className="effort-val font-mono">{currentReport.hoursLogged}</span>
              </div>
            </div>

            {/* Itemized Deliverables List */}
            <div className="report-deliverables-box">
              <span className="deliverables-heading">What I Implemented & Shipped:</span>
              <ul className="deliverables-list">
                {currentReport.primaryDeliverables.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="text-success deliv-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategic Business & Engineering Impact */}
            <div className="report-impact-callout">
              <ShieldCheck size={18} className="text-primary" />
              <div className="impact-text-group">
                <strong>Demonstrated Engineering Impact:</strong>
                <span> {currentReport.impact}</span>
              </div>
            </div>

            {/* Technologies Handled This Week */}
            <div className="report-tech-bar">
              <span className="report-tech-lbl">Technologies & Modules Mastered:</span>
              <div className="report-tech-pills">
                {currentReport.techUsed.map((t, idx) => (
                  <span key={idx} className="badge badge-neutral font-mono">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
