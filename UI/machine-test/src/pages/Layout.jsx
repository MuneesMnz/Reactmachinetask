import React from "react";
import Sidenav from "../components/Sidenav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex w-full h-screen bg-[#E8EDFF] font-poppins">
      <Sidenav />
      <div className="p-5 px-10 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
