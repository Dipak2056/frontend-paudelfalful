import React, { useEffect } from "react";
import { useRef } from "react";
import { Container, Form, Button, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postLoginAction } from "../../pages/login-register/signInUpAction";
import "./login.css";
const initialState = {
  email: "paudelsantosh508@gmail.com",
  password: "Dipak1234",
};
export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef();
  const passRef = useRef();
  //pull data from redux to show spinner
  const { isLoading, response } = useSelector((state) => state.signInUp);
  const { user } = useSelector((state) => state.admin);

  useEffect(() => {
    user._id && navigate("/dashboard");
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;

    if (!email || !password) {
      return alert("Email and password must be filled before submitting");
    }
    //call api through action
    dispatch(postLoginAction({ email, password }));
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
            <Form.Group>
              {response.message && (
                <Alert
                  variant={response.status === "success" ? "success" : "danger"}
                >
                  {response.message}
                </Alert>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Button type="submit">
                {isLoading ? (
                  <Spinner
                    variant="primary"
                    animation="border"
                    size="sm"
                  ></Spinner>
                ) : (
                  "Login"
                )}
              </Button>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  );
};
