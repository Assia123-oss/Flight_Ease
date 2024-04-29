import React from 'react'
import { cardsData } from './utils/constants';
import PlanCard from './cards/PlanCard';

const Plans = () => {
  return (
    <div className="flex flex-col">
      {/* Upper */}
      <div className="flex flex-col border-b-2 border-[#EFEFEF]">
        <h1 className="font-semibold mb-3 text-2xl">Plans</h1>
        <p className="mb-2 text-[#0000005f] text-sm">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      {/* Middle */}
      <div className="flex items-center justify-center mt-12">
        <div className="border-2 w-[353px] h-[44px] rounded-full bg-[#F5F5F5] border-[#F5F5F5] flex justify-between items-center shadow-sm">
          <div className="border-2 w-[190px] h-full rounded-full bg-primary border-primary flex items-center justify-between shadow-sm">
            <div className="flex">
              <h1 className="font-semibold ml-2 text-md">Yearly</h1>
              <div className="border-2 w-[105px] h-[22px] rounded-full bg-teritiary border-teritiary ml-4 flex items-center justify-center">
                <h1 className="text-xs text-primary">SAVE UP TO 25%</h1>
              </div>
            </div>
          </div>
          <div></div>
          <div className="flex items-end">
            <h1 className="font-semibold mr-14">Montly</h1>
          </div>
        </div>
      </div>
      {/* Lower */}
      <div className="mt-16 gap-2 flex border border-red-400 overflow-x-auto">
        {cardsData.map((data, idx) => (
          <PlanCard {...data} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Plans;

