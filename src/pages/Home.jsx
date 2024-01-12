import React from "react";
import HomeComponent from "../components/HomeComponents";
import Navbar from "../components/NavbarComponents";
import FooterComponent from "../components/FooterComponent";
import AboutUsComponent from "../components/AboutUsComponent";
import BestRecipeComponent from "../components/BestRecipeComponent";

function Home() {
  return (
    <>
      <Navbar />
      <HomeComponent />
      <BestRecipeComponent />
      <AboutUsComponent />
      <FooterComponent />
    </>
  );
}

export default Home;
