import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { FiBell } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

const TopNav = () => {
  return (
    <nav className="border-b py-1 text-[12px] font-light border-gray-200">
      <div className="max-w-[1140px] mx-auto flex justify-between">
        <div className="flex gap-4 items-center">
          <h1>
            G'day! <a className="text-blue-500 underline">Sign in</a> or{" "}
            <a className="text-blue-500 underline">Register</a>
          </h1>
          <h1 className="leading-3">
            <span className="font-medium">ebay</span>
            <span className="text-green-800">plus</span>
          </h1>
          <h1>eBay Deals</h1>
          <h1>Find a Store</h1>
          <h1>Help</h1>
          <div className="h-full text-white bg-red-600 px-1 flex items-center gap-2">
            <div>
              <p className="text-[10px]">20% off* Bosh</p>
              <p className="text-[8px]">T&C apply</p>
            </div>
            <FaArrowRightLong className="text-md" />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <h1>Sell</h1>
          <h1 className="flex items-center gap-1">
            Watch List <span>{<FaChevronDown />}</span>
          </h1>
          <h1 className="flex items-center gap-1">
            My ebay <span>{<FaChevronDown />}</span>
          </h1>
          <FiBell size="18px" />
          <FiShoppingCart size="18px" />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
