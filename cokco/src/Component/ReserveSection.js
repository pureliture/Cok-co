import React from 'react';
import styles from '../pages/Home.module.css';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReserveSection = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const notify = () => toast('알림 신청을 완료했어요!');
  return (
    <div
      style={{
        width: '360px',
        height: '424px',
        backgroundColor: '#000000',
        color: '#ffffff',
      }}
    >
      <div className={styles.div3}>바로예약</div>
      {/* TODO: Calendar 나오게!! */}
      {'TODO: Calendar 나오게!! '}
      <div style={{ textAlign: 'center' }}>
        <img
          style={{
            width: '320px',
            height: '44px',
            margin: '5px auto',
          }}
          alt=""
          src="/closed.png"
        />
      </div>
      <div className={styles.div4}>예약오픈</div>
      <div style={{ textAlign: 'center' }}>
        <img
          style={{ width: '320px', height: '68px', margin: '5px auto' }}
          alt=""
          src="/openNoti_1.png"
        />
        <button
          style={{
            border: 'none',
            backgroundColor: '#dbd1b5',
            color: '#000000',
            width: '320px',
            height: '44px',
            margin: '5px auto',
          }}
          onClick={toggleDrawer}
        >
          <div>예약 오픈 알림 받기</div>
        </button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="bottom"
          // className="bla bla bla"
          style={{ width: '360px', margin: '0 auto', height: '560px' }}
        >
          <img
            style={{
              width: '225px',
              height: '417px',
              margin: '22px auto 35px auto',
            }}
            alt=""
            src="/openNotiNotice.png"
          />
          <div
            style={{
              margin: '10px auto 40px auto',
              textAlign: 'center',
            }}
          >
            <button
              style={{
                border: 'none',
                backgroundColor: '#494846',
                color: '#ffffff',
                width: '119px',
                height: '86px',
              }}
            >
              닫기
            </button>
            <button
              style={{
                border: 'none',
                backgroundColor: '#000000',
                color: '#ffffff',
                width: '240px',
                height: '86px',
              }}
              onClick={notify}
            >
              알림 신청하기
            </button>
            {/* TODO: 토스트메세지에 "신청내역 보기" 버튼 추가하기 */}
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              //   closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable={false}
              pauseOnHover={false}
              theme="dark"
            ></ToastContainer>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default ReserveSection;
