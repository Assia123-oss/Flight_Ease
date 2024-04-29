import React from "react";

const PlanCard = ({ title, price, info, features, button, buttons }) => {
  return (
    <div className="relative border-2 rounded-lg border-[#EFEFEF] shadow-sm p-[23px] w-[206.86px] flex flex-col justify-between">
      <div>
        <h1 className="mb-2 font-semibold text-[9px]">{title}</h1>
        <p className="mb-2 font-bold text-[17px]">{price}</p>
        <p className="mb-4 text-xs">{info}</p>
        <div className="flex flex-col  space-y-1 text-[9px]">
          {features.map((item, idx) => (
            <p key={idx} className="flex items-center">
              {item.icon}
              <span className="ml-2 text-[#9b9b9b] text-[8px]">
                {item.text}
              </span>
            </p>
          ))}
        </div>
      </div>
      <div className="pt-5">
        {button && (
          <button
            className="border-2 rounded-md py-[5px] px-[8px]"
            style={{
              color: button.color,
              borderColor: button.borderColor,
              backgroundColor: button.backgroundColor,
            }}
          >
            <p className="text-[7px]">{button.text}</p>
          </button>
        )}
      </div>

      {/* Second buttons */}
      {buttons && (
        <div className="flex gap-[9px] pt-5">
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              className="border-2 rounded-md py-[5px] px-[8px] flex-1"
              style={{
                color: btn.color,
                borderColor: btn.borderColor,
                backgroundColor: btn.backgroundColor,
              }}
            >
              <p className="text-[7px]">{btn.text}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanCard;
