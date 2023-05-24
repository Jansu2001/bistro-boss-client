import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredimg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <section className="featured-item text-white pt-7 my-20 bg-fixed ">
      <SectionTitle
        subTitle="Check it Out"
        title="FROM OUR MENU"
      ></SectionTitle>

      <div className="md:flex justify-center items-center py-8 px-16 py-20 px-36 pt-12">
        <div>
          <img src={featuredimg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aun 20, 2029</p>
          <p className="uppercase">Where can i get some</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            tempore quae, quidem et vero voluptates cumque accusamus dicta
            asperiores, error alias reiciendis eaque, reprehenderit corporis
            quisquam blanditiis libero! Nemo recusandae totam assumenda
            doloribus dicta laudantium neque nulla libero harum doloremque!
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-5">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
