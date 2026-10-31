import React, { useState } from 'react';
import { 
  Cloud, 
  Server, 
  ShieldCheck, 
  Lock, 
  CheckCircle2
} from 'lucide-react';
import { awsDeploymentSteps } from '../data/projectData';
import './AwsDeploymentShowcase.css';

export const AwsDeploymentShowcase: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);

  const activeStep = awsDeploymentSteps[selectedStepIndex];

  const awsServicesSummary = [
    {
      name: "AWS EC2 (Ubuntu 24.04 LTS)",
      role: "Application Compute",
      desc: "Hosts isolated Dockerized FastAPI and Celery worker containers behind local Gunicorn / Uvicorn processes.",
      status: "Production Dockerized"
    },
    {
      name: "AWS S3 Frontend & Vault",
      role: "Dual Object Storage",
      desc: "Distinct buckets for public SPA static assets ('insurance-frontend-app') and encrypted private claims ('insurance-claims-vault').",
      status: "Private Vault Encrypted"
    },
    {
      name: "AWS CloudFront Global CDN",
      role: "Edge Delivery & Reverse Proxy",
      desc: "Single-origin routing unifying static S3 assets and dynamic EC2 REST APIs with automated HTTPS TLS 1.3 termination.",
      status: "Single-Origin Configured"
    },
    {
      name: "AWS RDS PostgreSQL (v15.7)",
      role: "Managed Cloud Relational DB",
      desc: "ACID-compliant storage for 27 forensic data models with automated snapshots and VPC private subnet isolation.",
      status: "Multi-AZ Cloud RDS"
    }
  ];

  return (
    <section id="aws-deployment" className="section aws-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cloud size={13} />
            <span>Cloud Infrastructure & DevOps</span>
          </div>
          <h2 className="section-title">
            From Local Development to AWS Production
          </h2>
          <p className="section-description">
            Complete architectural chronicle of deploying the insurance platform to AWS cloud services during October 28–30, 2026.
          </p>
        </div>

        {/* AWS Services Top Highlights */}
        <div className="aws-services-summary-grid">
          {awsServicesSummary.map((srv, idx) => (
            <div key={idx} className="aws-service-summary-card card">
              <div className="srv-card-top">
                <span className="badge badge-primary">{srv.role}</span>
                <span className="srv-status-tag">
                  <span className="status-dot status-dot-active" />
                  <span>{srv.status}</span>
                </span>
              </div>
              <h4 className="srv-name">{srv.name}</h4>
              <p className="srv-desc">{srv.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Deployment Steps Walkthrough */}
        <div className="deployment-stepper-container card">
          <div className="stepper-header-row">
            <div>
              <span className="stepper-kicker">Deployment Milestone Pipeline</span>
              <h3 className="stepper-title">5-Phase Production Rollout Progression</h3>
            </div>
            <span className="badge badge-success">Completed October 30, 2026</span>
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="deploy-stepper-nav">
            {awsDeploymentSteps.map((step, idx) => {
              const isSelected = selectedStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`deploy-step-btn ${isSelected ? 'deploy-step-active' : ''}`}
                >
                  <span className="step-idx font-mono">Phase 0{step.step}</span>
                  <span className="step-title-short">{step.service}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase */}
          <div key={selectedStepIndex} className="deploy-step-display-pane animate-tab-fade">
            <div className="step-display-header">
              <div className="step-badge-line">
                <span className="badge badge-primary">Phase {activeStep.step} of 05</span>
                <span className="badge badge-neutral font-mono">{activeStep.service}</span>
              </div>
              <h4 className="step-display-title">{activeStep.title}</h4>
              <p className="step-display-description">{activeStep.description}</p>
            </div>

            {/* Terminal Command Snippet */}
            <div className="deploy-terminal-box">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="t-dot t-red" />
                  <span className="t-dot t-yellow" />
                  <span className="t-dot t-green" />
                </div>
                <span className="terminal-title">AWS Production Deployment Terminal</span>
              </div>
              <pre className="terminal-body font-mono">
                <code>
                  <span className="t-prompt">$ </span>{activeStep.commandSnippet}
                </code>
              </pre>
            </div>

            {/* Security Guardrail Callout */}
            <div className="deploy-security-guardrail">
              <div className="guardrail-icon">
                <Lock size={16} className="text-primary" />
              </div>
              <div className="guardrail-text">
                <strong>Zero-Credential-Leak Security Standard:</strong>
                <span> {activeStep.securityNote}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cloud Security & Compliance Matrix */}
        <div className="security-matrix-grid">
          <div className="sec-matrix-card card">
            <div className="sec-header">
              <ShieldCheck size={20} className="text-success" />
              <h4 className="sec-title">Encrypted Storage & Access Control</h4>
            </div>
            <ul className="sec-list">
              <li>
                <CheckCircle2 size={15} className="text-success" />
                <span><strong>Private S3 Evidence Vault:</strong> Block Public Access enabled; files accessible only via short-lived backend JWT tokens.</span>
              </li>
              <li>
                <CheckCircle2 size={15} className="text-success" />
                <span><strong>No Credentials in URL Query Params:</strong> Google Gemini API keys transmitted strictly via 'x-goog-api-key' request headers.</span>
              </li>
            </ul>
          </div>

          <div className="sec-matrix-card card">
            <div className="sec-header">
              <Server size={20} className="text-primary" />
              <h4 className="sec-title">Isolated Network & Zero-CORS Architecture</h4>
            </div>
            <ul className="sec-list">
              <li>
                <CheckCircle2 size={15} className="text-success" />
                <span><strong>Unified CloudFront Origin:</strong> Frontend and backend unified under single HTTPS origin, eliminating preflight OPTIONS handshakes.</span>
              </li>
              <li>
                <CheckCircle2 size={15} className="text-success" />
                <span><strong>Private Database VPC:</strong> RDS PostgreSQL database operates in private subnets with zero direct public IP exposure.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
