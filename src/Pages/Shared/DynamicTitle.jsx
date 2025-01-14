import React from 'react';

const DynamicTitle = ({subheading,heading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center mt-2 '>
            <h1 className='md:text-base text-sm font-normal text-[#d99904] mb-2 '>{subheading}</h1>
            <h1 className='md:text-4xl text-xl font-bold md:border-y-4 border-y-2 py-4 border-[#E8E8E8]  text-[#151515]'>{heading}</h1>
        </div>
    );
};

export default DynamicTitle;