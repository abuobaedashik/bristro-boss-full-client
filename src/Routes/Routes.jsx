import { createBrowserRouter, data } from "react-router-dom";
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
import AdminRoutes from "./AdminRoutes";
import Update from "../Pages/Dashboard/Dashboard Pages/Admin Page/Update";
import Payment from "../Pages/Dashboard/Dashboard Pages/User Page/Payment";
import PaymentHistory from "../Pages/Dashboard/Dashboard Pages/User Page/PAymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/private",
        element: (
          <PrivateRoute>
            <></>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // user routes
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "home",
        element: <p>home</p>,
      },
      {
        path: "reservation",
        element: <p>reservation</p>,
      },
      {
        path: "cart/payment",
        element: <Payment></Payment>
      },
      {
        path: "addreview",
        element: <p>add review</p>,
      },
      {
        path: "booking",
        element: <p>my booking</p>,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },

      // admin routes
      {
        path: "allusers",
        element: (
          <AdminRoutes>
            <Allusers></Allusers>
          </AdminRoutes>
        ),
      },
      {
        path: "manageBookings",
        element: (
          <AdminRoutes>
            <ManageBookings></ManageBookings>
          </AdminRoutes>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoutes>
            <ManageItems></ManageItems>
          </AdminRoutes>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoutes>
            <Additems></Additems>
          </AdminRoutes>
        ),
      },
      {
        path: "updateitem/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://bristro-boss-server-eosin.vercel.app/menu/${params.id}`),
      },
      {
        path: "adminhome",
        element: (
          <AdminRoutes>
            <AdminHome></AdminHome>
          </AdminRoutes>
        ),
      },
    ],
  },
]);
