import { Fa500Px, FaArrowAltCircleUp, FaAward, FaBackward, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "./Banner";
import { useState } from "react";
import Portfolio from "../Portfolio/Portfolio";


const Home = () => {
    const [activePage, setActivePage] = useState('home')

    const handlePageChange = (page) => {
        setActivePage(page)
    }


    const handleScroll = (e) => {
        if (e.deltaY > 0 && activePage !== 'about') {

            handlePageChange("about")
        } else if (e.deltaY > 0 && activePage !== 'portfolio') {
            handlePageChange('portfolio')
        }



        else if (e.deltaY < 0 && activePage !== 'home') {
            handlePageChange("home")
        }

    }
    return (
        <div onWheel={handleScroll} className="bg-gradient-to-r  text-white from-sky-900 to-slate-700">

            {/* sidebar  */}
            <div className="fixed right-0  ">
                <div className=" ">
                    <div className="grid 
                 items-center 
                 justify-center w-1/2 my-48  text-white  text-3xl  
                 gap-2">

                        <Link onClick={() => handlePageChange('home')} className="bg-gray-600 bg-opacity-50 p-2 rounded-lg" >
                            <FaHome />
                        </Link>
                        <Link onClick={() => handlePageChange('about')} className="bg-gray-600 bg-opacity-50 p-2  rounded-lg">
                            <FaAward />
                        </Link>
                        <Link onClick={() => handlePageChange('portfolio')} className="bg-gray-600 bg-opacity-50 p-2  rounded-lg">
                            <Fa500Px />
                        </Link>
                    </div>
                </div>
            </div>

            {/* main Home Page  */}
            <div className="overflow-y-auto">

                {activePage === 'home' && <Banner />}
                {activePage === 'about' && <AboutUs />}
                {activePage === 'portfolio' && <Portfolio />}

            </div>

            <button onClick={() => handlePageChange("home")} className="absolute text-3xl bottom-2 right-0 p-4">
                <FaArrowAltCircleUp />
            </button>

        </div>
    );
};

export default Home;