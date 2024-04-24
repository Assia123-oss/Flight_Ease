import React from "react";
import Button from "./shared/Button";

const Shopping = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col border-b-2 border-secondary">
        <h1 className="font-semibold mb-3 text-2xl">Linked Shops</h1>
        <p className="mb-2 text-[#0000005f] text-sm">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="flex flex-col mt-10">
        <div className="flex flex-col gap-3 mb-10">
          <h1 className="font-medium">Linked Shopify Stores</h1>
          <p className="text-sm text-[#0000005f]">
            {" "}
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="flex flex-col gap-3 mb-10">
          <h1 className="font-medium">Link</h1>
          <input
            type="text"
            className="border-2 border-[#bebebe] p-3 w-[470px] rounded-md"
            placeholder="xyz.myshopify.com"
          />
        </div>
        <div>
          <Button className="bg-teritiary text-primary rounded-md w-[120px] text-center p-3">
            {" "}
            Link Shop{" "}
          </Button>
        </div>
      </div>
      <div className="flex flex-col mt-10">
        <div className="flex flex-col gap-3 mb-10">
          <h1 className="font-medium">Linked ebay Stores</h1>
          <p className="text-sm text-[#0000005f]">
            {" "}
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="flex flex-col gap-3 mb-10">
          <h1 className="font-medium">Link</h1>
          <input
            type="text"
            className="border-2 border-[#bebebe] p-3 w-[470px] rounded-md"
            placeholder="xyz.myebay.com"
          />
        </div>
        <div>
          <Button className="bg-teritiary text-primary rounded-md w-[120px] text-center p-3">
            {" "}
            Link Shop{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
