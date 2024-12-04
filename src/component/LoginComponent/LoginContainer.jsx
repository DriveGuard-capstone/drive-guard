import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../css/MainPage.css";
import { alignPropType } from "react-bootstrap/esm/types";
import api from "../../utils/api";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/main");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("/user/login", { email, password });
      if (response.status === 200) {
        setUser(response.data.user);
        sessionStorage.setItem("token", response.data.token);
        api.defaults.headers["authorization"] = "Bearer " + response.data.token;
        setError("")
        navigate("/home")
      }
      throw new Error(response.message);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      {error && <p style={{ color: "red" }}> {error}</p>}
      <Form
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleLogin}
      >
        <Form.Group className="mb-1 loginbox" controlId="formGroupEmail">
          <Form.Label></Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formGroupPassword">
          <Form.Label></Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <div
          style={{
            display: "flex",
            justifyItems: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Form.Group
            className="mb-3 autoLogin-container"
            id="formGridCheckbox"
          >
            <Form.Check
              type="checkbox"
              label={<span style={{ fontSize: "12px" }}>자동로그인</span>}
            />
            <Form.Check
              type="checkbox"
              label={<span style={{ fontSize: "12px" }}>아이디저장</span>}
            />
          </Form.Group>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Button variant="secondary" style={{ width: "50%" }} type="submit">
              로그인
            </Button>
            <Button
              variant="secondary"
              style={{ width: "50%" }}
              onClick={goToHome}
            >
              홈으로
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default LoginContainer;
