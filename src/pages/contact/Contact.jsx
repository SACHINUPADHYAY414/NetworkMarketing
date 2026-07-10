import React, { useEffect, useState } from "react";
import { ContactData } from "../../string/Data";
import { getData, postData } from "../../components/api";
import ENDPOINTS from "../../components/api/allEndpoints";

const Contact = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "SEO Optimization"
    },
    {
      id: 2,
      name: "Social Media Marketing"
    },
    {
      id: 3,
      name: "Google Ads"
    },
    {
      id: 4,
      name: "Content Marketing"
    },
    {
      id: 5,
      name: "Website Development"
    },
    {
      id: 6,
      name: "Email Marketing"
    }
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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // useEffect(() => {
  //   loadServices();
  // }, []);

  const loadServices = async () => {
    try {
      const res = await getData(ENDPOINTS.SERVICES);

      console.log("API Response:", res.data);

      const data = Array.isArray(res.data)
        ? res.data
        : res.data.data || res.data.content || [];

      setServices(data);
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await postData(ENDPOINTS.CONTACT, formData);

      console.log(res.data);

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
    <section
      className="py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)"
      }}
    >
      <div className="container">
        <div className="text-center text-white mb-5">
          <h1>{ContactData.heading}</h1>
          <p>{ContactData.subHeading}</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <div
              className="card border-0 shadow-lg p-4"
              style={{ borderRadius: 20 }}
            >
              <h3 className="text-primary mb-4">Send us a Message</h3>

              <form onSubmit={submitHandler}>
                <div className="row">
                  {ContactData.formFields.map((field) => (
                    <div className={`${field.col} mb-2`} key={field.name}>
                      <label className="form-label fw-semibold">
                        {field.label}
                      </label>

                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        required
                        onChange={handleChange}
                        className="form-control"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                </div>

                <div className="mb-2">
                  <label className="form-label fw-semibold">
                    Select Service
                  </label>

                  <select
                    className="form-select"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select Service</option>

                    {Array.isArray(services) &&
                      services.map((service) => (
                        <option
                          key={service.id ?? service}
                          value={service.id ?? service}
                        >
                          {service.name ?? service}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Message</label>

                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button className="btn btn-primary w-100 btn-lg" type="submit">
                  <i className="bi bi-send-fill me-2"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-5">
            <div
              className="card border-0 shadow-lg p-4 text-white"
              style={{
                borderRadius: 20,
                background: "linear-gradient(135deg,#2563eb,#4f46e5,#7c3aed)"
              }}
            >
              <h3 className="mb-4">Contact Information</h3>

              {ContactData.contactInfo.map((item) => (
                <div
                  className="d-flex align-items-center mb-4"
                  key={item.title}
                >
                  <div className="fs-2 me-3">
                    <i className={item.icon}></i>
                  </div>

                  <div>
                    <h5>{item.title}</h5>
                    <p className="mb-0">{item.value}</p>
                  </div>
                </div>
              ))}

              <hr />

              <h5>Follow Us</h5>

              <div className="d-flex gap-3 mt-3">
                {ContactData.socialLinks.map((social) => (
                  <a
                    key={social.icon}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-light rounded-circle"
                  >
                    <i className={`${social.icon} ${social.color}`}></i>
                  </a>
                ))}
              </div>

              <div className="mt-4">
                <h4>Ready to boost your business?</h4>

                <p>
                  Let's build powerful marketing strategies that increase your
                  traffic, leads and sales.
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