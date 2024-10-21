import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import Register from './pages/Register';
import StartPage from './pages/StartPage';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/startpage' element={<StartPage />} />
      </Routes>

    </div>
  );
}

export default App;
