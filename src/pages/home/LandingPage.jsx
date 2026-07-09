import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1800",
    title: "Build Your Dream Business",
    description:
      "Join thousands of successful entrepreneurs. Grow your network and achieve financial freedom.",
    button: "Join Now",
    members: "25K+",
    countries: "150+",
    years: "10+",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1800",
    title: "Earn Unlimited Income",
    description:
      "Create multiple income streams with our powerful network marketing system.",
    button: "Start Today",
    members: "50K+",
    countries: "180+",
    years: "12+",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800",
    title: "Grow Your Team",
    description:
      "Build a strong team, become a leader and unlock exciting rewards every month.",
    button: "Join Team",
    members: "75K+",
    countries: "200+",
    years: "15+",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1800",
    title: "Your Success Starts Here",
    description:
      "Learn, earn and lead with India's fastest growing network marketing company.",
    button: "Get Started",
    members: "100K+",
    countries: "220+",
    years: "20+",
  },
];

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url(${slides[currentSlide].image})`,
      }}
    >
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-7">

            <div key={currentSlide} className="hero-content">

              <h1 className="hero-title">
                {slides[currentSlide].title}
              </h1>

              <p className="hero-desc">
                {slides[currentSlide].description}
              </p>

              <div className="mt-4 d-flex flex-wrap gap-3">
                <button className="btn btn-warning btn-lg px-4">
                  {slides[currentSlide].button}
                </button>

                <button className="btn btn-outline-light btn-lg px-4">
                  Learn More
                </button>
              </div>

              <div className="row text-center mt-5 stats">

                <div className="col-4">
                  <h2>{slides[currentSlide].members}</h2>
                  <p>Members</p>
                </div>

                <div className="col-4">
                  <h2>{slides[currentSlide].countries}</h2>
                  <p>Countries</p>
                </div>

                <div className="col-4">
                  <h2>{slides[currentSlide].years}</h2>
                  <p>Years</p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}