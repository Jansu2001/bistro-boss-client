import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import USEMenu from "../../../Hooks/USEMenu";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopularMenu = () => {

  const [menu]=USEMenu()
  const popular=menu.filter(item=>item.category==='popular')

  return (
    <section className="mb-12 ">
      <SectionTitle
        title="From Our Menu"
        subTitle="Popular Menu"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 p-3 ">
        {popular.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4 ">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
