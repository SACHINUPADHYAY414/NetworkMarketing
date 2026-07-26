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

// For Performance Developement Why Invest point

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

// For Local SEO why choose data
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

export const blogs = [
  {
    id: 1,
    slug: "10-seo-strategies-to-rank-higher-in-2026",
    category: "SEO",
    title: "10 SEO Strategies to Rank Higher in 2026",

    shortDescription:
      "Proven SEO strategies that can help you improve your search rankings, drive more traffic, and grow your business online.",

    author: {
      name: "Ankit Sharma",
      avatar:
        "https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_1280.jpg"
    },

    date: "May 20, 2026",
    readTime: "5 min read",

    heroImage:
      "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=1200&q=80",

    contentImage:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",

    tags: ["SEO", "Digital Marketing", "Google", "Search Ranking", "Growth"],

    tableOfContents: [
      "Focus on High-Quality Content",
      "Optimize for Search Intent",
      "Improve Core Web Vitals",
      "Build High-Quality Backlinks",
      "Optimize for Mobile First"
    ],

    content: [
      {
        type: "paragraph",
        text: "Search Engine Optimization (SEO) is constantly evolving. What worked yesterday may not work today. To stay ahead in 2026, you need a smart SEO strategy that aligns with the latest trends and search engine algorithms."
      },

      {
        type: "paragraph",
        text: "Here are powerful SEO strategies that can help you rank higher and get more organic traffic this year."
      },

      {
        type: "heading",
        text: "1. Focus on High-Quality Content"
      },

      {
        type: "paragraph",
        text: "Content is still one of the most important factors in digital marketing. Your content should be useful, relevant, original, and helpful for your target audience."
      },

      {
        type: "highlight",
        text: "Create comprehensive content that provides real value to your audience."
      },

      {
        type: "heading",
        text: "2. Optimize for Search Intent"
      },

      {
        type: "paragraph",
        text: "Understanding search intent is crucial. Whether users are looking for information, products, or services, your content should match what they are actually searching for."
      },

      {
        type: "list",
        items: [
          "Understand your target audience",
          "Create intent-focused content",
          "Use relevant keywords naturally"
        ]
      },

      {
        type: "heading",
        text: "3. Improve Core Web Vitals"
      },

      {
        type: "paragraph",
        text: "Website speed, mobile responsiveness, and overall stability play an important role in providing a better user experience."
      },

      {
        type: "heading",
        text: "4. Build High-Quality Backlinks"
      },

      {
        type: "paragraph",
        text: "Quality backlinks from trusted and relevant websites can improve your website authority and help search engines understand the credibility of your website."
      },

      {
        type: "heading",
        text: "5. Optimize for Mobile First"
      },

      {
        type: "paragraph",
        text: "Most users now browse websites using mobile devices. Make sure your website is fast, responsive, and easy to navigate on every screen size."
      }
    ]
  },

  {
    id: 2,
    slug: "how-to-build-winning-digital-marketing-plan",
    category: "Digital Marketing",
    title: "How to Build a Winning Digital Marketing Plan",

    shortDescription:
      "A step-by-step guide to create a digital marketing plan that drives real business results.",

    author: {
      name: "Rahul Kumar",
      avatar:
        "https://tse4.mm.bing.net/th/id/OIP.tPsch-jmQiEDmzVKmpJRWgHaLH?r=0&pid=ImgDet&w=184&h=276&c=7&dpr=1.3&o=7&rm=3"
    },

    date: "May 18, 2026",
    readTime: "6 min read",

    heroImage:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80",

    contentImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",

    tags: ["Digital Marketing", "Marketing Strategy", "Business Growth"],

    tableOfContents: [
      "Define Your Business Goals",
      "Understand Your Target Audience",
      "Choose the Right Marketing Channels",
      "Create a Content Strategy",
      "Measure Your Results"
    ],

    content: [
      {
        type: "paragraph",
        text: "A successful digital marketing strategy starts with a clear plan. Without proper planning, businesses often waste time and money on marketing channels that do not deliver results."
      },

      {
        type: "heading",
        text: "1. Define Your Business Goals"
      },

      {
        type: "paragraph",
        text: "Before starting any marketing campaign, clearly define what you want to achieve. Your goals could include increasing website traffic, generating leads, improving sales, or building brand awareness."
      },

      {
        type: "heading",
        text: "2. Understand Your Target Audience"
      },

      {
        type: "paragraph",
        text: "Understanding your ideal customer is essential. Identify their needs, problems, interests, and online behavior to create better marketing campaigns."
      },

      {
        type: "heading",
        text: "3. Choose the Right Marketing Channels"
      },

      {
        type: "paragraph",
        text: "Choose marketing channels based on where your target audience spends their time. These may include SEO, social media, paid advertising, and content marketing."
      }
    ]
  },

  {
    id: 3,
    slug: "power-of-branding-build-trust-and-grow",
    category: "Branding",
    title: "The Power of Branding: Build Trust & Grow",

    shortDescription:
      "Learn how strong branding can build trust, increase loyalty, and accelerate business growth.",

    author: {
      name: "Priya Singh",
      avatar:
        "https://th.bing.com/th/id/OIP.AQDPCi6t-od9R-MXbtj7WwAAAA?w=208&h=209&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },

    date: "May 15, 2026",
    readTime: "4 min read",

    heroImage:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",

    contentImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",

    tags: ["Branding", "Business", "Growth"],

    tableOfContents: [
      "Why Branding Matters",
      "Build a Strong Brand Identity",
      "Create Customer Trust",
      "Maintain Brand Consistency"
    ],

    content: [
      {
        type: "paragraph",
        text: "A strong brand helps businesses stand out in a competitive market. Good branding creates recognition, trust, and a strong connection with customers."
      },

      {
        type: "heading",
        text: "1. Why Branding Matters"
      },

      {
        type: "paragraph",
        text: "Branding is more than just a logo. It includes your company's identity, communication, visual style, and the overall experience you provide to your customers."
      },

      {
        type: "heading",
        text: "2. Build a Strong Brand Identity"
      },

      {
        type: "paragraph",
        text: "A consistent visual identity and clear brand message can help your business become more recognizable and memorable."
      }
    ]
  },
  {
    id: 4,
    slug: "content-marketing-strategy-that-drives-business-growth",
    category: "Content Marketing",
    title: "Content Marketing Strategy That Drives Business Growth",
    shortDescription:
      "Discover how a strategic content marketing approach can attract the right audience, build trust, and generate consistent business growth.",
    author: {
      name: "Amit Verma",
      avatar:
        "https://tse4.mm.bing.net/th/id/OIP.7tbm74BgYSOgMohB3f7vOQHaLH?r=0&pid=ImgDet&w=184&h=276&c=7&dpr=1.3&o=7&rm=3"
    },
    date: "May 12, 2026",
    readTime: "5 min read",
    heroImage:
      "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=1200&q=80",
    contentImage:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Content Marketing",
      "Content Strategy",
      "Business Growth",
      "Digital Marketing"
    ],
    tableOfContents: [
      "Understand Your Target Audience",
      "Create Valuable Content",
      "Choose the Right Content Formats",
      "Maintain a Consistent Publishing Schedule",
      "Measure Content Performance"
    ],
    content: [
      {
        type: "paragraph",
        text: "Content marketing is one of the most effective ways to attract potential customers and build long-term relationships with your audience. Instead of directly selling products or services, valuable content helps businesses educate, inform, and build trust."
      },
      {
        type: "heading",
        text: "1. Understand Your Target Audience"
      },
      {
        type: "paragraph",
        text: "Before creating content, understand who your audience is, what problems they face, and what information they are searching for. Audience research helps you create content that is relevant and useful."
      },
      {
        type: "heading",
        text: "2. Create Valuable Content"
      },
      {
        type: "paragraph",
        text: "Your content should solve real problems and provide practical value. Educational guides, tutorials, case studies, and actionable tips can help establish your brand as a trusted source of information."
      },
      {
        type: "highlight",
        text: "The best content does not simply attract visitors. It helps them make better decisions."
      },
      {
        type: "heading",
        text: "3. Choose the Right Content Formats"
      },
      {
        type: "paragraph",
        text: "Experiment with different content formats such as blog posts, videos, infographics, social media posts, and case studies. Choose formats based on your audience preferences."
      },
      {
        type: "heading",
        text: "4. Maintain a Consistent Publishing Schedule"
      },
      {
        type: "paragraph",
        text: "Consistency is important for building an engaged audience. Create a realistic content calendar and publish high-quality content regularly."
      },
      {
        type: "heading",
        text: "5. Measure Content Performance"
      },
      {
        type: "paragraph",
        text: "Track important metrics such as organic traffic, engagement, leads, and conversions. Use these insights to improve your content strategy over time."
      }
    ]
  },
  {
    id: 5,
    slug: "local-seo-strategies-to-grow-your-local-business",
    category: "Local SEO",
    title: "Local SEO Strategies to Grow Your Local Business",
    shortDescription:
      "Learn practical local SEO strategies to improve your visibility in Google Search and Maps and attract more nearby customers.",
    author: {
      name: "Neha Gupta",
      avatar:
        "https://th.bing.com/th/id/OIP.aWNUIi6JuMdlyNwY2nhASAAAAA?w=208&h=294&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    date: "May 10, 2026",
    readTime: "6 min read",
    heroImage:
      "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=1200&q=80",
    contentImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    tags: ["Local SEO", "Google Business Profile", "SEO", "Local Marketing"],
    tableOfContents: [
      "Optimize Your Google Business Profile",
      "Target Local Keywords",
      "Build Local Citations",
      "Collect Customer Reviews",
      "Create Location-Based Content"
    ],
    content: [
      {
        type: "paragraph",
        text: "Local SEO helps businesses become more visible when potential customers search for products and services in their area. A strong local SEO strategy can increase calls, website visits, and physical store visits."
      },
      {
        type: "heading",
        text: "1. Optimize Your Google Business Profile"
      },
      {
        type: "paragraph",
        text: "Keep your business information accurate and complete. Add your business category, services, opening hours, photos, website, and contact information to make it easier for customers to find you."
      },
      {
        type: "heading",
        text: "2. Target Local Keywords"
      },
      {
        type: "paragraph",
        text: "Use location-specific keywords naturally across your website content, service pages, headings, and metadata. This helps search engines understand which areas your business serves."
      },
      {
        type: "heading",
        text: "3. Build Local Citations"
      },
      {
        type: "paragraph",
        text: "Make sure your business name, address, and phone number are consistent across relevant online directories and local platforms."
      },
      {
        type: "heading",
        text: "4. Collect Customer Reviews"
      },
      {
        type: "paragraph",
        text: "Positive customer reviews can improve your online reputation and help potential customers feel more confident about choosing your business."
      },
      {
        type: "highlight",
        text: "A strong local presence starts with accurate information, genuine reviews, and consistent visibility."
      },
      {
        type: "heading",
        text: "5. Create Location-Based Content"
      },
      {
        type: "paragraph",
        text: "Create useful content focused on your local audience. Share local guides, service information, customer stories, and helpful resources related to your target location."
      }
    ]
  },
  {
    id: 6,
    slug: "social-media-marketing-trends-businesses-should-follow",
    category: "Social Media",
    title: "Social Media Marketing Trends Businesses Should Follow",
    shortDescription:
      "Explore the latest social media marketing trends and learn how businesses can use them to increase engagement and build stronger communities.",
    author: {
      name: "Rohit Singh",
      avatar:
        "https://tse1.mm.bing.net/th/id/OIP.zzAM-vWEwnXti0pRGoqb-AHaHa?r=0&pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3"
    },
    date: "May 8, 2026",
    readTime: "5 min read",
    heroImage:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
    contentImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Social Media",
      "Instagram Marketing",
      "Facebook Marketing",
      "Marketing Trends"
    ],
    tableOfContents: [
      "Focus on Short-Form Video",
      "Build Authentic Connections",
      "Use User-Generated Content",
      "Leverage Social Media Communities",
      "Track Engagement and Results"
    ],
    content: [
      {
        type: "paragraph",
        text: "Social media continues to be an important channel for businesses looking to connect with their customers. However, successful social media marketing requires more than simply posting regularly."
      },
      {
        type: "heading",
        text: "1. Focus on Short-Form Video"
      },
      {
        type: "paragraph",
        text: "Short-form video content is an effective way to capture attention and communicate ideas quickly. Businesses can use educational videos, product demonstrations, behind-the-scenes content, and quick tips."
      },
      {
        type: "heading",
        text: "2. Build Authentic Connections"
      },
      {
        type: "paragraph",
        text: "Audiences increasingly value authenticity. Share real stories, company culture, customer experiences, and useful insights instead of focusing only on promotional content."
      },
      {
        type: "heading",
        text: "3. Use User-Generated Content"
      },
      {
        type: "paragraph",
        text: "Customer photos, testimonials, reviews, and experiences can help build social proof and make your brand feel more trustworthy."
      },
      {
        type: "heading",
        text: "4. Leverage Social Media Communities"
      },
      {
        type: "paragraph",
        text: "Build an active community around your brand by encouraging conversations, responding to comments, and creating content that invites participation."
      },
      {
        type: "heading",
        text: "5. Track Engagement and Results"
      },
      {
        type: "paragraph",
        text: "Monitor engagement, reach, clicks, leads, and conversions. Analytics can help you understand what content performs best and where to focus your efforts."
      }
    ]
  },
  {
    id: 7,
    slug: "google-ads-vs-meta-ads-which-is-better-for-your-business",
    category: "Paid Advertising",
    title: "Google Ads vs Meta Ads: Which Is Better for Your Business?",
    shortDescription:
      "Understand the key differences between Google Ads and Meta Ads and discover which advertising platform may be right for your business goals.",
    author: {
      name: "Vikas Sharma",
      avatar:
        "https://tse3.mm.bing.net/th/id/OIP.HZFsHLPee9dcAeCXBy9adgAAAA?r=0&pid=ImgDet&w=184&h=236&c=7&dpr=1.3&o=7&rm=3"
    },
    date: "May 5, 2026",
    readTime: "7 min read",
    heroImage:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80",
    contentImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Google Ads",
      "Meta Ads",
      "Paid Advertising",
      "Performance Marketing"
    ],
    tableOfContents: [
      "How Google Ads Works",
      "How Meta Ads Works",
      "When to Choose Google Ads",
      "When to Choose Meta Ads",
      "How to Combine Both Platforms"
    ],
    content: [
      {
        type: "paragraph",
        text: "Google Ads and Meta Ads are two powerful advertising platforms, but they work differently. Choosing the right platform depends on your business goals, audience, budget, and customer journey."
      },
      {
        type: "heading",
        text: "1. How Google Ads Works"
      },
      {
        type: "paragraph",
        text: "Google Ads allows businesses to reach users who are actively searching for specific products and services. This makes it especially useful for capturing high-intent traffic."
      },
      {
        type: "heading",
        text: "2. How Meta Ads Works"
      },
      {
        type: "paragraph",
        text: "Meta Ads helps businesses reach audiences based on interests, demographics, behaviors, and other targeting signals. It can be highly effective for awareness and demand generation."
      },
      {
        type: "heading",
        text: "3. When to Choose Google Ads"
      },
      {
        type: "paragraph",
        text: "Google Ads can be a strong option when customers are actively searching for your products or services and you want to capture existing demand."
      },
      {
        type: "heading",
        text: "4. When to Choose Meta Ads"
      },
      {
        type: "paragraph",
        text: "Meta Ads may be useful when your goal is to introduce your brand to new audiences, promote visual products, or generate interest before customers actively search for your business."
      },
      {
        type: "highlight",
        text: "The best advertising platform is the one that matches your customer's journey and your business objective."
      },
      {
        type: "heading",
        text: "5. How to Combine Both Platforms"
      },
      {
        type: "paragraph",
        text: "Many businesses can benefit from using both platforms together. Meta Ads can generate awareness while Google Ads can capture users who are ready to take action."
      }
    ]
  },
  {
    id: 8,
    slug: "how-to-create-a-high-converting-business-website",
    category: "Web Development",
    title: "How to Create a High-Converting Business Website",
    shortDescription:
      "Learn the essential website design and user experience principles that can turn visitors into leads and customers.",
    author: {
      name: "Arjun Mehta",
      avatar:
        "https://tse4.mm.bing.net/th/id/OIP.4MbNsBsk6POgVJlfWbfWCwHaJB?r=0&pid=ImgDet&w=184&h=223&c=7&dpr=1.3&o=7&rm=3"
    },
    date: "May 2, 2026",
    readTime: "6 min read",
    heroImage:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    contentImage:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Web Development",
      "Web Design",
      "UX Design",
      "Conversion Optimization"
    ],
    tableOfContents: [
      "Create a Clear Value Proposition",
      "Design for Mobile Users",
      "Use Strong Calls to Action",
      "Improve Website Speed",
      "Build Trust with Social Proof"
    ],
    content: [
      {
        type: "paragraph",
        text: "A business website is more than an online brochure. It should clearly communicate your value, guide visitors through the customer journey, and make it easy for them to take action."
      },
      {
        type: "heading",
        text: "1. Create a Clear Value Proposition"
      },
      {
        type: "paragraph",
        text: "Visitors should immediately understand what your business does and how it can help them. Use clear headlines and concise messaging above the fold."
      },
      {
        type: "heading",
        text: "2. Design for Mobile Users"
      },
      {
        type: "paragraph",
        text: "A large percentage of users browse websites on smartphones. Your website should be responsive, easy to navigate, and comfortable to use on smaller screens."
      },
      {
        type: "heading",
        text: "3. Use Strong Calls to Action"
      },
      {
        type: "paragraph",
        text: "Guide visitors toward the next step with clear calls to action such as Book a Call, Get a Quote, Contact Us, or Start a Project."
      },
      {
        type: "heading",
        text: "4. Improve Website Speed"
      },
      {
        type: "paragraph",
        text: "Fast-loading pages create a better user experience and reduce the chances of visitors leaving before your content loads."
      },
      {
        type: "heading",
        text: "5. Build Trust with Social Proof"
      },
      {
        type: "paragraph",
        text: "Testimonials, reviews, case studies, client logos, and trust signals can help visitors feel more confident about choosing your business."
      }
    ]
  },
  {
    id: 9,
    slug: "email-marketing-strategies-to-build-customer-loyalty",
    category: "Email Marketing",
    title: "Email Marketing Strategies to Build Customer Loyalty",
    shortDescription:
      "Discover effective email marketing strategies that can help you nurture leads, retain customers, and build long-term relationships.",
    author: {
      name: "Kavita Singh",
      avatar:
        "https://th.bing.com/th/id/OIP.os7uM5TJXlUufJbHt9t7UAHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    date: "April 28, 2026",
    readTime: "5 min read",
    heroImage:
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1200&q=80",
    contentImage:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Email Marketing",
      "Lead Nurturing",
      "Customer Retention",
      "Marketing Automation"
    ],
    tableOfContents: [
      "Build a Quality Email List",
      "Personalize Your Emails",
      "Create Valuable Email Content",
      "Automate Customer Journeys",
      "Measure Email Performance"
    ],
    content: [
      {
        type: "paragraph",
        text: "Email marketing remains a powerful way to communicate directly with your audience. A well-planned email strategy can help businesses nurture leads, increase repeat purchases, and build stronger customer relationships."
      },
      {
        type: "heading",
        text: "1. Build a Quality Email List"
      },
      {
        type: "paragraph",
        text: "Focus on building a permission-based email list of people who genuinely want to hear from your business. Use valuable lead magnets and clear signup forms to attract relevant subscribers."
      },
      {
        type: "heading",
        text: "2. Personalize Your Emails"
      },
      {
        type: "paragraph",
        text: "Personalized messages can make communication more relevant. Use customer names, preferences, previous interactions, and interests when appropriate."
      },
      {
        type: "heading",
        text: "3. Create Valuable Email Content"
      },
      {
        type: "paragraph",
        text: "Avoid sending only promotional messages. Share useful tips, educational content, exclusive offers, company updates, and resources that your subscribers will appreciate."
      },
      {
        type: "heading",
        text: "4. Automate Customer Journeys"
      },
      {
        type: "paragraph",
        text: "Email automation can help deliver the right message at the right time. Welcome emails, lead nurturing sequences, and post-purchase follow-ups are useful examples."
      },
      {
        type: "highlight",
        text: "Great email marketing is about delivering value consistently, not simply sending more emails."
      },
      {
        type: "heading",
        text: "5. Measure Email Performance"
      },
      {
        type: "paragraph",
        text: "Track metrics such as open rates, click-through rates, conversions, and unsubscribes to understand what your audience responds to."
      }
    ]
  }
];
