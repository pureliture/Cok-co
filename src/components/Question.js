import { React } from 'react';
import './styles/Question.css';

const Question = ({
  subject,
  description,
  color = 'black',
  fontSize = '24px',
}) => {
  return (
    <div>
      <div className="question">{subject}</div>
      <div className="question_description">{description}</div>
    </div>
  );
};

export default Question;
