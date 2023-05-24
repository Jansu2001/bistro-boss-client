
import cardimg from '../../assets/menu/pizza-bg.jpg'

const FoodCard = ({ item }) => {
  const { name, recipe, price, image } = item;
  return (
    <div className="card w-96 glass bg-[#F3F3F3]">
      <figure>
        <img src={cardimg} alt="" />
      </figure>
        <p className="absolute right-0 mr-4 mt-4 px-2 rounded text-white bg-slate-900">
          ${price}
        </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4 bg-gray-200 text-orange-500 border-orange-400">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
