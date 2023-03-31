import React from 'react';
import styles from '../pages/Home.module.css';

const Expert = () => {
  return (
    <div
      style={{
        width: '360px',
        height: '424px',
        backgroundColor: '#000000',
      }}
    >
      <div className={styles.div3}>
        <p className={styles.p} style={{ color: '#ffffff' }}>
          콕코전문가들을
        </p>
        <p className={styles.p} style={{ color: '#ffffff' }}>
          소개합니다
        </p>
        <div className={styles.div8} style={{ color: '#828282' }}>
          콕코만을 위해 고민해요
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ margin: 'auto 5px' }}>
          <img
            style={{ width: '155px', height: '220px' }}
            alt=""
            src={'/expert_1.png'}
          ></img>
        </div>
        <div>
          <img
            style={{ width: '155px', height: '220px' }}
            alt=""
            src={'/expert_2.png'}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Expert;
