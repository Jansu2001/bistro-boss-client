import { Children, useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
  const { user, loading } = useContext(AuthContext);

  const location=useLocation()
  if (loading) {
    return <p>Loading.........</p>
  }
   else if (user) {
    return Children;
  }
   else {
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
  }
};

export default PrivateRoutes;
