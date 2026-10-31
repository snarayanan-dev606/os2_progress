import React, { useState } from 'react';
import { 
  Cpu, 
  CheckCircle2, 
  Search,
  ShieldCheck
} from 'lucide-react';
import { techStackData } from '../data/projectData';
import './TechnologyStack.css';

export const TechnologyStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [techSearch, setTechSearch] = useState<string>('');

  const categories = [
    'All',
    'Frontend',
    'Backend',
    'Database & Cache',
    'AI & Vision',
    'Background Processing',
    'Cloud & Deployment',
    'Document Processing'
  ];

  const filteredTech = techStackData.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesQuery = techSearch === '' || 
      item.name.toLowerCase().includes(techSearch.toLowerCase()) ||
      item.role.toLowerCase().includes(techSearch.toLowerCase()) ||
      item.whyChosen.toLowerCase().includes(techSearch.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="tech-stack" className="section tech-stack-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={13} />
            <span>Architecture & Tooling</span>
          </div>
          <h2 className="section-title">
            Enterprise Technology Stack
          </h2>
          <p className="section-description">
            Selected specifically for high-throughput multimodal AI streaming, type-safe data validation, statutory document compilation, and cloud deployment.
          </p>
        </div>

        {/* Filter and Category Pills */}
        <div className="tech-filter-bar">
          <div className="tech-category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`tech-pill-btn ${selectedCategory === cat ? 'tech-pill-active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="tech-search-box">
            <Search size={14} className="tech-search-icon" />
            <input
              type="text"
              placeholder="Search stack..."
              value={techSearch}
              onChange={(e) => setTechSearch(e.target.value)}
              className="tech-search-input"
            />
          </div>
        </div>

        {/* Tech Cards Grid */}
        <div className="tech-grid">
          {filteredTech.map((item, idx) => (
            <div key={idx} className="tech-card card">
              <div className="tech-card-header">
                <div className="tech-title-wrap">
                  <h4 className="tech-name">{item.name}</h4>
                  <span className="badge badge-neutral font-mono">{item.version}</span>
                </div>
                <span className="badge badge-primary tech-cat-badge">{item.category}</span>
              </div>

              <div className="tech-card-body">
                <div className="tech-role-block">
                  <span className="tech-role-lbl">Architectural Role:</span>
                  <p className="tech-role-text">{item.role}</p>
                </div>

                <div className="tech-why-block">
                  <span className="tech-why-lbl">Why Selected for Platform:</span>
                  <p className="tech-why-text">{item.whyChosen}</p>
                </div>
              </div>

              <div className="tech-card-footer">
                <span className="tech-verified-tag">
                  <CheckCircle2 size={13} className="text-success" />
                  <span>Verified in Production</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stack Discipline Callout */}
        <div className="stack-discipline-box card">
          <div className="discipline-icon">
            <ShieldCheck size={24} className="text-primary" />
          </div>
          <div className="discipline-content">
            <h4 className="discipline-title">Strict Engineering Discipline & Zero Unnecessary Dependencies</h4>
            <p className="discipline-text">
              Every technology in this architecture was selected to solve a concrete forensic workflow challenge: FastAPI for non-blocking multimodal I/O; Pydantic v2 for zero-tolerance schema serialization; Celery & Redis for asynchronous background tasks; and Google Gemini for native base64 multimodal PDF analysis. Deprecated libraries and unnecessary dependencies were audited and removed prior to AWS cloud deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
