import { React } from 'react';
import './CurationCard.css';
import Badge from './Badge';
import { useAppDispatch } from 'app/hooks';
import { clicked } from 'features/like/like';
import { useAppSelector } from 'app/hooks';
import RightTopLinearGradient from './RightTopLinearGradient';

const CurationCard = ({ size, title, imgSrc, bgColor, id }) => {
  const status = useAppSelector((state) => state.like.status);
  const dispatch = useAppDispatch();

  const sHandleClick = (id) => {
    dispatch(clicked(id));
  };

  if (size === 'l') {
    return (
      <div
        className="l_card"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <img className="l_main_img" src={imgSrc}></img>
        <div className="l_title">
          <Badge />
          <div className="title">{title}</div>
        </div>
      </div>
    );
  } else if (size === 'm') {
    return (
      <div
        className="m_card"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <img className="m_main_img" src={imgSrc}></img>
        <div className="m_title">
          <Badge />
          <div className="title">{title}</div>
        </div>
      </div>
    );
  } else if (size === 's') {
    return (
      <div
        className="s_card"
        style={{
          backgroundColor: 'transparent',
        }}
      >
        <div
          className="s_main_img"
          style={{ backgroundImage: `url(${imgSrc})` }}
        >
          <RightTopLinearGradient />
          <img
            className="heart"
            src={status[id] ? '/heart_full.png' : '/heart.png'}
            onClick={() => sHandleClick(id)}
          ></img>
        </div>
        <div className="s_title">
          <Badge />
          <div className="title">{title}</div>
        </div>
      </div>
    );
  }
};

export default CurationCard;
