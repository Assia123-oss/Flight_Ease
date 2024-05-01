import { FaChevronUp, FaUser } from "react-icons/fa";
import { FiShield } from "react-icons/fi";
import { IoCashOutline } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi";
import { GiShoppingCart } from "react-icons/gi";
import { MdDone } from "react-icons/md";


import card1 from "/icons/card1.svg"
import card2 from "/icons/card2.svg";
import card3 from "/icons/card3.svg";
import card4 from "/icons/card4.svg";



export const navLinks = [
  { icon: <FaUser />, text: "Personal Information", href: "/settings" },
  { icon: <FiShield />, text: "Security", href: "/settings/security" },
  {
    icon: <IoCashOutline />,
    text: "Billing & Tax",
    href: "/settings/billing-tax",
  },
  { icon: <HiOutlineDocumentText />, text: "Plans", href: "/settings/plans" },
  { icon: <GiShoppingCart />, text: "Linked Shops", href: "/settings/shop" },
];

export const cards = [
  {
    title: "Total sales",
    image: card1,
    price: "$6,784",
    number: "10%",
    icon: <FaChevronUp />,
    purpose: "+$150 today",
  },
  {
    title: "Orders",
    image: card2,
    price: "$1,920",
    number: "10%",
    icon: <FaChevronUp />,
    purpose: "View orders",
  },
  {
    title: "Total Tickets",
    image: card3,
    price: "$4,412",
    number: "10%",
    icon: <FaChevronUp />,
    purpose: "In last week",
  },
  {
    title: "Total sales",
    image: card4,
    price: "$329",
    number: "70%",
    icon: <FaChevronUp />,
    purpose: "2477 tickets automated",
  },
];

export const cardsData = [
  {
    title: "Hobby",
    price: "$0",
    info: "Start your next side project",
    features: [
      {
        icon: <MdDone />,
        text: "Fast Globally (Edge Network)",
      },
      {
        icon: <MdDone />,
        text: "Automatic CI/CD (Git Integration)",
      },
      {
        icon: <MdDone />,
        text: "Functions (Serverless, Edge)",
      },
      {
        icon: <MdDone />,
        text: "Starter Database (KV, Postgres)",
      },
      {
        icon: <MdDone />,
        text: "Web Analytics",
      },
      {
        icon: <MdDone />,
        text: "Web Analytics",
      },
    ],
    button: {
      text: "Start deploying",
      action: "/start-deploying",
      color: "#008951",
      borderColor: "#008951",
      backgroundColor: "white",
    },
  },
  {
    title: "Pro",
    price: "$20 per user / month",
    info: "Everything in Hobby, plus higher limits and team features",
    features: [
      {
        icon: <MdDone />,
        text: "Unlimited Environments",
      },
      {
        icon: <MdDone />,
        text: "More Functions (Serverless, Edge)",
      },
      {
        icon: <MdDone />,
        text: "More Databases (KV, Postgres)",
      },
      {
        icon: <MdDone />,
        text: "More Web Analytics Events",
      },
      {
        icon: <MdDone />,
        text: "More Experimentation (Edge Config, Middleware)",
      },
      {
        icon: <MdDone />,
        text: "Preview/Comment/Edit Deployments",
      },
      {
        icon: <MdDone />,
        text: "Basic DDoS Mitigation",
      },
      {
        icon: <MdDone />,
        text: "Email Support",
      },
    ],
    button: {
      text: "Start a free trial",
      action: "/start-free-trial",
      color: "white",
      borderColor: "#FF5053",
      backgroundColor: "#FF5053",
    },
  },
  {
    title: "Enterprise",
    price: "Custom",
    info: "For teams with more security, support, and performance needs.",
    features: [
      {
        icon: <MdDone />,
        text: "99.99% SLA",
      },
      {
        icon: <MdDone />,
        text: "IP Allow & Block Rules",
      },
      {
        icon: <MdDone />,
        text: "Isolated Builds & Deployments",
      },
      {
        icon: <MdDone />,
        text: "Additional Role & Access Controls",
      },
      {
        icon: <MdDone />,
        text: "High-Performance Edge Network",
      },
      {
        icon: <MdDone />,
        text: "SAML Single-Sign-On (SSO)",
      },
      {
        icon: <MdDone />,
        text: "Advanced DDoS Mitigation",
      },
      {
        icon: <MdDone />,
        text: "Secure VPC and VPN Connectivity",
      },
    ],
    buttons: [
      {
        text: "Contact Sales",
        action: "/contact-sales",
        color: "white",
        borderColor: "#9A4CFA",
        backgroundColor: "#9A4CFA",
      },
      {
        text: "Request Trial",
        action: "/request-trial",
        color: "#9A4CFA",
        borderColor: "9A4CFA",
        backgroundColor:"white"
      },
    ],
  },
];
