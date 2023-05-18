import { React } from 'react';
import Badge from './Badge';
import Subject from './Subject';
import RadiusRect from './RadiusRect';
import './DiscoveryCard.css';
import LinearGradient from './LinearGradient';

const DiscoveryCard = ({ imgSrc, title, musicImgSrc, musicTitle, singer }) => {
  return (
    <div
      className="discovery_card"
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className="discovery_description">
        <Badge />
        <Subject description={title} textColor="white" fontSize="20px" />
        <div className="discovery_btn_wrapper">
          <RadiusRect width="184px" height="40px">
            <div
              className="music_img"
              style={{
                backgroundImage: `url(${musicImgSrc})`,
              }}
            ></div>
            <div className="music_btn_text">{`${musicTitle} - ${singer}`}</div>
          </RadiusRect>
          <RadiusRect width="94px" height="40px">
            <div className="refresh_btn_text">자세히보기</div>
            <div className="detail_btn">
              <img src="./mdi_share.png"></img>
            </div>
          </RadiusRect>
        </div>
      </div>
      {/* <LinearGradient /> */}
    </div>
  );
};

export default DiscoveryCard;
