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
      <div className="bg-primary rounded-xl p-10">
        <div className="flex">
          <div className=" px-4 w-1/3 border-r-2 border-secondary">
            <ul className="flex flex-col">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link?.href}
                  className={
                    isActive === index
                      ? "flex gap-4 items-center py-[22px] h-12 font-medium bg-[#4f80e110] rounded-md text-[#0240BC] px-5"
                      : "flex gap-4 items-center py-[22px] h-12 font-medium px-5"
                  }
                  onClick={() => toggleIsActive(index)}
                >
                  {link.icon} {link.text}
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="w-2/3 px-8">
           <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
