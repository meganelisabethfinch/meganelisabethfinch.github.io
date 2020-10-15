import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';


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
      <Navbar collapseOnSelect expand="lg" className="bg-colour">
        <Navbar.Brand>
          <Link className="navbar-brand text-light custom-brand" to="/">Megan Elisabeth Finch</Link>
        </Navbar.Brand>
        <Navbar.Toggle id="toggle" aria-controls="menu"><FontAwesomeIcon icon={faBars} /></Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end" id="menu">
          <Nav>
              <Nav.Link eventKey="1" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="/blog">
                Blog
              </Nav.Link>
            <Nav.Link href="https://github.com/meganelisabethfinch">
              <FontAwesomeIcon icon={faGithub} />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/megan-finch/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    <Row>
      <Col>
        <Main />
      </Col>
    </Row>
    </Container>

  );
}

export default App;
