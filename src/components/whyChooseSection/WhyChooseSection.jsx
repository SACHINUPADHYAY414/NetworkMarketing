import { Row, Col, Card } from "react-bootstrap";

const WhyChooseSection = ({ title, highlight, subtitle, cards = [] }) => {
  return (
    <>
      <Row className="mb-3 mt-3">
        <Col className="text-center">
          <h2 className="text-white fw-bold mb-0">
            {title}
            <span className="text-info"> {highlight}</span>
          </h2>

          <p className="text-light opacity-75">{subtitle}</p>
        </Col>
      </Row>

      <Row className="g-3">
        {cards.map((item, index) => {
          const Icon = item.icon;

          return (
            <Col lg={3} md={6} key={index}>
              <Card className="choose-card h-100 d-flex flex-column">
                <div className="choose-icon">
                  <Icon />
                </div>

                <div className="d-flex flex-column flex-grow-1">
                  <h5 className="text-warning card-title-fixed">
                    {item.title}
                  </h5>

                  <p className="mb-0">{item.text}</p>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default WhyChooseSection;
