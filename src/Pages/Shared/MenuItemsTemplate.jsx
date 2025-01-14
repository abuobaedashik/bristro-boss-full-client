import React from 'react';

const MenuItemsTemplate = ({item}) => {
   const {name,recipe,image,price}=item
    return (
        <div className='flex items-start justify-between gap-4 '>
            <img  src={image} alt={name}  className='w-[100px] h-[100px] rounded-tr-[100px]  rounded-tl-[4px] rounded-br-[100px]  rounded-bl-[100px] '/>
            <div className="name">
               <p className="item-name mb-2 text-[#151515] text-xl font-semibold uppercase">{name} ----------------</p>
               <p className="item-recipe text-base text-[#737373]">{recipe}</p>
            </div>
            <div className="price font-bold text-base text-[#BB8506]">
                ${price}
            </div>
        </div>
    );
};

export default MenuItemsTemplate;