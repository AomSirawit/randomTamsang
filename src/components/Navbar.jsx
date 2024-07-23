import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className="navbar bg-white shadow-md fixed top-0 p-0 font-semibold text-slate-700">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to="/">หน้าหลัก</Link></li>
            <li><Link to="/menu">เมนูทั้งหมด</Link></li>
          </ul>
        </div>
       <img className="w-20 mx-5" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">หน้าหลัก</Link></li>
          <li><Link to="/menu">เมนูทั้งหมด</Link></li>
        </ul>
      </div>
      <div className="navbar-end mx-5">
        <a href="https://linktr.ee/ITFeature" target="_blank" className="btn bg-orange-400 text-white">ติดต่อ</a>
      </div>
    </div>
  );
}

export default Navbar;
