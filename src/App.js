import { Route, Routes } from 'react-router-dom';
import './App.css';

import MainPage from './pages/MainPage';
import Login from './pages/Login';
import Register from './pages/Register';
import StartPage from './pages/StartPage';
import SplashScreen from './pages/SplashScreen';
import GuidePage from './pages/GuidePage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<SplashScreen />}/>
        <Route path='/main' element={<MainPage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/StartPage' element={<StartPage />} />
        <Route path='/guide' element={<GuidePage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>

    </div>
  );
}

export default App;
