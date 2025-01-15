import React from "react";
import DynamicTitle from "../Shared/DynamicTitle";
import FeaturedImg from "../../assets/home/featured.jpg";
import bgimg2 from "../../assets/home/featured.jpg";

const Featured = () => {
  const today = new Date();

  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();
  return (
    <div 
    className=" w-full bg-cover bg-center backdrop-blur-3xl pt-12  py-6 px-6 text-white "
     style={{ backgroundImage: `url(${bgimg2})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="mt-4 mb-10">
        <DynamicTitle
          subheading={"---Check it out---"}
          heading={"Featured Section"}
        ></DynamicTitle>
      </div>
      <div className="mt-4 flex items-center z-30 justify-between mx-auto w-11/12 relative py-8 px-2 md:flex-row">
        <img src={FeaturedImg} className="md:w-[45%] h-[350px] w-full " alt="FeatureImage" />
        <div className="md:w-[45%] w-full ">
          <div className="text-xl  font-semibold">
            {" "}
            {month} {day}, {year}
          </div>
          <div className="mt-4 text-xl font-semibold uppercase">
            Where can i get some
          </div>
          <div className="mt-4 text-base ">
            Indulge in the finest culinary experiences at Bistro Boss, where
            passion meets perfection. Whether you’re here for a hearty
            breakfast, a delightful lunch, or an unforgettable dinner, we’re
            committed to serving dishes that tantalize your taste buds.At Bistro
            Boss, we believe food is an art.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

