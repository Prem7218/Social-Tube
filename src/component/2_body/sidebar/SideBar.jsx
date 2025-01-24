// SideBar.jsx
import React from "react";
import { tabs1, tabs2, theD1, theD2, theD3 } from "../../../utils/youtube_SVG/tab_and_svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {

  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  return (
    <div className="sidebar bg-gray-50 shadow-md">
      {tabs1.map((tab, index) => (
        <div
          key={index}
          className="sidebar-item flex items-center p-2 hover:bg-gray-200 rounded-lg gap-4 mx-4">
          <svg className="icon h-6 w-7 mx-1">
            {index === 0 ? <Link to={"/"}><path d={theD1[0]} /></Link> : <path d={theD1[index]} />}
          </svg>
          {isMenuOpen ? <h2 className="text-sm mx-2 font-medium">{tab}</h2> : ""}
        </div>
      ))}

      <hr className="divider border-t-2 border-gray-300 my-2" />

      <div className="sidebar-section">
        {isMenuOpen ? <p className="section-title mx-7 font-bold flex items-center">
          You
          <svg className="icon h-6 w-7 mx-1">
            <path d={theD3} />
          </svg>
        </p> : ""}

        {tabs2.map((tab, index) => (
          <div
            key={index}
            className="sidebar-item flex items-center p-2 hover:bg-gray-200 rounded-lg gap-4 mx-4">
            <svg className="icon h-6 w-7 mx-1">
              <path d={theD2[index]} />
            </svg>
            {isMenuOpen ? <h2 className="text-sm font-medium mx-2">{tab}</h2> : ""}
          </div>
        ))}
      </div>

      <hr className="divider border-t-2 border-gray-300 my-2" />
    </div>
  );
};

export default SideBar;