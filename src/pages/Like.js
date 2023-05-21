import NavBar from 'components/NavBar';
import { React } from 'react';
import { useNavigate } from 'react-router-dom';

const Like = () => {
  const navigate = useNavigate();

  //   const handleClick = () => {
  //     navigate('/step1');
  //   };

  return (
    <div className="page">
      <NavBar menuIdx={1} />
    </div>
  );
};

export default Like;
