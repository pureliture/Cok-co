import { React } from 'react';
import './styles/CountryCard.css';

const CountryCard = ({ imgSrc, name, count, backgroundColor }) => {
  return (
    <div className="country_card_wrapper">
      <img className="country_card_img" src={imgSrc} />
      <div className="country_card_description" style={{ backgroundColor }}>
        <div className="country_card_name">{name}</div>
        <div className="country_card_count">{count}개의 공간</div>
      </div>
    </div>
  );
};

export default CountryCard;
