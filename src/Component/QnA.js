import React from 'react';
import styles from '../pages/Room.module.css';

const QnA = () => {
  return (
    <div style={{ width: '360px' }}>
      <div className={styles.div18}>호스트문의</div>
      <div style={{ width: '320px', margin: '30px auto' }}>
        <img
          style={{ width: '320px', height: '230px' }}
          alt=""
          src={'/qna.png'}
        ></img>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button
          style={{
            border: '1px solid #ebebeb',
            backgroundColor: 'transparent',
            color: '#828282',
            width: '320px',
            height: '44px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>호스트문의 전체보기</div>
            <div style={{ color: '#bbbbbb' }}>81개</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default QnA;
