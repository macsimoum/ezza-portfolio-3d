import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  NRI,
  TOBTC,
  nftMarketPlacePreview,
  chatGptIranian,
  ezzaPortfolio,
  muiDashboard,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Niroo Research Institute - TEHRAN, IRAN",
    icon: NRI,
    iconBg: "#383E56",
    date: "March 2020 - April 2022",
    points: [
      "Designed UI for “Optimal Placement of EV Charging Stations Considering the Technical and Economic Aspects and Providing the GIS Based Software” and “Assessment of the EV Effect on Network Load Forecasting and Changes of the Load Flow” which are two desktop-based applications based on the combination of Python and C++ Qt framework.",
      "Designed several optimization algorithms for those application flows which can work alongside without any freezing or lagging in software's with multi-threading technologies",
      "Rewrite the core modules and functions of ArcGIS application which is the biggest company in the field of geographical information systems.",
      "Used Python, C and C++ programming languages for backend and frontend",
      "Design an AI neural network for prediction section of software's which predicts data as fast as possible with Tensorflow and Keras technologies.",
      "Designed an algorithm that converts GIS file objects to graph networks for calculating road traffic. Designed an algorithm that converts GIS electricity network objects to knowable objects in Python and C++ for calculating the electricity network elements",
      "Designed a multi-objective meta-heuristic algorithm for the optimization section of those software's which can optimize multiple goals in parallel time.",
      "Designed an algorithm that can convert gasoline cars customers to electric vehicle customers with high level statistics processing.",
      "Used a State Estimation method to predict the power value of customers that we haven't none of their electricity data.",
      "Used very complex concepts in the discussion of Mathematics, Statistics, Machine Learning, Data Mining, AI, Electrical Engineering, Algorithm Design, Data Structure, Application Security and Optimization Algorithms.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "TOBTC",
    icon: TOBTC,
    iconBg: "#E6DEDD",
    date: "April 2022 - Now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NFT Marketplace",
    description: "Modern NFT Marketplace iOS and Android Application",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "web3.0",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nftMarketPlacePreview,
    source_code_link: "https://react-nft-marketplace-showcase.vercel.app/",
  },
  {
    name: "ChatGPT Iranian",
    description:
      "This is a clone app of ChatGPT for Iranian which they restricted us.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: chatGptIranian,
    source_code_link: "https://chatgpt-messenger-iranian.vercel.app/",
  },
  {
    name: "EZZA PORTFOLIO",
    description:
      "I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
    ],
    image: ezzaPortfolio,
    source_code_link: "https://macsimoum.github.io/ezza-portfolio",
  },
  {
    name: "Professional Admin Dashboard",
    description:
      "The starting point for your next project with MUI, ReactJS, Figma and Vercel, ready to be customized to your style.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
      {
        name: "cloudflare",
        color: "blue-text-gradient",
      },
    ],
    image: muiDashboard,
    source_code_link:
      "https://create-react-app-mui-figma-cloudflare-pages-template.pages.dev/",
  },
  {
    name: "EZZA 3D PORTFOLIO",
    description:
      "I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand.",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "3js",
        color: "green-text-gradient",
      },
    ],
    image: ezzaPortfolio,
    source_code_link: "https://macsimoum.github.io/ezza-portfolio",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
      {
        name: "vercel",
        color: "green-text-gradient",
      },
    ],
    image: muiDashboard,
    source_code_link:
      "https://create-react-app-mui-figma-vercel-template.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
