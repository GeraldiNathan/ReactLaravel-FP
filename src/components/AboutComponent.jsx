import React from "react";
import Navbar from "./NavbarComponents";
import FooterComponent from "./FooterComponent";

function AboutComponent() {
  return (
    <>
      <Navbar />
      <section className="bg-cream min-h-screen items-center">
        <div className="container mx-auto px-4 p-8">
          <div className="text-5xl font-bold mt-6 text-hijau text-center mb-4">
            ABOUT US
          </div>
          <div className="flex flex-wrap">
            <div className="flex flex-wrap items-center ">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-4xl mb-2 font-bold leading-normal text-hijau">
                  Our Story
                </h3>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-hijau text-justify">
                  Welcome to our culinary haven, where the art of nourishment
                  meets the joy of creating wholesome meals. At Ala-Rumah, we
                  believe in the power of good food to transform lives. Our
                  passion for crafting nutritious and delicious recipes stems
                  from a commitment to well-being. Explore a tapestry of flavors
                  meticulously woven into each recipe, embracing the essence of
                  health and taste.
                </p>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-hijau text-justify">
                  Here, we celebrate the journey toward a balanced and vibrant
                  lifestyle, one wholesome dish at a time. Meet the faces behind
                  the flavors, a team dedicated to curating a collection of
                  recipes that not only tantalize the taste buds but also
                  nourish the body and soul. Join us on this gastronomic
                  adventure, where every recipe tells a story of care,
                  creativity, and a love for living well. At Ala-Rumah, we're
                  not just sharing recipes; we're weaving a tapestry of
                  well-being. Come, embark on a culinary journey that goes
                  beyond the plate, shaping a healthier, happier you.
                </p>
              </div>

              <div className="w-full md:w-4/12 mr-auto ml-auto">
                <img
                  src={require("../Assets/img/about_us1.jpg")}
                  alt="Gambar 1"
                  className="2xl drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </>
  );
}

export default AboutComponent;
