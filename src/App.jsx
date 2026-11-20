import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import IdeasExplorations from './components/IdeasExplorations';
import Hackathons from './components/Hackathons';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [toastMessage, setToastMessage] = useState(null);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('editorial-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('editorial-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('editorial-theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    // 1. Scroll Progress & Scroll Spy
    const sections = ['hero', 'about', 'work', 'practice', 'skills', 'ideas', 'education', 'contact'];
    
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      const scrollPos = window.pageYOffset + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. Intersection Observer for Progressive Scroll Reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.12
      }
    );

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3200);
  };

  return (
    <div className="portfolio-app">
      {/* Sticky Navigation with Scroll Progress, Active Section Spy, and Theme Toggle */}
      <Navbar 
        onOpenResume={() => setResumeModalOpen(true)} 
        scrollProgress={scrollProgress}
        activeSection={activeSection}
        isDark={isDark}
        onToggleDark={() => setIsDark((prev) => !prev)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero 
          onOpenResume={() => setResumeModalOpen(true)} 
          onShowToast={showToast}
        />
        <About />
        <Skills />
        <Projects 
          onOpenCaseStudy={(project) => setSelectedProject(project)}
          onSelectProject={(project) => setSelectedProject(project)} 
        />
        <IdeasExplorations 
          onOpenCaseStudy={(idea) => setSelectedProject(idea)}
          onSelectIdea={(idea) => setSelectedProject(idea)} 
        />
        <Hackathons />
        <Education />
        <Contact 
          onShowToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onShowToast={showToast}
        />
      )}

      {resumeModalOpen && (
        <ResumeModal
          onClose={() => setResumeModalOpen(false)}
          onShowToast={showToast}
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification" role="status" aria-live="polite">
          <CheckCircle2 size={18} color="#34D399" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
