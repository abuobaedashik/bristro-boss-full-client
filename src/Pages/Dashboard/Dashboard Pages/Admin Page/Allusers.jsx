import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

const Allusers = () => {
  const AxiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await AxiosSecure.get("/user",{
       headers : {
        authorization : `bearer ${localStorage.getItem('access-token')} `
       }
      });
      return res.data;
    },
  });

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        AxiosSecure.delete(`/user/${user._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Add Admin",
        denyButtonText: `Don't Add to Admin`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            AxiosSecure.patch(`/user/admin/${user._id}`).then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                  refetch();
                  toast.success(`${user.name} is admin now`, {
                      position: "top-center",
                      autoClose: 2000, // 3 seconds
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      theme: "colored",
                    });
                 
                }
              });
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
  };

  //   console.log(users)

  return (
    <div className="mt-8 px-20 py-12 bg-[#ffffff]">
      <div className="flex  gap-6   justify-between">
        <p className="mt-4 text-xl font-bold">Total User :{users.length}</p>
      </div>

      <div className="table mt-6">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-orange-600 rounded-xl text-[#ffffff] text-base font-semibold">
              <tr>
                <th></th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {/* row 1 */}
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>

                  <td>
                    {user.role === "admin" ? (
                       <>
                         <p className="text-xs font-semibold text-[#FF0000]">Admin</p>
                     </>
                    ) : (
                      <>
                        <p>
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="btn hover:text-[#131313] btn-ghost btn-xs bg-red-600 px-2 py-1 text-[#ffffff]"
                          >
                            <FaUsers></FaUsers>
                          </button>
                        </p>
                      </>
                    )}
                  </td>

                  <td>
                    <p className="">
                      <button
                        onClick={() => handleDeleteUser(user)}
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

          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Allusers;
