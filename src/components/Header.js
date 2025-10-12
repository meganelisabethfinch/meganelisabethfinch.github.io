"use client";

import Link from "next/link";
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./header.module.css";

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
    <Navbar expanded={expanded} onToggle={(v) => setExpanded(v)} className={styles.navbar} expand="lg" variant="dark">
      <Container className={styles.container} fluid>
        <Navbar.Brand
          className={`${styles.brand} ${styles.brandDistinct}`}
          as={Link}
          href="/"
          style={{ fontWeight: 900, fontFamily: 'var(--font-inter)', fontStyle: 'italic' }}
        >
          Megan Elisabeth Finch
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" onClick={() => setExpanded((s) => !s)} />

        {/* Desktop nav rendered inline (hidden on small screens via CSS) */}
        <div className={styles.rightNav}>
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} href="/about" className={styles.navItem}>
              01. About
            </Nav.Link>
            <Nav.Link as={Link} href="/blog" className={styles.navItem}>
              02. Blog
            </Nav.Link>
            <Nav.Link
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
              aria-label="Curriculum Vitae (opens in new tab)"
            >
              CV
            </Nav.Link>
            <Nav.Link
              href="https://github.com/meganelisabethfinch"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faGithub} />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/megan-finch/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Nav.Link>
            <Nav.Link
              href="mailto:megan.e.finch@durham.ac.uk"
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </Nav.Link>
          </Nav>
        </div>
        {/* We render a custom overlay menu for small screens instead of using Navbar.Collapse
            to avoid the collapse changing the header layout. The overlay is rendered
            below (outside) the Navbar so the header bar stays fixed in place. */}
      </Container>
    </Navbar>

      {/* Mobile overlay panel — covers viewport under header when expanded */}
      <div
        className={`${styles.mobileOverlay} ${expanded ? styles.mobileOverlayOpen : ""}`}
        onClick={() => expanded && setExpanded(false)}
      >
        <div className={styles.mobilePanel} onClick={(e) => e.stopPropagation()}>
            <Nav className="flex-column">
              <Nav.Link as={Link} href="/about" className={styles.navItem} onClick={() => setExpanded(false)}>
                01. About
              </Nav.Link>
              <Nav.Link as={Link} href="/blog" className={styles.navItem} onClick={() => setExpanded(false)}>
                02. Blog
              </Nav.Link>

              <div className={styles.mobileIcons}>
                <Nav.Link
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.icon}
                  aria-label="Curriculum Vitae (opens in new tab)"
                  onClick={() => setExpanded(false)}
                >
                  CV
                </Nav.Link>
                <Nav.Link
                  href="https://github.com/meganelisabethfinch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.icon}
                  onClick={() => setExpanded(false)}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Nav.Link>
                <Nav.Link
                  href="https://www.linkedin.com/in/megan-finch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.icon}
                  onClick={() => setExpanded(false)}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Nav.Link>
                <Nav.Link href="mailto:megan.e.finch@durham.ac.uk" className={styles.icon} onClick={() => setExpanded(false)}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </Nav.Link>
              </div>
            </Nav>
        </div>
      </div>
    </>
  );
}
