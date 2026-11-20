import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';
import { Send, Check, Copy } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Contact({ onShowToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const copyEmail = () => {
    try {
      navigator.clipboard.writeText(personalData.contact.email);
    } catch (e) {}
    setCopiedEmail(true);
    if (onShowToast) onShowToast('Copied email to clipboard');
    setTimeout(() => {
      setCopiedEmail(false);
    }, 2400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill in your name, email, and message.');
      return;
    }

    const mailtoSubject = encodeURIComponent(formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hello Karthik,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via Portfolio Contact Form`
    );
    window.location.href = `mailto:${personalData.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setFormSubmitted(true);
    if (onShowToast) onShowToast('Opening email client with pre-filled message...');
  };

  return (
    <section 
      id="contact" 
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
          gap: '48px'
        }}
      >
        {/* Top Banner: Headline + Copy Email CTA (Exact match to reference) */}
        <div 
          className="scroll-reveal"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '32px',
            paddingBottom: '36px',
            borderBottom: '1px solid var(--color-outline-variant)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '640px' }}>
            <h2 
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 600,
                color: 'var(--color-on-surface)',
                letterSpacing: '-0.5px',
                lineHeight: '1.2',
                textWrap: 'balance'
              }}
            >
              Let's build something thoughtful together.
            </h2>
            <p 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--color-on-surface-variant)',
                lineHeight: '24px'
              }}
            >
              Open to backend development collaborations, hackathon squads, and summer internship engagements.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <button 
              id="copy-email-btn" 
              type="button" 
              onClick={copyEmail} 
              className="btn-editorial-primary"
              style={{ padding: '12px 24px', fontSize: '14px' }}
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {copiedEmail ? 'check' : 'content_copy'}
              </span>
              <span>{copiedEmail ? 'Copied to clipboard' : `Copy ${personalData.contact.email}`}</span>
            </button>
          </div>
        </div>

        {/* Contact Form & Direct Information */}
        <div 
          className="scroll-reveal stagger-1"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}
        >
          {/* Left Column: Direct Inquiries */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '18px',
                fontWeight: 600,
                color: 'var(--color-on-surface)'
              }}
            >
              Direct contact channels
            </h3>
            <p 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--color-on-surface-variant)',
                lineHeight: '24px'
              }}
            >
              Based in Bengaluru, Karnataka. Feel free to reach out directly via email, GitHub, or LinkedIn.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-on-surface-variant)', width: '80px' }}>
                  EMAIL:
                </span>
                <a 
                  href={`mailto:${personalData.contact.email}`}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-accent)', fontWeight: 500 }}
                >
                  {personalData.contact.email}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-on-surface-variant)', width: '80px' }}>
                  LOCATION:
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-on-surface)' }}>
                  Bengaluru, Karnataka, India
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', paddingTop: '10px' }}>
              <a 
                href={personalData.contact.github} 
                target="_blank" 
                rel="noreferrer"
                className="btn-editorial-secondary"
                style={{ padding: '8px 16px', fontSize: '13px' }}
              >
                <Github size={16} />
                <span>GitHub Profile</span>
              </a>
              <a 
                href={personalData.contact.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="btn-editorial-secondary"
                style={{ padding: '8px 16px', fontSize: '13px' }}
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div 
            style={{
              padding: '28px',
              borderRadius: '12px',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-outline-variant)'
            }}
          >
            <h3 
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '17px',
                fontWeight: 600,
                color: 'var(--color-on-surface)',
                marginBottom: '16px'
              }}
            >
              Send an inquiry
            </h3>

            {formError && (
              <div style={{ color: 'var(--color-error)', fontSize: '13px', marginBottom: '12px' }}>
                {formError}
              </div>
            )}

            {formSubmitted ? (
              <div style={{ color: 'var(--color-success)', fontSize: '14px', lineHeight: '22px' }}>
                ✓ Thank you. Launching your email client with your message for <strong>{personalData.contact.email}</strong>.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--color-on-surface-variant)', marginBottom: '4px' }}>
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '6px',
                      backgroundColor: 'var(--color-surface-container-low)',
                      border: '1px solid var(--color-outline-variant)',
                      color: 'var(--color-on-surface)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--color-on-surface-variant)', marginBottom: '4px' }}>
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '6px',
                      backgroundColor: 'var(--color-surface-container-low)',
                      border: '1px solid var(--color-outline-variant)',
                      color: 'var(--color-on-surface)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--color-on-surface-variant)', marginBottom: '4px' }}>
                    MESSAGE
                  </label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Briefly describe your project or collaboration idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '6px',
                      backgroundColor: 'var(--color-surface-container-low)',
                      border: '1px solid var(--color-outline-variant)',
                      color: 'var(--color-on-surface)',
                      fontSize: '14px',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-editorial-primary"
                  style={{ width: '100%', padding: '12px' }}
                >
                  <Send size={15} />
                  <span>Send message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
