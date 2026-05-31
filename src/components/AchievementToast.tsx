import React from 'react';

interface AchievementToastProps {
  show: boolean;
  icon: string;
  msg: string;
}

const AchievementToast: React.FC<AchievementToastProps> = ({ show, icon, msg }) => {
  return (
    <div id="toast" className={show ? 'show' : ''}>
      <div id="toast-ico">{icon}</div>
      <div>
        <div id="toast-title">Achievement Unlocked</div>
        <div id="toast-msg">{msg}</div>
      </div>
    </div>
  );
};

export default AchievementToast;
