import React from "react";
import Carousel from "./Carousel";
import Category from "./Category";
import Bgimage from "./Bgimage";

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
    </div>
  );
};

export default Home;
