import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
  const location = useLocation()
  const noNavFoot =location.pathname.includes('login')
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