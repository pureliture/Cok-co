import { React } from 'react';
import './Subject.css';

// import { useNavigate } from 'react-router-dom';

const Subject = ({
  subject,
  description,
  textColor = 'black',
  fontSize = '24px',
}) => {
  return (
    <div>
      {subject ? <div className="subject">{subject}</div> : <></>}
      <div
        className="description"
        style={{ color: textColor, fontSize: fontSize }}
      >
        {description}
      </div>
    </div>
  );
};

export default Subject;
