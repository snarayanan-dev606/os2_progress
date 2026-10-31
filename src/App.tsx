import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WeeklyReport } from './components/WeeklyReport';
import { DevelopmentJourney } from './components/DevelopmentJourney';
import { TechnologyStack } from './components/TechnologyStack';
import { SystemArchitecture } from './components/SystemArchitecture';
import { TechnicalChallenges } from './components/TechnicalChallenges';
import { AwsDeploymentShowcase } from './components/AwsDeploymentShowcase';
import { ProjectDocumentation } from './components/ProjectDocumentation';
import { Footer } from './components/Footer';
import { PresentationModal } from './components/PresentationModal';
import { ScrollDock } from './components/ScrollDock';
import './App.css';

export const App: React.FC = () => {
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);

  return (
    <div className="app-root">
      {/* Sticky Executive Navigation Header (Personal Showcase) */}
      <Navbar onOpenPresentation={() => setIsPresentationOpen(true)} />

      {/* Floating Executive Scroll Dock Navigation */}
      <ScrollDock />

      {/* Main Content Assembly following exact requested order */}
      <main id="main-content">
        {/* Section 1: Hero — My Personal Engineering Effort & System Delivery */}
        <HeroSection />

        {/* Section 2 (MAIN FOCUS 1): Weekly Engineering Report & Deliverables */}
        <WeeklyReport />

        {/* Section 3: October 2026 Development Journey (Day-by-Day Timeline) */}
        <DevelopmentJourney />

        {/* Section 4: Technology Stack I Handled & Implemented */}
        <TechnologyStack />

        {/* Section 5: System Architecture & Interactive Data Flow Simulator */}
        <SystemArchitecture />

        {/* Section 6: Technical Challenges I Encountered & Solved */}
        <TechnicalChallenges />

        {/* Section 7: AWS Cloud Production Deployment & Security Matrix */}
        <AwsDeploymentShowcase />

        {/* Section 8: Technical Documentation, 27 Relational Models & Statutory Specs */}
        <ProjectDocumentation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Presentation Slides Mode (Slide Deck for Company Head) */}
      <PresentationModal 
        isOpen={isPresentationOpen} 
        onClose={() => setIsPresentationOpen(false)} 
      />
    </div>
  );
};

export default App;
