import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  RiDashboardLine,
  RiChat1Line,
  RiShoppingCartLine,
  RiUserLine,
  RiSettingsLine,
  RiLogoutCircleLine,
} from "react-icons/ri";

import { MdDoneAll } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-[325px] bg-primary border-r border-r-gray p-7">
      <div>
        <img src="/logo.svg" alt="logo" />
      </div>
      <ul className="py-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 p-3 bg-teritiary"
                : "flex items-center gap-3 p-3"
            }
          >
            <RiDashboardLine className="text-[16px]" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="flex items-center justify-between p-3">
            <span className="flex items-center ">
              <MdDoneAll className="text-[16px]" /> All Tickets
            </span>
            <FaChevronDown className="text-xs" />
          </NavLink>
        </li>
        <li>
          <NavLink to="" className="flex items-center justify-between p-3">
            <span className="flex items-center gap-3">
              <RiChat1Line className="text-[16px]" /> Chatbots
            </span>
            <FaChevronDown className="text-xs" />
          </NavLink>
          <p className="pt-3 pl-2 text-[#757575] text-sm flex items-center gap-2">
            <IoMdAdd />
            Create a bot
          </p>
        </li>
        <li>
          <NavLink
            to="/Orders"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 p-3 bg-teritiary"
                : "flex items-center gap-3 p-3"
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
                ? "flex items-center gap-3 p-3 bg-teritiary"
                : "flex items-center gap-3 p-3"
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
                ? "flex items-center gap-3 p-3 bg-teritiary"
                : "flex items-center gap-3 p-3"
            }
          >
            <RiSettingsLine className="text-[16px]" />
            <span className="">Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="flex items-center gap-3">
            <RiLogoutCircleLine className="text-[16px]" /> Log out
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
