import { useState, useRef, useEffect, type ReactNode } from 'react';
import { Terminal as TermIcon, RefreshCw, Trash2 } from 'lucide-react';
import './Terminal.css';

interface HistoryEntry {
  command: string;
  output: string | ReactNode;
}

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: '',
      output: (
        <div>
          <p className="term-welcome">=== DENNIS COMPILER SHELL (v1.0.4) ===</p>
          <p className="term-welcome-sub">Type <span className="term-highlight">help</span> to view available terminal commands, or interact via GUI.</p>
          <br />
        </div>
      )
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isFirstMount = useRef(true);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    scrollToBottom();
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    let response: string | ReactNode = '';

    switch (trimmed) {
      case 'help':
        response = (
          <div className="term-help-grid">
            <div><span className="term-cmd">about</span> - Who is Dennis?</div>
            <div><span className="term-cmd">projects</span> - View developed applications</div>
            <div><span className="term-cmd">skills</span> - Engineering capabilities</div>
            <div><span className="term-cmd">experience</span> - Work & Education journey</div>
            <div><span className="term-cmd">contact</span> - Retrieve phone, email & links</div>
            <div><span className="term-cmd">secret</span> - Run compiler bypass protocol</div>
            <div><span className="term-cmd">clear</span> - Clear history buffer</div>
          </div>
        );
        break;
      case 'about':
        response = "Dennis Heng Shu Yi is a Software Engineering major at the University of Malaya. Key achievements: 3.89 CGPA in SE, exchange student at CNU in South Korea (90.1% score), and finalist at Varsity Hackathon 2026 and Deep Tech Challenge 2026.";
        break;
      case 'projects':
        response = (
          <div className="term-projects-list">
            <p>• <strong>CareFlow</strong>: Multi-Agent triage framework (Gemini/OpenAI) + Consensus debate engine.</p>
            <p>• <strong>EnviroPulse</strong>: IoT telemetry, IDW interpolation backend + Redis state cache.</p>
            <p>• <strong>Memecoin Mania</strong>: ML trend forecast pipeline + web visual dashboard.</p>
            <p>• <strong>Hacking The Future</strong>: Force-directed graph representation (JavaFX) + SQLite backend.</p>
            <p>• <strong>Finance Flow</strong>: Retrieval-Augmented Generation (RAG) + Vector DB classification.</p>
            <p>Type the GUI sections above to browse fully detailed summaries!</p>
          </div>
        );
        break;
      case 'skills':
        response = "Languages: Java, Python, JavaScript, TypeScript, Kotlin, SQL, HTML/CSS. Tech Stack: React, NodeJS, Express, Android (Fragment-based), Redis, Git, SQLite, OpenCV, MediaPipe.";
        break;
      case 'experience':
        response = (
          <div className="term-experience-timeline">
            <p><strong>[2026]</strong> Green Generation - Web Dev Intern (Kuching Sarawak)</p>
            <p><strong>[2023 - 2025]</strong> Mediaplus Digital - Part-Time Web Developer (Miri Sarawak)</p>
            <p><strong>[2023 - Present]</strong> University of Malaya - Bachelor of Software Engineering</p>
            <p><strong>[2025]</strong> Chonnam National University - Exchange Program (South Korea)</p>
          </div>
        );
        break;
      case 'contact':
        response = (
          <div className="term-contact-info">
            <p>📧 Email: <a href="mailto:den519000@gmail.com" className="term-link">den519000@gmail.com</a></p>
            <p>📱 Phone: <span className="term-highlight">+6016-8087155</span></p>
            <p>📍 Location: University of Malaya, Kuala Lumpur, Malaysia</p>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'secret':
        response = (
          <div className="term-secret-code">
            <p className="blink">⚡ [ACCESS GRANTED] BYPASS SUCCESSFUL ⚡</p>
            <p>------------------------------------------</p>
            <p>System report dump for SUBJECT: Dennis Heng</p>
            <p>• Matriculation CGPA: 4.00 / 4.00 (Kolej Matrikulasi Labuan)</p>
            <p>• SPM Score: 7A+ 1A- 1B (SMK Lopeng Tengah)</p>
            <p>• High-level MCP tools explorer - integrated custom subagents</p>
            <p>• Decentralized AI agent specialist (Rescue Swarm project)</p>
            <p>• Logistics lead for UM Hackathon, Kuayue Concert & BoshuYouYue Camp</p>
            <p>Status: Excellent Engineering Fit.</p>
          </div>
        );
        break;
      default:
        response = `Command not recognized: '${trimmed}'. Type 'help' to see valid operations.`;
        break;
    }

    setHistory((prev) => [...prev, { command: cmdText, output: response }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  const handleReset = () => {
    setHistory([
      {
        command: '',
        output: (
          <div>
            <p className="term-welcome">=== DENNIS COMPILER SHELL (v1.0.4) ===</p>
            <p className="term-welcome-sub">Type <span className="term-highlight">help</span> to view available terminal commands, or interact via GUI.</p>
            <br />
          </div>
        )
      }
    ]);
  };

  return (
    <section id="terminal" className="terminal-section">
      <h2 className="section-title">Dev Terminal</h2>
      
      <div className="terminal-wrapper glass-panel" onClick={focusInput}>
        <div className="terminal-header">
          <div className="header-left">
            <TermIcon size={16} className="terminal-header-icon" />
            <span className="header-title">terminal.sh — bash</span>
          </div>
          <div className="header-actions">
            <button onClick={(e) => { e.stopPropagation(); handleReset(); }} className="header-btn" title="Reset shell">
              <RefreshCw size={12} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); setHistory([]); }} className="header-btn" title="Clear buffer">
              <Trash2 size={12} />
            </button>
            <div className="window-controls">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
          </div>
        </div>

        <div className="terminal-body">
          {history.map((entry, index) => (
            <div key={index} className="terminal-line-group">
              {entry.command && (
                <div className="terminal-input-line">
                  <span className="prompt">dennis@portfolio:~$</span>
                  <span className="command">{entry.command}</span>
                </div>
              )}
              <div className="terminal-output">{entry.output}</div>
            </div>
          ))}
          
          <div className="terminal-input-line active-line">
            <span className="prompt">dennis@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </div>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </section>
  );
}
