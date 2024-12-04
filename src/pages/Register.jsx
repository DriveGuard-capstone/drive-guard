import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/Register.css";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

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

  // Email 중복체크
  const checkEmailDuplication = async () => {
    if (!email.includes("@")) {
      setEmailError("유효한 이메일 주소를 입력하세요.");
      return false;
    }

    try {
      const response = await fetch("http://localhost:5000/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();

      if (result.exists) {
        setEmailError("이미 사용 중인 이메일입니다.");
        return false;
      } else {
        setEmailError("");
        return true;
      }
    } catch (error) {
      setEmailError("이메일 중복 체크에 실패했습니다.");
      return false;
    }
  };

  const validatePassword = () => {
    const passwordCriteria = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
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

  const handleRegister = async (e) => {
    e.preventDefault();
    const isEmailValid = await checkEmailDuplication();
    const isPasswordValid = validatePassword();

    if (!isEmailValid || !isPasswordValid) {
      return; // 유효성 검사가 실패하면 진행하지 않음
    }

    try {
      if (password !== confirmPassword) {
        throw new Error("패스워드가 일치하지 않습니다 다시 입력해주세요.");
      }

      const response = await api.post("/user", { name, email, password });
      console.log("rrrr", response);

      if (response.status === 200) {
        alert("회원가입 성공");
        navigate("/login");
      }
    } catch (error) {
      setPasswordError(error.message);
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
            {emailError && <p style={{ color: "red" }}>{emailError}</p>}
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
            {passwordError && <p style={{ color: "Red" }}>{passwordError} </p>}
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
