import Cover from "../../Shared/Cover/Cover";
import orderCover from "../../../assets/shop/banner2.jpg";
import './Order.css'
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import USEMenu from "../../../Hooks/USEMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {

    const categorires=['salad','pizza','soup','dessert','drinks']
    const {category}=useParams()
    const initialIndex=categorires.indexOf(category)


  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = USEMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
        <Helmet>
        <title>Bistro Boss | ORDER FOOD</title>
      </Helmet>

      <Cover bgImg={orderCover} title={"order food"}></Cover>
      <div className="order-tab text-center">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
            <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel> 
            <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel> 
            <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel> 
            <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel> 
            <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
      </div>
    </div>
  );
};

export default Order;
