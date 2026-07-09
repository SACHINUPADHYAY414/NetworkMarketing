import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Badge,
} from "react-bootstrap";
import {
  FaSearch,
  FaChartLine,
  FaBullseye,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const SEO = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg,#0d6efd 0%,#0b5ed7 100%)",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={6}>
              <Badge bg="light" text="primary" className="mb-3 px-3 py-2">
                #1 SEO Marketing Agency
              </Badge>

              <h1 className="display-4 fw-bold text-white mb-4">
                Grow Your Business
                <br />
                With Professional
                <span className="text-warning"> SEO Services</span>
              </h1>

              <p className="lead text-white mb-4">
                Increase your Google rankings, generate high-quality leads,
                and boost organic traffic with our expert SEO strategies.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Button size="lg" variant="warning">
                  Get Free SEO Audit
                </Button>
<Button className="flow-btn" size="lg" variant="outline-light">
  View Packages
</Button>
              </div>

              <Row className="mt-5 text-center">
                <Col xs={4}>
                  <h3 className="fw-bold text-warning">250+</h3>
                  <small className="text-white">
                    Happy Clients
                  </small>
                </Col>

                <Col xs={4}>
                  <h3 className="fw-bold text-warning">98%</h3>
                  <small className="text-white">
                    Success Rate
                  </small>
                </Col>

                <Col xs={4}>
                  <h3 className="fw-bold text-warning">8+</h3>
                  <small className="text-white">
                    Years Experience
                  </small>
                </Col>
              </Row>
            </Col>

            <Col lg={6}>
              <Card className="shadow-lg border-0 rounded-4">
                <Card.Body className="p-5">

                  <div className="d-flex align-items-center mb-4">
                    <FaSearch
                      className="text-primary me-3"
                      size={35}
                    />

                    <div>
                      <h4 className="fw-bold mb-0">
                        SEO Performance
                      </h4>

                      <small className="text-muted">
                        Monthly Growth Report
                      </small>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2">
                      Organic Traffic
                    </p>

                    <div className="progress" style={{ height: 10 }}>
                      <div
                        className="progress-bar bg-success"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2">
                      Keyword Ranking
                    </p>

                    <div className="progress" style={{ height: 10 }}>
                      <div
                        className="progress-bar bg-primary"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2">
                      Lead Generation
                    </p>

                    <div className="progress" style={{ height: 10 }}>
                      <div
                        className="progress-bar bg-warning"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="alert alert-success mt-4">
                    🚀 Website traffic increased by
                    <strong> 320%</strong> in just 6 months.
                  </div>

                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why SEO */}
      <section className="py-5 bg-light">
        <Container>

          <div className="text-center mb-5">
            <h2 className="fw-bold">
              Why Invest in SEO?
            </h2>

            <p className="text-muted">
              SEO helps your business attract targeted customers,
              increase sales and build long-term online visibility.
            </p>
          </div>

          <Row className="g-4">

            <Col md={6} lg={3}>
              <Card className="border-0 shadow h-100 text-center">
                <Card.Body className="p-4">
                  <FaChartLine
                    size={45}
                    className="text-primary mb-3"
                  />
                  <h5>More Traffic</h5>
                  <p className="text-muted">
                    Get more organic visitors from Google.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="border-0 shadow h-100 text-center">
                <Card.Body className="p-4">
                  <FaBullseye
                    size={45}
                    className="text-danger mb-3"
                  />
                  <h5>Better Leads</h5>
                  <p className="text-muted">
                    Reach customers searching for your services.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="border-0 shadow h-100 text-center">
                <Card.Body className="p-4">
                  <FaUsers
                    size={45}
                    className="text-success mb-3"
                  />
                  <h5>More Customers</h5>
                  <p className="text-muted">
                    Increase conversions and revenue.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="border-0 shadow h-100 text-center">
                <Card.Body className="p-4">
                  <FaCheckCircle
                    size={45}
                    className="text-warning mb-3"
                  />
                  <h5>Long Term Growth</h5>
                  <p className="text-muted">
                    Sustainable results without expensive ads.
                  </p>
                </Card.Body>
              </Card>
            </Col>

          </Row>

        </Container>
      </section>
    </>
  );
};

export default SEO;