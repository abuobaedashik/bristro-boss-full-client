import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
  const location = useLocation()
  const noNavFoot =['/login', '/register'].includes(location.pathname);
    return (
        <div>
            {noNavFoot || <Navbar></Navbar>}
              <div className="">
                <Outlet></Outlet>
              </div>
            {noNavFoot || <Footer></Footer>}
        </div>
    );
};

export default Main;