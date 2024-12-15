import React, { useEffect, useRef, useState } from 'react';
import cameraButtonImage from '../ms_image/cameraButtonImage.png';
import setup_icon from '../ms_image/setup_icon.png';
import { useNavigate } from 'react-router-dom'; 
import left_icon from '../ms_image/left_icon.png';

const StartPage = () => {
  const videoRef = useRef(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const imageCaptureRef = useRef(null);
  const [stream, setStream] = useState(null); 
  const socketRef = useRef(null);
  const [warningMessage, setWarningMessage] = useState(null); // 경고 메시지 상태

  // 웹소켓 서버 주소
  const ws_url = "ws://127.0.0.1:8000/ws/video/";

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
        tracks.forEach((track) => {
          if (track.readyState === 'live') {
            track.stop(); // 활성화된 트랙만 종료
          }
        });
        setStream(null); // 스트림을 null로 설정
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null; // 비디오 요소에서 스트림 제거
      }
      setIsMonitoring(false);
  
      // WebSocket 연결 종료
      if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
        socketRef.current.close();
      }
  
      // ImageCapture 해제
      if (imageCaptureRef.current) {
        imageCaptureRef.current = null;
      }
  
      // 기존 interval 클리어
      clearInterval(window.monitoringInterval);
      return;
    } else {
      try {
        const newStream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = newStream;
        setStream(newStream); // 새로운 스트림 저장
        setIsMonitoring(true);
  
        // WebSocket 연결
        if (!socketRef.current || socketRef.current.readyState === WebSocket.CLOSED) {
          socketRef.current = new WebSocket(ws_url);
        }
  
        socketRef.current.onopen = () => {
          console.log("WebSocket 연결 완료");
        };
  
        socketRef.current.onerror = (error) => {
          console.error("WebSocket 연결 에러:", error);
        };
  
        socketRef.current.onclose = () => {
          console.log("WebSocket 연결 종료");
        };
  
        socketRef.current.onmessage = (event) => {
          const data = JSON.parse(event.data);
          console.log("WebSocket 메시지 수신:", data);
  
          if (data.result === "No seatbelt detected") {
            setWarningMessage("경고! 안전벨트 미착용!");
          } else if (data.result === "Drowsy driving detected") {
            setWarningMessage("경고! 졸음운전 감지!");
          } else {
            setWarningMessage(null);
          }
        };
  
        // 실시간 영상 전송
        const videoTrack = newStream.getVideoTracks()[0];
        if (videoTrack) {
          const imageCapture = new ImageCapture(videoTrack);
          imageCaptureRef.current = imageCapture;
        } else {
          console.error("No video track");
          setIsMonitoring(false);
          return;
        }
  
        // 모니터링 종료 후 재시작할때.. 이전 interval 클리어 후 새로운 interval 생성
        clearInterval(window.monitoringInterval);
        window.monitoringInterval = setInterval(async () => {
          if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            try {
              const photo = await imageCaptureRef.current.grabFrame();
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              canvas.width = photo.width;
              canvas.height = photo.height;
              ctx.drawImage(photo, 0, 0);
  
              canvas.toBlob((blob) => {
                if (socketRef.current.readyState === WebSocket.OPEN) {
                  socketRef.current.send(blob); // 바이너리 데이터 전송
                }
              }, 'image/jpeg');
            } catch (error) {
              console.error("Frame capture error:", error);
            }
          }
        }, 100); // 100ms마다 한 프레임 전송
      } catch (error) {
        console.error("Camera Error", error);
      }
    }
  };

  return (
    <div style={styles.container}>

      <div style={styles.topContainer}>
        <div style={styles.leftButton} onClick={handleLeftButtonClick}></div>
        <img style={styles.setupButton} onClick={handleSetupButtonClick} src={setup_icon} alt="Setup"></img>
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

      {/* 경고 메시지 표시 */}
      {warningMessage && (
        <div style={styles.warningContainer}>
          <p style={styles.warningText}>{warningMessage}</p>
        </div>
      )}

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
    marginRight: '5px', 
    marginTop: '3px',
  },
  video: {
    width: '80%',
    height: 'auto',
    border: '2px solid #000080',
    borderRadius: '10px',
    marginTop: '10px',
  },
  warningContainer: {
    backgroundColor: '#ffcccb',
    padding: '5px',
    borderRadius: '5px',
    marginTop: '10px',
  },
  warningText: {
    color: '#ff0000',
    fontWeight: 'bold',
  }
};

export default StartPage;
