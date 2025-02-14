import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure =axios.create({
    baseURL:'http://localhost:5000'
}) 

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {SignOut}=useContext(AuthContext)
    //  request interseptor
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
    //    console.log('request stopped by interseptor',token)
       config.headers.authorization = `bearer ${token}`
        return config;
      },
       function (error) {
        // Do something with request error
        return Promise.reject(error);
      })

    //   response interseptor
    axiosSecure.interceptors.response.use(function (response) {
        
        return response;
      }, async (error)=> {
        const status =error.response.status
        if (status === 401 || status === 403) {
            await SignOut()
            navigate('/login')
        }
        //  console.log('status error in the interseptor',status)
        return Promise.reject(error);
      });
    return axiosSecure;

};

export default useAxiosSecure;