import React from 'react';
import styles from '../pages/Room.module.css';

const Reviews = () => {
  return (
    <div style={{ width: '360px' }}>
      <div style={{ display: 'flex' }}>
        <div className={styles.div19}>리뷰</div>
        <div className={styles.div20}>142개</div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          margin: '10px auto',
        }}
      >
        <img
          style={{ width: '100px', height: '100px' }}
          alt=""
          src={'/-20230328--959-1@2x.png'}
        ></img>
        <img
          style={{ width: '100px', height: '100px' }}
          alt=""
          src={'/-20230328--1000-2@2x.png'}
        ></img>
        <img
          style={{ width: '100px', height: '100px' }}
          alt=""
          src={'/photo_more.png'}
        ></img>
      </div>
      <Review></Review>
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
            <div>리뷰 더보기</div>
            <div style={{ color: '#bbbbbb' }}>139개</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Reviews;

const Review = () => {
  return (
    <div style={{ width: '320px', height: '344px', margin: 'auto' }}>
      <img
        style={{ width: '320px', height: '344px' }}
        alt=""
        src={'/review.png'}
      ></img>
    </div>
  );
};
