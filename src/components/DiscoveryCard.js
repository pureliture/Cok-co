import { React } from 'react';
import Badge from './Badge';
import Subject from './Subject';
import RadiusRect from './RadiusRect';
import './DiscoveryCard.css';
import LinearGradient from './LinearGradient';

const DiscoveryCard = ({
  size = 'l',
  imgSrc,
  title,
  musicImgSrc,
  musicTitle,
  singer,
  classname = '',
}) => {
  if (size === 'l') {
    return (
      <div
        className={`l_discovery_card ${classname}`}
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <div className="l_discovery_description">
          <Badge />
          <Subject description={title} color="white" fontSize="20px" />
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
              <div className="detail_btn_text">자세히보기</div>
              <img className="detail_btn" src="/mdi_share.png"></img>
            </RadiusRect>
          </div>
        </div>
        {/* <LinearGradient /> */}
      </div>
    );
  } else if (size === 'm') {
    return (
      <div
        className="m_discovery_card"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <div className="m_discovery_description">
          <Badge />
          <Subject description={title} color="white" fontSize="20px" />
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
          </div>
        </div>
        {/* <LinearGradient /> */}
      </div>
    );
  }
};

export default DiscoveryCard;
