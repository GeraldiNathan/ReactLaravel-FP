import React from "react";
import HomeComponent from "../components/HomeComponents";
import Navbar from "../components/NavbarComponents";
import RecipeList from "../components/ReviewComponents";

function Review() {
  return (
    <>
      <div className="bg-backgroundcolor">
        <Navbar />
        <div className="mx-72 mt-14 ps-4 pt-3 pb-3  rounded-lg">
          <RecipeList />
        </div>
      </div>
    </>
  );
}

export default Review;
