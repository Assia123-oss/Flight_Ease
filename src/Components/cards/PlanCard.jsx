import React from "react";

const PlanCard = ({ title, price, info, features, button, buttons }) => {
  return (
    <div className="relative border-2  w-[16vw] text-sm rounded-lg border-[#EFEFEF] shadow-sm">
      <div className="p-4">
        <h1 className="mb-2 font-semibold">{title}</h1>
        <p className="mb-2 font-bold">{price}</p>
        <p className="mb-4 text-xs">{info}</p>
        <div className="flex flex-col  space-y-1 text-[9px]">
          {features.map((item, idx) => (
            <p key={idx} className="flex items-center">
              {item.icon}
              <span className="ml-2 text-[#9b9b9b]">{item.text}</span>
            </p>
          ))}
        </div>
      </div>
      {button && (
        <button className="absolute bottom-1 w-[190px] ml-3.5 bg-teritiary border-2 text-black py-2 rounded-md">
          {button.text}
        </button>
      )}
      {/* Second buttons */}
      {buttons && (
        <div className="flex justify-evenly">
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              className=" bg-primary border-2 w-[99px] py-2 text-black  rounded-md"
            >
              <p className="text-xs">{btn.text}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanCard;
