import React from 'react';

const BestRoom = (info) => {
  const handleClick = () => {
    // TODO: /room/{roomId} 로 이동하도록 수정
    window.alert('1');
  };

  return (
    <div style={{ width: '320px', height: '155px', margin: '8px auto' }}>
      <img
        style={{ width: '320px', height: '155px' }}
        alt=""
        src={info.src}
        onClick={handleClick}
      ></img>
    </div>
  );
};

export default BestRoom;
