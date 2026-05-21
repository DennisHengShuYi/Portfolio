import { useState } from 'react';
import { Briefcase, GraduationCap, Trophy, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  details: string[];
  badges?: string[];
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'work' | 'education' | 'competition'>('work');

  const workItems: TimelineItem[] = [
    {
      id: 'work-1',
      title: 'Web Developer Intern',
      subtitle: 'Green Generation',
      date: 'May 2026 - July 2026',
      location: 'Kuching, Sarawak',
      details: [
        'Engaged in frontend web design and application optimizations during summer internship cycle.',
        'Collaborated on local green technology initiatives and telemetry web monitoring.'
      ],
      badges: ['Frontend Dev', 'React', 'Telemetry']
    },
    {
      id: 'work-2',
      title: 'Part-Time Web Developer',
      subtitle: 'Mediaplus Digital',
      date: 'Dec 2023 - Feb 2025',
      location: 'Miri, Sarawak',
      details: [
        'Assisted in developing and maintaining client websites using HTML, CSS, and WordPress.',
        'Collaborated with the design and marketing teams to ensure responsive and SEO-friendly layouts.'
      ],
      badges: ['HTML/CSS', 'WordPress', 'SEO', 'Responsive Web Design']
    },
    {
      id: 'work-3',
      title: 'Part-Time Cashier/Promoter',
      subtitle: 'KN Nursery',
      date: 'Feb 2025 - Mar 2025',
      location: 'Miri, Sarawak',
      details: [
        'Handled customer cash transactions, managed checkouts, and promoted nursery plant offerings.'
      ],
      badges: ['Customer Service', 'Cash Handling']
    },
    {
      id: 'work-4',
      title: 'Part-Time General Worker',
      subtitle: 'Medu Book Distributor',
      date: 'Apr 2025 - Jul 2025',
      location: 'Petaling Jaya, Selangor',
      details: [
        'Managed book distribution logistics, catalog verification, and warehouse stock operations.'
      ],
      badges: ['Warehouse', 'Logistics']
    },
    {
      id: 'work-5',
      title: 'Part-Time Cashier Koperasi',
      subtitle: 'Kolej Poly-Tech MARA Bangi',
      date: 'Aug 2025 - Aug 2025',
      location: 'Bangi, Selangor',
      details: [
        'Managed checkout transactions and supported cooperative bookstore stock replenishment.'
      ],
      badges: ['Operations', 'Cashier']
    }
  ];

  const educationItems: TimelineItem[] = [
    {
      id: 'edu-1',
      title: 'Bachelor of Software Engineering',
      subtitle: 'University of Malaya',
      date: 'Oct 2023 - Current',
      location: 'Kuala Lumpur, Malaysia',
      details: [
        'Current result CGPA: 3.89 / 4.00.',
        'Core focus on Object-Oriented Software design, Advanced Databases, AI engineering, and Systems Abstractions.',
        'Active participant in tech community activities.'
      ],
      badges: ['CGPA 3.89', 'UM', 'Software Engineering']
    },
    {
      id: 'edu-2',
      title: 'Exchange Student Program',
      subtitle: 'Chonnam National University',
      date: 'Sept 2025 - Dec 2025',
      location: 'Gwangju, South Korea',
      details: [
        'Completed exchange student program with high academic results.',
        'Average percentage points: 90.10 / 100.00.',
        'Broadened understanding of global engineering systems.'
      ],
      badges: ['Exchange Program', 'CNU South Korea', '90.10% Score']
    },
    {
      id: 'edu-3',
      title: 'The Malaysian Matriculation Programme',
      subtitle: 'Kolej Matrikulasi Labuan',
      date: 'July 2022 - July 2023',
      location: 'Labuan, Malaysia',
      details: [
        'Graduated with result CGPA: 4.00 / 4.00.',
        'Focused on Computer Science, Physics, Chemistry, and Mathematics.'
      ],
      badges: ['CGPA 4.00', 'Labuan Matriculation']
    },
    {
      id: 'edu-4',
      title: 'Sijil Pelajaran Malaysia (SPM)',
      subtitle: 'SMK Lopeng Tengah',
      date: 'Jan 2017 - March 2022',
      location: 'Miri, Sarawak',
      details: [
        'Graduated with result: 7A+, 1A-, 1B.'
      ],
      badges: ['7A+ 1A- 1B', 'High School']
    }
  ];

  const competitionItems: TimelineItem[] = [
    {
      id: 'comp-1',
      title: 'Finalist - UM National Deep Tech Challenge Hackathon 2026',
      subtitle: 'University of Malaya',
      date: '2026',
      details: [
        'Represented SE department. Designed advanced deep-tech web architectures in a high-intensity hackathon sprint.'
      ],
      badges: ['Finalist', 'Deep Tech', 'Hackathon']
    },
    {
      id: 'comp-2',
      title: 'Finalist - Varsity Hackathon 2026',
      subtitle: 'Universiti Sains Malaysia',
      date: '2026',
      location: 'Pulau Pinang, Malaysia',
      details: [
        'Reached final stage among top varsity coders in Malaysia. Implemented web optimization prototypes.'
      ],
      badges: ['Finalist', 'Varsity Hack', 'USM']
    },
    {
      id: 'comp-3',
      title: 'Participant - Borneo Hackathon 2026',
      subtitle: 'UNIMAS (Universiti Malaysia Sarawak)',
      date: '2026',
      details: [
        'Designed and built dynamic prototype applications to address real-time regional telemetry and environmental tracking challenges in Sarawak.'
      ],
      badges: ['Participant', 'Borneo Hackathon', 'IoT Telemetry']
    },
    {
      id: 'comp-4',
      title: 'Participant - UM Hackathon 2026',
      subtitle: 'University of Malaya',
      date: '2026',
      details: [
        'Collaborated with peers to develop and present custom software solutions in a fast-paced coding sprint environment.'
      ],
      badges: ['Participant', 'UM Hackathon', 'Rapid Prototyping']
    },
    {
      id: 'comp-5',
      title: 'Logistics Committee',
      subtitle: 'Kuayue Concert 24/25',
      date: '2024 - 2025',
      details: [
        'Managed stage setup, equipment handling, and backstage coordination to ensure smooth performance flow.'
      ],
      badges: ['Kuayue Concert', 'Stage Logistics']
    },
    {
      id: 'comp-6',
      title: 'Program & Protocol Committee',
      subtitle: 'Kuayue Concert 23/24',
      date: '2023 - 2024',
      details: [
        'Coordinated concert flow and guest protocols, ensuring formal segments ran smoothly and on time.'
      ],
      badges: ['Kuayue Concert', 'Event Protocol']
    },
    {
      id: 'comp-7',
      title: 'Logistics Committee',
      subtitle: 'BoshuYouYue Camp 24/25',
      date: '2024 - 2025',
      details: [
        'Handled accommodation, venue setup, and material distribution for a seamless camp experience.'
      ],
      badges: ['BoshuYouYue Camp', 'Camp Logistics']
    },
    {
      id: 'comp-8',
      title: 'Logistics Committee',
      subtitle: 'BoshuYouYue Camp 23/24',
      date: '2023 - 2024',
      details: [
        'Supported camp logistics including transportation, scheduling, and daily operations.'
      ],
      badges: ['BoshuYouYue Camp', 'Camp Logistics']
    }
  ];

  const getActiveItems = () => {
    switch (activeTab) {
      case 'work': return workItems;
      case 'education': return educationItems;
      case 'competition': return competitionItems;
    }
  };

  const getTabColorClass = () => {
    switch (activeTab) {
      case 'work': return 'work-active';
      case 'education': return 'edu-active';
      case 'competition': return 'comp-active';
    }
  };

  const getTabIcon = (tab: 'work' | 'education' | 'competition') => {
    switch (tab) {
      case 'work': return <Briefcase size={16} />;
      case 'education': return <GraduationCap size={16} />;
      case 'competition': return <Trophy size={16} />;
    }
  };

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Timeline & History</h2>
      
      {/* Interactive Timeline Tabs */}
      <div className="timeline-tabs-container glass-panel">
        <button 
          className={`timeline-tab-btn ${activeTab === 'work' ? 'active work' : ''}`}
          onClick={() => setActiveTab('work')}
        >
          {getTabIcon('work')}
          <span>Work Experience</span>
        </button>
        <button 
          className={`timeline-tab-btn ${activeTab === 'education' ? 'active edu' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          {getTabIcon('education')}
          <span>Education</span>
        </button>
        <button 
          className={`timeline-tab-btn ${activeTab === 'competition' ? 'active comp' : ''}`}
          onClick={() => setActiveTab('competition')}
        >
          {getTabIcon('competition')}
          <span>Competitions & Activities</span>
        </button>
      </div>

      {/* Vertical Timeline Wrapper */}
      <div className={`timeline-timeline-container ${getTabColorClass()}`}>
        <div className="timeline-center-line"></div>

        {getActiveItems().map((item, idx) => (
          <div 
            key={item.id} 
            className={`timeline-timeline-item fade-in ${idx % 2 === 0 ? 'left-aligned' : 'right-aligned'}`}
            style={{ animationDelay: `${idx * 0.08}s` }}
          >
            {/* Timeline Dot */}
            <div className="timeline-dot-wrapper">
              <div className="timeline-dot-outer">
                <div className="timeline-dot-inner"></div>
              </div>
            </div>

            {/* Timeline Card */}
            <div className="timeline-card glass-panel">
              <span className="timeline-card-date">
                <Calendar size={12} className="inline-icon" /> {item.date}
              </span>
              
              <h3 className="timeline-card-title">{item.title}</h3>
              
              <h4 className="timeline-card-subtitle">
                {item.subtitle}
                {item.location && (
                  <span className="timeline-card-location">
                    <MapPin size={10} className="inline-icon-muted" /> {item.location}
                  </span>
                )}
              </h4>
              
              <ul className="timeline-card-details">
                {item.details.map((detail, dIdx) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
              
              <div className="timeline-card-badges">
                {item.badges?.map((badge, bIdx) => (
                  <span key={bIdx} className="badge badge-tech">{badge}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
