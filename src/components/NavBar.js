import { React } from 'react';
import './NavBar.css';

const NavBtn = ({ imgSrc, description, selected }) => {
  return (
    <div className="navbtn">
      <div>
        <img src={imgSrc}></img>
      </div>
      <div className="selected">{description}</div>
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="navbar">
      <NavBtn imgSrc="./ic_home_default_full.png" description="홈" />
      <NavBtn imgSrc="/ic_heart_default.png" description="하트" />
      <NavBtn imgSrc="./ic_my_default.png" description="마이" />
    </div>
  );
};

export default NavBar;
