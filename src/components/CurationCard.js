import { React } from 'react';
import './CurationCard.css';
import Badge from './Badge';
import { useAppDispatch } from 'app/hooks';
import { clicked } from 'features/like/like';
import { useAppSelector } from 'app/hooks';
import { useNavigate } from 'react-router-dom';
import RightTopLinearGradient from './RightTopLinearGradient';

const CurationCard = ({ size, title, imgSrc, bgColor, id }) => {
  const navigate = useNavigate();

  const status = useAppSelector((state) => state.like.status);
  const dispatch = useAppDispatch();

  const sLikeHandleClick = (id) => {
    dispatch(clicked(id));
  };

  const sHandleClick = (id) => {
    navigate(`/stay/${id}/detail`);
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
        onClick={() => sHandleClick(id)}
      >
        <div
          className="s_main_img"
          style={{ backgroundImage: `url(${imgSrc})` }}
        >
          <RightTopLinearGradient />
          <img
            className="heart"
            src={status[id] ? '/heart_full.png' : '/heart.png'}
            onClick={() => sLikeHandleClick(id)}
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
