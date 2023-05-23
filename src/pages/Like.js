import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'components/Header';
import NavBar from 'components/NavBar';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { tabSelected } from 'features/like/like';
import { countryFilter } from 'constant';
import CurationCard from 'components/CurationCard';
import './styles/Like.css';

const Tab = () => {
  const tabIdx = useAppSelector((state) => state.like.tabIdx);

  const dispatch = useAppDispatch();

  const handleClick = (id) => {
    dispatch(tabSelected(id));
  };

  return (
    <div className="like_tab">
      <div
        className={tabIdx === 0 ? 'like_tab_selected' : 'like_tab_unselected'}
        onClick={() => handleClick(0)}
      >
        숙소
      </div>
      <div
        className={tabIdx === 1 ? 'like_tab_selected' : 'like_tab_unselected'}
        onClick={() => handleClick(1)}
      >
        룸
      </div>
    </div>
  );
};

const Ad = () => {
  const nickname = useAppSelector((state) => state.signUp.nickname);

  return (
    <div className="ad">
      <div>
        <div className="ad_text1">{nickname}님이 좋아할 만한</div>
        <div className="ad_text2"> {'고퀄리티 글로벌 숙소 >'} </div>
      </div>
      <img className="ad_img" src="/ad.png"></img>
    </div>
  );
};

const Filter = () => {
  return (
    <div className="filter_wrapper">
      {countryFilter.map((ele, i) => {
        return (
          <div
            className="filter"
            key={i}
            // onClick={() => genderHandleClick(0)}
          >
            {ele}
          </div>
        );
      })}
    </div>
  );
};
const Like = () => {
  const { status, tabIdx } = useAppSelector((state) => state.like);

  return (
    <div className="page">
      <Header title="좋아요" />
      <Tab />
      <Ad />
      <Filter />
      {tabIdx == 0 ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="like_grid">
            {status
              .map((ele, i) => {
                if (ele === true) return i;
                else return -1;
              })
              .filter((ele) => ele != -1)
              .map((ele, i) => {
                return (
                  <CurationCard
                    key={i}
                    size="s"
                    id={ele}
                    badgeColor={'#E9E9E9'}
                  />
                );
              })}
          </div>
        </div>
      ) : (
        <></>
      )}
      <NavBar menuIdx={1} />
    </div>
  );
};

export default Like;
