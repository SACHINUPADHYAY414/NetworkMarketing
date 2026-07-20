import React, { useState } from "react";
import { ContactData, Data } from "../../string/Data";
import { postData } from "../../components/api";
import ENDPOINTS from "../../components/api/allEndpoints";

const Contact = () => {
  const [services] = useState([
    "SEO Optimization",
    "Social Media Marketing",
    "Google Ads",
    "Content Marketing",
    "Website Development",
    "Email Marketing"
  ]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await postData(ENDPOINTS.CONTACT, formData);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-page">
      <div className="container py-5">
        <div className="text-center text-white mb-4">
          <span className="contact-badge">Digital Marketing Experts</span>

          <h1 className="display-6 d-none d-md-block fw-bold mt-3 mb-0">
            Grow Your Business With
            <span className="text-warning"> Digital Marketing</span>
          </h1>
          <h1 className="fs-1 d-md-none d-block fw-bold mt-3 mb-0">
            Grow Your Business With
            <span className="text-warning"> Digital Marketing</span>
          </h1>
          <p className="lead opacity-75">
            Get a free consultation and create powerful strategies to increase
            your traffic, leads and sales.
          </p>
        </div>

        <div className="row align-items-center g-4">
          <div className="col-lg-5 text-white text-center">
            <div className="marketing-image mx-auto d-none d-md-block">
              <img
                src={Data.logo}
                alt="Logo"
                className="rounded-circle img-fluid"
              />
            </div>

            <h2 className="fw-bold mt-0 mt-md-4">
              Ready To Scale Your Business?
            </h2>

            <p className="opacity-75">
              Our experts help brands grow with SEO, Paid Ads, Social Media and
              Web Solutions.
            </p>

            {/* <div className="row mt-4">
              <div className="col-4">
                <h3 className="text-warning">{Data.Projects}</h3>
                <p>Projects</p>
              </div>

              <div className="col-4">
                <h3 className="text-warning">{Data.HappyClient}</h3>
                <p>Clients</p>
              </div>

              <div className="col-4">
                <h3 className="text-warning">{Data.ClientSatisfaction}</h3>
                <p>Success</p>
              </div>
            </div> */}
          </div>
          <div className="col-lg-7">
            <div className="contact-card p-4 p-md-5">
              <h3 className="fw-bold mb-4 text-white">Get Free Consultation</h3>

              <form onSubmit={submitHandler}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      className="form-control"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <select
                      className="form-select"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select Service</option>

                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <textarea
                  className="form-control mb-4"
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project"
                ></textarea>

                <button className="btn btn-warning w-100 py-2 fw-bold rounded-pill">
                  {loading ? "Sending..." : "Get Free Consultation →"}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="row mt-2 mt-md-3 g-3">
          {ContactData.contactInfo.map((item) => (
            <div className="col-md-4" key={item.title}>
              <div className="info-card">
                <i className={item.icon}></i>
                <h5>{item.title}</h5>
                <p>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
