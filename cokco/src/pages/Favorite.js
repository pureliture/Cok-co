import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Text } from 'presentationals/atoms';
// import { Button } from 'antd';

const Favorite = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {/* <Text fontSize={'xx-large'}>
        안녕하세요 <span style={{ color: '#e6007e' }}>Cok-co </span>입니다.
      </Text>
      <Text fontSize="xxx-large">Favorite</Text> */}
      <button onClick={handleClick}>Favorite</button>
      {/* <Button onClick={handleClick}>Cok-co로 돌아가기</Button> */}
    </div>
  );
};

export default Favorite;