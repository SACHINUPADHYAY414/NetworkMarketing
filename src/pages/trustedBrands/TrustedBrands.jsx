import React from "react";
import { Data } from "../../string/Data";

const TrustedBrands = () => {
  const brands = [
    {
      name: "Google Ads",
      icon: "🎯",
      text: "Certified Advertising"
    },
    {
      name: "Meta",
      icon: "📱",
      text: "Social Growth Partner"
    },
    {
      name: "Shopify",
      icon: "🛒",
      text: "Ecommerce Solutions"
    },
    {
      name: "WordPress",
      icon: "💻",
      text: "Web Development"
    },
    {
      name: "Amazon",
      icon: "🚀",
      text: "Marketplace Growth"
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
        <div className="text-center text-white mb-5">
          <span
            className="badge rounded-pill px-4 py-2"
            style={{
              background: "rgba(255,255,255,.15)",
              backdropFilter: "blur(10px)"
            }}
          >
            ⭐ Trusted Technology Partners
          </span>

          <h2 className="display-5 fw-bold mt-3">Brands We Work With</h2>

          <p className="lead text-light">
            Helping businesses scale with powerful digital marketing solutions
          </p>
        </div>

        <div className="row g-2 justify-content-center">
          {brands.map((brand, index) => (
            <div className="col-lg-2 col-md-4 col-6" key={index}>
              <div
                className="h-100 text-center text-white p-4 rounded-5 shadow-lg"
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
