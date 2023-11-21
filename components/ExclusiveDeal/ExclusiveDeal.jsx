import React from "react";

const ExclusiveDeal = () => {
  return (
    <div className="w-full max-w-[1140px] mx-auto bg-green-300 px-3 py-8 flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-green-800">
          Exclusive savings with eBay plus
        </h1>
        <p className="font-medium text-green-800">
          Save more on the best of Black Friday deals
        </p>
      </div>
      <button className="w-[150px] h-[50px] font-medium hover:bg-gray-800 hover:text-green-300 border border-green-800">
        Show me more
      </button>
    </div>
  );
};

export default ExclusiveDeal;
