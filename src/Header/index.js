import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

function Header() {
  return (
    <Navbar className="Header" bg="light" fixed="true">
      <Nav className="mr-auto">
        <Nav.Link href="#work">Work</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
