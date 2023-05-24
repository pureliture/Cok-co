import { React } from 'react';
import './Subject.css';

// import { useNavigate } from 'react-router-dom';

const Subject = ({
  subject,
  description,
  color = 'black',
  subjectFontSize = '14px',
  fontSize = '24px',
  textAlign = 'left',
  subjectTextAlign = 'left',
}) => {
  return (
    <div>
      {subject ? (
        <div
          className="subject"
          style={{ textAlign: subjectTextAlign, fontSize: subjectFontSize }}
        >
          {subject}
        </div>
      ) : (
        <></>
      )}
      <div className="description" style={{ color, fontSize, textAlign }}>
        {description}
      </div>
    </div>
  );
};

export default Subject;
