import { React } from 'react';
import './Badge.css';

const Badge = ({ who = 'Tripic', backgroundColor = 'white' }) => {
  return (
    <div className="badge" style={{ backgroundColor }}>
      <div className="badge_who">{who}</div>
      <div>
        <img className="badge_img" src={'/badge_check.png'}></img>
      </div>
    </div>
  );
};

export default Badge;
