import React from 'react';
import MenuItemsTemplate from './MenuItemsTemplate';

const MenuCategory = ({items}) => {
    return (
        <div className="mt-2 grid grid-col-1 md:grid-cols-2 gap-12">
             {
                items?.map(item =><MenuItemsTemplate key={item._id} item={item}></MenuItemsTemplate>)
             }
           </div>
    );
};

export default MenuCategory;