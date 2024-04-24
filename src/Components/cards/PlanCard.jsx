import React from "react";

const PlanCard = ({ title, price, info, features, button, buttons }) => {
  return (
    <div className="relative border-2 p-4 ] w-[16vw] flex flex-col text-sm">
      <h1 className="mb-2 font-semibold text-1xl">{title}</h1>
      <p className="mb-2 font-bold">{price}</p>
      <p className="mb-4 text-xs">{info}</p>
      <div className="flex flex-col  space-y-1 text-[9px]">
        {features.map((item, idx) => (
          <p key={idx} className="flex items-center">
            {item.icon}
            <span className="ml-2">{item.text}</span>
          </p>
        ))}
      </div>
      {button && (
        <button className="absolute bottom-1 mt-4 bg-primary border-2 text-black py-2 rounded-md">
          {button.text}
        </button>
      )}
      {/* Display buttons if they exist */}
      {buttons && (
        <div className="flex mt-4 space-x-2 justify-between border border-red-500">
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              className=" bg-primary border-2 text-black  rounded-md"
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
