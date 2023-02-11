import React from 'react';

const Sidebar = (setCurrentQus) => {
  return (
    <div className="w-full p-3 grid grid-rows-7 h-screen gap-3">
      {/* profile and time section */}
      <div className="lg:flex items-center space-x-5 bg-blue-200 px-2 py-2 rounded-md shadow-md">
        <img src="/user.png" className="w-2/5 rounded-md" alt="" />
        <div>
          <h3 className="text-md font-bold">Time left: 02:59:39</h3>
          <h3 className="text-md font-bold">User Name</h3>
        </div>
      </div>

      {/* qus pallette  section */}
      <div className=" bg-blue-200 row-span-2 rounded-md  h-full">
        <h2 className="py-1 px-3 bg-blue-500 font-semibold text-white rounded-t-md mb-3">
          Question Pallet
        </h2>
        <div className="flex flex-wrap space-x-2 px-3 ">
          <button className="px-2 rounded bg-gray-500 text-white font-bold">
            1
          </button>
          <button className="px-2 rounded bg-gray-500 text-white font-bold">
            2
          </button>
          <button className="px-2 rounded bg-gray-500 text-white font-bold">
            3
          </button>
          <button className="px-2 rounded bg-gray-500 text-white font-bold">
            4
          </button>
          <button className="px-2 rounded bg-gray-500 text-white font-bold">
            5
          </button>
          <button className="px-2 rounded bg-gray-500 text-white font-bold">
            6
          </button>
        </div>
      </div>
      {/* Legend section */}
      <div className="rounded-md">
        <h2 className="py-1 px-3 bg-blue-500 row-span-2 font-semibold text-white rounded-t-md ">
          Legend (Click to View)
        </h2>
        {/* buttons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 bg-blue-200 p-3 rounded-b-md shadow-lg">
          <button className="w-full py-1 bg-green-600 rounded-md text-white font-semibold">
            Answer
          </button>
          <button className="w-full py-1 bg-red-600 rounded-md text-white font-semibold">
            No Answer
          </button>
          <button className="w-full py-1 bg-purple-600 rounded-md text-white font-semibold">
            Review-Ans
          </button>
          <button className="w-full py-1 bg-yellow-500 rounded-md text-white font-semibold">
            Review-Ans
          </button>
          <button className="w-full py-1 bg-gray-700 rounded-md text-white font-semibold">
            Dump
          </button>
          <button className="w-full py-1 bg-gray-400 rounded-md text-white font-semibold">
            No visit
          </button>
          <button className="w-full py-1 bg-blue-500 col-span-2 rounded-md text-white font-semibold">
            All Questions 10
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-2 bg-blue-200 rounded-md shadow-md p-3">
          <button className="w-full py-1 bg-blue-500 rounded-md text-white font-semibold">
            Profile
          </button>
          <button className="w-full py-1 bg-blue-500 rounded-md text-white font-semibold">
            Instr
          </button>
          <button className="w-full py-1 bg-blue-500 rounded-md text-white font-semibold">
            Questions
          </button>
          <button className="w-full py-1 bg-blue-500 rounded-md text-white font-semibold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
