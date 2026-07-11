import React from "react";
import { Data, getExperience } from "../../string/Data";

const About = () => {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero text-center text-md-start">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1>
                We Help Brands
                <span> Grow Faster </span>
                With Digital Marketing
              </h1>

              <p>
                {Data.companyName} delivers powerful SEO, Social Media
                Marketing, Content Creation and Performance Marketing solutions
                that generate real business growth.
              </p>

              <div className="hero-buttons">
                <button className="btn btn-primary">Get Started</button>

                <button className="btn btn-outline-dark ms-3">
                  Learn More
                </button>
              </div>
            </div>

            <div className="col-lg-6 text-center text-md-end mt-5 mt-md-0">
              <div className="logo-box">
                <img src={Data.logo} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3">
              <div className="stat-card">
                <h2>100+</h2>
                <p>Projects Completed</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="stat-card">
                <h2>50+</h2>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="stat-card">
                <h2>{getExperience()}+</h2>
                <p>Years Experience</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="stat-card">
                <h2>24/7</h2>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="pb-4 mt-3 mt-md-4">
        <div className="container">
          <div className="text-center mb-3 mb-md-4">
            <h2 className="text-center fw-semibold">Why Choose AH Growth Agency?</h2>

            <p>
              We combine creativity, technology and strategy to build brands
              that stand out.
            </p>
          </div>

          <div className="row g-4  justify-content-center text-center">
            <div className="col-lg-4">
              <div className="glass-card">
                <div className="icon">🚀</div>

                <h4>Result Driven</h4>

                <p>Our campaigns focus on measurable growth and better ROI.</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="glass-card">
                <div className="icon">🎯</div>

                <h4>Smart Strategy</h4>

                <p>
                  Data based strategies designed according to your business
                  goals.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="glass-card">
                <div className="icon">💡</div>
                <h4>Creative Solutions</h4>
                <p>Unique ideas that help your brand get noticed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
