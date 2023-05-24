import { React } from 'react';
import './styles/CountryBtn.css';
import { country } from 'constant';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { countrySelected } from 'features/recommend/recommend';

const CountryBtn = ({ id }) => {
  const countryIdx = useAppSelector((state) => state.recommend.countryIdx);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(countrySelected(id));
  };

  return (
    <div className="country_btn_wrapper" onClick={handleClick}>
      <div
        className="country_btn_img_wrapper"
        style={{
          border: id === countryIdx ? '2px solid black' : '',
        }}
      >
        <img className="country_btn_img" src={country[id].imgSrc} />
      </div>
      <div
        className="conutry_btn_name"
        style={{
          color: id === countryIdx ? '#1a1a1a' : '#aeaeae',
        }}
      >
        {country[id].title}
      </div>
    </div>
  );
};

export default CountryBtn;
