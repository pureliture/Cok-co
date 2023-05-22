import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/GoBackBarWhite.css';

const GoBackBarWhite = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="go_back_bar_white">
      <img
        className="left_arrow_white"
        src="/left_arrow_white.png"
        onClick={handleClick}
      ></img>
      <img className="search_white" src="/search_white.png"></img>
    </div>
  );
};

export default GoBackBarWhite;
