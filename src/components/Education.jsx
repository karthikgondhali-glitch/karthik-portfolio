import React from 'react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section 
      id="education" 
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
        {/* Left Column */}
        <div className="scroll-reveal" style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '440px' }}>
          <span 
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--color-accent)',
              fontWeight: 600,
              textTransform: 'uppercase'
            }}
          >
            Academics
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
            Education &amp; foundations
          </h2>
          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: 'var(--color-on-surface-variant)',
              lineHeight: '25px'
            }}
          >
            Rigorous computer science curriculum grounding software engineering in algorithms, systems, and hardware design.
          </p>
        </div>

        {/* Right Column: Editorial Degree Card */}
        <div 
          className="scroll-reveal stagger-1"
          style={{
            padding: '32px',
            borderRadius: '12px',
            backgroundColor: 'var(--color-surface-container-low)',
            border: '1px solid var(--color-outline-variant)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-accent)', fontWeight: 600 }}>
                UNDERGRADUATE DEGREE PROGRAM
              </span>
              <h3 
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '22px',
                  fontWeight: 600,
                  color: 'var(--color-on-surface)'
                }}
              >
                {educationData.branch}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-on-surface-variant)' }}>
                {educationData.institution}, Bengaluru
              </p>
            </div>

            <span 
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--color-on-surface-variant)',
                padding: '4px 10px',
                borderRadius: '4px',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-outline-variant)'
              }}
            >
              {educationData.status}
            </span>
          </div>

          {/* Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {educationData.highlights.map((h, i) => (
              <p 
                key={i}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--color-on-surface-variant)',
                  lineHeight: '22px'
                }}
              >
                • {h}
              </p>
            ))}
          </div>

          {/* Coursework Tags */}
          <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-outline-variant)' }}>
            <span style={{ fontFamily: 'var(--font-label)', fontSize: '12px', fontWeight: 600, color: 'var(--color-on-surface)', display: 'block', marginBottom: '10px' }}>
              RELEVANT CORE COURSEWORK
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {educationData.keyCoursework.map((course, idx) => (
                <span 
                  key={idx}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-outline-variant)',
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-on-surface)'
                  }}
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
