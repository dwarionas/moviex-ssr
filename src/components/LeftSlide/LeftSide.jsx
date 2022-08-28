import React from 'react';

import Icon from "../Icon";

import logo from '../../assets/imgs/logo.svg'

const LeftSide = () => {
    return (
        <div className='LeftSide pl-[30px] w-[252px] bg-[#21242D] border-x-[#2D2E34] border-r'>
            <img className='mt-[20px]' src={logo} alt='Logo' />

            <div className='mt-[20px]'>
                <div className='text-[15px] text-[#B2B3B6]'>Menu</div>

                <div className='mt-[10px]'>
                    <div className='flex mt-[20px] border-x-[#00B9AE] border-r-2'>
                        <Icon path='imgs/home.svg' />
                        <div className='ml-[14px] text-[13px] text-[#00B9AE]'><a href='#'>Home</a></div>
                    </div>

                    <div className='flex mt-[20px]'>
                        <Icon path='imgs/discover.svg' />
                        <div className='ml-[14px] text-[13px] text-[#B2B3B6]'><a href='#'>Discover</a></div>
                    </div>

                    <div className='flex mt-[20px]'>
                        <Icon path='imgs/award.svg' />
                        <div className='ml-[14px] text-[13px] text-[#B2B3B6]'><a href='#'>Awards</a></div>
                    </div>

                    <div className='flex mt-[20px]'>
                        <Icon path='imgs/celebrities.svg' />
                        <div className='ml-[14px] text-[13px] text-[#B2B3B6]'><a href='#'>Celebrities</a></div>
                    </div>
                </div>
            </div>

            <div className='mt-[25px]'>
                <div className='text-[15px] text-[#B2B3B6]'>Library</div>

                <div className='mt-[10px]'>
                    <div className='flex mt-[20px]'>
                        <Icon path='imgs/recent.svg' />
                        <div className='ml-[14px] text-[13px] text-[#B2B3B6]'><a href='#'>Recent</a></div>
                    </div>

                    <div className='flex mt-[20px]'>
                        <Icon path='imgs/toprated.svg' />
                        <div className='ml-[14px] text-[13px] text-[#B2B3B6]'><a href='#'>Rated</a>Top </div>
                    </div>

                    <div className='flex mt-[20px]'>
                        <Icon path='imgs/downloaded.svg' />
                        <div className='ml-[14px] text-[13px] text-[#B2B3B6]'><a href='#'>Downloaded</a></div>
                    </div>

                    <div className='flex mt-[20px]'>
                        <Icon path='imgs/playlists.svg' />
                        <div className='ml-[14px] text-[13px] text-[#B2B3B6]'><a href='#'>Playlists</a></div>
                    </div>

                    <div className='flex mt-[20px]'>
                        <Icon path='imgs/watchlist.svg' />
                        <div className='ml-[14px] text-[13px] text-[#B2B3B6]'><a href='#'>Watchlist</a></div>
                    </div>

                    <div className='flex mt-[20px]'>
                        <Icon path='imgs/completed.svg' />
                        <div className='ml-[14px] text-[13px] text-[#B2B3B6]'><a href='#'>Completed</a></div>
                    </div>
                </div>
            </div>

            <div className='mt-[25px]'>
                <div className='text-[15px] text-[#B2B3B6]'>General</div>

                <div className='mt-[10px]'>
                    <div className='flex mt-[20px]'>
                        <Icon path='imgs/settings.svg' />
                        <div className='ml-[14px] text-[13px] text-[#B2B3B6]'><a href='#'>Settings</a></div>
                    </div>

                    <div className='flex mt-[20px]'>
                        <Icon path='imgs/logout.svg' />
                        <div className='ml-[14px] text-[13px] text-[#B2B3B6]'><a href='#'>Log Out</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;