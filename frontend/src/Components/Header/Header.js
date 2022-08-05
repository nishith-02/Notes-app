import React from "react";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">Notes App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="/profile">My Profile</Nav.Link>
            <NavDropdown title="Sai Nishith" id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="/">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
