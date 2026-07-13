import Logo from "../assets/Logo.jpeg";
import FooterBg from "../assets/FooterBg.jpg";

export const Data = {
  logo: Logo,
  companyName: "AH GROWTH AGENCY",
  footerBg: FooterBg,
  address:
    "AH Growth Agency Jitu Library, Luby Circular Raod Near luxus Inn Hotel 826007",
  phone: "919296940215",
  email: "ahgrowthagency@gmail.com",
  startUp: "2025",
  countries: "5+",
  HappyClient: "50+",
  Projects: "100+",
  BusinessesServed: "100+",
  Experts: "25+",
  ClientSatisfaction: "98%",
  WHATSAPP_MESSAGE:
    "Hi AH Growth Agency! 👋 I’m interested in your digital marketing services and would like to know how you can help grow my business.",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61592067171405",
    instagram: "https://www.instagram.com/ahgrowth_agency/",
    linkedin:
      "https://www.linkedin.com/company/ah-growth-agency/?viewAsMember=true",
    pinterest: "https://in.pinterest.com/ahgrowth/"
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
          name: "Performance Marketing",
          path: "/performance-marketing"
        },
        {
          name: "Website Development",
          path: "/website-developement"
        },
        {
          name: "Local SEO",
          path: "/local-seo"
        },
        {
          name: "Content Creation",
          path: "/content-creation"
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
  ]
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
  email: "[info@ahgrowthagency.com](mailto:info@ahgrowthagency.com)",
  phone: "+91 9876543210",

  services: [
    "SEO Optimization",
    "Social Media Marketing",
    "Google Ads",
    "Content Marketing",
    "Website Development",
    "Email Marketing"
  ],

  formFields: [
    {
      label: "Full Name",
      type: "text",
      name: "fullName",
      placeholder: "Enter your name",
      col: "col-md-6"
    },
    {
      label: "Email Address",
      type: "email",
      name: "email",
      placeholder: "Enter your email",
      col: "col-md-6"
    },
    {
      label: "Phone Number",
      type: "tel",
      name: "phone",
      placeholder: "Enter phone number",
      col: "col-12"
    }
  ],

  contactInfo: [
    {
      title: "Office",
      value: Data.address,
      icon: "bi bi-geo-alt-fill"
    },
    {
      title: "Email",
      value: Data.email,
      icon: "bi bi-envelope-fill"
    },
    {
      title: "Phone",
      value: Data.phone,
      icon: "bi bi-telephone-fill"
    }
  ],

  socialLinks: [
    {
      icon: "bi bi-facebook",
      color: "text-primary",
      url: "https://facebook.com"
    },
    {
      icon: "bi bi-instagram",
      color: "text-danger",
      url: "https://instagram.com"
    },
    {
      icon: "bi bi-linkedin",
      color: "text-primary",
      url: "https://linkedin.com"
    },
    {
      icon: "bi bi-twitter-x",
      color: "text-dark",
      url: "https://x.com"
    }
  ]
};
