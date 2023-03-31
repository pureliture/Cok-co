import React from 'react';

const ReviewPhotos = () => {
  return (
    <div
      style={{
        border: '1px solid red',
        width: '360px',
        height: '740px',
        margin: '0 auto',
        // overflow: 'auto',
      }}
    >
      <div
        style={{
          width: '360px',
          height: '90px',
          textAlign: 'center',
        }}
      >
        사진/영상 리뷰 모아보기
      </div>
      <div
        style={{
          width: '360px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          rowGap: '1px',
          columnGap: '1px',
        }}
      >
        <img
          style={{ width: '119px', height: '119px' }}
          alt=""
          src={'/-20230328--959-1@2x.png'}
        ></img>
        <img
          style={{ width: '119px', height: '119px' }}
          alt=""
          src={'/-20230328--1000-2@2x.png'}
        ></img>
        <img
          style={{ width: '119px', height: '119px' }}
          alt=""
          src={'/-20230328--959-3@2x.png'}
        ></img>
        <img
          style={{ width: '119px', height: '119px' }}
          alt=""
          src={'/-20230328--1022-1@2x.png'}
        ></img>
        <img
          style={{ width: '119px', height: '119px' }}
          alt=""
          src={'/-20230328--1022-2@2x.png'}
        ></img>
        <img
          style={{ width: '119px', height: '119px' }}
          alt=""
          src={'/videoReview1.png'}
        ></img>
        <img
          style={{ width: '119px', height: '119px' }}
          alt=""
          src={'/-20230328--1024-3@2x.png'}
        ></img>
        <img
          style={{ width: '119px', height: '119px' }}
          alt=""
          src={'/-20230328--1024-1@2x.png'}
        ></img>
        <img
          style={{ width: '119px', height: '119px' }}
          alt=""
          src={'/-20230328--1024-2@2x.png'}
        ></img>
        <img
          style={{ width: '119px', height: '119px' }}
          alt=""
          src={'/videoReview2.png'}
        ></img>
        <img
          style={{ width: '119px', height: '119px' }}
          alt=""
          src={'/-20230328--1026-2@2x.png'}
        ></img>
        <img
          style={{ width: '119px', height: '119px' }}
          alt=""
          src={'/-20230328--1025-1@2x.png'}
        ></img>
        <img
          style={{ width: '119px', height: '119px' }}
          alt=""
          src={'/-20230328--1027-3@2x.png'}
        ></img>
        <img
          style={{ width: '119px', height: '119px' }}
          alt=""
          src={'/videoReview3.png'}
        ></img>
        <img
          style={{ width: '119px', height: '119px' }}
          alt=""
          src={'/videoReview4.png'}
        ></img>
        <img
          style={{ width: '119px', height: '119px' }}
          alt=""
          src={'/-20230328--1028-2@2x.png'}
        ></img>
        <img
          style={{ width: '119px', height: '119px' }}
          alt=""
          src={'/-20230328--1028-1@2x.png'}
        ></img>
        <img
          style={{ width: '119px', height: '119px' }}
          alt=""
          src={'/-20230328--1028-3@2x.png'}
        ></img>
      </div>
    </div>
  );
};

export default ReviewPhotos;
