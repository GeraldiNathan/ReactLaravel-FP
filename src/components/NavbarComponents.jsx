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
    <div className="relative bg-cream">
      <nav className=" flex flex-col sm:flex-row sm:text-left sm:justify-between p-4 bg-krem sm:items-baseline w-full h-14 ">
        <div className="mb-2 sm:mb-0">
          <a
            href="/home"
            className="ps-14 text-xl no-underline text-black-600 hover:text-primary font-bold"
          >
            Ala-Rumah
          </a>
        </div>

        <div className="flex gap-6 justify-center items-center sm:mx-auto">
          {localStorage.getItem("user-info") ? (
            <>
              <a
                href="/review"
                className="text-md no-underline text-black-600 hover:text-primary font-bold"
              >
                Review
              </a>
              <a
                href="/addproduct"
                className="text-md no-underline text-black-600 hover:text-primary font-bold"
              >
                Admin1
              </a>
              <a
                href="/listproduct"
                className="text-md no-underline text-black-600 hover:text-primary font-bold"
              >
                Admin2
              </a>
              <a
                href="/search"
                className="text-md no-underline text-black-600 hover:text-primary font-bold"
              >
                Search Product
              </a>
              <a
                href="/aboutus"
                className="text-md no-underline text-black-600 hover:text-primary font-bold"
              >
                About Us
              </a>
            </>
          ) : (
            <>
              <a
                href="/register"
                className="text-md no-underline text-black-600 hover:text-primary font-bold"
              >
                Register
              </a>
              <a
                href="/"
                className="text-md no-underline text-black-600 hover:text-primary font-bold"
              >
                Login
              </a>
            </>
          )}
        </div>

        {/* Profile */}
        <div className="relative inline-block text-left me-10">
          <div>
            <button
              onClick={toggleProfileDropdown}
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-black-600 bg-amber-500 border shadow-xl border-white rounded-2xl hover:bg-amber-300 focus:outline-none focus:ring focus:border-blue-300"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <span className="font-semibold text-white ">
                Halo, {userName}
              </span>
              <svg
                className="-mr-1 ml-2 h-5 w-5 text-black"
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
                  href="/profile"
                  className="block px-4 py-2 text-sm text-black-600 hover:bg-amber-100 hover:text-amber-600"
                  role="menuitem"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-black-600 hover:bg-amber-100 hover:text-amber-600"
                  role="menuitem"
                  onClick={Logout}
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-black-600 hover:bg-amber-100 hover:text-amber-600"
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
