import { Form, Button, Container } from "react-bootstrap";
import React from 'react';

function Login({ userForm, setUserForm, handleLogin}) {
  
  return (
    <div>
      <br></br>
      <br></br>
      <Container>
        <Form onSubmit={handleLogin} >
          <Form.Group>
              <Form.Label>Enter your name:</Form.Label>
              <Form.Control className="w-25"
                type = "text"
                placeholder = "name"
                value={userForm}
                onChange = {(e) => setUserForm(e.target.value)}
              /> 
              <br />
          </Form.Group>
          <Button variant = "primary" type = "submit">Submit</Button>
        </Form>
      </Container>
    </div>
  )
}
export default Login;