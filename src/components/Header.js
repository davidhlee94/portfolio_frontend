import { Link } from "react-router-dom";
import "./Header.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar className="color-nav sticky-top" expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <div className="nav-container">
              <div className="brand-pic-text">
                <img
                  src="https://i.imgur.com/HtqTVL6.png"
                  width="40"
                  height="40"
                />
                <div className="brand-text">DL</div>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            className="custom-toggler navbar-toggler"
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse className="responsive-navbar-nav right-aligned">
            <Nav className="nav">
              <Nav.Link
                as={Link}
                to="/"
                className="text-decoration-none"
                onClick={() => setExpanded(false)}
              >
                <div className="col text-center link-text">Home</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className="text-decoration-none"
                onClick={() => setExpanded(false)}
              >
                <div className="col text-center link-text">About</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/resume"
                className="text-decoration-none"
                onClick={() => setExpanded(false)}
              >
                <div className="col text-center link-text">Resume</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/projects"
                className="text-decoration-none"
                onClick={() => setExpanded(false)}
              >
                <div className="col text-center link-text">Projects</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/photography"
                className="text-decoration-none"
                onClick={() => setExpanded(false)}
              >
                <div className="col text-center link-text">Photography</div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
