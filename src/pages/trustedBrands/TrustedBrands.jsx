import React from "react";
import { Data } from "../../string/Data";
import {
  FaGoogle,
  FaFacebook,
  FaAmazon,
  FaWordpressSimple,
  FaArrowRight
} from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { SiShopify } from "react-icons/si";

const TrustedBrands = () => {
  const brands = [
    {
      name: "Google Ads",
      icon: <FaGoogle />,
      color: "#4285F4",
      text: "Generate high-quality leads with data-driven PPC campaigns."
    },
    {
      name: "Meta Marketing",
      icon: <FaMeta />,
      color: "#0866FF",
      text: "Reach and engage your audience through Facebook & Instagram advertising."
    },
    {
      name: "Shopify",
      icon: <SiShopify />,
      color: "#7AB55C",
      text: "Launch high-converting eCommerce stores that drive online sales."
    },
    {
      name: "WordPress",
      icon: <FaWordpressSimple />,
      color: "#21759B",
      text: "Build fast, secure & SEO-friendly websites that convert visitors."
    },
    {
      name: "Amazon",
      icon: <FaAmazon />,
      color: "#FF9900",
      text: "Boost product sales with Amazon marketplace optimization."
    }
  ];

  return (
    <section
      className="position-relative overflow-hidden py-4"
      style={{
        background: "linear-gradient(135deg,#020617,#111827,#1e1b4b)"
      }}
    >
      {/* Blur Effects */}
      <div
        className="position-absolute rounded-circle"
        style={{
          width: "350px",
          height: "350px",
          background: "#2563eb",
          filter: "blur(130px)",
          top: "-100px",
          left: "-100px",
          opacity: 0.35
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
          opacity: 0.35
        }}
      ></div>

      <div className="container position-relative">
        <div className="text-center text-white mb-4">
          {/* 
          <span
            className="badge rounded-pill px-4 py-2 mb-3"
            style={{
              background: "rgba(255,255,255,.10)",
              backdropFilter: "blur(15px)"
            }}
          >
            ⭐ Trusted Digital Growth Partners
          </span> */}

          <h2
            className="display-5 fw-bold mb-0"
            style={{
              background: "linear-gradient(90deg,#ffffff,#cbd5e1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 18px rgba(255,255,255,.35)"
            }}
          >
            Trusted
            <span
              className="text-warning"
              style={{
                background: "linear-gradient(90deg,#facc15,#fb923c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 20px rgba(250,204,21,.35)"
              }}
            >
              {" "}
              Digital Growth{" "}
            </span>
            Partners
          </h2>

          <p className="lead text-light">
            Delivering measurable business growth through trusted marketing
            platforms.
          </p>
        </div>

        {/* SEO Content Card */}

        <div className="row justify-content-center mb-4">
          <div className="col-lg-11">
            <div
              className="p-4 rounded-5 text-center text-white shadow-lg"
              style={{
                background: "rgba(255,255,255,.08)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,.15)"
              }}
            >
              <h4 className="fw-bold mb-2 text-warning">
                Best Digital Marketing Agency in Dhanbad
              </h4>

              <p
                className="mb-0 text-light"
                style={{
                  lineHeight: "1.9"
                }}
              >
                <strong>AH Growth Agency</strong> helps businesses achieve
                measurable growth through innovative digital marketing
                solutions. Whether you're looking for a trusted
                <strong> SEO Agency in Dhanbad</strong> to improve search
                rankings or a results-driven
                <strong> Social Media Marketing Agency in Dhanbad</strong>, we
                leverage industry-leading platforms like
                <strong> Google Ads, Meta, Shopify, WordPress</strong> and
                <strong> Amazon</strong> to deliver campaigns that increase
                website traffic, generate qualified leads and maximize ROI.
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}

        <div className="row g-3 justify-content-center">
          {brands.map((brand, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <div
                className="h-100 text-center text-white p-4 rounded-5 shadow-lg brand-card"
                style={{
                  background: "rgba(255,255,255,.08)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,.15)",
                  transition: "all .4s ease",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-12px) scale(1.03)";

                  e.currentTarget.style.border = `1px solid ${brand.color}`;

                  e.currentTarget.style.boxShadow = `0 20px 50px ${brand.color}55`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";

                  e.currentTarget.style.border =
                    "1px solid rgba(255,255,255,.15)";

                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,.2)";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "120px",
                    height: "120px",
                    background: brand.color,
                    filter: "blur(80px)",
                    opacity: 0.25,
                    top: "-40px",
                    right: "-40px"
                  }}
                ></div>
                <div
                  className="fs-1 mb-2"
                  style={{
                    fontSize: "55px",
                    color: brand.color,
                    filter: `drop-shadow(0 0 15px ${brand.color})`
                  }}
                >
                  {brand.icon}
                </div>
                <h5 className="fw-bold">{brand.name}</h5>

                <p className="text-light mb-0">{brand.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}

        <div className="row text-center text-white mt-3 mt-md-5">
          <div className="col-md-4 mb-4">
            <h2 className="fw-bold text-warning">{Data.BusinessesServed}</h2>

            <p className="mb-0">Businesses Served</p>
          </div>

          <div className="col-md-4 mb-4">
            <h2 className="fw-bold text-warning">{Data.Experts}</h2>

            <p className="mb-0">Marketing Experts</p>
          </div>

          <div className="col-md-4 mb-4">
            <h2 className="fw-bold text-warning">{Data.ClientSatisfaction}</h2>

            <p className="mb-0">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
