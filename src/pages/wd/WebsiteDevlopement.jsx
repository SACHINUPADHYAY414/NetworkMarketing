import React from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import WD from "../../assets/wd.png";
import {
  BsCheckCircleFill,
  BsArrowRight,
  BsGlobe,
  BsLightningChargeFill,
  BsShieldCheck,
  BsPhone
} from "react-icons/bs";
import WhyChooseSection from "../../components/whyChooseSection/WhyChooseSection";
import { websiteDevelopementData } from "../../string/Data";

const HeroSection = () => {
  return (
    <>
      <section className="wd-hero position-relative overflow-hidden py-3 py-md-4 px-2">
        <div className="wd-grid"></div>

        <div className="wd-glow wd-glow1"></div>
        <div className="wd-glow wd-glow2"></div>

        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <span className="text-white fst-italic">
                💻 Professional Website Development Services
              </span>

              <h1 className="fs-1 fw-bold text-white lh-1 d-md-none">
                Website Development Company in
                <span className="gradient-text d-block">
                  Dhanbad for Modern Businesses
                </span>
              </h1>
              <h1 className="display-4 fw-bold text-white lh-1 d-none d-md-block">
                Website Development Company in
                <span className="gradient-text d-block">
                  Dhanbad for Modern Businesses
                </span>
              </h1>
              <h5 className="text-info">
                Looking for a reliable Website Development Company in Dhanbad?
              </h5>
              <p className="lead text-light mt-2">
                AH Growth Agency designs and develops fast, responsive, and
                SEO-friendly websites that help startups, local businesses, and
                growing brands establish a strong online presence. From business
                websites to eCommerce stores, we create websites that not only
                look great but also drive leads, sales, and business growth.
              </p>

              <div className="d-column d-md-flex gap-3 mt-4 text-center text-md-start">
                <Button className="rounded-pill mb-3">
                  Get Free Website Consultation
                </Button>

                <Button
                  variant="outline-light"
                  className="rounded-pill mb-0 mb-md-3"
                >
                  Request a Quote
                </Button>
              </div>

              <Row className="mt-3 mt-md-2 text-white">
                <Col xs={3}>
                  <div>
                    <h2 className="fw-bold text-warning">50+</h2>
                    <small>Websites Designed</small>
                  </div>
                </Col>

                <Col xs={3}>
                  <div>
                    <h2 className="fw-bold text-warning">100+</h2>
                    <small>Responsive Designs</small>
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
                    <small>Support & Maintenance</small>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col md={5} className="text-center mt-5 d-none d-md-flex mt-lg-0">
              <img
                src={WD}
                alt="Social Media Marketing"
                className="img-fluid "
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="smm-hero py-3 py-md-4 px-2">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT */}

            <div className="col-lg-6 d-none d-md-block">
              <div className="position-relative">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/011/381/955/small_2x/young-man-and-young-girl-creating-marketing-content-3d-character-illustration-png.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>

            {/* RIGHT */}

            <div className="col-lg-6">
              <div className="text-center text-lg-start">
                <span className="mb-0 fst-italic fw-semibold text-white">
                  About Our Website Development Service
                </span>
              </div>

              <h2 className="display-5 d-none d-md-block fw-bold lh-1">
                Build a Website That
                <span className="text-info"> Drives Business Growth</span>
              </h2>
              <h2 className="fs-1 d-md-none d-block fw-bold text-center lh-1">
                Build a Website That
                <span className="text-info"> Drives Business Growth</span>
              </h2>
              <div className="d-md-none d-block">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/011/381/955/small_2x/young-man-and-young-girl-creating-marketing-content-3d-character-illustration-png.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <p className="text-primary-50 fs-5 mt-0 mt-md-2">
                We build fast, responsive, and SEO-optimized websites that
                showcase your brand, improve user experience, and convert
                visitors into loyal customers.
              </p>
              <div className="row mt-2 mt-md-4 gy-3">
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <BsCheckCircleFill className="text-info fs-4 me-3 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="fw-bold mb-1">SEO Friendly</h5>
                      <p className="text-secondary mb-0">
                        Optimized structure to improve Google rankings and
                        organic traffic.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <BsCheckCircleFill className="text-info fs-4 me-3 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="fw-bold mb-1">Lightning Fast</h5>
                      <p className="text-secondary mb-0">
                        Optimized code and assets for faster loading and better
                        performance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <BsCheckCircleFill className="text-info fs-4 me-3 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="fw-bold mb-1">Responsive Design</h5>
                      <p className="text-secondary mb-0">
                        Seamless experience across desktop, tablet and mobile
                        devices.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <BsCheckCircleFill className="text-info fs-4 me-3 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="fw-bold mb-1">Secure Website</h5>
                      <p className="text-secondary mb-0">
                        SSL security, secure coding standards and regular
                        updates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="smm-section py-3 py-md-4">
        <Container>
          <WhyChooseSection
            title="Why Choose"
            highlight="AH Growth Agency?"
            subtitle="Your Trusted Website Development Company in Dhanbad"
            cards={websiteDevelopementData}
          />
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
