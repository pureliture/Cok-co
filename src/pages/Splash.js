import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }, []);

    return (
        <div>
            <img src='/splash.png'></img>
        </div>
    );
}

export default Splash;