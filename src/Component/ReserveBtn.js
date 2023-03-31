import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReserveBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reserve');
  };

  return (
    <button
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
        width: '360px',
        height: '86px',
        position: 'fixed',
        bottom: '0',
      }}
      onClick={handleClick}
    >
      예약하기
    </button>
  );
};

export default ReserveBtn;
