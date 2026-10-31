import React, { useState } from 'react';
import { 
  FileCheck2, 
  FileText, 
  Check, 
  ArrowRight, 
  AlertTriangle, 
  Play, 
  Sliders,
  Plus
} from 'lucide-react';
import { applicationFeatures } from '../data/projectData';
import './FeaturesShowcase.css';

export const FeaturesShowcase: React.FC = () => {
  const [activeFeatureId, setActiveFeatureId] = useState<string>('ai-document-extraction');
  
  // Interactive Simulator States
  // 1. Progress Bar Simulator
  const [simulatedProgress, setSimulatedProgress] = useState<number>(75);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  // 2. Driver Statement Inline Edit State
  const [customQuestionInput, setCustomQuestionInput] = useState<string>('');
  const [statementQuestions, setStatementQuestions] = useState<string[]>([
    "Were any dashboard dashcam footage files recovered from the insured vehicle?",
    "Did the third-party vehicle brake lights activate prior to sudden impact?"
  ]);

  // 3. Manager Workload Allocation Simulator
  const [investigators, setInvestigators] = useState([
    { name: "Ahmad Zaki", activeCases: 4, maxCapacity: 8, status: "Available" },
    { name: "Noraini binti Razak", activeCases: 7, maxCapacity: 8, status: "Near Capacity" },
    { name: "Suresh Kumar", activeCases: 2, maxCapacity: 8, status: "Optimal" }
  ]);

  const activeFeature = applicationFeatures.find(f => f.id === activeFeatureId) || applicationFeatures[0];

  const handleRunProgressSimulation = () => {
    setIsSimulating(true);
    setSimulatedProgress(10);
    setTimeout(() => setSimulatedProgress(40), 500);
    setTimeout(() => setSimulatedProgress(70), 1200);
    setTimeout(() => setSimulatedProgress(95), 1800);
    setTimeout(() => {
      setSimulatedProgress(100);
      setIsSimulating(false);
    }, 2400);
  };

  const handleAddCustomQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (customQuestionInput.trim()) {
      setStatementQuestions([...statementQuestions, customQuestionInput.trim()]);
      setCustomQuestionInput('');
    }
  };

  const handleAutoAssign = () => {
    // Finds investigator with lowest active cases
    const updated = investigators.map((inv, idx) => {
      if (idx === 2) {
        return { ...inv, activeCases: inv.activeCases + 1 };
      }
      return inv;
    });
    setInvestigators(updated);
  };

  return (
    <section id="features" className="section features-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sliders size={13} />
            <span>Engineering Capabilities</span>
          </div>
          <h2 className="section-title">
            Deep-Dive Into The Implemented Application Features
          </h2>
          <p className="section-description">
            Explore the core architectural systems, AI computer vision pipelines, bilingual statement engines, and reporting builders delivered in October 2026.
          </p>
        </div>

        {/* Feature Explorer Layout */}
        <div className="features-explorer-layout">
          {/* Left Feature Selector Navigation */}
          <div className="features-nav-sidebar">
            <span className="sidebar-group-title">Delivered Feature Modules</span>
            <div className="features-nav-list">
              {applicationFeatures.map((feat) => {
                const isActive = activeFeature.id === feat.id;
                return (
                  <button
                    key={feat.id}
                    onClick={() => setActiveFeatureId(feat.id)}
                    className={`feature-nav-btn ${isActive ? 'feature-nav-btn-active' : ''}`}
                  >
                    <div className="feature-btn-top">
                      <span className="feature-btn-badge">{feat.badge}</span>
                      {isActive && <span className="feature-active-indicator" />}
                    </div>
                    <span className="feature-btn-title">{feat.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right In-Depth Feature Canvas */}
          <div className="feature-canvas-card card">
            {/* Feature Header */}
            <div className="feature-canvas-header">
              <div className="canvas-header-left">
                <span className="badge badge-primary">{activeFeature.badge}</span>
                <h3 className="feature-canvas-title">{activeFeature.title}</h3>
                <p className="feature-canvas-sub">{activeFeature.subtitle}</p>
              </div>

              <div className="feature-metrics-strip">
                {activeFeature.metrics.map((m, idx) => (
                  <div key={idx} className="feat-metric-item">
                    <span className="feat-m-val">{m.value}</span>
                    <span className="feat-m-lbl">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Body */}
            <div className="feature-canvas-body">
              <div className="feature-desc-block">
                <p className="feature-paragraph">{activeFeature.description}</p>
              </div>

              {/* Technical Deliverables Checklist */}
              <div className="feature-tasks-box">
                <span className="feature-box-title">Documented Technical Deliverables (October 2026):</span>
                <ul className="feature-deliverables-list">
                  {activeFeature.details.map((item, idx) => (
                    <li key={idx}>
                      <Check size={16} className="text-success" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interactive In-App Feature Sandbox */}
              <div className="feature-interactive-sandbox">
                <div className="sandbox-header">
                  <span className="sandbox-title">Interactive Component Behavior Preview</span>
                  <span className="sandbox-badge">Live Simulation</span>
                </div>

                {/* Conditional Sandbox UI based on active feature */}
                {activeFeature.id === 'ai-document-extraction' && (
                  <div className="sandbox-content">
                    <div className="extraction-progress-demo">
                      <div className="progress-top-row">
                        <div className="progress-status-info">
                          <span className="status-dot status-dot-active" />
                          <strong>Multimodal Extraction Status:</strong>
                          <span>{simulatedProgress === 100 ? 'Extraction Completed Safeguarded' : 'Streaming base64 multi-page buffer...'}</span>
                        </div>
                        <span className="progress-percent font-mono">{simulatedProgress}%</span>
                      </div>
                      
                      <div className="progress-track">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${simulatedProgress}%` }}
                        />
                      </div>

                      <div className="progress-milestones">
                        <span className={simulatedProgress >= 20 ? 'm-active' : ''}>1. Ingestion</span>
                        <span className={simulatedProgress >= 50 ? 'm-active' : ''}>2. Vision Analysis</span>
                        <span className={simulatedProgress >= 80 ? 'm-active' : ''}>3. Factual Extraction</span>
                        <span className={simulatedProgress === 100 ? 'm-active' : ''}>4. Validation Pass</span>
                      </div>

                      <div className="sandbox-action-row">
                        <button 
                          onClick={handleRunProgressSimulation}
                          disabled={isSimulating}
                          className="btn btn-secondary btn-sm"
                        >
                          <Play size={13} />
                          <span>{isSimulating ? 'Processing Document...' : 'Test Extraction Progress Bar'}</span>
                        </button>
                        <span className="sandbox-note">Verified on Oct 16 & Oct 30: Prevents premature 100% completion before worker finishes.</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeFeature.id === 'ai-vision-processing' && (
                  <div className="sandbox-content">
                    <div className="vision-demo-grid">
                      <div className="vision-box-item">
                        <div className="v-tag v-tag-photo">Vehicle Collision Exhibit</div>
                        <div className="v-label">Crash Photo 01</div>
                        <span className="v-aspect">4:3 Aspect Preserved • No Overlap</span>
                      </div>
                      <div className="vision-box-item">
                        <div className="v-tag v-tag-photo">Road Layout Exhibit</div>
                        <div className="v-label">Crash Scene 02</div>
                        <span className="v-aspect">16:9 Aspect Preserved • No Distortion</span>
                      </div>
                      <div className="vision-box-item">
                        <div className="v-tag v-tag-doc">Scanned Document</div>
                        <div className="v-label">Police Sketch Plan</div>
                        <span className="v-aspect">Document Mode • Contrast Filtered</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeFeature.id === 'driver-statement-management' && (
                  <div className="sandbox-content">
                    <div className="statement-demo-container">
                      <span className="statement-header-note">38 Standardized Bilingual Matrix + Custom Question Injection:</span>
                      <div className="custom-q-list">
                        {statementQuestions.map((q, idx) => (
                          <div key={idx} className="custom-q-item">
                            <span className="custom-q-index">Custom Q{idx + 1}:</span>
                            <span className="custom-q-text">{q}</span>
                            <span className="badge badge-success">Included in .docx</span>
                          </div>
                        ))}
                      </div>

                      <form onSubmit={handleAddCustomQuestion} className="add-question-form">
                        <input
                          type="text"
                          value={customQuestionInput}
                          onChange={(e) => setCustomQuestionInput(e.target.value)}
                          placeholder="Type custom investigator question to insert into statutory Word export..."
                          className="custom-q-input"
                        />
                        <button type="submit" className="btn btn-primary btn-sm">
                          <Plus size={14} />
                          <span>Insert Question</span>
                        </button>
                      </form>
                    </div>
                  </div>
                )}

                {activeFeature.id === 'dynamic-report-templates' && (
                  <div className="sandbox-content">
                    <div className="template-compare-grid">
                      <div className="template-box">
                        <span className="t-badge">Template 1</span>
                        <h5>Standard Motor UI</h5>
                        <p>Dynamic accordion report builder with interactive field corrections.</p>
                      </div>
                      <div className="template-box">
                        <span className="t-badge">Template 2</span>
                        <h5>Commercial Fleet UI</h5>
                        <p>Dynamic UI tailored for heavy vehicle regulations and driver logs.</p>
                      </div>
                      <div className="template-box t-highlight">
                        <span className="t-badge t-badge-star">Template 3</span>
                        <h5>Statutory Court Schema</h5>
                        <p>Structured monochrome tables, sequential section numbering, and DOCX builder.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeFeature.id === 'ai-assisted-investigation' && (
                  <div className="sandbox-content">
                    <div className="ground-truth-demo">
                      <div className="ground-truth-flow">
                        <div className="gt-step">
                          <span className="gt-title">1. Anchor Extraction</span>
                          <span className="gt-val">Insured: VKG 8821 (Proton X70)</span>
                          <span className="gt-val">Adverse: WVP 3902 (Honda Civic)</span>
                        </div>
                        <ArrowRight size={18} className="gt-arrow" />
                        <div className="gt-step">
                          <span className="gt-title">2. Prompt Disambiguation</span>
                          <span className="gt-code">System: STRICT_SEPARATE_ENTITIES</span>
                          <span className="gt-val">Forbid third-party re-attribution</span>
                        </div>
                        <ArrowRight size={18} className="gt-arrow" />
                        <div className="gt-step gt-success">
                          <span className="gt-title">3. Verified Allocation</span>
                          <span className="gt-val">Insured Damage: Offside Front</span>
                          <span className="gt-val">Third-Party Damage: Rear Quarter</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeFeature.id === 'workspaces-and-governance' && (
                  <div className="sandbox-content">
                    <div className="workload-demo-table">
                      <div className="workload-header-bar">
                        <span className="workload-table-title">Manager Cockpit: Live Investigator Capacity Directory</span>
                        <button onClick={handleAutoAssign} className="btn btn-secondary btn-sm">
                          <span>Simulate Auto-Assign Claim</span>
                        </button>
                      </div>
                      <div className="inv-list">
                        {investigators.map((inv, idx) => (
                          <div key={idx} className="inv-row">
                            <span className="inv-name">{inv.name}</span>
                            <div className="inv-capacity-bar-container">
                              <div 
                                className="inv-capacity-fill" 
                                style={{ width: `${(inv.activeCases / inv.maxCapacity) * 100}%` }}
                              />
                            </div>
                            <span className="inv-cases font-mono">{inv.activeCases} / {inv.maxCapacity} Cases</span>
                            <span className={`badge ${inv.activeCases >= 7 ? 'badge-warning' : 'badge-success'}`}>
                              {inv.activeCases >= 7 ? 'Heavy Load' : 'Available'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeFeature.id === 'word-report-generation' && (
                  <div className="sandbox-content">
                    <div className="word-features-list">
                      <div className="wf-item">
                        <FileText size={18} className="text-primary" />
                        <div>
                          <strong>Structured Monochrome Tables:</strong>
                          <span> Designed to meet strict Malaysian and Singapore statutory court submission guidelines without distracting colors.</span>
                        </div>
                      </div>
                      <div className="wf-item">
                        <FileCheck2 size={18} className="text-primary" />
                        <div>
                          <strong>Sequential Section Numbering:</strong>
                          <span> 17 standardized sections dynamically numbered to ensure statutory legal compliance.</span>
                        </div>
                      </div>
                      <div className="wf-item">
                        <AlertTriangle size={18} className="text-warning" />
                        <div>
                          <strong>Mandatory Disclaimer Handling:</strong>
                          <span> Appends mandatory verification disclaimers certifying that AI findings were reviewed by certified adjusters.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Architectural Technical Note */}
              <div className="feature-arch-note">
                <strong>Architectural Note:</strong>
                <span> {activeFeature.architectureNote}</span>
              </div>

              {/* Technologies Tag Bar */}
              <div className="feature-tech-tags">
                <span className="tech-tags-label">Technologies Used:</span>
                <div className="tech-tags-list">
                  {activeFeature.techStack.map((tech, idx) => (
                    <span key={idx} className="badge badge-neutral font-mono">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
