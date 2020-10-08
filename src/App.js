import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import './App.css';
import './Menu.css';
import Main from './components/Main';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <Container fluid className="bg-colour bg-splash">
      <Navbar expand="lg" className="bg-colour">
        <Navbar.Brand>
          <Link className="navbar-brand custom-brand" to="/">Megan Elisabeth Finch</Link>
        </Navbar.Brand>
        <Navbar.Toggle id="toggle" aria-controls="menu"><FontAwesomeIcon icon={faBars} /></Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end" id="menu">
          <Nav>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Nav.Link href="https://github.com/meganelisabethfinch">
              <FontAwesomeIcon icon={faGithub} />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/megan-finch/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Main />
    </Container>

  );
}

export default App;
