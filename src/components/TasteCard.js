import { React } from 'react';
import './TasteCard.css';

const TasteCard = ({ hashtags, imgSrc }) => {
  return (
    <div
      style={{
        width: '242px',
        height: '330px',
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover',
        borderRadius: '24px',
        position: 'relative',
      }}
    >
      <div className="hashtags">
        {hashtags.map((hashtag, idx) => {
          return (
            <div key={idx} className="hashtag">
              # {hashtag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TasteCard;
