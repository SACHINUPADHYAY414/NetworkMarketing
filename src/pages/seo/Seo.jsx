import React from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import {
  FaBullseye,
  FaUsers,
  FaSearch,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaClipboardCheck,
  FaChartLine,
  FaCheckCircle,
  FaFileAlt,
  FaCog,
  FaMapMarkedAlt,
  FaPenNib,
  FaLink,
  FaArrowRight,
  FaPenFancy,
  FaKey,
  FaChartBar,
  FaRocket,
  FaGoogle
} from "react-icons/fa";

import {
  FaAward,
  FaMoneyBillWave,
  FaTree,
  FaCoins,
  FaArrowTrendUp
} from "react-icons/fa6";
import { Data, getExperience } from "../../string/Data";
import { useNavigate } from "react-router-dom";

const SEO = () => {
  const navigate = useNavigate();
  return (
    <>
      <section
        className="py-4 position-relative overflow-hidden text-center text-md-start"
        style={{
          background: "linear-gradient(135deg,#030712,#111827,#1e1b4b)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "420px",
            height: "420px",
            background: "#2563eb",
            filter: "blur(160px)",
            top: "-120px",
            left: "-120px",
            opacity: 0.35
          }}
        />

        <div
          className="position-absolute rounded-circle"
          style={{
            width: "350px",
            height: "350px",
            background: "#7c3aed",
            filter: "blur(150px)",
            right: "-100px",
            bottom: "-100px",
            opacity: 0.25
          }}
        />
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={7}>
              <span className="text-white fst-italic">
                🚀 SEO Marketing Agency
              </span>

              <h2 className="fs-1 fw-bold text-white lh-1 mb-4">
                <span className="d-block">SEO Services</span>
                <span className="text-warning d-block">in Dhanbad</span>
                <span
                  className="d-block mt-2"
                  style={{ fontSize: "0.65em", fontWeight: 500 }}
                >
                  That Help Your Business Grow Organically
                </span>
              </h2>

              <p className="lead text-white mb-3">
                Looking for a reliable SEO Agency in Dhanbad? AH Growth Agency
                helps startups, local businesses, and growing brands improve
                their Google rankings, attract qualified traffic, and generate
                more leads with ethical, data-driven SEO strategies. Whether
                you're launching a new business or expanding your online
                presence, our customized SEO services are designed to deliver
                sustainable, long-term growth. SEO is a long-term investment
                that compounds over time, making it especially valuable for
                growing businesses.{" "}
              </p>

              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
                <Button size="md" variant="warning">
                  Get Free SEO Audit
                </Button>
                <Button className="flow-btn" size="md" variant="outline-light">
                  View Packages
                </Button>
              </div>

              <Row className="mt-4 text-center">
                <Col xs={3}>
                  <h3 className="fw-bold text-warning">100%</h3>
                  <small className="text-white">
                    SEO & Digital Marketing Tasks Completed
                  </small>
                </Col>
                <Col xs={3}>
                  <h3 className="fw-bold text-warning">{Data.HappyClient}</h3>
                  <small className="text-white">Satisfied Clients</small>
                </Col>

                <Col xs={3}>
                  <h3 className="fw-bold text-warning">100%</h3>
                  <small className="text-white">White-Hat SEO Practices</small>
                </Col>

                <Col xs={3}>
                  <h3 className="fw-bold text-warning">24/7</h3>
                  <small className="text-white">Customer Support</small>
                </Col>
              </Row>
            </Col>

            <Col lg={5}>
              <Card
                className="border-0 rounded-5 shadow-lg text-white"
                style={{
                  background: "rgba(255,255,255,.08)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,.15)"
                }}
              >
                <Card.Body className="p-5">
                  <div className="d-flex align-items-center mb-4">
                    <FaSearch className="text-primary me-2 mb-3" size={35} />

                    <div>
                      <h4 className="fw-bold mb-0">SEO Performance</h4>

                      <small className="text-muted">
                        Monthly Growth Report
                      </small>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-light mb-2">Organic Traffic</p>

                    <div
                      className="progress"
                      style={{
                        height: 10,
                        background: "rgba(255,255,255,.12)"
                      }}
                    >
                      <div
                        className="progress-bar bg-success"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2">Keyword Ranking</p>

                    <div className="progress" style={{ height: 10 }}>
                      <div
                        className="progress-bar bg-primary"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2">Lead Generation</p>

                    <div className="progress" style={{ height: 10 }}>
                      <div
                        className="progress-bar bg-warning"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>

                  <div
                    className="mt-4 rounded-4 p-3"
                    style={{
                      background: "rgba(34,197,94,.15)",
                      border: "1px solid rgba(34,197,94,.4)"
                    }}
                  >
                    <span className="text-light">
                      🚀 Website traffic increased by
                      <strong className="text-warning"> 320%</strong> in just 6
                      months.
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why SEO */}
      <section
        className="py-4 py-md-5"
        style={{
          background: "linear-gradient(135deg,#030712,#111827,#1e1b4b)"
        }}
      >
        <Container>
          <div className="text-center mb-5">
            <h1 className="fs-1 fw-bold text-white mb-0">
              Why <span className="text-info">Invest</span> in SEO?
            </h1>
            <div className="premium-process-label text-white">
              <span className="label-line"></span>
              <span>
                SEO helps your business attract targeted customers, increase
                sales and build long-term online visibility.
              </span>
              <span className="label-line"></span>
            </div>
          </div>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card
                className="seo-card border-0 h-100 text-center text-white"
                style={{
                  background: "rgba(255,255,255,.08)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,.15)"
                }}
              >
                <Card.Body className="p-4">
                  <FaChartLine size={45} className="text-primary mb-3" />
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
                  <FaBullseye size={45} className="text-danger mb-3" />
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
                  <FaUsers size={45} className="text-success mb-3" />
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
                  <FaCheckCircle size={45} className="text-warning mb-3" />
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

      {/* About Our SEO Services */}
      <section className="py-4 py-md-5 position-relative overflow-hidden">
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <span className="premium-badge">About Our SEO Services</span>

              <h2 className="fs-1 fw-bold mb-2 lh-1">
                Grow Your Business with
                <span className="text-primary d-block">
                  Smart SEO Strategies
                </span>
              </h2>

              <p className="text-secondary fs-5">
                At <strong>AH Growth Agency</strong>, we help businesses achieve
                sustainable Google rankings through customized SEO strategies
                built around your business goals, audience, and local
                competition.
              </p>

              <p className="text-secondary fs-5">
                From keyword research and on-page optimization to technical SEO,
                Local SEO, and content marketing, we create an online presence
                that attracts customers actively searching for your services.
              </p>

              <p className="text-secondary fs-5 mb-3">
                Our focus isn't quick wins—it's long-term organic growth through
                quality content, technical excellence, and continuous
                optimization.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <Button
                  variant="primary"
                  size="md"
                  className="rounded-pill px-3"
                >
                  Free SEO Consultation
                </Button>

                <Button
                  variant="outline-dark"
                  size="md"
                  className="rounded-pill px-3"
                >
                  View SEO Plans
                </Button>
              </div>
            </Col>

            {/* Right Cards */}
            <Col lg={6}>
              <Row className="g-4">
                <Col xs={12} md={6} className="d-flex">
                  <div className="premium-card w-100">
                    <FaSearch className="premium-icon text-primary" />
                    <h5>Keyword Research</h5>
                    <p>High-intent keywords that bring qualified traffic.</p>
                  </div>
                </Col>

                <Col xs={12} md={6} className="d-flex">
                  <div className="premium-card w-100">
                    <FaChartLine className="premium-icon text-success" />
                    <h5>Technical SEO</h5>
                    <p>Improve speed, indexing & Core Web Vitals.</p>
                  </div>
                </Col>

                <Col xs={12} md={6} className="d-flex">
                  <div className="premium-card w-100">
                    <FaBullseye className="premium-icon text-danger" />
                    <h5>Local SEO</h5>
                    <p>Dominate Google Maps and local search results.</p>
                  </div>
                </Col>

                <Col xs={12} md={6} className="d-flex">
                  <div className="premium-card w-100">
                    <FaCheckCircle className="premium-icon text-warning" />
                    <h5>Content Marketing</h5>
                    <p>Build authority with high-quality SEO content.</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose AH Growth Agency */}
      <section
        className="py-4 py-md-5 position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#020617,#0f172a,#1e293b)"
        }}
      >
        {/* Background Glow */}
        <div className="seo-glow seo-glow-left"></div>
        <div className="seo-glow seo-glow-right"></div>

        <Container>
          <div className="text-center mb-5">
            {/* <Badge
              bg=""
              className="px-3 py-2 rounded-pill"
              style={{
                background: "rgba(37,99,235,.15)",
                color: "#60a5fa",
                border: "1px solid rgba(96,165,250,.4)"
              }}
            >
              WHY CHOOSE US
            </Badge> */}

            <h1 className="fs-1 fw-bold text-white mb-0">
              Why Choose
              <span
                style={{
                  background: "linear-gradient(90deg,#3b82f6,#06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                {" "}
                AH Growth Agency?
              </span>
            </h1>
            <div className="premium-process-label text-white">
              <span className="label-line"></span>
              <span>Trusted SEO Agency in Dhanbad for Growing Businesses</span>
              <span className="label-line"></span>
            </div>
          </div>

          <Row className="g-4">
            {[
              {
                icon: <FaBullseye />,
                title: "Customized SEO strategies for every business",
                text: "Tailor-made SEO campaigns designed around your business goals."
              },

              {
                icon: <FaChartLine />,
                title: "Affordable SEO packages for startups and SMEs",
                text: "Flexible SEO plans for startups, local businesses and SMEs."
              },

              {
                icon: <FaClipboardCheck />,
                title: "Transparent Reporting",
                text: "Receive detailed monthly reports with rankings, traffic and leads."
              },

              {
                icon: <FaShieldAlt />,
                title: "White Hat SEO",
                text: "100% Google-approved SEO practices that deliver sustainable growth."
              },

              {
                icon: <FaMapMarkerAlt />,
                title: "Local SEO Experts",
                text: "Improve your Google Maps visibility and local search rankings."
              },

              {
                icon: <FaUsers />,
                title: "Dedicated SEO Specialists",
                text: "Experienced professionals focused entirely on growing your business."
              },

              {
                icon: <FaSearch />,
                title: "Regular Performance Tracking",
                text: "Track keyword rankings, website traffic and conversions every month."
              },

              {
                icon: <FaCheckCircle />,
                title: "Focus on Long-Term Business Growth",
                text: "Build lasting online visibility that keeps generating quality leads."
              }
            ].map((item, index) => (
              <Col lg={3} md={6} key={index}>
                <div className="choose-card h-100">
                  <div className="choose-icon">{item.icon}</div>

                  <h5 className="text-white fw-bold mt-2">{item.title}</h5>
                  <p className="text-light mt-2">{item.text}</p>

                  <div className="choose-line"></div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= OUR SEO SERVICES ================= */}

      <section
        className="py-4 py-md-5 position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#030712,#111827,#0f172a)"
        }}
      >
        <div className="seo-services-glow left"></div>
        <div className="seo-services-glow right"></div>

        <Container>
          <div className="text-center mb-5">
            {/* <Badge
              className="px-3 py-2 rounded-pill text-white"
              style={{
                background: "rgba(59,130,246,.12)",
                color: "#60a5fa",
                border: "1px solid rgba(59,130,246,.35)"
              }}
            >
              OUR SEO SERVICES
            </Badge> */}

            <h2 className="fs-1 fw-bold text-white mb-0">
              Comprehensive
              <span
                style={{
                  background: "linear-gradient(90deg,#3b82f6,#06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                {" "}
                SEO Solutions
              </span>
            </h2>
            <div className="premium-process-label text-white">
              <span className="label-line"></span>
              <span>
                From technical optimization to content marketing, we provide
                end-to-end SEO services that increase visibility, traffic and
                qualified leads.
              </span>
              <span className="label-line"></span>
            </div>
          </div>

          <Row className="g-4">
            {[
              {
                icon: <FaSearch />,
                title: "Keyword Research",
                desc: "Find profitable, high-intent keywords that your customers actively search for.",
                color: "#2563eb",
                popular: true
              },

              {
                icon: <FaFileAlt />,
                title: "On-Page SEO",
                desc: "Optimize titles, headings, meta tags, images, internal links and content.",
                color: "#14b8a6",
                popular: false
              },

              {
                icon: <FaCog />,
                title: "Technical SEO",
                desc: "Improve website speed, indexing, crawlability and Core Web Vitals.",
                color: "#f59e0b",
                popular: true
              },

              {
                icon: <FaMapMarkedAlt />,
                title: "Local SEO",
                desc: "Dominate Google Maps, Business Profile and local search rankings.",
                color: "#8b5cf6",
                popular: false
              },

              {
                icon: <FaPenNib />,
                title: "Content Marketing",
                desc: "Publish SEO-friendly blogs and landing pages that generate qualified leads.",
                color: "#ef4444",
                popular: true
              },

              {
                icon: <FaLink />,
                title: "Link Building",
                desc: "Build high-authority backlinks that improve rankings and domain authority.",
                color: "#22c55e",
                popular: false
              }
            ].map((item, index) => (
              <Col lg={4} md={6} key={index}>
                <div className="service-premium-card h-100">
                  {item.popular && (
                    <span className="popular-badge">Popular</span>
                  )}

                  <div
                    className="service-icon"
                    style={{
                      background: item.color
                    }}
                  >
                    {item.icon}
                  </div>

                  <h4 className="text-white fw-bold mt-4">{item.title}</h4>

                  <p className="text-light mt-3">{item.desc}</p>

                  <ul className="service-list">
                    <li>
                      <FaCheckCircle />
                      Premium Optimization
                    </li>

                    <li>
                      <FaCheckCircle />
                      Monthly Improvements
                    </li>

                    <li>
                      <FaCheckCircle />
                      Measurable Results
                    </li>
                  </ul>
                  <div className="d-flex justify-content-center justify-content-md-start">
                    <Button
                      variant="outline-light"
                      className="rounded-pill mt-3 px-4 service-btn"
                    >
                      Learn More
                      <FaArrowRight className="ms-2" />
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* ================= SEO PROCESS ================= */}

      <section
        className="py-4 py-md-5 position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#020617,#0f172a,#111827)"
        }}
      >
        <div className="timeline-glow left"></div>
        <div className="timeline-glow right"></div>

        <Container>
          <div className="text-center mb-5">
            <Badge
              className="px-3 py-2 rounded-pill text-white"
              style={{
                background: "rgba(59,130,246,.12)",
                color: "#60a5fa",
                border: "1px solid rgba(59,130,246,.35)"
              }}
            >
              SEO PROCESS
            </Badge>

            <h2 className="fs-1 fw-bold text-white mb-0">
              How We
              <span
                style={{
                  background: "linear-gradient(90deg,#3b82f6,#06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                {" "}
                Rank Your Website
              </span>
            </h2>

            <div className="premium-process-label text-white">
              <span className="label-line"></span>
              <span>
                Our proven SEO workflow focuses on technical excellence, content
                quality and measurable growth to help your business achieve
                long-term rankings.
              </span>
              <span className="label-line"></span>
            </div>
          </div>

          <div className="seo-timeline">
            {[
              {
                no: "01",
                icon: <FaSearch />,
                title: "Website SEO Audit",
                desc: "Comprehensive website audit to uncover technical issues, SEO errors and growth opportunities."
              },

              {
                no: "02",
                icon: <FaKey />,
                title: "Keyword Research",
                desc: "Identify high-converting keywords based on search volume, competition and user intent."
              },

              {
                no: "03",
                icon: <FaChartBar />,
                title: "Competitor Analysis",
                desc: "Analyze competitors to discover ranking opportunities and winning SEO strategies."
              },

              {
                no: "04",
                icon: <FaCog />,
                title: "SEO Optimization",
                desc: "Optimize content, website structure, technical SEO and user experience."
              },

              {
                no: "05",
                icon: <FaPenFancy />,
                title: "Content Strategy",
                desc: "Create valuable SEO content that builds topical authority and attracts qualified visitors."
              },

              {
                no: "06",
                icon: <FaChartLine />,
                title: "Monthly Reporting",
                desc: "Track rankings, traffic, leads and ROI while continuously improving campaign performance."
              }
            ].map((item, index) => (
              <div
                className={`timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                key={index}
              >
                <div className="timeline-number">{item.no}</div>

                <div className="timeline-card">
                  <div className="timeline-icon">{item.icon}</div>

                  <h4 className="text-white fw-bold mt-3">{item.title}</h4>

                  <p className="text-light mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= BENEFITS OF SEO ================= */}

      <section
        className="py-4 py-md-5 position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#030712,#111827,#1e293b)"
        }}
      >
        <div className="benefit-glow left"></div>
        <div className="benefit-glow right"></div>

        <Container>
          <div className="text-center mb-5">
            <Badge
              className="px-3 py-2 rounded-pill text-white"
              style={{
                background: "rgba(59,130,246,.12)",
                color: "#60a5fa",
                border: "1px solid rgba(59,130,246,.35)"
              }}
            >
              BENEFITS OF SEO
            </Badge>
            <h2 className="fs-1 fw-bold text-white mb-0">
              Why Invest In
              <span
                style={{
                  background: "linear-gradient(90deg,#3b82f6,#06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                {" "}
                SEO?
              </span>
            </h2>
            <div className="premium-process-label text-white">
              <span className="label-line"></span>
              <span>
                Search Engine Optimization helps businesses generate consistent
                traffic, quality leads and long-term revenue without depending
                entirely on paid advertising.
              </span>
              <span className="label-line"></span>
            </div>
          </div>

          <Row className="g-4">
            {[
              {
                icon: <FaChartLine />,
                number: "300%",
                title: "Organic Traffic",
                text: "Drive more qualified visitors from Google search.",
                color: "#2563eb"
              },

              {
                icon: <FaGoogle />,
                number: "Top",
                title: "Google Rankings",
                text: "Improve your rankings for valuable keywords.",
                color: "#22c55e"
              },

              {
                icon: <FaBullseye />,
                number: "95%",
                title: "Quality Leads",
                text: "Reach people already searching for your services.",
                color: "#ef4444"
              },

              {
                icon: <FaAward />,
                number: "100%",
                title: "Brand Trust",
                text: "Build authority and credibility with customers.",
                color: "#8b5cf6"
              },

              {
                icon: <FaMoneyBillWave />,
                number: "60%",
                title: "Lower Ad Costs",
                text: "Reduce dependency on expensive paid campaigns.",
                color: "#14b8a6"
              },

              {
                icon: <FaTree />,
                number: "24/7",
                title: "Long-Term Growth",
                text: "Generate traffic continuously even while you sleep.",
                color: "#16a34a"
              },

              {
                icon: <FaCoins />,
                number: "ROI",
                title: "Higher Returns",
                text: "SEO provides one of the highest marketing ROIs.",
                color: "#f59e0b"
              },

              {
                icon: <FaRocket />,
                number: "Fast",
                title: "Better UX",
                text: "Improve speed, usability and customer experience.",
                color: "#06b6d4"
              }
            ].map((item, index) => (
              <Col lg={3} md={6} key={index}>
                <div className="benefit-card">
                  <div
                    className="benefit-icon"
                    style={{
                      background: item.color
                    }}
                  >
                    {item.icon}
                  </div>

                  <h2 className="benefit-number">{item.number}</h2>

                  <h5 className="fw-bold text-white">{item.title}</h5>

                  <p className="text-light">{item.text}</p>

                  <div className="benefit-arrow">
                    <FaArrowTrendUp />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section
        className="seo-cta-section position-relative overflow-hidden py-4 py-md-5"
        style={{
          background: "linear-gradient(135deg,#020617,#0f172a,#1e293b)"
        }}
      >
        {/* Background Glow */}
        <div className="cta-blob cta-blob-1"></div>
        <div className="cta-blob cta-blob-2"></div>

        <Container>
          <div className="text-center">
            <span className="cta-badge">🚀 FREE SEO CONSULTATION</span>

            <h2 className="fs-1 fw-bold text-white lh-1 mt-1 mb-0">
              Ready to Grow Your Business
              <span className="gradient-text d-block">
                With Professional SEO?
              </span>
            </h2>

            <p
              className="lead text-light mx-auto mb-3"
              style={{ maxWidth: 900 }}
            >
              Partner with <strong>AH Growth Agency</strong>, the trusted SEO
              Agency in Dhanbad, and start generating more traffic, quality
              leads and long-term business growth with customized SEO
              strategies.
            </p>

            {/* Trust Badges */}

            <Row className="g-3 justify-content-center mb-3">
              {[
                "Free Website SEO Audit",
                "Custom SEO Strategy",
                "100% White Hat SEO",
                "Monthly Reporting"
              ].map((item, index) => (
                <Col lg={3} md={6} key={index}>
                  <div className="trust-card">
                    <FaCheckCircle className="me-2 text-success" />

                    {item}
                  </div>
                </Col>
              ))}
            </Row>

            {/* Stats */}

            <Row className="justify-content-center g-3 mb-3">
              <Col md={3} xs={6}>
                <div className="cta-stat">
                  <FaRocket />
                  <h3>300%</h3>
                  <p>Traffic Growth</p>
                </div>
              </Col>

              <Col md={3} xs={6}>
                <div className="cta-stat">
                  <FaGoogle />
                  <h3>Top</h3>
                  <p>Google Rankings</p>
                </div>
              </Col>

              <Col md={3} xs={6}>
                <div className="cta-stat">
                  <FaChartLine />
                  <h3>24/7</h3>
                  <p>Organic Leads</p>
                </div>
              </Col>

              <Col md={3} xs={6}>
                <div className="cta-stat">
                  <FaUsers />
                  <h3>100%</h3>
                  <p>Client Focus</p>
                </div>
              </Col>
            </Row>

            {/* Buttons */}

            <div className="d-flex flex-wrap justify-content-center gap-3 pt-md-3">
              <Button
                size="md"
                className="cta-primary-btn px-3"
                onClick={() => navigate("/audit")}
              >
                Get Your Free SEO Audit
                <FaArrowRight className="ms-2" />
              </Button>

              <Button
                variant="outline-light"
                size="md"
                className="rounded-pill px-3"
              >
                View SEO Packages
              </Button>
            </div>

            <div className="mt-3">
              <h4 className="text-warning mb-2">⭐⭐⭐⭐⭐</h4>

              <p className="text-light mb-0">
                Trusted by Growing Businesses Across India
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SEO;
