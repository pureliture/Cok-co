import styles from "./Component.module.css";

const Component = () => {
  return (
    <div className={styles.div}>
      <img className={styles.image160Icon} alt="" src="/image-160@2x.png" />
      <div className={styles.phoneParent}>
        <img className={styles.phoneIcon} alt="" src="/phone.svg" />
        <img className={styles.phoneIcon} alt="" src="/camera.svg" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <div className={styles.div1}>20:00</div>
          <div className={styles.div2}>4월 20일 목요일</div>
        </div>
        <div className={styles.container}>
          <div className={styles.maskGroup}>
            <div className={styles.bg} />
          </div>
          <div className={styles.right}>
            <div className={styles.head}>
              <div className={styles.contentTitle}>콕코</div>
              <div className={styles.time}>지금</div>
              <img className={styles.headChild} alt="" src="/vector-362.svg" />
            </div>
            <div className={styles.bottom}>
              <div className={styles.contentText}>
                [적정온도] 숙소의 예약 오픈이 1시간 남았어요! 슬슬 대기를
                시작해볼까요?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
