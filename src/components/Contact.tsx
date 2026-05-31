import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="sec" id="contact-s">
      <div className="sec-eyebrow">Contact</div>
      <div className="sec-h">Get In Touch</div>
      <div className="sec-rule"></div>
      <p className="contact-intro">Open to internships, full-time opportunities, research collaborations, and interesting conversations about cybersecurity. Feel free to reach out!</p>
      <div className="contact-grid">
        <a className="contact-item" href="mailto:chinmayibhise2004@gmail.com">
          <span className="c-ico">📧</span><div><div className="c-lbl">Email</div><div className="c-val">chinmayibhise2004@gmail.com</div></div>
        </a>
        <a className="contact-item" href="https://linkedin.com/in/chinmayi-bhise" target="_blank" rel="noopener noreferrer">
          <span className="c-ico">💼</span><div><div className="c-lbl">LinkedIn</div><div className="c-val">linkedin.com/in/chinmayi-bhise</div></div>
        </a>
        <a className="contact-item" href="tel:+919172650095">
          <span className="c-ico">📱</span><div><div className="c-lbl">Phone</div><div className="c-val">+91 9172650095</div></div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
