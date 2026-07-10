import React, { useState } from "react";

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      icon: "📈",
      title: "Search Engine Optimization (SEO)",
      desc: "Improve your Google ranking and drive organic traffic."
    },
    {
      icon: "📱",
      title: "Social Media Marketing (SMM)",
      desc: "Grow your brand across Facebook, Instagram, LinkedIn and more."
    },
    {
      icon: "🎯",
      title: "Google Ads (PPC)",
      desc: "Run high-converting Google Ads campaigns for quality leads."
    },
    {
      icon: "📢",
      title: "Meta Ads",
      desc: "Generate leads through Facebook & Instagram advertising."
    },
    {
      icon: "✍️",
      title: "Content Creation",
      desc: "Professional content for websites, blogs and social media."
    },
    {
      icon: "📝",
      title: "Content Marketing",
      desc: "Attract and convert customers with valuable content."
    },
    {
      icon: "💻",
      title: "Website Development",
      desc: "Responsive and conversion-focused business websites."
    },
    {
      icon: "🛒",
      title: "E-Commerce Marketing",
      desc: "Boost online store sales with proven marketing strategies."
    },
    {
      icon: "📊",
      title: "Performance Marketing",
      desc: "Data-driven campaigns focused on ROI and business growth."
    },
    {
      icon: "📧",
      title: "Email Marketing",
      desc: "Reach customers directly with personalized email campaigns."
    },
    {
      icon: "🎥",
      title: "Video Marketing",
      desc: "Create engaging video content for maximum reach."
    },
    {
      icon: "⭐",
      title: "Brand Management",
      desc: "Build a strong and trusted brand identity online."
    }
  ];

  const card = (service, index, delay = 0) => (
    <div
      className={`col-lg-4 col-md-6 col-12 mb-4 ${delay ? "fade-card" : ""}`}
      key={index}
      style={delay ? { animationDelay: `${delay}s` } : {}}
    >
      <div
        className="service-card h-100 p-4 rounded-4 text-white shadow-lg d-flex flex-column"
        style={{
          background: "rgba(255,255,255,.08)",
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(255,255,255,.15)",
          transition: "all .3s ease",
          cursor: "pointer",
          minHeight: "280px"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <div className="fs-1 mb-1">{service.icon}</div>

        <h4 className="fw-bold mb-1">{service.title}</h4>

        <p className="text-light">{service.desc}</p>

        <div className="mt-auto">
          <button className="btn btn-outline-warning rounded-pill w-100">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <section
      className="py-4 position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg,#030712,#111827,#1e1b4b)"
      }}
    >
      <div
        className="position-absolute rounded-circle"
        style={{
          width: "400px",
          height: "400px",
          background: "#2563eb",
          filter: "blur(140px)",
          top: "20%",
          left: "-150px",
          opacity: 0.35
        }}
      ></div>

      <div className="container position-relative">
        <div className="text-center text-white mb-5">
          <span
            className="badge rounded-pill px-4 py-2"
            style={{ background: "rgba(255,255,255,.15)" }}
          >
            🚀 Our Expertise
          </span>

          <h2 className="display-5 fw-bold mt-3">Digital Marketing Services</h2>

          <p className="lead text-light">
            Powerful solutions designed to grow your business online
          </p>
        </div>

        <div className="row text-center">
          {services.slice(0, 6).map((service, index) => card(service, index))}
        </div>
        <div className={`collapse ${showAll ? "show" : ""}`}>
          <div className="row text-center">
            {services
              .slice(6)
              .map((service, index) =>
                card(service, index + 6, (index + 1) * 0.15)
              )}
          </div>
        </div>

        <div className="text-center">
          <button
            className="btn btn-warning btn-lg rounded-pill px-3 fw-semibold fs-6 font-monospace"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less ▲" : "Explore All Services 🚀"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
