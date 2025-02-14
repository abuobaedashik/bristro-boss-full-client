import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Authentication Page/Login";
import Register from "../Pages/Authentication Page/Register";
import Secrate from "../Pages/Shared/Secrate";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Dashboard Pages/Cart";
import Allusers from "../Pages/Dashboard/Dashboard Pages/Admin Page/Allusers";
import ManageBookings from "../Pages/Dashboard/Dashboard Pages/Admin Page/ManageBookings";
import ManageItems from "../Pages/Dashboard/Dashboard Pages/Admin Page/ManageItems";
import Additems from "../Pages/Dashboard/Dashboard Pages/Admin Page/Additems";
import AdminHome from "../Pages/Dashboard/Dashboard Pages/Admin Page/AdminHome";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
         path:"/",
         element:<Home></Home>
        },
        {
         path:"/contact",
         element:<Contact></Contact>
        },
        {
         path:"/menu",
         element:<Menu></Menu>
        },
        {
         path:"/shop",
         element:<Shop></Shop>
        },
        {
         path:"/login",
         element:<Login></Login>
        },
        {
         path:"/register",
         element:<Register></Register>
        },
        {
         path:"/private",
         element:<PrivateRoute><></></PrivateRoute>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        // user routes
        {
         path:"cart",
         element:<Cart></Cart>
        },
        {
         path:"home",
         element:<p>home</p>
        },
        {
         path:"reservation",
         element:<p>reservation</p>
        },
        {
         path:"payment",
         element:<p>Payment</p>
        },
        {
         path:"addreview",
         element:<p>add review</p>
        },
        {
         path:"booking",
         element:<p>my booking</p>
        },

        // admin routes
        {
         path:"allusers",
         element:<Allusers></Allusers>
        },
        {
         path:"manageBookings",
         element:<ManageBookings></ManageBookings>
        },
        {
         path:"manageItems",
         element:<ManageItems></ManageItems>
        },
        {
         path:"addItems",
         element:<Additems></Additems>
        },
        {
         path:"adminhome",
         element:<AdminHome></AdminHome>
        },
      ]
    },
  ]);