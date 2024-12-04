import React, { useRef, useState, useEffect } from 'react';
import left_icon from '../ms_image/left_icon.png';
import { useNavigate } from 'react-router-dom';

const SetupPage = () => {

    const [warningSound, setWarningSound] = useState(50); // 경고음 조절
    const [notifications, setNotifications] = useState(true); // 알람
    const [theme, setTheme] = useState('light'); // 테마 설정

    const navigate = useNavigate();

    const handleSoundChange = (e) => {
        setWarningSound(e.target.value);
    }

    const handleNotification = () => {
        setNotifications(!notifications);
    }

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    }

    const handleLeftButtonClick = () => {
        navigate(-1);
    }

    const handleSetupButtonClick = () => {
        const settings = {
            warningSound,
            notifications,
            theme,
        };
        localStorage.setItem('userSettings', JSON.stringify(settings));

        // 이전 페이지로 이동
        navigate(-1);

    };

    useEffect(() => {
        const savedSettings = JSON.parse(localStorage.getItem('userSettings'));
        if (savedSettings) {
            setWarningSound(savedSettings.warningSound);
            setNotifications(savedSettings.notifications);
            setTheme(savedSettings.theme);
        }
    }, []);

    const handleCleanButtonClick = () => {
        setWarningSound(50);
        setNotifications(true);
        setTheme('light');

    }


    return(
        <div style={styles.container}>
            <div style={styles.titleContainer}>
                <button style={styles.leftButton} onClick={handleLeftButtonClick}></button>
                <div style={styles.title}>설정</div>
            </div>
            

            <div style={styles.setupContainer}>
            <div style={styles.item}>
                <label style={styles.label}>경고음 소리</label>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={warningSound}
                    onChange={handleSoundChange}
                    style={styles.slider}
                />
                <span style={styles.sliderText}>{warningSound}%</span>
            </div>

            <div style={styles.item}>
                    <label style={styles.label}>알림</label>
                    <div style={styles.switchContainer}>
                        <div
                            style={{
                                ...styles.switch,
                                justifyContent: notifications ? 'flex-start' : 'flex-end', // justifyContent로 위치 이동
                                backgroundColor: notifications ? '#4CAF50' : '#FF5722', // 색상 변경
                            }}
                            onClick={handleNotification}
                        >
                            <div style={styles.switchHandle}></div>
                        </div>
                        <span style={styles.switchLabel}>
                            {notifications ? 'ON' : 'OFF'}
                        </span>
                    </div>
                </div>

            <div style={styles.item}>
                <label style={styles.label}>테마</label>
                <select value={theme} onChange={handleThemeChange} style={styles.select}>
                    <option value="light">밝은 테마</option>
                    <option value="dark">어두운 테마</option>
                </select>
            </div>

            <div style={styles.applicationContainer}>
                <label style={styles.applicationTitleText}>애플리케이션 정보 (DMA Project)</label>
                <p style={styles.applicationText}>운전자 모니터링 애플리케이션 v1.0</p>
            </div>
            </div>

            <div style={styles.buttonContainer}>
            <div style={styles.setupButton} onClick={handleSetupButtonClick}>적용</div>
            <div style={styles.cleanButton} onClick={handleCleanButtonClick}>초기화</div>

            </div>
            
            

        </div>

    );
};

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
    setupContainer: {
        display: 'flex',
        width: '100%',
        height: '70%',
        flexDirection: 'column',
        border: 'none',
        borderRadius: '20px',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
    },
    title: {
        marginTop: '10px',
        textAlign: 'center',
        fontSize: '24px',
        marginBottom: '20px',
        marginLeft: '100px',
    },
    item: {
        marginTop: '20px',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
    },
    label: {
        fontSize: '15px',
        width: '45%',
        marginBottom: '8px',
    },
    slider: {
        width: '100%',
    },
    sliderText: {
        marginLeft: '10px', // 슬라이더와 % 텍스트 간격 추가
        fontSize: '14px',
    },
    button: {
        width: '45%',
        padding: '10px',
        backgroundColor: '#007BFF',
        color: '#FFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    switchContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    switch: {
        width: '60px',
        height: '30px',
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '0 5px',
        transition: 'all 0.3s ease',
    },
    switchHandle: {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: '#FFF',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease',
    },
    switchLabel: {
        fontSize: '14px',
    },
    select: {
        padding: '10px',
        borderRadius: '5px',
    },
    resetButton: {
        padding: '10px',
        backgroundColor: '#FF0000',
        color: '#FFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    applicationContainer: {
        position: 'absolute', // 고정 위치
        bottom: '130px', // 화면 아래에서 약간 띄움
        left: '50%', // 가로 가운데 정렬
        width: '100%',
        transform: 'translateX(-50%)', // 가로 중앙 정렬 보정
        textAlign: 'center', // 텍스트 가운데 정렬
    },
    applicationTitleText: {
        fontSize: '13px',
        fontWeight: 'bold',
    },
    applicationText: {
        fontSize: '13px',
    },
    buttonContainer: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%',
        height: '40px',
        flexDirection: 'row', // 가로 방향으로 나열
        gap: '10px', // 버튼 간 간격
        marginTop: '40px',
    },
    
    setupButton: {
        padding: '10px 15px',
        backgroundColor: '#E6E6E6',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        textAlign: 'center',
        cursor: 'pointer',
        width: '45%',
        fontSize: '18px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#ffffff',
    },
    cleanButton: {
        padding: '10px 15px',
        backgroundColor: '#E6E6E6',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        textAlign: 'center',
        cursor: 'pointer',
        width: '45%',
        fontSize: '18px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#ffffff',
    },
};

export default SetupPage;