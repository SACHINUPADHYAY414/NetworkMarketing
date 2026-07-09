import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import {Data} from "../../String/Data";

const WhatsappButton = () => {

  return (
    <a
  href={`https://wa.me/${Data.phone}?text=${encodeURIComponent(Data.WHATSAPP_MESSAGE)}`}
  target="_blank"
  rel="noopener noreferrer"
  className="position-fixed bottom-0 end-0 m-4 rounded-circle bg-success d-flex justify-content-center align-items-center shadow"
  style={{
    width: "60px",
    height: "60px",
    zIndex: 1055,
    textDecoration: "none",
  }}
>
  <FaWhatsapp size={35} color="#fff" />
</a>
  );
};

export default WhatsappButton;