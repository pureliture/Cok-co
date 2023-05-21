import { React } from 'react';
import './styles/Rect.css';

const Rect = ({ width = '360px', height, disabled = false, text, onClick }) => {
  return (
    <div
      className="rect"
      style={{ width, height, backgroundColor: disabled ? '#8E8E8E' : 'black' }}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Rect;
