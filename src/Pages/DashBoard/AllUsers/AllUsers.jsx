import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure]=useAxiosSecure()
  const { data: users = [],refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });




  const handleMakeAdmin=(user)=>{
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method:'PATCH'
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount){
            refetch()
            Swal.fire(
                'Admin Updated!',
                `${user.name} is an admin now`,
                'success'
              )
        }
    })
  }


  const handleDeleteOrder=()=>{

  }



  return (
    <div>
        <Helmet>
        <title>Bistro Boss | ALL USERS</title>
      </Helmet>
        <h3>Total Usrs: {users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table  w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user,index)=> <tr key={user._id}>

              <th>{index+1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role==='admin' ?'admin': 
              <button
              onClick={() => handleMakeAdmin(user)}
              className="btn btn-ghost btn-sm  bg-orange-700 text-white"
            >
              <FaUserShield></FaUserShield>{" "}
            </button>
              }</td>
              <td><button
                    onClick={() => handleDeleteOrder(user)}
                    className="btn btn-ghost btn-sm  bg-red-700 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>{" "}
                  </button></td>

            </tr>
                    )
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
