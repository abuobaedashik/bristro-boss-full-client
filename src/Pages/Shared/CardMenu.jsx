import React from 'react';

const CardMenu = ({item}) => {
    const {name,recipe,image}=item
    return (
        <div className="card card-compact rounded-none  shadow-sm">
        <figure>
          <img
            src={image}
            alt={name} 
            className='h-[250px] w-full ' />
        </figure>
        <div className="card-body  text-center items-center justify-center bg-[#f3f3f3]">
          <h2 className="card-title mt-10">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end mb-10">
            <button className="px-4 py-2 hover:bg-[#1F2937] text-xl font-bold uppercase text-[#BB8506] bg-[#E8E8E8] rounded-lg border-b-2 border-[#BB8506]">Add To Card</button>
          </div>
        </div>
      </div>
    );
};

export default CardMenu;