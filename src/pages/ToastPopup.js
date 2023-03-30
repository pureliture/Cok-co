import styles from "./ToastPopup.module.css";

const ToastPopup = () => {
  return (
    <div className={styles.toastPopup}>
      <div className={styles.bg} />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.label}>알림 신청을 완료했어요!</div>
        <div className={styles.groupParent}>
          <div className={styles.vectorParent}>
            <img className={styles.groupItem} alt="" src="/vector-29.svg" />
            <div className={styles.label1}>신청내역 보기</div>
          </div>
          <img className={styles.groupInner} alt="" src="/group-20.svg" />
        </div>
      </div>
    </div>
  );
};

export default ToastPopup;
