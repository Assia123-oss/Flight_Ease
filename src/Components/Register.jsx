import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Button from "./shared/Button";
import { Link, NavLink } from "react-router-dom";

const Register = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="flex">
      <div style={{ flex: 1 }}>
        <img
          src="/picture.svg"
          alt="picture"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="bg-primary flex flex-col px-20 py-14">
        <div className="space-y-3 mb-8">
          <h1 className="text-5xl font-bold">Sign up</h1>
          <p className="text-[#818181]">Create your account in seconds</p>
        </div>
        <input
          type="text"
          className="border-2 border-[#bebebe] p-3 w-[422px] h-[60px] rounded-md mb-4 placeholder-[#818181]"
          placeholder="First Name:"
        />
        <input
          type="text"
          className="border-2 border-[#bebebe] p-3 w-[422px] h-[60px] rounded-md mb-4 placeholder-[#818181]"
          placeholder="Last Name:"
        />
        <input
          type="text"
          className="border-2 border-[#bebebe] p-3 w-[422px] h-[60px] rounded-md mb-4 placeholder-[#818181]"
          placeholder="Email Address:"
        />
        <input
          type="text"
          className="border-2 border-[#bebebe] p-3 w-[422px] h-[60px] rounded-md mb-8 placeholder-[#818181]"
          placeholder="Create Password:"
        />
        <div className="space-y-8 mb-10">
          <div className="flex gap-2">
            <div
              className={`${
                isClicked
                  ? "border-[#549FF6] bg-[#549FF6]"
                  : " bg-primary border-[#bebebe] border-2"
              } flex items-center h-[32px] w-[32px] justify-center rounded `}
              onClick={handleClick}
            >
              <FaCheck
                className={`${
                  isClicked ? "text-primary" : "text-[#549FF6]"
                } text-md`}
                onClick={handleClick}
              />
            </div>
            <p className="text-[#818181] flex items-center">
              I agree to the terms and privacy policy
            </p>
          </div>
          <Button className="bg-[#549FF6] h-[60px] text-primary rounded-md flex items-center justify-center font-semibold">
            {" "}
            Create an account{" "}
          </Button>
        </div>
        <p className="flex gap-4 text-[#818181] mb-7">
          Already a member?
          <Link to={"/auth/login"} className="text-[#549FF6] font-medium">
            Login
          </Link>
        </p>
        <div className="flex mb-10 items-center gap-2 justify-center">
          <div className="border-b w-[130px] border-[#bebebe]"></div>
          <div className="text-[#bebebe]">Or continue with</div>
          <div className="border-b w-[130px] border-[#bebebe]"></div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <img
            src="/google.svg"
            alt="google"
            className="border-[#bebebe] rounded-md border"
          />
          <img
            src="/facebook.svg"
            alt="facebook"
            className="border-[#bebebe] rounded-md border"
          />
          <img
            src="/instagram.svg"
            alt="instagram"
            className="border-[#bebebe] rounded-md border"
          />
          <img
            src="/twitter.svg"
            alt="twitter"
            className="border-[#bebebe] rounded-md border"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
