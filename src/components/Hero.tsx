import { Mail, ArrowRight, Terminal as TerminalIcon } from 'lucide-react';
import './Hero.css';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenTerminal: () => void;
}

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

/* const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
); */

export default function Hero({ onExploreProjects, onOpenTerminal }: HeroProps) {
  return (
    <section id="about" className="hero-section">
      <div className="hero-content fade-in">
        <div className="status-badge-container">
          <span className="pulse-dot"></span>
          <span className="status-text">Available for Summer Internships & Roles</span>
        </div>
        
        <h1 className="hero-title">
          Hi, I am <span className="highlight-text">Dennis Heng</span>
        </h1>
        
        <h2 className="hero-subtitle">
          Building AI Orchestrations & Full-Stack Systems.
        </h2>
        
        <p className="hero-description">
          Software Engineering student at the <strong>University of Malaya</strong> (CGPA 3.89/4.0) and former exchange student in South Korea. I build scalable applications, design distributed architectures, and compete in hackathons.
        </p>

        <div className="hero-ctas">
          <button onClick={onExploreProjects} className="btn btn-primary">
            View Projects <ArrowRight size={16} />
          </button>
          <button onClick={onOpenTerminal} className="btn btn-mono">
            <TerminalIcon size={16} /> Run Dev Terminal
          </button>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/DennisHengShuYi" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub Profile">
            <GithubIcon size={20} />
          </a>
          {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn Profile">
            <LinkedinIcon size={20} />
          </a> */}
          <a href="mailto:den519000@gmail.com" className="social-icon" aria-label="Email Me">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="tech-orb"></div>
        <div className="tech-orb-glow"></div>
        <div className="code-card glass-panel">
          <div className="card-header">
            <div className="window-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="window-title">dennis.config.json</span>
          </div>
          <div className="card-body">
            <pre>
              <code>
{`{
  "name": "Dennis Heng Shu Yi",
  "role": "Software Engineer",
  "education": {
    "university": "University of Malaya",
    "cgpa": "3.89 / 4.00",
    "exchange": "Chonnam National University, KR"
  },
  "coreSkills": [
    "AI Agents", "Java", "Python",
    "NodeJS", "React", "TypeScript"
  ],
  "motto": "Always compile. Always optimize."
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
