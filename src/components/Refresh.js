import { React } from 'react';
import './Refresh.css';

const Refresh = () => {
  return (
    <div className="refresh_section">
      <div>새로운 추천을 받고 싶다면?</div>
      <div className="btn_wrapper">
        <div className="btn_text">새로고침</div>
        <img className="refresh_btn" src="./material-symbols_refresh.png"></img>
      </div>
    </div>
  );
};

export default Refresh;
