import React from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import CartIcon from './CartIcon';
import { LinkContainer } from 'react-router-bootstrap';
import logoImage from '../../assets/image.png';
import { Dropdown } from 'react-bootstrap';

const NavBar = ({ onSearch, categories, onCategoryChange }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategoryName, setSelectedCategoryName] = React.useState('Category');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleCategorySelect = (category) => {
    onCategoryChange(category);
    const categoryName = categories.find(cat => cat === category);
    setSelectedCategoryName(categoryName || 'Category');
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    onCategoryChange('');
    setSelectedCategoryName('Category');
  };

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
          <Dropdown onSelect={handleCategorySelect} style={{ marginRight: '10px' }}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedCategoryName}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {categories.map((category, index) => (
                <Dropdown.Item key={index} eventKey={category}>{category}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form className="d-flex" onSubmit={handleSearchSubmit}>
            <FormControl
              type="search"
              placeholder="Search for products"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Button variant="outline-success" type="submit">Search</Button>
            <Button variant="outline-danger" onClick={handleClearSearch} style={{ marginLeft: '10px' }}>Clear</Button>
          </Form>
          <CartIcon />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
