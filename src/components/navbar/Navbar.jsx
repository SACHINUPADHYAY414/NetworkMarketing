import { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { Data } from "../../string/Data";

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const [showServices, setShowServices] = useState(false);
  return (
    <Navbar
      bg="white"
      expand="lg"
      sticky="top"
      className="shadow-sm py-2"
      expanded={expanded}
      onToggle={(value) => setExpanded(value)}
    >
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="d-flex align-items-center fs-6"
        >
          <img
            src={Data.logo}
            alt="Logo"
            width="45"
            height="45"
            className="rounded-circle me-2"
          />

          <span className="fw-bold text-primary">{Data.companyName}</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center">
            {Data.navLinks.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.path || item.name}
                    className="nav-item dropdown services-menu"
                    onMouseEnter={() =>
                      window.innerWidth >= 992 && setShowServices(true)
                    }
                    onMouseLeave={() =>
                      window.innerWidth >= 992 && setShowServices(false)
                    }
                  >
                    <span
                      className="nav-link dropdown-toggle"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        if (window.innerWidth < 992) {
                          setShowServices(!showServices);
                        }
                      }}
                    >
                      {item.name}
                    </span>

                    <div
                      className={`dropdown-menu ${showServices ? "show" : ""}`}
                    >
                      {item.children.map((service) => (
                        <NavLink
                          key={service.path}
                          to={service.path}
                          className="dropdown-item"
                          onClick={() => {
                            setExpanded(false);
                            setShowServices(false);
                          }}
                        >
                          {service.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Nav.Link
                  key={item.path || item.name}
                  as={NavLink}
                  to={item.path}
                  onClick={() => setExpanded(false)}
                >
                  {item.name}
                </Nav.Link>
              );
            })}

            <Button
              as={NavLink}
              to="/audit"
              onClick={() => setExpanded(false)}
              variant="primary"
              className="ms-lg-3 mt-lg-0 px-3"
            >
              Free Audit
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
