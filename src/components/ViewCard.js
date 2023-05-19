import { React } from 'react';
import Badge from './Badge';
import './styles/ViewCard.css';

const ViewCard = ({ bgColor, imgSrc, title }) => {
  return (
    <div
      className="view_card"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <img className="view_img" src={imgSrc}></img>
      <div className="view_title">
        <div className="title">{title}</div>
      </div>
    </div>
  );
};

export default ViewCard;
