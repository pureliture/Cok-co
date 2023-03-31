import React from 'react';
import styles from '../pages/Room.module.css';

// TODO: 이미지 배치
const CoMagazine = () => {
  return (
    <div
      style={{
        width: '360px',
        height: '424px',
        backgroundColor: '#000000',
      }}
    >
      <div style={{ color: '#ffffff' }}>
        <div className={styles.parent}>
          <div className={styles.div1}>전체보기</div>
          <img className={styles.groupChild} alt="" src="/vector-291.svg" />
        </div>
        <img className={styles.item} alt="" src="/group-471.svg" />
        <div className={styles.div2}>
          <p className={styles.p}>적정온도와</p>
          <p className={styles.p}>비슷한 숙소를 소개합니다.</p>
        </div>
        <div
          className={styles.coMagazineContainer}
          style={{ color: '#828282' }}
        >
          <span className={styles.coMagazine}>Co-Magazine</span>에서 바로
          확인해보세요
        </div>
        <div style={{ display: 'flex' }}>
          <img
            style={{ width: '220px', height: '220px' }}
            alt=""
            src="/image-11@2x.png"
          />
          <img
            style={{ width: '220px', height: '220px' }}
            alt=""
            src="/image-12@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default CoMagazine;
