import { React } from 'react';
import NavBar from 'components/NavBar';
import Recommend from 'components/Recommend';
import TopBar from 'components/TopBar';
import Discovery from 'components/Discovery';
// import { useNavigate } from 'react-router-dom';

const Home = ({ username, locations }) => {
  const selected = 0;

  return (
    <div className="page">
      <div style={{ margin: '50px 5px 20px 5px' }}>
        <TopBar selected={selected} />
      </div>
      {selected === 0 ? (
        <Recommend username={username} locations={locations} />
      ) : (
        <Discovery />
      )}

      <NavBar />
    </div>
  );
};

export default Home;
