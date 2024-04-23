import React from 'react'

const Personal = () => {
  return (
    <div>
      {/* Introduction part */}
      <div className="flex flex-col border-b-2 border-secondary">
        <h1 className="font-semibold mb-3">General Information</h1>
        <p className="mb-2">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="flex flex-col mt-3">
        <h1 className="mt-2 font-semibold">Profile Picture</h1>
        <div className="mt-4 flex gap-4">
          <img src="/mark.svg" alt="profile" />
          <div>
            <h1 className="font-semibold">Mark collins</h1>
            <p className="text-[#757575]">Role/Title</p>
            <p className="text-[#757575]">Location</p>
          </div>
          <div className="flex items-end gap-6">
            <Button className="h-11 px-8 bg-teritiary flex items-center text-white rounded-md">
              change
            </Button>
            <Button className="h-11 px-8 border-2 flex items-center text-teritiary border-teritiary rounded-md">
              delete
            </Button>
          </div>
        </div>
      </div>
      {/* Form part */}

      <div className="flex mt-10 gap-10">
        {/* First form */}
        <div className="flex flex-col">
          <label htmlFor="" className="mb-2">
            Username
          </label>
          <input
            type="text"
            placeholder="Sam"
            className="border-2 border-[#bebebe] text-start p-3 rounded-lg mb-6"
          />
          <label htmlFor="" className="mb-2">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="123-098-345-09"
            className="border-2 border-[#bebebe] text-start p-3 rounded-lg mb-6"
          />
          <label htmlFor="" className="mb-2">
            Address
          </label>
          <input
            type="text"
            placeholder="xyz"
            className="border-2 border-[#bebebe] text-start p-3 rounded-lg mb-6"
          />
          <label htmlFor="" className="mb-2">
            City
          </label>
          <input
            type="text"
            placeholder="dfg"
            className="border-2 border-[#bebebe] text-start p-3 rounded-lg mb-6"
          />
        </div>
        {/* Second Form */}
        <div className="flex flex-col">
          <label htmlFor="" className="mb-2">
            Email Address
          </label>
          <input
            type="text"
            placeholder="xyz@gmail.com"
            className="border-2 border-[#bebebe] text-start p-3 rounded-lg mb-6"
          />
          <label htmlFor="" className="mb-2">
            Fax
          </label>
          <input
            type="text"
            placeholder="1238"
            className="border-2 border-[#bebebe] text-start p-3 rounded-lg mb-6"
          />
          <label htmlFor="" className="mb-2">
            Country
          </label>
          <input
            type="text"
            className="border-2 border-[#bebebe] text-start p-3 rounded-lg mb-6"
          />
          <label htmlFor="" className="mb-2">
            State
          </label>
          <input
            type="text"
            placeholder="kjgf"
            className="border-2 border-[#bebebe] text-start p-3 rounded-lg mb-6"
          />
        </div>
      </div>
    </div>
  );
}

export default Personal
