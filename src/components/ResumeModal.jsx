import React, { useEffect } from 'react';
import { personalData, skillsData, educationData } from '../data/portfolioData';
import { FileDown, Printer, X, MapPin, Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function ResumeModal({ onClose, onShowToast }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    if (onShowToast) onShowToast('Downloading Karthik_VG_Resume.pdf...');
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
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          backgroundColor: 'var(--color-surface)',
          color: 'var(--color-on-surface)',
          border: '1px solid var(--color-outline-variant)',
          borderRadius: '12px',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
        className="drawer-animate"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div 
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid var(--color-outline-variant)',
            backgroundColor: 'var(--color-surface-container-low)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontFamily: 'var(--font-headline)', fontSize: '18px', fontWeight: 600 }}>
              Karthik V.G. — Curriculum Vitae
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a
              href={personalData.resume.downloadUrl}
              download={personalData.resume.fileName}
              onClick={handleDownload}
              className="btn-editorial-primary"
              style={{ padding: '8px 16px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <FileDown size={15} />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={handlePrint}
              className="btn-editorial-secondary"
              style={{ padding: '8px 12px', fontSize: '13px' }}
              title="Print resume"
            >
              <Printer size={15} />
            </button>

            <button
              type="button"
              onClick={onClose}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                border: '1px solid var(--color-outline-variant)',
                backgroundColor: 'transparent',
                color: 'var(--color-on-surface)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div 
          style={{
            padding: '36px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            backgroundColor: 'var(--color-surface)'
          }}
          className="printable-resume"
        >
          {/* Top Title */}
          <div style={{ borderBottom: '2px solid var(--color-outline-variant)', paddingBottom: '16px' }}>
            <h1 style={{ fontFamily: 'var(--font-headline)', fontSize: '28px', fontWeight: 700, color: 'var(--color-on-surface)' }}>
              KARTHIK V.G.
            </h1>
            <p style={{ fontFamily: 'var(--font-title)', fontSize: '14px', color: 'var(--color-accent)', fontWeight: 600, marginTop: '2px' }}>
              Computer Science & Engineering Student | Aspiring Backend Developer | AI Enthusiast
            </p>
            <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: 'var(--color-on-surface-variant)', marginTop: '8px', flexWrap: 'wrap' }}>
              <span>Bengaluru, Karnataka, India</span>
              <span>•</span>
              <span>{personalData.contact.email}</span>
              <span>•</span>
              <span>github.com/karthikgondhali-glitch</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-label)', fontSize: '13px', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Education
            </h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <strong style={{ fontSize: '15px' }}>{educationData.branch}</strong>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}>Pursuing</span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-on-surface-variant)' }}>
              {educationData.institution}, Bengaluru
            </p>
          </div>

          {/* Core Technical Competencies */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-label)', fontSize: '13px', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Technical Competencies
            </h2>
            <p style={{ fontSize: '13px', lineHeight: '22px' }}>
              <strong>Programming: </strong>Java, JavaScript, Programming Fundamentals, OOP Principles, Memory Management.<br />
              <strong>Frontend & Web: </strong>React, HTML5, CSS3, Responsive Design, RESTful Architecture.<br />
              <strong>Backend & Data: </strong>Backend Development Fundamentals, Firebase, Supabase, API Integration.<br />
              <strong>AI & Development Tools: </strong>Google AI Studio, Gemini API, Git & GitHub, Google Stitch, Bhashini.
            </p>
          </div>

          {/* Key Projects */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-label)', fontSize: '13px', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Featured Systems & Prototypes
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <strong>UdyamSetu</strong> <span style={{ fontSize: '12px', color: 'var(--color-accent)' }}>[GovTech / FinTech / AI]</span>
                <p style={{ fontSize: '13px', color: 'var(--color-on-surface-variant)' }}>
                  AI-powered platform empowering marginalized MSMEs to discover government schemes, assess preliminary eligibility, and prepare documentation using Bhashini Indic speech translation and Gemini AI.
                </p>
              </div>
              <div>
                <strong>Focus Buddy</strong> <span style={{ fontSize: '12px', color: 'var(--color-accent)' }}>[IoT / Embedded Systems]</span>
                <p style={{ fontSize: '13px', color: 'var(--color-on-surface-variant)' }}>
                  ESP32 smart Pomodoro companion with OLED countdown, ultrasonic proximity presence detection, and servo-actuated physical alert flags.
                </p>
              </div>
              <div>
                <strong>Moodify Mirror</strong> <span style={{ fontSize: '12px', color: 'var(--color-accent)' }}>[IoT / Multimodal AI]</span>
                <p style={{ fontSize: '13px', color: 'var(--color-on-surface-variant)' }}>
                  Intelligent vanity mirror integrating ESP32-CAM, Gemini vision inference, addressable WS2812B RGB ambient LEDs, and MAX98357A I2S audio feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
