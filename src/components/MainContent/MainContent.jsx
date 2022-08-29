import React from 'react';

import Slider from "react-slick";

import crown from '../../assets/imgs/crown.png'
import loki from '../../assets/imgs/loki.svg'
import chornobyl from '../../assets/imgs/chornobyl.svg'
import ricknmorty from '../../assets/imgs/ricknmorty.svg'

import star from '../../assets/imgs/star.svg'
import semistar from '../../assets/imgs/semistar.svg'

import prevbtn from '../../assets/imgs/prevbtn.svg'
import nextbtn from '../../assets/imgs/nextbtn.svg'
import MultiSlider from "./MultiSlider";

const MainContent = () => {
    const singleSlider = {
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'slick-dots',
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    translate: '0px -50px',
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        )
    }

    const multiSlider = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        adaptiveHeight: true,
    };

    const slideRef = React.useRef();
    const goNext = () => slideRef.current.slickNext();
    const goPrev = () => slideRef.current.slickPrev();

    return (
        <div className='MainContent pl-[68px] pt-[5px] pr-[68px] pb-[68px] w-[924px] bg-[#16181E] border-x-[#2D2E34] border-r'>
            <div className='flex justify-between h-[45px]'>
                <div className='flex h-[42px] mt-[8px]'>
                    <div className='mt-[8px] font-semibold mr-[50px] text-[16px] text-[#F9F9F9]'><a href='#'>Movies</a></div>
                    <div className='mt-[8px] font-semibold mr-[50px] text-[16px] text-[#00B9AE] border-y-[#00B9AE] border-b-[3px]'><a href='#'>Streaming Services</a></div>
                    <div className='mt-[8px] font-semibold text-[16px] text-[#F9F9F9]'><a href='#'>Series</a></div>
                </div>
                <div className='flex outline-0 border-[#2D2E34] border text-[#F9F9F9] mt-[8px] text-[18px] pl-[64px] pr-[45px] w-[307px] h-[40px] rounded-[12px] bg-[#21242D]'>
                    <img className='absolute top-[23px] right-[695px] w-[20px]' src='imgs/search.svg' alt='search'/>
                    <input className='bg-[#21242D] outline-0 translate-x-[-8px]' placeholder='Search'/>
                    <img className='absolute top-[23px] right-[447px] w-[18px]' src='imgs/filter.svg' alt='filter'/>
                </div>
            </div>



        </div>
    );
};

export default MainContent;