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
        },
      ]
    },
  ]);