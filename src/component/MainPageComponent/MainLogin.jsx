import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "../../css/MainPage.css"

const MainLogin = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/Login");
  };

  const goToRegister = () => {
    navigate("/register");
  };
  return (
    <div>
      <div className="login-container" >
        <Button className="custom-button" style={{ width: "300px" }} onClick={goToLogin}>
          Login
        </Button>
        <Button className="custom-button" style={{ width: "300px" }} onClick={goToRegister}>
          sign up
        </Button>{" "}
      </div>
    </div>
  );
};

export default MainLogin;
