import { React } from 'react';
import './styles/Rect.css';

const Rect = ({
  children,
  width = '360px',
  height,
  //   backgroundColor = 'white',
  //   color = 'black',
  //   border = 'none',
  disabled = false,
  text,
}) => {
  return (
    <div
      className="rect"
      //   style={{ width, height, backgroundColor, color, border }}
      style={{ width, height, backgroundColor: disabled ? '#8E8E8E' : 'black' }}
    >
      {text}
    </div>
  );
};

export default Rect;
