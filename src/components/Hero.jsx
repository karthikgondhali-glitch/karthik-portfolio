import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileDown, 
  Terminal, 
  Play, 
  Check, 
  Copy, 
  Sparkles, 
  Cpu, 
  Layers, 
  Loader2,
  Sliders
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Hero({ onOpenResume, onShowToast, onOpenIDE }) {
  const [activeCodeTab, setActiveCodeTab] = useState('java');
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [runOutput, setRunOutput] = useState(null);

  const codeSnippets = {
    java: {
      name: 'UdyamSetuService.java',
      tag: 'Java 21 · Spring',
      code: `// UdyamSetu: AI Scheme Eligibility Engine
@Service
public class UdyamSetuService {
  private final BhashiniVoiceClient bhashini;
  private final GeminiAIModel evaluator;

  public SchemeResult processApplicant(MSMEProfile profile) {
    // 1. Process localized Indic speech query
    String query = bhashini.transcribe(profile.audioBytes());
    
    // 2. Multimodal rule-matching & policy evaluation
    return evaluator.assessEligibility(
      profile.getTurnover(),
      profile.getSector(),
      query
    );
  }
}`
    },
    iot: {
      name: 'FocusBuddy.ino',
      tag: 'C++ · FreeRTOS',
      code: `// Focus Buddy: Smart Pomodoro ESP32 Companion
#include <Wire.h>
#include <Adafruit_SSD1306.h>

void executePomodoroInterval(int minutes) {
  display.clearDisplay();
  display.println("FOCUS SESSION ACTIVE");
  servoFlag.write(90); // Raised focus flag
  
  for (int s = minutes * 60; s > 0; s--) {
    if (ultrasonic.getDistanceCm() < 50) {
      logUserPresence(true);
    }
    renderProgress(s);
    vTaskDelay(1000 / portTICK_PERIOD_MS);
  }
  buzzer.playChime(CHIME_BREAK);
}`
    },
    gemini: {
      name: 'MoodifyMirror.js',
      tag: 'Gemini 1.5 · REST',
      code: `// Moodify Mirror: Ambient Response Orchestrator
import { GoogleGenAI } from '@google/genai';

export async function processMirrorFrame(frameBase64) {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-1.5-flash',
    contents: [
      { inlineData: { mimeType: 'image/jpeg', data: frameBase64 } },
      { text: 'Analyze facial valence & return ambient hex palette.' }
    ]
  });
  
  return JSON.parse(response.text);
}`
    }
  };

  const handleRunSimulation = () => {
    setIsRunningCode(true);
    setRunOutput(null);
    setTimeout(() => {
      setIsRunningCode(false);
      if (activeCodeTab === 'java') {
        setRunOutput({
          status: 'BUILD SUCCESSFUL (0.74s)',
          message: '✓ Bhashini Indic pipeline initialized · 94.6% eligibility match'
        });
      } else if (activeCodeTab === 'iot') {
        setRunOutput({
          status: 'ESP32 FIRMWARE FLASHED',
          message: '✓ OLED active (128x64) · Ultrasonic calibrated (50cm) · Servo ready'
        });
      } else {
        setRunOutput({
          status: 'GEMINI 1.5 STREAM 200 OK',
          message: '✓ Frame classified: "Focused" · Ambient modulated to #B44C2E'
        });
      }
      if (onShowToast) onShowToast('Execution simulation complete');
    }, 750);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab].code);
    setCopiedCode(true);
    if (onShowToast) onShowToast('Code copied to clipboard');
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section 
      id="hero" 
      style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '48px 24px 64px'
      }}
      className="md:pt-16 md:pb-20"
    >
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}
      >
        {/* Left Column: Editorial Headline & Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Status Chip with Icon */}
          <div className="reveal-item">
            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '9999px',
                backgroundColor: 'var(--color-surface-container-low)',
                border: '1px solid var(--color-outline-variant)',
                color: 'var(--color-on-surface)',
                fontFamily: 'var(--font-label)',
                fontSize: '12px',
                fontWeight: 600,
                width: 'fit-content'
              }}
            >
              <span className="material-symbols-outlined text-[15px]" style={{ color: 'var(--color-accent)' }} aria-hidden="true">
                schedule
              </span>
              <span>Available for 2026–2027 product roles & hackathons</span>
            </span>
          </div>

          {/* Big Editorial Headline */}
          <h1 
            className="reveal-item reveal-delay-1"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 5.2vw, 56px)',
              lineHeight: '1.12',
              letterSpacing: '-1px',
              fontWeight: 600,
              color: 'var(--color-on-surface)',
              textWrap: 'balance'
            }}
          >
            Engineering interfaces & backends that feel calm, legible, and physically responsive.
          </h1>

          {/* Subtitle Paragraph */}
          <p 
            className="reveal-item reveal-delay-2"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              lineHeight: '27px',
              color: 'var(--color-on-surface-variant)',
              maxWidth: '560px',
              textWrap: 'pretty'
            }}
          >
            I'm <strong>Karthik V.G.</strong>, a Computer Science and Engineering student at Gopalan College of Engineering and Management in Bengaluru. Aspiring backend developer and AI enthusiast developing practical solutions to real-world problems.
          </p>

          {/* Action Buttons */}
          <div 
            className="reveal-item reveal-delay-3"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '14px',
              paddingTop: '6px'
            }}
          >
            <button 
              type="button" 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} 
              className="btn-editorial-primary group"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <span>Explore selected work</span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-state-change group-hover:translate-x-1" aria-hidden="true">
                arrow_forward
              </span>
            </button>

            <button 
              type="button" 
              onClick={onOpenResume} 
              className="btn-editorial-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <FileDown size={16} color="var(--color-accent)" />
              <span>Download resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--color-on-surface-variant)',
                padding: '10px 14px',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-on-surface)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-on-surface-variant)'}
            >
              Contact me →
            </a>
          </div>

          {/* Social Profiles */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '10px' }}>
            <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-on-surface-variant)' }}>
              OFFICIAL LINKS:
            </span>
            <a 
              href={personalData.contact.github} 
              target="_blank" 
              rel="noreferrer"
              style={{ color: 'var(--color-on-surface-variant)', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600 }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-on-surface-variant)'}
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a 
              href={personalData.contact.linkedin} 
              target="_blank" 
              rel="noreferrer"
              style={{ color: 'var(--color-on-surface-variant)', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600 }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-on-surface-variant)'}
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Visual Card / Interactive Sandbox */}
        <div className="reveal-item reveal-delay-2">
          <div 
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: 'var(--color-surface-container)',
              border: '1px solid var(--color-outline-variant)',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.08)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Top Toolbar */}
            <div 
              style={{
                padding: '12px 18px',
                backgroundColor: 'var(--color-surface-container-high)',
                borderBottom: '1px solid var(--color-outline-variant)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--color-outline)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-on-surface)', fontWeight: 600 }}>
                  karthik.vg/interactive-lab
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    border: '1px solid var(--color-outline-variant)',
                    backgroundColor: 'var(--color-surface)',
                    color: 'var(--color-on-surface)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer'
                  }}
                  title="Copy code snippet"
                >
                  {copiedCode ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleRunSimulation}
                  disabled={isRunningCode}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-on-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    cursor: isRunningCode ? 'wait' : 'pointer',
                    fontWeight: 600
                  }}
                  title="Run code simulation"
                >
                  {isRunningCode ? <Loader2 size={12} className="animate-spin" /> : <Play size={12} />}
                  <span>Run</span>
                </button>
              </div>
            </div>

            {/* Tab Pills */}
            <div 
              style={{
                display: 'flex',
                backgroundColor: 'var(--color-surface-container-low)',
                borderBottom: '1px solid var(--color-outline-variant)',
                padding: '4px 8px',
                gap: '4px',
                overflowX: 'auto'
              }}
            >
              {Object.entries(codeSnippets).map(([key, item]) => {
                const isActive = activeCodeTab === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setActiveCodeTab(key);
                      setRunOutput(null);
                    }}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontFamily: 'var(--font-mono)',
                      backgroundColor: isActive ? 'var(--color-surface)' : 'transparent',
                      color: isActive ? 'var(--color-on-surface)' : 'var(--color-on-surface-variant)',
                      border: isActive ? '1px solid var(--color-outline-variant)' : '1px solid transparent',
                      fontWeight: isActive ? 600 : 400,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>

            {/* Code Content */}
            <div 
              style={{
                padding: '18px',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                lineHeight: '1.65',
                color: 'var(--color-on-surface)',
                backgroundColor: 'var(--color-surface)',
                overflowX: 'auto',
                minHeight: '230px',
                maxHeight: '260px'
              }}
            >
              <pre style={{ margin: 0 }}>
                <code>{codeSnippets[activeCodeTab].code}</code>
              </pre>
            </div>

            {/* Simulation Log Output Drawer */}
            {runOutput && (
              <div 
                style={{
                  padding: '10px 16px',
                  backgroundColor: 'var(--color-surface-container-low)',
                  borderTop: '1px solid var(--color-outline-variant)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  animation: 'fadeSlideUp 0.2s ease-out'
                }}
              >
                <div style={{ color: 'var(--color-accent)', fontWeight: 600, marginBottom: '2px' }}>
                  {runOutput.status}
                </div>
                <div style={{ color: 'var(--color-on-surface-variant)' }}>
                  {runOutput.message}
                </div>
              </div>
            )}

            {/* Bottom Card Footer Banner */}
            <div 
              style={{
                padding: '14px 18px',
                backgroundColor: 'var(--color-surface)',
                borderTop: '1px solid var(--color-outline-variant)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span 
                  style={{
                    fontFamily: 'var(--font-label)',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--color-on-surface)'
                  }}
                >
                  Bengaluru, Karnataka
                </span>
                <span 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--color-on-surface-variant)'
                  }}
                >
                  Backend · Systems · Generative AI
                </span>
              </div>
              <span 
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--color-on-surface)',
                  fontWeight: 600,
                  fontVariantNumeric: 'tabular-nums'
                }}
              >
                2024 – 2027
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
