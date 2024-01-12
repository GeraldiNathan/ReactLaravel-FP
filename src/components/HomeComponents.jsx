import React from "react";

function HomeComponent() {
  return (
    <>
      <div className="bg-backgroundcolor min-h-screen flex items-center justify-center">
        <div className="w-2/3">
          <img
            src={require("../Assets/img/homepage.png")}
            alt="Gambar 1"
            className="2xl"
          />
        </div>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
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
      </svg> */}

      <section className="bg-hijau min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-4xl font-bold mt-6 text-kuning text-center">
            MEET OUR <span className="text-orange">BEST</span> RECIPE
          </div>
          <div className="flex flex-wrap">
            <div className="lg:pt-6 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white">
                  <img
                    src={require("../Assets/img/fried_rice.png")}
                    alt="Prawn Fried Rice"
                    className="mx-auto my-auto drop-shadow-2xl max-w-1/2 h-auto"
                  />
                  <h6 className="text-xl font-semibold">Prawn Fried Rice</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Make this easy Asian-inspired dish in just 30 minutes. It's
                    healthy and low in calories but big on flavor, making it
                    perfect for a speedy family supper
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pt-6 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white">
                  <img
                    src={require("../Assets/img/greek_salmon.png")}
                    alt="Prawn Fried Rice"
                    className="mx-auto my-auto drop-shadow-2xl max-w-1/2 h-auto"
                  />
                  <h6 className="text-xl font-semibold">Greek Salmon</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    We created a Greek-salad inspired topping of marinated feta,
                    tomatoes, olives, cucumbers, red onion, and dill. Put it all
                    together, and the result is an under-an-hour dinner that’s
                    special-occasion worthy.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pt-6 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white">
                  <img
                    src={require("../Assets/img/salad.png")}
                    alt="Prawn Fried Rice"
                    className="mx-auto my-auto drop-shadow-2xl max-w-1/2 h-auto"
                  />
                  <h6 className="text-xl font-semibold">
                    Fresh Vegetable Salad
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Enjoy this filling and colorful salad for lunch or dinner.
                    The dressing gets made in the same bowl that the salad is
                    tossed in, so the greens absorb every bit of flavor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center ">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 className="text-3xl mb-2 font-bold leading-normal text-kuning">
                We Serve <span className="text-orange">Delicious</span> Food
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-kuning">
                Keep it easy with these simple but delicious and healthy
                recipes. From make-ahead lunches and midweek meals to fuss-free
                sides.
              </p>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <img
                src={require("../Assets/img/homepagefeed.png")}
                alt="Gambar 1"
                className="2xl drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-hijau items-center">
        <div className="container mx-auto px-4 pt-12">
          <div className="max-w-2xl bg-cream flex rounded-2xl shadow-xl mr-auto ml-auto mb-3">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-0">
              <img
                src={require("../Assets/img/spices.png")}
                alt="Gambar 1"
                className="mx-auto my-auto drop-shadow-2xl max-w-1/2 h-auto"
              />
            </div>
            <div className="w-full md:w-7/12 px-2 mx-auto mt-8 mb-8">
              <h3 className="text-3xl mb-2 font-bold leading-normal text-hijau">
                About <span className="text-orange">Us</span>
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-hijau">
                Keep it easy with these simple but delicious and healthy
                recipes. From make-ahead lunches and midweek meals to fuss-free
                sides.
              </p>
              <button
                type="submit"
                className="bg-transparent border-orange border-2 text-orange hover:bg-hijau-500 hover:border-hijau hover:text-hijau font-medium rounded-full py-2 px-4 transition-all duration-300"
              >
                View More
              </button>
            </div>
          </div>
        </div>
        <h3 className="text-3xl mt-8 font-bold leading-normal text-hijau text-center">
          <span className="text-orange">Why Choose Our Food?</span>
        </h3>
        <div className="flex flex-wrap ">
          <div className="lg:pt-6 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-cream">
                <img
                  src={require("../Assets/img/healthier.png")}
                  alt="..."
                  class="h-10 w-10 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                />
                <h6 className="text-hijau text-xl font-semibold">Healthier</h6>
                <p className="text-orange mt-2 mb-4">
                  Nourish your body with thoughtfully crafted dishes that
                  prioritize wholesome ingredients, fostering a healthier and
                  happier you. Savor the flavors of nutrition without
                  compromising on taste, making every bite a step towards a
                  vibrant and balanced lifestyle.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pt-6 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-cream">
                <img
                  src={require("../Assets/img/supertaste.png")}
                  alt="..."
                  class="h-10 w-10 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                />
                <h6 className="text-hijau text-xl font-semibold">
                  Super Taste
                </h6>
                <p className="text-orange mt-2 mb-4">
                  Elevate your taste buds to new heights as you indulge in
                  culinary creations that redefine deliciousness. Each dish is a
                  culinary masterpiece, carefully curated to deliver an
                  extraordinary dining experience. Get ready to savor the
                  extraordinary – where every bite is a celebration of
                  superlative taste and culinary artistry.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pt-6 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-cream">
                <img
                  src={require("../Assets/img/bestrecipes.png")}
                  alt="..."
                  class="h-10 w-10 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                />
                <h6 className="text-hijau text-xl font-semibold">
                  Best Recipes
                </h6>
                <p className="text-orange mt-2 mb-4">
                  From timeless classics to innovative creations, each recipe
                  stands as a testament to the pursuit of culinary perfection.
                  Explore a world of gastronomic delight where the 'best' is not
                  just a measure but a commitment to excellence in every
                  flavorful bite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeComponent;
