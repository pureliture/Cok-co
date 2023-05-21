import { React } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/step1');
  };

  return (
    <div className="page">
      <img
        src="/login.png"
        style={{ width: '360px', height: '800px' }}
        onClick={handleClick}
      />
    </div>
  );
};

export default Login;
