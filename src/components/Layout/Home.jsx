import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Info from '../Info/Info';
import Slider from '../../SlideShow/Slide';
import Footer from '../Header/Footer';
import png from "../Header/2.png"



const Home = () => {
    return (
        <div style={{ height: '100px' }}>
            <Header></Header>
            <Slider></Slider>
            <Outlet></Outlet>
            <Footer></Footer>
        </div >
    );
};

export default Home;