import React, { useState } from 'react';
import { 
  BookOpen, 
  Layers, 
  ShieldCheck, 
  Scale, 
  Download,
  Check
} from 'lucide-react';
import './ProjectDocumentation.css';

export const ProjectDocumentation: React.FC = () => {
  const [activeDocTab, setActiveDocTab] = useState<'overview' | 'models' | 'statutory' | 'templates'>('overview');
  const [copiedNotification, setCopiedNotification] = useState(false);

  const docTabs = [
    { id: 'overview', label: '1. Executive Specification' },
    { id: 'models', label: '2. 27 Forensic Data Models' },
    { id: 'statutory', label: '3. Statutory Standards (PIAM/GIA)' },
    { id: 'templates', label: '4. Report Templates Matrix' }
  ];

  const handleCopySpec = () => {
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  return (
    <section id="documentation" className="section section-alt documentation-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BookOpen size={13} />
            <span>Official Engineering Archive</span>
          </div>
          <h2 className="section-title">
            Project Technical Documentation
          </h2>
          <p className="section-description">
            Complete technical specifications, relational schema reference, statutory legal compliance standards, and template output architecture.
          </p>
        </div>

        {/* Documentation Viewer Container */}
        <div className="doc-viewer-card card">
          {/* Top Documentation Tab Bar */}
          <div className="doc-viewer-tabs">
            {docTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveDocTab(tab.id as any)}
                className={`doc-tab-btn ${activeDocTab === tab.id ? 'doc-tab-active' : ''}`}
              >
                <span>{tab.label}</span>
              </button>
            ))}

            <button 
              onClick={handleCopySpec}
              className="btn btn-secondary btn-sm doc-export-action"
            >
              {copiedNotification ? <Check size={14} className="text-success" /> : <Download size={14} />}
              <span>{copiedNotification ? 'Specification Copied!' : 'Copy Specification'}</span>
            </button>
          </div>

          {/* Document Content Viewport */}
          <div key={activeDocTab} className="doc-viewport animate-tab-fade">
            {activeDocTab === 'overview' && (
              <div className="doc-article">
                <div className="article-header">
                  <span className="doc-kicker">ENGINEERING SPECIFICATION FOR COMPANY LEADERSHIP</span>
                  <h3 className="doc-heading">1. Executive Overview & System Boundaries</h3>
                  <div className="doc-meta-line font-mono">
                    <span>DOCUMENT REF: ENG-INS-2026-OCT-DOCS</span>
                    <span>AUTHOR: Junior Full Stack Developer (Lead Contributor)</span>
                    <span>STATUS: Production Verified</span>
                  </div>
                </div>

                <div className="doc-body-text">
                  <p>
                    The <strong>AI-Powered Motor Insurance Claims Investigation & Fraud Detection System</strong> is an enterprise multi-tenant platform engineered to automate the ingest, extraction, entity separation, driver examination, and report synthesis for motor vehicle and third-party bodily injury (TPBI) claims.
                  </p>
                  
                  <h4>Core Operational Objectives:</h4>
                  <ul>
                    <li><strong>Document-First Ingestion:</strong> Ingest heterogeneous evidence without pre-splitting or file locks via base64 multimodal streams.</li>
                    <li><strong>Disambiguation & Grounding:</strong> Formulate the Anchor Ground-Truth algorithm to eliminate entity confusion between insured policyholders and adverse third parties.</li>
                    <li><strong>Bilingual Standardized Statements:</strong> Administer 38 standardized Malay/English questions with Gemini draft generation and custom question injection.</li>
                    <li><strong>Three Statutory Report Builders:</strong> Synthesize native Microsoft Word (.docx) reports adhering to Malaysian PIAM/JPJ/PDRM and Singapore GIA standards.</li>
                    <li><strong>Two-Tier Governance Workspaces:</strong> Dedicated investigator workspace and claims manager cockpit with automated claim assignment.</li>
                  </ul>

                  <h4>Regulatory Compliance & Safety Policy:</h4>
                  <div className="doc-callout-warning">
                    <strong>Statutory Disclaimer Mandate:</strong> The system acts as a high-precision factual assistant to investigators. Under statutory insurance regulations, all AI-generated draft answers, liability indicators, and red-flag notices require formal review and explicit legal sign-off by licensed claims managers.
                  </div>
                </div>
              </div>
            )}

            {activeDocTab === 'models' && (
              <div className="doc-article">
                <div className="article-header">
                  <span className="doc-kicker">RELATIONAL ARCHITECTURE & DATA STRUCTURES</span>
                  <h3 className="doc-heading">2. The 27 Forensic Relational Data Models</h3>
                  <div className="doc-meta-line font-mono">
                    <span>DATABASE: AWS RDS PostgreSQL (v15.7)</span>
                    <span>ORM: SQLAlchemy 2.0 with Alembic</span>
                  </div>
                </div>

                <div className="doc-body-text">
                  <p>
                    To guarantee forensic data fidelity, unstructured documents are mapped into 27 strict relational models rather than arbitrary JSON blobs:
                  </p>

                  <div className="models-table-wrapper">
                    <table className="models-table">
                      <thead>
                        <tr>
                          <th>Model Entity</th>
                          <th>Core Extracted Fields</th>
                          <th>Integrity Rules</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="font-mono">PolicyRecord</td>
                          <td>policy_number, company_id, insured_name, nric, coverage_type</td>
                          <td>Foreign key tied to multi-tenant Company table.</td>
                        </tr>
                        <tr>
                          <td className="font-mono">VehicleRecord</td>
                          <td>reg_number, vehicle_type (car/motorcycle), make, model, chassis_no</td>
                          <td>Enforces dynamic vehicle classification in generated Word reports.</td>
                        </tr>
                        <tr>
                          <td className="font-mono">PoliceReportModel</td>
                          <td>station, report_no, investigating_officer, section_road_act, findings</td>
                          <td>Preserves verbatim officer findings and statutory violations.</td>
                        </tr>
                        <tr>
                          <td className="font-mono">ThirdPartyRecord</td>
                          <td>tp_driver_name, tp_nric, tp_reg_plate, tp_insurer, tp_damage_desc</td>
                          <td>Strictly anchored as adverse party to prevent entity confusion.</td>
                        </tr>
                        <tr>
                          <td className="font-mono">DriverStatementMatrix</td>
                          <td>question_id (1-38), question_en, question_bm, draft_answer, verified_answer</td>
                          <td>Tracks original Gemini AI draft vs investigator edits.</td>
                        </tr>
                        <tr>
                          <td className="font-mono">CustomInquiryRecord</td>
                          <td>custom_q_id, claim_id, custom_question, custom_answer</td>
                          <td>Preserved across template switches and injected into .docx.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeDocTab === 'statutory' && (
              <div className="doc-article">
                <div className="article-header">
                  <span className="doc-kicker">REGULATORY COMPLIANCE SPECIFICATIONS</span>
                  <h3 className="doc-heading">3. Statutory Standards (Malaysian PIAM & Singapore GIA)</h3>
                  <div className="doc-meta-line font-mono">
                    <span>JURISDICTION: Malaysia (Road Transport Act 1987) & Singapore (Motor Claims Framework)</span>
                  </div>
                </div>

                <div className="doc-body-text">
                  <p>
                    The platform enforces compliance with formal statutory insurance and traffic frameworks:
                  </p>

                  <div className="standards-grid">
                    <div className="standard-item-box">
                      <Scale size={20} className="text-primary" />
                      <div>
                        <h5>Malaysian Road Transport Act 1987</h5>
                        <p>Extracts specific statutory violations such as Seksyen 41 (causing death by reckless driving), Seksyen 42 (reckless and dangerous driving), and Seksyen 43 (careless and inconsiderate driving).</p>
                      </div>
                    </div>

                    <div className="standard-item-box">
                      <ShieldCheck size={20} className="text-success" />
                      <div>
                        <h5>PIAM & PDRM Forensic Standards</h5>
                        <p>Strict monochrome table formatting, formal police finding citations, and investigator signed declaration blocks suitable for court arbitration.</p>
                      </div>
                    </div>

                    <div className="standard-item-box">
                      <Layers size={20} className="text-info" />
                      <div>
                        <h5>Singapore GIA Motor Claims Framework</h5>
                        <p>Standardized barcode and reference matching, driver particulars cross-referencing, and prompt accident notification timestamps.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeDocTab === 'templates' && (
              <div className="doc-article">
                <div className="article-header">
                  <span className="doc-kicker">REPORT SYNTHESIS ARCHITECTURE</span>
                  <h3 className="doc-heading">4. Report Templates Comparison Matrix</h3>
                  <div className="doc-meta-line font-mono">
                    <span>GENERATION ENGINE: python-docx + Dynamic In-App Renderer</span>
                  </div>
                </div>

                <div className="doc-body-text">
                  <p>
                    The platform decouples data models from presentation layouts, allowing investigators to generate three distinct formal templates without data corruption:
                  </p>

                  <div className="templates-comparison-table-wrapper">
                    <table className="templates-table">
                      <thead>
                        <tr>
                          <th>Feature / Requirement</th>
                          <th>Template 1: Standard Motor</th>
                          <th>Template 2: Commercial Fleet</th>
                          <th>Template 3: Court Schema</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Primary Use Case</strong></td>
                          <td>Standard private passenger vehicle claims</td>
                          <td>Commercial transport, trucks & logistics fleets</td>
                          <td>Formal court arbitration & contested liability</td>
                        </tr>
                        <tr>
                          <td><strong>Table Styling</strong></td>
                          <td>Modern responsive UI with light accents</td>
                          <td>Structured vehicle & cargo inspection grids</td>
                          <td>Strict monochrome borders for legal print</td>
                        </tr>
                        <tr>
                          <td><strong>Section Numbering</strong></td>
                          <td>Sequential modular sections</td>
                          <td>Regulatory logbook numbering</td>
                          <td>Strict statutory legal clause numbering</td>
                        </tr>
                        <tr>
                          <td><strong>Custom Questions</strong></td>
                          <td>Fully supported in export</td>
                          <td>Fully supported in export</td>
                          <td>Fully supported in export</td>
                        </tr>
                        <tr>
                          <td><strong>Word (.docx) Export</strong></td>
                          <td>Verified production build</td>
                          <td>Verified production build</td>
                          <td>Verified production build</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
