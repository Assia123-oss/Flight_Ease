import React from "react";

const PlanCard = ({ title, price, info, features, button, buttons }) => {
  return (
    <div className="border-2 w-[206.86px] p-5 flex flex-col">
      <h1 className="mb-2 font-semibold text-1xl">{title}</h1>
      <p className="mb-2 font-bold">{price}</p>
      <p className="mb-4 text-xs">{info}</p>
      <div className="flex flex-col gap-1 text-xs">
        {features.map((item, idx) => (
          <p key={idx} className="flex items-center">
            {item.icon}
            <span className="ml-2">{item.text}</span>
          </p>
        ))}
      </div>
      {button && (
        <button className="mt-4 bg-primary border-2 text-black px-4 py-2 rounded-md">
          {button.text}
        </button>
      )}
      {/* Display buttons if they exist */}
      {buttons && (
        <div className="flex mt-4">
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              className="mr-2 bg-primary border-2 text-black px-2 py-2 rounded-md"
            >
              {btn.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanCard;
