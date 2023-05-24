import { React } from 'react';
import Badge from './Badge';
import './styles/RoomCard.css';
import LinearGradient from './LinearGradient';
import RightTopLinearGradient from './RightTopLinearGradient';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { clicked } from 'features/detailStay/detailStay';

const RoomCard = ({ imgSrc, title, price, id }) => {
  const status = useAppSelector((state) => state.detailStay.status);
  const dispatch = useAppDispatch();

  const handleLikeClick = () => {
    dispatch(clicked(id));
  };

  return (
    <div className="room_card">
      <RightTopLinearGradient />
      <img
        className="heart"
        src={status[id] ? '/heart_full.png' : '/heart.png'}
        onClick={handleLikeClick}
      ></img>
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
