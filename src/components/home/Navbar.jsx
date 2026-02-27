import { Navbar, Nav, Container,NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const MainNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={`main-navbar ${scrolled ? "scrolled" : ""}`}>
      <Container>
        <Navbar.Brand className="logo">
          <span className="logo-blue">Umang</span>
          <span className="logo-pink"> Academy</span>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto align-items-lg-center">

            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>

            <Nav.Link as={NavLink} to="/about">About</Nav.Link>

            {/* Programs Dropdown */}
         <NavDropdown title="Programs" id="programs-dropdown" className="custom-program-dropdown">
  <NavDropdown.Item as={NavLink} to="/programs/nursery">
    Nursery
  </NavDropdown.Item>
  <NavDropdown.Item as={NavLink} to="/programs/lkg">
    Lower KG
  </NavDropdown.Item>
  <NavDropdown.Item as={NavLink} to="/programs/ukg">
    Upper KG
  </NavDropdown.Item>
  <NavDropdown.Item as={NavLink} to="/programs/day-care">
    Day Care
  </NavDropdown.Item>
</NavDropdown>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
<Nav.Link as={NavLink} to="/admissions" className="nav-btn"><button className="main-btn"> Admissions</button></Nav.Link>
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
