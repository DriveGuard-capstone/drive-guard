import React from 'react'
import Form from 'react-bootstrap/Form';
import "../../css/MainPage.css"

const LoginContainer = () => {
  return (
    <Form style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
    <Form.Group className="mb-1 loginbox" controlId="formGroupEmail">
      <Form.Label></Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-1" controlId="formGroupPassword">
      <Form.Label></Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form>
  )
}

export default LoginContainer
