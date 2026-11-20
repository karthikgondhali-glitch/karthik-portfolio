import React from 'react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      style={{
        borderTop: '1px solid var(--color-outline-variant)',
        backgroundColor: 'var(--color-surface)',
        padding: '32px 24px'
      }}
    >
      <div 
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '13px',
          color: 'var(--color-on-surface-variant)',
          fontFamily: 'var(--font-body)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span 
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-on-primary)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-headline)',
              fontSize: '11px',
              fontWeight: 600
            }}
          >
            K
          </span>
          <span>© {new Date().getFullYear()} Karthik V.G. All rights reserved.</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a 
            href="#top" 
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            style={{
              fontFamily: 'var(--font-label)',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--color-on-surface-variant)',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--color-on-surface)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--color-on-surface-variant)'}
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
