import React, { useRef, useState, useEffect } from "react";
import left_icon from "../ms_image/left_icon.png";
import { useNavigate } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../css/MyPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyPage = () => {
  const navigate = useNavigate();

  const handleLeftButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="mypage-container">
      {/* profile section */}
      <div className="background1">
        <div className="title-container">
          <button
            className="left-button"
            onClick={handleLeftButtonClick}
          ></button>
          <div className="title">마이페이지</div>
        </div>
        <div className="profile-container">
          <div className="img-container">
            <FontAwesomeIcon icon={faUser} className="icon-style" />
          </div>
          <div className="profile-name">
            <h2>홍길동</h2>
          </div>
        </div>
      </div>
      {/* info section */}
      <div className="info-container">
        <div className="info-row">
          <div className="alert-count-container">
            <h3>경고음 횟수 :</h3>
            <h2>2회</h2>
          </div>
          <div className="drive-status-container">
            <h3>운전 상태 : </h3>
            <h2>😄</h2>
          </div>
        </div>
        <div className="notAlert-day-container">
          <h3>안전운전 일수 :</h3>
          <h2>연속 7일</h2>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
