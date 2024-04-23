import React from "react";
import { FaSearch, FaCalendar, FaBell } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="py-7 px-[38px] flex justify-between bg-white">
      {/* search container */}
      <div className="flex items-center gap-4 pl-7 bg-[#EFEFEF] rounded-[13px] h-[43px] w-[382px] overflow-hidden">
        <FaSearch size={16} className="text-[#757575]" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 h-full bg-inherit placeholder:text-[#757575] text-sm outline-none"
        />
      </div>
      {/* rest */}
      <div className="flex items-center gap-5">
        {/* date and notifications */}
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <FaCalendar className="text-base text-black" />
            <h2 className="text-[14px]">Monday, 4th September</h2>
          </div>
          <div className="relative p-3">
            <FaBell className="text-[21px] text-black" />
            <div className="absolute flex items-center justify-center top-0 right-0 bg-teritiary w-4 h-4 rounded-full">
              <h2 className="text-[10px] text-white">12</h2>
            </div>
          </div>
        </div>
        {/* user info */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end">
            <h2 className="text-sm font-semibold">Mark Collins</h2>
            <p className="text-[9px] font-normal text-[#8F8F8F]">
              Business man
            </p>
          </div>
          <div className="w-[43px] h-[43px] rounded-full overflow-hidden">
            <img src="/collins.svg" alt="user" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
