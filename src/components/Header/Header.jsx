import React from "react";
import logo from "./../../assets/zenZ-logo.jpg";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const links = (
    <>
      <NavLink>
        <li>Home</li>
      </NavLink>
      <NavLink>
        <li>Apps</li>
      </NavLink>
      <NavLink>
        <li>Installation</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-5 shadow gap-2 hover:"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="flex">
          <img className="w-18" src={logo} alt="" />
          <p className="text-2xl font-bold">
            <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              .io
            </span>
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">
          <FaGithub />
          Contribution
        </a>
      </div>
    </div>
  );
};

export default Header;
