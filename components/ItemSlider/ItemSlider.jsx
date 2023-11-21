import React from "react";
import Item from "../Item/Item";

const ItemSlider = () => {
  return (
    <div className="max-w-[1140px] mx-auto flex flex-col gap-8">
      <h1 className="text-2xl font-semibold">Your Recently Viewed Items</h1>
      <div className="overflow-x-scroll flex flex-nowrap gap-4">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default ItemSlider;
