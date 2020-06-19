import React, { useState } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../App.css'


const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Jumbotron fluid id="jumbotron">
        <Container fluid>
        <Navbar  dark>
      <NavbarBrand href="/" className="mr-auto">
      <h1 className="display-3">Catz! Tinder</h1>
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="/newcat" >New Cat</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
          <p className="lead">It's like tinder but for Catz! The Musical- Movie Sensation</p>

        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
