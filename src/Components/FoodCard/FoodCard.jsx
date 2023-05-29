
import { useContext } from 'react';
import cardimg from '../../assets/menu/pizza-bg.jpg'
import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCarts from '../../Hooks/useCarts';

const FoodCard = ({ item }) => {
  const { name, recipe, price, image,_id } = item;
  const {user}=useContext(AuthContext)

  const navigate=useNavigate()
  const location=useLocation()
  const [,refetch]=useCarts()

  const handleAddToCart=(items)=>{
    console.log(items);
    if(user&&user.email){
      const cartItem={orderItemId:_id,name,image,price,email:user.email}
      
      fetch( 'http://localhost:5000/carts',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(cartItem)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Order Added To Cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
        
      })
    }
    else{
      Swal.fire({
        title: 'Please Login To Order The Food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Go To Login'
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login', {state: {from:location}})
        }
      })
    }


  }

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
          <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4 bg-gray-200 text-orange-500 border-orange-400">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
