import React from "react";
import { Container, Navbar, Nav, Button, NavDropdown } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="info" expand="md" className="text-light">
      <Container>
        <Navbar.Brand>Paudel FalFul Pasal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>Login</Nav.Link>
            <Nav.Link>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
