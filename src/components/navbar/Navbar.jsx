import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { Data } from "../../string/Data";

const NavbarComponent = () => {
  return (
    <Navbar
      bg="white"
      expand="lg"
      sticky="top"
      className="shadow-sm py-2"
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

          <span className="fw-bold text-primary">
            {Data.companyName}
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">

          <Nav className="ms-auto align-items-center">

            {Data.navLinks.map((item, index) => {

              if (item.children) {
                return (
                  <div
                    key={index}
                    className="nav-item dropdown services-menu"
                  >
                    <span
                      className="nav-link dropdown-toggle"
                      role="button"
                    >
                      {item.name}
                    </span>

                    <div className="dropdown-menu">

                      {item.children.map((service, i) => (
                        <Link
                          key={i}
                          className="dropdown-item"
                          to={service.path}
                        >
                          {service.name}
                        </Link>
                      ))}

                    </div>
                  </div>
                );
              }

              return (
                <Nav.Link
                  key={index}
                  as={NavLink}
                  to={item.path}
                >
                  {item.name}
                </Nav.Link>
              );
            })}

            <Button
              as={NavLink}
              to="/audit"
              variant="primary"
              className="ms-lg-3 mt-3 mt-lg-0 px-3"
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