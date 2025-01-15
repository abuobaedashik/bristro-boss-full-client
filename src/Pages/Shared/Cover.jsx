import React from "react";
import { Parallax, Background } from 'react-parallax';

const Cover = ({img,title,subTitle}) => {
  return (
    <Parallax
    bgImage= {img}
    blur={{ min: -50, max: 50 }}
    bgImageAlt="cover "
    strength={-250}
>
<div
      className="hero  md:h-[600px] "
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className=" bg-[#15151599] md:py-[80px] px-16 py-8 md:px-[200px]">
          <h1 className="mb-5 text-2xl md:text-5xl font-bold">{title}</h1>
          <p className="mb-5">
            {subTitle}
          </p>
        </div>
      </div>
    </div>
</Parallax>
  );
};

export default Cover;
