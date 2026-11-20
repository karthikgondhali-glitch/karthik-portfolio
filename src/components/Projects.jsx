import React, { useState } from 'react';
import { featuredProjects } from '../data/portfolioData';
import { Github } from './BrandIcons';
import { ExternalLink } from 'lucide-react';

export default function Projects({ onOpenCaseStudy, onSelectProject }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isSwitching, setIsSwitching] = useState(false);
  const handleOpenCase = onOpenCaseStudy || onSelectProject || (() => {});

  const handleFilterChange = (filterId) => {
    if (filterId === selectedFilter) return;
    setIsSwitching(true);
    setTimeout(() => {
      setSelectedFilter(filterId);
      setIsSwitching(false);
    }, 140);
  };

  const filterTabs = [
    { id: 'all', label: 'All work' },
    { id: 'govtech', label: 'GovTech & FinTech' },
    { id: 'iot', label: 'IoT & Embedded' },
    { id: 'ai', label: 'AI & Systems' }
  ];

  const matchesCategory = (project, filter) => {
    if (filter === 'all') return true;
    if (filter === 'govtech') return project.domain.includes('GovTech') || project.domain.includes('FinTech');
    if (filter === 'iot') return project.domain.includes('IoT') || project.domain.includes('Embedded');
    if (filter === 'ai') return project.domain.includes('AI') || project.domain.includes('FoodTech') || project.domain.includes('EdTech');
    return true;
  };

  const filteredProjects = featuredProjects.filter(p => matchesCategory(p, selectedFilter));

  // Visual graphical cover banner for each project
  const renderCardBanner = (project) => {
    if (project.id === 'udyam-setu') {
      return (
        <div 
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--color-surface-container)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '24px',
            borderBottom: '1px solid var(--color-outline-variant)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-accent)', fontWeight: 600 }}>
              BHASHINI INDIC ENGINE + GEMINI 1.5
            </span>
            <div style={{ display: 'flex', gap: '4px' }}>
              <span style={{ fontSize: '11px', padding: '2px 6px', borderRadius: '4px', background: 'var(--color-surface-container-high)', border: '1px solid var(--color-outline-variant)' }}>ಕನ್ನಡ</span>
              <span style={{ fontSize: '11px', padding: '2px 6px', borderRadius: '4px', background: 'var(--color-surface-container-high)', border: '1px solid var(--color-outline-variant)' }}>हिंदी</span>
              <span style={{ fontSize: '11px', padding: '2px 6px', borderRadius: '4px', background: 'var(--color-surface-container-high)', border: '1px solid var(--color-outline-variant)' }}>తెలుగు</span>
            </div>
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: 'var(--color-on-surface)' }}>
              UdyamSetu
            </span>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-on-surface-variant)', marginTop: '2px' }}>
              MSME Scheme Discovery & Algorithmic Eligibility Verification
            </p>
          </div>
        </div>
      );
    }

    if (project.id === 'focus-buddy') {
      return (
        <div 
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--color-surface-container)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '24px',
            borderBottom: '1px solid var(--color-outline-variant)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-accent)', fontWeight: 600 }}>
              ESP32 HARDWARE FIRMWARE · FREERTOS
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-success)', fontWeight: 600 }}>
              ● ACTIVE TIMER
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: 'var(--color-on-surface)' }}>
                Focus Buddy
              </span>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-on-surface-variant)', marginTop: '2px' }}>
                OLED Display · Ultrasonic Sensor · Servo Feedback
              </p>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', fontWeight: 700, color: 'var(--color-on-surface)' }}>
              25:00
            </span>
          </div>
        </div>
      );
    }

    if (project.id === 'moodify-mirror') {
      return (
        <div 
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--color-surface-container)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '24px',
            borderBottom: '1px solid var(--color-outline-variant)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-accent)', fontWeight: 600 }}>
              ESP32-CAM · GEMINI MULTIMODAL API
            </span>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }} />
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: 'var(--color-on-surface)' }}>
              Moodify Mirror
            </span>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-on-surface-variant)', marginTop: '2px' }}>
              Facial Mood Analysis · WS2812B LEDs · MAX98357A Audio
            </p>
          </div>
        </div>
      );
    }

    if (project.id === 'cravely-reels2meals') {
      return (
        <div 
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--color-surface-container)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '24px',
            borderBottom: '1px solid var(--color-outline-variant)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-accent)', fontWeight: 600 }}>
              FOODTECH · MULTIMODAL VOICE PARSER
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-on-surface-variant)' }}>
              Kannada · Hindi
            </span>
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: 'var(--color-on-surface)' }}>
              Cravely – Reels2Meals
            </span>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-on-surface-variant)', marginTop: '2px' }}>
              Cooking Video & Vernacular Voice to Instant Grocery Lists
            </p>
          </div>
        </div>
      );
    }

    if (project.id === 'neurofeed') {
      return (
        <div 
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--color-surface-container)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '24px',
            borderBottom: '1px solid var(--color-outline-variant)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-accent)', fontWeight: 600 }}>
              EDTECH · ADAPTIVE KNOWLEDGE GRAPHS
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-on-surface-variant)' }}>
              Level 3 Node
            </span>
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: 'var(--color-on-surface)' }}>
              NeuroFeed
            </span>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-on-surface-variant)', marginTop: '2px' }}>
              Personalized Micro-Learning Stream & Socratic Concept Breakdown
            </p>
          </div>
        </div>
      );
    }

    // Default for CrisisGrid AI
    return (
      <div 
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'var(--color-surface-container)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '24px',
          borderBottom: '1px solid var(--color-outline-variant)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-accent)', fontWeight: 600 }}>
            AI & SOCIAL IMPACT · LOW-BANDWIDTH MESH
          </span>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-success)' }} />
        </div>
        <div>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: 'var(--color-on-surface)' }}>
            CrisisGrid AI
          </span>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-on-surface-variant)', marginTop: '2px' }}>
            Emergency Signal Triage & Volunteer Resource Mobilization
          </p>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="work" 
      style={{
        borderTop: '1px solid var(--color-outline-variant)',
        backgroundColor: 'var(--color-surface-container-low)',
        padding: '64px 24px 80px'
      }}
    >
      <div 
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px'
        }}
      >
        {/* Section Title & Horizontal Tabs */}
        <div 
          className="scroll-reveal"
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <h2 
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 600,
                color: 'var(--color-on-surface)',
                letterSpacing: '-0.5px'
              }}
            >
              Selected work
            </h2>
            <p 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--color-on-surface-variant)',
                maxWidth: '540px'
              }}
            >
              Filter by discipline to inspect shipped products, architecture specs, and measurable outcomes.
            </p>
          </div>

          {/* Filter Tabs Bar */}
          <div 
            role="tablist" 
            aria-label="Filter projects by discipline" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px',
              borderRadius: '8px',
              backgroundColor: 'var(--color-surface-container)',
              border: '1px solid var(--color-outline-variant)'
            }}
          >
            {filterTabs.map((tab) => {
              const isSelected = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleFilterChange(tab.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '6px',
                    backgroundColor: isSelected ? 'var(--color-primary)' : 'transparent',
                    color: isSelected ? 'var(--color-on-primary)' : 'var(--color-on-surface-variant)',
                    fontFamily: 'var(--font-label)',
                    fontSize: '13px',
                    fontWeight: 600,
                    transition: 'all var(--duration-tab-switch) var(--ease-state-change)',
                    cursor: 'pointer',
                    border: 'none',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Study Cards Grid */}
        <div 
          id="projects-grid" 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '32px'
          }}
          className={`grid-transition ${isSwitching ? 'is-switching' : ''}`}
        >
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              role="button"
              tabIndex={0}
              onClick={() => handleOpenCase(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenCase(project);
                }
              }}
              className={`group scroll-reveal stagger-${(idx % 6) + 1}`}
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-outline-variant)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform var(--duration-card-hover) var(--ease-card-hover), box-shadow var(--duration-card-hover) var(--ease-card-hover)',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.04)';
              }}
            >
              {/* Aspect Ratio Header [16/10] */}
              <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                {renderCardBanner(project)}
              </div>

              {/* Card Body */}
              <div 
                style={{
                  padding: '24px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '16px'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '8px' }}>
                    <h3 
                      style={{
                        fontFamily: 'var(--font-title)',
                        fontSize: '19px',
                        fontWeight: 600,
                        color: 'var(--color-on-surface)',
                        transition: 'color var(--duration-state-change)'
                      }}
                      className="group-hover:text-accent"
                    >
                      {project.title}
                    </h3>
                    <span 
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        color: 'var(--color-on-surface-variant)',
                        fontVariantNumeric: 'tabular-nums'
                      }}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p 
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--color-on-surface-variant)',
                      lineHeight: '22px'
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Card Footer Bar */}
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '12px',
                    borderTop: '1px solid var(--color-outline-variant)',
                    gap: '10px',
                    flexWrap: 'wrap'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'var(--font-label)',
                      fontSize: '12px',
                      color: 'var(--color-on-surface-variant)'
                    }}
                  >
                    {project.domain}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          padding: '5px 10px',
                          borderRadius: '6px',
                          border: '1px solid var(--color-outline-variant)',
                          backgroundColor: 'var(--color-surface-container)',
                          color: 'var(--color-on-surface)',
                          fontFamily: 'var(--font-label)',
                          fontSize: '12px',
                          fontWeight: 600,
                          textDecoration: 'none',
                          transition: 'all var(--duration-state-change) var(--ease-state-change)'
                        }}
                        className="hover:border-accent hover:text-accent"
                        title={`View ${project.title} on GitHub`}
                      >
                        <Github size={13} />
                        <span>Code</span>
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          padding: '5px 10px',
                          borderRadius: '6px',
                          border: '1px solid var(--color-outline-variant)',
                          backgroundColor: 'var(--color-surface-container)',
                          color: 'var(--color-accent)',
                          fontFamily: 'var(--font-label)',
                          fontSize: '12px',
                          fontWeight: 600,
                          textDecoration: 'none',
                          transition: 'all var(--duration-state-change) var(--ease-state-change)'
                        }}
                        className="hover:border-accent"
                        title={`Open Live ${project.title} Website`}
                      >
                        <span>Live</span>
                        <ExternalLink size={12} />
                      </a>
                    )}

                    <span 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontFamily: 'var(--font-label)',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--color-accent)'
                      }}
                    >
                      <span>Inspect specs</span>
                      <span className="material-symbols-outlined text-[16px] transition-transform duration-state-change group-hover:translate-x-1" aria-hidden="true">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
