import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLogo from "../component/MainPageComponent/MainLogo";
import MainLogin from "../component/MainPageComponent/MainLogin";
import PlatformStart from "../component/MainPageComponent/PlatformStart";

const MainPage = () => {
  // 이민수 : 첫시작 화면로고, 안내사항, 카메라버튼페이지, 카메라 세부설정 페이지
  // 김동현 : 메인페이지, 로그인화면, 회원가입

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <MainLogo />
        <MainLogin />
        <PlatformStart />
      </div>
    </div>
  );
};

export default MainPage;
