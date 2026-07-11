import { useState } from "react";
import { Container, Nav, Navbar, Button, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Data } from "../../string/Data";

const NavbarComponent = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const closeMenu = () => {
    setShowOffcanvas(false);
    setShowServices(false);
  };

  return (
    <Navbar bg="white" sticky="top" expand="lg" className="shadow-sm py-2">
      <Container>
        {/* Logo */}
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="d-flex align-items-center"
          onClick={closeMenu}
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

        {/* Mobile Toggle */}
        <Navbar.Toggle onClick={() => setShowOffcanvas(true)} />

        {/* Desktop Menu */}
        <Navbar.Collapse>
          <Nav className="ms-auto align-items-center d-none d-lg-flex">
            {Data.navLinks.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="nav-item dropdown services-dropdown"
                >
                  <span className="nav-link dropdown-toggle">{item.name}</span>

                  <div className="dropdown-menu">
                    {item.children.map((service) => (
                      <NavLink
                        key={service.path}
                        to={service.path}
                        className={({ isActive }) =>
                          isActive
                            ? "dropdown-item active-link"
                            : "dropdown-item"
                        }
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  {item.name}
                </NavLink>
              )
            )}

            <Button as={NavLink} to="/audit" className="ms-3">
              Free Audit
            </Button>
          </Nav>
        </Navbar.Collapse>

        {/* Mobile Offcanvas */}
        <Offcanvas show={showOffcanvas} onHide={closeMenu} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="d-flex align-items-center gap-1">
              <img
                src={Data.logo}
                alt={Data.companyName}
                width="40"
                height="40"
                className="rounded-circle object-fit-cover"
              />

              <span className="fw-bold text-primary mb-0">
                {Data.companyName}
              </span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex flex-column">
            <Nav className="flex-column">
              {Data.navLinks.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <span
                      className="nav-link dropdown-toggle"
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowServices(!showServices)}
                    >
                      {item.name}
                    </span>

                    {showServices && (
                      <div className="ps-3">
                        {item.children.map((service) => (
                          <NavLink
                            key={service.path}
                            to={service.path}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                              isActive ? "nav-link active-link" : "nav-link"
                            }
                          >
                            {service.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? "nav-link active-link" : "nav-link"
                    }
                  >
                    {item.name}
                  </NavLink>
                )
              )}
            </Nav>

            {/* Bottom Button */}
            <Button
              as={NavLink}
              to="/audit"
              onClick={closeMenu}
              className="mt-auto w-100"
            >
              Free Audit
            </Button>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
