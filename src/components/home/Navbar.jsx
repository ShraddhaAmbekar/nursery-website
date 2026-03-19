import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // <-- import icons
import logo from "../../assets/logo.png";

const MainNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Navbar
      ref={navRef}
      expand="lg"
      expanded={expanded}
      className={`main-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img src={logo} alt="Humming Kitez" className="logo-img" />
        </Navbar.Brand>

        {/* Toggle with dynamic icon */}
        <Navbar.Toggle onClick={() => setExpanded(!expanded)}>
          {expanded ? <FaTimes size={24} /> : <FaBars size={24} />}
        </Navbar.Toggle>

        <Navbar.Collapse>
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={NavLink} to="/" end onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>

            {/* Programs Dropdown */}
            <NavDropdown
              title="Programs"
              id="programs-dropdown"
              className="custom-program-dropdown"
            >
              <NavDropdown.Item as={NavLink} to="/programs/nursery" onClick={() => setExpanded(false)}>
                Nursery
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/programs/lkg" onClick={() => setExpanded(false)}>
                Lower KG
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/programs/ukg" onClick={() => setExpanded(false)}>
                Upper KG
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/programs/day-care" onClick={() => setExpanded(false)}>
                Day Care
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/contact" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>

            <Nav.Link as={NavLink} to="/gallery" onClick={() => setExpanded(false)}>
              Gallery
            </Nav.Link>

            <Nav.Link as={NavLink} to="/admission" onClick={() => setExpanded(false)}>
              Admission
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
