import { React } from 'react';
import './styles/Region.css';
import RadiusRect from './RadiusRect';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selected } from 'features/tasteRegion/tasteRegion';

const Region = ({ id, region, count, children }) => {
  const selectedStatus = useAppSelector(
    (state) => state.tasteRegion.selectedStatus,
  );

  const dispatch = useAppDispatch();

  const handleClick = (id) => {
    dispatch(selected(id));
  };

  return (
    <div className="region_wrapper" onClick={() => handleClick(id)}>
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
          src={selectedStatus[id] ? '/check_full.png' : '/check.png'}
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
