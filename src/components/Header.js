"use client";

import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { profileLinks } from "../data/profileLinks";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./header.module.css";

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const renderProfileLink = (link, mobile = false) => (
    <Nav.Link
      key={link.id}
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className={styles.icon}
      aria-label={link.label === "Curriculum Vitae" ? `${link.label} (opens in new tab)` : link.label}
      onClick={mobile ? () => setExpanded(false) : undefined}
    >
      {link.icon ? <FontAwesomeIcon icon={link.icon} /> : link.shortLabel}
    </Nav.Link>
  );

  return (
    <>
    <Navbar expanded={expanded} onToggle={(v) => setExpanded(v)} className={styles.navbar} expand="lg" variant="dark">
      <Container className={styles.container} fluid>
        <Navbar.Brand
          className={`${styles.brand} ${styles.brandDistinct}`}
          href="/"
          style={{ fontWeight: 900, fontFamily: 'var(--font-inter)', fontStyle: 'italic' }}
        >
          Megan Elisabeth Finch
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" onClick={() => setExpanded((s) => !s)} />

        {/* Desktop nav rendered inline (hidden on small screens via CSS) */}
        <div className={styles.rightNav}>
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/about/" className={styles.navItem}>
              01. About
            </Nav.Link>
            <Nav.Link href="/blog/" className={styles.navItem}>
              02. Blog
            </Nav.Link>
            {profileLinks.map((link) => renderProfileLink(link))}
            <Nav.Link
              href="/links/"
              className={styles.icon}
              aria-label="Links"
            >
              <FontAwesomeIcon icon={faLink} />
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
              <Nav.Link href="/about/" className={styles.navItem} onClick={() => setExpanded(false)}>
                01. About
              </Nav.Link>
              <Nav.Link href="/blog/" className={styles.navItem} onClick={() => setExpanded(false)}>
                02. Blog
              </Nav.Link>

              <div className={styles.mobileIcons}>
                {profileLinks.map((link) => renderProfileLink(link, true))}
                <Nav.Link
                  href="/links/"
                  className={styles.icon}
                  aria-label="Links"
                  onClick={() => setExpanded(false)}
                >
                  <FontAwesomeIcon icon={faLink} />
                </Nav.Link>
              </div>
            </Nav>
        </div>
      </div>
    </>
  );
}
