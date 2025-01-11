import React from "react";
import Carousel from "./Carousel";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      <div className="mb-4">
        <Carousel></Carousel>
      </div>
      <div className="mb-8">
        <Category></Category>
      </div>
    </div>
  );
};

export default Home;
