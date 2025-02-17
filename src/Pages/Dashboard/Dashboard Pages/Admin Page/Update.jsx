import React from "react";
import DynamicTitle from "../../../Shared/DynamicTitle";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Update = () => {
  const { category, image, name, price, recipe,_id } = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const AxiosPublic = useAxiosPublic();
  const AxiosSecure = useAxiosSecure();

  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  console.log();
  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    const res = await AxiosPublic.post(image_hosting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.url,
      };
      const menuRes = await AxiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        console.log("Item Updated Successfully");
        reset();
        // sweet alert
        Swal.fire("Good job!", `${name} Updated Successfully`, "success");
      }
    }
    console.log("data url", res.data);
  };
  return (
    <div>
      <div className="md:mt-6 mt-4">
        <DynamicTitle
          subheading="---Hurry Up!---"
          heading="updateitem"
        ></DynamicTitle>
      </div>

      <div className="px-8 py-6 w-[750px] bg-[#dbc2c2] mx-auto mt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full  mb-4 ">
            <div className="label">
              <span className="label-text">Recepe Name *</span>
            </div>
            <input
              type="text"
              placeholder="Recepe Name"
              defaultValue={name}
              {...register("name", { required: true })}
              className="input input-bordered w-full "
            />
          </label>

          {/* 2 input */}
          <div className="flex gap-3 items-center">
            {/* catrgory */}

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Recepe Name *</span>
              </div>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-warning w-full "
              >
                <option disabled selected>
                  Pick a Category
                </option>
                <option>salad</option>
                <option>pizza</option>
                <option>soup</option>
                <option>dessert</option>
                <option>drinks</option>
              </select>
            </label>

            {/* price */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price *</span>
              </div>
              <input
                defaultValue={price}
                type="text"
                placeholder="Enter Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full "
              />
            </label>
          </div>

          {/* 3 input */}
          <label className="form-control w-full  mb-4 ">
            <div className="label">
              <span className="label-text">Recepe Details *</span>
            </div>

            <textarea
              defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="textarea textarea-accent"
              placeholder="Details"
            ></textarea>
          </label>

          <label className="form-control w-full  mb-4 ">
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered file-input-accent w-full max-w-xs"
            />
          </label>

          <button className="btn mt-4 btn-primary bg-[#796125] text-[#ffffff]">
            Update Item{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
