import { FaUser } from "react-icons/fa";
import { FiShield } from "react-icons/fi";
import { IoCashOutline } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi";
import { GiShoppingCart } from "react-icons/gi";

export const navLinks = [
  { icon: <FaUser />, text: "Personal Information", href: "/settings/person" },
  { icon: <FiShield />, text: "Security", href: "/settings/security" },
  {
    icon: <IoCashOutline />,
    text: "Billing & Tax",
    href: "/settings/billing-tax",
  },
  { icon: <HiOutlineDocumentText />, text: "Plans", href: "/settings/plans" },
  { icon: <GiShoppingCart />, text: "Linked Shops", href: "/settings/shop" },
];
