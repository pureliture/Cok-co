import { React } from 'react';
import './CurationCard.css';
import Badge from './Badge';
import { useAppDispatch } from 'app/hooks';
import { clicked } from 'features/like/like';
import { useAppSelector } from 'app/hooks';
import { useNavigate } from 'react-router-dom';
import RightTopLinearGradient from './RightTopLinearGradient';
import { stay } from 'constant';

const CurationCard = ({ size, title, imgSrc, bgColor, id, badgeColor }) => {
  const navigate = useNavigate();

  const status = useAppSelector((state) => state.like.status);
  const dispatch = useAppDispatch();

  const sLikeHandleClick = (e) => {
    dispatch(clicked(id));
    e.stopPropagation();
  };

  const sHandleClick = () => {
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
      >
        <div
          className="s_main_img"
          style={{ backgroundImage: `url(${stay[id].imgSrc})` }}
          onClick={sHandleClick}
        >
          <RightTopLinearGradient onClick={sHandleClick} />
          <img
            className="heart"
            src={status[id] ? '/heart_full.png' : '/heart.png'}
            onClick={sLikeHandleClick}
          ></img>
        </div>
        <div className="s_title">
          <Badge backgroundColor={badgeColor} />
          <div className="title">{stay[id].title}</div>
        </div>
      </div>
    );
  }
};

export default CurationCard;
