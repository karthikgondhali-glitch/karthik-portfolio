import React from 'react';
import { aboutData, personalData } from '../data/portfolioData';
import { 
  Server, 
  Cpu, 
  Brain, 
  Radio, 
  Trophy, 
  CheckCircle2, 
  Terminal,
  ShieldCheck,
  Check
} from 'lucide-react';

const iconMap = {
  Server,
  Cpu,
  Brain,
  Radio,
  Trophy,
  CheckCircle2
};

export default function About() {
  return (
    <section 
      id="about" 
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
          gap: '40px'
        }}
      >
        {/* Section Headline */}
        <div className="scroll-reveal" style={{ maxWidth: '640px' }}>
          <span 
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--color-accent)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'block',
              marginBottom: '6px'
            }}
          >
            Philosophy & Mindset
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
            {aboutData.heading}
          </h2>
          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: 'var(--color-on-surface-variant)',
              marginTop: '6px'
            }}
          >
            A dedicated engineering philosophy: understanding the core mechanics before writing the first line of code.
          </p>
        </div>

        {/* Narrative & Principles Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}
        >
          {/* Narrative Story */}
          <div 
            className="scroll-reveal stagger-1"
            style={{
              padding: '32px',
              borderRadius: '12px',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-outline-variant)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            <div>
              <h3 
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'var(--color-on-surface)',
                  marginBottom: '12px'
                }}
              >
                Curious by nature, disciplined in architecture.
              </h3>

              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  color: 'var(--color-on-surface-variant)',
                  lineHeight: '26px',
                  marginBottom: '16px'
                }}
              >
                {aboutData.introParagraph}
              </p>

              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  color: 'var(--color-on-surface-variant)',
                  lineHeight: '26px'
                }}
              >
                My focus centers on <strong>backend architectures</strong>, <strong>reliable API integrations</strong>, and <strong>practical generative AI workflows</strong>. While many treat code as boilerplate to be copied, I prioritize understanding the underlying logic — whether it is the memory lifecycle of a Java collection, the state machine of an ESP32 microcontroller, or the latency tradeoffs of calling large multimodal LLMs.
              </p>
            </div>

            {/* Operating Principles Box */}
            <div 
              style={{
                padding: '18px 20px',
                borderRadius: '8px',
                backgroundColor: 'var(--color-surface-container)',
                border: '1px solid var(--color-outline-variant)'
              }}
            >
              <span 
                style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--color-accent)',
                  display: 'block',
                  marginBottom: '10px'
                }}
              >
                CORE OPERATING PRINCIPLES
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {aboutData.principles.map((pr, idx) => (
                  <li 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '13px',
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-on-surface)'
                    }}
                  >
                    <Check size={14} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                    <span>{pr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 6 Core Pillars Grid */}
          <div 
            className="scroll-reveal stagger-2"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px'
            }}
          >
            {aboutData.highlights.map((item, idx) => {
              const Icon = iconMap[item.icon] || Server;
              return (
                <div 
                  key={idx}
                  style={{
                    padding: '20px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-outline-variant)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  <div 
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '6px',
                      backgroundColor: 'var(--color-surface-container)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-accent)'
                    }}
                  >
                    <Icon size={18} />
                  </div>

                  <h4 
                    style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--color-on-surface)'
                    }}
                  >
                    {item.title}
                  </h4>

                  <p 
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      color: 'var(--color-on-surface-variant)',
                      lineHeight: '20px'
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
