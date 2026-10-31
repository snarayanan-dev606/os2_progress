import React, { useEffect, useState } from 'react';
import { 
  Briefcase, 
  Milestone, 
  Layers, 
  GitBranch, 
  AlertTriangle, 
  Cloud, 
  FileText, 
  ArrowUp,
  Sparkles
} from 'lucide-react';
import './ScrollDock.css';

interface NavSection {
  id: string;
  label: string;
  sub: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SECTIONS: NavSection[] = [
  { id: 'weekly-report', label: 'Weekly Report', sub: 'Main Focus 1 (192h)', icon: Briefcase },
  { id: 'timeline', label: 'Oct Journey', sub: '17 Milestones', icon: Milestone },
  { id: 'tech-stack', label: 'Tech Stack', sub: 'Architecture Core', icon: Layers },
  { id: 'architecture', label: 'Architecture', sub: 'Data Simulator', icon: GitBranch },
  { id: 'challenges', label: 'Challenges', sub: '8 Major Fixes', icon: AlertTriangle },
  { id: 'aws-deployment', label: 'AWS Cloud', sub: 'CI/CD & VPC', icon: Cloud },
  { id: 'documentation', label: 'Relational Docs', sub: '27 Schemas', icon: FileText },
];

export const ScrollDock: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('weekly-report');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll percent
      const totalScrollable = docHeight - windowHeight;
      const currentPercent = totalScrollable > 0 ? Math.round((scrollPos / totalScrollable) * 100) : 0;
      setScrollPercent(currentPercent);

      // Show scroll-to-top after scrolling past 350px
      setShowScrollTop(scrollPos > 350);

      // Detect current section in view
      const sectionElements = SECTIONS.map(s => ({
        id: s.id,
        el: document.getElementById(s.id)
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el) {
          const rect = item.el.getBoundingClientRect();
          // If the top of the element is within the upper half of screen
          if (rect.top <= windowHeight * 0.45) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="scroll-dock-wrapper" aria-label="Quick section navigation">
      {/* Dynamic Floating Pill Indicator */}
      <div className="scroll-dock-pill">
        <div className="scroll-dock-header">
          <Sparkles className="dock-sparkle-icon" />
          <span className="dock-percent-text">{scrollPercent}%</span>
        </div>

        <div className="scroll-dock-items">
          {SECTIONS.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                type="button"
                className={`scroll-dock-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => scrollTo(section.id)}
                aria-label={`Jump to ${section.label}`}
                title={`${section.label} — ${section.sub}`}
              >
                <div className="dock-indicator-dot" />
                <Icon className="dock-icon" />

                {/* Hover Tooltip */}
                <div className="dock-tooltip">
                  <div className="tooltip-title">{section.label}</div>
                  <div className="tooltip-sub">{section.sub}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button 
            type="button"
            className="dock-scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            title="Return to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </nav>
  );
};
