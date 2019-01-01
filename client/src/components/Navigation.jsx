import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">AICORE</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
	    <NavItem eventKey={2} componentClass={Link} href="/questions" to="/questions">
	    Improve recommendations
	    </NavItem>
	    <NavItem eventKey={3} componentClass={Link} href="/login" to="/login">
	Log In/Out
	</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
