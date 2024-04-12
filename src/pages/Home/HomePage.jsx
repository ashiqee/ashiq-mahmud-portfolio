import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/LinkNavbar';
import NewNavbar from '../../Components/Navbar/Navbar';
import Banner from './Banner';
import AboutUs from '../AboutUs/AboutUs';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import ContactMe from '../ContactMe/ContactMe';

const HomePage = () => {


    const activeCSS = `md:border border-[#00FFFF] text-[#00FFFF] pr-2  my-1 rounded-md`;
    const menuNormalCSS = ` md:border pr-2 hover:border-[#00FFFF] hover:text-[#00FFFF]  rounded-md`;


    return (
        <div>
            <div className='fixed z-50 w-full py-2'> <NewNavbar/></div>
            <div className="fixed flex flex-col gap-5 z-50 p-2  ml-2 right-0 text-white  top-10 py-5 text-xl md:text-4xl  ">
        <Navbar />
      </div>
           <div className='space-y-10'>
           <Banner/>
            <AboutUs/>
            <Skills/>
            <Portfolio/>
            <ContactMe/>
            
           </div>
            
        </div>
    );
};

export default HomePage;