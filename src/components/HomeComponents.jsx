import React from "react";

function HomeComponent() {
  return (
    <>
      <div className="bg-backgroundcolor min-h-screen flex items-center justify-center">
        <div className="flex items-center">
          <img
            src={require("../Assets/img/homepage.png")}
            alt="Gambar 1"
            className="2xl"
          />
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom"
      >
        <path
          fill="#fff9ef"
          fill-opacity="1"
          d="M0,96L80,117.3C160,139,320,181,480,192C640,203,800,181,960,197.3C1120,213,1280,267,1360,293.3L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#408f65"
          fill-opacity="1"
          d="M0,96L80,117.3C160,139,320,181,480,192C640,203,800,181,960,197.3C1120,213,1280,267,1360,293.3L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}

export default HomeComponent;
