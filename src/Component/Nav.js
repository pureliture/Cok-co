import React from 'react';
import { useNavigate } from 'react-router-dom';

// TODO: page에 따라 색 채워지는 아이콘 달라져야함
const Nav = () => {
  const navigate = useNavigate();

  const handleClick = (type) => {
    if (type === 'home') navigate('/');
    else if (type === 'search') navigate('/search');
    else if (type === 'calendar') navigate('/calendar');
    else if (type === 'like') navigate('/like');
    else if (type === 'myPage') navigate('/myPage');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '360px',
        height: '86px',
        backgroundColor: '#f3f1e9',
        position: 'fixed',
        bottom: '0',
      }}
    >
      <img
        style={{ width: '24px', height: '24px' }}
        alt=""
        src="/ic_home_default.png"
        onClick={() => handleClick('home')}
      ></img>
      <img
        style={{ width: '24px', height: '24px' }}
        alt=""
        src="/ic_category_default.png"
        onClick={() => handleClick('search')}
      ></img>
      <img
        style={{ width: '24px', height: '20px' }}
        alt=""
        src="/ic_calender_default.png"
        onClick={() => handleClick('calendar')}
      ></img>
      <img
        style={{ width: '24px', height: '24px' }}
        alt=""
        src="/ic_heart_default.png"
        onClick={() => handleClick('like')}
      ></img>
      <img
        style={{ width: '24px', height: '24px' }}
        alt=""
        src="/ic_my_default.png"
        onClick={() => handleClick('myPage')}
      ></img>
    </div>
  );
};

export default Nav;
