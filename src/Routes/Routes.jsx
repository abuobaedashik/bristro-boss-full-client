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
      element: <Dashboard></Dashboard>,
      children:[
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
      ]
    },
  ]);