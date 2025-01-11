
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import c1 from '../../assets/home/slide1.jpg'
import c2 from '../../assets/home/slide2.jpg'
import c3 from '../../assets/home/slide3.jpg'
import c4 from '../../assets/home/slide4.jpg'
import c5 from '../../assets/home/slide5.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

const Category = () => {
  return (

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-8/12 mx-auto"
      >
        <SwiperSlide><img src={c1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={c2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={c3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={c4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={c5} alt="" /></SwiperSlide>
      </Swiper>
   
  );
};

export default Category;
