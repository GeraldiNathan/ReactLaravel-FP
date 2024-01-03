import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/recipe");
        const data = await response.json();

        const updatedRecipes = data.map((recipe) => ({
          ...recipe,
          file_path: recipe.file_path.replace("public/", ""),
        }));

        setRecipes(updatedRecipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="ms-10 me-10 mt-24">
      <p className="ps-6 pb-4 text-black text-xl font-bold">Current Food</p>
      <Slider {...settings}>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            description={recipe.description}
            file_path={recipe.file_path}
          />
        ))}
      </Slider>
    </div>
  );
};

const RecipeCard = ({ title, description, file_path }) => {
  return (
    <>
      <div className="ms-3 me-3 h-30 rounded-xl">
        <div className="max-w-lg rounded-xl overflow-hidden shadow-xl border border-inherit">
          <img
            className="w-full h-40 object-contain"
            src={`http://localhost:8000/storage/${file_path}`}
            alt="Image Description"
          />

          <div className="px-6 py-4 h-44">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className="px-6 pt-4 pb-2 h-15 rounded-b-xl bg-amber-200">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #food
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #indonesia
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeList;
