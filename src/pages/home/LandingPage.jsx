import { useEffect, useState } from "react";
import { Data, getExperience } from "../../string/Data";
import TrustedBrands from "../trustedBrands/TrustedBrands";
import Services from "../services/Services";
import { useNavigate } from "react-router-dom";
import Testimonials from "../../components/testimonial/Testimonial";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800",
    title: "Grow Your Business with",
    highlight: "the Best Digital Marketing Agency in Dhanbad",
    description:
      "Boost your business with SEO, Google Ads, Meta Ads, Social Media Marketing, Website Development, and Branding."
  },
  {
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1800",
    title: "Results-Driven",
    highlight: "SEO & Google Ads",
    description:
      "Increase website traffic, generate quality leads, and maximize ROI with data-driven marketing."
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1800",
    title: "Grow Faster with",
    highlight: "Digital Marketing Experts",
    description:
      "Custom marketing strategies that improve visibility, generate leads, and grow your business."
  }
];

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

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
            <div className="col-lg-10">
              <div className="hero-content" key={currentSlide}>
                <span className="hero-badge text-warning fw-semibold fst-italic">
                  🚀 Digital Marketing Agency
                </span>

                <h1 className="hero-title">
                  {slides[currentSlide].title}{" "}
                  <span className="hero-highlight">
                    {slides[currentSlide].highlight}
                  </span>
                </h1>
                <p className="hero-description">
                  {slides[currentSlide].description}
                </p>

                <div className="d-flex gap-3 flex-wrap mt-4 justify-content-center justify-content-md-start">
                  <button
                    className="btn btn-warning btn-lg rounded-pill px-3 px-md-4 fw-semibold fs-6"
                    onClick={() => navigate("/audit")}
                  >
                    Get Free Consultation
                  </button>
{/* 
                  <button className="btn btn-outline-light btn-lg rounded-pill px-3 px-md-4 fw-semibold">
                    View Portfolio
                  </button> */}
                </div>

                <div className="row mt-3 g-4">
                  <div className="col-4">
                    <h2>{Data.HappyClient}</h2>
                    <p>Happy Clients</p>
                  </div>

                  <div className="col-4">
                    <h2>{Data.Projects}</h2>
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
      <Testimonials/>
    </>
  );
}
