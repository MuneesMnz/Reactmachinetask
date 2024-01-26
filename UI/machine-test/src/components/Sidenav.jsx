import React from "react";
import { NavLink } from "react-router-dom";
import Briefcase from "../../../Assets/Briefcase.png";
import StatBoard from "../../../Assets/StatBoard.png";
import Circled from "../../../Assets/Circled Menu.png";
import Help from "../../../Assets/Help.png";
import Support from "../../../Assets/Support.png";
import Plugins from "../../../Assets/Puzzle.png";
import ShutDown from "../../../Assets/Shutdown.png";

const NavList = [
  {
    name: "Dashboard",
    link: "/",
    icon: Circled,
  },
  {
    name: "Help",
    link: "/help",
    icon: Help,
  },
  {
    name: "Support",
    link: "/support",
    icon: Support,
  },
  {
    name: "Plugins",
    link: "/plugins",
    icon: Plugins,
  },
];

const Sidenav = () => {
  return (
    <div className="bg-[#20263A] h-screen w-[200px] flex justify-between flex-col  ">
      <div className="p-5 flex flex-col justify-center items-center gap-1 cursor-pointer">
        <img src={Briefcase} alt="Briefcase" />
        <img src={StatBoard} alt="StatBoard" />
      </div>

      <div className="flex flex-col gap-5 items-end">
        {NavList.map((item, index) => (
          <NavLink
            to={item.link}
            key={index}
            className={({ isActive }) =>
              `flex w-[150px] px-5 py-2 gap-5 ${
                isActive ? " bg-white " : "text-white bg-[#1A1F30]"
              } rounded-l-lg cursor-pointer `
            }
          >
            <img src={item.icon} className="w-[20px]" alt="" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      <div className="w-full h-[50px] bg-white flex justify-center gap-2 items-center cursor-pointer  text-red-600">
        <span>Login</span> <img src={ShutDown} alt="shut doun" className=" " />
      </div>
    </div>
  );
};

export default Sidenav;
