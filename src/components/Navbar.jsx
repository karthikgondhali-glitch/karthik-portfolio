import React, { useState, useEffect } from 'react';
import { personalData } from '../data/portfolioData';
import { FileDown, Sun, Moon, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenResume, scrollProgress = 0, isDark = false, onToggleDark, activeSection = 'hero' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'work', name: 'Selected work', href: '#work' },
    { id: 'practice', name: 'Practice', href: '#practice' },
    { id: 'skills', name: 'Skills', href: '#skills' },
    { id: 'ideas', name: 'Ideas & Lab', href: '#ideas' },
    { id: 'education', name: 'Education', href: '#education' },
    { id: 'contact', name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true" 
      />

      <header 
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          backgroundColor: isDark ? 'rgba(18, 21, 27, 0.95)' : 'rgba(247, 246, 242, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--color-outline-variant)'
        }}
      >
        <div 
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '0 24px',
            height: '76px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}
        >
          {/* Brand Logo & Monogram */}
          <a 
            href="#top" 
            onClick={(e) => handleNavClick(e, '#hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none'
            }}
            className="group"
          >
            <span 
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-on-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-headline)',
                fontSize: '16px',
                fontWeight: 600,
                transition: 'all var(--duration-state-change) var(--ease-state-change)'
              }}
              className="logo-circle"
            >
              K
            </span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span 
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: 'var(--color-on-surface)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2
                }}
              >
                Karthik V.G.
              </span>
              <span 
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--color-on-surface-variant)',
                  letterSpacing: '0.02em'
                }}
              >
                CSE · Backend & AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav 
            aria-label="Primary navigation" 
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '16px'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontFamily: 'var(--font-label)',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: isActive ? 'var(--color-on-surface)' : 'var(--color-on-surface-variant)',
                    backgroundColor: isActive ? 'var(--color-surface-container)' : 'transparent',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    transition: 'all var(--duration-state-change) var(--ease-state-change)',
                    textDecoration: 'none',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.target.style.color = 'var(--color-on-surface)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.target.style.color = 'var(--color-on-surface-variant)';
                  }}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span 
                      style={{
                        position: 'absolute',
                        bottom: '0px',
                        left: '12px',
                        right: '12px',
                        height: '2px',
                        backgroundColor: 'var(--color-accent)',
                        borderRadius: '2px',
                        animation: 'fadeSlideUp 180ms ease'
                      }} 
                    />
                  )}
                </a>
              );
            })}

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleDark}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid var(--color-outline-variant)',
                backgroundColor: 'var(--color-surface-container-low)',
                color: 'var(--color-on-surface)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all var(--duration-state-change) var(--ease-state-change)'
              }}
              title={isDark ? "Switch to Editorial Warm Paper" : "Switch to Luxury Dark Slate"}
              aria-label="Toggle visual theme"
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Resume Action */}
            <button
              onClick={onOpenResume}
              className="btn-editorial-secondary"
              style={{
                padding: '9px 18px',
                fontSize: '13px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <FileDown size={15} color="var(--color-accent)" />
              <span>Resume</span>
            </button>

            {/* Primary Conversation CTA */}
            <button
              type="button"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-editorial-primary"
              style={{
                padding: '10px 20px',
                fontSize: '14px'
              }}
            >
              <span>Start a conversation</span>
            </button>
          </nav>

          {/* Mobile Right Controls: Theme Toggle & Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="mobile-controls">
            <button
              onClick={onToggleDark}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1px solid var(--color-outline-variant)',
                backgroundColor: 'var(--color-surface-container-low)',
                color: 'var(--color-on-surface)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              type="button"
              aria-label="Open navigation menu"
              onClick={() => setMobileMenuOpen(true)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid var(--color-outline-variant)',
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-on-surface)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              className="mobile-hamburger-btn"
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(20, 24, 32, 0.45)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            justifyContent: 'flex-end'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            style={{
              width: '100%',
              maxWidth: '320px',
              height: '100%',
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-on-surface)',
              borderLeft: '1px solid var(--color-outline-variant)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)'
            }}
            className="drawer-animate"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--color-outline-variant)',
                  marginBottom: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span 
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary)',
                      color: 'var(--color-on-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-headline)',
                      fontSize: '14px',
                      fontWeight: 600
                    }}
                  >
                    K
                  </span>
                  <span style={{ fontFamily: 'var(--font-title)', fontSize: '16px', fontWeight: 600 }}>
                    Karthik V.G.
                  </span>
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid var(--color-outline-variant)',
                    backgroundColor: 'transparent',
                    color: 'var(--color-on-surface)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">close</span>
                </button>
              </div>

              {/* Drawer Nav Links */}
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      style={{
                        fontFamily: 'var(--font-title)',
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isActive ? 'var(--color-accent)' : 'var(--color-on-surface)',
                        backgroundColor: isActive ? 'var(--color-surface-container)' : 'transparent',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        transition: 'all var(--duration-state-change) var(--ease-state-change)'
                      }}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '20px', borderTop: '1px solid var(--color-outline-variant)' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="btn-editorial-secondary"
                style={{ width: '100%', padding: '12px' }}
              >
                <FileDown size={16} color="var(--color-accent)" />
                <span>Download Resume</span>
              </button>
              <button
                type="button"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-editorial-primary"
                style={{ width: '100%', padding: '12px' }}
              >
                <span>Start a conversation</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .logo-circle:hover {
          background-color: var(--color-accent) !important;
          color: var(--color-on-accent) !important;
        }
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-controls { display: none !important; }
        }
      `}</style>
    </>
  );
}
