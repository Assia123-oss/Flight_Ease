import React, { useState } from "react";
import Button from "../Components/shared/Button";
import { NavLink } from "react-router-dom";
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
            {/* Introduction part */}
            <div className="flex flex-col border-b-2 border-secondary">
              <h1 className="font-semibold mb-3">General Information</h1>
              <p className="mb-2">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="flex flex-col mt-3">
              <h1 className="mt-2 font-semibold">Profile Picture</h1>
              <div className="mt-4 flex gap-4">
                <img src="/mark.svg" alt="profile" />
                <div>
                  <h1 className="font-semibold">Mark collins</h1>
                  <p className="text-[#757575]">Role/Title</p>
                  <p className="text-[#757575]">Location</p>
                </div>
                <div className="flex items-end gap-6">
                  <Button className="h-11 px-8 bg-teritiary flex items-center text-white rounded-md">
                    change
                  </Button>
                  <Button className="h-11 px-8 border-2 flex items-center text-teritiary border-teritiary rounded-md">
                    delete
                  </Button>
                </div>
              </div>
            </div>
            {/* Form part */}

            <div className="flex mt-10 gap-10">
              {/* First form */}
              <div className="flex flex-col">
                <label htmlFor="" className="mb-2">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Sam"
                  className="border-2 border-[#bebebe] text-start p-3 rounded-lg mb-6"
                />
                <label htmlFor="" className="mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="123-098-345-09"
                  className="border-2 border-[#bebebe] text-start p-3 rounded-lg mb-6"
                />
                <label htmlFor="" className="mb-2">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="xyz"
                  className="border-2 border-[#bebebe] text-start p-3 rounded-lg mb-6"
                />
                <label htmlFor="" className="mb-2">
                  City
                </label>
                <input
                  type="text"
                  placeholder="dfg"
                  className="border-2 border-[#bebebe] text-start p-3 rounded-lg mb-6"
                />
              </div>
              {/* Second Form */}
              <div className="flex flex-col">
                <label htmlFor="" className="mb-2">
                  Email Address
                </label>
                <input
                  type="text"
                  placeholder="xyz@gmail.com"
                  className="border-2 border-[#bebebe] text-start p-3 rounded-lg mb-6"
                />
                <label htmlFor="" className="mb-2">
                  Fax
                </label>
                <input
                  type="text"
                  placeholder="1238"
                  className="border-2 border-[#bebebe] text-start p-3 rounded-lg mb-6"
                />
                <label htmlFor="" className="mb-2">
                  Country
                </label>
                <input
                  type="text"
                  className="border-2 border-[#bebebe] text-start p-3 rounded-lg mb-6"
                />
                <label htmlFor="" className="mb-2">
                  State
                </label>
                <input
                  type="text"
                  placeholder="kjgf"
                  className="border-2 border-[#bebebe] text-start p-3 rounded-lg mb-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
