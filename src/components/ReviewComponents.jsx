import React, { useState, useEffect } from "react";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

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

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="mx-auto px-36 mt-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 lg:mx-auto lg:gap-x-36 lg:me-12 lg:ms-0">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            {...recipe}
            openModal={() => openModal(recipe)}
          />
        ))}
        {selectedRecipe && (
          <RecipeModal
            title={selectedRecipe.title}
            description={selectedRecipe.description}
            file_path={selectedRecipe.file_path}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};

const limit_text_length = (text, max_words = 9, ellipsis = "...") => {
  const words = text.split(" ");
  if (words.length > max_words) {
    return words.slice(0, max_words).join(" ") + " " + ellipsis;
  } else {
    return text;
  }
};

const limit_title_length = (text, max_words = 2, ellipsis = "...") => {
  const words = text.split(" ");
  if (words.length > max_words) {
    return words.slice(0, max_words).join(" ") + " " + ellipsis;
  } else {
    return text;
  }
};

const RecipeCard = ({ id, title, description, file_path, openModal }) => {
  return (
    <div
      className="bg-cream relative max-w-sm w-60 h-96 overflow-hidden rounded-3xl 
    drop-shadow-xl transition-transform transform hover:translate-y-[-10px]"
    >
      <a href="#">
        <img
          className="h-48 object-cover w-64 grayscale hover:scale-110 duration-300 hover:grayscale-0"
          src={`http://localhost:8000/storage/${file_path}`}
          alt=""
        />
      </a>
      <div className="absolute inset-0 p-3 mt-44 rounded-ss-3xl rounded-b-3xl flex flex-col justify-start shadow-inner border-1 border-gray-400 bg-cream">
        <a href="#" className="relative z-10">
          <h5 className="h-10 mb-2 ps-3 text-xl font-mono font-semibold tracking-tight text-gray-900 dark:text-amber-black ">
            {limit_title_length(title)}
          </h5>
        </a>
        <div className="text-balance mb-3 break-words">
          <p className="mb-4 font-normal ps-3  text-gray-700 dark:text-gray-400 whitespace-normal">
            {limit_text_length(description)}
          </p>
        </div>
        <button
          onClick={openModal}
          className="absolute w-28 items-center px-2 ms-24 py-2  bottom-4 text-sm font-medium text-left text-white bg-blue-700 rounded-ee-2xl rounded-ss-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-amber-500 dark:hover:bg-amber-300 dark:focus:ring-blue-800 drop-shadow-lg "
        >
          Read more
          <svg
            className="inline rtl:rotate-180 w-3 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
const RecipeModal = ({ title, description, file_path, closeModal }) => {
  return (
    <dialog id="my_modal_3" className="fixed inset-0 z-50 overflow-y-auto" open>
      <div className="flex items-center justify-center min-h-screen">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"
          onClick={closeModal}
        ></div>

        {/* Modal */}
        <div className="modal-box bg-cream rounded-3xl  p-6 relative z-10 w-full max-w-md">
          <img
            className="w-full h-72 rounded-3xl mb-4 object-cover"
            src={`http://localhost:8000/storage/${file_path}`}
            alt=""
          />
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="overflow-y-auto max-h-60 text-wrap">
            <p className="mb-4">
              {description.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={closeModal}
            className="flex bottom-4 ms-72 mt-10 w-28 items-center px-6 py-2 text-md font-medium text- text-white bg-blue-700 rounded-ee-2xl rounded-ss-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-amber-500 dark:hover:bg-amber-300 dark:focus:ring-blue-800 drop-shadow-lg"
          >
            Close
            <svg
              className="inline rtl:rotate-180 w-3 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default RecipeList;
