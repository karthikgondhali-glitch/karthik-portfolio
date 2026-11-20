import React from 'react';
import { achievementsData } from '../data/portfolioData';

export default function Hackathons() {
  return (
    <section 
      id="practice" 
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
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'flex-start'
        }}
      >
        {/* Left Column: Headline & Statement */}
        <div className="scroll-reveal" style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '460px' }}>
          <h2 
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 600,
              color: 'var(--color-on-surface)',
              letterSpacing: '-0.5px',
              lineHeight: '1.2'
            }}
          >
            Practice &amp; craft
          </h2>

          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: 'var(--color-on-surface-variant)',
              lineHeight: '26px',
              textWrap: 'pretty'
            }}
          >
            I thrive in collaborative hackathon sprints and real-world project builds, turning complex problem statements into working software and embedded hardware prototypes.
          </p>

          <div 
            style={{
              marginTop: '12px',
              padding: '16px',
              borderRadius: '8px',
              backgroundColor: 'var(--color-surface-container-low)',
              border: '1px solid var(--color-outline-variant)'
            }}
          >
            <span style={{ fontFamily: 'var(--font-label)', fontSize: '13px', fontWeight: 600, color: 'var(--color-accent)', display: 'block', marginBottom: '4px' }}>
              Engineering Mentality
            </span>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-on-surface-variant)', lineHeight: '20px' }}>
              Focused on understanding system lifecycles and algorithmic design rather than copy-pasting solutions.
            </p>
          </div>
        </div>

        {/* Right Column: Divided Milestone Entries */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid var(--color-outline-variant)',
            borderBottom: '1px solid var(--color-outline-variant)'
          }}
        >
          {achievementsData.timeline.map((item, index) => (
            <div 
              key={item.id}
              className={`scroll-reveal stagger-${(index % 4) + 1}`}
              style={{
                padding: '24px 0',
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                gap: '24px',
                borderBottom: index !== achievementsData.timeline.length - 1 ? '1px solid var(--color-outline-variant)' : 'none'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-accent)', fontWeight: 600 }}>
                    {item.badge}
                  </span>
                </div>

                <h3 
                  style={{
                    fontFamily: 'var(--font-title)',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--color-on-surface)'
                  }}
                >
                  {item.event}
                </h3>

                <p 
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--color-on-surface-variant)',
                    lineHeight: '22px',
                    maxWidth: '560px'
                  }}
                >
                  {item.description}
                </p>
              </div>

              <span 
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--color-on-surface-variant)',
                  fontVariantNumeric: 'tabular-nums',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
