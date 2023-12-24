import React from "react";
import "./nav.css";

function Navbar() {
  return (
    <nav id="navbar" className="flex flex-col sm:flex-row sm:text-left sm:justify-between p-4 sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <a href="/" id="logo" className="text-xl no-underline text-black-600 hover:text-teal-500 font-bold">
          Ala-rumah
        </a>
      </div>
      <div id="nav" className="flex gap-6 justify-center items-center sm:mx-auto">
        <a href="/addproduct" className="text-md no-underline text-black-600 hover:text-teal-500 font-bold">
          Categories
        </a>
        <a href="/addproduct" className="text-md no-underline text-black-600 hover:text-teal-500 font-bold">
          Features
        </a>
        <a href="/updateproduct" className="text-md no-underline text-black-600 hover:text-teal-500 font-bold">
          Review
        </a>
        <a href="/register" className="text-md no-underline text-black-600 hover:text-teal-500 font-bold">
          Join Us
        </a>
      </div>

      {/* Profile */}
      <div className="pe-5 text-sm">
        <button  id="login-btn" class="text-black-600 font-bold rounded-full ">
          <a href="/login">Login</a>
        </button>
      </div>

      
    </nav>
  );
}

export default Navbar;
