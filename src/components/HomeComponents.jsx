import React from "react";

function HomeComponent() {
  return (
    <>
      <div class="bg-backgroundcolor min-h-screen flex items-center justify-center">
        <div className="w-2/3">
          <img
            src={require("../Assets/img/homepage.png")}
            alt="Gambar 1"
            className="2xl"
          />
        </div>
      </div>

      <section className="bg-hijau min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-4xl font-title mt-6 text-white text-center">
            MEET OUR BEST RECIPE
          </div>
          <div className="flex flex-wrap">
            <div className="lg:pt-6 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <img
                    src={require("../Assets/img/fried_rice.png")}
                    alt="Prawn Fried Rice"
                    className="mx-auto my-auto drop-shadow-2xl"
                    style={{ maxWidth: "50%", height: "auto"}}
                  />
                  <h6 className="text-xl font-semibold">Prawn Fried Rice</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                  Make this easy Asian-inspired dish in just 30 minutes. It's healthy and low in calories but big on flavour, making it perfect for a speedy family supper
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pt-6 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                <img
                    src={require("../Assets/img/greek_salmon.png")}
                    alt="Prawn Fried Rice"
                    className="mx-auto my-auto drop-shadow-2xl"
                    style={{ maxWidth: "50%", height: "auto"}}
                  />
                  <h6 className="text-xl font-semibold">Greek Salmon</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                  We created a Greek-salad inspired topping of marinated feta, tomatoes, olives, cucumbers, red onion, and dill. Put it all together, and the result is an under-an-hour dinner that’s special-occasion worthy.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pt-6 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                <img
                    src={require("../Assets/img/salad.png")}
                    alt="Prawn Fried Rice"
                    className="mx-auto my-auto drop-shadow-2xl"
                    style={{ maxWidth: "50%", height: "auto"}}
                  />
                  <h6 className="text-xl font-semibold">Fresh Vegetable Salad</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                  Enjoy this filling and colorful salad for lunch or dinner. The dressing gets made in the same bowl that the salad is tossed in, so the greens absorb every bit of flavor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <i className="fas fa-user-friends text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Working with us is a pleasure
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </p>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                className="font-bold text-gray-800 mt-8"
              >
                Check Tailwind Starter Kit!
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{
                      height: "95px",
                      top: "-94px",
                    }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Top Notch Services
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeComponent;
