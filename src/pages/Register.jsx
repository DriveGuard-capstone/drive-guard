import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState("");

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/main");
  };
  const goToLogin = () => {
    navigate("/login");
  };

  // Email 중복체크
  const checkEmailDuplication = () => {
    // 예제용
    const existingEmails = ["test@trst.com"];
    if (existingEmails.includes(email)) {
      setEmailError("이미 사용 중인 이메일입니다.");
      return false;

    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePassword = () => {
    const passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordCriteria.test(password)) {
      setPasswordError(
        "비밀번호는 8자 이상, 대소문자 및 숫자를 포함해야 합니다."
      );
      return false;
    } else if (password !== confirmPassword) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const isEmailValid = checkEmailDuplication();
    const isPasswordValid = validatePassword();

    if (isEmailValid && !isPasswordValid) {
      alert("회원가입 성공!");
      navigate("/login");
    }
  };

  return (
    <div className="register-container">
      <div className="display-center">
        <Form className="login-box" onSubmit={handleRegister}>
          <h1>회원가입</h1>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="string"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={checkEmailDuplication}
              required
            />
            {emailError && <p className="error-text">{emailError}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>re-enter the password</Form.Label>
            <Form.Control
              type="password"
              placeholder="re-enter the password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={validatePassword}
              required
            />
          </Form.Group>

          <div className="registerBtn-container">
            <Button className="button-primary" onClick={goToHome}>
              홈으로
            </Button>
            <Button className="button-primary" type="submit">
              회원가입
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
