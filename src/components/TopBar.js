import { React } from 'react';
import './TopBar.css';
import { useAppDispatch } from 'app/hooks';
import { change } from 'features/topBar/topBar';

const Tab = ({ tabIdx }) => {
  const dispatch = useAppDispatch();

  const recommendHandleClick = () => {
    dispatch(change(0));
  };

  const discoveryHandleClick = () => {
    dispatch(change(1));
  };

  return (
    <div className="tab">
      <>
        <div
          className={tabIdx === 0 ? 'top_selected' : 'top_unselected'}
          onClick={recommendHandleClick}
        >
          추천
        </div>
        <div
          className={tabIdx === 0 ? 'top_unselected' : 'top_selected'}
          onClick={discoveryHandleClick}
        >
          발견
        </div>
      </>
    </div>
  );
};

const TopBar = ({ tabIdx }) => {
  return (
    <div className="top_bar">
      <img className="top_bar_btn" src="/filter.png"></img>
      <Tab tabIdx={tabIdx} />
      <img className="top_bar_btn" src="/search.png"></img>
    </div>
  );
};

export default TopBar;
