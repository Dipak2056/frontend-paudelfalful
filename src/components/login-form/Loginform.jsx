import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./login.css";

export const LoginForm = () => {
  return (
    <div>
      <Container>
        <div className="form-content mt-5">
          <h1>Welcome Back !</h1>
          <hr />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label> Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
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
