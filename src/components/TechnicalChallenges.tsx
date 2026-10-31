import React, { useState } from 'react';
import { 
  HelpCircle, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';
import { technicalChallenges } from '../data/projectData';
import './TechnicalChallenges.css';

export const TechnicalChallenges: React.FC = () => {
  const [selectedChallengeId, setSelectedChallengeId] = useState<string>('ai-rate-limits');

  const selectedChallenge = technicalChallenges.find(c => c.id === selectedChallengeId) || technicalChallenges[0];

  return (
    <section id="challenges" className="section section-alt challenges-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <HelpCircle size={13} />
            <span>Engineering Problem Solving</span>
          </div>
          <h2 className="section-title">
            Technical Challenges & Production Solutions
          </h2>
          <p className="section-description">
            Transparent documentation of real engineering hurdles encountered during the October 2026 development cycle and how they were systematically resolved.
          </p>
        </div>

        {/* Challenges Interactive Grid */}
        <div className="challenges-interactive-layout">
          {/* Left Challenge Selector Menu */}
          <div className="challenges-menu-list">
            <span className="challenges-menu-heading">Documented Challenges (8 Case Studies)</span>
            {technicalChallenges.map((ch, idx) => {
              const isSelected = selectedChallenge.id === ch.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => setSelectedChallengeId(ch.id)}
                  className={`challenge-selector-btn ${isSelected ? 'challenge-btn-active' : ''}`}
                >
                  <div className="ch-btn-top">
                    <span className="ch-num font-mono">0{idx + 1}</span>
                    <span className="badge badge-neutral ch-cat">{ch.category}</span>
                  </div>
                  <span className="ch-btn-title">{ch.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right In-Depth Challenge Dossier */}
          <div key={selectedChallenge.id} className="challenge-dossier-card card animate-tab-fade">
            <div className="dossier-header">
              <div className="dossier-header-top">
                <span className="badge badge-warning">{selectedChallenge.category}</span>
                <span className="dossier-ref font-mono">CASE ID: {selectedChallenge.id}</span>
              </div>
              <h3 className="dossier-title">{selectedChallenge.title}</h3>
            </div>

            {/* Before vs After Split Showcase */}
            <div className="before-after-split-grid">
              {/* The Problem / Before */}
              <div className="ba-column ba-before">
                <div className="ba-header">
                  <div className="ba-badge-icon ba-badge-danger">
                    <AlertTriangle size={15} />
                  </div>
                  <div>
                    <h4 className="ba-col-title">Observed Problem</h4>
                    <span className="ba-sub">Pre-Resolution Failure Mode</span>
                  </div>
                </div>
                <div className="ba-body">
                  <p className="ba-text">{selectedChallenge.problem}</p>
                </div>
                <div className="ba-footer ba-footer-danger">
                  <span className="ba-meta-lbl">Root Cause:</span>
                  <p className="ba-meta-val">{selectedChallenge.rootCause}</p>
                </div>
              </div>

              {/* The Solution / After */}
              <div className="ba-column ba-after">
                <div className="ba-header">
                  <div className="ba-badge-icon ba-badge-success">
                    <CheckCircle2 size={15} />
                  </div>
                  <div>
                    <h4 className="ba-col-title">Engineering Solution</h4>
                    <span className="ba-sub">Architectural Resolution</span>
                  </div>
                </div>
                <div className="ba-body">
                  <p className="ba-text">{selectedChallenge.solution}</p>
                </div>
                <div className="ba-footer ba-footer-success">
                  <span className="ba-meta-lbl">Documented Production Impact:</span>
                  <p className="ba-meta-val">{selectedChallenge.impact}</p>
                </div>
              </div>
            </div>

            {/* Resolution Verification Note */}
            <div className="dossier-verification-callout">
              <ShieldCheck size={18} className="text-primary" />
              <div className="callout-content">
                <strong>Resolution Verified in Production:</strong>
                <span> Addressed and pushed to the repository with automated tests and verified during the AWS production deployment on October 30, 2026.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
