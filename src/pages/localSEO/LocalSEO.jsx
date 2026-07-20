import React from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import WhyChooseSection from "../../components/whyChooseSection/WhyChooseSection";
import Laptop from "../../assets/Laptop.png";
import { WhyChooseData } from "../../string/Data";

const LocalSEO = () => {

  return (
    <div>
      <section className="services-section py-3 py-md-4 px-2">
        <div className="container position-relative">
          <Row className="align-items-center">
            <Col md={7}>
              <span className="text-white fst-italic">
                📍 Get Found by Local Customers
              </span>

              <h1 className="fs-1 fw-bold text-white lh-1 d-md-none">
                Local SEO Services in
                <span className="gradient-text d-block">
                  Dhanbad to Grow Your Local Business
                </span>
              </h1>
              <h1 className="display-6 fw-bold text-white lh-1 d-none d-md-block">
                Local SEO Services in
                <span className="gradient-text d-block">
                  Dhanbad to Grow Your Local Business
                </span>
              </h1>
              <p className="lead text-light mt-2">
                Want your business to appear when customers search for services
                near them? AH Growth Agency provides Local SEO Services in
                Dhanbad that help startups, local businesses, and service
                providers improve their visibility on Google Search and Google
                Maps. Our customized Local SEO strategies help you attract
                nearby customers, generate quality leads, and grow your business
                organically.
              </p>

              <div className="d-column d-md-flex gap-3 mt-4 text-center text-md-start">
                <Button className="rounded-pill mb-3">
                  Get Free Local SEO Audit
                </Button>

                <Button
                  variant="outline-light"
                  className="rounded-pill mb-0 mb-md-3"
                >
                  Improve Local Rankings
                </Button>
              </div>

              <Row className="mt-3 mt-md-2 text-white">
                <Col xs={3}>
                  <div>
                    <h2 className="fw-bold text-warning">100+</h2>
                    <small>Local SEO Optimizations Completed</small>
                  </div>
                </Col>

                <Col xs={3}>
                  <div>
                    <h2 className="fw-bold text-warning">50+</h2>
                    <small>Businesses Supported</small>
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
                    <h2 className="fw-bold text-warning">100%</h2>
                    <small>White-Hat SEO Practices</small>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col md={5} className="text-center mt-5 d-none d-md-flex mt-lg-0">
              <img
                src={Laptop}
                alt="Social Media Marketing"
                className="img-fluid "
              />
            </Col>
          </Row>
        </div>
      </section>
      <section className="services-section py-3 py-md-4 px-2">
        <div className="container position-relative">
          <WhyChooseSection
            title="Why Choose"
            highlight="AH Growth Agency?"
            subtitle="Your Trusted Local SEO Partner in Dhanbad"
            cards={WhyChooseData}
          />
        </div>
      </section>
    </div>
  );
};

export default LocalSEO;
