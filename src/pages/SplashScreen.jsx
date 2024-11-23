import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from"../image/icons8-매질-96.png"
import "../css/MainPage.css"

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    // 5초 후 메인 페이지로 ㅣ동
    const timer = setTimeout(() => {
      setVisible(false);
      navigate("/guide"); // 메인 페이지 경로로 이동
    }, 5000);

    return () => clearTimeout(timer);
  }, navigate)

  return (
    visible && (
      <div className='splash-container'>
        <img src={logo} alt='logo' className='splash-logo'/>
        <h1 className='splash-logo' style={{textAlign:"center"}}>DMA</h1>
      </div>
    )
  )
}

export default SplashScreen
