import React from "react";

const WebServiceCard = ({ service }) => {
  return (
    <div className="pm-card h-100">
      <div
        className={`pm-icon bg-${service.color}`}
        style={{
          backgroundColor: service.color,
          color: "#fff"
        }}
      >
        {service.icon}
      </div>

      <h4 className="pm-title">{service.title}</h4>

      <p className="pm-text">{service.desc}</p>
    </div>
  );
};

export default WebServiceCard;
