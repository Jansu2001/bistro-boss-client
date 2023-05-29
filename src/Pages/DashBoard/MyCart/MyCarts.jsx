import { Helmet } from "react-helmet-async";
import useCarts from "../../../Hooks/useCarts";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCarts = () => {
  const [orderCart,refetch] = useCarts();

  const total = orderCart.reduce((sum, item) => item.price + sum, 0);

  const handleDeleteOrder = (cart) => {
    console.log(cart);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${cart._id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.deletedCount>0){
              refetch()
                Swal.fire("Deleted!", "Your Order has been deleted.", "success");
            }
            console.log(data);
          });
      }
    });
  };

  return (
    <div className="w-full bg-[#FFFFFF]">
      <Helmet>
        <title>Bistro Boss | MY CART</title>
      </Helmet>
      <div className="flex font-semibold justify-between items-center p-5 h-[35px] ">
        <div>Total Order: {orderCart.length}</div>
        <div>Total Price: ${total}</div>
        <div>
          <button className="btn btn-outline  bg-[#D1A054]text-white btn-secondary btn-sm">
            Payment
          </button>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Food Image</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orderCart.map((cart, index) => (
              <tr key={cart._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={cart?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{cart.name}</td>
                <td>{cart.price}</td>
                <th>
                  <button
                    onClick={() => handleDeleteOrder(cart)}
                    className="btn btn-ghost btn-sm text-2xl "
                  >
                    <FaTrashAlt></FaTrashAlt>{" "}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCarts;
