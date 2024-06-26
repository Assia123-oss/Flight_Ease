import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  RiDashboardLine,
  RiTicketLine,
  RiShoppingBasketLine,
  RiFileList2Line,
  RiChat1Line,
  RiShoppingCartLine,
  RiUserLine,
  RiSettingsLine,
} from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { FaArrowLeft, FaChevronDown } from "react-icons/fa";
import { FaArrowRightFromBracket, FaCableCar } from "react-icons/fa6";
import { FaFileArchive } from "react-icons/fa";

const Sidebar = () => {
  const [showDropdown, setShowDropdown] = useState({
    ticket: false,
    chatbot: false,
  });

  const toggleDropdown = (dropdown) => {
    setShowDropdown({
      ...showDropdown,
      [dropdown]: !showDropdown[dropdown],
    });
  };

  return (
    <div className="w-[320px] bg-primary border-r-2 border-r-[#EFEFEF] p-7">
      <div>
        <img src="/logo.svg" alt="logo" />
      </div>
      <ul className="py-8 font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "py-3 px-2 flex items-center gap-3 bg-teritiary rounded-md text-white"
                : "py-3 px-2 flex items-center gap-3"
            }
          >
            <RiDashboardLine className="text-[16px]" /> Dashboard
          </NavLink>
        </li>
        <li>
          <div className="relative">
            <NavLink
              to="#"
              className="py-3 px-2 flex items-center justify-between"
              onClick={() => toggleDropdown("ticket")}
            >
              <span className="flex items-center gap-3">
                <FaFileArchive className="text-[16px]" /> All Tickets
              </span>
              <FaChevronDown className="text-xs" />
            </NavLink>
            {showDropdown.ticket && (
              <div className="absolute px-3 mt-2 text-[#757575]">
                <NavLink
                  to="#"
                  className="flex items-center gap-3 py-2 text-sm"
                >
                  <RiTicketLine /> Open Tickets
                  <div className="flex items-center ml-auto">
                    <span
                      className="badge bg-[#d3b8f5] text-sm font-semibold px-2 py-1 text-[#24007A] rounded-sm"
                      style={{ minWidth: "28px", textAlign: "center" }}
                    >
                      5
                    </span>
                  </div>
                </NavLink>
                <NavLink
                  to="#"
                  className="flex items-center gap-3 py-2 text-sm"
                >
                  <RiShoppingBasketLine /> Tickets with Orders
                  <div className="flex items-center ml-auto">
                    <span
                      className="badge bg-[#c0fbe3] text-sm font-semibold px-2 py-1 text-[#4BD29B] rounded-sm"
                      style={{ minWidth: "28px", textAlign: "center" }}
                    >
                      4
                    </span>
                  </div>
                </NavLink>
                <NavLink
                  to="#"
                  className="flex items-center gap-3 py-2 text-sm"
                >
                  <RiFileList2Line /> Closed Tickets
                  <div className="flex items-center ml-auto">
                    <span
                      className="badge bg-[#fabcbd] text-sm font-semibold px-2 py-1 text-[#EB0004] rounded-sm"
                      style={{ minWidth: "28px", textAlign: "center" }}
                    >
                      10
                    </span>
                  </div>
                </NavLink>
              </div>
            )}
          </div>
        </li>
        <li className={showDropdown.ticket ? "mt-[150px]" : ""}>
          <div className="relative">
            <NavLink
              to=""
              className="py-3 px-2 flex items-center justify-between"
              onClick={() => toggleDropdown("chatbot")}
            >
              <span className="flex items-center gap-3">
                <RiChat1Line className="text-[16px]" /> Chatbots
              </span>
              <FaChevronDown className="text-xs" />
            </NavLink>
            {showDropdown.chatbot && (
              <div className="absolute px-4 mt-3 text-[#757575]">
                <NavLink className="flex items-center gap-3 text-sm">
                  <AiOutlinePlus />
                  Create a Chatbot
                </NavLink>
              </div>
            )}
          </div>
        </li>
        <li className={showDropdown.chatbot ? "mt-12" : ""}>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive
                ? "py-3 px-2 flex items-center gap-3 bg-teritiary rounded-md text-white"
                : "py-3 px-2 flex items-center gap-3"
            }
          >
            <RiShoppingCartLine className="text-[16px]" /> Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/customers"
            className={({ isActive }) =>
              isActive
                ? "py-3 px-2 flex items-center gap-3 bg-teritiary rounded-md text-white"
                : "py-3 px-2 flex items-center gap-3"
            }
          >
            <RiUserLine className="text-[16px]" /> Customers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Settings"
            className={({ isActive }) =>
              isActive
                ? "py-3 px-2 flex items-center gap-3 bg-teritiary rounded-md text-white"
                : "py-3 px-2 flex items-center gap-3"
            }
          >
            <RiSettingsLine className="text-[16px]" />
            <span className="">Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="py-3 px-2 flex items-center gap-3">
            <FaArrowRightFromBracket className="text-[16px]" /> Log out
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
