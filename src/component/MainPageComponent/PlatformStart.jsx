import React from "react";
import kakaoLogo from "../../image/kakaolgo.png";
import naverLogo from "../../image/naverlogo.png"

const PlatformStart = () => {
  return (
    <div>
      <div className="platform-start-button">
        <button className="kakao-button" style={{fontSize:"10px", border:"1px solid yellow", borderRadius:"10%", backgroundColor:"yellow"}}>
          <img
            src={kakaoLogo}
            style={{ width: 30, height: 30, borderRadius: "50%", }}
          />
          카카오로 시작하기
        </button>
        <button className="kakao-button" style={{fontSize:"10px", border:"1px solid lightgreen", borderRadius:"10%", backgroundColor:"lightgreen"}}>
        <img
            src={naverLogo}
            style={{ width: 50, height: 30, borderRadius: "30%", marginRight: "2px" }}
          />
          네이버로 시작하기
        </button>
      </div>
    </div>
    
  );
};

export default PlatformStart;
