import React from 'react';
import { Link } from 'react-router-dom';

/* React-Bootstrap imports */
import { Navbar, Nav } from 'react-bootstrap';

/* FontAwesome imports */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

/* Content imports */
import {
  socials
} from '../assets/contents';

/* CSS imports */
import '../styles/header.css';

const Header = () => (
  <Navbar collapseOnSelect expand="md" fixed="top" className="bg-colour">
    <Navbar.Brand>
      <Link className="navbar-brand text-light my-brand" to="/">Megan Elisabeth Finch</Link>
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
        <Nav.Link href={socials.github}>
          <FontAwesomeIcon icon={faGithub} />
        </Nav.Link>
        <Nav.Link href={socials.linkedin}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;