import { React } from 'react';
import './styles/Region.css';
import RadiusRect from './RadiusRect';

const Region = ({ region, count, selected = false, children }) => {
  return (
    <div className="region_wrapper">
      <div
        style={{
          display: 'flex',
          margin: '30px',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="region">{region}</div>
          <RadiusRect width="56px" height="33px">
            <div
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#636363',
              }}
            >
              {count.toLocaleString()}
            </div>
          </RadiusRect>
        </div>
        <img
          src={selected ? '/check_full.png' : '/check.png'}
          style={{ width: '32px', height: '32px' }}
        />
      </div>
      <div className="scroll_x" style={{ margin: '0 0 20px 20px' }}>
        {children}
      </div>
    </div>
  );
};

export default Region;
