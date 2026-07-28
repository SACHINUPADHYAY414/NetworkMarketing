import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { postData } from "../../components/api";
import ENDPOINTS from "../../components/api/allEndpoints";
import { Data } from "../../string/Data";

const auditFields = [
  {
    name: "name",
    type: "text",
    placeholder: "Full Name"
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email Address"
  },
  {
    name: "phone",
    type: "tel",
    placeholder: "Phone Number"
  },
  {
    name: "website",
    type: "url",
    placeholder: "Website URL"
  }
];

const services =
  Data.navLinks.find((item) => item.name === "Services")?.children || [];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  website: "",
  service: "",
  message: ""
};

const Notification = ({ show, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await postData(ENDPOINTS.FREE_AUDIT, formData);

      console.log(response);

      alert("Your Free Audit Request Submitted Successfully!");

      setFormData(initialForm);
      onClose();
    } catch (error) {
      console.error(error);

      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      show={show}
      onHide={onClose}
      className="premium-audit-modal"
      backdrop="static"
      keyboard={!loading}
    >
      <Modal.Body className="p-0">
        <div className="premium-audit-popup">
          <button
            type="button"
            className="premium-audit-close"
            onClick={onClose}
            disabled={loading}
            aria-label="Close"
          >
            <i className="bi bi-x-lg"></i>
          </button>

          <div className="premium-audit-header text-center">
            <div className="premium-audit-icon">
              <i className="bi bi-rocket-takeoff"></i>
            </div>

            <span className="premium-audit-label">
              FREE DIGITAL MARKETING AUDIT
            </span>

            <h3>Request Your Free Audit</h3>

            <p>Our expert will contact you shortly.</p>
          </div>

          <Form onSubmit={handleSubmit}>
            <div className="row g-3">
              {auditFields.map((field) => (
                <div className="col-md-6" key={field.name}>
                  <Form.Control
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}

              {/* Service */}
              <div className="col-12">
                <Form.Select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>

                  {services.map((service) => (
                    <option key={service.path} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </Form.Select>
              </div>

              {/* Message */}
              <div className="col-12">
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  placeholder="Tell us about your business"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit */}
              <div className="col-12">
                <Button
                  type="submit"
                  className="premium-audit-submit w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get Free Audit Report
                      <i className="bi bi-arrow-right ms-2"></i>
                    </>
                  )}
                </Button>
              </div>
            </div>
          </Form>
          <div className="premium-audit-footer">
            <i className="bi bi-shield-check"></i>

            <span>Your information is safe and secure with us.</span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Notification;
