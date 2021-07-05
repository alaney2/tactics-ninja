import React from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            Tactics Ninja
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#solve">Solve Puzzles</Nav.Link>
              <Nav.Link href="#analyze">Analyze</Nav.Link>
              <Nav.Link href="#changelog">Changelog</Nav.Link>
              <NavDropdown title="Help" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/question">Ask a Question</NavDropdown.Item>
                <NavDropdown.Item href="#action/suggestion">Make a Suggestion</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/bug">Report a Bug</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;