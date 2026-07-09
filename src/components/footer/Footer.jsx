import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";
import { Data } from "../../String/Data";

const Footer = () => {
  return (
    <footer
      className="text-light pt-5 pb-3"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.75)), url(${Data.footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <h4 className="fw-bold text-white mb-3">{Data.companyName}</h4>

            <p className="text-white-50">
              We help businesses grow with innovative digital marketing
              strategies including SEO, Social Media Marketing, Content
              Creation, and Performance Marketing.
            </p>

            <div className="d-flex gap-3 fs-5 mt-3">
              <a href="#" className="text-white">
                <FaFacebookF />
              </a>

              <a href="#" className="text-white">
                <FaInstagram />
              </a>

              <a href="#" className="text-white">
                <FaLinkedinIn />
              </a>

              <a href="#" className="text-white">
                <FaYoutube />
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <h5 className="fw-bold mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-decoration-none text-white-50">
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-decoration-none text-white-50"
                >
                  About
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-decoration-none text-white-50"
                >
                  Services
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/blog" className="text-decoration-none text-white-50">
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-decoration-none text-white-50"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </Col>

          {/* Services */}
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-3">Our Services</h5>

            <ul className="list-unstyled text-white-50">
              <li className="mb-2">✔ Search Engine Optimization</li>
              <li className="mb-2">✔ Social Media Marketing</li>
              <li className="mb-2">✔ Content Creation</li>
              <li className="mb-2">✔ Performance Marketing</li>
              <li>✔ Brand Promotion</li>
            </ul>
          </Col>

          {/* Contact */}
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-3">Contact Us</h5>

            <p className="text-white-50">
              <FaMapMarkerAlt className="me-2" />
              {Data.address}
            </p>

            <p className="text-white-50">
              <FaPhoneAlt className="me-2" />
              {Data.phone}
            </p>

            <p className="text-white-50">
              <FaEnvelope className="me-2" />
              {Data.email}
            </p>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        <Row>
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0 text-white-50">
              © {new Date().getFullYear()} {Data.companyName}. All Rights
              Reserved.
            </p>
          </Col>

          <Col md={6} className="text-center text-md-end mt-2 mt-md-0">
            <Link
              to="/privacy-policy"
              className="text-decoration-none text-white-50 me-3"
            >
              Privacy Policy
            </Link>

            <Link to="/terms" className="text-decoration-none text-white-50">
              Terms & Conditions
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
