import { useForm } from "react-hook-form";
import DynamicTitle from "../../../Shared/DynamicTitle";

const Additems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="md:mt-10 mt-5">
        <DynamicTitle
          subheading="---What's new? ---"
          heading="ADD AN ITEM"
        ></DynamicTitle>
      </div>

      <div className="md:w-4/12 mx-auto mt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} />
          <select
            {...register("category")}
          className="select select-warning w-full max-w-xs">
            <option disabled selected>
              Pick a Category
            </option>
            <option>Salad</option>
            <option>pizza</option>
            <option>soups</option>
            <option>desserts</option>
            <option>drinks</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Additems;
