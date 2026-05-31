import React from 'react';

interface SwordMessageProps {
  show: boolean;
  onClose: () => void;
  title: string;
  body: string;
}

const SwordMessage: React.FC<SwordMessageProps> = ({ show, onClose, title, body }) => {
  if (!show) return null;
  return (
    <div id="sword-msg" style={{ display: 'block' }}>
      <div className="sm-label">⚔️ Message</div>
      <div className="sm-text">
        <strong style={{ fontFamily: 'Cinzel,serif', fontSize: '13px', color: 'var(--zoro)', display: 'block', marginBottom: '6px' }}>
          {title}
        </strong>
        {body}
      </div>
      <button className="sm-close" onClick={onClose}>Got It</button>
    </div>
  );
};

interface SwordButtonProps {
  onClick: () => void;
}

const SwordButton: React.FC<SwordButtonProps> = ({ onClick }) => {
  return (
    <div id="sword-btn" onClick={onClick}>
      <div className="sword-icon">⚔️</div>
      <div className="sword-lbl">Message</div>
    </div>
  );
};

export { SwordButton, SwordMessage };
