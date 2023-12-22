import React from "react";
import { useNavigate } from "react-router-dom";
// import imgCode from "src/Assets/img/code.jpg";

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <section class="bg-gray-100 min-h-screen flex items-center justify-center">
        {/* Login Container */}
        <div class="bg-gray-300 flex rounded-2xl shadow-lg max-w-3xl p-5">
          {/* Form Left Section */}
          <div class="w-1/2 px-8">
            <h2 class="font-bold mb-3 text-teal-500">Login</h2>

            <form class="flex flex-col gap-4">
              <input
                type="text"
                name="email"
                placeholder="Email"
                class="p-2 mt-8 rounded-xl border"
              />
              <div class="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  class="p-2 rounded-xl border w-full"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>

              <button class="bg-teal-500 rounded-xl text-white py-2 hover:scale-105 duration-300">
                Login
              </button>
            </form>

            <div class="mt-6 grid grid-cols-3 items-center text-black">
              <hr class="border-black"></hr>
              <p class="text-center text-sm">OR</p>
              <hr class="border-black"></hr>
            </div>

            <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300">
              Login With Google
            </button>

            <div class="mt-5 text-xs ">
              <a href="#">Forgot your password?</a>
            </div>

            <div class="mt-4 grid grid-cols-4 ">
              <hr class="border-black"></hr>
              <hr class="border-black"></hr>
              <hr class="border-black"></hr>
              <hr class="border-black"></hr>
            </div>

            <div class="flex flex-row gap-36 mt-4 text-xs">
              <span class="">Don't have any account?</span>
              <button
                class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </button>
            </div>
          </div>

          {/* Image Right Section */}
          <div class="w-1/2 ">
            <img src={require("../Assets/img/safar.jpg")} class="rounded-2xl" />
          </div>
        </div>
        {/* Login Container */}
      </section>
    </div>
  );
}

export default Login;
