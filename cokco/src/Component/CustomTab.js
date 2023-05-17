import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CustomTab = () => {
  const navigate = useNavigate();
  const title = ['전체', '독채', '풀빌라', '앞마당', '수영장'];

  const handleClick = (roomId) => {
    navigate('/room/' + roomId);
  };

  const TabPanel1 = () => {
    return (
      <div>
        <img
          style={{ width: '360px', height: '362.12px', margin: '23px auto' }}
          alt=""
          src={'/tabPanelRoom_1.png'}
          onClick={() => {
            handleClick(1);
          }}
        ></img>
        <img
          style={{ width: '360px', height: '392px', margin: '23px auto' }}
          alt=""
          src={'/tabPanelRoom_2.png'}
          onClick={() => {
            handleClick(2);
          }}
        ></img>
        <img
          style={{ width: '360px', height: '392px', margin: '23px auto' }}
          alt=""
          src={'/tabPanelRoom_3.png'}
          onClick={() => {
            handleClick(3);
          }}
        ></img>
      </div>
    );
  };

  const TabPanel2 = () => {
    return (
      <div>
        <img
          style={{ width: '360px', height: '362.12px', margin: '23px auto' }}
          alt=""
          src={'/tabPanelRoom_1.png'}
        ></img>
        <img
          style={{ width: '360px', height: '392px', margin: '23px auto' }}
          alt=""
          src={'/tabPanelRoom_2.png'}
        ></img>
        <img
          style={{ width: '360px', height: '392px', margin: '23px auto' }}
          alt=""
          src={'/tabPanelRoom_3.png'}
        ></img>
      </div>
    );
  };

  const TabPanel3 = () => {
    return <div>텅</div>;
  };

  const TabPanel4 = () => {
    return (
      <div>
        <img
          style={{ width: '360px', height: '362.12px', margin: '23px auto' }}
          alt=""
          src={'/tabPanelRoom_1.png'}
        ></img>
      </div>
    );
  };

  const TabPanel5 = () => {
    return (
      <div>
        <img
          style={{ width: '360px', height: '362.12px', margin: '23px auto' }}
          alt=""
          src={'/tabPanelRoom_1.png'}
        ></img>
        <img
          style={{ width: '360px', height: '392px', margin: '23px auto' }}
          alt=""
          src={'/tabPanelRoom_2.png'}
        ></img>
      </div>
    );
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
      <TabPanel>
        <TabPanel3></TabPanel3>
      </TabPanel>
      <TabPanel>
        <TabPanel4></TabPanel4>
      </TabPanel>
      <TabPanel>
        <TabPanel5></TabPanel5>
      </TabPanel>
    </Tabs>
  );
};

export default CustomTab;
