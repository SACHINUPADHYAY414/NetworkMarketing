import React from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import WhyChooseSection from "../../components/whyChooseSection/WhyChooseSection";
import Laptop from "../../assets/Laptop.png";
import { WhyChooseData } from "../../string/Data";
import {
  FaGoogle,
  FaSearchLocation,
  FaMapMarkedAlt,
  FaChartLine,
  FaSearch,
  FaLaptopCode,
  FaComments,
  FaTools,
  FaMapMarkerAlt,
  FaClipboardCheck,
  FaUserSecret,
  FaStar
} from "react-icons/fa";
import WebServiceCard from "../../components/webServiceCard/WebServiceCard";
import Process from "../../components/process/Process";
import { BsCheckCircleFill } from "react-icons/bs";
import LSOImage from "../../assets/Lso.png";

const LocalSEO = () => {
  const LocalSeoData = [
    {
      id: 1,
      icon: <FaGoogle />,
      color: "primary",
      title: "Google Business Profile Optimization",
      desc: "Optimize your Google Business Profile to improve visibility in Google Search and Google Maps."
    },
    {
      id: 2,
      icon: <FaSearch />,
      color: "success",
      title: "Local Keyword Research",
      desc: "Identify location-specific keywords your customers are searching for to increase local visibility."
    },
    {
      id: 3,
      icon: <FaLaptopCode />,
      color: "warning",
      title: "On-Page Local SEO",
      desc: "Optimize website content, title tags, meta descriptions, headings, and location pages for better rankings."
    },
    {
      id: 4,
      icon: <FaMapMarkedAlt />,
      color: "danger",
      title: "Local Citation Building",
      desc: "Create and manage consistent business listings across trusted online directories."
    },
    {
      id: 5,
      icon: <FaComments />,
      color: "info",
      title: "Online Reputation Management",
      desc: "Collect and manage customer reviews to strengthen trust and improve local search rankings."
    },
    {
      id: 6,
      icon: <FaMapMarkerAlt />,
      color: "secondary",
      title: "Location-Based Content Marketing",
      desc: "Create locally relevant content that attracts nearby customers and supports long-term SEO growth."
    },
    {
      id: 7,
      icon: <FaTools />,
      color: "dark",
      title: "Technical SEO",
      desc: "Improve website speed, mobile responsiveness, crawlability, indexing, and overall website performance."
    }
  ];

  const processData = [
    {
      id: 1,
      no: "01",
      icon: <FaClipboardCheck />,
      bg: "primary",
      title: "Local SEO Audit",
      desc: "We analyze your website, Google Business Profile, and local search presence to identify improvement opportunities."
    },
    {
      id: 2,
      no: "02",
      icon: <FaUserSecret />,
      bg: "success",
      title: "Competitor Research",
      desc: "Study local competitors to discover ranking opportunities and build a stronger SEO strategy."
    },
    {
      id: 3,
      no: "03",
      icon: <FaSearch />,
      bg: "warning",
      title: "Keyword Strategy",
      desc: "Find the best location-based keywords that your target customers are actively searching for."
    },
    {
      id: 4,
      no: "04",
      icon: <FaTools />,
      bg: "danger",
      title: "Optimization",
      desc: "Optimize your website, Google Business Profile, and business listings for maximum local visibility."
    },
    {
      id: 5,
      no: "05",
      icon: <FaStar />,
      bg: "info",
      title: "Review Strategy",
      desc: "Help you build a positive online reputation through genuine customer reviews and ratings."
    },
    {
      id: 6,
      no: "06",
      icon: <FaChartLine />,
      bg: "dark",
      title: "Monthly Reporting",
      desc: "Track keyword rankings, website traffic, Google Business Profile performance, and lead growth every month."
    }
  ];

  const benefits = [
    "Increase visibility in Google Maps",
    "Rank higher in local search results",
    "Generate more phone calls",
    "Attract nearby customers",
    "Improve online reputation",
    "Increase website traffic",
    "Build trust with local audiences",
    "Achieve long-term business growth"
  ];

  return (
    <div>
      <section className="services-section py-3 py-md-4 px-2">
        <div className="container position-relative">
          <Row className="align-items-center">
            <Col md={7}>
              <span className="text-white fst-italic">
                📍 Get Found by Local Customers
              </span>

              <h1 className="fs-1 fw-bold text-white lh-1 d-md-none text-center">
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
              <p className="lead text-light mt-2 text-center text-md-start">
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

      <section className="smm-hero py-3" style={{ minHeight: "90vh" }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <span className="d-block fst-italic fw-semibold text-info text-center text-md-start">
                📍 About Local SEO
              </span>
              <h2 className="localSeoAbout-heading mb-3 text-center text-lg-start">
                Grow Your Business with <br />
                <span className="localSeoAbout-gradient">
                  Targeted Local SEO
                </span>
              </h2>

              <p className="localSeoAbout-text text-center text-lg-start">
                Local SEO helps businesses appear in search results when
                customers look for products or services in their area. Whether
                you own a restaurant, clinic, retail store, coaching center, or
                service-based business, having a strong local presence can
                significantly increase customer inquiries and walk-ins.
              </p>

              <p className="localSeoAbout-text text-center text-lg-start">
                At <strong>AH Growth Agency</strong>, we provide
                <strong> Local SEO Services in Dhanbad</strong> designed to
                improve your visibility in local search results. We optimize
                your Google Business Profile, website, local citations, and
                location-specific content to help your business reach customers
                who are actively searching for your services.
              </p>

              <p className="localSeoAbout-text text-center text-lg-start">
                As a growing
                <strong> Digital Marketing Company in Dhanbad</strong>, we focus
                on sustainable SEO strategies that help businesses build trust,
                improve rankings, attract quality leads, and achieve long-term
                growth.
              </p>
            </Col>

            {/* Right Side */}
            <Col lg={6}>
              <Row className="g-3">
                <Col md={6}>
                  <Card className="choose-card h-100">
                    <div className="localSeoAbout-icon color-primary-subtle">
                      <FaGoogle />
                    </div>

                    <h5>Google Business Profile</h5>

                    <p>
                      Optimize your Google Business Profile to improve your
                      visibility on Google Search and Maps.
                    </p>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card className="choose-card h-100">
                    <div className="localSeoAbout-icon color-success-subtle">
                      <FaSearchLocation />
                    </div>

                    <h5>Local Search Visibility</h5>

                    <p>
                      Reach nearby customers who are actively searching for your
                      products and services.
                    </p>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card className="choose-card h-100">
                    <div className="localSeoAbout-icon color-danger-subtle">
                      <FaMapMarkedAlt />
                    </div>

                    <h5>Local Citations</h5>

                    <p>
                      Build accurate business listings across trusted online
                      directories to improve credibility.
                    </p>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card className="choose-card h-100">
                    <div className="localSeoAbout-icon color-warning-subtle">
                      <FaChartLine />
                    </div>

                    <h5>Long-Term Growth</h5>

                    <p>
                      White-hat SEO strategies that generate sustainable
                      rankings, leads, and business growth.
                    </p>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
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

      <section className="smm-section py-4 text-center">
        <Container>
          <h2 className="fw-bold text-white lh-1 mb-0">
            Our Local
            <span className="gradient-text"> SEO </span>
            Services
          </h2>

          <p>Complete Local SEO Solutions</p>

          <div className="row g-3 mt-2">
            {LocalSeoData.map((service) => (
              <div className="col-md-6 col-lg-3" key={service.id}>
                <WebServiceCard service={service} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="smm-section py-4">
        <Container>
          <h2 className="fw-bold text-white lh-1 mb-0 text-center">
            Our Local
            <span className="gradient-text"> SEO </span>
            Process
          </h2>

          <p className="mb-4 text-center">
            How We Improve Your Local Visibility
          </p>

          <Process data={processData} />
        </Container>
      </section>

      <section className="smm-benefits py-4">
        <div className="container">
          <div className="text-center mb-3 mb-md-4">
            <h2 className="fs-1 fw-bold text-white mb-0">
              Businesses
              <span className="text-warning"> We Help</span>
            </h2>

            <p className="text-white mx-auto" style={{ maxWidth: "650px" }}>
              Local SEO for Every Industry
            </p>
          </div>

          <div className="row g-3">
            {[
              "Restaurants & Cafés",
              "Healthcare Clinics",
              "Educational Institutes",
              "Real Estate Agencies",
              "Retail Stores",
              "Salons & Spas",
              "Gyms & Fitness Centers",
              "Home Service Providers",
              "Professional Services",
              "Startups & Small Businesses"
            ].map((item, index) => (
              <div className="col-12 col-md-6 col-lg-3" key={index}>
                <div className="d-flex align-items-center mx-auto w-100 px-4">
                  <div className="benefit-icon me-3">
                    <i className="bi bi-check2"></i>
                  </div>

                  <p className="mb-0 fw-semibold text-white">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="smm-benefits why-local-seo-section py-4">
        <div className="container">
          <div className="row align-items-center g-1 g-md-4">
            {/* LEFT VISUAL */}
            <div className="col-lg-5 order-2 order-lg-1">
              <div className="why-seo-visual position-relative">
                {/* Main SEO Card */}
                <div className="why-seo-main-card rounded-4 shadow-lg">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="small fw-bold text-info">
                      LOCAL VISIBILITY
                    </span>

                    <span className="badge rounded-pill bg-success-subtle text-success">
                      ● Active
                    </span>
                  </div>

                  {/* Search */}
                  <div className="why-seo-search d-flex align-items-center gap-2 rounded-3 mt-4 p-3">
                    <span className="fs-5 text-info">⌕</span>

                    <span className="small text-white-50">
                      Local Business Near Me
                    </span>
                  </div>

                  {/* Ranking 1 */}
                  <div className="why-seo-result d-flex align-items-center gap-3 rounded-3 mt-3 p-3">
                    <div className="why-seo-rank-icon">1</div>

                    <div className="flex-grow-1">
                      <strong className="d-block text-white small">
                        Your Business
                      </strong>

                      <small className="text-white-50">
                        Google Search & Maps
                      </small>
                    </div>

                    <strong className="text-info">#1</strong>
                  </div>

                  {/* Ranking 2 */}
                  <div className="why-seo-result d-flex align-items-center gap-3 rounded-3 mt-2 p-3">
                    <div className="why-seo-rank-icon inactive">2</div>

                    <div className="flex-grow-1">
                      <strong className="d-block text-white small">
                        Nearby Business
                      </strong>

                      <small className="text-white-50">
                        Local Search Result
                      </small>
                    </div>

                    <strong className="text-white-50">#2</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="col-lg-7 order-1 order-lg-2">
              <div className="ps-lg-3">
                <h2 className="fs-1 fw-bold text-white">
                  Why Local SEO
                  <span className="text-info"> Matters</span>
                </h2>

                <p className="lead text-white-50 lh-sm-lg">
                  Most customers search online before choosing a local business.
                  Appearing in Google Search and Google Maps makes it easier for
                  people to find your services, contact your business, and visit
                  your location.
                </p>

                <p className="text-white-50 lh-sm-lg mt-2">
                  With our Local SEO Services in Dhanbad, we help your business
                  become more visible to customers who are ready to take action.
                  From optimizing your Google Business Profile to improving your
                  website's local search presence, we focus on strategies that
                  support long-term business growth.
                </p>

                <div className="row g-3 mt-1">
                  <div className="col-sm-6">
                    <div className="why-seo-feature d-flex align-items-center gap-2">
                      <span>✓</span>
                      Better Local Visibility
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="why-seo-feature d-flex align-items-center gap-2">
                      <span>✓</span>
                      More Local Customers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="growth-cta py-4 py-md-5">
        <div className="container">
          <div className="row align-items-center text-center text-md-start g-3">
            <div className="col-12 col-md-6">
              <h2 className="fs-1 fw-bold text-white lh-1">
                Ready to Grow Your
                <span className="text-info"> Local Business?</span>
              </h2>
              <div className="d-block d-md-none text-center">
                <img
                  src={LSOImage}
                  alt="Digital Marketing"
                  className="img-fluid"
                />
              </div>

              <p className="text-light opacity-75 fs-5 mt-0 mt-md-3">
                Partner with{" "}
                <strong className="text-white">AH Growth Agency</strong>, and
                improve your local search visibility with our professional Local
                SEO Services in Dhanbad. Let's help more customers discover your
                business on Google Search and Google Maps.
              </p>

              <div className="d-grid d-sm-block">
                <button className="btn btn-info rounded-pill mt-3 px-4 py-2">
                  Get Your Free Local SEO Audit
                </button>
              </div>
            </div>

            {/* DESKTOP IMAGE */}
            <div className="col-md-6 text-center d-none d-md-block">
              <div className="position-relative">
                <img
                  src={LSOImage}
                  alt="Digital Marketing"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocalSEO;
