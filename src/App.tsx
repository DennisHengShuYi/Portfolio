import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Terminal from './components/Terminal';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = ['about', 'projects', 'experience', 'skills', 'terminal', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for trigger

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="app-container">
      {/* Dynamic Background Gradients */}
      <div className="bg-grid"></div>
      
      {/* Navigation Header */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Sections */}
      <main>
        <Hero 
          onExploreProjects={() => handleScrollToSection('projects')}
          onOpenTerminal={() => handleScrollToSection('terminal')}
        />
        
        <Projects />
        
        <Experience />
        
        <Skills />
        
        <Terminal />
        
        <Contact />
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '40px 24px',
        color: 'var(--text-muted)',
        fontSize: '0.85rem',
        borderTop: '1px solid var(--border-color)',
        marginTop: '80px',
        fontFamily: 'var(--font-mono)'
      }}>
        <p>&copy; {new Date().getFullYear()} Dennis Heng Shu Yi. Built with React & Vanilla CSS.</p>
        <p style={{ marginTop: '8px', fontSize: '0.75rem' }}>Designed for performance, visual feedback, and responsive accessibility.</p>
      </footer>
    </div>
  );
}
