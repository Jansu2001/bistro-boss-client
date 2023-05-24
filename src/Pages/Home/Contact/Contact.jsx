import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import USEMenu from "../../../Hooks/USEMenu";
import OrderTab from "../../OrderFood/OrderTab/OrderTab";

const Contact = () => {

    const [menu] = USEMenu();
    const salad = menu.filter((item) => item.category === "salad");
  return (
    <div>
      <div className="w-1/2 mx-auto">
        <h1 className="bg bg-black px-20 py-12 text-center text-white font-'Raleway' text-2xl">
          Call Us: +88 0192345678910
        </h1>
      </div>
      <SectionTitle subTitle={'Should Try'} title={'CHEF RECOMMENDS'}></SectionTitle>

      <div>
        <OrderTab items={salad.slice(0,3)}></OrderTab>
      </div>
    </div>
  );
};

export default Contact;
