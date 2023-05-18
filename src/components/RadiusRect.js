import { React } from 'react';
// import { useNavigate } from 'react-router-dom';
import './RadiusRect.css';

const RadiusRect = ({ children, width, height }) => {
  return (
    <div className="radius_rect" style={{ width, height }}>
      {children}
    </div>
  );
};

export default RadiusRect;
