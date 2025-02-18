import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaDollarSign, FaProductHunt, FaStreetView, FaTruck, FaUser } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: stats = [] } = useQuery({
    queryKey: ["admin-status"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-status");
      return res.data;
    },
  });

  return (
    <div>
      <div className="mt-6 text-xl">
        <p className="text-xl font-bold">Hi, Welcome Back!</p>
      </div>
      <div className="flex items-center mt-5">
        <div className="stats shadow ">
          <div className="stat">
            <div className="stat-figure text-secondary">
                <FaDollarSign className="inline-block h-8 w-8 stroke-current"/>
            </div>
            <div className="stat-title">Revenew</div>
            <div className="stat-value">$ {stats?.revenue}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
                <FaUser className="inline-block h-8 w-8 stroke-current"/>
            </div>
            <div className="stat-title">Customers</div>
            <div className="stat-value">{stats.user}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
                <AiFillProduct className="inline-block h-8 w-8 stroke-current"/>
            </div>
            <div className="stat-title">Products</div>
            <div className="stat-value">{stats.menu}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
                <MdReviews className="inline-block h-8 w-8 stroke-current"/>
            </div>
            <div className="stat-title">Review</div>
            <div className="stat-value">{stats.review}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
                <FaTruck className="inline-block h-8 w-8 stroke-current"/>
            </div>
            <div className="stat-title">Order</div>
            <div className="stat-value">{stats.order}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
