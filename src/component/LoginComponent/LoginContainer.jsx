import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../css/MainPage.css";

const LoginContainer = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/main");
  };

  const loginUser = (event) => {
    event.preventDefault();
    console.log("eeee");
    navigate("/home");
  };
  return (
    <Form
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onSubmit={(event) => loginUser(event)}
    >
      <Form.Group className="mb-1 loginbox" controlId="formGroupEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formGroupPassword">
        <Form.Label></Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div
        style={{
          display: "flex",
          justifyItems: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Form.Group className="mb-3 autoLogin-container" id="formGridCheckbox">
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
  );
};

export default LoginContainer;
