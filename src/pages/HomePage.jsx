import React, { useRef, useState, useEffect } from 'react';
import dmaLogo from '../ms_image/dmaLogo.png'

const HomePage = () => {  
    return (
        <div style={styles.container}>
            <div style={styles.titleContainer}>
                <h1 style={styles.logo}></h1>
                <h2 style={styles.titleText}>DMA</h2>
            </div>

            <div style={styles.line}></div>

            <div style={styles.mainContainer}>

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
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: '45px',
        height: '45px',
        flexDirection: 'column',
        backgroundImage: `url(${dmaLogo})`,
        backgroundSize: 'cover',  // 배경 꽉 채우고
        backgroundPosition: 'center',  // 배경 중앙에 위치
        marginRight: '10px',

    },
    titleText: {
        fontSize: '30px',
        color: '#808080',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    line: {
        width: '100%',
        height: '1px',
        background: '#000000'
    },
    mainContainer: {
        width: '100%',
        height: '100px',
        background: '#808080',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px',
    },
}

export default HomePage;