import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaAd, FaBook, FaShoppingCart, FaThList, FaUsers, FaUtensils } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import booking from "../../assets/shop/image.png";
import { FaBagShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { RiContactsBook3Fill } from "react-icons/ri";
import useCart from "../../Hooks/useCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
 
  
  

  // const { data: users = [],refetch } = useQuery({
  //   queryKey: ["users"],
  //   enabled: isAdmin,
  //   queryFn: async () => {
  //     const res = await AxiousSecure.get("/user");
  //     return res.data;
  //   },
  // });

  //  console.log(users)

 
  // todo isAdmin to the database
  // const isAdmin = true ;
  return (
    <div className="flex  gap-0">
      <div className=" space-y-2 w-[20%]  min-h-screen text-[#131313] text-base bg-orange-400 pt-6 pl-3">
        <p className="py-3">
          <p className="text-xl px-3 font-semibold   text-[#151515]">
            BISTRO BOSS
          </p>
          <p className="text-xl px-3  font-normal uppercase   text-[#151515]">
            Restaurant
          </p>
        </p>

        {/* conditional rendering isAdmin or User  */}

        {isAdmin ? (
          <>
            <p className="">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-3 text-base text-[#ffffff] font-medium flex gap-1 items-center"
                    : "flex gap-1 items-center text-sm font-medium px-3"
                }
                to={"adminhome"}
              >
                <IoHomeSharp />
                Admin Home
              </NavLink>
            </p>

            <p>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-3 text-base text-[#ffffff] font-medium flex gap-1 items-center"
                    : "flex gap-1 items-center text-sm font-medium px-3"
                }
                to={"addItems"}
              >
                <FaUtensils />
                Add Items
              </NavLink>
            </p>

            <p className="">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-3 text-base text-[#ffffff] font-medium flex gap-1 items-center"
                    : "flex gap-1 items-center text-sm font-medium px-3"
                }
                to={"manageItems"}
              >
                <FaThList/>
                 Manage items
              </NavLink>
            </p>
            <p>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-3 text-base text-[#ffffff] font-medium flex gap-1 items-center"
                    : "flex gap-1 items-center text-sm font-medium px-3"
                }
                to={"manageBookings"}
              >
                <FaBook />
                Manage bookings 
                
              </NavLink>
            </p>
            <p>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-3 text-base text-[#ffffff] font-medium flex gap-1 items-center"
                    : "flex gap-1 items-center text-sm font-medium px-3"
                }
                to={"allusers"}
          
              >
                <FaUsers></FaUsers>
                All users 
              </NavLink>
            </p>
          </>
        ) : (
          <>
            <p className="">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-3 text-base text-[#ffffff] font-medium flex gap-1 items-center"
                    : "flex gap-1 items-center text-sm font-medium px-3"
                }
                to={"home"}
              >
                <IoHomeSharp />
                User Home
              </NavLink>
            </p>
            <p>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-3 text-base text-[#ffffff] font-medium flex gap-1 items-center"
                    : "flex gap-1 items-center text-sm font-medium px-3"
                }
                to={"reservation"}
              >
                <FaCalendar />
                Reservation
              </NavLink>
            </p>
            <p className="">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-3 text-base text-[#ffffff] font-medium flex gap-1 items-center"
                    : "flex gap-1 items-center text-sm font-medium px-3"
                }
                to={"paymenthistory"}
              >
                <MdPayment />
                Payment History
              </NavLink>
            </p>
            <p>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-3 text-base text-[#ffffff] font-medium flex gap-1 items-center"
                    : "flex gap-1 items-center text-sm font-medium px-3"
                }
                to={"cart"}
              >
                <FaShoppingCart />
                My Cart ({cart.length})
              </NavLink>
            </p>
            <p>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-3 text-base text-[#ffffff] font-medium flex gap-1 items-center"
                    : "flex gap-1 items-center text-sm font-medium px-3"
                }
                to={"addreview"}
              >
                <MdReviews></MdReviews>
                add review
              </NavLink>
            </p>
            <p>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-3 text-base text-[#ffffff] font-medium flex gap-1 items-center"
                    : "flex gap-1 items-center text-sm font-medium px-3"
                }
                to={"booking"}
              >
                <FaBagShopping></FaBagShopping>
                my booking
              </NavLink>
            </p>
          </>
        )}

        {/* shared item  */}

        <div className="divider text-[#ffffff] pr-3"></div>

        <p className="">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "px-3 text-base text-[#ffffff] font-medium flex gap-1 items-center"
                : "flex gap-1 items-center text-sm font-medium px-3"
            }
            to={"/"}
          >
            <IoHomeSharp />
            Home
          </NavLink>
        </p>

        <p className="">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "px-3 text-base text-[#ffffff] font-medium flex gap-1 items-center"
                : "flex gap-1 items-center text-sm font-medium px-3"
            }
            to={"/menu"}
          >
            <GiHamburgerMenu />
            Menu
          </NavLink>
        </p>
        <p className="">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "px-3 text-base text-[#ffffff] font-medium flex gap-1 items-center"
                : "flex gap-1 items-center text-sm font-medium px-3"
            }
            to={"/shop"}
          >
            <TiShoppingCart />
            Shop
          </NavLink>
        </p>
        <p className="">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "px-3 text-base text-[#ffffff] font-medium flex gap-1 items-center"
                : "flex gap-1 items-center text-sm font-medium px-3"
            }
            to={"/contact"}
          >
            <RiContactsBook3Fill />
            Contact
          </NavLink>
        </p>
      </div>
      <div className="p-6 bg-[#f6f6f6] w-[80%]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
