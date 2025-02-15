import { useForm } from "react-hook-form";
import DynamicTitle from "../../../Shared/DynamicTitle";
import { FaUtensils } from "react-icons/fa";

const Additems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="md:mt-6 mt-4">
        <DynamicTitle
          subheading="---What's new? ---"
          heading="ADD AN ITEM"
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
                {...register("category", { required: true })}
                className="select select-warning w-full "
              >
                <option disabled selected>
                  Pick a Category
                </option>
                <option>Salad</option>
                <option>pizza</option>
                <option>soups</option>
                <option>desserts</option>
                <option>drinks</option>
              </select>
            </label>

            {/* price */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price *</span>
              </div>
              <input
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
              {...register("recipe", { required: true })}
              className="textarea textarea-accent"
              placeholder="Details"
            ></textarea>
          </label>

          <label className="form-control w-full  mb-4 ">
            <input
              type="file"
              className="file-input file-input-bordered file-input-accent w-full max-w-xs"
            />
          </label>

            <button className="btn mt-4 btn-primary bg-[#796125] text-[#ffffff]">Add Item <FaUtensils></FaUtensils></button>
        </form>
      </div>
    </div>
  );
};

export default Additems;
