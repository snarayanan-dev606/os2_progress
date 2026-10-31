import React, { useState } from 'react';
import { 
  Layers, 
  Cloud, 
  Database, 
  Cpu, 
  Lock, 
  ArrowDown, 
  Server, 
  Sparkles, 
  ShieldCheck, 
  Play
} from 'lucide-react';
import './SystemArchitecture.css';

interface ArchNode {
  id: string;
  label: string;
  sub: string;
  tier: 'client' | 'cdn' | 'frontend-host' | 'backend-core' | 'ai-engine' | 'db-tier' | 'storage';
  details: string;
  protocol: string;
}

export const SystemArchitecture: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('cloudfront');
  const [simulatedFlow, setSimulatedFlow] = useState<'upload' | 'report' | 'manager'>('upload');
  const [isPlayingFlow, setIsPlayingFlow] = useState<boolean>(false);
  const [activeFlowStep, setActiveFlowStep] = useState<number>(0);

  const nodes: Record<string, ArchNode> = {
    'browser': {
      id: 'browser',
      label: 'React Frontend Client',
      sub: 'TypeScript + Vite SPA',
      tier: 'client',
      details: 'Type-safe interactive single page application with Inter and JetBrains Mono typography, custom forensic forms, and real-time status polling.',
      protocol: 'HTTPS / TLS 1.3'
    },
    'cloudfront': {
      id: 'cloudfront',
      label: 'AWS CloudFront Global CDN',
      sub: 'Single-Origin HTTPS Edge Router',
      tier: 'cdn',
      details: 'Unifies routing under a single domain. Paths "/*" route to static S3 hosting with immutable edge caching; paths "/api/v1/*" reverse-proxy directly to the EC2 backend origin, eliminating CORS preflight latency.',
      protocol: 'HTTPS Edge Routing (Port 443)'
    },
    's3-frontend': {
      id: 's3-frontend',
      label: 'AWS S3: Static Frontend App',
      sub: 'insurance-frontend-app Bucket',
      tier: 'frontend-host',
      details: 'Hosts production-built Vite static assets with strict zero-cache headers on index.html and 1-year immutable caching on content-hashed chunks.',
      protocol: 'S3 REST Endpoint (Internal CDN origin)'
    },
    'ec2-backend': {
      id: 'ec2-backend',
      label: 'AWS EC2: FastAPI Backend Engine',
      sub: 'Ubuntu 24.04 LTS + Docker Microservices',
      tier: 'backend-core',
      details: 'Asynchronous Python 3.11/3.14 REST API inside Docker containers. Enforces Pydantic v2 schemas, JWT authentication, and coordinates extraction pipelines.',
      protocol: 'HTTP (Port 8000 via CloudFront Proxy)'
    },
    'gemini-ai': {
      id: 'gemini-ai',
      label: 'Google Gemini Multimodal API',
      sub: 'gemini-3.5-flash-lite / 3.8-flash',
      tier: 'ai-engine',
      details: 'Direct base64 multimodal PDF and image streaming. Employs the Anchor Ground-Truth algorithm, 5-second process-level rate limit pacing, and batch prompt dispatching.',
      protocol: 'x-goog-api-key Request Headers (HTTPS)'
    },
    'celery-redis': {
      id: 'celery-redis',
      label: 'Celery Distributed Workers + Redis 7',
      sub: 'Background Task Queue',
      tier: 'backend-core',
      details: 'Processes heavy 30-60s multi-page evidence analyses asynchronously without blocking HTTP worker threads, coupled with atomic state machine transitions.',
      protocol: 'Redis Protocol (amqp/tcp 6379)'
    },
    'rds-postgres': {
      id: 'rds-postgres',
      label: 'AWS RDS PostgreSQL (v15.7)',
      sub: 'Managed Relational Database',
      tier: 'db-tier',
      details: 'Multi-AZ ACID-compliant relational cloud database storing 27 forensic data models, claims history, role-based accounts, and tamper-evident audit logs.',
      protocol: 'PostgreSQL Wire Protocol (Port 5432)'
    },
    's3-vault': {
      id: 's3-vault',
      label: 'AWS S3: Claims Evidence Vault',
      sub: 'insurance-claims-vault Bucket',
      tier: 'storage',
      details: 'Private encrypted object storage for sensitive police reports and crash photographs. Zero public read access; streamed to adjusters via short-lived JWT backend tokens.',
      protocol: 'AWS IAM / S3 SDK with Encrypted Storage'
    }
  };

  const flows = {
    upload: {
      title: "Evidence Ingestion & Multimodal Extraction Flow",
      steps: [
        { node: 'browser', desc: "Investigator uploads multi-page police PDF and accident photos." },
        { node: 'cloudfront', desc: "CloudFront routes payload through '/api/v1/claims/{id}/documents' via HTTPS." },
        { node: 'ec2-backend', desc: "FastAPI receives file, encodes base64 stream, and stores encrypted payload in S3 Vault." },
        { node: 's3-vault', desc: "File persisted with cryptographic hash in private claims vault." },
        { node: 'celery-redis', desc: "Background job dispatched to Celery worker queue; atomic status set to EXTRACTING." },
        { node: 'gemini-ai', desc: "Celery streams base64 buffer to Google Gemini; Anchor Ground-Truth prompt executed." },
        { node: 'rds-postgres', desc: "Extracted entities saved across 27 relational tables; status updated to AI_GENERATED_DRAFT." },
        { node: 'browser', desc: "Browser polling detects status change; interactive dossier rendered on screen." }
      ]
    },
    report: {
      title: "17-Section Statutory Report Synthesis Flow",
      steps: [
        { node: 'browser', desc: "Investigator clicks 'Generate Statutory Report' selecting Template 3 format." },
        { node: 'cloudfront', desc: "CloudFront passes request to FastAPI backend with JWT authorization." },
        { node: 'ec2-backend', desc: "FastAPI queries approved forensic records, vehicle classifications, and statement matrix." },
        { node: 'rds-postgres', desc: "Relational queries return policy, police, damage, and statement entities." },
        { node: 'ec2-backend', desc: "python-docx engine compiles monochrome tables, sequential numbering, and disclaimers." },
        { node: 'browser', desc: "Direct binary .docx stream returned to browser with Content-Disposition attachment." }
      ]
    },
    manager: {
      title: "Manager Approval Pending & Clearance Flow",
      steps: [
        { node: 'browser', desc: "Claims Manager accesses the Approval Pending workspace." },
        { node: 'cloudfront', desc: "CloudFront verifies HTTPS edge connection and forwards manager session." },
        { node: 'ec2-backend', desc: "FastAPI verifies manager role via JWT and queries pending claims list." },
        { node: 'rds-postgres', desc: "Manager reviews side-by-side evidence and clicks 'Approve Investigation'." },
        { node: 's3-vault', desc: "Final validated dossier is locked and permanently archived in AWS S3 vault." }
      ]
    }
  };

  const handlePlayFlow = () => {
    setIsPlayingFlow(true);
    setActiveFlowStep(0);
    const totalSteps = flows[simulatedFlow].steps.length;

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < totalSteps) {
        setActiveFlowStep(current);
        setActiveNodeId(flows[simulatedFlow].steps[current].node);
      } else {
        clearInterval(interval);
        setIsPlayingFlow(false);
      }
    }, 1200);
  };

  const currentNode = nodes[activeNodeId] || nodes['cloudfront'];

  return (
    <section id="architecture" className="section architecture-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={13} />
            <span>Infrastructure & Data Flow</span>
          </div>
          <h2 className="section-title">
            Documented System Architecture
          </h2>
          <p className="section-description">
            A unified, single-origin AWS cloud architecture delivering low-latency forensic UI distribution, isolated Dockerized microservices, and private multimodal AI streaming.
          </p>
        </div>

        {/* Data Flow Simulator Controls */}
        <div className="flow-simulator-bar card">
          <div className="flow-sim-left">
            <span className="flow-sim-label">Simulate End-to-End Data Flow:</span>
            <div className="flow-pills-row">
              <button
                onClick={() => { setSimulatedFlow('upload'); setActiveFlowStep(0); }}
                className={`flow-pill ${simulatedFlow === 'upload' ? 'flow-pill-active' : ''}`}
              >
                1. Evidence Ingestion & AI Flow
              </button>
              <button
                onClick={() => { setSimulatedFlow('report'); setActiveFlowStep(0); }}
                className={`flow-pill ${simulatedFlow === 'report' ? 'flow-pill-active' : ''}`}
              >
                2. Report Synthesis (.docx) Flow
              </button>
              <button
                onClick={() => { setSimulatedFlow('manager'); setActiveFlowStep(0); }}
                className={`flow-pill ${simulatedFlow === 'manager' ? 'flow-pill-active' : ''}`}
              >
                3. Manager Verification Flow
              </button>
            </div>
          </div>

          <button 
            onClick={handlePlayFlow}
            disabled={isPlayingFlow}
            className="btn btn-primary btn-sm play-flow-btn"
          >
            <Play size={14} />
            <span>{isPlayingFlow ? `Step ${activeFlowStep + 1} of ${flows[simulatedFlow].steps.length}...` : 'Trace Data Flow'}</span>
          </button>
        </div>

        {/* Live Step Tracker */}
        {isPlayingFlow && (
          <div className="active-step-callout">
            <span className="status-dot status-dot-active" />
            <strong>Step {activeFlowStep + 1}:</strong>
            <span> {flows[simulatedFlow].steps[activeFlowStep]?.desc}</span>
          </div>
        )}

        {/* Interactive Architecture Diagram Canvas */}
        <div className="architecture-canvas-grid">
          {/* Visual Architecture Diagram Area */}
          <div className="diagram-canvas card">
            {/* Top: Client Tier */}
            <div className="arch-tier-block">
              <div className="tier-header-label">CLIENT LAYER</div>
              <div 
                className={`arch-node-box ${activeNodeId === 'browser' ? 'node-selected' : ''}`}
                onClick={() => setActiveNodeId('browser')}
              >
                <div className="node-icon-box node-icon-client">
                  <Server size={18} />
                </div>
                <div className="node-texts">
                  <span className="node-label">React Frontend Client</span>
                  <span className="node-sub">TypeScript + Vite SPA</span>
                </div>
              </div>
            </div>

            <div className="diagram-arrow-down">
              <ArrowDown size={16} />
              <span className="arrow-text">HTTPS / TLS 1.3 Single Origin</span>
            </div>

            {/* Mid: CloudFront CDN */}
            <div className="arch-tier-block">
              <div className="tier-header-label">GLOBAL EDGE DELIVERY & UNIFIED ROUTING</div>
              <div 
                className={`arch-node-box node-hero-edge ${activeNodeId === 'cloudfront' ? 'node-selected' : ''}`}
                onClick={() => setActiveNodeId('cloudfront')}
              >
                <div className="node-icon-box node-icon-cdn">
                  <Cloud size={20} />
                </div>
                <div className="node-texts">
                  <span className="node-label">AWS CloudFront Global CDN</span>
                  <span className="node-sub">Single-Origin Reverse Proxy (Zero CORS Preflights)</span>
                </div>
                <span className="badge badge-success node-badge-edge">TLS Termination</span>
              </div>
            </div>

            {/* Split Origins: S3 Frontend & EC2 Backend */}
            <div className="split-origins-container">
              {/* Origin A: S3 Static */}
              <div className="origin-column">
                <div className="split-arrow-lbl">Path: /* (Static Assets)</div>
                <div 
                  className={`arch-node-box ${activeNodeId === 's3-frontend' ? 'node-selected' : ''}`}
                  onClick={() => setActiveNodeId('s3-frontend')}
                >
                  <div className="node-icon-box node-icon-s3">
                    <Database size={16} />
                  </div>
                  <div className="node-texts">
                    <span className="node-label">AWS S3 Frontend Bucket</span>
                    <span className="node-sub">insurance-frontend-app</span>
                  </div>
                </div>
              </div>

              {/* Origin B: EC2 Backend */}
              <div className="origin-column">
                <div className="split-arrow-lbl">Path: /api/v1/* (REST API)</div>
                <div 
                  className={`arch-node-box node-backend-box ${activeNodeId === 'ec2-backend' ? 'node-selected' : ''}`}
                  onClick={() => setActiveNodeId('ec2-backend')}
                >
                  <div className="node-icon-box node-icon-ec2">
                    <Server size={16} />
                  </div>
                  <div className="node-texts">
                    <span className="node-label">AWS EC2: FastAPI Engine</span>
                    <span className="node-sub">Dockerized Microservices (Ubuntu 24.04)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="diagram-arrow-down">
              <ArrowDown size={16} />
              <span className="arrow-text">Internal VPC & Asynchronous Subsystems</span>
            </div>

            {/* Internal Subsystems Grid */}
            <div className="internal-subsystems-grid">
              {/* RDS Postgres */}
              <div 
                className={`arch-node-box ${activeNodeId === 'rds-postgres' ? 'node-selected' : ''}`}
                onClick={() => setActiveNodeId('rds-postgres')}
              >
                <div className="node-icon-box node-icon-rds">
                  <Database size={16} />
                </div>
                <div className="node-texts">
                  <span className="node-label">AWS RDS PostgreSQL</span>
                  <span className="node-sub">27 Relational Forensic Models</span>
                </div>
              </div>

              {/* Celery & Redis */}
              <div 
                className={`arch-node-box ${activeNodeId === 'celery-redis' ? 'node-selected' : ''}`}
                onClick={() => setActiveNodeId('celery-redis')}
              >
                <div className="node-icon-box node-icon-celery">
                  <Cpu size={16} />
                </div>
                <div className="node-texts">
                  <span className="node-label">Celery + Redis 7</span>
                  <span className="node-sub">Asynchronous Worker Queue</span>
                </div>
              </div>

              {/* Google Gemini AI */}
              <div 
                className={`arch-node-box ${activeNodeId === 'gemini-ai' ? 'node-selected' : ''}`}
                onClick={() => setActiveNodeId('gemini-ai')}
              >
                <div className="node-icon-box node-icon-ai">
                  <Sparkles size={16} />
                </div>
                <div className="node-texts">
                  <span className="node-label">Google Gemini AI</span>
                  <span className="node-sub">Anchor Ground-Truth Multimodal</span>
                </div>
              </div>

              {/* S3 Vault */}
              <div 
                className={`arch-node-box ${activeNodeId === 's3-vault' ? 'node-selected' : ''}`}
                onClick={() => setActiveNodeId('s3-vault')}
              >
                <div className="node-icon-box node-icon-vault">
                  <Lock size={16} />
                </div>
                <div className="node-texts">
                  <span className="node-label">S3 Claims Vault</span>
                  <span className="node-sub">Private Encrypted Evidence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Component Inspector Panel */}
          <div className="node-inspector-panel card">
            <div className="inspector-header">
              <span className="inspector-tag">Component Inspector</span>
              <h3 className="inspector-title">{currentNode.label}</h3>
              <span className="inspector-sub">{currentNode.sub}</span>
            </div>

            <div className="inspector-body">
              <div className="inspector-detail-block">
                <span className="insp-lbl">Architectural Responsibilities:</span>
                <p className="insp-text">{currentNode.details}</p>
              </div>

              <div className="inspector-detail-block">
                <span className="insp-lbl">Communication Protocol / Port:</span>
                <code className="insp-code font-mono">{currentNode.protocol}</code>
              </div>

              <div className="inspector-security-note">
                <ShieldCheck size={16} className="text-success" />
                <span>Verified in production: Zero hardcoded secrets, private VPC containment, strict TLS 1.3 encryption.</span>
              </div>
            </div>

            <div className="inspector-footer">
              <span className="insp-hint">Click any architecture box on the left to inspect its role and data contracts.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
