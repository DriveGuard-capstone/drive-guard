import { Route, Routes } from 'react-router-dom';
import './App.css';

import MainPage from './pages/MainPage';
import Login from './pages/Login';
import Register from './pages/Register';
import StartPage from './pages/StartPage';
import SplashScreen from './pages/SplashScreen';
import GuidePage from './pages/GuidePage';
import HomePage from './pages/HomePage';
import DriveHabit from './pages/DriveHabit';
import MyPage from './pages/MyPage';
import SetupPage from './pages/SetupPage';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<SplashScreen />}/>
        <Route path='/guide' element={<GuidePage />} />
        <Route path='/main' element={<MainPage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/start-page' element={<StartPage />} />
        <Route path='/recharts' element={<DriveHabit />} />
        <Route path='/mypage' element={<MyPage />}/>
        <Route path='/setup' element={<SetupPage/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
