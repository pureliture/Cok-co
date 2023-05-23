import { React } from 'react';
import NavBar from 'components/NavBar';
import './styles/Header.css';

const Header = ({ title }) => {
  return (
    <>
      <div className="header">
        <div className="header_btn"></div>
        <div className="header_title">{title}</div>
        <img className="header_btn" src="/search.png"></img>
      </div>
    </>
  );
};

export default Header;
