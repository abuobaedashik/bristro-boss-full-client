import React from 'react';
import bgimg from '../../assets/home/chef-service.jpg'
const Bgimage = () => {
    return (
        <div 
        className="h-[400px] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgimg})` }}
        >
           <div className="md:px-16 px-4 py-6 md:py-8 bg-[#ffffff] mx-4 md:mx-12 my-6 flex items-center justify-center flex-col ">
              <p className="md:text-4xl text-xl font-bold text-[#151515] mb-4">Bistro Boss</p>
              <p className="md:text-lg text-base font-medium text-[#151515] mb-4">Bistro Boss is a culinary destination where tradition meets innovation. We offer a delightful dining experience with dishes crafted from fresh, quality ingredients and a passion for flavor. Whether you're here for a quick bite or a special occasion, our warm ambiance and exceptional service ensure every visit is memorable. At Bistro Boss, it's not just food – it's an experience!</p>
           </div>
        </div>
    );
};

export default Bgimage;