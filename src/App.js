import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TasteCard from 'components/TasteCard';
import CurationCardEx from 'test/CurationCardEx';
import Home from 'pages/Home';
import DetailStay from 'pages/DetailStay';
import Step1 from 'pages/Step1';
import Step2 from 'pages/Step2';

const Splash = React.lazy(() => import('./pages/Splash'));

const App = () => {
  const username = 'yuniverse';
  const hashtags = ['바다로', '에메랄드 해변뷰'];

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route
          path="/tasteCard"
          element={<TasteCard imgSrc={'/room1.png'} hashtags={hashtags} />}
        />
        <Route
          path="/home"
          element={
            <Home username={username} locations={['동북아', '동남아']} />
          }
        />
        <Route path="/stay/:id/detail" element={<DetailStay />} />
        <Route path="/curationCardEx" element={<CurationCardEx />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
