import React from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";

import SEO from "../../assets/SEO.png";

import WhyChooseSection from "../../components/whyChooseSection/WhyChooseSection";

import {
  FaPenNib,
  FaSearch,
  FaIndustry,
  FaLightbulb,
  FaTags,
  FaCalendarAlt,
  FaChartLine,
  FaComments,
  FaLaptopCode,
  FaShareAlt,
  FaEnvelope,
  FaFileAlt,
  FaBoxOpen,
  FaClipboardList,
  FaRocket,
  FaBullhorn,
  FaBullseye,
  FaArrowRight
} from "react-icons/fa";

import WebServiceCard from "../../components/webServiceCard/WebServiceCard";
const ContentCreation = () => {
  const WhyChooseData = [
    {
      icon: FaPenNib,
      title: "Customized Content Strategies",
      text: "Tailored content strategies designed around your brand, target audience, and business objectives."
    },
    {
      icon: FaSearch,
      title: "SEO-Friendly Content Creation",
      text: "Search-optimized content created to improve your online visibility, attract organic traffic, and support better search rankings."
    },
    {
      icon: FaIndustry,
      title: "Industry-Specific Writing",
      text: "Relevant and informative content crafted specifically for your industry, audience, and unique business requirements."
    },
    {
      icon: FaLightbulb,
      title: "Engaging and Original Content",
      text: "Creative, unique, and engaging content that captures attention, builds audience interest, and strengthens your brand identity."
    },
    {
      icon: FaTags,
      title: "Affordable Packages for Startups and SMEs",
      text: "Flexible and affordable content marketing packages designed to help startups and growing businesses achieve their marketing goals."
    },
    {
      icon: FaCalendarAlt,
      title: "Consistent Publishing Schedule",
      text: "A well-planned content calendar and consistent publishing schedule that keeps your brand active and connected with your audience."
    },
    {
      icon: FaChartLine,
      title: "Content Focused on Leads and Conversions",
      text: "Strategic content designed to attract the right audience, generate quality leads, and turn visitors into potential customers."
    },
    {
      icon: FaComments,
      title: "Transparent Communication and Reporting",
      text: "Clear communication, regular updates, and transparent performance reports so you always know how your content is performing."
    }
  ];

  const ContentServices = [
    {
      id: 1,
      icon: <FaLaptopCode />,
      color: "primary",
      title: "Website Content Writing",
      desc: "Create persuasive website content that communicates your brand message and encourages visitors to take action."
    },
    {
      id: 2,
      icon: <FaSearch />,
      color: "success",
      title: "SEO Blog Writing",
      desc: "Publish informative, keyword-optimized blog articles that improve Google rankings and attract organic traffic."
    },
    {
      id: 3,
      icon: <FaShareAlt />,
      color: "info",
      title: "Social Media Content",
      desc: "Engage your audience with creative captions, graphics, reels, and post ideas tailored to your brand."
    },
    {
      id: 4,
      icon: <FaEnvelope />,
      color: "warning",
      title: "Email Marketing Content",
      desc: "Build stronger customer relationships with personalized email campaigns, newsletters, and promotional content."
    },
    {
      id: 5,
      icon: <FaFileAlt />,
      color: "danger",
      title: "Landing Page Copywriting",
      desc: "Write compelling landing pages designed to generate leads and increase conversions."
    },
    {
      id: 6,
      icon: <FaBoxOpen />,
      color: "primary",
      title: "Product & Service Descriptions",
      desc: "Develop clear and persuasive product or service descriptions that improve user experience and boost sales."
    },
    {
      id: 7,
      icon: <FaClipboardList />,
      color: "success",
      title: "Content Strategy & Planning",
      desc: "Plan a long-term content roadmap aligned with your business goals, audience interests, and SEO objectives."
    }
  ];

  const processData = [
    {
      id: 1,
      icon: <FaSearch />,
      number: "01",
      title: "Business & Audience Research",
      text: "We understand your business, target audience, competitors, industry trends, and customer needs to create content that truly connects."
    },
    {
      id: 2,
      icon: <FaLightbulb />,
      number: "02",
      title: "Content Strategy",
      text: "We develop a customized content plan based on your business goals, audience interests, target keywords, and long-term growth objectives."
    },
    {
      id: 3,
      icon: <FaPenNib />,
      number: "03",
      title: "Content Creation",
      text: "Our team creates engaging, informative, original, and SEO-optimized content that reflects your brand voice and communicates your message."
    },
    {
      id: 4,
      icon: <FaRocket />,
      number: "04",
      title: "Optimization",
      text: "Every piece of content is optimized for readability, search engines, user experience, keywords, and conversion opportunities."
    },
    {
      id: 5,
      icon: <FaBullhorn />,
      number: "05",
      title: "Publishing & Promotion",
      text: "We publish and distribute your content across the right channels to increase visibility, reach your target audience, and maximize engagement."
    },
    {
      id: 6,
      icon: <FaChartLine />,
      number: "06",
      title: "Performance Analysis",
      text: "We monitor content performance, analyze important metrics, and continuously improve your strategy based on real data and insights."
    }
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
              <img
                src={SEO}
                alt="Local SEO Services"
                className="img-fluid d-md-none d-block mx-auto"
                style={{
                  width: "270px",
                  height: "270px",
                  objectFit: "contain"
                }}
              />
              <p className="lead text-light mt-0 mt-md-2">
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

            <Col
              md={5}
              className="text-center mt-5 d-none d-md-flex mt-lg-0 d-none d-md-block"
            >
              <img
                src={SEO}
                alt="Social Media Marketing"
                className="img-fluid "
              />
            </Col>
          </Row>
        </div>
      </section>

      <section className="services-section py-3 py-md-4 px-2">
        <Container>
          <Row className="align-items-center g-4 g-lg-5">
            {/* LEFT CONTENT */}
            <Col lg={7}>
              <div className="content-about-content">
                <div className="content-about-badge mb-2">
                  <span className="content-badge-dot"></span>
                  ABOUT CONTENT MARKETING
                </div>

                <h2 className="content-about-title">
                  Create Valuable Content
                  <span className="d-block content-gradient-text">
                    That Drives Real Business Growth
                  </span>
                </h2>

                <p className="content-about-description">
                  Content is the foundation of every successful digital
                  marketing strategy. At <strong>AH Growth Agency</strong>, we
                  create meaningful content that helps businesses connect with
                  their audience, improve online visibility, and generate
                  quality leads.
                </p>

                <p className="content-about-description">
                  As a trusted provider of{" "}
                  <strong>Content Marketing Services in Dhanbad</strong>, we
                  focus on creating content that not only attracts visitors but
                  also encourages them to take action. Every piece of content is
                  crafted to match your brand voice, answer customer questions,
                  and support your business goals.
                </p>

                <p className="content-about-description">
                  Whether you're launching a startup, growing a local business,
                  or expanding your online presence, our content marketing
                  strategies help establish your brand as an authority in your
                  industry.
                </p>

                <div className="content-about-points mt-4">
                  <div className="content-point">
                    <span>✓</span>
                    <p>Content That Builds Brand Authority</p>
                  </div>

                  <div className="content-point">
                    <span>✓</span>
                    <p>SEO-Focused Content Strategy</p>
                  </div>

                  <div className="content-point">
                    <span>✓</span>
                    <p>Content That Generates Quality Leads</p>
                  </div>
                </div>
              </div>
            </Col>

            {/* RIGHT PREMIUM VISUAL */}
            <Col lg={5}>
              <div className="content-growth-visual">
                {/* Background Glow */}
                <div className="content-glow"></div>

                {/* Main Dashboard */}
                <div className="content-dashboard-card">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <span className="content-dashboard-label">
                        CONTENT PERFORMANCE
                      </span>

                      <h5 className="text-white fw-bold mb-0 mt-1">
                        Growth Overview
                      </h5>
                    </div>

                    <div className="content-active-badge">● Active</div>
                  </div>

                  {/* Growth Chart */}
                  <div className="content-chart-box">
                    <div className="content-chart-line">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="content-chart-info">
                      <span>Content Reach</span>
                      <strong>+78%</strong>
                    </div>

                    <div className="content-chart-bars">
                      <div style={{ height: "35%" }}></div>
                      <div style={{ height: "50%" }}></div>
                      <div style={{ height: "42%" }}></div>
                      <div style={{ height: "65%" }}></div>
                      <div style={{ height: "72%" }}></div>
                      <div style={{ height: "88%" }}></div>
                      <div style={{ height: "100%" }}></div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="row g-3 mt-3">
                    <div className="col-6">
                      <div className="content-stat-card">
                        <span>Organic Reach</span>
                        <strong>+65%</strong>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="content-stat-card">
                        <span>Engagement</span>
                        <strong>+42%</strong>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="content-stat-card">
                        <span>Quality Leads</span>
                        <strong>+58%</strong>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="content-stat-card">
                        <span>Brand Trust</span>
                        <strong>+80%</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="content-floating-card content-floating-top">
                  <span>✦</span>
                  <div>
                    <small>Content Strategy</small>
                    <strong>Optimized</strong>
                  </div>
                </div>

                <div className="content-floating-card content-floating-bottom">
                  <span>↗</span>
                  <div>
                    <small>Business Growth</small>
                    <strong>+92%</strong>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="services-section py-3 py-md-4 px-2">
        <div className="container position-relative">
          <WhyChooseSection
            title="Why Choose"
            highlight="AH Growth Agency?"
            subtitle="Your Trusted Content Marketing Partner in Dhanbad"
            cards={WhyChooseData}
          />
        </div>
      </section>

      <section className="services-section py-3 py-md-4 px-2 text-center">
        <Container>
          <h2 className="fw-bold text-white lh-1 mb-0">
            Our Local
            <span className="gradient-text"> SEO </span>
            Services
          </h2>
          <div className="premium-process-label text-white">
            <span className="label-line"></span>
            <span>Complete Local SEO Solutions</span>
            <span className="label-line"></span>
          </div>

          <div className="row g-3 mt-2">
            {ContentServices.map((service) => (
              <div className="col-md-6 col-lg-3" key={service.id}>
                <WebServiceCard service={service} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="services-section py-3 py-md-4 px-2 text-center">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-8 col-lg-9">
              <div className="premium-process-label">
                <span className="label-line"></span>
                <span>OUR CONTENT MARKETING PROCESS</span>
                <span className="label-line"></span>
              </div>

              <h2 className="content-about-title">
                How We Create Content That{" "}
                <span className="d-block content-gradient-text">
                  Delivers Results
                </span>
              </h2>

              <p className="content-about-description">
                We combine strategic research, creative storytelling, SEO, and
                performance insights to create content that builds trust,
                attracts the right audience, and drives measurable growth.
              </p>
            </div>
          </div>

          <div className="premium-process-grid">
            {processData.map((item, index) => (
              <div className="premium-process-item" key={item.id}>
                <div className="premium-process-card">
                  <div className="premium-process-top">
                    <div className="premium-process-icon">{item.icon}</div>

                    <span className="premium-process-count">{item.id}</span>
                  </div>

                  <div className="premium-process-card-content">
                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </div>

                  <div className="premium-process-bottom">
                    <span>STEP {item.id}</span>

                    <div className="premium-process-circle">
                      <FaArrowRight />
                    </div>
                  </div>
                </div>

                {index < processData.length - 1 && (
                  <div className="premium-process-connector">
                    <span></span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section content-impact-section py-3 py-md-4 px-2">
        <Container>
          <Row className="align-items-center g-5">
            {/* LEFT SIDE */}
            <Col lg={5}>
              <div className="content-impact-intro">
                <div className="premium-process-label justify-content-start">
                  <span className="label-line"></span>
                  <span>CONTENT MARKETING BENEFITS</span>
                  <span className="label-line"></span>
                </div>

                <h2 className="content-about-title">
                  Why Invest in
                  <span className="d-block content-gradient-text">
                    Content Marketing?
                  </span>
                </h2>

                <p className="content-about-description">
                  Great content does more than attract visitors. It builds
                  trust, improves visibility, generates qualified leads, and
                  creates a strong foundation for sustainable business growth.
                </p>

                {/* IMPACT SCORE */}
                <div className="content-impact-score">
                  <div className="impact-score-number">
                    <strong>8</strong>
                    <span>
                      Growth
                      <br />
                      Benefits
                    </span>
                  </div>

                  <div className="impact-score-line"></div>

                  <div className="impact-score-text">
                    <span>ONE STRATEGY</span>
                    <strong>LONG-TERM IMPACT</strong>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <div className="content-impact-list">
                {[
                  {
                    number: "01",
                    title: "Increase Organic Website Traffic",
                    text: "Attract more visitors through valuable, search-friendly content."
                  },
                  {
                    number: "02",
                    title: "Improve Search Engine Rankings",
                    text: "Build relevant content that strengthens your visibility across search engines."
                  },
                  {
                    number: "03",
                    title: "Build Trust & Brand Authority",
                    text: "Establish your business as a reliable voice in your industry."
                  },
                  {
                    number: "04",
                    title: "Generate High-Quality Leads",
                    text: "Turn relevant website traffic into genuine business opportunities."
                  },
                  {
                    number: "05",
                    title: "Educate Potential Customers",
                    text: "Answer customer questions and help prospects make confident decisions."
                  },
                  {
                    number: "06",
                    title: "Increase Customer Engagement",
                    text: "Create content that encourages interaction and meaningful conversations."
                  },
                  {
                    number: "07",
                    title: "Support SEO & Social Media",
                    text: "Use one content strategy to strengthen multiple digital marketing channels."
                  },
                  {
                    number: "08",
                    title: "Drive Long-Term Business Growth",
                    text: "Build a valuable content ecosystem that continues delivering results over time."
                  }
                ].map((item, index) => (
                  <div className="content-impact-item" key={item.number}>
                    {/* NUMBER */}
                    <div className="impact-number">{item.number}</div>

                    {/* CONNECTOR */}
                    <div className="impact-connector">
                      <span></span>
                    </div>

                    {/* CONTENT */}
                    <div className="impact-content">
                      <div className="impact-title-row">
                        <h3>{item.title}</h3>

                        <div className="impact-arrow">
                          <FaArrowRight />
                        </div>
                      </div>

                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="services-section content-matters-section py-3 py-md-4">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="content-matters-content-col">
              <div className="content-matters-content">
                <div className="premium-process-label justify-content-start">
                  <span className="label-line"></span>
                  <span>WHY CONTENT MARKETING MATTERS</span>
                </div>

                <h2 className="content-about-title">
                  Content That Gets You
                  <span className="d-block content-gradient-text">
                    Discovered, Trusted & Remembered
                  </span>
                </h2>

                <div className="content-matters-mobile-visual">
                  <div className="content-matters-visual">
                    <div className="matters-glow matters-glow-one"></div>
                    <div className="matters-glow matters-glow-two"></div>

                    <div className="matters-core">
                      <div className="matters-core-icon">
                        <FaBullseye />
                      </div>

                      <span>CONTENT</span>
                      <strong>THAT MATTERS</strong>
                    </div>

                    <div className="matters-floating matters-top">
                      <div className="matters-floating-icon">
                        <FaSearch />
                      </div>
                      <div>
                        <small>Visibility</small>
                        <strong>Get Discovered</strong>
                      </div>
                    </div>

                    <div className="matters-floating matters-right">
                      <div className="matters-floating-icon">
                        <FaComments />
                      </div>
                      <div>
                        <small>Engagement</small>
                        <strong>Build Relationships</strong>
                      </div>
                    </div>

                    <div className="matters-floating matters-bottom">
                      <div className="matters-floating-icon">
                        <FaChartLine />
                      </div>
                      <div>
                        <small>Growth</small>
                        <strong>Drive Results</strong>
                      </div>
                    </div>

                    <div className="matters-orbit"></div>
                  </div>
                </div>

                <p className="content-about-description">
                  Great content helps your business get discovered online,
                  answer customer questions, and build lasting relationships
                  with your audience.
                </p>

                <p className="content-about-description">
                  As a trusted provider of{" "}
                  <strong>Content Marketing Services in Dhanbad</strong>, we
                  create content that supports your SEO strategy, strengthens
                  your brand, and helps you achieve sustainable business growth.
                </p>

                <p className="content-about-description">
                  Whether you need website content, blog articles, or social
                  media copy, our team creates content that informs, engages,
                  and converts.
                </p>

                <div className="matters-content-types">
                  {/* Your content cards */}
                </div>
              </div>
            </Col>

            <Col lg={5} className="content-matters-desktop-visual">
              <div className="content-matters-visual">
                <div className="matters-glow matters-glow-one"></div>
                <div className="matters-glow matters-glow-two"></div>

                <div className="matters-core">
                  <div className="matters-core-icon">
                    <FaBullseye />
                  </div>

                  <span>CONTENT</span>
                  <strong>THAT MATTERS</strong>
                </div>

                <div className="matters-floating matters-top">
                  <div className="matters-floating-icon">
                    <FaSearch />
                  </div>
                  <div>
                    <small>Visibility</small>
                    <strong>Get Discovered</strong>
                  </div>
                </div>

                <div className="matters-floating matters-right">
                  <div className="matters-floating-icon">
                    <FaComments />
                  </div>
                  <div>
                    <small>Engagement</small>
                    <strong>Build Relationships</strong>
                  </div>
                </div>

                <div className="matters-floating matters-bottom">
                  <div className="matters-floating-icon">
                    <FaChartLine />
                  </div>
                  <div>
                    <small>Growth</small>
                    <strong>Drive Results</strong>
                  </div>
                </div>

                <div className="matters-orbit"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="services-section ready-to-grow-main py-0 py-md-4">
        <div className="container">
          <div className="content-final-cta-inner text-center text-md-start">
            <div className="content-final-cta-heading">
              <div className="premium-process-label justify-content-start">
                <span className="label-line"></span>
                <span>CONTENT THAT DRIVES GROWTH</span>
                <span className="label-line"></span>
              </div>
              <h2 className="content-about-title">
                Ready to Grow Your Brand
                <span className="d-block content-gradient-text">
                  with High-Quality Content?
                </span>
              </h2>
            </div>

            <div className="content-final-cta-divider"></div>

            <div className="content-final-cta-info">
              <p>
                Partner with <strong>AH Growth Agency</strong> and let our
                <strong> Content Marketing Services in Dhanbad</strong> help you
                attract more visitors, build trust, and generate more leads with
                strategic, results-driven content.
              </p>

              <a href="#contact" className="content-final-cta-button">
                Get Your Free Content Strategy
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentCreation;
