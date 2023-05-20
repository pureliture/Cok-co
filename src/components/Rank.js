import { React } from 'react';
import './Rank.css';

const Rank = ({ imgSrc, bgColor, ranking, city, continent }) => {
  return (
    <div className="rank">
      <img className="city_img" src={imgSrc}></img>
      <div className="city_description" style={{ backgroundColor: bgColor }}>
        <div className="ranking">{ranking}</div>
        <div>
          <div className="city">{city}</div>
          <div className="continent">{continent}</div>
        </div>
      </div>
    </div>
  );
};

export default Rank;
