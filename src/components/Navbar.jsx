import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className="navbar glass-nav fixed top-0 z-50 px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-xl border border-primary/10">
            <li><Link to="/" className="text-lg py-2">🏠 หน้าหลัก</Link></li>
            <li><Link to="/menu" className="text-lg py-2">📋 เมนูทั้งหมด</Link></li>
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img className="w-12 md:w-16" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link to="/" className="text-base font-semibold hover:text-primary transition-colors">
              หน้าหลัก
            </Link>
          </li>
          <li>
            <Link to="/menu" className="text-base font-semibold hover:text-primary transition-colors">
              เมนูทั้งหมด
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a 
          href="https://linktr.ee/ITFeature" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm md:btn-md text-white shadow-md hover:shadow-lg transition-all"
        >
          ติดต่อเรา
        </a>
      </div>
    </div>
  );
}

export default Navbar;
