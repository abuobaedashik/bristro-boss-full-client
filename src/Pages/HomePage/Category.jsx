
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import c1 from '../../assets/home/slide1.jpg'
import c2 from '../../assets/home/slide2.jpg'
import c3 from '../../assets/home/slide3.jpg'
import c4 from '../../assets/home/slide4.jpg'
import c5 from '../../assets/home/slide5.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
import DynamicTitle from "../Shared/DynamicTitle";

const Category = () => {
  return (

     <div className="mt-2">
         <div className="mb-12">
           <DynamicTitle 
            subheading={'---From 11:00am to 10:00pm---'}
            heading={'ORDER ONLINE'}
           ></DynamicTitle>
         </div>
         <Swiper
        slidesPerView={4}
        spaceBetween={8}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mx-auto"
      >
        <SwiperSlide>
          <img src={c1} alt="" />
          <div className="text-center text-xl font-semibold -mt-24 text-[#ffffffc2] uppercase ">
           Salads
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={c2} alt="" />
          <div className="text-center text-xl font-semibold -mt-24 text-[#ffffffa1] uppercase ">
          Soups
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <img src={c3} alt="" />
          <div className="text-center text-xl font-semibold -mt-24 mb-10 text-[#ffffff] uppercase ">
           pizzas
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={c4} alt="" />
          <div className="text-center text-xl font-semibold -mt-24 text-[#ffffff] uppercase ">
          desserts
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <img src={c1} alt="" />
          <div className="text-center text-xl font-semibold -mt-24 text-[#ffffffc2] uppercase ">
           Salads
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={c2} alt="" />
          <div className="text-center text-xl font-semibold -mt-24 text-[#ffffffa1] uppercase ">
          Soups
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <img src={c3} alt="" />
          <div className="text-center text-xl font-semibold -mt-24 mb-10 text-[#ffffff] uppercase ">
           pizzas
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={c4} alt="" />
          <div className="text-center text-xl font-semibold -mt-24 text-[#ffffff] uppercase ">
          desserts
          </div>
          </SwiperSlide>
         </Swiper>
     </div>
   
  );
};

export default Category;
