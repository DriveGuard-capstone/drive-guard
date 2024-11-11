import React from "react";
import MainLogo from "../component/MainPageComponent/MainLogo";
import LoginContainer from "../component/LoginComponent/LoginContainer";
import AutoLogin from "../component/LoginComponent/AutoLogin";

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
      <AutoLogin />
    </div>
  );
};

export default Login;
