import React from 'react'

// import { Router, Routes, Route } from "react-router-dom";

import Header from './Header';
import Movies from './Movies';
import Series from './Series';
import Streaming from './Streaming';

const Home = () => {
  return (
    <>
      <Header/>
      <Movies/>
      {/* <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Movies/>} />
            <Route path='streaming' element={<Streaming/>} />
            <Route path='series' element={<Series/>} />
        </Routes>
      </Router> */}
    </>
  )
}

export default Home;