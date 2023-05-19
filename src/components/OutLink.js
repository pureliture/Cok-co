import { React } from 'react';
import RadiusRect from './RadiusRect';
import './styles/OutLink.css';

const OutLink = ({ name, imgSrc }) => {
  return (
    <div className="outlink_wrapper">
      <RadiusRect height="100px" backgroundColor="black" color="white">
        <img className="outlink_img" src={imgSrc} />
        <div className="outlink_name">{name}</div>
        <img className="outlink" src="/right_arrow.png" />
      </RadiusRect>
    </div>
  );
};

export default OutLink;
