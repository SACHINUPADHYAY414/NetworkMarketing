import React from "react";

const Process = ({ data, colClass = "col-md-6 col-lg-3" }) => {
  return (
    <div className="row g-3">
      <div className="seo-timeline">
        {data.map((item, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="timeline-number">{item.no}</div>

            <div className="timeline-card">
              <div className="timeline-icon">{item.icon}</div>
              <h4 className="text-white fw-bold mt-3">{item.title}</h4>
              <p className="text-light mb-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
