import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/main");
  };
  const goToLogin = () => {
    navigate("/login")
  }
  return (
    <div className="register-container">
      <div className="display-center">
        <Form className="login-box">
          <h1>회원가입</h1>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="string" placeholder="Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>re-enter the password</Form.Label>
            <Form.Control type="password" placeholder="re-enter the password" />
          </Form.Group>

          <div className="registerBtn-container">
            <Button className="button-primary" onClick={goToHome}>
              홈으로
            </Button>
            <Button className="button-primary" type="submit"  onClick={goToLogin}>
              회원가입
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
