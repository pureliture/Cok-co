import { React } from 'react';
import './TopBar.css';
// import { useNavigate } from 'react-router-dom';

const Tab = ({ selected }) => {
  return (
    <div className="tab">
      {selected === 0 ? (
        <>
          <div className="top_selected">추천</div>
          <div className="top_unselected">발견</div>
        </>
      ) : (
        <>
          <div className="top_unselected">추천</div>
          <div className="top_selected">발견</div>
        </>
      )}
    </div>
  );
};

const TopBar = ({ selected }) => {
  return (
    <div className="top_bar">
      <img className="top_bar_btn" src="./search.png"></img>
      <Tab selected={selected} />
      <img className="top_bar_btn" src="./filter.png"></img>
    </div>
  );
};

export default TopBar;
