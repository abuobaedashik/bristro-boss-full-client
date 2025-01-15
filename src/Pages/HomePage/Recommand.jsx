import React, { useEffect, useState } from 'react';
import DynamicTitle from '../Shared/DynamicTitle';
import CardMenu from '../Shared/CardMenu';

const Recommand = () => {
    const [suggest,setsuggest]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const OfferedItem = data.filter(items => items.category === 'salad')
            setsuggest(OfferedItem.slice(1,5))
        })
    })
    console.log(suggest)
    return (
        <div>
             <div className="mt-4 mb-6">
           <DynamicTitle
             subheading={"---Should Try---"}
             heading={"CHEF RECOMMENDS"}
            ></DynamicTitle>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
               {
                suggest?.map(item => <CardMenu key={item._id} item={item}></CardMenu>)
               }
           </div>
        </div>
    );
};

export default Recommand;