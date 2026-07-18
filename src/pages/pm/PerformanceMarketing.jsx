import React from "react";
import PerformanceMarketingImg from "../../assets/Performance-Marketing.png";
import WhyChooseSection from "../../components/whyChooseSection/WhyChooseSection";
import { chooseCardsPerformance } from "../../string/Data";
import { Container } from "react-bootstrap";

const PerformanceMarketing = () => {
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

              <div className="d-column d-md-flex gap-3 my-3 text-md-star text-center">
                <button className="btn btn-info btn-md rounded-pill px-4 fw-semibold mb-2">
                  Get Free Campaign Audit
                </button>
                <button className="btn btn-light btn-md rounded-pill px-4 fw-semibold">
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

      {/* Why Choose AH Growth Agency? */}
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
    </div>
  );
};

export default PerformanceMarketing;
