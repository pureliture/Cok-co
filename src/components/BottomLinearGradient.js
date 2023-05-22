import { React } from 'react';
import './styles/BottomLinearGradient.css';

const BottomLinearGradient = ({ ratio, transparency }) => {
  return (
    <div
      className="bottom_linear"
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0) ${ratio}%, rgba(0, 0, 0, ${transparency}))`,
      }}
    ></div>
  );
};

export default BottomLinearGradient;
