import Image from "next/image";
import React from "react";
import MyLink from "./MyLink";
import { FaHome, FaClock, FaChartBar } from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
      icon: FaHome,
    },
    {
      path: "/timeline",
      text: "Timeline",
      icon: FaClock,
    },
    {
      path: "/stats",
      text: "Stats",
      icon: FaChartBar,
    },
  ];
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  p-2 shadow"
            >
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <MyLink key={index} href={item.path}>
                    <span className="flex items-center gap-2">
                      <Icon size={18} />
                      {item.text}
                    </span>
                  </MyLink>
                );
              })}
            </ul>
          </div>
          <div>
            <Image
              src="/KeenKeeper.png"
              alt="logo"
              width={150}
              height={150}
              className="w-50 lg:py-4 py-4 md:w-60 md:py-6 object-contain "
            />
          </div>
        </div>
        <div className="navbar-end  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <MyLink key={index} href={item.path}>
                  <span className="flex items-center gap-2">
                    <Icon size={18} />
                    {item.text}
                  </span>
                </MyLink>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
