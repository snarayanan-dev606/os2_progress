import React, { useState } from 'react';
import { 
  ShieldAlert, 
  FileCheck2, 
  ArrowRight, 
  Calendar, 
  Sparkles, 
  Car, 
  FileText, 
  Camera, 
  Cpu, 
  Download,
  Check,
  TrendingUp
} from 'lucide-react';
import { heroMetrics, sampleClaimData } from '../data/projectData';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
  const [activePreviewTab, setActivePreviewTab] = useState<'forensics' | 'vision' | 'questions' | 'report'>('forensics');
  const [copiedNotification, setCopiedNotification] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSimulateExport = () => {
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background-effects">
        <div className="hero-radial-glow hero-radial-1" />
        <div className="hero-radial-glow hero-radial-2" />
      </div>

      <div className="container hero-container">
        {/* Personal Credential Badges */}
        <div className="hero-badge-group">
          <div className="hero-badge hero-badge-period">
            <Calendar size={13} />
            <span>Period: October 2026 (Full Month Effort)</span>
          </div>
          <div className="hero-badge hero-badge-role">
            <span>Role: Junior Full Stack Developer</span>
          </div>
        </div>

        {/* Hero Title and Subtitle */}
        <div className="hero-text-content">
          <h1 className="hero-main-title">
            My Engineering Journey: Architecting & Shipping the Insurance AI System
          </h1>
          <p className="hero-subtitle">
            A comprehensive showcase of my personal engineering effort, full-stack architecture, multimodal AI integration, and AWS cloud deployment on the AI-Powered Motor Insurance Claims Investigation & Fraud Detection System.
          </p>
        </div>

        {/* Hero Action Buttons */}
        <div className="hero-actions-row">
          <button 
            onClick={() => scrollTo('weekly-report')}
            className="btn btn-primary btn-lg hero-primary-btn"
          >
            <TrendingUp size={18} />
            <span>View Weekly Report (Main Focus)</span>
            <ArrowRight size={18} />
          </button>
          <button 
            onClick={() => scrollTo('timeline')}
            className="btn btn-secondary btn-lg hero-secondary-btn"
          >
            <Calendar size={18} />
            <span>Inspect October Journey</span>
          </button>
          <button 
            onClick={() => scrollTo('aws-deployment')}
            className="btn btn-ghost btn-lg hero-ghost-btn"
          >
            <Cpu size={18} />
            <span>AWS Production Setup</span>
          </button>
        </div>

        {/* Hero Key Metrics Cards */}
        <div className="hero-metrics-grid">
          {heroMetrics.map((metric) => (
            <div key={metric.id} className="hero-metric-card card">
              <div className="metric-val font-mono">{metric.value}</div>
              <div className="metric-lbl">{metric.label}</div>
              <div className="metric-sub">{metric.subtext}</div>
            </div>
          ))}
        </div>

        {/* Conceptual Product Experience Mockup */}
        <div className="hero-preview-canvas card">
          <div className="preview-canvas-header">
            <div className="preview-canvas-badge">
              <span className="status-dot status-dot-active" />
              <span>Interactive System Console Preview (What I Built)</span>
            </div>
            <div className="preview-case-indicator">
              <span className="case-label">Docket Ref:</span>
              <code className="case-id">{sampleClaimData.claimId}</code>
              <span className="badge badge-success">{sampleClaimData.riskScore}</span>
            </div>
          </div>

          {/* Console Navigation Tabs */}
          <div className="preview-tabs-bar">
            <button
              onClick={() => setActivePreviewTab('forensics')}
              className={`preview-tab-btn ${activePreviewTab === 'forensics' ? 'preview-tab-active' : ''}`}
            >
              <Car size={15} />
              <span>Entity Disambiguation</span>
            </button>
            <button
              onClick={() => setActivePreviewTab('vision')}
              className={`preview-tab-btn ${activePreviewTab === 'vision' ? 'preview-tab-active' : ''}`}
            >
              <Camera size={15} />
              <span>AI Vision Evidence</span>
            </button>
            <button
              onClick={() => setActivePreviewTab('questions')}
              className={`preview-tab-btn ${activePreviewTab === 'questions' ? 'preview-tab-active' : ''}`}
            >
              <FileCheck2 size={15} />
              <span>38 Statement Matrix</span>
            </button>
            <button
              onClick={() => setActivePreviewTab('report')}
              className={`preview-tab-btn ${activePreviewTab === 'report' ? 'preview-tab-active' : ''}`}
            >
              <FileText size={15} />
              <span>Statutory Reports</span>
            </button>
          </div>

          {/* Interactive Screen Preview Container */}
          <div className="preview-viewport">
            {activePreviewTab === 'forensics' && (
              <div className="preview-panel preview-fade-in">
                <div className="panel-banner-alert">
                  <div className="alert-icon-box">
                    <Sparkles size={16} />
                  </div>
                  <div className="alert-text-block">
                    <strong>My Anchor Ground-Truth Extraction Implementation:</strong>
                    <span> Policyholder details strictly separated from adverse third-party vehicle. Zero entity hallucinations across 10 multi-page evidence documents.</span>
                  </div>
                </div>

                <div className="forensic-parties-grid">
                  {/* Party A: Insured */}
                  <div className="party-card party-insured">
                    <div className="party-card-header">
                      <span className="party-pill party-pill-insured">Party A • Insured Policyholder</span>
                      <span className="party-reg">{sampleClaimData.insuredParty.vehiclePlate}</span>
                    </div>
                    <div className="party-details-list">
                      <div className="party-detail-row">
                        <span className="detail-key">Policyholder</span>
                        <span className="detail-val">{sampleClaimData.insuredParty.name}</span>
                      </div>
                      <div className="party-detail-row">
                        <span className="detail-key">NRIC / Identification</span>
                        <span className="detail-val font-mono">{sampleClaimData.insuredParty.nric}</span>
                      </div>
                      <div className="party-detail-row">
                        <span className="detail-key">Insured Vehicle</span>
                        <span className="detail-val">{sampleClaimData.insuredParty.vehicleMake}</span>
                      </div>
                      <div className="party-detail-row">
                        <span className="detail-key">Driver Status</span>
                        <span className="detail-val">{sampleClaimData.insuredParty.driverRelationship}</span>
                      </div>
                    </div>
                  </div>

                  {/* Party B: Third Party */}
                  <div className="party-card party-third">
                    <div className="party-card-header">
                      <span className="party-pill party-pill-third">Party B • Adverse Third-Party</span>
                      <span className="party-reg">{sampleClaimData.thirdParty.vehiclePlate}</span>
                    </div>
                    <div className="party-details-list">
                      <div className="party-detail-row">
                        <span className="detail-key">Third-Party Driver</span>
                        <span className="detail-val">{sampleClaimData.thirdParty.name}</span>
                      </div>
                      <div className="party-detail-row">
                        <span className="detail-key">NRIC / Identification</span>
                        <span className="detail-val font-mono">{sampleClaimData.thirdParty.nric}</span>
                      </div>
                      <div className="party-detail-row">
                        <span className="detail-key">Third-Party Vehicle</span>
                        <span className="detail-val">{sampleClaimData.thirdParty.vehicleMake}</span>
                      </div>
                      <div className="party-detail-row">
                        <span className="detail-key">Observed Damage</span>
                        <span className="detail-val text-muted">{sampleClaimData.thirdParty.damageDescription}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Police Report Findings */}
                <div className="police-summary-card">
                  <div className="police-card-header">
                    <div className="police-station-info">
                      <ShieldAlert size={16} className="text-primary" />
                      <strong>Official Police Report Findings: {sampleClaimData.policeReport.reportNo}</strong>
                    </div>
                    <span className="badge badge-info">{sampleClaimData.policeReport.roadActSection}</span>
                  </div>
                  <p className="police-summary-text">
                    {sampleClaimData.policeReport.summary}
                  </p>
                  <div className="police-meta-footer">
                    <span>Investigating Officer: {sampleClaimData.policeReport.officerName}</span>
                    <span>Station: {sampleClaimData.policeReport.station}</span>
                  </div>
                </div>
              </div>
            )}

            {activePreviewTab === 'vision' && (
              <div className="preview-panel preview-fade-in">
                <div className="vision-header-bar">
                  <div className="vision-title-group">
                    <h4>Computer Vision Classification & Slot Fitting</h4>
                    <p>Engineered AI vision to automatically segregate crash photos from paper documents, preventing UI overlap and distortion.</p>
                  </div>
                  <span className="badge badge-primary">6 Multi-Image Slots Verified</span>
                </div>

                <div className="vision-cards-grid">
                  <div className="vision-card">
                    <div className="vision-card-media vision-crash-1">
                      <div className="vision-tag-badge">Crash Scene • Frontal Impact</div>
                    </div>
                    <div className="vision-meta">
                      <span className="vision-meta-title">Proton X70 Offside Damage</span>
                      <span className="vision-meta-conf">Confidence: 96.4% • Clean Aspect Ratio</span>
                    </div>
                  </div>

                  <div className="vision-card">
                    <div className="vision-card-media vision-crash-2">
                      <div className="vision-tag-badge">Adverse Vehicle • Rear Panel</div>
                    </div>
                    <div className="vision-meta">
                      <span className="vision-meta-title">Honda Civic Quarter Panel</span>
                      <span className="vision-meta-conf">Confidence: 94.8% • Damage Height Match</span>
                    </div>
                  </div>

                  <div className="vision-card">
                    <div className="vision-card-media vision-doc">
                      <div className="vision-tag-badge">Scanned Document • Police Stamp</div>
                    </div>
                    <div className="vision-meta">
                      <span className="vision-meta-title">TRAFIK/KL/1842/26 (3 Pages)</span>
                      <span className="vision-meta-conf">Base64 Multimodal Stream • 0 Locks</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activePreviewTab === 'questions' && (
              <div className="preview-panel preview-fade-in">
                <div className="questions-header-bar">
                  <div>
                    <h4>38 Standardized Bilingual Driver Statement Matrix</h4>
                    <p>Standardized question bank with automated Gemini AI draft answers and custom question injection.</p>
                  </div>
                  <span className="badge badge-success">Auto-Saved to Claims Dossier</span>
                </div>

                <div className="questions-stream-list">
                  {sampleClaimData.questionsSample.map((q) => (
                    <div key={q.qId} className="question-item-card">
                      <div className="q-badge-num">Q{q.qId}</div>
                      <div className="q-content-body">
                        <div className="q-text-en">{q.questionEn}</div>
                        <div className="q-text-bm">{q.questionBm}</div>
                        <div className="q-answer-box">
                          <div className="q-answer-tag">
                            <Sparkles size={12} />
                            <span>Gemini AI Draft Answer</span>
                          </div>
                          <p className="q-answer-text">{q.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activePreviewTab === 'report' && (
              <div className="preview-panel preview-fade-in">
                <div className="report-preview-grid">
                  <div className="report-selector-col">
                    <span className="col-subheading">Select Report Template Specification:</span>
                    <div className="template-cards-list">
                      <div className="template-item-card template-active">
                        <div className="t-name">Template 3: Structured Court Format</div>
                        <div className="t-desc">Monochrome tables, sequential numbering, statutory PIAM/PDRM disclaimers.</div>
                        <span className="badge badge-primary">Recommended for Motor TPBI</span>
                      </div>
                      <div className="template-item-card">
                        <div className="t-name">Template 1: Standard Motor Claims</div>
                        <div className="t-desc">Dynamic UI and structured report builder for comprehensive motor damage.</div>
                      </div>
                      <div className="template-item-card">
                        <div className="t-name">Template 2: Commercial Fleet Incident</div>
                        <div className="t-desc">Specialized transport rules, cargo inspection notes, and fleet policy tables.</div>
                      </div>
                    </div>
                  </div>

                  <div className="report-action-col">
                    <div className="report-doc-mockup">
                      <div className="doc-mockup-header">
                        <span className="doc-org">FORENSIC CLAIMS INVESTIGATION PLATFORM</span>
                        <span className="doc-title">STATUTORY CLAIM INVESTIGATION REPORT (TEMPLATE 3)</span>
                        <span className="doc-ref">FILE REF: OS2-KL-2026-10-0914</span>
                      </div>
                      <div className="doc-mockup-body">
                        <div className="doc-skeleton-table">
                          <div className="skel-row skel-header" />
                          <div className="skel-row" />
                          <div className="skel-row" />
                          <div className="skel-row" />
                        </div>
                        <div className="doc-disclaimer-preview">
                          <strong>STATUTORY NOTICE:</strong> This report is generated via my AI-assisted forensic platform. All extracted statements, repair estimates, and liability notes have been independently verified by the assigned investigator.
                        </div>
                      </div>
                      <button 
                        onClick={handleSimulateExport}
                        className="btn btn-primary btn-sm doc-export-btn"
                      >
                        {copiedNotification ? <Check size={14} /> : <Download size={14} />}
                        <span>{copiedNotification ? 'Word (.docx) Export Generated!' : 'Simulate Word (.docx) Export'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="preview-canvas-footer">
            <div className="footer-left-info">
              <span className="pulse-indicator" />
              <span>Connected to AWS RDS PostgreSQL • CloudFront TLS 1.3 Routing Active</span>
            </div>
            <div className="footer-right-actions">
              <span className="footer-doc-note">Human-in-the-Loop Verification Enforced</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
