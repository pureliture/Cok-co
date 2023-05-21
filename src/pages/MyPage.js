import NavBar from 'components/NavBar';
import { React } from 'react';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();

  //   const handleClick = () => {
  //     navigate('/step1');
  //   };

  return (
    <div className="page">
      <NavBar menuIdx={2} />
    </div>
  );
};

export default MyPage;
