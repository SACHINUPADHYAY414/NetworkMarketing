import React from "react";

const Contact = () => {
  return (
    <section
      className="py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)"
      }}
    >
      <div className="container">
        {/* Heading */}
        <div className="text-center text-white mb-5">
          <h1 className="display-4 fw-bold">Let's Grow Your Business 🚀</h1>
          <p className="lead text-light">
            We'd love to hear about your project. Contact our Digital Marketing
            experts today.
          </p>
        </div>

        <div className="row g-4 align-items-center">
          {/* Contact Form */}
          <div className="col-lg-7">
            <div
              className="card border-0 shadow-lg p-4"
              style={{ borderRadius: "20px" }}
            >
              <h3 className="fw-bold mb-4 text-primary">Send us a Message</h3>

              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter phone number"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Select Service
                  </label>

                  <select className="form-select">
                    <option>SEO Optimization</option>
                    <option>Social Media Marketing</option>
                    <option>Google Ads</option>
                    <option>Content Marketing</option>
                    <option>Website Development</option>
                    <option>Email Marketing</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button className="btn btn-primary btn-lg w-100">
                  <i className="bi bi-send-fill me-2"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-5">
            <div
              className="card border-0 shadow-lg p-4 text-white"
              style={{
                background: "linear-gradient(135deg,#2563eb,#4f46e5,#7c3aed)",
                borderRadius: "20px"
              }}
            >
              <h3 className="fw-bold mb-4">Contact Information</h3>

              <div className="d-flex align-items-center mb-4">
                <div className="fs-2 me-3">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>

                <div>
                  <h5 className="mb-1">Office</h5>
                  <p className="mb-0">Patna, Bihar, India</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="fs-2 me-3">
                  <i className="bi bi-envelope-fill"></i>
                </div>

                <div>
                  <h5 className="mb-1">Email</h5>
                  <p className="mb-0">info@digitalagency.com</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="fs-2 me-3">
                  <i className="bi bi-telephone-fill"></i>
                </div>

                <div>
                  <h5 className="mb-1">Phone</h5>
                  <p className="mb-0">+91 98765 43210</p>
                </div>
              </div>

              <hr className="border-light" />

              <h5 className="mb-3">Follow Us</h5>

              <div className="d-flex gap-3">
                <a href="/" className="btn btn-light rounded-circle">
                  <i className="bi bi-facebook text-primary"></i>
                </a>

                <a href="/" className="btn btn-light rounded-circle">
                  <i className="bi bi-instagram text-danger"></i>
                </a>

                <a href="/" className="btn btn-light rounded-circle">
                  <i className="bi bi-linkedin text-primary"></i>
                </a>

                <a href="/" className="btn btn-light rounded-circle">
                  <i className="bi bi-twitter-x"></i>
                </a>
              </div>

              <div className="mt-5">
                <h4 className="fw-bold">Ready to boost your business?</h4>

                <p className="text-light">
                  Let's build powerful marketing strategies that increase your
                  traffic, leads, and sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
