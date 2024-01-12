import React from "react";
import HomeComponent from "../components/HomeComponents";
import Navbar from "../components/NavbarComponents";
import FooterComponent from "../components/FooterComponent";

function Home() {
  return (
    <>
      <Navbar />

      <HomeComponent />
      <FooterComponent />
    </>
  );
}

export default Home;
