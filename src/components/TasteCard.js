import { React } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selected } from 'features/tasteRoom/tasteRoom';
import './TasteCard.css';

const TasteCard = ({ id, hashtags, imgSrc }) => {
  const selectedStatus = useAppSelector(
    (state) => state.tasteRoom.selectedStatus,
  );

  const dispatch = useAppDispatch();

  const handleClick = (id) => {
    dispatch(selected(id));
  };

  return (
    <div
      className="taste_card"
      style={{
        width: selectedStatus[id] ? '360px' : '242px',
        backgroundImage: `url(${imgSrc})`,
      }}
      onClick={() => handleClick(id)}
    >
      <div>
        <div className="hashtags">
          {hashtags.map((hashtag, idx) => {
            return (
              <div key={idx} className="hashtag">
                # {hashtag}
              </div>
            );
          })}
        </div>
        {selectedStatus[id] && (
          <img className="taste_check_img" src="/check_full.png" />
        )}
      </div>
    </div>
  );
};

export default TasteCard;
