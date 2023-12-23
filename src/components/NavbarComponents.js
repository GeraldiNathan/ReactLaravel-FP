import React from "react";

function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row sm:text-left sm:justify-between p-4 bg-white sm:items-baseline w-full shadow-xl">
      <div className="mb-2 sm:mb-0">
        <a
          href="#"
          className="text-2xl no-underline text-gray-600 hover:text-teal-500 font-bold"
        >
          Home
        </a>
      </div>

      <div className="flex gap-6 justify-center items-center sm:mx-auto">
        <a
          href="/add"
          className="text-xl no-underline text-gray-600 hover:text-teal-500 font-bold"
        >
          Add Product
        </a>
        <a
          href="/home"
          className="text-xl no-underline text-gray-600 hover:text-teal-500 font-bold"
        >
          Update Product
        </a>
        <a
          href="/register"
          className="text-xl no-underline text-gray-600 hover:text-teal-500 font-bold"
        >
          Register
        </a>
        <a
          href="/"
          className="text-xl no-underline text-gray-600 hover:text-teal-500 font-bold"
        >
          Login
        </a>
      </div>

      {/* Profile */}
      <div className="font-bold text-xl"> Halo, Geraldi</div>
      {/* Profile */}
    </nav>
  );
}

export default Navbar;
