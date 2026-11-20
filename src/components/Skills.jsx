import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSwitching, setIsSwitching] = useState(false);

  const categories = [
    { id: 'all', name: 'All disciplines' },
    ...skillsData.categories.map(c => ({ id: c.id, name: c.name }))
  ];

  const handleCategorySelect = (catId) => {
    if (catId === selectedCategory) return;
    setIsSwitching(true);
    setTimeout(() => {
      setSelectedCategory(catId);
      setIsSwitching(false);
    }, 140);
  };

  const filteredCategories = selectedCategory === 'all' 
    ? skillsData.categories 
    : skillsData.categories.filter(c => c.id === selectedCategory);

  return (
    <section 
      id="skills" 
      style={{
        borderTop: '1px solid var(--color-outline-variant)',
        backgroundColor: 'var(--color-surface)',
        padding: '64px 24px 80px'
      }}
    >
      <div 
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '36px'
        }}
      >
        {/* Header & Tabs */}
        <div 
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
              Core Competencies
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
              Skills &amp; technical craft
            </h2>
            <p 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--color-on-surface-variant)',
                maxWidth: '560px'
              }}
            >
              Honest proficiency indicators representing active conceptual depth and lab practice.
            </p>
          </div>

          {/* Filter Pills */}
          <div 
            className="scroll-reveal"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px',
              borderRadius: '8px',
              backgroundColor: 'var(--color-surface-container)',
              border: '1px solid var(--color-outline-variant)',
              flexWrap: 'wrap'
            }}
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '6px',
                    backgroundColor: isSelected ? 'var(--color-primary)' : 'transparent',
                    color: isSelected ? 'var(--color-on-primary)' : 'var(--color-on-surface-variant)',
                    fontFamily: 'var(--font-label)',
                    fontSize: '13px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all var(--duration-tab-switch) var(--ease-state-change)'
                  }}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div 
          style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
          className={`grid-transition ${isSwitching ? 'is-switching' : ''}`}
        >
          {filteredCategories.map((category, catIdx) => (
            <div key={category.id} className={`scroll-reveal stagger-${(catIdx % 4) + 1}`}>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  marginBottom: '14px',
                  paddingBottom: '8px',
                  borderBottom: '1px solid var(--color-outline-variant)'
                }}
              >
                <h3 
                  style={{
                    fontFamily: 'var(--font-title)',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--color-on-surface)'
                  }}
                >
                  {category.name}
                </h3>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-on-surface-variant)' }}>
                  {category.skills.length} skills
                </span>
              </div>

              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: '16px'
                }}
              >
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    style={{
                      padding: '18px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--color-surface-container-low)',
                      border: '1px solid var(--color-outline-variant)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '12px'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span 
                          style={{
                            fontFamily: 'var(--font-title)',
                            fontSize: '15px',
                            fontWeight: 600,
                            color: 'var(--color-on-surface)'
                          }}
                        >
                          {skill.name}
                        </span>
                        <span 
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '11px',
                            color: 'var(--color-accent)',
                            fontWeight: 600
                          }}
                        >
                          {skill.level}
                        </span>
                      </div>

                      <p 
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '13px',
                          color: 'var(--color-on-surface-variant)',
                          lineHeight: '19px'
                        }}
                      >
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
