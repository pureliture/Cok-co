import { React } from 'react';
import './styles/CountryBtn.css';

const CountryBtn = ({ name, imgSrc, selected = false }) => {
  return (
    <div className="country_btn_wrapper">
      <div
        className="country_btn_img_wrapper"
        style={{
          border: selected ? '2px solid black' : '',
        }}
      >
        <img className="country_btn_img" src={imgSrc} />
      </div>
      <div
        className="conutry_btn_name"
        style={{
          color: selected ? '#1a1a1a' : '#aeaeae',
        }}
      >
        {name}
      </div>
    </div>
  );
};

export default CountryBtn;
