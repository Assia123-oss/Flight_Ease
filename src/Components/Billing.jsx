import React from "react";
import Button from "./shared/Button";

const Billing = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col border-b-2 border-secondary">
        <h1 className="font-semibold mb-3 text-2xl">Billing & Tax</h1>
        <p className="mb-2 text-[#0000005f] text-sm">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="mt-12 flex flex-col">
        <div className="flex flex-col gap-3 mb-12">
          <h1 className="font-medium">Credit Card</h1>
          <p className="text-sm text-[#0000005f]">Manage your credits</p>
          <Button className="bg-teritiary text-primary rounded-md w-[94px] text-center p-3 mt-3">
            {" "}
            Update{" "}
          </Button>
        </div>
        <div className="flex flex-col gap-3 mb-12">
          <h1 className="font-medium">Invoices</h1>
          <p className="text-sm text-[#0000005f]">Manage your invoices</p>
          <Button className="bg-teritiary text-primary rounded-md w-[94px] text-center p-3 mt-3">
            {" "}
            Update{" "}
          </Button>
        </div>
        <div className="flex flex-col gap-3 mb-12">
          <h1 className="font-medium">Tax Information</h1>
          <p className="text-sm text-[#0000005f]">
            Manage your tax information
          </p>
          <Button className="bg-teritiary text-primary rounded-md w-[94px] text-center p-3 mt-3">
            {" "}
            Update{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
