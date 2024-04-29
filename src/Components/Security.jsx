import React, { useState } from "react";
import Button from "./shared/Button";

const Security = () => {
  const [isDivClicked, setIsDivClicked] = useState([false, false, false]);

  const handleDivClick = (index) => {
    const updatedClick = [...isDivClicked];
    updatedClick[index] = !updatedClick[index];
    setIsDivClicked(updatedClick);
  };

  return (
    <div className="flex flex-col">
      {/* Heading */}
      <div className="flex flex-col border-b-2 border-[#EFEFEF]">
        <h1 className="font-semibold mb-3 text-2xl">Security</h1>
        <p className="mb-2 text-[#0000005f] text-sm">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      {/* Beginning */}
      <div className="border-b w-[200px] mt-12 flex items-center justify-start">
        <h1 className="font-semibold">Password Management</h1>
      </div>
      <div className="flex flex-col mt-12">
        {/* Body */}
        <div className="flex flex-col">
          {[0, 1, 2].map(
            (
              index // Using map to generate JSX elements
            ) => (
              <div className="flex justify-between py-3" key={index}>
                <div className="flex flex-col">
                  <h1 className="font-medium mb-2 text-1xl">
                    Login Two-Step Verification
                  </h1>
                  <p className="mb-2 text-[#0000005f] text-sm">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
                <div>
                  <div
                    className={`${
                      isDivClicked[index]
                        ? "bg-teritiary border-teritiary"
                        : "bg-[#C0C7D0] border-[#C0C7D0]"
                    } border-2 w-14 h-6 rounded-full flex items-center`}
                    onClick={() => handleDivClick(index)}
                  >
                    <div
                      className={`w-5 h-[18px] rounded-full border-2 border-[#ffffff] bg-[#ffffff] ${
                        isDivClicked[index] ? "ml-auto" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="border-b w-[200px] mt-12 flex items-center justify-start">
        <h1 className="font-semibold">Password Security</h1>
      </div>
      <div className="flex justify-between py-9">
        <div className="flex flex-col">
          <h1 className="font-medium mb-2 text-1xl">Password Change</h1>
          <p className="mb-2 text-[#0000005f] text-sm">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        {/* Button */}
        <Button className="h-12 p-4 font-medium bg-[#4f80e110] text-[#0240BC] flex items-center rounded-md">
          Change Password
        </Button>
      </div>
    </div>
  );
};

export default Security;
