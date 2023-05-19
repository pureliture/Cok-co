import { React } from 'react';
import './styles/OneWord.css';

const OneWord = ({ words }) => {
  return (
    <div className="one_word_wrapper">
      <div className="one_word">Tripic 한마디</div>
      {words.map((word, idx) => {
        return (
          <p key={idx} className="word">
            {word}
          </p>
        );
      })}
    </div>
  );
};

export default OneWord;
