import styles from "./Component1.module.css";

// Component1
const Calendar = () => {
  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <img className={styles.icon} alt="" src="/-20230327--821-2@2x.png" />
      <img className={styles.item} alt="" src="/group-31.svg" />
      <div className={styles.div1}>
        <p className={styles.p}>{`유플님의 알림과 `}</p>
        <p className={styles.p}>예약 현황을 확인해보세요</p>
      </div>
      <div className={styles.div2}>예약 오픈 알림 신청내역도 한눈에!</div>
      <div className={styles.div3}>나의 알림</div>
      <div className={styles.div4}>나의 예약</div>
      <img className={styles.inner} alt="" src="/vector-4.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector-2.svg" />
      <img className={styles.child1} alt="" src="/vector-3.svg" />
      <div className={styles.parent}>
        <div className={styles.div5}>적정온도</div>
        <div className={styles.div6}>남해의 자연속에서 살아가는 감성숙...</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div7}>예약 오픈 알림</div>
      </div>
      <img className={styles.groupIcon} alt="" src="/group-70.svg" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupChild} />
        <div className={styles.openWrapper}>
          <div className={styles.open}>매월 20일 오후 9:00 open</div>
        </div>
        <div className={styles.container}>
          <div className={styles.div8}>
            다음달 1일 ~ 말일까지 예약이 가능합니다.
          </div>
        </div>
        <img className={styles.groupInner} alt="" src="/group-71.svg" />
      </div>
    </div>
  );
};

export default Calendar;
