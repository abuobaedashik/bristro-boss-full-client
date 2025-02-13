import React, { useContext, useState } from "react";

import bglogin from "../../assets/others/authentication.png";
import imgleft from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import googlelogo from "../../assets/others/googleicon.png";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { RiGoogleFill } from "react-icons/ri";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Register = () => {
  const [err, seterr] = useState("");
  const axiosPublic =useAxiosPublic()
  const { CreateUser, googleSignIn,UpdateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password , photo};
    console.log(user);

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regex.test(password)) {
      seterr(
        "At Least one UpperCase, one LowerCase and should be six characters long"
      );
      toast.error(`${err}`, {
        position: "top-center",
      });
      // console.log(err);
      return;
    }
    CreateUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.error("User Create Successfull", {
          position: "top-center",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        
        UpdateUser(name, photo)
      .then(() => {
          const userInfo ={
            name,email,photo
          }
          console.log(userInfo)
         axiosPublic.post('/user',userInfo)
         .then(
          res=>{
            console.log(res.data)
            if (res.data.insertedId) {
              Swal.fire({
                title: "User Create successfull",
                icon: "success",
                draggable: true
              });
            }
          })

        console.log("User profile updated");
        toast.success("Profile Updated Successfully", {
          position: "top-center",
          autoClose: 3000,
        });
      })

      .catch((error) => {
        console.error("Profile update error:", error);
        toast.error(error.message, {
          position: "top-center",
        });

      })

      })
      .catch((error) => {
        const Errormessage = error.message;
        // console.log(Errormessage);
        toast.error(Errormessage, {
          position: "top-center",
          autoClose: 3000,
          draggable: true,
          theme: "colored",
        });
      });

    navigate(location?.state ? location?.state : "/");
    // if (!validateCaptcha(captcha)) {
    //   alert("Invalid captcha. Please try again.");
    //   return;
    // }
  };

  const handleGoogleSignIn =()=>{
    googleSignIn()
    .then(result=>{
      console.log(result)
      toast.error("Create User with Google Successful", {
        position: "top-center", 
        theme: "colored"
      });
      const userInfo ={
        name:result?.user?.displayName,
        email:result?.user?.email,
        photo:result?.user?.photoURL
        
      }

      axiosPublic.post('/user',userInfo)
      .then(
        res=>{
          console.log(res.data)
          if (res.data.insertedId) {
            Swal.fire({
              title: "Google Login successfull ",
              icon: "success",
              draggable: true
            });
          }
        })

      navigate(location?.state ? location?.state : "/");
    })
    .catch(error=>{
      const errorMessage = error.message;
       console.log(errorMessage);
      toast.error(errorMessage, {
        position: "top-center", 
        theme: "colored"
      })
    })
  }
  return (
    <div
      style={{ backgroundImage: `url(${bglogin})` }}
      className="hero  min-h-screen"
    >
      <div
        style={{ backgroundImage: `url(${bglogin})` }}
        className="hero-content bg-white flex-col border border-blue-800  lg:flex-row shrink-0 shadow-2xl px-8 py-6 my-6"
      >
        <div className="text-center lg:text-left">
          <img src={imgleft} alt="" />
        </div>
        <div className="card  w-full px-2 py-6 ">
          <form onSubmit={handleRegister} className="card-body ">
            <div className="text-center text-2xl font-bold ">Register User</div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered pr-6 pl-2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="photourl"
                name="photo"
                className="input input-bordered pr-6 pl-2"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered pr-6 pl-2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                {/* <LoadCanvasTemplateNoReload /> */}
              </label>
              <input
                type="text"
                placeholder="captcha"
                name="capcha"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          {/* google login  */}
          

          <div className="text-sm ml-10 mx-auto  font-normal text-[#706F6F]">
            <p>
              If already you have an account{" "}
              <Link to="/login" className="text-base font-bold text-[#FF8C47]">
                Login
              </Link>{" "}
              Now{" "}
            </p>
          </div>

          <div className="mt-4">
            <p className="text-center text-base mt-2">Or Social Login</p>

            <p className="flex gap-6 items-center justify-center mt-2">
              <button className="shadow-md hover:shadow-xl  border-2 border-[#444444] justify-center py-2 mb-3 w-10 h-10 items-center  flex  gap-3  text-lg rounded-full ">
                <FaFacebookF />
              </button>
              <button onClick={handleGoogleSignIn} className="shadow-md hover:shadow-xl  border-2 border-[#444444] justify-center py-2 mb-3 w-10 h-10 items-center  flex  gap-3  text-lg rounded-full ">
                <RiGoogleFill />
              </button>
              <button className="shadow-md hover:shadow-xl justify-center py-2 mb-3 w-10 h-10 items-center  flex gap-3  text-lg rounded-full border-2 border-[#444444] ">
                <FaGithub />
              </button>
            </p>
          </div>

          {/* from today i will comeback  Inshallah  */}
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Register;
