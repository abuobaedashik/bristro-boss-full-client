import React from "react";
import CardMenu from "./CardMenu";

const CategoryTabs = ({category}) => {
  return (
    <div>
      <h2 className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {category.map((item) => (
          <CardMenu key={item._id} item={item}></CardMenu>
        ))}
      </h2>
    </div>
  );
};

export default CategoryTabs;
