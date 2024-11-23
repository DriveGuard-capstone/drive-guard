import React from "react";
import MainLogo from "../component/MainPageComponent/MainLogo";
import LoginContainer from "../component/LoginComponent/LoginContainer";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "90vh",
        alignItems: "center",
      }}
    >
      <MainLogo />
      <LoginContainer />
    
    </div>
  );
};

export default Login;
