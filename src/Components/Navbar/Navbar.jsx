import React from "react";
// import Toggle from "../Toggle/Toggle";
// import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import TextHover from "../Text/TextHover";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { RiContactsFill } from "react-icons/ri";

const NewNavbar = () => {
    const location = useLocation();
    const activePage = location.pathname.substring(1);

    const activeCSS = `md:border border-[#00FFFF] text-[#00FFFF] pr-2  my-1 rounded-md`;
    const menuNormalCSS = ` md:border pr-2 hover:border-[#00FFFF] hover:text-[#00FFFF]  rounded-md`;
    const iconActiveCSS = `bg-opacity- p-2 bg-[#00FFFF]   rounded-md text-black text-md`;
    const iconNorCss =
      "bg-gray-600 bg-opacity-50 rounded-md p-2  hover:bg-[#00FFFF]  hover:text-black text-xl";
    const textCSS = `hover:scale-x-110 mx-auto hidden md:block transition-transform transform`;
    
  return (
    <div className="flex items-center py-2 justify-between px-10" id="Navbar">
      {/* left */}
      <div className="">
      <h2 className="text-2xl hidden md:block text-white uppercase font-bold">
            Ashek Mahmud{" "}
            <a className="text-[#00FFFF]">
              <TextHover>Ashik</TextHover>
            </a>
          </h2>
        {/* <Toggle /> */}
      </div>
      {/* right */}
      <div className="">
        <div className="">
          <ul className="text-white flex uppercase items-center gap-4">
            <li 
             className={
                activePage === "#home" ? `${iconActiveCSS}` : `${iconNorCss}`
              }>
                <div  className="flex  rounded-md items-center gap-2">
                <a   href="#home"       
                >
                  <FaHome />
                </a>
              <a className={textCSS} href="#home">
                Home
              </a>

                </div>
            
            </li>
            <li 
             className={
                activePage === "#home" ? `${iconActiveCSS}` : `${iconNorCss}`
              }>
                <div  className="flex  rounded-md items-center gap-2">
                <a       href="#aboutUs"   
                >
                  <FcAbout />
                </a>
              <a className={textCSS} href="#aboutUs">
              About
              </a>

                </div>
            
            </li>
            <li 
             className={
                activePage === "#home" ? `${iconActiveCSS}` : `${iconNorCss}`
              }>
                <div  className="flex  rounded-md items-center gap-2">
                <a     href="#skills"     
                >
                  <GiSkills />
                </a>
              <a className={textCSS} href="#skills">
              SKILLS
              </a>

                </div>
            
            </li>
          
            <li 
             className={
                activePage === "#home" ? `${iconActiveCSS}` : `${iconNorCss}`
              }>
                <div  className="flex  rounded-md items-center gap-2">
                <a      href="#portfolio"    
                >
                  <GrProjects />
                </a>
              <a className={textCSS} href="#portfolio">
              Projects
              </a>

                </div>
            
            </li>
            <li 
             className={
                activePage === "#home" ? `${iconActiveCSS}` : `${iconNorCss}`
              }>
                <div  className="flex  rounded-md items-center gap-2">
                <a           href="#Contact"
                >
                  <RiContactsFill />
                </a>
              <a className={textCSS} href="#Contact">
              Contact
              </a>

                </div>
            
            </li>
          
           
          
          </ul>
        </div>
             </div>
    </div>
  );
};

export default NewNavbar;
