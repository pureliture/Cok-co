import { React } from 'react';
import './CurationCard.css';
import Badge from './Badge';

const CurationCard = ({ size, title, imgSrc, bgColor }) => {
  if (size === 'l') {
    return (
      <div
        className="l_card"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <img className="l_main_img" src={imgSrc}></img>
        <div className="l_title">
          <Badge />
          <div className="title">{title}</div>
        </div>
      </div>
    );
  } else if (size === 'm') {
    return (
      <div
        className="m_card"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <img className="m_main_img" src={imgSrc}></img>
        <div className="m_title">
          <Badge />
          <div className="title">{title}</div>
        </div>
      </div>
    );
  } else if (size === 's') {
    return (
      <div
        className="s_card"
        style={{
          backgroundColor: 'transparent',
        }}
      >
        <img className="s_main_img" src={imgSrc}></img>
        <div className="s_title">
          <Badge />
          <div className="title">{title}</div>
        </div>
      </div>
    );
  }
};

export default CurationCard;
