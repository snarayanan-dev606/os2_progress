import React, { useState } from 'react';
import { 
  FileCheck, 
  Workflow, 
  ShieldCheck, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Layers, 
  FileText, 
  Users, 
  Cloud, 
  ArrowRight, 
  Sparkles, 
  Lock, 
  ChevronRight 
} from 'lucide-react';
import { workflowStages, type WorkflowStage } from '../data/projectData';
import './ProjectOverview.css';

export const ProjectOverview: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<WorkflowStage>(workflowStages[2]); // Default to AI extraction stage

  const supportedCapabilities = [
    {
      icon: FileCheck,
      title: "Claim Document Processing",
      desc: "Ingests diverse multi-page PDFs, scanned handwritten police records, and crash scene photographs."
    },
    {
      icon: Sparkles,
      title: "AI-Assisted Fact Extraction",
      desc: "Google Gemini multimodal models extract structured entities directly from raw evidence layers."
    },
    {
      icon: Users,
      title: "Driver Statement Management",
      desc: "38 standardized bilingual Malay/English questions with auto-drafted answers and inline adjustments."
    },
    {
      icon: Layers,
      title: "Multiple Report Templates",
      desc: "Supports 3 formal statutory report templates with dynamic car/motorcycle adaptations."
    },
    {
      icon: ShieldCheck,
      title: "Human-in-the-Loop Governance",
      desc: "AI assists adjusters; all findings require investigator verification and manager legal sign-off."
    },
    {
      icon: Users,
      title: "Employee & Manager Workspaces",
      desc: "Segregated operational workspaces with automated assignment and live workload tracking."
    },
    {
      icon: FileText,
      title: "Word (.docx) Report Generation",
      desc: "Direct code-driven synthesis of formal 17-section reports with structured monochrome tables."
    },
    {
      icon: Cloud,
      title: "Cloud-Native AWS Deployment",
      desc: "100% production-ready architecture across EC2, S3, RDS PostgreSQL, Docker, and CloudFront."
    }
  ];

  return (
    <section id="overview" className="section section-alt overview-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Workflow size={13} />
            <span>Platform Overview & Objectives</span>
          </div>
          <h2 className="section-title">
            Transforming Complex Forensic Claims Into Streamlined Intelligence
          </h2>
          <p className="section-description">
            Engineered at OS2 Studio to replace slow, manual paper-based investigations with an end-to-end, document-first, AI-assisted platform.
          </p>
        </div>

        {/* Problem vs Solution Comparison Box */}
        <div className="problem-solution-grid">
          <div className="ps-card ps-legacy">
            <div className="ps-card-header">
              <div className="ps-icon ps-icon-legacy">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="ps-title">Traditional Manual Investigation</h3>
                <span className="ps-sub">The Pre-Existing Engineering Challenge</span>
              </div>
            </div>
            <ul className="ps-list">
              <li>
                <span className="bullet bullet-neg" />
                <span><strong>4 to 8 hours spent per claim:</strong> Investigators manually sift through 50+ pages of handwritten police reports, hospital invoices, and damage estimates.</span>
              </li>
              <li>
                <span className="bullet bullet-neg" />
                <span><strong>High Entity Confusion:</strong> Multi-vehicle collisions frequently result in adverse third-party details being misattributed to policyholders.</span>
              </li>
              <li>
                <span className="bullet bullet-neg" />
                <span><strong>Manual Report Transcription:</strong> 17-section formal reports are typed by hand into Word templates, increasing human clerical errors.</span>
              </li>
              <li>
                <span className="bullet bullet-neg" />
                <span><strong>Fragmented Governance:</strong> No unified audit log linking original scanned evidence directly to final manager sign-offs.</span>
              </li>
            </ul>
          </div>

          <div className="ps-card ps-modern">
            <div className="ps-card-header">
              <div className="ps-icon ps-icon-modern">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h3 className="ps-title">OS2 Studio AI Investigation Platform</h3>
                <span className="ps-sub">Delivered October 2026 Production Solution</span>
              </div>
            </div>
            <ul className="ps-list">
              <li>
                <span className="bullet bullet-pos" />
                <span><strong>Sub-Minute Extraction:</strong> Multimodal AI streams entire multi-page PDFs, extracting factual entities in under 25 seconds.</span>
              </li>
              <li>
                <span className="bullet bullet-pos" />
                <span><strong>Anchor Ground-Truth Disambiguation:</strong> Deterministic party anchoring strictly separates insured and third-party data.</span>
              </li>
              <li>
                <span className="bullet bullet-pos" />
                <span><strong>Automated Statutory Reports:</strong> Instant synthesis of pixel-perfect Microsoft Word (.docx) files across 3 formal templates.</span>
              </li>
              <li>
                <span className="bullet bullet-pos" />
                <span><strong>Rigorous Human Oversight:</strong> AI assists investigators without replacing human discretion; manager verification cockpit ensures statutory compliance.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Statutory Safeguard Alert */}
        <div className="regulatory-disclaimer-box">
          <div className="disclaimer-icon">
            <AlertCircle size={20} />
          </div>
          <div className="disclaimer-text">
            <strong>Human-in-the-Loop Regulatory Notice:</strong>
            <p>
              The platform is designed to assist forensic investigators and streamline evidence analysis. The system does not claim to eliminate fraud autonomously. All AI-extracted statements, liability apportionments, and red-flag indicators require verification and formal sign-off by licensed claims adjusters and managers.
            </p>
          </div>
        </div>

        {/* 8 Core Capabilities Grid */}
        <div className="capabilities-header">
          <h3 className="capabilities-title">Supported Core Capabilities</h3>
          <span className="capabilities-sub">Full-stack functionality engineered during the October 2026 development cycle</span>
        </div>

        <div className="capabilities-grid">
          {supportedCapabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div key={idx} className="capability-card card">
                <div className="capability-icon-wrapper">
                  <Icon size={18} />
                </div>
                <h4 className="capability-card-title">{cap.title}</h4>
                <p className="capability-card-desc">{cap.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Interactive 6-Stage Workflow Visualization */}
        <div className="workflow-section-block">
          <div className="workflow-header-group">
            <div className="workflow-title-block">
              <span className="workflow-tag">End-to-End Lifecycle</span>
              <h3 className="workflow-title">Interactive Investigation Workflow</h3>
            </div>
            <p className="workflow-instruction">Click any stage below to inspect its data contract, role actors, and system safeguards.</p>
          </div>

          {/* Stepper bar */}
          <div className="workflow-stepper-bar">
            {workflowStages.map((stage) => {
              const isSelected = selectedStage.step === stage.step;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(stage)}
                  className={`stepper-node-btn ${isSelected ? 'stepper-node-active' : ''}`}
                >
                  <div className="stepper-step-num">{stage.step}</div>
                  <div className="stepper-label-group">
                    <span className="stepper-title">{stage.title}</span>
                    <span className="stepper-role">{stage.role}</span>
                  </div>
                  {stage.step < workflowStages.length && (
                    <ChevronRight size={16} className="stepper-arrow-divider" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Stage Details Drawer */}
          <div className="stage-detail-panel card">
            <div className="stage-detail-header">
              <div className="stage-badge-group">
                <span className="badge badge-primary">Stage 0{selectedStage.step} of 06</span>
                <span className="badge badge-neutral">Actor: {selectedStage.role}</span>
                <span className="badge badge-info">{selectedStage.tech}</span>
              </div>
              <h4 className="stage-detail-title">{selectedStage.title}</h4>
              <p className="stage-detail-desc">{selectedStage.description}</p>
            </div>

            <div className="stage-data-contract-grid">
              <div className="data-box data-inputs">
                <span className="data-box-title">System Inputs & Evidence:</span>
                <ul className="data-list">
                  {selectedStage.inputs.map((inp, idx) => (
                    <li key={idx}>
                      <ArrowRight size={13} className="text-primary" />
                      <span>{inp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="data-box data-outputs">
                <span className="data-box-title">Generated Outputs & Entities:</span>
                <ul className="data-list">
                  {selectedStage.outputs.map((out, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={13} className="text-success" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="stage-safeguard-box">
              <div className="safeguard-title">
                <Lock size={14} className="text-warning" />
                <strong>Architectural Safeguard & Regulatory Governance:</strong>
              </div>
              <p className="safeguard-desc">{selectedStage.safeguard}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
