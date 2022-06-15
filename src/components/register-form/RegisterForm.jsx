import React, { useState } from "react";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postUserAction } from "../../pages/login-register/signInUpAction";
import "./RegisterForm.css";

const initialState = {
  fName: "Dipak",
  lName: "Paudel",
  email: "paudelsantosh508@gmail.com",
  phone: "0452450087",
  password: "Dipak1234",
  confirmPassword: "Dipak1234",
  address: "123 martin street",
};
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState(false);
  //pull data from redux store
  const { isLoading, response } = useSelector((state) => state.signInUp);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return setError(true);
    }
    setError(false);
    const { confirmPassword, ...rest } = form;
    dispatch(postUserAction(rest));
  };
  return (
    <div>
      <Container>
        <div className="form-content mt-5 mb--">
          <h1>Registeration Form</h1>
          <hr />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={form.fName}
                name="fName"
                required
                placeholder="Enter First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lName"
                value={form.lName}
                onChange={handleChange}
                required
                placeholder="Enter Last Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={form.phone}
                name="phone"
                type="phone"
                required
                placeholder="Phone Number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={form.address}
                name="address"
                required
                placeholder="Enter First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>DOB</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={form.dob}
                name="dob"
                type="date"
                placeholder="Enter born-date"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={form.email}
                name="email"
                type="email"
                required
                placeholder="Enter email "
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={form.password}
                name="password"
                type="password"
                required
                placeholder="Enter Password "
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Confirm Password</Form.Label>
              <Form.Control
                value={form.confirmPassword}
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                required
                placeholder="Enter Password Again "
              />
              <Alert variant="danger" show={error}>
                Passwords didnot match
              </Alert>
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

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Button type="submit">
                {isLoading ? (
                  <Spinner
                    variant="primary"
                    animation="border"
                    size="sm"
                  ></Spinner>
                ) : (
                  "signUp"
                )}
              </Button>
            </Form.Group>
          </Form>
          <div className="text-end">
            Already have an account ?<a href="/"> Login Now</a>
          </div>
        </div>
      </Container>
    </div>
  );
};
