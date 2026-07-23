import {
  FaHeart,
  FaUsers,
  FaChartLine,
  FaWhatsapp,
  FaArrowRight,
  FaBullseye,
  FaGoogle,
  FaChartBar,
  FaBolt,
  FaHeadset,
  FaSyncAlt,
  FaLaptopCode,
  FaMobileAlt,
  FaSearch,
  FaShieldAlt,
  FaRupeeSign,
  FaTools,
  FaComments,
  FaMapMarkedAlt,
  FaSearchLocation,
  FaWallet
} from "react-icons/fa";

import { FaMoneyBillTrendUp } from "react-icons/fa6";

import { GiFocusedLightning } from "react-icons/gi";

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

export const chooseCards = [
  {
    icon: FaHeart,
    title: "Customized Social Media Strategies",
    text: "Social media plans designed according to your business goals."
  },
  {
    icon: FaHeart,
    title: "Creative Content Tailored to Your Audience",
    text: "Engaging reels, graphics, videos and captions."
  },
  {
    icon: FaUsers,
    title: "Audience Growth",
    text: "Build strong relationships with your target audience."
  },
  {
    icon: FaChartLine,
    title: "Performance Growth",
    text: "Data-driven campaigns for better ROI."
  },
  {
    icon: FaWhatsapp,
    title: "Dedicated Social Media Specialists",
    text: "Regular updates and transparent reporting."
  },
  {
    icon: FaArrowRight,
    title: "Affordable Plans for Startups and SMEs",
    text: "Flexible packages for startups and brands."
  },
  {
    icon: GiFocusedLightning,
    title: "Focus on Engagement, Leads, and ROI",
    text: "Results-focused marketing for modern businesses."
  }
];

export const websiteDevelopementData = [
  {
    icon: FaLaptopCode,
    title: "Custom Website Design",
    text: "Website designs tailored according to your business goals and brand identity."
  },

  {
    icon: FaMobileAlt,
    title: "Mobile Responsive Design",
    text: "User-friendly layouts that work perfectly on mobile, tablet and desktop devices."
  },

  {
    icon: FaSearch,
    title: "SEO Friendly Structure",
    text: "Optimized website structure to improve search engine visibility and rankings."
  },

  {
    icon: FaBolt,
    title: "Fast Loading Performance",
    text: "Optimized code and assets for faster loading speed and better user experience."
  },

  {
    icon: FaShieldAlt,
    title: "Secure & Scalable Development",
    text: "Reliable websites built with secure coding practices and future scalability."
  },

  {
    icon: FaRupeeSign,
    title: "Affordable Pricing",
    text: "Cost-effective website solutions for startups and small businesses."
  },

  {
    icon: FaTools,
    title: "Website Maintenance & Support",
    text: "Regular updates, improvements and ongoing technical support."
  },

  {
    icon: FaComments,
    title: "Transparent Communication",
    text: "Clear updates and smooth communication throughout the project."
  }
];

// for Performance Developement Why Invest point

export const chooseCardsPerformance = [
  {
    icon: FaBullseye,
    title: "Customized Performance Marketing Strategies",
    text: "Tailored advertising strategies designed around your business goals, audience, and budget."
  },
  {
    icon: FaChartLine,
    title: "ROI-Focused Campaign Management",
    text: "We continuously optimize campaigns to maximize conversions and deliver the highest return on investment."
  },
  {
    icon: FaGoogle,
    title: "Google Ads & Meta Ads Specialists",
    text: "Certified experts managing high-performing Google Ads and Meta Ads campaigns for measurable growth."
  },
  {
    icon: FaMoneyBillTrendUp,
    title: "Affordable Solutions for Startups & SMEs",
    text: "Cost-effective performance marketing packages that help small businesses grow without overspending."
  },
  {
    icon: FaSyncAlt,
    title: "Continuous Campaign Optimization",
    text: "We monitor, test, and refine campaigns regularly to improve performance and reduce ad costs."
  },
  {
    icon: FaChartBar,
    title: "Transparent Reporting",
    text: "Receive detailed reports with insights into clicks, leads, conversions, and campaign performance."
  },
  {
    icon: FaBolt,
    title: "Conversion-Focused Approach",
    text: "Every campaign is built to generate quality leads, sales, and measurable business results."
  },
  {
    icon: FaHeadset,
    title: "Dedicated Marketing Support",
    text: "Get expert guidance, quick support, and strategic recommendations throughout your campaign journey."
  }
];

// FOr Local SEO why choose data
export const WhyChooseData = [
  {
    icon: FaMapMarkedAlt,
    title: "Customized Local SEO Strategies",
    text: "Tailored SEO plans designed specifically for your business goals, target audience, and local market."
  },
  {
    icon: FaGoogle,
    title: "Google Business Profile Optimization",
    text: "Optimize your Google Business Profile to improve local visibility, rankings, and customer engagement."
  },
  {
    icon: FaSearchLocation,
    title: "Local Keyword Research",
    text: "Identify high-intent local keywords that help your business attract nearby customers searching online."
  },
  {
    icon: FaWallet,
    title: "Affordable Packages for Startups & SMEs",
    text: "Flexible and budget-friendly SEO solutions that deliver value without compromising on quality."
  },
  {
    icon: FaChartLine,
    title: "Transparent Monthly Reporting",
    text: "Receive detailed monthly reports with keyword rankings, traffic insights, and campaign performance."
  },
  {
    icon: FaShieldAlt,
    title: "White-Hat SEO Techniques",
    text: "We use ethical, Google-approved SEO practices to ensure sustainable long-term growth."
  },
  {
    icon: FaSyncAlt,
    title: "Continuous Optimization",
    text: "Regular monitoring and improvements keep your website competitive and aligned with algorithm updates."
  },
  {
    icon: FaHeadset,
    title: "Dedicated Support",
    text: "Our SEO experts are always available to answer questions and provide ongoing assistance."
  }
];
