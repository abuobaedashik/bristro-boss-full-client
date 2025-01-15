import React, { useEffect, useState } from 'react';
import DynamicTitle from '../Shared/DynamicTitle';
import CardMenu from '../Shared/CardMenu';
import useMenu from '../../Hooks/useMenu';

const Recommand = () => {
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const OfferedItem = data.filter(items => items.category === 'salad')
    //         setsuggest(OfferedItem.slice(1,5))
    //     })
    // })

    const [menu]=useMenu()
    console.log(menu)
    const Item =menu.filter(items => items.category === 'salad')
    const OfferedItem =Item.slice(1,4)
    return (
        <div>
             <div className="mt-4 mb-6">
           <DynamicTitle
             subheading={"---Should Try---"}
             heading={"CHEF RECOMMENDS"}
            ></DynamicTitle>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
               {
                OfferedItem?.map(item => <CardMenu key={item._id} item={item}></CardMenu>)
               }
           </div>
        </div>
    );
};

export default Recommand;