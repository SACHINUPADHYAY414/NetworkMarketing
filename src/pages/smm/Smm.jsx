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
  FaBullhorn,
  FaPinterest,
  FaTwitter
} from "react-icons/fa";
import Ludo from "../../assets/Ludo.png";

const Smm = () => {
  const stats = [
    {
      number: "50+",
      title: "Businesses Supported"
    },
    {
      number: "100+",
      title: "Campaigns Managed"
    },
    {
      number: "98%",
      title: "Client Satisfaction"
    },
    {
      number: "24/7",
      title: "Customer Support"
    }
  ];

  const chooseCards = [
    {
      icon: <FaBullhorn />,
      title: "Customized Social Media Strategies",
      text: "Social media plans designed according to your business goals."
    },

    {
      icon: <FaHeart />,
      title: "Creative content tailored to your audience",
      text: "Engaging reels, graphics, videos and captions."
    },

    {
      icon: <FaUsers />,
      title: "Audience Growth",
      text: "Build strong relationships with your target audience."
    },

    {
      icon: <FaChartLine />,
      title: "Performance Growth",
      text: "Data driven campaigns for better ROI."
    },

    {
      icon: <FaWhatsapp />,
      title: "Dedicated social media specialists",
      text: "Regular updates and transparent reporting."
    },

    {
      icon: <FaArrowRight />,
      title: "Affordable plans for startups and SMEs",
      text: "Flexible packages for startups and brands."
    },
    {
      icon: "",
      title: "Focus on engagement, leads, and ROI"
    }
  ];

  const services = [
    {
      icon: <FaChartLine />,
      title: "Social Media Strategy",
      discription:
        "We develop customized strategies based on your business goals, target audience, and industry."
    },

    {
      icon: "",
      title: "Content Creation",
      discription:
        "Engaging graphics, reels, videos, carousels, and captions designed to increase reach and engagement."
    },
    {
      icon: <FaFacebookF />,
      title: "Facebook Marketing",
      discription:
        "Reach the right audience with optimized Facebook campaigns that build brand awareness and generate leads."
    },
    {
      icon: <FaInstagram />,
      title: "Instagram Marketing",
      discription:
        "Grow your Instagram presence through creative posts, stories, reels, influencer collaborations & community engagement."
    },
    {
      icon: <FaLinkedinIn />,
      title: "LinkedIn Marketing",
      discription:
        "Build credibility, generate B2B leads, and strengthen your professional brand with LinkedIn marketing."
    },

    {
      icon: <FaBullhorn />,
      title: "Social Media Advertising",
      discription:
        "Run targeted Facebook, Instagram, and LinkedIn Ads that maximize conversions while optimizing your advertising budget."
    },

    {
      icon: <FaUsers />,
      title: "Community Management",
      discription:
        "We respond to comments, messages, and customer interactions to help you build stronger relationships with your audience."
    },
    {
      icon: <FaChartLine />,
      title: "Performance Tracking",
      discription:
        "Receive detailed monthly reports showing engagement, reach, follower growth, leads, and campaign performance."
    }
  ];

  const process = [
    {
      title: "Social Media Audit",
      discription:
        "We evaluate your current profiles and identify growth opportunities."
    },
    {
      title: "Strategy Development",
      discription:
        "Create a customized social media plan based on your business objectives."
    },
    {
      title: "Content Planning",
      discription:
        "Develop a monthly content calendar with engaging posts, reels, and campaigns."
    },
    {
      title: "Design & Content Creation",
      discription:
        "Create visually appealing graphics and compelling copy that reflect your brand."
    },
    {
      title: "Campaign Execution",
      discription:
        "Publish content consistently and launch targeted advertising campaigns."
    },
    { title: "Optimization & Reporting", discription: "" }
  ];

  const platforms = [
    {
      icon: <FaFacebookF />,
      name: "Facebook",
      color: "#1877F2"
    },

    {
      icon: <FaInstagram />,
      name: "Instagram",
      color: "#E1306C"
    },

    {
      icon: <FaLinkedinIn />,
      name: "LinkedIn",
      color: "#0A66C2"
    },

    {
      icon: <FaYoutube />,
      name: "YouTube",
      color: "#FF0000"
    },
    {
      icon: <FaTwitter />,
      name: "X (Twitter)",
      color: "#ffff"
    },
    {
      icon: <FaPinterest />,
      name: "Pinterest",
      color: "#FF0000"
    }
  ];

  return (
    <>
      <section className="smm-hero">
        <Container>
          <Row className="align-items-center">
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

            <Col md={5} className="text-center mt-5 d-none d-md-flex mt-lg-0">
              <img
                src={Ludo}
                alt="Social Media Marketing"
                className="img-fluid hero-img"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= ABOUT ================= */}

      <section className="smm-section py-4">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
              <div className="text-center">
                <h2 className="display-5 fw-bold text-white mb-0">
                  About Our{" "}
                  <span className="text-warning"> Social Media Marketing </span>{" "}
                  Services
                </h2>
                <h4 className="text-secondary">
                  Build Your Brand, Connect with Your Audience, and Grow Your
                  Business
                </h4>
                <p className="text-light">
                  Social media is more than just posting content it's about
                  building relationships and driving business growth. At AH
                  Growth Agency, we help businesses create a powerful online
                  presence through customized social media strategies that align
                  with their goals.
                </p>

                <p className="text-secondary">
                  As a trusted Social Media Marketing Agency in Dhanbad, we
                  manage your social media platforms with creative content,
                  audience engagement, and performance-driven campaigns. Whether
                  you're a startup looking to establish your brand or an
                  established business aiming to increase sales, we create
                  strategies that deliver measurable results.{" "}
                </p>
              </div>
            </Col>
          </Row>

          <Row className="text-center mt-3 mb-3">
            <Col>
              <h2 className="text-white fw-bold mb-0">
                Why Choose
                <span className="text-info"> AH Growth Agency?</span>
              </h2>

              <p className="text-white">
                Your Trusted Social Media Marketing Agency in Dhanbad.
              </p>
            </Col>
          </Row>

          <Row className="g-3">
            {chooseCards.map((item, index) => (
              <Col lg={3} md={6} key={index}>
                <Card className="choose-card">
                  <div className="choose-icon">{item.icon}</div>
                  <h5 className="text-warning">{item.title}</h5>
                  <p>{item.text}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= SERVICES ================= */}

      <section className="smm-section py-4">
        <Container>
          <Row className="text-center mb-2 mb-md-3">
            <Col>
              <h2 className="display-5 fw-bold text-white mb-0">
                Our Social Media
                <span
                  style={{
                    background: "linear-gradient(90deg,#3b82f6,#06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  {" "}
                  Marketing Services{" "}
                </span>
              </h2>

              <p className="text-white lead">
                Everything You Need to Grow on Social Media
              </p>
            </Col>
          </Row>

          <Row className="g-3">
            {services.map((service, index) => (
              <Col lg={6} md={6} key={index}>
                <Card className="service-card text-center">
                  <div className="service-icon">{service.icon}</div>
                  <h5 className="text-warning">{service.title}</h5>
                  <p>{service.discription}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= PLATFORMS ================= */}

      <section className="smm-section py-4">
        <Container>
          <Row className="text-center mb-3">
            <Col>
              <h2 className="display-5 fw-bold text-white mb-0">
                {" "}
                Platforms <span className="text-warning"> We </span> Manage
              </h2>

              <p className="text-white lead">
                Social media channels where we grow brands.
              </p>
            </Col>
          </Row>

          <Row className="g-3 justify-content-center text-center">
            {platforms.map((platform, index) => (
              <Col lg={2} md={4} xs={6} key={index}>
                <Card className="platform-card">
                  <div
                    style={{
                      color: platform.color
                    }}
                    className="platform-icon mb-1"
                  >
                    {platform.icon}
                  </div>

                  <h6>{platform.name}</h6>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= PROCESS ================= */}

      <section className="smm-section py-4">
        <Container>
          <Row className="text-center mb-3">
            <Col>
              <h2 className="display-5 fw-bold text-white mb-0">
                {" "}
                Our <span className="text-warning"> Process </span>{" "}
              </h2>

              <p className="text-white lead">
                How We Grow Your Social Media Presence How We Build Your Social
                Media Growth
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {process.map((step, index) => (
              <Col lg={4} md={6} key={index}>
                <div className="process-card">
                  <div className="process-number">{index + 1}</div>
                  <h5 className="text-warning">{step.title}</h5>
                  <p>{step.discription}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= Benefits of Social Media Marketing ================= */}
      {/* 
      <section className="smm- py-4">
        <Container></Container>
      </section> */}
    </>
  );
};

export default Smm;
