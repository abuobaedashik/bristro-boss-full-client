import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bglogin from '../../assets/others/authentication.png'
import imgleft from '../../assets/others/authentication2.png'
import { AuthContext } from "../../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { RiGoogleFill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   LoadCanvasTemplateNoReload,
//   validateCaptcha,
// } from "react-simple-captcha";

const Login = () => {
//   useEffect(() => {
//     loadCaptchaEnginge(6);
//   }, []);
  const {LogInUser,googleSignIn}=useContext(AuthContext)
  const axiosPublic =useAxiosPublic()
  const navigate = useNavigate();
  const location =useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log("location is now", location.state)
  const handleLogin = (event) => {

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.capcha.value;
    const user = { email, password };
    console.log(user);


    LogInUser(email,password)
    .then(result=>{
        const user =result.user
        // console.log(user);
         toast.success("User Login Successful", {
                position: "top-center", 
                autoClose: 3000, 
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored", 
              });
              navigate(from, { replace: true });
    })
    .catch(error=>{
        const Errormessage =error.message
        // console.log(Errormessage);
         toast.error(Errormessage , {
                position: "top-center", 
                autoClose: 3000, 
                pauseOnHover: true,
                draggable: true,
                theme: "colored", 
              })
    })
    

    

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
                  console.log(res.data)
                  Swal.fire({
                    title: "Google Login successfull ",
                    icon: "success",
                    draggable: true
                  });
                }
              })
      
      navigate(from, { replace: true });
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
    style={{backgroundImage:`url(${bglogin})`}}
    className="hero  min-h-screen">
      <div 
      style={{backgroundImage:`url(${bglogin})`}}
      className="hero-content bg-white flex-col  lg:flex-row shrink-0 shadow-2xl px-8 py-6">
        <div className="text-center lg:text-left">
            <img src={imgleft} alt="" />
          </div>
        <div className="card  w-full px-2 py-6 ">
          <form onSubmit={handleLogin} className="card-body ">
            <div className="text-center text-2xl font-bold ">Login User</div>
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
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {/* google login  */}
          {/* onClick={handleGoogleSignIn} */}

          {/* <button   className="shadow-md hover:shadow-xl border border-[#13131312] justify-center py-2 mb-3 mx-8 flex items-center gap-3  text-lg rounded-md ">
              <img src={googlelogo} className="w-6 h-6" alt="" />
              <p className="text-base">Sign In With Google</p>
            </button> */}
          <div className="text-sm ml-10 mx-auto  font-normal text-[#706F6F]">
                      <p>
                        If already you have an account{" "}
                        <Link to="/register" className="text-base font-bold text-[#FF8C47]">
                          Register
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
         
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Login;
