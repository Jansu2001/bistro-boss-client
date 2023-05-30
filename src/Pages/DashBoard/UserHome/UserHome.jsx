import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div className="w-full">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={user?.photoURL}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {user?.displayName}
            
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
