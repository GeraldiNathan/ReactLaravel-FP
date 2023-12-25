import React from "react";
import HomeComponent from "../components/HomeComponents";
import Navbar from "../components/NavbarComponents";
import RecipeList from "../components/ReviewComponents";

function Review() {
  return (
    <>
    <div className="bg-backgroundcolor">
      <Navbar />
      <RecipeList />
    </div>
    </>
  );
}

export default Review;
