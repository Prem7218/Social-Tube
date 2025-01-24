// Body.jsx
import React from "react";
import SideBar from "./sidebar/SideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  return (
    <div className="body-container flex">
      <div className={`sidebar-container ${isMenuOpen ? "w-1/5" : ""} overflow-y-auto`}>
        <SideBar />
      </div>
      <Outlet />
    </div>
  );
};

export default Body;