import React from "react";
import { cards } from "../Components/utils/constants";

const Dashboard = () => {

  const purposeColors = {
    "+$150 today": "#858D9D",
    "View orders": "#018DF0",
    "In last week": "#858D9D",
    "2477 tickets automated": "#858D9D",
  };

  return (
    <div className="bg-[#4f80e110] p-10">
      <div className="flex gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg px-4 py-6 w-full flex flex-col justify-evenly"
          >
            {" "}
            {/* Apply background color and styling here */}
            <div className="flex justify-between">
              <p className="text-[14.7px] text-[#777980]">{card.title}</p>
              <img src={card.image} alt="cardImage" />
            </div>
            <h1 className="font-semibold text-[29.39px] text-[#1D1F2C]">
              {card.price}
            </h1>
            <div className="flex items-center gap-2">
              <p className="text-[#1A9882] text-[12.86px] font-bold">
                {card.number}
              </p>
              <p className="text-[#1A9882]">{card.icon}</p>
              <p
                className="text-[12.86px] text-nowrap font-medium"
                style={{ color: purposeColors[card.purpose] }}
              >
                {card.purpose}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
