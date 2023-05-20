import { React } from 'react';
import './TasteCard.css';

const TasteCard = ({ hashtags, imgSrc, selected = false }) => {
  return (
    <div
      style={{
        width: selected ? '360px' : '242px',
        height: '330px',
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover',
        borderRadius: '24px',
        position: 'relative',
        margin: '2px auto',
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
