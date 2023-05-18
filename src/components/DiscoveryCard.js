import { React } from 'react';
import Badge from './Badge';
import Subject from './Subject';
import RadiusRect from './RadiusRect';
import './DiscoveryCard.css';

const DiscoveryCard = ({ imgSrc, title, musicImgSrc, musicTitle, singer }) => {
  return (
    <div
      className="discovery_card"
      style={{ backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover' }}
    >
      <div style={{ position: 'absolute', bottom: '0' }}>
        <Badge />
        <Subject description={title} textColor="white" />
        <div style={{ display: 'flex' }}>
          <RadiusRect width="184px" height="40px">
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '70%',
                overflow: 'hidden',
                textAlign: 'center',
                backgroundImage: `url(${musicImgSrc})`,
                backgroundSize: 'cover',
              }}
            ></div>
            <div className="music_btn_text">{`${musicTitle} - ${singer}`}</div>
          </RadiusRect>
          <RadiusRect width="94px" height="40px">
            <div className="refresh_btn_text">자세히보기</div>
            <img className="detail_btn" src="./mdi_share.png"></img>
          </RadiusRect>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryCard;
