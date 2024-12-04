import React, { useRef, useState, useEffect } from 'react';
import left_icon from '../ms_image/left_icon.png';
import { useNavigate } from 'react-router-dom';
import reactLogo from '../ms_image/reactLogo.png'
import colabLogo from '../ms_image/colabLogo.png'
import djangoLogo from '../ms_image/djangoLogo.png'
import mongoDBLogo from '../ms_image/mongoDBLogo.png'

const MyPage = () => {

  const navigate = useNavigate();

  const handleLeftButtonClick = () => {
    navigate(-1);
  }

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
                <button style={styles.leftButton} onClick={handleLeftButtonClick}></button>
                <div style={styles.teamTitleText}>Driver Management Application</div>
            </div>
            
            
            
            <div style={styles.teamBox}>

              <div style={styles.reactLogo}></div>
              <div style={styles.teamContainer}>
              <div style={styles.teamTitleText}>React 애플리케이션 개발</div>
              <div style={styles.teamText}>⚬ 김동현, 이민수</div>
              </div>
              

            </div>

            <div style={styles.teamBox}>
              <div style={styles.colabLogo}></div>
              <div style={styles.teamContainer}>
              <div style={styles.teamTitleText}>딥러닝 모델 학습 및 모델링</div>
              <div style={styles.teamText}>⚬ 지소빈, 조재윤</div>
              </div>
            </div>

            <div style={styles.teamBox}>
              <div style={styles.djangoLogo}></div>
              <div style={styles.teamContainer}>
              <div style={styles.teamTitleText}>서버 구축 및 데이터 관리</div>
              <div style={styles.teamText}>⚬ 김동현, 이민수, 지소빈</div>
              </div>
            </div>

            <div style={styles.teamBox}>
              <div style={styles.mongoLogo}></div>
              <div style={styles.teamContainer}>
              <div style={styles.teamTitleText}>회원 정보 관리</div>
              <div style={styles.teamText}>⚬ 김동현</div>
              </div>
            </div>
    </div>
  )
}
const styles = {
  container: {
      display: 'flex',
      width: '100%',
      height: '100vh', 
      flexDirection: 'column', 
      alignItems: 'center',
      backgroundColor: '#EAEAEA',
      justifyContent: 'center',
      
  },
  reactLogo: {
    backgroundImage: `url(${reactLogo})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat', // 이미지 여러개 안나오도록
    backgroundPosition: 'center',
    width: '60px',
    height: '60px',
    margin: '10px',
  },
  colabLogo: {
    backgroundImage: `url(${colabLogo})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center',
    width: '70px',
    height: '70px',
    margin: '5px',
  },
  djangoLogo: {
    backgroundImage: `url(${djangoLogo})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center',
    width: '80px',
    height: '80px',
    marginLeft: '10px',
  },
  mongoLogo: {
    backgroundImage: `url(${mongoDBLogo})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center',
    width: '80px',
    height: '80px',
    marginLeft: '10px',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'fixed', // 상단 고정
    top: '0',
    backgroundColor: '#eaeaea', 
    zIndex: 1000, // 다른 요소 위에 
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    padding: '10px 0',
  },
  leftButton: {
      width: '35px',
      height: '35px',
      border: 'none',
      backgroundImage: `url(${left_icon})`,
      backgroundPosition: 'center', 
      backgroundSize: 'cover',
      backgroundColor: '#EAEAEA',
      marginLeft: '10px',
      marginTop: '5px'
  },
  title: {
    marginTop: '10px',
    textAlign: 'center',
    fontSize: '20px',
    alignItems: 'center',
    marginBottom: '10px',
    marginLeft: '50px',
},
line: {
  width: '100%',
  height: '1px',
  background: '#5D5D5D',
  marginTop: '5px',
  marginBottom: '10px'
  
},
teamContainer: {
  display: 'flex',
  textAlign: 'center',    
  flexDirection: 'column', 
      
},
teamBox: {
  marginBottom: '10px',
  display: 'flex',
  width: '90%',
  height: '80px',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  borderRadius: '10px',
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
},
teamTitleText: {
  marginTop: '10px',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: '17px',
  fontWeight: 'bold',
  marginBottom: '5px',
  marginLeft: '20px',
},
teamText: {
  fontSize: '16px',
  marginBottom: '5px',
  marginLeft: '10px',
}
}

export default MyPage
