import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Cloud
} from 'lucide-react';
import './PresentationModal.css';

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PresentationModal: React.FC<PresentationModalProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Executive Title Slide",
      subtitle: "My Personal Engineering Contributions & Architecture",
      badge: "Personal Engineering Showcase",
      presenter: "Junior Full Stack Developer",
      content: (
        <div className="slide-hero-layout">
          <div className="slide-badge-pill">Personal Engineering Showcase • Live on AWS Cloud</div>
          <h2 className="slide-main-title">Forensic Motor Insurance Claims Automation</h2>
          <p className="slide-tagline">
            Replacing 4–8 hour manual evidence parsing with multimodal AI ingestion, Anchor Ground-Truth entity separation, and statutory Word report synthesis.
          </p>
          <div className="slide-metrics-row">
            <div className="slide-kpi">
              <span className="slide-kpi-val">17</span>
              <span className="slide-kpi-lbl">Statutory Report Sections</span>
            </div>
            <div className="slide-kpi">
              <span className="slide-kpi-val">38</span>
              <span className="slide-kpi-lbl">Bilingual Q&A Matrix</span>
            </div>
            <div className="slide-kpi">
              <span className="slide-kpi-val">3</span>
              <span className="slide-kpi-lbl">Formal DOCX Templates</span>
            </div>
            <div className="slide-kpi">
              <span className="slide-kpi-val">&lt; 25s</span>
              <span className="slide-kpi-lbl">Multimodal AI Extraction</span>
            </div>
          </div>
        </div>
      ),
      speakerNotes: "Opening slide for company head. Introduce my personal engineering effort: replacing slow 4-8 hour manual claims reading with an end-to-end AI platform deployed live on AWS."
    },
    {
      title: "The Problem & Engineering Solution",
      subtitle: "Legacy Manual Workflow vs My Delivered Solution",
      badge: "Architecture Strategy",
      presenter: "Full Stack AI Architecture",
      content: (
        <div className="slide-split-compare">
          <div className="slide-compare-col slide-col-legacy">
            <h4>Traditional Manual Ingestion</h4>
            <ul>
              <li>50+ pages of handwritten police logs, invoices, and sketch plans.</li>
              <li>4 to 8 hours per claim manually typing 17-section reports.</li>
              <li>High risk of entity confusion in multi-vehicle collisions.</li>
              <li>No centralized audit logging connecting scans to manager sign-offs.</li>
            </ul>
          </div>
          <div className="slide-compare-col slide-col-modern">
            <h4>My Implemented Platform</h4>
            <ul>
              <li>Direct base64 multimodal PDF streaming to Gemini in under 25s.</li>
              <li>Anchor Ground-Truth algorithm strictly separating insured vs third-party.</li>
              <li>38 bilingual questions with Gemini draft generation and inline edits.</li>
              <li>100% cloud-native deployment on AWS EC2, S3, RDS, and CloudFront.</li>
            </ul>
          </div>
        </div>
      ),
      speakerNotes: "Highlight the personal technical delivery: cutting turnaround time from hours to seconds while maintaining strict human-in-the-loop oversight."
    },
    {
      title: "Core Delivered Features",
      subtitle: "Full-Stack Capabilities Built Throughout October 2026",
      badge: "System Functionality",
      presenter: "Delivered Milestones",
      content: (
        <div className="slide-features-grid">
          <div className="slide-feat-card">
            <span className="slide-feat-num">01</span>
            <h5>AI Multimodal Extraction</h5>
            <p>Streams multi-page PDFs to Gemini without temporary file locks; populates 27 relational models.</p>
          </div>
          <div className="slide-feat-card">
            <span className="slide-feat-num">02</span>
            <h5>AI Vision Processing</h5>
            <p>Classifies crash scene photographs vs documents; preserves aspect ratios with zero slot overlap.</p>
          </div>
          <div className="slide-feat-card">
            <span className="slide-feat-num">03</span>
            <h5>Driver Statement Matrix</h5>
            <p>38 standardized bilingual questions with Gemini drafts, custom question injection, and .docx inclusion.</p>
          </div>
          <div className="slide-feat-card">
            <span className="slide-feat-num">04</span>
            <h5>3 Report Templates & Word Builder</h5>
            <p>Outputs pixel-perfect Microsoft Word files with monochrome tables and dynamic vehicle logic.</p>
          </div>
          <div className="slide-feat-card">
            <span className="slide-feat-num">05</span>
            <h5>Anchor Ground-Truth</h5>
            <p>Eliminates entity confusion between policyholders and third-party drivers in multi-car pileups.</p>
          </div>
          <div className="slide-feat-card">
            <span className="slide-feat-num">06</span>
            <h5>Manager Cockpit & Workspaces</h5>
            <p>Approval Pending workspace, automated claim routing, and dynamic employee capacity tracking.</p>
          </div>
        </div>
      ),
      speakerNotes: "Walk through the 6 core pillars. Emphasize that all features were implemented, tested, and verified in code during October."
    },
    {
      title: "AWS Cloud Production Deployment",
      subtitle: "From Local Prototyping to Verified Production Cloud",
      badge: "DevOps & Security",
      presenter: "Cloud Infrastructure",
      content: (
        <div className="slide-aws-layout">
          <div className="slide-aws-banner">
            <Cloud size={24} className="text-primary" />
            <div>
              <strong>Single-Origin HTTPS CloudFront Architecture</strong>
              <p>Unifies React SPA frontend (S3) and FastAPI REST endpoints (EC2 Docker) with zero CORS preflight latency.</p>
            </div>
          </div>
          <div className="slide-aws-grid">
            <div className="slide-aws-node">
              <span className="aws-node-label">AWS EC2 (Ubuntu 24.04)</span>
              <span className="aws-node-detail">Dockerized FastAPI & Celery background workers</span>
            </div>
            <div className="slide-aws-node">
              <span className="aws-node-label">AWS RDS PostgreSQL</span>
              <span className="aws-node-detail">27 relational models with automated snapshots</span>
            </div>
            <div className="slide-aws-node">
              <span className="aws-node-label">AWS S3 Claims Vault</span>
              <span className="aws-node-detail">Private encrypted evidence storage via JWT tokens</span>
            </div>
            <div className="slide-aws-node">
              <span className="aws-node-label">AWS CloudFront CDN</span>
              <span className="aws-node-detail">Global edge distribution with TLS 1.3 encryption</span>
            </div>
          </div>
        </div>
      ),
      speakerNotes: "Explain the deployment milestone from October 28–30. Highlight enterprise security: zero exposed credentials, private S3 vault, and HTTPS unified routing."
    },
    {
      title: "Key Technical Challenges Resolved",
      subtitle: "Engineering Problem Solving & Production Hardening",
      badge: "Technical Integrity",
      presenter: "Software Engineering",
      content: (
        <div className="slide-challenges-layout">
          <div className="slide-ch-item">
            <strong>1. Gemini 429 Rate Limits:</strong>
            <span> Solved via 5.0-second process-level pacer and prompt batching (reducing calls per report from 20+ down to 1–2).</span>
          </div>
          <div className="slide-ch-item">
            <strong>2. Background Worker Desync:</strong>
            <span> Architected atomic finite state machine with /ai-status failure timeouts preventing frozen claims.</span>
          </div>
          <div className="slide-ch-item">
            <strong>3. Entity Hallucinations:</strong>
            <span> Implemented Anchor Ground-Truth algorithm to strictly separate insured from third-party drivers.</span>
          </div>
          <div className="slide-ch-item">
            <strong>4. API Key Security:</strong>
            <span> Moved API key transmission from URL query parameters strictly to 'x-goog-api-key' HTTP headers.</span>
          </div>
        </div>
      ),
      speakerNotes: "Showcase the engineering depth. Discuss rate limit batching and security hardening as tangible personal technical achievements."
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const handlePrev = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentSlide]);

  if (!isOpen) return null;

  const slide = slides[currentSlide];

  return (
    <div className="presentation-overlay">
      <div className="presentation-modal-window">
        {/* Top Control Bar */}
        <div className="presentation-top-bar">
          <div className="pres-top-left">
            <span className="pres-brand font-mono">PERSONAL SHOWCASE // PRESENTATION MODE</span>
            <span className="pres-badge">{slide.badge}</span>
          </div>

          <div className="pres-top-center">
            <span className="pres-slide-counter font-mono">
              Slide {currentSlide + 1} of {slides.length}
            </span>
          </div>

          <div className="pres-top-right">
            <button onClick={onClose} className="pres-close-btn" title="Exit Presentation (Esc)">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Slide Screen Canvas */}
        <div className="presentation-canvas">
          <div className="slide-container">
            <div className="slide-header">
              <span className="slide-kicker">{slide.title}</span>
              <h3 className="slide-subheading">{slide.subtitle}</h3>
            </div>

            <div className="slide-content-pane">
              {slide.content}
            </div>
          </div>
        </div>

        {/* Bottom Speaker Notes and Nav Bar */}
        <div className="presentation-bottom-bar">
          <div className="speaker-notes-drawer">
            <span className="notes-lbl">Executive Talking Points:</span>
            <p className="notes-text">{slide.speakerNotes}</p>
          </div>

          <div className="slide-nav-controls">
            <button 
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className="btn btn-secondary btn-sm"
              title="Previous Slide (Left Arrow)"
            >
              <ChevronLeft size={16} />
              <span>Previous</span>
            </button>

            <button 
              onClick={handleNext}
              disabled={currentSlide === slides.length - 1}
              className="btn btn-primary btn-sm"
              title="Next Slide (Right Arrow or Space)"
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
