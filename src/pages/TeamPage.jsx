import React, { useRef, useState, useEffect } from 'react';
import left_icon from '../ms_image/left_icon.png';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {

  const navigate = useNavigate();

  const handleLeftButtonClick = () => {
    navigate(-1);
  }

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
                <button style={styles.leftButton} onClick={handleLeftButtonClick}></button>
                <div style={styles.title}>프로젝트 소개</div>
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
  },
  titleContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'space-between',
      width: '100%',
      
  },
  leftButton: {
      width: '40px',
      height: '40px',
      border: 'none',
      backgroundImage: `url(${left_icon})`,
      backgroundPosition: 'center', 
      backgroundSize: 'cover',
      backgroundColor: '#EAEAEA',
      marginLeft: '20px',
  },
  title: {
    marginTop: '10px',
    textAlign: 'center',
    fontSize: '24px',
    alignItems: 'center',
    marginBottom: '10px',
    marginLeft: '50px',
},
}

export default MyPage
