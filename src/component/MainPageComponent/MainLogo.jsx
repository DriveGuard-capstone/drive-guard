import React from "react";
import "../../css/MainPage.css";
import logo from "../../image/icons8-매질-96.png"

const MainLogo = () => {
  return (
    <div style={{marginTop:"3rem"}}>
      <div className="logo-container">
        <div className="logo">
          <img src={logo} style={{ width: "100px", height: "100px" }} />
        </div>
        <h1 className="title">DMA</h1>
      </div>
    </div>
  );
};

export default MainLogo;
