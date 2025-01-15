import React from "react";
import Carousel from "./Carousel";
import Category from "./Category";
import Bgimage from "./Bgimage";
import Popular from "./Popular";
import Recommand from "./Recommand";
import Featured from "./Featured";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      {/* carousel section */}
      <div className="mb-12">
        <Carousel></Carousel>
      </div>
      {/* category section */}
      <div className="mb-16 w-10/12 mx-auto">
        <Category></Category>
      </div>
      {/* bg image bristro boss */}
      <div className="mb-16 w-10/12 mx-auto">
        <Bgimage></Bgimage>
      </div>
      {/* popular menu */}
      <div className="mb-16 w-10/12 mx-auto">
        <Popular></Popular>
      </div>
      {/* call us section */}
      <div className="mb-16 md:mt-36 w-10/12 mx-auto">
        <div className="bg-black text-white text-center text-2xl md:text-5xl py-8 md:py-24  font-medium">
          Call Us: +88 01765262296
        </div>
      </div>
      {/* recommends menu section */}
      <div className="mb-16 md:mt-36 w-10/12 mx-auto">
        <Recommand></Recommand>
      </div>
      {/*Feature section */}
      <div className="mb-16 md:mt-36 w-full  mx-auto">
        <Featured></Featured>
      </div>
      {/*Feature section */}
      <div className="mb-16 md:mt-36 w-10/12  mx-auto">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
