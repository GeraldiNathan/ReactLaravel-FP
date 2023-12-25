import React from "react";
import { useState, useRef, useEffect } from "react";
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavbarComponents";

function ProfileComponent() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  console.warn(user);

  let userName = user ? user.name : "Guest";
  const [picture, setPicture] = useState(null);
  const img = useRef();

  

  return (
    <>
      <div class="bg-backgroundcolor">
        <div class="container mx-auto py-8">
          <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div class="col-span-4 sm:col-span-3">
              <div class="bg-white shadow rounded-lg p-6">
                <div class="flex flex-col">
                  <span class="text-gray-700 uppercase font-bold tracking-wider mb-2">
                    User Profile
                  </span>
                  <ul>
                    <li href="#" class="mb-2 hover:text-green-500 rounded">
                      User Info
                    </li>
                    <li href="#" class="mb-2 hover:text-green-500 rounded">
                      My Recipe
                    </li>
                    <li href="#" class="mb-2 hover:text-green-500 rounded">
                      Favorites
                    </li>
                    <li href="#" class="mb-2 hover:text-green-500 rounded">
                      Notifications
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-span-4 sm:col-span-9">
              <div class="bg-white shadow rounded-lg p-6">
                <div class="flex flex-col items-center">
                  <div className="flex flex-col w-40 h-40 relative">
                    <img
                      src={
                        picture
                          ? picture
                          : "https://via.placeholder.com/150.png?text=webreq"
                      }
                      className="w-full h-full rounded-full shadow-md"
                    />
                    <div className="absolute bottom-1 right-3 flex justify-center items-center z-10 bg-white p-1 rounded-full">
                      <div
                        className="bg-hijau p-[2px] rounded-full cursor-pointer"
                        onClick={() => img.current.click()}
                      >
                        <Icon icon="ic:outline-edit" color={"white"}
                          width="20px"
                          height="20px"/>
                      </div>
                    </div>
                  </div>
                  <h1 class="text-xl font-bold">{userName}</h1>
                </div>
                <input
                  ref={img}
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => {
                    let pic = URL.createObjectURL(e.target.files[0]);
                    setPicture(pic);
                  }}
                />

                <div className="">
                  <form className="flex flex-col items gap-4 m-12 ">
                    <label class="font-bold">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="p-2 mb-1 rounded-xl border"
                    />
                    <label class="font-bold">Email Address</label>
                    <input
                      type="text"
                      name="email"
                      className="p-2 mb-1  rounded-xl border"
                    />
                    <label class="font-bold">Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        name="password"
                        className="p-2 mb-1 rounded-xl border w-full"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="gray"
                        className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    </div>
                  </form>
                  <div class="mt-6 flex flex-wrap gap-4 justify-center" >
                    <a
                  href="#"
                  class="bg-hijau hover:bg-hijau-600 text-white py-2 px-4 rounded-full"
                >
                  Save Changes
                </a>
                </div>
                
              </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileComponent;
