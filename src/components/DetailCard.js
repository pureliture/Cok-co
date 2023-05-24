import { React } from 'react';
import Badge from './Badge';
import Subject from './Subject';
import RadiusRect from './RadiusRect';
import BottomLinearGradient from './BottomLinearGradient';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { clicked } from 'features/like/like';
import './DetailCard.css';

const DetailCard = ({ mainImgSrc, subImgSrc, title, location, id }) => {
  const status = useAppSelector((state) => state.like.status);
  const dispatch = useAppDispatch();

  const handleClick = (id) => {
    dispatch(clicked(id));
  };

  return (
    <div
      className="detail_card"
      style={{ backgroundImage: `url(${mainImgSrc})` }}
    >
      <BottomLinearGradient ratio={40} transparency={1} />
      <div className="detail_description">
        <Badge />
        <Subject description={title} color="white" fontSize="20px" />
        <img
          className="detail_stay_heart"
          src={status[id] ? '/heart_full.png' : '/heart.png'}
          onClick={() => handleClick(id)}
        ></img>
        <div className="">
          <RadiusRect width="245px" height="32px">
            <div
              className="location_img"
              style={{
                backgroundImage: `url(${subImgSrc})`,
              }}
            ></div>
            <div className="location_btn_text">{location}</div>
          </RadiusRect>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
