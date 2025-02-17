import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const [cart,refetch] = useCart();
  const axiosSecure=useAxiosSecure()
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handleDelete =id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        console.log(id)
        axiosSecure.delete(`/carts/${id}`)
        .then(
            res=>{
                console.log(res.data)
                if (res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                }
            }
           
        )

        }
      });
  }
  return (
    <div>
     <div className="mt-8 px-20 py-12 bg-[#ffffff]">
     <div className="flex  gap-6   justify-between">
        <p className="mt-4 text-xl font-bold">Total card add :{cart.length}</p>
        <p className="mt-4 text-xl font-bold">Total Card:{totalPrice}</p>

     { cart.length === 0 ? <button disabled className="mt-4 text-base font-bold bg-orange-200 text-[#ffffff] px-2 rounded-lg py-1">
          Pay
        </button>  : <NavLink to={'payment'} className="mt-4 text-base font-bold bg-orange-500 text-[#ffffff] px-2 rounded-lg py-1">
          Pay
        </NavLink> }

      </div>

      <div className="table mt-6">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-orange-600 rounded-xl text-[#ffffff] text-base font-semibold">
              <tr>
                <th>
                  
                </th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
               {
                cart?.map((item,index)=>  <tr key={item._id}>
                    <th>
                      {index+1}
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                       {item.name}
                    </td>
                    <td>{item.price}</td>
                    <th>
                      <p className="">
                         <button 
                         onClick={()=>handleDelete(item._id)}
                         className="btn hover:text-[#131313] btn-ghost btn-xs bg-red-600 px-2 py-1 text-[#ffffff]">
                            <FaTrashAlt></FaTrashAlt>
                         </button>
                      </p>
                    </th>
                  </tr>)
               }
            </tbody>
          </table>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Cart;
