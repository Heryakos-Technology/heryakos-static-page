import GigPoint_App_Image from "/images/GigPoint_App_Image.webp";
import GigPoint_Small from "/images/gigpointlogo.png";
import Everli_Image from "/images/Everli_Image.webp";
import Everli_Small from "/images/everliLogo.webp";
import TrustBroker_Image from "/images/TrustBroker_Image.webp";
import Trust_Broker from "/images/Trust-Broker.jpeg";
import CSV_ECommerce_Image from "/images/CSV_ECommerce_Image.webp";
import CSVECommerce from "/images/CSVECommerce.jpeg";
import Hospital_Management_System_Image from "/images/Hospital_Management_System_Image.webp";
import HospitalManagementSystem_Small from "/images/HospitalManagementSystem_Small.jpeg";
import FixIt_Image from "/images/FixIt_Image.webp";
import FixIt_Small from "/images/FixIt_Small.webp";
import WeSafe_Image from "/images/WeSafe_Image.webp";
import WeSafe_Small from "/images/WeSafe_Small.webp";
import tom_grey from "/images/tom-grey.webp";
import JEAN_LUC_BESSET from "/images/JEAN_LUC_BESSET.webp";


export const projectsData = [
  {
    id: 1,
    title: "GigPoint - Freelance Platform",
    category: "Web Development",
    description: "A comprehensive freelance platform connecting clients with skilled professionals. Features real-time communication, secure payment processing, and project management tools.",
    imageUrl: GigPoint_App_Image,
    smallImage: GigPoint_Small,
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Stripe API"],
    timeline: "March 2024 - July 2024",
    process: "Research, Design, Develop, Deploy",
    services: "Full-Stack Development, UX/UI Design, Payment Integration, Real-time Features",
    client: "GigPoint Technologies",
    status: "Live",
    overview: "Developed a modern freelance platform that streamlines the connection between clients and freelancers. The platform includes advanced features like real-time messaging, secure escrow payments, project tracking, and comprehensive user profiles with rating systems.",
    testimonial: {
      quote: "The GigPoint platform has revolutionized how we connect with freelancers. The seamless user experience and robust features have significantly improved our project delivery times.",
      author: "Tom Fiorita",
      position: "Founder & CEO of GigPoint Technologies",
      avatar: tom_grey
    },
    videoUrl: "https://www.youtube.com/embed/DVFQP764G50?si=60FlL3wopKtoSBo0",
    github_link: null,
    other_link: null,
    appStore: null,
    playStore: null
  },
  {
    id: 2,
    title: "Everli - E-Commerce Mobile App",
    category: "Mobile Development",
    description: "A comprehensive e-commerce mobile application for grocery delivery and shopping. Built with Flutter for cross-platform compatibility and seamless user experience.",
    imageUrl: Everli_Image,
    smallImage: Everli_Small,
    technologies: ["Flutter", "Dart", "Firebase", "Google Maps API", "Payment Gateway"],
    timeline: "January 2024 - May 2024",
    process: "Market Research, Prototyping, Development, Testing",
    services: "Mobile App Development, UX/UI Design, Backend Integration, Payment Systems",
    client: "Everli Solutions",
    status: "Live",
    overview: "Created a feature-rich mobile application for grocery delivery services. The app includes real-time tracking, multiple payment options, user-friendly interface, and efficient order management system.",
    testimonial: {
      quote: "Our mobile app has transformed the grocery shopping experience for our customers. The intuitive design and reliable performance have exceeded our expectations.",
      author: "JEAN-LUC BESSET",
      position: "CEO & Founder of Everli",
      avatar: JEAN_LUC_BESSET
    },
    videoUrl: null,
    github_link: null,
    other_link: null,
    appStore: "https://apps.apple.com/us/app/ever-li/id1453443659?l=fr-FR&platform=iphone",
    playStore: "https://play.google.com/store/apps/details?id=com.everli.ever_li&hl=fr&pli=1"

  },
  {
    id: 3,
    title: "Trust Broker - Business Brokerage Platform",
    category: "Business Solutions",
    description: "A mobile and web application designed for Relife Business Center in Ethiopia, built to streamline brokerage activities and connect businesses with trusted partners, buyers, and service providers.",
    imageUrl: TrustBroker_Image,
    smallImage: Trust_Broker,
    technologies: ["React", "React Native", "Node.js", "MongoDB", "Socket.io"],
    timeline: "October 2023 - March 2024",
    process: "Business Analysis, Platform Design, Development, Deployment",
    services: "Full-Stack Development, Mobile App Development, Business Process Automation, CRM Integration",
    client: "Relife Business Center",
    status: "Live",
    overview: "The platform empowers brokers to manage leads, track deals, and foster transparency, while also giving clients a secure environment to explore and finalize business opportunities. Features include lead management, deal tracking, and secure communication channels.",
    testimonial: {
      quote: "Trust Broker has revolutionized our brokerage operations. The platform's comprehensive features have increased our deal closure rate by 150% and improved client satisfaction significantly.",
      author: "Bereket Alemayehu",
      position: "CEO of Relife Business Center",
    },
    videoUrl: null,
    github_link: "https://github.com/orgs/ReliefeBusinessCenter/repositories",
    other_link: null,
    appStore: null,
    playStore: null
  },
  {
    id: 4,
    title: "CSV E-Commerce Platform",
    category: "E-Commerce Development",
    description: "A scalable e-commerce platform designed for modern online retail operations. Features advanced inventory management, analytics, and customer engagement tools.",
    imageUrl: CSV_ECommerce_Image,
    smallImage: CSVECommerce,
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    timeline: "June 2023 - December 2023",
    process: "Requirements Analysis, Architecture Design, Development, Deployment",
    services: "E-Commerce Development, Database Design, Cloud Infrastructure, Performance Optimization",
    client: "CSV Retail Group",
    status: "Live",
    overview: "Developed a comprehensive e-commerce solution that handles high-volume transactions with advanced features like AI-powered recommendations, multi-vendor support, and integrated analytics dashboard.",
    testimonial: {
      quote: "The e-commerce platform has significantly boosted our online sales and improved our operational efficiency. The scalable architecture handles our growing customer base seamlessly.",
      author: "Jennifer Chen",
      position: "CTO of CSV Retail Group",
    },
    videoUrl: null,
    github_link: "https://github.com/yared123yared/csv-eccomerce",
    other_link: null,
    appStore: null,
    playStore: null
  },
  {
    id: 5,
    title: "Hospital Management System (HMS)",
    category: "Healthcare Solutions",
    description: "A comprehensive web application designed to streamline healthcare operations by digitizing patient management, doctor scheduling, billing, and medical records.",
    imageUrl: Hospital_Management_System_Image,
    smallImage: HospitalManagementSystem_Small,
    technologies: ["React", "Node.js", "MySQL", "Express.js", "Chart.js"],
    timeline: "August 2023 - January 2024",
    process: "Healthcare Analysis, System Design, Development, Testing",
    services: "Healthcare Software Development, Database Design, Security Implementation, Report Generation",
    client: "Healthcare Partners",
    status: "Live",
    overview: "It provides a unified platform for hospitals, clinics, doctors, and patients, ensuring efficiency, transparency, and secure handling of sensitive health data. Features include patient records management, appointment scheduling, billing system, and medical reports generation.",
    testimonial: {
      quote: "The Hospital Management System has streamlined our operations significantly. Patient management and scheduling have become much more efficient, reducing wait times by 40%.",
      author: "Dr. Samira Hassan",
      position: "Chief Medical Officer",
    },
    videoUrl: null,
    github_link: "https://github.com/yared123yared/Hospital-Management-System",
    other_link: null,
    appStore: null,
    playStore: null
  },
  {
    id: 6,
    title: "FixIt - Service Management Platform",
    category: "Business Solutions",
    description: "A comprehensive service management platform for home repair and maintenance services. Connects customers with verified service providers efficiently.",
    imageUrl: FixIt_Image,
    smallImage: FixIt_Small,
    technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC", "Google Maps"],
    timeline: "September 2023 - February 2024",
    process: "Market Analysis, Design, Development, Testing",
    services: "Platform Development, Service Provider Integration, Real-time Communication, Location Services",
    client: "FixIt Services",
    status: "Live",
    overview: "Built a robust platform that streamlines the process of finding and booking home repair services. Features include real-time chat, video consultations, service tracking, and integrated payment processing.",
    testimonial: {
      quote: "FixIt has transformed our service delivery model. The platform's efficiency and user-friendly interface have resulted in a 200% increase in customer satisfaction.",
      author: "David Rodriguez",
      position: "Operations Director at FixIt Services",
    },
    videoUrl: null,
    github_link: "https://github.com/yared123yared/FixIt",
    other_link: null,
    appStore: null,
    playStore: null
  },
  {
    id: 7,
    title: "WeSafe - Comprehensive Safety Management System",
    category: "Safety & Security",
    description: "A comprehensive safety management system with mobile and web components, featuring real-time monitoring, incident reporting, emergency response, and workplace safety management.",
    imageUrl: WeSafe_Image,
    smallImage: WeSafe_Small,
    technologies: ["React Native", "React", "Node.js", "MongoDB", "Socket.io", "GPS Tracking", "Push Notifications"],
    timeline: "April 2023 - August 2023",
    process: "Safety Analysis, System Design, Mobile & Web Development, Testing",
    services: "Full-Stack Development, Mobile App Development, Real-time Systems, API Development, Security Implementation",
    client: "WeSafe Technologies",
    status: "Live",
    overview: "Developed a comprehensive safety management ecosystem including a web dashboard for administrators and a mobile app for field workers. The system provides real-time monitoring, incident reporting, emergency response capabilities, and enables users to report incidents, request emergency assistance, and communicate with safety teams in real-time.",
    testimonial: {
      quote: "WeSafe has significantly improved our workplace safety protocols. The real-time monitoring and quick emergency response features have been game-changers for our operations, while the mobile app has empowered our workers to take an active role in workplace safety.",
      author: "Amanda Thompson",
      position: "Safety Director at WeSafe Technologies",
    },
    videoUrl: null,
    github_link: "https://github.com/yared123yared/We_safe_user_app",
    other_link: null,
    appStore: null,
    playStore: null
  }
];