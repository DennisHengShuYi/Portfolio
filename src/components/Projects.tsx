import { useState } from 'react';
import { ExternalLink, Code2, BrainCircuit, Database, Server, Smartphone } from 'lucide-react';
import './Projects.css';

interface Project {
  id: string;
  title: string;
  category: 'ai' | 'web' | 'systems' | 'mobile';
  shortDesc: string;
  bullets: string[];
  techStack: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

const GithubIcon = ({ size = 18 }: { size?: number }) => (
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

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'ai' | 'web' | 'systems' | 'mobile'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectsData: Project[] = [
    {
      id: 'careflow',
      title: 'CareFlow: AI-Powered Patient Flow Optimizer',
      category: 'ai',
      shortDesc: 'Multi-Agent clinical triage pipeline validating urgency and specialist routing with high precision.',
      bullets: [
        'Architected a Multi-Agent Clinical Triage Pipeline using a Sparse Context Pattern to orchestrate parallel LLM tasks (Gemini, Groq, OpenAI).',
        'Implemented an Adversarial Consensus Debate (Strategist vs. Critic) to validate clinical urgency and specialist routing.',
        'Developed a High-Performance Appointment Discovery Engine featuring queue-based slot generation, Specialty Aliasing, and Fallback Discovery Mode.'
      ],
      techStack: ['React', 'NodeJS', 'Gemini API', 'OpenAI API', 'Groq', 'TypeScript'],
      featured: true,
      github: 'https://github.com/DennisHengShuYi/CareFlow-AI-Powered-Patient-Flow-Optimizer'
    },
    {
      id: 'enviropulse',
      title: 'EnviroPulse: IoT Telemetry & Industrial Heat Stress Engine',
      category: 'web',
      shortDesc: 'Simulation IoT telemetry backend using IDW interpolation across multi-station sensor grids.',
      bullets: [
        'Engineered an IoT telemetry simulation backend using IDW (Inverse Distance Weighting) interpolation and the Rothfusz Heat Index equation for industrial heat stress.',
        'Integrated Upstash Redis for distributed state caching with automatic in-memory fallback for zero-downtime resilience.',
        'Deployed React/Vite on Vercel and Express backend on Railway with dev proxy to mirror production API routing.'
      ],
      techStack: ['React', 'Vite', 'Express', 'Upstash Redis', 'Vercel', 'Railway', 'NodeJS'],
      featured: true,
      github: 'https://github.com/DennisHengShuYi/EnviroPulse',
      live: 'https://enviro-pulse.vercel.app'
    },
    {
      id: 'financeflow',
      title: 'Finance Flow: Intelligent Data Extraction & RAG Pipeline',
      category: 'ai',
      shortDesc: 'Robust LLM orchestration layer automating the extraction of structured data from unstructured chats/social media.',
      bullets: [
        'Developed an orchestration layer using LLMs (Google Gemini/OpenAI) to extract structured financial metrics from messy inputs.',
        'Implemented Retrieval-Augmented Generation (RAG) and Vector Databases to solve complex information retrieval challenges.',
        'Created high-accuracy classification pipelines for transaction categorizations.'
      ],
      techStack: ['Python', 'Gemini API', 'Vector DB', 'RAG', 'JSON Schema'],
      featured: true,
      github: 'https://github.com/DennisHengShuYi/CtrlZ-FinanceFlow'
    },
    {
      id: 'memecoin',
      title: 'Memecoin Mania: ML Trend Forecast & Analytics Dashboard',
      category: 'ai',
      shortDesc: 'End-to-end data pipeline aggregating, cleaning, and processing social metrics to predict trends.',
      bullets: [
        'Engineered an end-to-end data pipeline to aggregate, clean, and process unstructured social media data and market metrics.',
        'Applied machine learning models to forecast sentiment-driven market trends.',
        'Developed an interactive web dashboard to visualize complex datasets, predictive models, and temporal trends.'
      ],
      techStack: ['Python', 'Pandas', 'Scikit-Learn', 'React', 'D3.js', 'Flask'],
      featured: false,
      github: 'https://github.com/DennisHengShuYi/Python_Assignment'
    },
    {
      id: 'hackingfuture',
      title: 'Hacking The Future: Graph Relationships & Sorting Platform',
      category: 'systems',
      shortDesc: 'Full-stack educational platform featuring global leaderboards and dynamic JavaFX Force-Directed Graph UI.',
      bullets: [
        'Developed full-stack educational platform with leaderboards and a secure SQLite backend utilizing custom sorting algorithms.',
        'Implemented password hashing and session validations for robust access management.',
        'Designed a dynamic Force-Directed Graph visualization in JavaFX representing complex social relationships with real-time physics simulation.'
      ],
      techStack: ['Java', 'JavaFX', 'SQLite', 'Algorithms', 'Physics Engines'],
      featured: false,
      github: 'https://github.com/Eterran/lantern'
    },
    {
      id: 'gogreen',
      title: 'GoGreen: Carbon Footprint Tracking Ecosystem',
      category: 'mobile',
      shortDesc: 'Multi-module Android application focusing on carbon footprint tracking and local sustainability.',
      bullets: [
        'Architected and migrated a multi-module Android application from an Activity-based structure to a modern Fragment-based architecture.',
        'Developed and stabilized a complex Android UI featuring dynamic lists, custom charts, and interactive carbon offset calculators.',
        'Resolved critical merge conflicts and optimized lifecycle states, improving UI performance by 25%.'
      ],
      techStack: ['Kotlin', 'Android SDK', 'Fragments', 'SQLite', 'Git'],
      featured: false,
      github: 'https://github.com/ngyuheng2003/MAD-Assignment'
    },
    {
      id: 'rescueswarm',
      title: 'Rescue Swarm: Decentralized AI Decision Systems',
      category: 'systems',
      shortDesc: 'Decentralized AI decision-making and state transition systems in autonomous swarms.',
      bullets: [
        'Gained deep experience in decentralized AI decision-making and managing complex state transitions in autonomous systems.',
        'Utilized the Model Context Protocol (MCP) standard to connect LLMs to external tools and sensor simulation feeds.',
        'Simulated cooperative search-and-rescue paths in a distributed drone swarm.'
      ],
      techStack: ['Python', 'MCP', 'Decentralized AI', 'Simulation', 'LLM Agents'],
      featured: false,
      github: 'https://github.com/DennisHengShuYi/RescueSwarm'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Code2 size={14} /> },
    { id: 'ai', label: 'AI / ML', icon: <BrainCircuit size={14} /> },
    { id: 'web', label: 'Web Apps', icon: <Server size={14} /> },
    { id: 'systems', label: 'Systems / Java', icon: <Database size={14} /> },
    { id: 'mobile', label: 'Mobile SDK', icon: <Smartphone size={14} /> }
  ] as const;

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>

      {/* Category Tabs */}
      <div className="filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
            onClick={() => setFilter(cat.id)}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`project-card glass-panel ${project.featured ? 'featured' : ''}`}
            onClick={() => setSelectedProject(project)}
          >
            <div className="card-top">
              <span className={`category-tag ${project.category}`}>
                {project.category.toUpperCase()}
              </span>
              {project.featured && <span className="featured-tag">FEATURED</span>}
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.shortDesc}</p>

            <div className="project-tech-list">
              {project.techStack.slice(0, 4).map((tech, idx) => (
                <span key={idx} className="badge badge-tech">{tech}</span>
              ))}
              {project.techStack.length > 4 && (
                <span className="badge">+{project.techStack.length - 4} more</span>
              )}
            </div>

            <div className="project-actions" onClick={(e) => e.stopPropagation()}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-action-btn" aria-label="GitHub Source">
                  <GithubIcon size={18} />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="icon-action-btn" aria-label="Live Demo">
                  <ExternalLink size={18} />
                </a>
              )}
              <button className="read-more-btn" onClick={() => setSelectedProject(project)}>
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className={`category-tag ${selectedProject.category}`}>
                {selectedProject.category.toUpperCase()}
              </span>
              <button className="close-modal-btn" onClick={() => setSelectedProject(null)}>&times;</button>
            </div>

            <h3 className="modal-project-title">{selectedProject.title}</h3>

            <div className="modal-body-content">
              <h4>Key Architecture & Contributions:</h4>
              <ul className="modal-bullets">
                {selectedProject.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>

              <h4>Tech Stack Details:</h4>
              <div className="modal-tech-list">
                {selectedProject.techStack.map((tech, idx) => (
                  <span key={idx} className="badge badge-tech">{tech}</span>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              {selectedProject.github && (
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <GithubIcon size={16} /> Source Code
                </a>
              )}
              {selectedProject.live && (
                <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <ExternalLink size={16} /> Live Application
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
