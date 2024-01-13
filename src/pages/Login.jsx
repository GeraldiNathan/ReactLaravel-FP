import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SafarImage from "../Assets/img/safar.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/home");
    }
  }, []);

  async function login(event) {
    event.preventDefault();

    try {
      let item = { email, password };

      let result = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!email || !password) {
        alert("Field tidak boleh kosong");
        return;
      }

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
      <div className="">
        <section className="bg-hijau min-h-screen flex items-center justify-center">
          {/* Login Container */}
          <div className="bg-cream flex rounded-2xl shadow-xl max-w-3xl p-5">
            {/* Form Left Section */}
            <div className="w-1/2 px-8">
              <h2 className="font-bold mb-3 bg-gradient-to-tr from-amber-500 to to-orange bg-clip-text text-transparent">
                Login
              </h2>

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
                  className="bg-gradient-to-bl from-amber-500 to to-orange rounded-xl text-black py-2 hover:scale-105 duration-300"
                  onClick={() => {
                    navigate("/");
                  }}
                  type="submit"
                >
                  Login
                </button>
              </form>

              <div className="mt-6 grid grid-cols-3 items-center text-black">
                <hr className="border-black"></hr>
                <p className="text-center text-sm">OR</p>
                <hr className="border-black"></hr>
              </div>

              <button className="bg-gradient-to-tr from-orange to to-amber-500 border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300">
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
                  className="py-2 px-5 bg-gradient-to-tr from-amber-500 to to-orange border rounded-xl hover:scale-110 duration-300"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </div>
            </div>

            {/* Image Right Section */}
            <div className="w-1/2 ">
              <img
                src={require("../Assets/img/loginpage.png")}
                alt="Gambar 1"
                className="2xl drop-shadow-2xl rounded-2xl"
              />
            </div>
          </div>
          {/* Login Container */}
        </section>
      </div>
    </>
  );
}

export default Login;
