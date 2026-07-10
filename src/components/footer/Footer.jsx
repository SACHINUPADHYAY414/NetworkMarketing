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
  FaMapMarkerAlt,
  FaArrowRight
} from "react-icons/fa";

import { Data } from "../../string/Data";

const Footer = () => {
  return (
    <footer
      className="footer-section position-relative overflow-hidden text-light"
      style={{
        background: "linear-gradient(135deg,#030712,#111827,#1e1b4b)"
      }}
    >
      <div className="footer-glow footer-glow-left"></div>

      <div className="footer-glow footer-glow-right"></div>

      <Container className="position-relative py-4 pb-3">
        <Row className="g-4">
          <Col lg={4} md={6}>
            <div className="footer-box h-100">
              <h2 className="fw-bold text-warning mb-3 text-md-start text-center">
                {Data.companyName}
              </h2>

              <p className="footer-text text-md-start text-center">
                We help businesses grow with innovative Digital Marketing
                strategies including SEO, Social Media Marketing, Google Ads,
                Content Marketing, Performance Marketing and Website
                Development.
              </p>

              <div className="d-flex gap-3 mt-2 mt-md-4 px-3 px-md-0">
                <a href="#" className="footer-social">
                  <FaFacebookF />
                </a>

                <a href="#" className="footer-social">
                  <FaInstagram />
                </a>

                <a href="#" className="footer-social">
                  <FaLinkedinIn />
                </a>

                <a href="#" className="footer-social">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </Col>

          <Col lg={2} md={6}>
            <div className="footer-box h-100 px-3 px-md-0">
              <h5 className="fw-bold text-warning mb-2 mb-md-4">Quick Links</h5>

              <ul className="list-unstyled footer-links">
                <li className="mb-2">Home</li>
                <li className="mb-2">About Us</li>
                <li className="mb-2">Services</li>
                <li className="mb-2">Blog</li>
                <li className="mb-2">Contact</li>
              </ul>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="footer-box h-100 px-3 px-md-0">
              <h5 className="fw-bold text-warning mb-2 mb-md-4">
                Our Services
              </h5>
              <ul className="list-unstyled footer-links">
                <li className="mb-2">Search Engine Optimization</li>
                <li className="mb-2">Social Media Marketing</li>
                <li className="mb-2">Google Ads</li>
                <li className="mb-2">Performance Marketing</li>
                <li className="mb-2">Website Development</li>
                <li className="mb-2">Brand Promotion</li>
              </ul>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="footer-box h-100 px-3 px-md-0">
              <h5 className="fw-bold text-warning mb-2 mb-md-4">Contact Us</h5>

              <div className="footer-contact d-flex align-items-start gap-2 mb-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>{Data.address}</span>
              </div>

              <div className="footer-contact d-flex align-items-center gap-2 mb-2">
                <FaPhoneAlt />
                <span>{Data.phone}</span>
              </div>

              <div className="footer-contact d-flex align-items-center gap-2 mb-2">
                <FaEnvelope />
                <span>{Data.email}</span>
              </div>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">
              © {new Date().getFullYear()} {Data.companyName}. All Rights
              Reserved.
            </p>
          </Col>

          <Col md={6} className="mt-3 mt-md-0">
            <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-end align-items-center gap-2 gap-md-4">
              <div className="footer-bottom-link">Privacy Policy</div>

              <div className="footer-bottom-link">Terms & Conditions</div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
