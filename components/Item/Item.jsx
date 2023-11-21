import React from "react";

const Item = () => {
  return (
    <div className="w-[280px] h-[360px] flex flex-col gap-2">
      <div className="w-full h-[70%] bg-gray-200 rounded-xl" />
      <p className="font-[12px]">
        {" "}
        {"("}Sizes M & L{")"} Fowler #11 Matildas Football Shirt Jersey
        Socceroos
      </p>
      <p className="font-bold">AU $99.00</p>
    </div>
  );
};

export default Item;
