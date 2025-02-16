import React from "react";
import DynamicTitle from "../../../Shared/DynamicTitle";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useMenu from "../../../../Hooks/useMenu";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const [menu, loadar,refetch] = useMenu();
  const handleDeleteMenu = async (item) => {
    //   const res = await axiosSecure.delete(`/menu/${id}`);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure.delete(`/menu/${item._id}`)

          .then((res) => {
                   if (res.data.deletedCount > 0) {
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                console.log(res.data);
            }
          });
      }
    });
  };
  console.log("menu iten from managege itm ", menu);
  return (
    <div>
      <div className="md:mt-6 mt-4">
        <DynamicTitle
          subheading="---Hurry Up!---"
          heading="MANAGE ALL ITEMS"
        ></DynamicTitle>
      </div>

      {/* table all menu item */}
      <div className="mt-6 mx-8">
          <div className="my-3 text-base font-bold">Total items : {menu?.length}</div>
        <div className="overflow-x-auto">
          <table className="table table-sm h-[300px] table-pin-rows table-pin-cols">
            <thead className="bg-[#d1a054] py-4  text-base font-semibold">
              <tr className="bg-[#d1a054] text-[#ffffff]">
                <td>SL NO.</td>
                <td>ITEM IMAGE</td>
                <td>ITEM NAME</td>
                <td>PRICE</td>
                <td>UPDATE</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {menu?.map((item, index) => (
                <tr key={item._id} className="border-b-2  bg-[#ffffff]">
                  <th>{index + 1}</th>
                  <td>
                    {" "}
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>Update</td>
                  <td>
                    {" "}
                    <p className="">
                      <button
                        onClick={() => handleDeleteMenu(item)}
                        className="btn hover:text-[#131313] btn-ghost btn-xs bg-red-600 px-2 py-1 text-[#ffffff]"
                      >
                        <FaTrashAlt></FaTrashAlt>
                      </button>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
