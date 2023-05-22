import { React } from 'react';
import './styles/DiscoveryGuideCard.css';
import Subject from './Subject';

const DiscoveryGuideCard = ({
  imgSrcList,
  width,
  height,
  textWidth,
  textHeight,
}) => {
  return (
    <div className="discovery_guide_card">
      <img style={{ width, height }} src={imgSrcList[0]}></img>
      <img
        style={{ width: textWidth, height: textHeight }}
        src={imgSrcList[1]}
      ></img>
    </div>
  );
};

export default DiscoveryGuideCard;
