import React, { useEffect, useState } from 'react';
import DynamicTitle from '../Shared/DynamicTitle';
import { data } from 'react-router-dom';
import MenuItemsTemplate from '../Shared/MenuItemsTemplate';

const Popular = () => {
    const [menu,setmenu] = useState()
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItem = data.filter(items => items.category === 'popular')
            setmenu(popularItem)
        })
    },[])
    console.log(menu)
    return (
        <div>
           <div className="mt-4 mb-6">
           <DynamicTitle
             subheading={"---Popular Items---"}
             heading={"FROM OUR MENU"}
            ></DynamicTitle>
           </div>

           <div className="mt-2 grid grid-col-1 md:grid-cols-2 gap-12">
             {
                menu?.map(item =><MenuItemsTemplate key={item._id} item={item}></MenuItemsTemplate>)
             }
           </div>

        </div>
    );
};

export default Popular;