import React from 'react';

const CustomRightSlidesTopRated = ({ title, ep, genre, background }) => {
    return (
        <div className={`outline-0 border-[#2D2E34] border-[2px] p-[8px] mr-[20px] h-[150px] rounded-[12px] bg-[url(${background})]`}>
            <div className=''>
                <span className='text-[16px] font-extrabold text-[#F9F9F9]'>{title}</span>
                <div className='flex justify-between mt-[25px]'>
                    <span className='text-[#F9F9F9] text-[14px] font-bold opacity-[0.67]'>{ep}</span>
                    <span className='text-[#F9F9F9] text-[14px] font-bold opacity-[0.67]'>{genre}</span>
                </div>
            </div>
            <div className='flex justify-between mt-[10px]'>
                <div className='parent cursor-pointer pt-[11px] pl-[19px] w-[70px] h-[50px] rounded-[12px]'>
                    <span className='child text-[14px] font-extrabold text-[#F9f9f9]'>+</span>
                </div>
                <div className='cursor-pointer pt-[11px] pl-[37px] bg-[#00B9AE] w-[135px] h-[50px] rounded-[12px]'>
                    <span className='text-[18px] text-[#16181E] font-[800]'>Watch</span>
                </div>
            </div>
        </div>
    );
};

export default CustomRightSlidesTopRated;