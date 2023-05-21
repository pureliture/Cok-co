import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TasteCard from 'components/TasteCard';
import CurationCardEx from 'test/CurationCardEx';
import Home from 'pages/Home';
import DetailStay from 'pages/DetailStay';
import Step1 from 'pages/Step1';
import Step2 from 'pages/Step2';
import Step3 from 'pages/Step3';
import NotFound from 'pages/NotFound';
import Login from 'pages/Login';
import './App.css';
import Like from 'pages/Like';
import MyPage from 'pages/MyPage';

const Splash = React.lazy(() => import('./pages/Splash'));

const App = () => {
  const username = 'yuniverse';
  const hashtags = ['바다로', '에메랄드 해변뷰'];

  return (
    <Routes>
      <Route exact path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/step1" element={<Step1 />} />
      <Route path="/step2" element={<Step2 />} />
      <Route path="/step3" element={<Step3 />} />
      <Route
        path="/tasteCard"
        element={<TasteCard imgSrc={'/room1.png'} hashtags={hashtags} />}
      />
      <Route path="/home" element={<Home locations={['동북아', '동남아']} />} />
      <Route path="/like" element={<Like />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/stay/:id/detail" element={<DetailStay />} />
      <Route path="/curationCardEx" element={<CurationCardEx />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
