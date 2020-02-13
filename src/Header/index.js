import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

function Header() {
  return (
    <Navbar className="Header" bg="dark" variant="dark" fixed="true">
      <Navbar.Brand>Futsu Tech</Navbar.Brand>
      <Nav>
        <Nav.Link href="#work" >Work</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
