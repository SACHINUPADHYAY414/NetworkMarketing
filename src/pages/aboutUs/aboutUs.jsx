import React from "react";
import { Data } from "../../string/Data";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const statsData = [
    {
      value: "100+",
      title: "Projects Successfully Delivered"
    },
    {
      value: "50+",
      title: "Happy Clients"
    },
    {
      value: "3+ Years",
      title: "Industry Experience"
    },
    {
      value: "24/7",
      title: "Dedicated Customer Support"
    }
  ];

  const benefitsData = [
    {
      icon: "📍",
      title: "Local Expertise",
      description:
        "Local expertise with a deep understanding of the Dhanbad market."
    },
    {
      icon: "🎯",
      title: "Customized Strategies",
      description:
        "Customized digital marketing strategies designed for every business."
    },
    {
      icon: "👨‍💻",
      title: "Experienced Team",
      description: "Experienced team of SEO, PPC, and Social Media specialists."
    },
    {
      icon: "📊",
      title: "Transparent Reporting",
      description:
        "Transparent reporting with clear insights and measurable results."
    },
    {
      icon: "💰",
      title: "Affordable Solutions",
      description:
        "Affordable digital marketing solutions for startups, SMEs, and enterprises."
    },
    {
      icon: "🤝",
      title: "Dedicated Support",
      description:
        "Dedicated support focused on long-term business growth and success."
    }
  ];

  return (
    <main className="about-page">
      <section className="about-premium-hero">
        <div className="about-hero-grid"></div>

        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="premium-hero-content">
                <div className="premium-process-label justify-content-center justify-content-md-start text-center text-md-start text-white">
                  <span> ABOUT AH GROWTH AGENCY</span>
                  <span className="label-line"></span>
                </div>

                <h1 className="display-5 mt-1">
                  We Turn Your
                  <span> Digital Presence </span>
                  Into Real Growth
                </h1>

                <p className="hero-short-description">
                  AH Growth Agency is a results-driven digital marketing partner
                  helping businesses build visibility, generate quality leads,
                  and achieve sustainable growth through smart strategies and
                  innovative digital solutions.
                </p>

                <div className="hero-actions">
                  <button type="button" className="btn premium-primary-btn">
                    Start Your Growth Journey
                    <span>→</span>
                  </button>

                  <button
                    type="button"
                    className="btn premium-secondary-btn"
                    onClick={() => navigate("/seo")}
                  >
                    Explore Our Services
                  </button>
                </div>
                <div className="hero-trust-line">
                  <span></span>
                  Trusted Digital Marketing Partner in Dhanbad
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="premium-growth-visual">
                <div className="premium-logo-container">
                  <div className="logo-ring ring-one"></div>

                  <div className="logo-ring ring-two"></div>

                  <div className="premium-logo-box">
                    <img
                      src={Data.logo}
                      alt="AH Growth Agency Logo"
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="growth-floating-card card-top">
                  <div className="floating-icon">↗</div>

                  <div>
                    <strong>+78%</strong>
                    <span>Digital Growth</span>
                  </div>
                </div>

                <div className="growth-floating-card card-bottom">
                  <div className="floating-icon">✓</div>

                  <div>
                    <strong>100+</strong>
                    <span>Projects Delivered</span>
                  </div>
                </div>

                <div className="growth-services">
                  <span>SEO</span>
                  <span>PPC</span>
                  <span>Social Media</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats-section">
        <div className="container">
          <div className="row g-3 g-lg-4">
            {statsData.map((stat, index) => (
              <div className="col-6 col-lg-3" key={index}>
                <div className="about-stat-card h-100">
                  <h2>{stat.value}</h2>

                  <p>{stat.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container">
          <div className="row align-items-center g-3">
            <div className="col-lg-7  text-center text-md-start">
              <div className="who-we-are-content">
                <div className="premium-process-label justify-content-center justify-content-md-start text-center text-md-start text-white">
                  <span className="label-line"></span>
                  <span>WHO WE ARE</span>
                  <span className="label-line"></span>
                </div>

                <h2 className="text-center text-md-start text-white mt-1 lh-1">
                  Building Brands That
                  <span> Grow & Stand Out</span>
                </h2>

                <p>
                  At <strong>AH Growth Agency</strong>, we are a results-driven{" "}
                  <strong>Digital Marketing Company in Dhanbad</strong>{" "}
                  dedicated to helping businesses establish a strong online
                  presence and achieve sustainable growth.
                </p>

                <p>
                  Our team combines creativity, data-driven strategies, and the
                  latest digital technologies to deliver marketing solutions
                  that generate real business results.
                </p>

                <p>
                  From startups and local businesses to established brands, we
                  create customized strategies that increase website traffic,
                  generate qualified leads, and improve conversions.
                </p>

                <p>
                  Whether you need expert SEO, social media marketing, website
                  development, or performance marketing, we help your business
                  stand out in today's competitive digital landscape.
                </p>

                <p>
                  As a trusted{" "}
                  <strong>Digital Marketing Company in Dhanbad</strong>, our
                  mission is to build long-term partnerships by delivering
                  measurable ROI, transparent communication, and innovative
                  marketing solutions that help our clients succeed.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="growth-strategy-card text-start">
                <div className="strategy-card-header">
                  <span className="strategy-status">OUR APPROACH</span>

                  <span className="strategy-dot"></span>
                </div>

                <div className="strategy-flow">
                  <div className="strategy-item">
                    <div className="strategy-number">01</div>

                    <div>
                      <h4>Strategy</h4>

                      <p>Data-driven planning based on your business goals.</p>
                    </div>
                  </div>

                  <div className="strategy-line"></div>

                  <div className="strategy-item">
                    <div className="strategy-number">02</div>

                    <div>
                      <h4>Execution</h4>

                      <p>
                        Creative campaigns designed to reach your target
                        audience.
                      </p>
                    </div>
                  </div>

                  <div className="strategy-line"></div>

                  <div className="strategy-item">
                    <div className="strategy-number">03</div>

                    <div>
                      <h4>Growth</h4>

                      <p>
                        Continuous optimization focused on measurable business
                        results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="smm-section py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="text-center">
                <div className="premium-process-label">
                  <span className="label-line"></span>
                  <span>WHY PARTNER WITH US</span>
                  <span className="label-line"></span>
                </div>
                <h2 className="fs-1 fw-bold text-white">
                  Partner with the Leading{" "}
                  <span style={{ color: "#0074bc" }}>
                    Digital Marketing Company in Dhanbad
                  </span>
                </h2>

                <p className="lead text-light mt-0 mt-md-2">
                  Learn more about AH Growth Agency, a trusted{" "}
                  <strong>Digital Marketing Company in Dhanbad</strong> offering
                  SEO, Social Media Marketing, Google Ads, Website Development,
                  and performance-driven digital marketing solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4 mt-4">
            {benefitsData.map((benefit, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div className="premium-benefit-card h-100">
                  <div className="benefit-icon">{benefit.icon}</div>

                  <div className="benefit-content">
                    <h3>{benefit.title}</h3>

                    <p>{benefit.description}</p>
                  </div>

                  <span className="benefit-arrow">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 bg-white">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-6">
              <div className="mission-vision-card mission-card h-100">
                <div className="mv-top">
                  <div className="mv-icon">🚀</div>

                  <span className="mv-label">OUR MISSION</span>
                </div>

                <h2>Empowering Businesses Through Digital Growth</h2>

                <p>
                  Our mission is to empower businesses with innovative digital
                  marketing strategies that increase online visibility, attract
                  the right audience, and drive long-term business growth.
                </p>

                <p>
                  We believe every business deserves a trusted digital partner
                  committed to delivering measurable success.
                </p>

                <div className="mv-bottom-line">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mission-vision-card vision-card h-100">
                <div className="mv-top">
                  <div className="mv-icon">👁️</div>

                  <span className="mv-label">OUR VISION</span>
                </div>

                <h2>Becoming a Trusted Digital Growth Partner</h2>

                <p>
                  To become the most trusted{" "}
                  <strong>Digital Marketing Company in Dhanbad</strong>,
                  recognized for delivering innovative marketing solutions,
                  exceptional customer service, and sustainable business growth
                  for clients across industries.
                </p>

                <div className="mv-bottom-line">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
