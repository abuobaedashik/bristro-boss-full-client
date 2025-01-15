import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const link = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 text-base text-[#EEFF25] font-medium flex gap-1 items-center"
            : " flex gap-1 items-center text-sm font-medium px-3"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 text-base text-[#EEFF25] font-medium flex gap-1 items-center"
            : "flex gap-1 items-center text-sm font-medium px-3"
        }
        to="/menu"
      >
       Menu
      </NavLink>

      
    </>
  );

  return (
    <>
      <div className="navbar max-w-[1920px] py-3 fixed z-10 bg-opacity-30 bg-black text-[#ffffff]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <div className="flex items-start mx-5 justify-between flex-col">
          <a className="text-3xl font-bold  uppercase text-[#ffffff]">Bristro Boss</a> 
          <a className="text-xl font-semibold   uppercase text-[#ffffff]">Restaurant</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Go To </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
