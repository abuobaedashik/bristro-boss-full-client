import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import gif from '../assets/others/loader3.gif'

const PrivateRoute = ({children}) => {
    const {user, loader}=useContext(AuthContext)
    const location =useLocation()
    // console.log(location);
    if (loader) {
        return <p className="mt-10">
            <img src={gif} alt="gif loading" />
        </p>
    }
    if (user && user?.email ) {
     return children
   } return <Navigate state={location?.pathname} to='/login'></Navigate>
};

export default PrivateRoute;