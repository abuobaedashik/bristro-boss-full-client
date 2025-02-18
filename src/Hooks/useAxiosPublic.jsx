import axios from "axios";

const axiosPublic =axios.create({
    baseURL:'https://bristro-boss-server-eosin.vercel.app'
}) 

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;