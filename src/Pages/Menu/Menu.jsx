import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import menuBg from "../../assets/menu/banner3.jpg";
import PizzaBg from "../../assets/menu/pizza-bg.jpg";
import SaladBg from "../../assets/menu/salad-bg.jpg";
import SoupBg from "../../assets/menu/soup-bg.jpg";
import DessertMenuBg from "../../assets/menu/dessert-bg.jpeg";
import MenuCategory from "../Shared/MenuCategory";
import DynamicTitle from "../Shared/DynamicTitle";
import useMenu from "../../Hooks/useMenu";

const Menu = () => {
  const [menu] = useMenu();
  console.log(menu);
  const offered = menu?.filter((items) => items.category === "offered");
  const dessert = menu.filter((items) => items.category === "dessert");
  const pizza = menu.filter((items) => items.category === "pizza");
  const salad = menu.filter((items) => items.category === "salad");
  const soup = menu.filter((items) => items.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bristro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <div className="mb-3">
        <Cover
          img={menuBg}
          title={"OUR MENU"}
          subTitle={"Would you like to try a dish?"}
        ></Cover>
      </div>

      {/* offered menu */}
      <div className="mt-12 w-10/12 mx-auto mb-16">
        <div className="mt-4 mb-6">
          <DynamicTitle
            subheading={"---Don't miss---"}
            heading={"TODAY'S OFFER"}
          ></DynamicTitle>
        </div>
        <div className="mt-6">
          <MenuCategory items={offered}></MenuCategory>
        </div>
      </div>
      {/* dessert menu */}
      <section>
        <div className="mb-2">
          <Cover
            img={DessertMenuBg}
            title={"DESSERTS"}
            subTitle={"Life is Short, Eat Dessert First"}
          ></Cover>
        </div>
        <div className="mt-10 w-10/12 mx-auto mb-16">
          <MenuCategory items={dessert}></MenuCategory>
        </div>
      </section>
      {/* pizza menu */}
      <section>
        <div className="mb-2">
          <Cover
            img={PizzaBg}
            title={"PIZZA"}
            subTitle={"A Slice of Happiness"}
          ></Cover>
        </div>
        <div className="mt-10 w-10/12 mx-auto mb-16">
          <MenuCategory items={pizza}></MenuCategory>
        </div>
      </section>
      {/* salad menu */}
      <section>
        <div className="mb-2">
          <Cover
            img={SaladBg}
            title={"SALAD"}
            subTitle={"Fresh, Crisp, and Delicious"}
          ></Cover>
        </div>
        <div className="mt-10 w-10/12 mx-auto mb-16">
          <MenuCategory items={salad}></MenuCategory>
        </div>
      </section>
      {/* soup menu */}
      <section>
        <div className="mb-2">
          <Cover
            img={SoupBg}
            title={"SOUP"}
            subTitle={"Warm Comfort in a Bowl"}
          ></Cover>
        </div>
        <div className="mt-10 w-10/12 mx-auto mb-16">
          <MenuCategory items={soup}></MenuCategory>
        </div>
      </section>

    </div>
  );
};

export default Menu;
