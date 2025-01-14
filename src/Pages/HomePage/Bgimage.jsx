import React from 'react';
import bgimg from '../../assets/home/chef-service.jpg'
const Bgimage = () => {
    return (
        <div 
        className="h-[400px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})` }}
        >
           bg 
        </div>
    );
};

export default Bgimage;