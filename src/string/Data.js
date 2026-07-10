import Logo from "../assets/Logo.jpeg";
import FooterBg from "../assets/FooterBg.jpg";

export const Data = {
  logo: Logo,
  companyName: "AH GROWTH AGENCY",
  footerBg: FooterBg,

  address: "Noida, Uttar Pradesh, India",
  phone: "919876543210",
  email: "info@ahgrowthagency.com",
  startUp: "2025",
  countries:"20+",
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

  WHATSAPP_MESSAGE: "Hello, I want to know more about your services."
};

export const getExperience = () => {
  const startDate = new Date(Data.startUp);
  const today = new Date();

  let years = today.getFullYear() - startDate.getFullYear();

  const monthDiff = today.getMonth() - startDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < startDate.getDate())
  ) {
    years--;
  }

  return years;
};

export const ContactData = {
  heading: "Let's Grow Your Business 🚀",
  subHeading:
    "We'd love to hear about your project. Contact our Digital Marketing experts today.",

  address: "Noida, Uttar Pradesh, India",
  email: "info@ahgrowthagency.com",
  phone: "+91 9876543210",

  services: [
    "SEO Optimization",
    "Social Media Marketing",
    "Google Ads",
    "Content Marketing",
    "Website Development",
    "Email Marketing",
  ],

  formFields: [
    {
      label: "Full Name",
      type: "text",
      name: "fullName",
      placeholder: "Enter your name",
      col: "col-md-6",
    },
    {
      label: "Email Address",
      type: "email",
      name: "email",
      placeholder: "Enter your email",
      col: "col-md-6",
    },
    {
      label: "Phone Number",
      type: "tel",
      name: "phone",
      placeholder: "Enter phone number",
      col: "col-12",
    },
  ],

  contactInfo: [
    {
      title: "Office",
      value: "Noida, Uttar Pradesh, India",
      icon: "bi bi-geo-alt-fill",
    },
    {
      title: "Email",
      value: "info@ahgrowthagency.com",
      icon: "bi bi-envelope-fill",
    },
    {
      title: "Phone",
      value: "+91 9876543210",
      icon: "bi bi-telephone-fill",
    },
  ],

  socialLinks: [
    {
      icon: "bi bi-facebook",
      color: "text-primary",
      url: "https://facebook.com",
    },
    {
      icon: "bi bi-instagram",
      color: "text-danger",
      url: "https://instagram.com",
    },
    {
      icon: "bi bi-linkedin",
      color: "text-primary",
      url: "https://linkedin.com",
    },
    {
      icon: "bi bi-twitter-x",
      color: "text-dark",
      url: "https://x.com",
    },
  ],
};