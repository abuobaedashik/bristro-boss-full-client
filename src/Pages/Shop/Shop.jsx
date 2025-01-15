import React from "react";
import ShopBg from "../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import CardMenu from "../Shared/CardMenu";
import CategoryTabs from "../Shared/CategoryTabs";
const Shop = () => {
  const [menu] = useMenu();
  const salad = menu.filter((items) => items.category === "salad");
  const pizza = menu.filter((items) => items.category === "pizza");
  const soup = menu.filter((items) => items.category === "soup");
  const dessert = menu.filter((items) => items.category === "dessert");
  const drinks = menu?.filter((items) => items.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bristro Boss | Shop</title>
      </Helmet>
      {/* main cover */}
      <div className="mb-3">
        <Cover
          img={ShopBg}
          title={"OUR Shop"}
          subTitle={"Would you like to try a dish?"}
        ></Cover>
      </div>
      {/* category items */}
      <div className="mt-20 mb-24 mx-auto w-10/12 ">
        <Tabs>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>

          <TabPanel>
            {/* <h2 className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {
              salad?.map((item) => (
                <CardMenu key={item._id} item={item}></CardMenu>
              ))}
            </h2> */}
            <CategoryTabs category={salad}></CategoryTabs>
          </TabPanel>
          <TabPanel>
            <CategoryTabs category={pizza}></CategoryTabs>
          </TabPanel>
          <TabPanel>
            <CategoryTabs category={soup}></CategoryTabs>
          </TabPanel>
          <TabPanel>
            <CategoryTabs category={dessert}></CategoryTabs>
          </TabPanel>
          <TabPanel>
            <CategoryTabs category={drinks}></CategoryTabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
