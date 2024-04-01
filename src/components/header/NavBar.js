import React from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import CartIcon from './CartIcon';
import logoImage from '../../assets/image.png';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{ marginRight: '10px' }}>
          <img
            src={logoImage}
            height="30px"
            className='d-inline-block align-top'
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Homepage</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search for products"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <CartIcon />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
