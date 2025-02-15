import {  useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import gif from "../assets/others/loader2.gif";


const AdminRoutes = ({children}) => {
    const {user,loader} =useContext(AuthContext)
    const [isAdmin,isAdminLoading] =useAdmin()
    const location =useLocation()
    // console.log(location);
    if (loader || isAdminLoading) {
        return <p className="mt-10">
            <img src={gif} alt="gif loading" />
        </p>
    }
    if (user && isAdmin ) {
     return children
   } return <Navigate state={{from: location}} replace to='/login'></Navigate>

};

export default AdminRoutes;