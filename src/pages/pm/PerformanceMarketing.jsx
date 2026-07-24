import React from "react";
import PerformanceMarketingImg from "../../assets/Performance-Marketing.png";
import WhyChooseSection from "../../components/whyChooseSection/WhyChooseSection";
import { chooseCardsPerformance } from "../../string/Data";
import { Container } from "react-bootstrap";
import {
  BsMeta,
  BsGraphUpArrow,
  BsArrowRepeat,
  BsBarChartLineFill,
  BsArrowRight
} from "react-icons/bs";

import {
  BsBullseye,
  BsSearch,
  BsMegaphone,
  BsRocketTakeoff,
  BsGear
} from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import WebServiceCard from "../../components/webServiceCard/WebServiceCard";
import Process from "../../components/process/Process";

const PerformanceMarketing = () => {
  const navigate = useNavigate();

  const performanceServices = [
    {
      icon: <BsMeta />,
      title: "Meta Ads (Facebook & Instagram)",
      desc: "Generate leads, increase engagement, and grow your brand through highly targeted Facebook and Instagram advertising.",
      color: "primary"
    },
    {
      icon: <BsGraphUpArrow />,
      title: "Lead Generation Campaigns",
      desc: "Create campaigns designed to attract qualified leads that are more likely to convert into paying customers.",
      color: "success"
    },
    {
      icon: <BsArrowRepeat />,
      title: "Remarketing Campaigns",
      desc: "Reconnect with website visitors and potential customers who have already shown interest in your business.",
      color: "warning"
    },
    {
      icon: <BsBarChartLineFill />,
      title: "Campaign Analytics & Reporting",
      desc: "Track impressions, clicks, conversions, cost per lead, and ROI with transparent performance reports and actionable insights.",
      color: "info"
    }
  ];

  const marketingProcess = [
    {
      no: "01",
      icon: <BsBullseye />,
      title: "Business & Goal Analysis",
      desc: "Understand your business objectives, target audience, budget, and growth goals to build the right marketing foundation."
    },
    {
      no: "02",
      icon: <BsSearch />,
      title: "Market & Competitor Research",
      desc: "Analyze competitors, customer behavior, and market opportunities to create winning campaign strategies."
    },
    {
      no: "03",
      icon: <BsMegaphone />,
      title: "Campaign Strategy",
      desc: "Develop customized advertising strategies aligned with your business goals and conversion targets."
    },
    {
      no: "04",
      icon: <BsRocketTakeoff />,
      title: "Campaign Launch",
      desc: "Setup and launch optimized Google Ads and Meta Ads campaigns with proper targeting."
    },
    {
      no: "05",
      icon: <BsGear />,
      title: "Continuous Optimization",
      desc: "Monitor performance, improve creatives, refine audiences, and optimize advertising budgets."
    },
    {
      no: "06",
      icon: <BsGraphUpArrow />,
      title: "Reporting & Growth",
      desc: "Get detailed reports, insights, and recommendations for continuous business growth."
    }
  ];

  const benefits = [
    "Generate high-quality leads",
    "Increase online sales",
    "Maximize advertising ROI",
    "Reach the right audience",
    "Scale campaigns based on performance",
    "Improve conversion rates",
    "Track every marketing investment",
    "Achieve measurable business growth"
  ];

  return (
    <div>
      <section
        className="growth-cta py-4 py-md-5 position-relative overflow-hidden"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div className="container">
          <div className="row align-items-center g-3 text-md-start text-center">
            <div className="col-lg-7">
              <span className="text-white fst-italic">
                ROI-Focused Performance Marketing
              </span>

              <h1 className="fs-1 fw-bold text-white">
                Performance Marketing Agency in
                <span className="text-info"> Dhanbad </span>That Delivers
                Measurable Results
              </h1>
              <div className="growth-image d-block d-md-none">
                <img
                  src="https://www.pngmart.com/files/3/Marketing-PNG-File.png"
                  alt="Digital Marketing"
                  className="img-fluid"
                />
              </div>
              <p className="text-light opacity-75 fs-5 mt-0 mt-md-3">
                Looking for a trusted Performance Marketing Agency in Dhanbad?
                AH Growth Agency helps startups, local businesses, and growing
                brands generate qualified leads, increase sales, and maximize
                return on investment (ROI) through data-driven performance
                marketing strategies. From Google Ads and Meta Ads to conversion
                optimization and remarketing campaigns, we focus on measurable
                growth that aligns with your business goals.
              </p>

              <div className="d-flex flex-column flex-md-row gap-2 my-3 justify-content-center justify-content-md-start">
                <button className="btn btn-info rounded-pill px-3 py-2">
                  Get Free Campaign Audit
                </button>

                <button className="btn btn-light rounded-pill px-3 py-2">
                  Book a Strategy Call
                </button>
              </div>
            </div>

            <div className="col-lg-5 text-center">
              <div className="growth-image d-none d-md-block">
                <img
                  src="https://www.pngmart.com/files/3/Marketing-PNG-File.png"
                  alt="Digital Marketing"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="smm-hero py-4 position-relative overflow-hidden"
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="performance-img col-md-5 text-center d-none d-md-flex">
              <img
                src={PerformanceMarketingImg}
                alt="Digital Marketing"
                className="performance-img img-fluid"
              />
            </div>
            <div className="col-md-7 text-center text-md-start">
              <h1 className="fs-1 fw-bold text-white lh-1">
                About <span className="gradient-text ">Performance </span>
                Marketing
              </h1>

              <p className="text-info fw-bolder">
                Drive Business Growth with Data-Driven Performance Marketing
              </p>
              <img
                src={PerformanceMarketingImg}
                alt="Digital Marketing"
                className="img-fluid d-flex d-md-none mt-3"
              />
              <p className="fs-5">
                Performance marketing is one of the most effective ways to reach
                potential customers and achieve measurable business outcomes.
                Instead of paying for visibility alone, you invest in campaigns
                designed to generate real results such as leads, website
                traffic, sales, or app installs.{" "}
              </p>

              <p className="fs-5 mt-2">
                At AH Growth Agency, we create customized performance marketing
                strategies based on your business objectives, target audience,
                and budget. As a growing Performance Marketing Agency in{" "}
                <strong className="text-warning">Dhanbad</strong>, we
                continuously monitor, optimize, and improve campaigns to help
                you get the best possible return on your advertising investment.
              </p>
              <p className="fs-5 mt-2">
                Whether you're launching a new product, promoting a service, or
                scaling your business, our goal is to help you grow through
                smart, data-backed advertising.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="smm-section py-4">
        <Container>
          <WhyChooseSection
            title="Why Choose"
            highlight="AH Growth Agency?"
            subtitle="Your Trusted Performance Marketing Agency in Dhanbad."
            cards={chooseCardsPerformance}
          />
        </Container>
      </section>

      <section className="smm-section py-4 text-center">
        <Container>
          <h1 className="fs-1 fw-bold text-white lh-1 mb-0">
            Our Performance
            <span className="gradient-text"> Marketing </span>
            Services
          </h1>
          <div className="premium-process-label text-white">
            <span className="label-line"></span>
            <span>Advertising Solutions That Generate Results</span>
            <span className="label-line"></span>
          </div>

          <div className="row g-3 mt-2">
            {performanceServices.map((service) => (
              <div className="col-md-6 col-lg-3" key={service.id}>
                <WebServiceCard service={service} />
              </div>
            ))}
          </div>
        </Container>
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
          <div className="text-center mb-3">
            <h2 className="fs-1 fw-bold text-white mb-md-0 lh-1">
              Our Performance
              <span
                style={{
                  background: "linear-gradient(90deg,#3b82f6,#06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                {" "}
                Marketing Process
              </span>
            </h2>
            <div className="premium-process-label text-white">
              <span className="label-line"></span>
              <span>How We Deliver Better Results</span>
              <span className="label-line"></span>
            </div>
          </div>

          <Process data={marketingProcess} />
        </Container>
      </section>

      <section className="smm-section py-4">
        <div className="container">
          <div className="text-center">
            <h2 className="fs-1 fw-bold text-white mb-md-0 lh-1">
              Benefits of
              <span className="text-info"> Performance Marketing</span>
            </h2>
            <div className="premium-process-label text-white">
              <span className="label-line"></span>
              <span>Why Invest in Performance Marketing?</span>
              <span className="label-line"></span>
            </div>
          </div>

          <div className="benefit-network">
            <svg className="network-svg d-none d-md-block">
              <line x1="50%" y1="50%" x2="18%" y2="18%" />
              <line x1="50%" y1="50%" x2="82%" y2="18%" />
              <line x1="50%" y1="50%" x2="10%" y2="43%" />
              <line x1="50%" y1="50%" x2="90%" y2="43%" />
              <line x1="50%" y1="50%" x2="12%" y2="68%" />
              <line x1="50%" y1="50%" x2="88%" y2="68%" />
              <line x1="50%" y1="50%" x2="28%" y2="93%" />
              <line x1="50%" y1="50%" x2="78%" y2="93%" />
            </svg>

            <div className="growth-core">
              <h3>Growth</h3>
              <span>Driven By Data</span>
            </div>

            {benefits.map((item, index) => (
              <div className={`network-point point-${index + 1}`} key={index}>
                <div className="check-circle">
                  <BsCheckCircleFill />
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>

          {/* Mobile List */}
          <div className="benefit-mobile">
            {benefits.map((item, index) => (
              <div className="mobile-item" key={index}>
                <div className="check-circle">
                  <BsCheckCircleFill />
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="smm-section py-4">
        <div className="container">
          <div className="row align-items-center g-3">
            {/* Left Content */}
            <div className="col-lg-7 text-center text-md-start">
              <span className="cta- text-warning fst-italic">
                <BsGraphUpArrow className="me-2" />
                Why Performance Marketing Matters
              </span>

              <h2 className="fs-1 fw-bold text-white">
                Grow Smarter With
                <span className="text-info"> Performance Marketing</span>
              </h2>

              <p className="lead text-light mt-0 mt-md-4">
                Unlike traditional advertising, performance marketing allows you
                to track every click, lead, and conversion. This means your
                marketing budget is spent more efficiently, helping you make
                informed decisions based on real data.
              </p>

              <p className="text-secondary fs-5">
                As a trusted{" "}
                <span className="text-info">
                  Performance Marketing Agency in Dhanbad
                </span>
                , AH Growth Agency focuses on creating campaigns that are
                continuously optimized to improve performance, reduce
                acquisition costs, and support long-term business growth.
              </p>

              <div className="row mt-2 mt-md-4 g-3">
                <div className="col-md-6">
                  <div className="feature-card">
                    <BsCheckCircleFill />
                    <span>Track Every Click & Conversion</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="feature-card">
                    <BsCheckCircleFill />
                    <span>Reduce Customer Acquisition Cost</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="feature-card">
                    <BsCheckCircleFill />
                    <span>Increase Qualified Leads</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="feature-card">
                    <BsCheckCircleFill />
                    <span>Higher ROI Through Optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card */}

            <div className="col-lg-5">
              <div className="cta-box">
                <div className="cta-icon">
                  <BsBullseye />
                </div>

                <h3 className="mt-4">
                  Ready to Grow with
                  <br />
                  Performance Marketing?
                </h3>

                <p>
                  Partner with <strong>AH Growth Agency</strong>, a trusted
                  <strong> Performance Marketing Agency in Dhanbad</strong>, and
                  launch data-driven advertising campaigns that generate leads,
                  increase sales, and maximize your marketing ROI.
                </p>

                <div className="row text-center mt-4 g-3">
                  <div className="col-4">
                    <div className="stat-box">
                      <h4>250%</h4>
                      <small>ROI</small>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="stat-box">
                      <h4>24/7</h4>
                      <small>Support</small>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="stat-box">
                      <h4>100%</h4>
                      <small>Transparent</small>
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-info btn-lg w-100 mt-4 fw-semibold"
                  onClick={() => navigate("/audit")}
                >
                  Get Your Free Campaign Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerformanceMarketing;
