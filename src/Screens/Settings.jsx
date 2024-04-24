import React, { useState } from "react";
import Button from "../Components/shared/Button";
import { NavLink, Outlet } from "react-router-dom";
import { navLinks } from "../Components/utils/constants";

const Settings = () => {
  const [isActive, setIsActive] = useState(null);

  const toggleIsActive = (index) => {
    setIsActive(index);
  };
  return (
    <div className="bg-[#4f80e110] p-6">
      <div className="flex justify-between py-12 px-10">
        <span>
          <h1 className="text-3xl font-semibold mb-4">Settings</h1>
          <p>Manage your account settings</p>
        </span>
        <span className="flex gap-5">
          <Button className="h-12 px-4 bg-teritiary flex items-center text-white rounded-md">
            Save Change
          </Button>
          <Button className="h-12 px-10 border-2 flex items-center text-teritiary border-teritiary rounded-md ">
            Cancel
          </Button>
        </span>
      </div>
      {/* general information */}
      <div className="bg-primary rounded-xl py-16 px-12">
        <div className="flex">
          <div className="w-1/4 border-r-2 border-secondary flex justify-end items-start">
            <ul className="flex flex-col gap-y-5">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link?.href}
                  className={`flex space-x-4 items-center py-[22px] h-12 font-medium px-5 ${
                    isActive === index
                      ? " bg-[#4f80e110] text-[#0240BC] rounded-md"
                      : ""
                  }`}
                  onClick={() => toggleIsActive(index)}
                >
                  <p>{link.icon}</p>
                  <p className="text-base whitespace-nowrap">{link.text}</p>
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="w-3/4 px-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
