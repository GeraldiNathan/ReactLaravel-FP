import React from "react";
import HomeComponent from "../components/HomeComponents";
import Navbar from "../components/NavbarComponents";
import FooterComponent from "../components/FooterComponent";
import AboutUsComponent from "../components/AboutUsComponent";

function Home() {
  return (
    <>
      <Navbar />
      <HomeComponent />
      <AboutUsComponent />
      <FooterComponent />
    </>
  );
}

export default Home;
