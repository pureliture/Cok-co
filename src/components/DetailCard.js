import { React } from 'react';
import Badge from './Badge';
import Subject from './Subject';
import RadiusRect from './RadiusRect';
import './DetailCard.css';
import LinearGradient from './LinearGradient';
import BottomLinearGradient from './BottomLinearGradient';

const DetailCard = ({ mainImgSrc, subImgSrc, title, location }) => {
  return (
    <div
      className="detail_card"
      style={{ backgroundImage: `url(${mainImgSrc})` }}
    >
      <BottomLinearGradient ratio={40} transparency={1} />
      <div className="detail_description">
        <Badge />
        <Subject description={title} color="white" fontSize="20px" />
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
      <img
        src="/speech_bubble.png"
        style={{
          width: '45px',
          height: '33px',
          position: 'absolute',
          bottom: 0,
          right: '40px',
        }}
      />
      {/* <LinearGradient /> */}
    </div>
  );
};

export default DetailCard;
