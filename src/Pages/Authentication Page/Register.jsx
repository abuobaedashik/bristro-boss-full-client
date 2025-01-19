import React, { useContext, useState } from 'react';

import bglogin from '../../assets/others/authentication.png'
import imgleft from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
    const [err, seterr] = useState("");
    const {CreateUser,googleSignIn}=useContext(AuthContext)
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name,email, password };
        console.log(user);



        
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!regex.test(password)) {
          seterr("At Least one UpperCase, one LowerCase and should be six characters long");
          toast.error(`${err}`, {
            position: "top-center"
          });
          // console.log(err);
          return;
        }
        CreateUser(email,password)
        .then(result=>{
            const user =result.user
            console.log(user);
            toast.error("User Create Successfull", {
              position: "top-center", 
              autoClose: 3000, 
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored", 
            });
        })
        .catch(error=>{
            const Errormessage =error.message
            // console.log(Errormessage);
            toast.error(Errormessage, {
              position: "top-center", 
              autoClose: 3000, 
              draggable: true,
              theme: "colored", 
            });
        })


        navigate(location?.state ? location?.state : "/");
        // if (!validateCaptcha(captcha)) {
        //   alert("Invalid captcha. Please try again.");
        //   return;
        // }
      };
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
                {/* onClick={handleGoogleSignIn} */}
      
                {/* <button   className="shadow-md hover:shadow-xl border border-[#13131312] justify-center py-2 mb-3 mx-8 flex items-center gap-3  text-lg rounded-md ">
                    <img src={googlelogo} className="w-6 h-6" alt="" />
                    <p className="text-base">Sign In With Google</p>
                  </button> */}
      
                <div className="text-sm ml-8  font-normal text-[#706F6F]">
                
                <p>If already you have an account  <Link to="/login" className="text-sm font-normal text-[#FF8C47]">
                Login
              </Link>   Now  </p>
                </div>
              </div>
              <ToastContainer></ToastContainer>
            </div>
          </div>
    );
};

export default Register;