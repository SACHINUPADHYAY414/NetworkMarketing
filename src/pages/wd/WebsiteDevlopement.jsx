import React from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";

import {
  FaLaptopCode,
  FaShoppingCart,
  FaWordpress,
  FaBullseye,
  FaTools,
  FaClipboardList,
  FaPencilRuler,
  FaCode,
  FaSearch,
  FaRocket,
  FaHeadset
} from "react-icons/fa";

import {
  BsCheckCircleFill,
  BsArrowRight,
  BsGlobe,
  BsLightningChargeFill,
  BsShieldCheck,
  BsPhone
} from "react-icons/bs";

import WD from "../../assets/wd.png";

import WhyChooseSection from "../../components/whyChooseSection/WhyChooseSection";
import WebServiceCard from "../../components/webServiceCard/WebServiceCard";
import Process from "../../components/process/Process";
import { websiteDevelopementData } from "../../string/Data";

const HeroSection = () => {
  const services = [
    {
      id: "01",
      icon: <FaLaptopCode />,
      color: "#00D4FF",
      title: "Business Website Development",
      desc: "Professional websites that showcase your services and help convert visitors into customers."
    },
    {
      id: "02",
      icon: <FaShoppingCart />,
      color: "#FF9F1C",
      title: "eCommerce Website Development",
      desc: "Build secure and scalable online stores with seamless shopping experiences."
    },
    {
      id: "03",
      icon: <FaWordpress />,
      color: "#21759B",
      title: "WordPress Development",
      desc: "Custom WordPress websites that are easy to manage, fast, and SEO-friendly."
    },
    {
      id: "04",
      icon: <FaBullseye />,
      color: "#9B5DE5",
      title: "Landing Page Design",
      desc: "High-converting landing pages designed for lead generation and marketing campaigns."
    },
    {
      id: "05",
      icon: <FaLaptopCode />,
      color: "#06D6A0",
      title: "Website Redesign",
      desc: "Give your existing website a modern look with improved speed, usability, and performance."
    },
    {
      id: "06",
      icon: <FaTools />,
      color: "#EF476F",
      title: "Website Maintenance",
      desc: "Regular updates, security monitoring, backups, and technical support to keep your website running smoothly."
    }
  ];
  const processData = [
    {
      id: 1,
      no: "01",
      icon: <FaClipboardList />,
      title: "Discovery & Planning",
      desc: "We understand your business goals, audience, and project requirements."
    },
    {
      id: 2,
      no: "02",
      icon: <FaPencilRuler />,
      title: "UI/UX Design",
      desc: "Create clean, modern, and user-friendly website designs."
    },
    {
      id: 3,
      no: "03",
      icon: <FaCode />,
      title: "Website Development",
      desc: "Develop a responsive, fast, and secure website using the latest technologies."
    },
    {
      id: 4,
      no: "04",
      icon: <FaSearch />,
      title: "SEO Optimization",
      desc: "Optimize your website structure, metadata, and performance for better search visibility."
    },
    {
      id: 5,
      no: "05",
      icon: <FaRocket />,
      title: "Testing & Launch",
      desc: "Test functionality, responsiveness, and speed before launching your website."
    },
    {
      id: 6,
      no: "06",
      icon: <FaHeadset />,
      title: "Ongoing Support",
      desc: "Provide maintenance, updates, and continuous improvements after launch."
    }
  ];

  const featuresData = [
    {
      id: 1,
      title: "Responsive Design",
      desc: "Looks perfect on desktop, tablet and mobile devices."
    },
    {
      id: 2,
      title: "SEO-Friendly Structure",
      desc: "Built with clean code and optimized for search engines."
    },
    {
      id: 3,
      title: "Fast Loading Speed",
      desc: "Lightning-fast websites for a better user experience."
    },
    {
      id: 4,
      title: "Mobile Optimization",
      desc: "Optimized layouts for every screen size."
    },
    {
      id: 5,
      title: "Secure SSL Integration",
      desc: "Keep your visitors safe with HTTPS security."
    },
    {
      id: 6,
      title: "Contact Forms",
      desc: "Easy-to-use forms for lead generation."
    },
    {
      id: 7,
      title: "Google Maps Integration",
      desc: "Help customers find your business instantly."
    },
    {
      id: 8,
      title: "WhatsApp Chat Integration",
      desc: "Enable instant communication with visitors."
    },
    {
      id: 9,
      title: "Easy Content Management",
      desc: "Update website content without technical knowledge."
    },
    {
      id: 10,
      title: "Analytics Setup",
      desc: "Track visitors and business performance."
    },
    {
      id: 11,
      title: "Performance Optimization",
      desc: "Optimized code and assets for maximum speed."
    },
    {
      id: 12,
      title: "Scalable Architecture",
      desc: "Future-ready website that grows with your business."
    }
  ];

  const benefits = [
    { id: 1, title: "Build Trust & Credibility" },
    { id: 2, title: "24/7 Online Presence" },
    { id: 3, title: "Generate More Leads" },
    { id: 4, title: "Improve Google Rankings" },
    { id: 5, title: "Increase Sales & Conversions" },
    { id: 6, title: "Mobile Friendly Experience" }
  ];
  return (
    <>
      <section className="wd-hero position-relative overflow-hidden py-3 py-md-5 px-2">
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
              <h1 className="display-6 fw-bold text-white lh-1 d-none d-md-block">
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
              <div className="premium-process-label text-white text-center text-lg-start">
                <span className="label-line"></span>
                <span className="mb-0 fst-italic fw-semibold text-white">
                  About Our Website Development Service
                </span>
                <span className="label-line"></span>
              </div>

              <h2 className="display-6 d-none d-md-block fw-bold lh-1">
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

      <section className="services-section py-4">
        <div className="container position-relative">
          <div className="row justify-content-center mb-3">
            <div className="col-lg-8 text-center">
              <h2 className="fs-1 fw-bold d-none d-md-block  text-white mb-0 lh-1">
                Our <span className="text-info">Website Development</span>{" "}
                Services
              </h2>
              <h2 className="fs-1 d-md-none d-block fw-bold text-white mt-2 lh-1">
                Our <span className="text-info">Website Development</span>{" "}
                Services
              </h2>
              <div className="premium-process-label text-white">
                <span className="label-line"></span>
                <span>Complete Website Solutions for Every Business</span>
                <span className="label-line"></span>
              </div>
            </div>
          </div>

          <div className="row g-3">
            {services.map((service) => (
              <div className="col-md-6 col-lg-4" key={service.id}>
                <WebServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-4 py-md-5 position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#020617,#0f172a,#111827)"
        }}
      >
        <div className="timeline-glow left"></div>
        <div className="timeline-glow right"></div>

        <Container>
          <div className="text-center mb-4">
            <h2 className="fs-1 fw-bold text-white mb-md-0 lh-1">
              Our
              <span
                style={{
                  background: "linear-gradient(90deg,#3b82f6,#06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                {" "}
                Development Process
              </span>
            </h2>
            <div className="premium-process-label text-white">
              <span className="label-line"></span>
              <span>How We Build Your Website</span>
              <span className="label-line"></span>
            </div>
          </div>

          <Process data={processData} />
        </Container>
      </section>

      <section className="smm-section py-4">
        <div className="container">
          <div className="text-center mb-3">
            <h2 className="fs-1 d-none d-md-block fw-bold text-white lh-1">
              Everything Your
              <span
                style={{
                  background: "linear-gradient(90deg,#3b82f6,#06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                {" "}
                Business Needs
              </span>
            </h2>
            <h2 className="fs-1 d-md-none d-block fw-bold text-white">
              Everything Your
              <span
                style={{
                  background: "linear-gradient(90deg,#3b82f6,#06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                {" "}
                Business Needs
              </span>
            </h2>
            <div className="premium-process-label text-white">
                <span className="label-line"></span>
            <p className="mx-auto">
              Powerful features designed to help your website perform better,
              rank higher and convert more visitors into customers.
            </p>
              <span className="label-line"></span>
              </div>
          </div>

          <div className="row g-3">
            {featuresData.map((item) => (
              <div className="col-lg-6" key={item.id}>
                <div className="feature-card">
                  <div className="feature-icon d-none d-md-flex">
                    <BsCheckCircleFill className="fs-2 d-none d-md-flex" />
                  </div>

                  <div className="feature-content">
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>

                  <div className="feature-number">
                    {item.id.toString().padStart(2, "0")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="smm-section py-4">
        <div className="container">
          <div className="row align-items-center g-3">
            <div className="col-lg-6">
              <h2 className="fs-1 d-md-block d-none fw-bold text-white lh-1">
                Why Your Business Needs
                <span className="text-info"> a Professional Website</span>
              </h2>
              <h2 className="fs-1 d-md-none d-block fw-bold text-white  text-md-start text-center">
                Why Your Business Needs
                <span className="text-info"> a Professional Website</span>
              </h2>
              <p className="text-white opacity-75 fs-5 mt-0 mt-md-4  text-md-start text-center">
                A professionally designed website builds trust, improves your
                online visibility, and helps customers find your business 24/7.
              </p>

              <p className="text-white opacity-75  text-md-start text-center">
                As a leading Website Development Company in Dhanbad, we create
                websites that not only represent your brand but also support
                your marketing efforts through SEO, lead generation, and
                user-friendly design.
              </p>

              <p className="text-white opacity-75  text-md-start text-center">
                Whether you're launching a new business or expanding an existing
                one, a modern website is one of the most valuable investments
                you can make for long-term growth.
              </p>
            </div>

            <div className="col-lg-6">
              <div className="row g-3">
                {benefits.map((item) => (
                  <div className="col-md-6" key={item.id}>
                    <div className="benefit-card d-flex align-items-center p-3 h-100">
                      <div className="benefit-icon me-3">
                        <BsCheckCircleFill />
                      </div>

                      <h6 className="text-white mb-0 fw-semibold">
                        {item.title}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
