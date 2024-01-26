import React from "react";
import Avathar from "../../../Assets/Rectangle 10.png"

const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-between w-full items-center">
        <div className="text-lg font-[400] tracking-wide ">Good Morning !</div>

        <div className="w-[150px] h-auto p-3 bg-white rounded-lg flex gap-3">
          <div>
            <div className=" font-[400]">John Doe</div>
            <div className="text-[11px]">john@doe.com</div>
          </div>
          <img src={Avathar} className=" object-cover" alt="Avathar" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
