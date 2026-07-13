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
  const whyChoose = [
    {
      icon: "📈",
      title: "ROI Focused Marketing",
      desc: "We create marketing campaigns that generate measurable business growth and maximize return on investment."
    },
    {
      icon: "👨‍💻",
      title: "Experienced Marketing Experts",
      desc: "Our team consists of skilled SEO specialists, designers, developers and digital marketers."
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      desc: "Premium digital marketing solutions at competitive prices for every business size."
    },
    {
      icon: "📊",
      title: "Transparent Reporting",
      desc: "Receive regular reports with complete campaign performance and growth insights."
    },
    {
      icon: "🎯",
      title: "Customized Strategy",
      desc: "Every business is unique, so we build personalized marketing strategies."
    },
    {
      icon: "⚡",
      title: "Fast Customer Support",
      desc: "Our support team is always available to help you whenever you need us."
    },
    {
      icon: "🚀",
      title: "Proven Lead Generation",
      desc: "Generate quality leads that convert into loyal customers and business growth."
    },
    {
      icon: "🤖",
      title: "Latest AI Marketing Tools",
      desc: "We use modern AI-powered tools to improve campaign performance and efficiency."
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

  const whyCard = (item, index, delay = 0) => (
    <div
      className={`col-lg-3 col-md-6 col-12 ${delay ? "fade-card" : ""}`}
      key={index}
      style={delay ? { animationDelay: `${delay}s` } : {}}
    >
      <div className="why-glass-card h-100 text-center p-4">
        <div className="why-icon">{item.icon}</div>

        <h4 className="fw-bold mt-4 text-white">{item.title}</h4>

        <p className="text-light opacity-75 flex-grow-1">{item.desc}</p>

        <button className="btn btn-warning rounded-pill px-4 mt-3">
          Learn More
        </button>
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
        <div className="text-center text-white mb-4">
          <h2
            className="display-5 fw-bold mb-0"
            style={{
              background: "linear-gradient(90deg,#ffffff,#cbd5e1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 18px rgba(255,255,255,.35)"
            }}
          >
            Our Digital{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#facc15,#fb923c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 20px rgba(250,204,21,.35)"
              }}
            >
              Marketing
            </span>{" "}
            Services
          </h2>

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
            {showAll ? "Show Less ▲" : "Explore More Services 🚀"}
          </button>
        </div>
        {/* Why Choose */}
        <div className="py-4 py-mb-4 pb-0">
          <div className="text-center mb-4">
            <h2 className="display-5 fw-bold mb-0 text-white">
              {" "}
              Why Choose <span className="text-warning">AH Growth </span>{" "}
              Agency?
            </h2>

            <p className="text-light opacity-75">
              Why We're the Best Digital Marketing Agency in Dhanbad
            </p>
          </div>

          <div className="row g-4">
            {whyChoose.map((item, index) => whyCard(item, index, index * 0.1))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
