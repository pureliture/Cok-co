import { React } from 'react';
import './styles/OneWord.css';

const OneWord = ({ words }) => {
  return (
    <div className="one_word_wrapper">
      <div className="one_word">Tripic 한마디</div>
      {words.map((word, idx) => {
        return (
          <div key={idx} className="word">
            {word}
          </div>
        );
      })}
      <img
        src="/speech_bubble.png"
        style={{
          width: '65px',
          height: '48px',
          position: 'absolute',
          // bottom: -70,
          right: 50,
          bottom: -48,
        }}
      />
    </div>
  );
};

export default OneWord;
