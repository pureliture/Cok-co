import { React } from 'react';
import './Refresh.css';
import RadiusRect from './RadiusRect';

const Refresh = () => {
  return (
    <div className="refresh_section">
      <div>새로운 추천을 받고 싶다면?</div>
      <RadiusRect width="89px" height="33px">
        <div className="refresh_btn_text">새로고침</div>
        <img className="refresh_btn" src="./material-symbols_refresh.png"></img>
      </RadiusRect>
    </div>
  );
};

export default Refresh;
