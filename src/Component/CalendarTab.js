import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CalendarTab = () => {
  const navigate = useNavigate();
  const title = ['나의 알림', '나의 예약'];

  const handleClick = (roomId) => {
    navigate('/room/' + roomId);
  };

  const TabPanel1 = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <img
          style={{ width: '320px', height: '202.5px' }}
          alt=""
          src={'/myNoti_1.png'}
          onClick={() => {
            handleClick(1);
          }}
        ></img>
      </div>
    );
  };

  const TabPanel2 = () => {
    return <div>텅</div>;
  };

  return (
    <Tabs>
      <TabList>
        {title.map((ele, index) => {
          return <Tab key={index}>{ele}</Tab>;
        })}
      </TabList>
      <TabPanel>
        <TabPanel1></TabPanel1>
      </TabPanel>
      <TabPanel>
        <TabPanel2></TabPanel2>
      </TabPanel>
    </Tabs>
  );
};

export default CalendarTab;
