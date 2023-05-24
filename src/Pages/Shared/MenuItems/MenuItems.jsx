// import img from '../.../../../../assets/home/01.jpg'

const MenuItems = ({item}) => {
    const {name,recipe,price,image}=item
    return (
        <div className="flex space-x-3">
            {/* <img className="w-[100px]" style={{borderRadius:'0 120px 120px 120px'}} src={img} alt="" /> */}
            <img className="w-[100px]" style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}-------</h3>
                <p>{recipe} </p>
            </div>
            <p className="text-yellow-400">${price}</p>
        </div>
    );
};

export default MenuItems;