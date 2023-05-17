import styles from "./Popup.module.css";

const Popup = () => {
  return (
    <div className={styles.popup}>
      <div className={styles.bg} />
      <div className={styles.popupChild} />
      <div className={styles.parent}>
        <div className={styles.div}>예약 오픈 알림 신청</div>
        <div className={styles.div1}>
          <p className={styles.p}>예약 오픈 1시간 전에</p>
          <p className={styles.p}>푸시 알림을 발송해 드려요</p>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.smsContainer}>
          <p className={styles.p}>SMS, 이메일 알림도</p>
          <p className={styles.p}>필요하시다면 체크해주세요</p>
        </div>
        <div className={styles.sms1}>SMS로도 알림 받을래요</div>
        <div className={styles.div2}>이메일로도 알림 받을래요</div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <img className={styles.groupInner} alt="" src="/vector-39.svg" />
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <img className={styles.groupInner} alt="" src="/vector-40.svg" />
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupChild1} />
        <div className={styles.div3}>알림 신청하기</div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupChild2} />
        <div className={styles.div4}>닫기</div>
      </div>
      <img className={styles.icon} alt="" src="/-20230328--1048-1@2x.png" />
    </div>
  );
};

export default Popup;
