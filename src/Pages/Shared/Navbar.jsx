import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { GiShoppingCart } from "react-icons/gi";
import profile from '../../assets/others/profile.png'
import useCart from "../../Hooks/useCart";


const Navbar = () => {
  const { user, SignOut } = useContext(AuthContext);
  const [cart] =useCart();
  const handleSignOut =()=>{
    SignOut()
     .then(()=>{
      // console.log('Logout successful');
      Swal.fire({
        title: "Logout Successful",
        icon: "success"
      });
     })
     .catch(error=>{
      //  console.log(error.message);
      toast.error(error.message, {
        position: "top-center", 
        autoClose: 3000, 
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored", 
      });
     })
  }







  const link = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 text-base text-[#EEFF25] font-medium flex gap-1 items-center"
            : " flex gap-1 items-center text-sm font-medium px-3"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 text-base text-[#EEFF25] font-medium flex gap-1 items-center"
            : " flex gap-1 items-center text-sm font-medium px-3"
        }
        to="/contact"
      >
        Contact Us
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 text-base text-[#EEFF25] font-medium flex gap-1 items-center"
            : "flex gap-1 items-center text-sm font-medium px-3"
        }
        to="/menu"
      >
      Our Menu
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 text-base text-[#EEFF25] font-medium flex gap-1 items-center"
            : "flex gap-1 items-center text-sm font-medium px-3"
        }
        to="/shop"
      >
      Our Shop
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 text-base text-[#EEFF25] font-medium flex gap-1 items-center"
            : "flex gap-1 items-center text-sm font-medium px-3"
        }
        to="/dashboard"
      >
       Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3 text-base text-[#EEFF25] font-medium flex gap-1 items-center"
            : "flex gap-1 items-center text-sm font-medium px-3"
        }
        to="/private"
      >
       <div className="relative px-6 py-3 ">
        <p className="text-2xl p-2 rounded-full border border-[#fb941e]"><GiShoppingCart /></p>
         <div className="badge absolute top-2 right-2  badge-secondary  py-1 px-1 ">+{cart.length}</div>
       </div>
      </NavLink>

      
    </>
  );

  return (
    <>
      <div className="navbar max-w-[1920px] py-3 fixed z-10 bg-opacity-30 bg-black text-[#ffffff]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <div className="flex items-start mx-5 justify-between flex-col">
          <a className="md:text-3xl text-xl font-bold  uppercase text-[#ffffff]">Bristro Boss</a> 
          <a className="text-xl hidden md:flex font-semibold   uppercase text-[#ffffff]">Restaurant</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
        <div className="flex items-center justify-between">
       {user ? (
        <div className=" flex items-center justify-center gap-2">
          {/* <span className="mr-6">{user?.displayName}</span> */}
          <button onClick={handleSignOut}>SignOut</button>
          <span className="mr-6"> <img src={profile} alt="profile" className="rounded-full w-7 h-7" /> </span>
        </div>
      ) : (
        <div >
          <div className="flex items-center  gap-3 mr-5">
            <NavLink
               className={({ isActive }) =>
                isActive
                  ? "rounded-md px-3 py-1 text-[#ffffff] bg-[#FFA633] font-bold"
                  : "md:flex gap-1 items-center hidden text-sm font-medium px-3"
              }
            to={"/register"}>
              <button>Register</button>
            </NavLink>
            <NavLink
             className={({ isActive }) =>
              isActive
                ? "rounded-md px-3 py-1 text-[#ffffff] bg-[#FFA633] font-bold"
                : "flex gap-1 items-center text-sm font-medium px-3"
            }
             to={"/login"}>
              <button >
                Login
              </button>
            </NavLink>

            {/* className="rounded-md px-3 py-1 text-[#ffffff] bg-[#FFA633] font-bold" */}
          </div>
        </div>
      )}
       </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
