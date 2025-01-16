import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Authentication Page/Login";

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
      ]
    },
  ]);