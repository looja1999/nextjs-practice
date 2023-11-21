import React from "react";
import { LiaEbay } from "react-icons/lia";
import { FaChevronDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import EbayLogo from "@/public/ebay.png";
import Image from "next/image";

const Layout = () => {
  return (
    <div className="max-w-[1280px] mx-auto border-b border-gray-200">
      <div className="max-w-[1140px] h-24 mx-auto flex gap-8 items-center">
        <Image src={EbayLogo} className="object-contain w-[140px]" />
        <div className="flex gap-2 font-light text-sm items-center ">
          <h1>
            Shop by <br /> Category
          </h1>
          <FaChevronDown />
        </div>
        <div className="flex gap-2 w-full items-center">
          <div className="w-[85%] h-[40px] flex items-center border-2 border-gray-600">
            <h1 className="flex flex-1 gap-2 items-center text-gray-600 text-sm px-2 ">
              <CiSearch size="20px" />
              Search for anything
            </h1>
            <div className="border h-full px-4 items-center flex text-[12px] gap-2">
              All Categories
              <FaChevronDown size="10px" />
            </div>
          </div>
          <div className="h-[40px] px-8 bg-blue-600 flex items-center text-[14px] text-white">
            Search
          </div>
          <p className="text-[12px] text-gray-500">Advanced</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
