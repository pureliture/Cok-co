import Calendar from 'pages/Calendar';
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Spin } from 'antd';

// pages
const Favorite = React.lazy(() => import('pages/Favorite'));
const Home = React.lazy(() => import('pages/Home'));
const Login = React.lazy(() => import('pages/Login'));
const MyPage = React.lazy(() => import('pages/MyPage'));
const Room = React.lazy(() => import('pages/Room'));
const SignUp = React.lazy(() => import('pages/SignUp'));
const NotFound = React.lazy(() => import('pages/NotFound'));

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
          >
            {/* <Spin tip="Loading... Cok-co"></Spin> */}
          </div>
        }
      >
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favorite" element={<Favorite />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/mypage" element={<MyPage />}></Route>
            <Route
              path="/room/:roomNo"
              element={<Room />}
            ></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/calendar" element={<Calendar />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

