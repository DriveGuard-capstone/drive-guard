import React from "react";
import kakaoLogo from "../../image/kakaolgo.png";
import naverLogo from "../../image/naverlogo.png";

const PlatformStart = () => {
  // 카카오 로그인 로직
  const KAKAO_REST_API_KEY = "f5b61fda9e628cc69f17d76396990b54";

  const redirect_url = "http://localhost:3000/auth";

  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}$redirect`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  // 네이버 로그인 로직
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const NAVER_REDIRECT_URI = "http://localhost:3000/oauth";
  const STATE = "flase";
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${NAVER_REDIRECT_URI}`;
  
  const naverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  }
  return (
    <div>
      <div className="platform-start-button">
        <button
          className="kakao-button"
          onClick={handleLogin}
          style={{
            fontSize: "10px",
            border: "1px solid yellow",
            borderRadius: "10%",
            backgroundColor: "yellow",
          }}
        >
          <img
            src={kakaoLogo}
            style={{ width: 30, height: 30, borderRadius: "50%" }}
          />
          카카오로 시작하기
        </button>
        <button
          className="kakao-button"
          style={{
            fontSize: "10px",
            border: "1px solid lightgreen",
            borderRadius: "10%",
            backgroundColor: "lightgreen",
          }}
          onClick={naverLogin}
        >
          <img
            src={naverLogo}
            style={{
              width: 50,
              height: 30,
              borderRadius: "30%",
              marginRight: "2px",
            }}
          />
          네이버로 시작하기
        </button>
      </div>
    </div>
  );
};

export default PlatformStart;
