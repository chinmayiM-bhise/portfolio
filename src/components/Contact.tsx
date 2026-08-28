import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <section className="sec" id="contact-s">
      <div className="sec-eyebrow">Establish Communication</div>
      <div className="sec-h">Get In Touch · Den Den Mushi</div>
      <div className="sec-rule"></div>

      <div className="contact-wrapper">
        <div className="contact-left">
          <p className="contact-intro">
            Whether you are looking to hire a dedicated <strong>Cybersecurity Engineer</strong> (SOC, VAPT, DFIR, Malware, IoT/OT), collaborate on security research, or discuss bug bounty findings — my line is open!
          </p>

          <div className="contact-status-banner">
            <span className="csb-dot"></span>
            <div>
              <strong>Current Status:</strong> Open to Full-Time Roles, Internships & Security Research
            </div>
          </div>

          <div className="contact-grid">
            <div className="contact-item">
              <span className="c-ico">📧</span>
              <div className="c-info">
                <div className="c-lbl">Direct Email</div>
                <a href="mailto:chinmayibhise2004@gmail.com" className="c-val">
                  chinmayibhise2004@gmail.com
                </a>
              </div>
              <button
                type="button"
                className="c-copy-btn"
                onClick={() => copyToClipboard('chinmayibhise2004@gmail.com', 'email')}
              >
                {copied === 'email' ? 'Copied! ✓' : 'Copy'}
              </button>
            </div>

            <div className="contact-item">
              <span className="c-ico">💼</span>
              <div className="c-info">
                <div className="c-lbl">LinkedIn Profile</div>
                <a
                  href="https://linkedin.com/in/chinmayi-bhise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="c-val"
                >
                  linkedin.com/in/chinmayi-bhise ↗
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span className="c-ico">📱</span>
              <div className="c-info">
                <div className="c-lbl">Phone / WhatsApp</div>
                <a href="tel:+919172650095" className="c-val">
                  +91 9172650095
                </a>
              </div>
              <button
                type="button"
                className="c-copy-btn"
                onClick={() => copyToClipboard('+919172650095', 'phone')}
              >
                {copied === 'phone' ? 'Copied! ✓' : 'Copy'}
              </button>
            </div>

            <div className="contact-item">
              <span className="c-ico">⚔️</span>
              <div className="c-info">
                <div className="c-lbl">TryHackMe Profile</div>
                <span className="c-val">Top 3% Global Ranking</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="quick-msg-card">
            <div className="qmc-header">
              <span className="qmc-icon">📡</span>
              <h3>Send a Direct Dispatch</h3>
            </div>
            <p className="qmc-desc">
              Have an urgent requirement or question? Click below to launch your email client directly with pre-filled details.
            </p>
            <div className="qmc-actions">
              <a
                href="mailto:chinmayibhise2004@gmail.com?subject=Cybersecurity%20Opportunity%20-%20Chinmayi%20Bhise&body=Hello%20Chinmayi,%0D%0A%0D%0AI%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding..."
                className="btn btn-primary qmc-btn"
              >
                Launch Secure Email ✉️
              </a>
              <a
                href="https://linkedin.com/in/chinmayi-bhise"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline qmc-btn"
              >
                Connect on LinkedIn 💼
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
