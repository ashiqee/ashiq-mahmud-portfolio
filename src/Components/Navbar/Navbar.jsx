import React from "react";
// import Toggle from "../Toggle/Toggle";
// import "./Navbar.css";
import {  useLocation } from "react-router-dom";
import TextHover from "../Text/TextHover";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { RiContactsFill } from "react-icons/ri";

const NewNavbar = () => {
  const location = useLocation();
  const activePage = location.pathname.substring(1);
  console.log(activePage);

  const activeCSS = `md:border border-[#00FFFF] text-[#00FFFF] pr-2  my-1 rounded-md`;
  const menuNormalCSS = ` md:border pr-2 hover:border-[#00FFFF] hover:text-[#00FFFF]  rounded-md`;
  const iconActiveCSS = `bg-opacity- p-2 bg-[#00FFFF]   rounded-md text-black text-sm`;
  const iconNorCss =
    "bg-gray-600 bg-opacity-50 rounded-md p-2  hover:bg-[#00FFFF]  hover:text-black text-sm";
  const textCSS = `hover:scale-x-110 mx-auto hidden md:block transition-transform transform`;


  const menuData = [

    {
      menuLabel: "Home",
      menuIcon: <FaHome />,
      menuPath: "#home",
    },
    {
      menuLabel: "About",
      menuIcon: <FcAbout />,
      menuPath: "#aboutUs",
    },
    {
      menuLabel: "Skills",
      menuIcon: <GiSkills />,
      menuPath: "#skills",
    },
    {
      menuLabel: "Projects",
      menuIcon: <GrProjects />,
      menuPath: "#portfolio",
    },
    {
      menuLabel: "Contact",
      menuIcon: <RiContactsFill />,
      menuPath: "#Contact",
    },
  ]




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
        <ul className="text-white flex uppercase items-center gap-4">
          {
            menuData?.map((item, i) => <li key={i}
              className={
                activePage === item.menuPath ? `${iconActiveCSS}` : `${iconNorCss}`
              }>
              <a href={item.menuPath}       >
                <div className="flex  rounded-md items-center gap-2">
                  {item.menuIcon}
                  <h3 className={textCSS}>
                    {item.menuLabel}
                  </h3>
                </div>
              </a>



            </li>)
          }
        </ul>

      </div>
    </div>
  );
};

export default NewNavbar;
