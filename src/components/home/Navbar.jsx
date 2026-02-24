import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

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

            <Nav.Link>Home</Nav.Link>

            <Nav.Link>About</Nav.Link>

            {/* Programs Dropdown */}
            <div className="nav-item-dropdown">
              <Nav.Link className="dropdown-title">
                Programs <i className="fa fa-chevron-down ms-1"></i>
              </Nav.Link>

              <ul className="custom-dropdown">
                <li><a href="#">Nursery</a></li>
                <li><a href="#">Lower KG</a></li>
                <li><a href="#">Upper KG</a></li>
                <li><a href="#">Day Care</a></li>
              </ul>
            </div>

            <Nav.Link>Contact</Nav.Link>

            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
