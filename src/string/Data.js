import Logo from "../assets/Logo.jpeg";
import FooterBg from "../assets/FooterBg.jpg";

export const Data = {
  logo: Logo,
  companyName: "AH GROWTH AGENCY",
  footerBg: FooterBg,

  address: "Noida, Uttar Pradesh, India",
  phone: "919876543210",
  email: "info@ahgrowthagency.com",

  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com"
  },

  navLinks: [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About Us",
      path: "/about"
    },
    {
      name: "Services",
      children: [
        {
          name: "Search Engine Optimization (SEO)",
          path: "/seo"
        },
        {
          name: "Social Media Marketing (SMM)",
          path: "/smm"
        },
        {
          name: "Content Creation",
          path: "/content-creation"
        },
        {
          name: "Performance Marketing",
          path: "/performance-marketing"
        }
      ]
    },
    {
      name: "Contact",
      path: "/contact"
    },
    {
      name: "FAQ",
      path: "/faq"
    },
    {
      name: "Blog",
      path: "/blog"
    }
  ],

  WHATSAPP_MESSAGE :
  "Hello, I want to know more about your services."
};
