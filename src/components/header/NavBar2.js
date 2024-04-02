import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import CartIcon from './CartIcon';
import { LinkContainer } from 'react-router-bootstrap';
import logoImage from '../../assets/image.png';

const NavBar2 = () => {
  return (
    <Navbar bg="light" expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand style={{ marginRight: '10px' }}>
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
          <LinkContainer to="/">
              <Nav.Link>Homepage</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products">
              <Nav.Link>Products</Nav.Link>
            </LinkContainer>
          </Nav>
          <LinkContainer to="/cart">
            <Nav.Link><CartIcon /></Nav.Link>
          </LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar2;
