import React from 'react'

import { Routes, Route } from "react-router-dom";

import Header from './Header';
import Movies from './Movies';
import Series from './Series';
import Streaming from './Streaming';

const Home = () => {
  return (
    <div className='MainContent pl-[68px] pt-[5px] pr-[68px] pb-[68px] w-[924px] bg-[#16181E] border-x-[#2D2E34] border-r'>
        <Header/>
        <div className='content'>
            <Routes>
                <Route path='/' element={<Movies/>} />
                <Route path='streaming' element={<Streaming/>} />
                <Route path='series' element={<Series/>} />
            </Routes>
        </div>
    </div>
  )
}

export default Home;