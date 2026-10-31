import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="company-footer">
      <div className="container footer-container">
        {/* Top Footer Row */}
        <div className="footer-top-row">
          <div className="footer-brand-column">
            <div className="footer-brand-header">
              <div className="dev-avatar-insignia footer-dev-avatar">
                <Code2 size={18} />
              </div>
              <span className="footer-brand-name">Junior Full Stack Developer</span>
            </div>
            <p className="footer-project-title">
              Personal Engineering Showcase — AI-Powered Motor Insurance Claims Investigation & Fraud Detection System.
            </p>
            <div className="footer-credentials-pills">
              <span className="badge badge-neutral">Period: October 2026</span>
            </div>
          </div>

          <div className="footer-nav-column">
            <span className="footer-col-heading">Executive Sections</span>
            <ul className="footer-links-list">
              <li><button onClick={() => scrollTo('weekly-report')}>Weekly Report (Main Focus)</button></li>
              <li><button onClick={() => scrollTo('timeline')}>Development Journey</button></li>
              <li><button onClick={() => scrollTo('tech-stack')}>Technology Stack</button></li>
            </ul>
          </div>

          <div className="footer-nav-column">
            <span className="footer-col-heading">Technical Architecture</span>
            <ul className="footer-links-list">
              <li><button onClick={() => scrollTo('architecture')}>System Architecture</button></li>
              <li><button onClick={() => scrollTo('challenges')}>Engineering Challenges</button></li>
              <li><button onClick={() => scrollTo('aws-deployment')}>AWS Cloud Deployment</button></li>
              <li><button onClick={() => scrollTo('documentation')}>Technical Documentation</button></li>
            </ul>
          </div>

          <div className="footer-status-column">
            <span className="footer-col-heading">System Verification</span>
            <button onClick={scrollToTop} className="btn btn-secondary btn-sm scroll-top-btn">
              <ArrowUp size={14} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Legal / Disclaimer Row */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © October 2026. Personal Engineering Effort Showcase & Technical Contribution Presentation.
          </p>
          <div className="footer-disclaimer-note">
            <span>Human-in-the-Loop AI Assistant Architecture • Verified Live on AWS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
