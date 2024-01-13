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
    <div className="relative my-8">
      <nav className="bg-cream flex flex-col fixed top-0 sm:flex-row sm:text-left sm:justify-between p-1 bg-krem sm:items-baseline w-full h-14 z-10">
        <div className="mb-2 sm:mb-0">
          <a
            href="/home"
            className="ps-14 text-xl no-underline text-black-600 hover:text-hijau font-bold"
          >
            Ala-Rumah
          </a>
        </div>

        <div className="flex gap-6  items-center sm:mx-auto">
          {localStorage.getItem("user-info") ? (
            <>
              <a
                href="/review"
                className="text-md no-underline text-black-600 hover:text-hijau font-bold"
              >
                Review
              </a>

              <a
                href="/listproduct"
                className="text-md no-underline text-black-600 hover:text-hijau font-bold"
              >
                Admin
              </a>

              <a
                href="/aboutus"
                className="text-md no-underline text-black-600 hover:text-hijau font-bold"
              >
                About Us
              </a>
            </>
          ) : (
            <>
              <a
                href="/register"
                className="text-md no-underline text-black-600 hover:text-hijau font-bold"
              >
                Register
              </a>
              <a
                href="/"
                className="text-md no-underline text-black-600 hover:text-hijau font-bold"
              >
                Login
              </a>
            </>
          )}
        </div>

        {/* Profile */}
        <div className="relative inline-block text-left me-10">
          <div>
            <div
              onClick={toggleProfileDropdown}
              className="inline-flex items-center justify-center w-12 h-12 overflow-hidden rounded-full p-2 "
              id="avatar-dropdown"
              aria-haspopup="true"
              aria-expanded={isProfileOpen ? "true" : "false"}
            >
              <img
                src={require("../Assets/img/ella.JPG")}
                alt="Avatar"
                className="object-cover w-full h-full cursor-pointer transform scale-125 rounded-full"
              />
            </div>
            {isProfileOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="avatar-dropdown"
              >
                <div className="py-1" role="none">
                  {/* Dropdown items */}
                  <div className="flex flex-col justify-start items-start border-b border-hijau mb-2 p-2">
                    <span className="text-lg font-semibold">{userName}</span>
                    <span className="text-sm">geraldi@gmail.com</span>
                  </div>

                  <div className="block text-sm text-black-600">
                    <a
                      href="/profile"
                      className="block px-4 py-2 text-sm text-black-600 hover:bg-green-100 hover:text-hijau"
                      role="menuitem"
                    >
                      Profile
                    </a>
                    <a
                      href="/home"
                      className="block px-4 py-2 text-sm text-black-600 hover:bg-green-100 hover:text-hijau"
                      role="menuitem"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-black-600 hover:bg-green-100 hover:text-hijau"
                      role="menuitem"
                      onClick={Logout}
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Profile */}
      </nav>
    </div>
  );
}

export default Navbar;
