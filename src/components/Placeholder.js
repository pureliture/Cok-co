import { React } from 'react';
import './styles/Placeholder.css';

const Placeholder = ({ title, required = false }) => {
  return (
    <div className="placeholder_wrapper">
      <div className="placeholder_title">{title}</div>
      {required ? <div className="asterisk">*</div> : <></>}
    </div>
  );
};

export default Placeholder;
