import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";


const AutoLogin = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/main")
  }
  return (
    <div>
      <div style={{display:"flex", justifyItems:"center", flexDirection:"column", alignItems:"center"}}>
      <Form.Group className="mb-3 autoLogin-container" id="formGridCheckbox">
        <Form.Check type="checkbox" label={<span style={{ fontSize: '12px' }}>자동로그인</span>} />
        <Form.Check type="checkbox" label={<span style={{ fontSize: '12px' }}>아이디저장</span>} />
      </Form.Group>
        <Button variant="secondary" style={{width:"40%"}} onClick={goToHome}>홈으로</Button>
      </div>
    </div>
  );
};

export default AutoLogin;
