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
    <div className="grid grid-cols-1 sm:grid-cols- md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} title={recipe.title} description={recipe.description} file_path={recipe.file_path} />
      ))}
    </div>
  );
};

const RecipeCard = ({ title, description, file_path }) => {
  return (
    <div className="relative max-w-sm w-60 h-96 overflow-hidden rounded-3xl drop-shadow-lg border-4 border-black transition-transform transform hover:translate-y-[-10px]">
      <a href="#">
        <img className="h-48 object-fill w-64 " src={`http://localhost:8000/storage/${file_path}`} alt="" />
      </a>
      <div className="absolute h-auto inset-0 p-3 mt-44 rounded-ss-3xl rounded-b-3xl flex flex-col justify-start border-t-4 border-black bg-cream">
        <a href="#" className="relative z-10">
          <h5 className="h-10 mb-2 text-2xl font-mono font-semibold tracking-tight text-gray-900 dark:text-amber-black ">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-wrap text-gray-700 dark:text-gray-400">{description}</p>
        <a
          href="#"
          className="inline-flex w-28 items-center px-2 ms-24 py-2 mt-14 text-sm font-medium text-left text-white bg-blue-700 rounded-ee-2xl rounded-ss-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-amber-500 dark:hover:bg-amber-300 dark:focus:ring-blue-800 drop-shadow-lg "
        >
          Read more
          <svg className="rtl:rotate-180 w-3 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default RecipeList;
