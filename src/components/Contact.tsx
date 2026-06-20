import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import './Contact.css';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const email = 'den519000@gmail.com';
  const phone = '016-8087155';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE';

    if (accessKey === 'YOUR_ACCESS_KEY_HERE') {
      // Fallback simulation for local development when key is not configured
      console.warn('Web3Forms Access Key is not configured. Simulating successful form submission. Get your key at https://web3forms.com');
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          from_name: 'Portfolio Contact Form',
          subject: `New Message from ${formState.name} (${formState.email})`
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitSuccess(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setSubmitError(result.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setSubmitError('Failed to send message. Please check your network connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-grid">
        {/* Contact Info Card */}
        <div className="contact-info-card glass-panel">
          <h3 className="contact-card-title">Let's Connect</h3>
          <p className="contact-card-desc">
            I am currently looking for summer internships and entry-level software engineering roles. Drop a message or reach out directly!
          </p>

          <div className="info-items">
            {/* Email item */}
            <div className="info-item">
              <div className="info-icon-wrapper">
                <Mail size={20} />
              </div>
              <div className="info-details">
                <span className="info-label">Email</span>
                <a href={`mailto:${email}`} className="info-value">{email}</a>
              </div>
              <button 
                onClick={copyEmail} 
                className={`copy-btn ${copiedEmail ? 'copied' : ''}`}
                title="Copy to clipboard"
              >
                {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone item */}
            <div className="info-item">
              <div className="info-icon-wrapper">
                <Phone size={20} />
              </div>
              <div className="info-details">
                <span className="info-label">Phone</span>
                <span className="info-value">+60 {phone}</span>
              </div>
              <button 
                onClick={copyPhone} 
                className={`copy-btn ${copiedPhone ? 'copied' : ''}`}
                title="Copy to clipboard"
              >
                {copiedPhone ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location item */}
            <div className="info-item">
              <div className="info-icon-wrapper">
                <MapPin size={20} />
              </div>
              <div className="info-details">
                <span className="info-label">Location</span>
                <span className="info-value">Kuala Lumpur, Malaysia</span>
              </div>
            </div>
          </div>

          <div className="social-links-footer">
            <a href="https://github.com/DennisHengShuYi" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/dennis-heng-shu-yi" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-card glass-panel">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name"
                value={formState.name}
                onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                placeholder="e.g. John Doe"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email"
                value={formState.email}
                onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                placeholder="e.g. john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary submit-btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>

            {submitSuccess && (
              <div className="submit-success-msg">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}

            {submitError && (
              <div className="submit-error-msg">
                ✗ {submitError}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
