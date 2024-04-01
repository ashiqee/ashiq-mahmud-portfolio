import React from "react";
// import Toggle from "../Toggle/Toggle";
// import "./Navbar.css";
import { Link } from "react-router-dom";
import TextHover from "../Text/TextHover";

const NewNavbar = () => {
  return (
    <div className="flex items-center py-2 justify-between px-10" id="Navbar">
      {/* left */}
      <div className="">
      <h2 className="text-2xl text-white uppercase font-bold">
            Ashek Mahmud{" "}
            <span className="text-[#00FFFF]">
              <TextHover>Ashik</TextHover>
            </span>
          </h2>
        {/* <Toggle /> */}
      </div>
      {/* right */}
      <div className="">
        <div className="">
          <ul className="text-white flex uppercase items-center gap-4">
            <li>
              <a href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#aboutUs" >
                About
              </a>
            </li>
            <li>
              <a href="#skills" >
                SKILLS
              </a>
            </li>
            <li>
              <a href="#portfolio" >
                Projects
              </a>
            </li>
            <li>
              <a href="#Contact" >
                Contact
              </a>
            </li>
          </ul>
        </div>
             </div>
    </div>
  );
};

export default NewNavbar;
