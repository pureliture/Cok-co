import { React } from 'react';
import Badge from './Badge';
import './styles/RoomCard.css';

const RoomCard = ({ imgSrc, title, price }) => {
  return (
    <div className="room_card">
      <img className="room_img" src={imgSrc}></img>
      <div className="room_description">
        <div className="room_title_wrapper">
          <div className="title">{title}</div>
          <div className="price_wrapper">
            <div className="price">{`~${price}원 `}</div>
            <div className="one_day">/ 박</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
