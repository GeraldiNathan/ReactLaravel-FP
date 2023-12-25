import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/addproduct");
    }
  }, []);

  async function signUp(event) {
    event.preventDefault();

    try {
      let item = { name, password, email };
      console.warn(item);

      let result = await fetch("http://127.0.0.1:8000/api/register", {
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
      // console.warn("result", result);
      localStorage.setItem("user-info", JSON.stringify(result));

      navigate("/home");
    } catch (error) {
      console.error("Kesalahan selama registrasi:", error);
    }
  }

  return (
    <>
      {/* <Navbar /> */}
      <div>
        <section className="bg-gray-100 min-h-screen flex items-center  justify-center">
          {/* Register Container */}
          <div className="bg-gray-300 flex rounded-2xl shadow-lg max-w-4xl px-8">
            <form className="flex flex-col items gap-4 m-12 " onSubmit={signUp}>
              <span className="flex justify-center font-bold text-teal-500 text-3xl">
                Register
              </span>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="p-2 mt-8 rounded-xl border"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                className="p-2 rounded-xl border"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="p-2 rounded-xl border w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

              <button
                className="bg-teal-500 rounded-xl text-white py-2 hover:scale-105 duration-300"
                // onClick={signUp}
                type="submit"
              >
                Register
              </button>

              <div className="mt-6 grid grid-cols-3 items-center text-black">
                <hr className="border-black"></hr>
                <p className="text-center text-sm">OR</p>
                <hr className="border-black"></hr>
              </div>

              <div className="flex flex-row gap-2">
                <span>Have an existing account?</span>
                <a href="/" className="font-bold">
                  Login
                </a>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Register;
