import React, { useState } from 'react';
import { projectIdeas } from '../data/portfolioData';
import { Search } from 'lucide-react';

export default function IdeasExplorations({ onOpenCaseStudy, onSelectIdea }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const handleOpen = onOpenCaseStudy || onSelectIdea;

  const allTags = ['All', 'AI', 'IoT', 'Sustainability', 'EdTech', 'FinTech'];

  const filteredIdeas = projectIdeas.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          idea.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          idea.domain.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = selectedTag === 'All' || 
                       idea.tags.some(t => t.toLowerCase().includes(selectedTag.toLowerCase())) ||
                       idea.domain.toLowerCase().includes(selectedTag.toLowerCase());

    return matchesSearch && matchesTag;
  });

  return (
    <section 
      id="ideas" 
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
        {/* Header */}
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
            <span 
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--color-accent)',
                fontWeight: 600,
                textTransform: 'uppercase'
              }}
            >
              Explorations & Concepts
            </span>
            <h2 
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 600,
                color: 'var(--color-on-surface)',
                letterSpacing: '-0.5px'
              }}
            >
              Ideas &amp; exploration lab
            </h2>
            <p 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--color-on-surface-variant)',
                maxWidth: '560px'
              }}
            >
              A transparent lab of conceptual architectures and emerging prototypes in my engineering notebook.
            </p>
          </div>

          {/* Search Input & Tags */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '420px' }}>
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type="text"
                placeholder="Search ideas (e.g. OMR, AgriTech, Exam)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-outline-variant)',
                  color: 'var(--color-on-surface)',
                  fontSize: '13px',
                  outline: 'none',
                  fontFamily: 'var(--font-body)'
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {allTags.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'var(--font-label)',
                    backgroundColor: selectedTag === tag ? 'var(--color-primary)' : 'var(--color-surface)',
                    color: selectedTag === tag ? 'var(--color-on-primary)' : 'var(--color-on-surface-variant)',
                    border: '1px solid var(--color-outline-variant)',
                    cursor: 'pointer'
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Ideas Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '20px'
          }}
        >
          {filteredIdeas.map((idea, idx) => (
            <article 
              key={idea.id}
              role={handleOpen ? "button" : undefined}
              tabIndex={handleOpen ? 0 : undefined}
              onClick={() => handleOpen && handleOpen(idea)}
              onKeyDown={(e) => {
                if (handleOpen && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  handleOpen(idea);
                }
              }}
              className={`scroll-reveal stagger-${(idx % 6) + 1}`}
              style={{
                padding: '24px',
                borderRadius: '8px',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-outline-variant)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '14px',
                cursor: handleOpen ? 'pointer' : 'default',
                transition: 'transform var(--duration-card-hover), box-shadow var(--duration-card-hover)'
              }}
              onMouseEnter={(e) => {
                if (handleOpen) {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 24px rgba(0,0,0,0.06)';
                }
              }}
              onMouseLeave={(e) => {
                if (handleOpen) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-accent)', fontWeight: 600 }}>
                    {idea.domain}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-on-surface-variant)' }}>
                    {idea.status}
                  </span>
                </div>

                <h3 
                  style={{
                    fontFamily: 'var(--font-title)',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: 'var(--color-on-surface)',
                    marginBottom: '6px'
                  }}
                >
                  {idea.title}
                </h3>

                <p 
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'var(--color-on-surface-variant)',
                    lineHeight: '20px'
                  }}
                >
                  {idea.description}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '10px', borderTop: '1px solid var(--color-outline-variant)' }}>
                {idea.tags.map((t, idx) => (
                  <span 
                    key={idx}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--color-on-surface-variant)'
                    }}
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
