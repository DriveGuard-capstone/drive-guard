import React, { useRef, useState } from 'react';
import cameraButtonImage from '../ms_image/cameraButtonImage.png';
import setup_icon from '../ms_image/setup_icon.png';
import { useNavigate } from 'react-router-dom'; 
import left_icon from '../ms_image/left_icon.png'

const StartPage = () => {
  const videoRef = useRef(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [stream, setStream] = useState(null); // 스트림을 별도로 상태로 관리

  const navigate = useNavigate();
  
  const handleSetupButtonClick = () => {
    navigate('/setup')
  }
  const handleLeftButtonClick = () => {
    navigate(-1)
  }
  

  const toggleMonitoring = async () => {
    if (isMonitoring) {
      // 카메라 종료
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        setStream(null); // 스트림을 null로 설정
      }
      videoRef.current.srcObject = null; // 카메라 실행중 버튼을 눌러 종료하면 비디오 요소에서 스트림 제거
      setIsMonitoring(false);
    } else {
      // 카메라 시작
      try {
        const newStream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = newStream;
        setStream(newStream); // 새로운 스트림을 상태에 저장
        setIsMonitoring(true);
      } catch (error) {
        console.error('Camera Error', error);
      }
    }
  };

  return (
    <div style={styles.container}>

      <div style={styles.topContainer}>
        <div style={styles.leftButton} onClick={handleLeftButtonClick}></div>
        <image style={styles.setupButton} onClick={handleSetupButtonClick}></image>
      </div>
      
      {isMonitoring && (
        <div style={styles.recordingContainer}>
          <div style={styles.redCircle}></div>
          <p style={styles.monitoringText}>RECORDING</p>
        </div>
      )}
      <h1 style={styles.mainText}>MONITORING</h1>
      <p>버튼을 눌러 모니터링을 시작하세요</p>
      <button onClick={toggleMonitoring} style={styles.button}>
        <img 
          src={cameraButtonImage} 
          alt="Camera Toggle" 
        />
      </button>
      <video ref={videoRef} autoPlay style={styles.video} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    position: 'relative', 
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    width: '100%',
    height: '60px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  leftButton: {
    width: '40px',
    height: '40px',
    border: 'none',
    backgroundImage: `url(${left_icon})`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover',
    backgroundColor: '#f5f5f5',
    marginLeft: '20px',
    marginTop: '10px',
  },
  setupButton: {
    width: '30px', 
    height: '30px', 
    backgroundSize: 'cover', 
    border: 'none', 
    marginTop: '10px',
    backgroundImage: `url(${setup_icon})`, 
    cursor: 'pointer', 
    backgroundPosition: 'center', 
    backgroundColor: '#f5f5f5', 
    marginLeft: '260px'
  },
  recordingContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute', // 절대 위치로 설정
    top: '0', // 원하는 위치 조정
    left: '50%', // 중앙 정렬
    transform: 'translateX(-50%)', // 수평 중앙 정렬
    zIndex: 1, // 다른 요소 위에 표시되도록 설정
  },
  mainText: {
    fontSize: '30px',
    color: '#000080',
    marginTop: '100px',
  },
  monitoringText: {
    fontSize: '15px',
    color: 'red',
    marginLeft: '5px', 
    position: 'relative', // 텍스트 위치 조정
    top: '8px', // position과 top 두가지 속성 변경 2024.11.08
  },
  button: {
    width: 'auto', 
    height: 'auto', 
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    padding: 0, // padding 없애기
    background: 'transparent', // 배경 없애기
    marginTop: '20px', // 버튼과 텍스트 사이 간격 조정
  },
  redCircle: {
    width: '10px', 
    height: '10px', 
    borderRadius: '50%', 
    backgroundColor: 'red', 
    marginRight: '5px', // 원과 텍스트 사이의 간격
  },
  video: {
    marginTop: '20px',
    width: '80%',
    maxWidth: '500px',
    borderRadius: '10px',
    height: 'auto'
  },
  
};

export default StartPage;