
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoutes = ({children}) => {
  const { user, loading } = useAuth()
  const[isAdmin, isAdminLoading]=useAdmin()

  const location=useLocation()
  if (loading || isAdminLoading) {
    return <progress className="progress w-56" value="100" max="100"></progress>
  }
   else if (user&&isAdmin) {
    return children
  }
   else {
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
  }
};

export default AdminRoutes;

