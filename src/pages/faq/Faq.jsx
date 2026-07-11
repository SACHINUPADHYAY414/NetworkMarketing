import React from "react";

const faqData = [
  {
    id: 1,
    question: "What services does AH Growth Agency offer?",
    answer:
      "AH Growth Agency provides a full range of digital marketing services, including SEO, PPC advertising, social media marketing, content marketing, website design and branding strategies to help businesses grow online."
  },
  {
    id: 2,
    question: "How can a digital marketing agency help my business?",
    answer:
      "A digital marketing agency helps increase your online visibility, attract qualified leads, improve website traffic, boost conversions, and maximize your return on investment through data-driven marketing strategies."
  },
  {
    id: 3,
    question: "Which businesses can benefit from AH Growth Agency's services?",
    answer:
      "AH Growth Agency works with startups, small businesses, eCommerce brands, local businesses, and established enterprises across various industries looking to grow their digital presence and generate more revenue."
  },
  {
    id: 4,
    question: "How long does it take to see results from digital marketing?",
    answer:
      "Results depend on the service. PPC campaigns can generate leads within days, while SEO typically takes 3–6 months to show significant improvements. Social media and content marketing generally deliver consistent long-term growth."
  },
  {
    id: 5,
    question: "Does AH Growth Agency provide customized marketing strategies?",
    answer:
      "Yes. Every business has unique goals and challenges. AH Growth Agency creates customized digital marketing strategies based on your industry, target audience, competition, and business objectives."
  },
  {
    id: 6,
    question: "How do you measure the success of digital marketing campaigns?",
    answer:
      "We track key performance indicators (KPIs) such as website traffic, keyword rankings, conversion rates, lead generation, engagement, return on ad spend (ROAS), and overall ROI using advanced analytics tools."
  },
  {
    id: 7,
    question:
      "Why should I choose AH Growth Agency over other digital marketing agencies?",
    answer:
      "AH Growth Agency focuses on data-driven strategies, transparent reporting, customized solutions, and measurable business growth. We prioritize long-term partnerships and sustainable results rather than short-term gains."
  },
  {
    id: 8,
    question: "Do you offer local SEO services?",
    answer:
      "Yes. We help businesses improve their visibility in local search results through Google Business Profile optimization, local keyword targeting, citation building, reputation management, and location-based SEO strategies."
  },
  {
    id: 9,
    question: "Can AH Growth Agency manage my social media accounts?",
    answer:
      "Absolutely. We create content, manage posting schedules, engage with your audience, run paid social media campaigns, and analyze performance across platforms like Facebook, Instagram, LinkedIn and X (Twitter)."
  },
  {
    id: 10,
    question: "How do I get started with AH Growth Agency?",
    answer:
      "Getting started is easy. Contact AH Growth Agency for a free consultation. We'll discuss your business goals, evaluate your current digital presence, and recommend a customized marketing strategy designed to achieve measurable growth."
  },
  {
    id: 11,
    question: "Can you grow my Shopify or Amazon store?",
    answer:
      "Absolutely. We optimize products, improve conversions and run profitable advertising campaigns to help your eCommerce store increase sales and revenue."
  },
  {
    id: 12,
    question: "Do you provide monthly reports?",
    answer:
      "Yes, every month you'll receive a complete performance report with insights, campaign analysis, and future strategy recommendations."
  }
];
const Faq = () => {
  return (
    <section className="faq-section py-5">
      <div className="container">
        <div className="text-center mb-4">
          <span className="faq-badge">⭐ Frequently Asked Questions</span>

          <h2 className="faq-title mt-4">Got Questions?</h2>

          <p className="faq-subtitle">
            Everything you need to know about our Digital Marketing Services.
          </p>
        </div>

        <div className="accordion" id="faqAccordion">
          {faqData.map((faq, index) => (
            <div className="accordion-item" key={faq.id}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${
                    index !== 0 ? "collapsed" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${faq.id}`}
                >
                  <span className="faq-number">
                    {String(faq.id).padStart(2, "0")}
                  </span>

                  <span>{faq.question}</span>
                </button>
              </h2>

              <div
                id={`faq${faq.id}`}
                className={`accordion-collapse collapse ${
                  index === 0 ? "show" : ""
                }`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
