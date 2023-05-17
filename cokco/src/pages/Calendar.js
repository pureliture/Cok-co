import React from 'react';
import styles from './Calendar.module.css';
import CalendarTab from 'Component/CalendarTab';
import Nav from 'Component/Nav';

const Calendar = () => {
  return (
    <div
      style={{
        border: '1px solid red',
        width: '360px',
        minHeight: '740px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          backgroundColor: 'black',
          width: '360px',
          height: '174px',
          color: '#ffffff',
        }}
      >
        <p className={styles.p}>{`유플님의 알림과 `}</p>
        <p className={styles.p}>예약 현황을 확인해보세요</p>
        <div style={{ color: '#828282' }}>
          예약 오픈 알림 신청내역도 한눈에!
        </div>
      </div>
      <CalendarTab></CalendarTab>
      <Nav></Nav>
    </div>
  );
};

export default Calendar;
