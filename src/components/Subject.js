import { React } from 'react';
import './Subject.css';

// import { useNavigate } from 'react-router-dom';

const Subject = ({ subject, description, textColor = 'black' }) => {
  return (
    <>
      <div className="subject">{subject}</div>
      <div className="description" style={{ color: textColor }}>
        {description}
      </div>
    </>
  );
};

export default Subject;
