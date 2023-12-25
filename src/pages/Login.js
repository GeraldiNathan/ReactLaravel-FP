import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavbarComponents";
import SafarImage from "../Assets/img/safar.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/addproduct");
    }
  }, []);

  async function login(event) {
    event.preventDefault();

    try {
      console.warn(email, password);
      let item = { email, password };

      let result = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!result.ok) {
        throw new Error(`Kesalahan HTTP! Status: ${result.status}`);
      }

      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result));

      navigate("/home");
    } catch (error) {
      console.error("kesalahan selama registrasi:", error);
    }
  }

  return (
    <>
      {/* <Navbar /> */}
      <div>
        <section className="bg-gray-100 min-h-screen flex items-center justify-center">
          {/* Login Container */}
          <div className="bg-gray-300 flex rounded-2xl shadow-lg max-w-3xl p-5">
            {/* Form Left Section */}
            <div className="w-1/2 px-8">
              <h2 className="font-bold mb-3 text-teal-500">Login</h2>

              <form className="flex flex-col gap-4 " onSubmit={login}>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="p-2 mt-8 rounded-xl border"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="p-2 rounded-xl border w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  className="bg-teal-500 rounded-xl text-white py-2 hover:scale-105 duration-300"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Login
                </button>
              </form>

              <div className="mt-6 grid grid-cols-3 items-center text-black">
                <hr className="border-black"></hr>
                <p className="text-center text-sm">OR</p>
                <hr className="border-black"></hr>
              </div>

              <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300">
                Login With Google
              </button>

              <div className="mt-5 text-xs ">
                <a href="#">Forgot your password?</a>
              </div>

              <div className="mt-4 grid grid-cols-4 ">
                <hr className="border-black"></hr>
                <hr className="border-black"></hr>
                <hr className="border-black"></hr>
                <hr className="border-black"></hr>
              </div>

              <div className="flex flex-row gap-36 mt-4 text-xs">
                <span className="">Don't have any account?</span>
                <button
                  className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </div>
            </div>

            {/* Image Right Section */}
            <div className="w-1/2 ">
              <img src={SafarImage} className="rounded-2xl" alt="image" />
            </div>
          </div>
          {/* Login Container */}
        </section>
      </div>
    </>
  );
}

export default Login;
