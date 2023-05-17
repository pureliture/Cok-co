import DetailRoom1 from 'Component/DetailRoom1';
import ReviewPhotos from 'Component/ReviewPhotos';
import Calendar from 'pages/Calendar';
import Component1 from 'pages/Component1';
import Component6 from 'pages/Component6';
import PushNoti from 'pages/PushNoti';
import Reserve from 'pages/Reserve';
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
const Favorite = React.lazy(() => import('pages/Favorite'));
const Home = React.lazy(() => import('pages/Home'));
const Login = React.lazy(() => import('pages/Login'));
const MyPage = React.lazy(() => import('pages/MyPage'));
const Room = React.lazy(() => import('pages/Room'));
const SignUp = React.lazy(() => import('pages/SignUp'));
const NotFound = React.lazy(() => import('pages/NotFound'));

// TODO: ScrollToTop 필요
const App = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          // 로딩시 보여지는 예비 화면
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100vh',
            }}
          ></div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Component1" element={<Component1 />}></Route>
          <Route path="/Component6" element={<Component6 />}></Route>
          <Route path="/Room" element={<Room />}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/room/1" exact element={<DetailRoom1 />}></Route>
          <Route path="/room/:roomId" exact element={<DetailRoom1 />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/reserve" element={<Reserve />}></Route>
          <Route path="/pushNoti" element={<PushNoti />}></Route>
          <Route path="/ReviewPhotos" element={<ReviewPhotos />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
