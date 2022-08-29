import React from 'react';

const ThirdSlide = ({ title }) => {
    return (
        <div className={`outline-0 border-[#2D2E34] border-[2px] p-[8px] mr-[20px] h-[140px] rounded-[12px]`}>
            <span className='block text-center mt-[40px] text-[16px] font-extrabold text-[#F9F9F9]'>{title}</span>
        </div>
    );
};

export default ThirdSlide;