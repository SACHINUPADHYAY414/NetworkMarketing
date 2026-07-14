import React from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaArrowRight,
  FaChartLine,
  FaHeart,
  FaUsers,
  FaBullhorn
} from "react-icons/fa";
import Ludo from "../../assets/Ludo.png";

const Smm = () => {
  return (
    <section
      className="py-4 py-md-5 position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg,#020617,#0f172a,#1e293b)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div className="hero-blob hero-blob-1"></div>
      <div className="hero-blob hero-blob-2"></div>

      <Container>
        <Row className="align-items-center g-">
          {/* LEFT */}

          <Col lg={7}>
            <span className="text-white fst-italic">
              🚀 Social Media Marketing Agency
            </span>

            <h1 className="display-3 fw-bold text-white lh-1">
              Grow Your Brand With
              <span className="gradient-text d-block">
                Social Media Marketing
              </span>
            </h1>

            <h5 className="text-info mt-3">
              Social Media Marketing Agency in Dhanbad That Delivers Real
              Results
            </h5>

            <p className="lead text-light mt-2">
              AH Growth Agency helps startups, local businesses and growing
              brands build a powerful social media presence through engaging
              content, paid advertising and performance-driven campaigns that
              generate awareness, leads and loyal customers...
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <Button className="rounded-pill">
                Get Free Social Media Audit
                <FaArrowRight className="ms-2" />
              </Button>

              <Button variant="outline-light" className="rounded-pill">
                Start Growing Today
              </Button>
            </div>

            <Row className="mt-4 text-white">
              <Col xs={3}>
                <div>
                  <h2 className="fw-bold text-warning">50+</h2>
                  <small>Businesses Supported</small>
                </div>
              </Col>

              <Col xs={3}>
                <div>
                  <h2 className="fw-bold text-warning">100+</h2>
                  <small>Campaigns Managed</small>
                </div>
              </Col>

              <Col xs={3}>
                <div>
                  <h2 className="fw-bold text-warning">98%</h2>
                  <small>Client Satisfaction</small>
                </div>
              </Col>

              <Col xs={3}>
                <div>
                  <h2 className="fw-bold text-warning">24/7</h2>
                  <small>Support</small>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            lg={5}
            className="d-flex justify-content-center d-none d-md-block"
          >
            <img
              src={Ludo}
              alt="Social Media Marketing"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Smm;
