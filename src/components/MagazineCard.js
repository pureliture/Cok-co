import { React } from 'react';
import './styles/MagazineCard.css';

const MagazineCard = ({ imgSrc }) => {
  return (
    <div>
      <img className="magazine_card_img" src={imgSrc}></img>
    </div>
  );
};

export default MagazineCard;
