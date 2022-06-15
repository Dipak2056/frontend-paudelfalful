import React from "react";
import { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./login.css";
const initialState = {
  email: "paudelsantosh508@gmail.com",
  password: "Dipak1234",
};
export const LoginForm = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    if (!email || !password) {
      return alert("Email and password must be filled before submitting");
    }
    console.log(email, password);
  };
  return (
    <div>
      <Container>
        <div className="form-content mt-5">
          <h1>Welcome Back !</h1>
          <hr />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                ref={emailRef}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label> Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                ref={passRef}
                placeholder="Password"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Button type="submit">submit</Button>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  );
};
