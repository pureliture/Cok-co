import { React } from 'react';
import NavBar from 'components/NavBar';
import Recommend from 'components/Recommend';
import TopBar from 'components/TopBar';
import Discovery from 'components/Discovery';
// import { useNavigate } from 'react-router-dom';

const Home = ({ username, locations }) => {
  const selected = 1;

  return (
    <div className="page">
      <TopBar selected={selected} />
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
