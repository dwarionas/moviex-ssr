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

const MainContent = () => {
    const multiSlider = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        adaptiveHeight: true,
    };

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

            <div className='mt-[25px] ml-[8px]'>
                <img onClick={goPrev} className='w-[40px] z-30 absolute top-[220px] left-[340px]' src={prevbtn} alt='prev'/>
                <div className='text-[#F9F9F9] text-[30px] absolute z-30 absolute top-[120px] left-[360px]'>The Crown</div>
                <Slider className='z-10' ref={slideRef} {...singleSlider}>
                    <div className='outline-0'>
                        <img src={crown} alt='img'/>
                    </div>

                    <div className='outline-0'>
                        <img src={crown} alt='img'/>
                    </div>
                </Slider>

                <div className='parent flex absolute z-30 absolute top-[370px] left-[340px] w-[140px] h-[45px]  rounded-[12px]'>
                    <span className='child text-[30px] text-[#F9f9f9] m-0 m-auto'>+</span>
                    <span className='child text-[20px] text-[#F9f9f9] font-[600] m-0 m-auto'>Watchlist</span>
                </div>
                <div className='flex absolute bg-[#00B9AE] z-30 absolute top-[370px] right-[445px] w-[140px] h-[45px]  rounded-[12px]'>
                    <span className='text-[20px] text-[#16181E] font-[600] m-0 m-auto'>Watch Now</span>
                </div>
                <img onClick={goNext} className='w-[40px] z-30 absolute top-[220px] right-[450px]' src={nextbtn} alt='next'/>
            </div>

            <div className='mt-[15px]'>
                <div className='mb-[15px] text-[20px] text-[#F9F9F9]'>Popular</div>
                <Slider {...multiSlider}>
                    <div className='outline-0 w-[170px]'>
                        <div className='absolute mt-[10px] ml-[10px] text-[#F9F9F9] text-[20px] font-[600]'>Loki</div>
                        <div className='flex absolute mt-[40px] ml-[10px]'>
                            <img src={star} alt='star' />
                            <img src={star} alt='star' />
                            <img src={star} alt='star' />
                            <img src={star} alt='star' />
                            <img src={semistar} alt='semistar' />
                        </div>
                        <div className='parent flex z-30 absolute top-[150px] left-[10px] w-[50px] h-[50px] rounded-[12px]'>
                            <span className='child text-[30px] text-[#F9f9f9] m-0 m-auto'>+</span>
                        </div>
                        <div className='flex absolute bg-[#00B9AE] z-30 absolute top-[150px] left-[70px] w-[90px] h-[50px] rounded-[12px]'>
                            <span className='text-[18px] text-[#16181E] font-[800] m-0 m-auto'>Watch</span>
                        </div>
                        <img className='w-[170px]' src={loki} alt='loki'/>
                    </div>

                    <div className='outline-0 w-[170px]'>
                        <div className='absolute mt-[10px] ml-[10px] text-[#F9F9F9] text-[20px] font-[600]'>Loki</div>
                        <div className='flex absolute mt-[40px] ml-[10px]'>
                            <img src={star} alt='star' />
                            <img src={star} alt='star' />
                            <img src={star} alt='star' />
                            <img src={star} alt='star' />
                            <img src={semistar} alt='semistar' />
                        </div>
                        <img className='w-[170px]' src={loki} alt='loki'/>
                        <div className='parent flex z-30 absolute top-[150px] left-[10px] w-[50px] h-[50px] rounded-[12px]'>
                            <span className='child text-[30px] text-[#F9f9f9] m-0 m-auto'>+</span>
                        </div>
                        <div className='flex absolute bg-[#00B9AE] z-30 absolute top-[150px] left-[70px] w-[90px] h-[50px] rounded-[12px]'>
                            <span className='text-[18px] text-[#16181E] font-[800] m-0 m-auto'>Watch</span>
                        </div>
                    </div>

                </Slider>
            </div>


        </div>
    );
};

export default MainContent;