import { type ReactNode } from 'react';
import { Layout, Server, Brain, Globe2, CheckCircle2 } from 'lucide-react';
import './Skills.css';

interface SkillItem {
  name: string;
  level: string;
  percentage: number;
}

interface SkillGroup {
  category: string;
  icon: ReactNode;
  items: SkillItem[];
}

export default function Skills() {
  const skillsData: SkillGroup[] = [
    {
      category: 'Frontend Development',
      icon: <Layout className="group-icon text-cyan" />,
      items: [
        { name: 'React / Vite', level: 'Proficient', percentage: 85 },
        { name: 'TypeScript', level: 'Proficient', percentage: 80 },
        { name: 'JavaScript (ES6+)', level: 'Proficient', percentage: 90 },
        { name: 'HTML5 / CSS3', level: 'Proficient', percentage: 95 },
        { name: 'Kotlin (Android UI)', level: 'Intermediate', percentage: 70 }
      ]
    },
    {
      category: 'Backend & Data Systems',
      icon: <Server className="group-icon text-purple" />,
      items: [
        { name: 'NodeJS / Express', level: 'Proficient', percentage: 85 },
        { name: 'Java (OOP / Swing)', level: 'Proficient', percentage: 90 },
        { name: 'SQL (MySQL / SQLite)', level: 'Proficient', percentage: 85 },
        { name: 'Python', level: 'Proficient', percentage: 85 },
        { name: 'Upstash Redis / Caching', level: 'Intermediate', percentage: 75 }
      ]
    },
    {
      category: 'AI & Intelligent Systems',
      icon: <Brain className="group-icon text-emerald" />,
      items: [
        { name: 'Gemini / OpenAI API Orchestration', level: 'Proficient', percentage: 85 },
        { name: 'RAG & Vector DB Integration', level: 'Proficient', percentage: 80 },
        { name: 'MCP (Model Context Protocol)', level: 'Proficient', percentage: 85 },
        { name: 'OpenCV / MediaPipe Hand Tracking', level: 'Intermediate', percentage: 70 },
        { name: 'Machine Learning Pipelines', level: 'Intermediate', percentage: 75 }
      ]
    }
  ];

  const languagesData = [
    { name: 'Mandarin', level: 'Native / Bilingual', rating: 5 },
    { name: 'English', level: 'Intermediate / Professional', rating: 4 },
    { name: 'Malay', level: 'Intermediate / Professional', rating: 4 },
    { name: 'Japanese', level: 'Beginner', rating: 2 }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills & Capabilities</h2>
      
      <div className="skills-grid">
        {skillsData.map((group, gIdx) => (
          <div key={gIdx} className="skills-card glass-panel">
            <div className="card-header">
              {group.icon}
              <h3 className="category-title">{group.category}</h3>
            </div>
            
            <div className="skills-list">
              {group.items.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                  <div className="skill-bar-container">
                    <div 
                      className="skill-bar-fill" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Languages and Certifications panel */}
      <div className="extra-skills-container">
        <div className="lang-panel glass-panel">
          <div className="card-header">
            <Globe2 className="group-icon text-orange" />
            <h3 className="category-title">Languages Spoken</h3>
          </div>
          <div className="lang-list">
            {languagesData.map((lang, lIdx) => (
              <div key={lIdx} className="lang-item">
                <div className="lang-info">
                  <span className="lang-name">{lang.name}</span>
                  <span className="lang-level">{lang.level}</span>
                </div>
                <div className="lang-rating">
                  {[...Array(5)].map((_, starIdx) => (
                    <span 
                      key={starIdx} 
                      className={`rating-dot ${starIdx < lang.rating ? 'active' : ''}`}
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cert-panel glass-panel">
          <div className="card-header">
            <CheckCircle2 className="group-icon text-cyan" />
            <h3 className="category-title">Credentials & Certifications</h3>
          </div>
          <div className="cert-list">
            <div className="cert-item">
              <span className="cert-badge">AWS Academy</span>
              <div className="cert-details">
                <h4 className="cert-name">AWS Academy Graduate - Generative AI Foundations</h4>
                <p className="cert-issuer">AWS Training and Certification</p>
              </div>
            </div>
            <div className="cert-item">
              <span className="cert-badge">UM Code</span>
              <div className="cert-details">
                <h4 className="cert-name">University of Malaya - Dean's List Award</h4>
                <p className="cert-issuer">Academic Achievement in Software Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
