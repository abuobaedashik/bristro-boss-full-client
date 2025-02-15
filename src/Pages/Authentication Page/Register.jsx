import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { RiGoogleFill } from "react-icons/ri";
import bglogin from "../../assets/others/authentication.png";
import imgleft from "../../assets/others/authentication2.png";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Register = () => {
  const [err, setErr] = useState("");
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { CreateUser, googleSignIn, UpdateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  
  const handleRegister = async (event) => {
    event.preventDefault();
    setErr(""); // ✅ Previous Error Clear

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regex.test(password)) {
      const errorMsg =
        "Password must contain at least one uppercase, one lowercase, and be at least 6 characters long.";
      setErr(errorMsg);
      toast.error(errorMsg, { position: "top-center" });
      return;
    }

    try {
      const result = await CreateUser(email, password);
      const newUser = result.user;
      console.log("User Created:", newUser);

      toast.success("User Created Successfully!", { position: "top-center" });

      
      if (photo) {
        await UpdateUser(name, photo);
        console.log("Profile Updated!");
      }

      //  Save User Data to Database
      const userInfo = { name, email, photo };
      const res = await axiosPublic.post("/user", userInfo);
      console.log("DB Response:", res.data);

      if (res.data.insertedId) {
        Swal.fire({
          title: "Registration Successful!",
          icon: "success",
        });
      }

      navigate("/"); 
    } catch (error) {
      console.error("Registration Error:", error.message);
      toast.error(error.message, { position: "top-center" });
    }
  };

  
  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      console.log("Google Sign-In Success:", result);

      toast.success("Google Sign-In Successful!", { position: "top-center" });

   
      const userInfo = {
        name: result?.user?.displayName,
        email: result?.user?.email,
        photo: result?.user?.photoURL,
      };

      const res = await axiosPublic.post("/user", userInfo);
      

      if (res.data.insertedId) {
        console.log("DB Response:", res.data);
        Swal.fire({
          title: "Google Login Successful!",
          icon: "success",
        });
      }
      else{
        navigate("/")
        return  console.log('user not save to database')
         
      }

      
    }
    
    catch (error) {
      console.error("Google Sign-In Error:", error.message);
      toast.error(error.message, { position: "top-center" });
    }
  };

  return (
    <div style={{ backgroundImage: `url(${bglogin})` }} className="hero min-h-screen">
      <div
        className="hero-content bg-white flex-col border border-blue-800 lg:flex-row shadow-2xl px-8 py-6 my-6"
      >
        <div className="text-center lg:text-left">
          <img src={imgleft} alt="Authentication" />
        </div>
        <div className="card w-full px-2 py-6">
          <form onSubmit={handleRegister} className="card-body">
            <div className="text-center text-2xl font-bold">Register User</div>

            {/* Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
            </div>

            {/* Photo Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" />
            </div>

            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
            </div>

            {/* Show Error Message */}
            {err && <p className="text-red-600 text-sm text-center">{err}</p>}

            {/* Register Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>

          {/* Already have an account */}
          <div className="text-sm ml-10 mx-auto font-normal text-[#706F6F]">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-base font-bold text-[#FF8C47]">
                Login Now
              </Link>
            </p>
          </div>

          {/* Social Login */}
          <div className="mt-4">
            <p className="text-center text-base mt-2">Or Social Login</p>
            <p className="flex gap-6 items-center justify-center mt-2">
              <button className="shadow-md hover:shadow-xl border-2 border-[#444444] py-2 w-10 h-10 flex items-center justify-center text-lg rounded-full">
                <FaFacebookF />
              </button>
              <button onClick={handleGoogleSignIn} className="shadow-md hover:shadow-xl border-2 border-[#444444] py-2 w-10 h-10 flex items-center justify-center text-lg rounded-full">
                <RiGoogleFill />
              </button>
              <button className="shadow-md hover:shadow-xl border-2 border-[#444444] py-2 w-10 h-10 flex items-center justify-center text-lg rounded-full">
                <FaGithub />
              </button>
            </p>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
