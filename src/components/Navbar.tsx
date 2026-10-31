import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Calendar, 
  Cpu, 
  Layers, 
  HelpCircle, 
  Cloud, 
  FileText, 
  Menu, 
  X,
  Code2
} from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  onOpenPresentation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      const sections = [
        'hero',
        'weekly-report',
        'timeline',
        'tech-stack',
        'architecture',
        'challenges',
        'aws-deployment',
        'documentation'
      ];

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'weekly-report', label: 'Weekly Report', icon: TrendingUp },
    { id: 'timeline', label: 'Journey', icon: Calendar },
    { id: 'tech-stack', label: 'Stack', icon: Cpu },
    { id: 'architecture', label: 'Architecture', icon: Layers },
    { id: 'challenges', label: 'Challenges', icon: HelpCircle },
    { id: 'aws-deployment', label: 'AWS Cloud', icon: Cloud },
    { id: 'documentation', label: 'Docs', icon: FileText }
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Dynamic Scroll Progress Indicator */}
      <div 
        className="scroll-progress-indicator" 
        style={{ transform: `scaleX(${scrollProgress / 100})` }} 
      />

      <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Personal Developer Identity (No OS2 Logo) */}
          <div className="navbar-brand" onClick={() => scrollTo('hero')}>
            <div className="dev-avatar-insignia">
              <Code2 size={18} className="dev-code-icon" />
            </div>
            <div className="brand-text-block">
              <div className="brand-name-row">
                <span className="brand-name">Junior Full Stack Developer</span>
                <span className="brand-badge">Personal Showcase</span>
              </div>
              <span className="brand-subtext">AI Claims Platform • Leadership Presentation</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="navbar-links" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`nav-link-btn ${isActive ? 'nav-link-active' : ''}`}
                  title={`Jump to ${link.label}`}
                >
                  <Icon size={14} className="nav-link-icon" />
                  <span>{link.label}</span>
                  {isActive && <span className="nav-indicator" />}
                </button>
              );
            })}
          </nav>

          {/* Action Controls */}
          <div className="navbar-actions">
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <div className="mobile-drawer-header">
              <span className="mobile-drawer-title">Personal Showcase Menu</span>
            </div>
            <div className="mobile-drawer-links">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`mobile-nav-link ${activeSection === link.id ? 'mobile-nav-active' : ''}`}
                  >
                    <Icon size={18} />
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
