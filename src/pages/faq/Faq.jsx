import React from "react";

const faqData = [
  {
    id: 1,
    question: "What digital marketing services do you provide?",
    answer:
      "We provide SEO, Google Ads, Meta Ads, Social Media Marketing, Shopify Development, WordPress Development, Amazon Marketing and Branding."
  },
  {
    id: 2,
    question: "How long does SEO take to show results?",
    answer:
      "SEO generally takes 3-6 months depending on your niche, competition and website quality."
  },
  {
    id: 3,
    question: "Do you provide Google Ads Management?",
    answer:
      "Yes. We create, optimize and scale Google Ads campaigns to generate quality leads and sales."
  },
  {
    id: 4,
    question: "Can you grow my Shopify or Amazon store?",
    answer:
      "Absolutely. We optimize products, improve conversions and run profitable advertising campaigns."
  },
  {
    id: 5,
    question: "Do you provide monthly reports?",
    answer:
      "Yes, every month you'll receive a complete performance report with insights and future strategy."
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
