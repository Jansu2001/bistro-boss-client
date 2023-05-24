import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menubg from "../../../assets/menu/banner3.jpg";
import dessertbg from "../../../assets/menu/dessert-bg.jpeg";
import pizzabg from "../../../assets/menu/pizza-bg.jpg";
import saladbg from "../../../assets/menu/salad-bg.jpg";
import soupbg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import USEMenu from "../../../Hooks/USEMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = USEMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | MENU</title>
      </Helmet>
      <Cover
        bgImg={menubg}
        title="our menu"
        subtitle=" Would you like to try a dish?"
      ></Cover>
      {/* Main Cover */}
      <SectionTitle
        subTitle={"Don't miss todays offered"}
        title={"Todays Offered"}
      ></SectionTitle>
      {/* Offered Menu Items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert Menu Items */}
      <MenuCategory
        items={dessert}
        title={"dessert"}
        subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. A repellat unde molestias provident voluptate perferendis! Dolore labore, et dolor blanditiis esse voluptate. Accusantium, facere labore maxime doloremque repudiandae"
        menubg={dessertbg}
      ></MenuCategory>
      {/* Pizza Menu Items */}
      <MenuCategory
        items={pizza}
        title={"pizza"}
        subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. A repellat unde molestias provident voluptate perferendis! Dolore labore, et dolor blanditiis esse voluptate. Accusantium, facere labore maxime doloremque repudiandae"
        menubg={pizzabg}
      ></MenuCategory>
      {/* Salads Menu Items */}
      <MenuCategory
        items={salad}
        title={"salad"}
        subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. A repellat unde molestias provident voluptate perferendis! Dolore labore, et dolor blanditiis esse voluptate. Accusantium, facere labore maxime doloremque repudiandae"
        menubg={saladbg}
      ></MenuCategory>
      {/* Soup Menu Items */}
      <MenuCategory
        items={soup}
        title={"soup"}
        subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. A repellat unde molestias provident voluptate perferendis! Dolore labore, et dolor blanditiis esse voluptate. Accusantium, facere labore maxime doloremque repudiandae"
        menubg={soupbg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
