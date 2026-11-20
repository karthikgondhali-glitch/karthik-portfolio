import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Check, ExternalLink } from 'lucide-react';
import { Github } from './BrandIcons';

export default function ProjectModal({ project, onClose, onShowToast }) {
  const [activeTab, setActiveTab] = useState('specs');
  
  // Simulation states
  const [simTurnover, setSimTurnover] = useState('Under ₹10 Lakhs');
  const [simRunning, setSimRunning] = useState(false);
  const [simResult, setSimResult] = useState(null);

  // Focus Buddy simulation
  const [fbMinutes, setFbMinutes] = useState(25);
  const [fbRunning, setFbRunning] = useState(false);

  // Moodify simulation
  const [moodActive, setMoodActive] = useState('Calm / Focused');
  const [ambientHex, setAmbientHex] = useState('#B44C2E');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleRunSim = () => {
    setSimRunning(true);
    setSimResult(null);
    setTimeout(() => {
      setSimRunning(false);
      setSimResult({
        scheme: 'PMEGP (Prime Minister Employment Generation Programme)',
        match: '94.6% High Eligibility',
        vernacularVoice: 'ಧ್ವನಿ ವಿಶ್ಲೇಷಣೆ: "ನನ್ನ ಕೈಮಗ್ಗದ ಘಟಕಕ್ಕೆ ಕಚ್ಚಾ ವಸ್ತು ಖರೀದಿಸಲು ಸಾಲ ಬೇಕು" -> Translated: "Need loan for raw materials for handloom unit"',
        docs: ['Aadhaar Card', 'Udyam Certificate', 'AI-Generated Project Report (DPR)', 'Bank Account Statement']
      });
      if (onShowToast) onShowToast('Eligibility evaluation simulated!');
    }, 600);
  };

  return (
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
      onClick={onClose}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '540px',
          height: '100%',
          backgroundColor: 'var(--color-surface)',
          color: 'var(--color-on-surface)',
          borderLeft: '1px solid var(--color-outline-variant)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
          overflowY: 'auto'
        }}
        className="drawer-animate"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Drawer Editorial Header */}
          <header 
            style={{
              padding: '24px',
              borderBottom: '1px solid var(--color-outline-variant)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span 
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--color-accent)',
                  fontWeight: 600
                }}
              >
                {project.domain} · {project.status}
              </span>
              <h2 
                style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: '26px',
                  fontWeight: 600,
                  color: 'var(--color-on-surface)',
                  lineHeight: '32px'
                }}
              >
                {project.title}
              </h2>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-accent)',
                    textDecoration: 'none',
                    marginTop: '4px',
                    width: 'fit-content'
                  }}
                  className="hover:underline"
                >
                  <Github size={13} />
                  <span>View GitHub Repository</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>

            <button 
              type="button" 
              aria-label="Close case study drawer" 
              onClick={onClose}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1px solid var(--color-outline-variant)',
                backgroundColor: 'transparent',
                color: 'var(--color-on-surface)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">close</span>
            </button>
          </header>

          {/* Drawer Body */}
          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Aspect Ratio Preview Visual */}
            <div 
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                aspectRatio: '16/10',
                backgroundColor: 'var(--color-surface-container)',
                border: '1px solid var(--color-outline-variant)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-accent)', fontWeight: 600 }}>
                SYSTEM PROTOTYPE SPECIFICATION
              </span>
              <div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600 }}>
                  {project.title}
                </span>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-on-surface-variant)', marginTop: '2px' }}>
                  {project.tagline}
                </p>
              </div>
            </div>

            {/* Tab switch inside drawer: Specs vs Live Simulation */}
            <div 
              style={{
                display: 'inline-flex',
                backgroundColor: 'var(--color-surface-container-low)',
                border: '1px solid var(--color-outline-variant)',
                borderRadius: '6px',
                padding: '3px'
              }}
            >
              <button
                type="button"
                onClick={() => setActiveTab('specs')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontFamily: 'var(--font-label)',
                  fontWeight: 600,
                  backgroundColor: activeTab === 'specs' ? 'var(--color-primary)' : 'transparent',
                  color: activeTab === 'specs' ? 'var(--color-on-primary)' : 'var(--color-on-surface-variant)',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Architecture & Challenge
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('simulator')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontFamily: 'var(--font-label)',
                  fontWeight: 600,
                  backgroundColor: activeTab === 'simulator' ? 'var(--color-primary)' : 'transparent',
                  color: activeTab === 'simulator' ? 'var(--color-on-primary)' : 'var(--color-on-surface-variant)',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Live Interactive Simulator ⚡
              </button>
            </div>

            {activeTab === 'specs' ? (
              <>
                {/* Challenge & Transition Architecture */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 
                    style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--color-on-surface)'
                    }}
                  >
                    Challenge & transition architecture
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--color-on-surface-variant)',
                      lineHeight: '23px',
                      textWrap: 'pretty'
                    }}
                  >
                    {project.overview || project.description}
                  </p>
                </div>

                {/* Key Architectural Features */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h4 style={{ fontFamily: 'var(--font-label)', fontSize: '12px', color: 'var(--color-on-surface)', fontWeight: 600, textTransform: 'uppercase' }}>
                    Engineered Capabilities
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {project.keyFeatures.map((feat, idx) => (
                      <li 
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                          fontSize: '13px',
                          color: 'var(--color-on-surface-variant)',
                          lineHeight: '18px'
                        }}
                      >
                        <span className="material-symbols-outlined text-[16px]" style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }}>
                          check_circle
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Motion & Impact Note */}
                <div 
                  style={{
                    padding: '16px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-surface-container-low)',
                    border: '1px solid var(--color-outline-variant)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'var(--font-label)',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--color-on-surface)'
                    }}
                  >
                    Architecture & measurable impact
                  </span>
                  <p 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: 'var(--color-on-surface-variant)',
                      lineHeight: '18px'
                    }}
                  >
                    {project.architectureHighlights || "Engineered with modular decoupling of hardware sensor polling and asynchronous cloud inference."}
                  </p>
                </div>

                {/* Technologies */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.technologies.map((t, idx) => (
                    <span 
                      key={idx}
                      style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        backgroundColor: 'var(--color-surface-container)',
                        border: '1px solid var(--color-outline-variant)',
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--color-on-surface)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </>
            ) : (
              /* Live Interactive Simulator */
              <div 
                style={{
                  padding: '20px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--color-surface-container-low)',
                  border: '1px solid var(--color-outline-variant)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}
              >
                {project.id === 'udyam-setu' ? (
                  <div>
                    <span style={{ fontFamily: 'var(--font-label)', fontSize: '13px', fontWeight: 600, color: 'var(--color-on-surface)', display: 'block', marginBottom: '8px' }}>
                      Simulate MSME Vernacular Scheme Triage
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
                      <label style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--color-on-surface-variant)' }}>
                        ENTERPRISE REVENUE SCALE:
                      </label>
                      <select
                        value={simTurnover}
                        onChange={(e) => setSimTurnover(e.target.value)}
                        style={{
                          padding: '8px',
                          borderRadius: '4px',
                          backgroundColor: 'var(--color-surface)',
                          color: 'var(--color-on-surface)',
                          border: '1px solid var(--color-outline-variant)',
                          fontSize: '13px'
                        }}
                      >
                        <option>Under ₹10 Lakhs (Micro Enterprise)</option>
                        <option>₹10 Lakhs to ₹50 Lakhs (Small Enterprise)</option>
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={handleRunSim}
                      disabled={simRunning}
                      className="btn-editorial-primary"
                      style={{ width: '100%', padding: '10px' }}
                    >
                      {simRunning ? 'Evaluating Bhashini & Gemini Criteria...' : 'Run Eligibility Simulation'}
                    </button>

                    {simResult && (
                      <div 
                        style={{
                          marginTop: '12px',
                          padding: '12px',
                          borderRadius: '6px',
                          backgroundColor: 'var(--color-surface)',
                          border: '1px solid var(--color-outline-variant)',
                          fontSize: '12px'
                        }}
                      >
                        <div style={{ fontWeight: 600, color: 'var(--color-accent)' }}>
                          ✓ {simResult.scheme} [{simResult.match}]
                        </div>
                        <div style={{ color: 'var(--color-on-surface-variant)', fontFamily: 'var(--font-mono)', marginTop: '4px' }}>
                          {simResult.vernacularVoice}
                        </div>
                      </div>
                    )}
                  </div>
                ) : project.id === 'focus-buddy' ? (
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-accent)' }}>
                      0.96" OLED FIRMWARE DISPLAY
                    </span>
                    <div 
                      style={{
                        padding: '16px',
                        backgroundColor: '#000000',
                        color: '#38BDF8',
                        borderRadius: '6px',
                        fontFamily: 'var(--font-mono)',
                        margin: '10px auto',
                        maxWidth: '240px'
                      }}
                    >
                      <div style={{ fontSize: '24px', fontWeight: 700 }}>25:00</div>
                      <div style={{ fontSize: '11px', color: '#34D399' }}>FOCUS IN FLOW</div>
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--color-on-surface-variant)' }}>
                      Ultrasonic proximity sensor active; physical servo flag raised.
                    </p>
                  </div>
                ) : (
                  <div>
                    <span style={{ fontFamily: 'var(--font-label)', fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                      Ambient RGB Valence Modulation
                    </span>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {['#B44C2E', '#236B47', '#8F5600'].map(hex => (
                        <button
                          key={hex}
                          type="button"
                          onClick={() => setAmbientHex(hex)}
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            backgroundColor: hex,
                            border: ambientHex === hex ? '2px solid var(--color-on-surface)' : 'none',
                            cursor: 'pointer'
                          }}
                        />
                      ))}
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--color-on-surface-variant)', marginTop: '8px' }}>
                      WS2812B LEDs mapped to ambient hex: {ambientHex}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Drawer Editorial Footer */}
        <footer 
          style={{
            padding: '20px 24px',
            borderTop: '1px solid var(--color-outline-variant)',
            backgroundColor: 'var(--color-surface-container-low)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button 
              type="button" 
              onClick={onClose} 
              className="btn-editorial-secondary"
              style={{ padding: '10px 18px', fontSize: '13px' }}
            >
              Close preview
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-editorial-secondary"
                style={{
                  padding: '10px 18px',
                  fontSize: '13px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none'
                }}
                title="Open GitHub Repository"
              >
                <Github size={15} />
                <span>Source Code</span>
                <ExternalLink size={13} color="var(--color-on-surface-variant)" />
              </a>
            )}
          </div>

          <button 
            type="button" 
            onClick={() => {
              onClose();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }} 
            className="btn-editorial-primary"
            style={{ padding: '10px 20px', fontSize: '13px' }}
          >
            Discuss this project
          </button>
        </footer>
      </div>
    </div>
  );
}
