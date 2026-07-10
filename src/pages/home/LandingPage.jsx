import { useEffect, useState } from "react";
import { Data, getExperience } from "../../string/Data";
import TrustedBrands from "../trustedBrands/TrustedBrands";
import Services from "../services/Services";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800",
    title: "Grow Your Business With Digital Marketing",
    description:
      "We help brands increase traffic, generate qualified leads and grow revenue with SEO, Google Ads, Social Media Marketing and Web Solutions."
  },
  {
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1800",
    title: "Turn Visitors Into Loyal Customers",
    description:
      "Our data-driven marketing strategies help businesses improve online visibility and achieve measurable growth."
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1800",
    title: "SEO, Ads & Social Media Experts",
    description:
      "From search rankings to paid campaigns, we create digital strategies that deliver real business results."
  }
];

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(
rgba(3,7,18,.75),
rgba(3,7,18,.75)
),
url(${slides[currentSlide].image})`
        }}
      >
        <div className="container">
          <div className="row align-items-center min-vh-100">
            {/* LEFT CONTENT */}

            <div className="col-lg-7">
              <div className="hero-content" key={currentSlide}>
                <span className="hero-badge text-warning fw-semibold fst-italic">🚀 Digital Marketing Agency</span>

                <h1 className="hero-title">
                  {slides[currentSlide].title}
                </h1>

                <p className="hero-description">
                  {slides[currentSlide].description}
                </p>

                <div className="d-flex gap-3 flex-wrap mt-4 justify-content-center justify-content-md-start">
                  <button className="btn btn-warning btn-lg rounded-pill px-3 px-md-4 fw-semibold fs-6">
                    Get Free Consultation
                  </button>

                  <button className="btn btn-outline-light btn-lg rounded-pill px-3 px-md-4 fw-semibold">
                    View Portfolio
                  </button>
                </div>

                <div className="row mt-3 g-4">
                  <div className="col-4">
                    <h2>500+</h2>

                    <p>Happy Clients</p>
                  </div>

                  <div className="col-4">
                    <h2>1500+</h2>

                    <p>Projects</p>
                  </div>

                  <div className="col-4">
                    <h2>{getExperience()}+</h2>

                    <p>Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustedBrands />
      <Services />
    </>
  );
}
