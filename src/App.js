import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TasteCard from 'components/TasteCard';
import CurationCard from 'components/CurationCard';

const Splash = React.lazy(() => import('./pages/Splash'));

const App = () => {
  const hashtags = ['바다로', '에메랄드 해변뷰'];

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Splash />}></Route>
        <Route
          path="/tasteCard"
          element={<TasteCard imgSrc={'/room1.png'} hashtags={hashtags} />}
        ></Route>
        <Route
          path="/curationCard"
          element={
            <>
              <CurationCard
                size="l"
                title="몰래 알아본 일본 현지인 추천 방안의 자쿠지 15곳"
                imgSrc={'/room1.png'}
                bgColor="#EFE6D5"
              />
              <CurationCard
                size="m"
                title="터키 열기구는 Tholla 호텔에서"
                imgSrc={'/turkey.png'}
                bgColor="#CFBA92"
              />
              <CurationCard
                size="s"
                title="정글 하우스"
                imgSrc={'/junglehouse.png'}
                bgColor="#CFBA92"
              />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
