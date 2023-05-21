import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBtn = ({ imgSrc, description, selected, onClick }) => {
  return (
    <div className="nav_btn" onClick={onClick}>
      <img className="nav_btn_img" src={imgSrc}></img>
      <div className="nav_selected">{description}</div>
    </div>
  );
};

const NavBar = ({ menuIdx }) => {
  const navigate = useNavigate();

  const handleClick = (type) => {
    if (type === 'home') navigate('/home');
    else if (type === 'heart') navigate('/like');
    else if (type === 'my') navigate('/mypage');
  };

  return (
    <div className="navbar">
      {menuIdx === 0 ? (
        <NavBtn
          imgSrc="/ic_home_default_full.png"
          description="홈"
          onClick={() => handleClick('home')}
        />
      ) : (
        <NavBtn
          imgSrc="/ic_home_default.png"
          description="홈"
          onClick={() => handleClick('home')}
        />
      )}
      {menuIdx === 1 ? (
        <NavBtn
          imgSrc="/ic_heart_default_full.png"
          description="좋아요"
          onClick={() => handleClick('heart')}
        />
      ) : (
        <NavBtn
          imgSrc="/ic_heart_default.png"
          description="좋아요"
          onClick={() => handleClick('heart')}
        />
      )}
      {menuIdx === 2 ? (
        <NavBtn
          imgSrc="/ic_my_default_full.png"
          description="마이"
          onClick={() => handleClick('my')}
        />
      ) : (
        <NavBtn
          imgSrc="/ic_my_default.png"
          description="마이"
          onClick={() => handleClick('my')}
        />
      )}
    </div>
  );
};

export default NavBar;
