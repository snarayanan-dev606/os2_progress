import React, { useState } from 'react';
import { 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  GitCommit, 
  Search, 
  ArrowRight
} from 'lucide-react';
import { developmentTimeline } from '../data/projectData';
import './DevelopmentJourney.css';

export const DevelopmentJourney: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState<number | 'all'>('all');
  const [expandedDates, setExpandedDates] = useState<Record<string, boolean>>({
    '2026-10-06': true,
    '2026-10-15': true,
    '2026-10-21': true,
    '2026-10-29': true,
    '2026-10-30': true
  });
  const [searchQuery, setSearchQuery] = useState('');

  const toggleExpand = (date: string) => {
    setExpandedDates(prev => ({
      ...prev,
      [date]: !prev[date]
    }));
  };

  const handleExpandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    developmentTimeline.forEach(item => {
      allExpanded[item.date] = true;
    });
    setExpandedDates(allExpanded);
  };

  const handleCollapseAll = () => {
    setExpandedDates({});
  };

  const filteredTimeline = developmentTimeline.filter(item => {
    const matchesWeek = selectedWeek === 'all' || item.week === selectedWeek;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.techTags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.tasks.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesWeek && matchesSearch;
  });

  const weekMilestones = [
    {
      week: 1,
      dates: "Oct 6 – Oct 9, 2026",
      title: "Foundation, DB Architecture & Secure Authentication",
      focus: "Domain research, relational schema design, JWT auth, and Gemini API exploration."
    },
    {
      week: 2,
      dates: "Oct 12 – Oct 16, 2026",
      title: "AI Vision, Driver Statement Engine & Workspace Workflow",
      focus: "Crash photo classification, 38 bilingual Q&A matrix, animated progress safeguards."
    },
    {
      week: 3,
      dates: "Oct 20 – Oct 23, 2026",
      title: "Dynamic Multi-Template Builders & Scalability Hardening",
      focus: "Templates 1, 2 & 3, Anchor Ground-Truth disambiguation, Celery background worker setup."
    },
    {
      week: 4,
      dates: "Oct 27 – Oct 30, 2026",
      title: "AWS Cloud Production Migration & Performance Optimization",
      focus: "EC2 Docker containers, S3 Vault, CloudFront CDN, RDS PostgreSQL, and rate-limit batching."
    }
  ];

  return (
    <section id="timeline" className="section section-alt journey-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Calendar size={13} />
            <span>Engineering Changelog</span>
          </div>
          <h2 className="section-title">
            October 2026 Full-Stack Development Journey
          </h2>
          <p className="section-description">
            A complete day-by-day record of technical milestones, architectural refactors, and AWS production deployment completed by the engineering team.
          </p>
        </div>

        {/* Weekly Milestone Overview Cards */}
        <div className="weekly-milestone-overview">
          {weekMilestones.map((wm) => {
            const isCurrentFilter = selectedWeek === wm.week;
            return (
              <div 
                key={wm.week} 
                className={`weekly-overview-card ${isCurrentFilter ? 'weekly-card-selected' : ''}`}
                onClick={() => setSelectedWeek(isCurrentFilter ? 'all' : wm.week)}
              >
                <div className="weekly-top-bar">
                  <span className="week-badge">Week 0{wm.week}</span>
                  <span className="week-dates font-mono">{wm.dates}</span>
                </div>
                <h4 className="week-title">{wm.title}</h4>
                <p className="week-focus">{wm.focus}</p>
                <div className="week-action-hint">
                  <span>{isCurrentFilter ? 'Showing This Week' : 'Filter Timeline'}</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Filter and Control Bar */}
        <div className="timeline-controls-bar">
          <div className="timeline-filter-pills">
            <button
              onClick={() => setSelectedWeek('all')}
              className={`pill-btn ${selectedWeek === 'all' ? 'pill-active' : ''}`}
            >
              All October (17 Milestones)
            </button>
            <button
              onClick={() => setSelectedWeek(1)}
              className={`pill-btn ${selectedWeek === 1 ? 'pill-active' : ''}`}
            >
              Week 1 (Oct 6–9)
            </button>
            <button
              onClick={() => setSelectedWeek(2)}
              className={`pill-btn ${selectedWeek === 2 ? 'pill-active' : ''}`}
            >
              Week 2 (Oct 12–16)
            </button>
            <button
              onClick={() => setSelectedWeek(3)}
              className={`pill-btn ${selectedWeek === 3 ? 'pill-active' : ''}`}
            >
              Week 3 (Oct 20–23)
            </button>
            <button
              onClick={() => setSelectedWeek(4)}
              className={`pill-btn ${selectedWeek === 4 ? 'pill-active' : ''}`}
            >
              Week 4 (Oct 27–30)
            </button>
          </div>

          <div className="timeline-search-and-expand">
            <div className="timeline-search-wrapper">
              <Search size={14} className="timeline-search-icon" />
              <input
                type="text"
                placeholder="Search milestones, bugs, tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="timeline-search-input"
              />
            </div>
            <button onClick={handleExpandAll} className="btn btn-secondary btn-sm expand-btn">Expand All</button>
            <button onClick={handleCollapseAll} className="btn btn-secondary btn-sm expand-btn">Collapse</button>
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="timeline-stream-container">
          <div className="timeline-central-spine" />

          {filteredTimeline.length === 0 ? (
            <div className="timeline-empty-state">
              <p>No development entries match the selected filters or search query.</p>
            </div>
          ) : (
            filteredTimeline.map((entry) => {
              const isExpanded = !!expandedDates[entry.date];
              const isDeploymentMilestone = entry.category === 'AWS Cloud' || entry.date === '2026-10-29' || entry.date === '2026-10-30';

              return (
                <div 
                  key={entry.date} 
                  className={`timeline-entry-row ${isDeploymentMilestone ? 'entry-deployment-row' : ''}`}
                >
                  {/* Left Column: Date and Badge */}
                  <div className="timeline-entry-meta">
                    <div className="meta-date-bubble">
                      <Calendar size={13} className="text-primary" />
                      <span className="meta-date-text">{entry.displayDate}</span>
                    </div>
                    <span className={`badge ${isDeploymentMilestone ? 'badge-primary' : 'badge-neutral'} entry-cat-badge`}>
                      {entry.category}
                    </span>
                  </div>

                  {/* Node Connector on Central Spine */}
                  <div className="timeline-node-connector">
                    <div className={`node-dot ${isDeploymentMilestone ? 'node-dot-aws' : ''}`}>
                      <GitCommit size={14} />
                    </div>
                  </div>

                  {/* Right Column: Card Content */}
                  <div className={`timeline-entry-card card ${isDeploymentMilestone ? 'card-aws-accent' : ''}`}>
                    <div 
                      className="card-header-clickable"
                      onClick={() => toggleExpand(entry.date)}
                    >
                      <div className="card-title-group">
                        <div className="card-badge-line">
                          <span className="card-week-indicator">Week {entry.week}</span>
                          {isDeploymentMilestone && (
                            <span className="badge badge-success">AWS Cloud Production Milestone</span>
                          )}
                        </div>
                        <h4 className="card-headline">{entry.title}</h4>
                        <p className="card-summary">{entry.summary}</p>
                      </div>

                      <button 
                        className="expand-toggle-icon-btn"
                        aria-label="Toggle details"
                      >
                        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </div>

                    {/* Expandable Details Block */}
                    {isExpanded && (
                      <div className="card-expanded-content">
                        <div className="tasks-completed-box">
                          <span className="tasks-header-lbl">Completed Engineering Activities:</span>
                          <ul className="tasks-bullet-list">
                            {entry.tasks.map((task, idx) => (
                              <li key={idx}>
                                <CheckCircle2 size={15} className="text-success task-check-icon" />
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {entry.notes && (
                          <div className="engineering-notes-callout">
                            <strong>Technical Rationale:</strong>
                            <span> {entry.notes}</span>
                          </div>
                        )}

                        <div className="entry-footer-tags">
                          <span className="tags-lbl">Stack / Subsystems:</span>
                          <div className="entry-tags-row">
                            {entry.techTags.map((tag, idx) => (
                              <span key={idx} className="badge badge-neutral font-mono">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
