import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/OrderFood/Order/Order";
import Login from "../Pages/LoginPage/Login/Login";
import Register from "../Pages/LoginPage/Register/Register";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import MyCarts from "../Pages/DashBoard/MyCart/MyCarts";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/secret',
          element:<PrivateRoutes><Secret></Secret></PrivateRoutes>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
        {
          path:'carts',
          element:<MyCarts></MyCarts>
        },
        {
          path:'allusers',
          element:<AllUsers></AllUsers>
        },
        {
          path:'userhome',
          element:<UserHome></UserHome>
        }
      ]
    }
  ]);