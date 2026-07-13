import { BsStarFill, BsPatchCheckFill, BsQuote } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rahul Sharma",
    position: "Owner, RS Enterprises",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Working with AH Growth Agency has been a great experience. Their SEO and digital marketing strategies helped us increase our website traffic and generate quality leads. The team is responsive, knowledgeable, and focused on delivering results."
  },
  {
    name: "Priya Singh",
    position: "Founder, Urban Boutique",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    review:
      "AH Growth Agency transformed our social media presence. Their creative content and advertising campaigns significantly improved our engagement and brought in new customers. I highly recommend them to anyone looking to grow their business online."
  },
  {
    name: "Amit Kumar",
    position: "Director, AK Construction",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    review:
      "We partnered with AH Growth Agency for website development and digital marketing. The website looks professional, loads quickly, and has helped us attract more inquiries. Their team exceeded our expectations."
  },
  {
    name: "Neha Verma",
    position: "Marketing Manager, Bright Education Academy",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    review:
      "The team at AH Growth Agency is professional, transparent, and results-driven. Their SEO and Google Ads campaigns improved our online visibility and increased student inquiries within a few months."
  },
  {
    name: "Sandeep Agarwal",
    position: "Owner, Agarwal Electronics",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    review:
      "Choosing AH Growth Agency was one of the best decisions for our business. Their digital marketing expertise helped us reach a wider audience, improve brand awareness, and increase sales."
  }
];

export default function Testimonials() {
  return (
    <section
      className="position-relative overflow-hidden py-4 py-md-4"
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
      />

      <div className="container position-relative">
        <div className="text-center mb-4">
          <h2 className="display-5 fw-bold mt-1 mb-0 text-white">
            What <span className="fw-bold text-warning">Our Clients </span> Say
          </h2>
          <p className="text-light lead fs-6">Trusted by businesses across India.</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={25}
          breakpoints={{
            0: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1200: {
              slidesPerView: 3
            }
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card h-100">
                <div className="quote-icon">
                  <BsQuote />
                </div>

                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <BsStarFill key={i} />
                  ))}
                </div>

                <p className="review">"{item.review}"</p>

                <div className="client mt-">
                  <img src={item.image} alt={item.name} />

                  <div>
                    <h5>
                      {item.name}
                      <BsPatchCheckFill className="verify" />
                    </h5>
                    <span>{item.position}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
