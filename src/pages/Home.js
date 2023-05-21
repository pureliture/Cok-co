import { React } from 'react';
import Recommend from 'components/Recommend';
import TopBar from 'components/TopBar';
import Discovery from 'components/Discovery';
import { useAppSelector } from 'app/hooks';

const Home = ({ username, locations }) => {
  const tabIdx = useAppSelector((state) => state.topBar.tabValue);

  return (
    <div className="page">
      <div style={{ margin: '50px 5px 20px 5px' }}>
        <TopBar tabIdx={tabIdx} />
      </div>
      {tabIdx === 0 ? (
        <Recommend username={username} locations={locations} />
      ) : (
        <Discovery />
      )}
    </div>
  );
};

export default Home;
