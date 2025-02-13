import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";



const CardMenu = ({ item }) => {
  const [,refetch] =useCart()
  const { name, recipe, image,_id,
    price } = item;
  const { user } = useContext(AuthContext);
  const navigate =useNavigate()
  const location =useLocation()
  const axiosSecure =useAxiosSecure()
  const handleaddtocard = () => {
    if (user && user.email) {
      //  todo add to card
      console.log('user found')
      const cardItem ={
        menuId :_id,
        email :user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts',cardItem)
      .then(res=>{
        console.log(res.data)
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your card`,
            showConfirmButton: false,
            timer: 1500
          });
        }
        // refetch cart items
        refetch()
      })
      .catch(error=>{
        console.log(error)
      })
    } 
    else {
      Swal.fire({
        title: "You are not looged in",
        text: "Please login first for add to card!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      });
  };
}
  return (
    <div className="card card-compact rounded-none  shadow-sm">
      <figure className="relative">
        <img src={image} alt={name} className="h-[250px] w-full " />
        <p className="text-lg absolute top-3 right-3 font-semibold text-[#ffffff] py-2 px-3 bg-[#131313]">${price}</p>
      </figure>
      <div className="card-body  text-center items-center justify-center bg-[#f3f3f3]">
        <h2 className="card-title mt-10">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end mb-10">
          <button
            onClick={() => handleaddtocard(item)}
            className="px-4 py-2 hover:bg-[#1F2937] text-xl font-bold uppercase text-[#BB8506] bg-[#E8E8E8] rounded-lg border-b-2 border-[#BB8506]"
          >
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
