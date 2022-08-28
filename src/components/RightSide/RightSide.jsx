import React from 'react';

import Slider from "react-slick";

import CustomRightSlidesContinue from "./CustomRightSlidesContinue";

import notification from '../../assets/imgs/notification.svg'
import vectorDown from '../../assets/imgs/vectorDown.svg'
import profilePicture from '../../assets/imgs/profile-picture.svg'
import wanda from '../../assets/imgs/wanda.svg'
import hulk from '../../assets/imgs/hulk.svg'
import Title from "./Title";
import CustomRightSlidesTopRated from "./CustomRightSlidesTopRated";

const RightSide = () => {

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1.3,
        slidesToScroll: 1,
        arrows: false
    };

    const continueRef = React.useRef();
    const continueNext = () => continueRef.current.slickNext();
    const continuePrev = () => continueRef.current.slickPrev();

    const topRef = React.useRef();
    const topNext = () => topRef.current.slickNext();
    const topPrev = () => topRef.current.slickPrev();

    return (
        <div className='RightSide w-[360px] bg-[#21242D] pt-[5px] pl-[30px]'>
            <div className='header flex justify-between mt-[8px] pr-[30px]'>
                <div className='parent w-[50px] h-[50px] bg-[#F9F9F9] rounded-md pt-[10px]'>
                    <img className='child m-0 m-auto cursor-pointer' src={notification} alt='notification'/>
                </div>
                <div className='flex'>
                    <span className='mr-[15px] m-0 m-auto text-[#F9F9F9] text-[16px] font-extrabold cursor-pointer'>Samantha</span>
                    <img className='cursor-pointer mr-[15px]' src={vectorDown} alt='vector'/>
                    <img className='' src={profilePicture} alt='profilePicture'/>
                </div>
            </div>

            <div className='mt-[30px]'>
                <Title goNext={continueNext} goPrev={continuePrev} title='Continue' />
                <Slider className='mt-[10px]' ref={continueRef} {...settings}>
                    <CustomRightSlidesContinue
                        index={1}
                        logo={wanda}
                        title='WandaVision'
                        episodesLeft='1 Episode left'
                    />

                    <CustomRightSlidesContinue
                        index={2}
                        logo={hulk}
                        title='Hulk'
                        episodesLeft='1 Episode left'
                    />

                    <CustomRightSlidesContinue
                        index={3}
                        logo={wanda}
                        title='WandaVision'
                        episodesLeft='1 Episode left'
                    />

                    <CustomRightSlidesContinue
                        index={4}
                        logo={hulk}
                        title='Hulk'
                        episodesLeft='1 Episode left'
                    />

                </Slider>
            </div>

            <div className='mt-[30px]'>
                <Title goNext={topNext} goPrev={topPrev} title='Top Rated' />
                <Slider className='mt-[10px]' ref={topRef} {...settings}>
                    <CustomRightSlidesTopRated
                        title='Supernatural'
                        ep='320 Ep'
                        genre='Horror, Fantasy'
                        background='../../assets/imgs/supernatural.png'
                    />
                </Slider>
            </div>
        </div>
    );
};

export default RightSide;