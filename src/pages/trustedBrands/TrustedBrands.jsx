import React from "react";
import { Data } from "../../string/Data";

const TrustedBrands = () => {
  const brands = [
    {
      name: "Google Ads",
      icon: "🎯",
      text: "Generate high-quality leads with data-driven PPC campaigns"
    },
    {
      name: "Meta Marketing",
      icon: "📱",
      text: " Reach and engage your audience through Facebook and Instagram advertising"
    },
    {
      name: "Shopify",
      icon: "🛒",
      text: " Launch high-converting eCommerce stores that drive online sales."
    },
    {
      name: "WordPress",
      icon: "💻",
      text: "Build fast, secure, and SEO-friendly websites that convert visitors into customers."
    },
    {
      name: "Amazon",
      icon: "🚀",
      text: "Expand your reach and boost product sales with Amazon marketplace optimization."
    }
  ];

  return (
    <section
      className="position-relative overflow-hidden py-4 py-md-5"
      style={{
        background: "linear-gradient(135deg,#020617,#111827,#1e1b4b)"
      }}
    >
      <div
        className="position-absolute rounded-circle"
        style={{
          width: "350px",
          height: "350px",
          background: "#2563eb",
          filter: "blur(130px)",
          top: "-100px",
          left: "-100px",
          opacity: 0.4
        }}
      ></div>

      <div
        className="position-absolute rounded-circle"
        style={{
          width: "300px",
          height: "300px",
          background: "#9333ea",
          filter: "blur(120px)",
          bottom: "-100px",
          right: "-50px",
          opacity: 0.4
        }}
      ></div>

      <div className="container position-relative">
        <div className="text-center text-white mb-4">
          <span
            className="badge rounded-pill px-4 py-2"
            style={{
              background: "rgba(255,255,255,.15)",
              backdropFilter: "blur(10px)"
            }}
          >
            ⭐ Trusted Digital Growth Partners
          </span>

          <h2 className="display-5 fw-bold mt-1 mb-0">
            Brands <span className="fw-bold text-warning"> We Work</span> With
          </h2>

          <span className="lead text-light fs-6 fs-md-3">
            Delivering Digital Growth with Trusted Marketing Platforms{" "}
          </span>
        </div>

        <div className="row g-3 justify-content-center">
          {brands.map((brand, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              {" "}
              <div
                className="h-100 text-center text-white p-3 rounded-5 shadow-lg"
                style={{
                  background: "rgba(255,255,255,.08)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,.15)",
                  transition: ".3s"
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-12px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div className="fs-1 mb-2">{brand.icon}</div>

                <h5 className="fw-bold brand-title">{brand.name}</h5>

                <p className="brand-text text-light mb-0">{brand.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row text-center text-white mt-4 mt-md-5">
          <div className="col-md-4 mb-1 mb-md-0">
            <h2 className="fw-bold text-warning mb-0">
              {Data.BusinessesServed}
            </h2>
            <p>Businesses Served</p>
          </div>

          <div className="col-md-4 mb-1 mb-md-0">
            <h2 className="fw-bold text-warning mb-0">{Data.Experts}</h2>
            <p>Marketing Experts</p>
          </div>

          <div className="col-md-4 mb-1 mb-md-0">
            <h2 className="fw-bold text-warning mb-0">
              {Data.ClientSatisfaction}
            </h2>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
