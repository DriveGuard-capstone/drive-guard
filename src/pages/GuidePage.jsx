import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import rightButton from '../ms_image/rightButton.png';
import leftButton from '../ms_image/leftButton.png';
import roadBackground from '../ms_image/roadBackground.jpg'

const GuidePage = () => {
    // 페이지 전환
    const [currentPage, setCurrentPage] = useState(0);

    const [hideToday, setHideToday] = useState(false);
    const navigate = useNavigate();

    const pages = [
        {
            title: "애플리케이션 소개",
            content: [
                "◦ 운전 중 안전벨트 착용 여부와 졸음운전 가능성을 실시간으로 모니터링하여 안전한 운전을 지원하는 모니터링 애플리케이션입니다.",
                "◦ 운전자와 동승자의 안전을 최우선으로 하여, 사전에 위험을 방지하고 사고를 예방하는 데 목표를 두고 있습니다."
            ]
        },
        {
            title: "주요 기능",
            content: [
                "◦ 안전벨트 감지: 운전자가 안전벨트를 착용하지 않았을 경우 알림을 통해 착용하도록 안내합니다.",
                "◦ 졸음운전 감지: 운전자의 눈 깜빡임을 실시간으로 분석하여 졸음운전이 의심될 경우 경고합니다."
            ]
        },
        {
            title: "주의사항",
            content: [
                "◦ 애플리케이션은 사용자의 얼굴 정보를 저장하지 않으며, 필요한 데이터만을 사용합니다.",
                "◦ 앱이 원활히 작동하기 위해 운전 중 스마트폰이 차량 내에서 안정적으로 고정되어야 합니다.",
                "◦ 이 앱은 운전자의 안전을 보조하는 도구이며, 운전 중 모든 책임은 운전자에게 있습니다."
            ]
        }
    ];

    const nextPage = () => setCurrentPage((prev) => (prev + 1) % pages.length);
    const prevPage = () => setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);

    // 오늘하루 그만보기 기능
    const handleHideToday = () => {
        const today = new Date().toDateString();
        localStorage.setItem('guidePageLastSeen', today) //localStorage로 브라우저에 데이터 저장 -> 새로고침이나 닫아도 데이터 유지시켜줌 . today(오늘 날짜)를 guidePageLastSeen에 저장
        setHideToday(true) //hidetoday 값 true로 바꾸고 메인으로 화면전환
        navigate('/main')
    }

    // 일반 닫기 버튼 기능
    const handleClose = () => {
        navigate('/main'); // 메인 페이지로 이동
    };

    useEffect(() => {
        const lastSeenDate = localStorage.getItem('guidePageLastSeen');
        const today = new Date().toDateString();
        if (lastSeenDate === today) {
            setHideToday(true);
        }
    }, []);

    if (hideToday) {
        navigate('/main');
        return null; // hideToday가 참인 경우 가이드 페이지를 나타내지 않는다...
    }

    return (
        <div style={styles.container}>
            {/* <h1 style={styles.mainText}>안전한 여정을 위해 언제나 함께합니다.</h1> */}

            <div style={styles.box}>
                <h2 style={styles.titleText}>{pages[currentPage].title}</h2>
                {pages[currentPage].content.map((text, index) => (
                    <p key={index} style={styles.text}>{text}</p>
                ))}

                <div style={styles.navigation}>
                    <button onClick={prevPage} style={styles.button}><img src={leftButton} style={styles.changePageIcon}/></button>
                    <button onClick={nextPage} style={styles.button}><img src={rightButton} style={styles.changePageIcon}/></button>
                </div>
            </div>

            <div style={styles.buttonsContainer}>
                <button onClick={handleHideToday} style={styles.hideTodayButton}>오늘 하루 그만보기</button>
                <button onClick={handleClose} style={styles.closeButton}>닫기</button>
            </div>

        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: `url(${roadBackground})`, //''가 아닌 ``으로 해야함
        backgroundSize: 'cover',  // 배경 꽉 채우고
        backgroundPosition: 'center',  // 배경 중앙에 위치
    },
    box: {
        border: '1px solid #ccc',
        padding: '20px',
        margin: '10px',
        width: '350px',
        height: '300px',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // 상하로 공간을 배분. 버튼 고정
        maxWidth: '500px',
        maxHeight: '300px',
        overflowY: 'auto',
        textAlign: 'left',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // 배경을 투명하게 설정 (0.8로 불투명도 설정)
        
    },
    mainText: {
        fontSize: '20px',
        marginBottom: '10px',
        fontWeight: 'bold',
    },
    titleText: {
        fontSize: '18px',
        marginBottom: '5px',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        fontSize: '14px',
        color: '#000080',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    navigation: {
        display: 'flex',
        justifyContent: 'center', // 중앙 정렬
        width: '100%',
        marginTop: '5px',
        gap: '50px', // 버튼 간 간격 설정
    },
    button: {
        padding: '5px 10px',
        margin: '0 5px',
        borderRadius: '5px',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        padding: 0, // padding 없애기
        background: 'transparent', // 배경 없애기
    },
    changePageIcon: {
        width: '25px', 
        height: '25px', 
    },

    // 닫기 버튼 스타일링
    buttonsContainer: {
        display: 'flex',
        gap: '5px',
        width: '100%',
        justifyContent: 'space-evenly', // 양쪽에 공백 같게
    },
    hideTodayButton: {
        padding: '10px 15px',
        backgroundColor: '#E6E6E6',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '45%',
        fontSize: '15px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
    closeButton: {
        padding: '10px 15px',
        backgroundColor: '#E6E6E6',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '45%',
        fontSize: '15px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
};

export default GuidePage;
