import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[300px] bg-gradient-to-r from-gray-900 to-gray-700 py-2 mb-8">
      <div className="max-w-[1140px] mx-auto pt-8 flex flex-col text-white gap-6">
        <h1 className="text-4xl font-semibold ">
          Extra 30% Off <br /> with eBay Plus
        </h1>
        <p>
          Save more on the best of Black <br /> Friday deals
        </p>
        <button className="border border-white max-w-[250px] p-2 hover:bg-white hover:text-gray-900">
          Show me more deals
        </button>
      </div>
    </div>
  );
};

export default Hero;
