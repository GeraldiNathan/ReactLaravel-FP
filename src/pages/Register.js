import React from "react";

function Register() {
  return (
    <div>
      <section class="bg-gray-100 min-h-screen flex items-center  justify-center">
        {/* Register Container */}
        <div class="bg-gray-300 flex rounded-2xl shadow-lg max-w-4xl px-8">
          <form class="flex flex-col items gap-4 m-12 ">
            <span class="flex justify-center font-bold text-teal-500 text-3xl">
              Register
            </span>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              class="p-2 mt-8 rounded-xl border"
            />
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              class="p-2 rounded-xl border"
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
              Register
            </button>

            <div class="mt-6 grid grid-cols-3 items-center text-black">
              <hr class="border-black"></hr>
              <p class="text-center text-sm">OR</p>
              <hr class="border-black"></hr>
            </div>

            <div class="flex flex-row gap-2">
              <span>Have an existing account?</span>
              <a href="/login" class="font-bold">
                Login
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Register;
