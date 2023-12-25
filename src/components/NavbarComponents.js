import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  let user = JSON.parse(localStorage.getItem("user-info"));
  console.warn(user);

  let userName = user ? user.name : "Guest";

  // Logout
  const navigate = useNavigate();
  function Logout() {
    localStorage.clear();
    navigate("/");
  }
  // Logout

  return (
    <div className="relative">
      <nav className="fixed flex flex-col sm:flex-row sm:text-left sm:justify-between p-4 bg-white sm:items-baseline w-full shadow-xl ">
        <div className="mb-2 sm:mb-0">
          <a
            href="#"
            className="text-2xl no-underline text-gray-600 hover:text-teal-500 font-bold"
          >
            Home
          </a>
        </div>

        <div className="flex gap-6 justify-center items-center sm:mx-auto">
          {localStorage.getItem("user-info") ? (
            <>
              <a
                href="/addproduct"
                className="text-xl no-underline text-gray-600 hover:text-teal-500 font-bold"
              >
                Add Product
              </a>
              <a
                href="/updateproduct"
                className="text-xl no-underline text-gray-600 hover:text-teal-500 font-bold"
              >
                Update Product
              </a>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>

        {/* Profile */}
        <div className="relative inline-block text-left">
          <div>
            <button
              onClick={toggleProfileDropdown}
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border shadow-xl border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <span>{userName}</span>
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {isProfileOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="py-1" role="none">
                {/* Dropdown items */}
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  onClick={Logout}
                >
                  Sign out
                </a>
              </div>
            </div>
          )}
        </div>
        {/* Profile */}
      </nav>
    </div>
  );
}

export default Navbar;
