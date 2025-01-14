import React from "react";
import Carousel from "./Carousel";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      <div className="mb-12">
        <Carousel></Carousel>
      </div>
      <div className="mb-16 w-10/12 mx-auto">
        <Category></Category>
      </div>
    </div>
  );
};

export default Home;
