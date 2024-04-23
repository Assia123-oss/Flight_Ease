import { FaUser } from "react-icons/fa";
import { FiShield } from "react-icons/fi";
import { IoCashOutline } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi";
import { GiShoppingCart } from "react-icons/gi";

export const navLinks = [
  { icon: <FaUser />, text: "Personal Information", href: "/user" },
  { icon: <FiShield />, text: "Security", href: "/security" },
  { icon: <IoCashOutline />, text: "Billing & Tax", href: "/billing-tax" },
  { icon: <HiOutlineDocumentText />, text: "Plans", href: "/plans" },
  { icon: <GiShoppingCart />, text: "Linked Shops", href: "/shop" },
];
