import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { postData } from "../../components/api";
import ENDPOINTS from "../../components/api/allEndpoints";
import { Data } from "../../string/Data";

const auditFields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your name"
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email"
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "Enter phone number"
  },
  {
    name: "website",
    label: "Website URL",
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

const Audit = () => {
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
    } catch (error) {
      console.error(error);

      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="d-flex align-items-center bg-light py-4 py-md-5"
      style={{ minHeight: "90vh" }}
    >
      <Container>
        <Row className="align-items-center g-3 g-md-5">
          <Col lg={6} className="ms-2 ms-md-0">
            <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
              FREE DIGITAL MARKETING AUDIT
            </span>

            <h1 className="audit-title fw-bold mt-2">
              Find Hidden Growth
              <span className="d-block text-primary">Opportunities</span>
              For Your Business 🚀
            </h1>

            <p className="lead text-secondary mt-3">
              Get a complete analysis of your website, SEO performance,
              competitors and online marketing strategy from our experts.
            </p>

            <div className="mt-2">
              {[
                "SEO Health Analysis",
                "Competitor Research",
                "Website Performance Report",
                "Growth Strategy Plan"
              ].map((item) => (
                <p key={item} className="mb-2 fw-medium">
                  ✅ {item}
                </p>
              ))}
            </div>
          </Col>

          <Col lg={6}>
            <Card className="border-0 shadow-lg rounded-4">
              <Card.Body className="p-3 p-md-4">
                <div className="text-center mb-4">
                  <div
                    className="
                            bg-primary
                            text-white
                            rounded-circle
                            d-flex
                            align-items-center
                            justify-content-center
                            mx-auto
                            mb-3
                        "
                    style={{
                      width: "70px",
                      height: "70px",
                      fontSize: "40px"
                    }}
                  >
                    🚀
                  </div>

                  <h3 className="fw-bold">Request Your Free Audit</h3>

                  <p className="text-secondary">
                    Our expert will contact you shortly.
                  </p>
                </div>

                <Form onSubmit={handleSubmit}>
                  {auditFields.map((field) => (
                    <Form.Group className="mb-3" key={field.name}>
                      <Form.Control
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  ))}

                  <Form.Select
                    className="mb-3 rounded-3"
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

                  <Form.Control
                    as="textarea"
                    rows={2}
                    className="mb-3 rounded-3"
                    name="message"
                    placeholder="Tell us about your business"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                  <Button
                    type="submit"
                    className="w-100 py-2 rounded-3 fw-semibold"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Get Free Audit Report"}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Audit;
