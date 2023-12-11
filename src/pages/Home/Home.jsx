import { FaArrowAltCircleUp, FaHome, FaSkiing } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "./Banner";
import { useState } from "react";
import Portfolio from "../Portfolio/Portfolio";
import "./home.scss";

const Home = () => {
  const [activePage, setActivePage] = useState("home");

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const handleScroll = (e) => {
    if (e.deltaY > 0 && activePage !== "about") {
      handlePageChange("about");
    } else if (e.deltaY > 0 && activePage !== "skills") {
      handlePageChange("skills");
    } else if (e.deltaY > 0 && activePage !== "projects") {
      handlePageChange("projects");
    } else if (e.deltaY < 0 && activePage !== "home") {
      handlePageChange("home");
    }
  };
  return (
    <div
      onWheel={handleScroll}
      className="bg-gradient-to-r  text-white from-[#0c0c1d] to-slate-700"
    >
      {/* sidebar  */}
      <div className="fixed right-0  ">
        <div className=" ">
          <div
            className="grid 
                 items-center 
                 justify-center w-1/2 my-48  text-white   
                 gap-2"
          >
            <Link
              onClick={() => handlePageChange("home")}
              className={
                activePage === "home"
                  ? "border text-[#00FFFF] rotate-90 my-12 rounded-md"
                  : " border border-red-200 pr-4  hover:text-[#00FFFF]  rounded-md"
              }
            >
              <div className="flex items-center gap-2">
                <span
                  className={
                    activePage === "home"
                      ? "bg-opacity-50 w-12 p-4 bg-[#00FFFF] -rotate-90  text-black text-xl"
                      : "bg-gray-600 bg-opacity-50 w-12 p-4  hover:bg-[#00FFFF]  hover:text-black text-xl"
                  }
                >
                  <FaHome />
                </span>
                <h3 className="hover:scale-x-110 mx-auto transition-transform transform">
                  HOME
                </h3>
              </div>
            </Link>
            <Link
              onClick={() => handlePageChange("about")}
              className={
                activePage === "about"
                  ? "border text-[#00FFFF] rotate-90 my-12 rounded-md"
                  : " border border-red-200 pr-4  hover:text-[#00FFFF]  rounded-md"
              }
            >
              <div className="flex items-center gap-2">
                <span
                  className={
                    activePage === "about"
                      ? "bg-opacity-50 w-12 p-4 bg-[#00FFFF] -rotate-90 text-black text-xl"
                      : "bg-gray-600 bg-opacity-50 w-12 p-4  hover:bg-[#00FFFF]  hover:text-black text-xl"
                  }
                >
                  <FcAbout />
                </span>
                <h3 className="hover:scale-x-110 mx-auto transition-transform transform">
                  ABOUT
                </h3>
              </div>
            </Link>
            <Link
              onClick={() => handlePageChange("skills")}
              className={
                activePage === "skills"
                  ? "border text-[#00FFFF] rotate-90 my-12 rounded-md"
                  : " border border-red-200 pr-4  hover:text-[#00FFFF]  rounded-md"
              }
            >
              <div className="flex items-center gap-2">
                <span
                  className={
                    activePage === "skills"
                      ? "bg-opacity-50 w-12 p-4 bg-[#00FFFF] -rotate-90  text-black text-xl"
                      : "bg-gray-600 bg-opacity-50 w-12 p-4  hover:bg-[#00FFFF]  hover:text-black text-xl"
                  }
                >
                  <FaSkiing />
                </span>
                <h3 className="hover:scale-x-110 mx-auto  transition-transform transform">
                  SKILLS
                </h3>
              </div>
            </Link>
            <Link
              onClick={() => handlePageChange("projects")}
              className={
                activePage === "projects"
                  ? "border pr-4  text-[#00FFFF] rotate-90 my-12 rounded-md"
                  : " border border-red-200 pr-4  hover:text-[#00FFFF]  rounded-md"
              }
            >
              <div className="flex items-center gap-2">
                <span
                  className={
                    activePage === "projects"
                      ? "bg-opacity-50 w-12 p-4 bg-[#00FFFF] -rotate-90 text-black text-xl"
                      : "bg-gray-600 bg-opacity-50 w-12 p-4  hover:bg-[#00FFFF]  hover:text-black text-xl"
                  }
                >
                  <FaSkiing />
                </span>
                <h3 className="hover:scale-x-110 mx-auto  transition-transform transform">
                  PROJECTS
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* main Home Page  */}
      <div className="overflow-y-auto">
        <section>{activePage === "home" && <Banner />}</section>
        <section>{activePage === "about" && <AboutUs />}</section>

        <section>{activePage === "skills" && <Portfolio />}</section>
      </div>

      <button
        onClick={() => handlePageChange("home")}
        className="absolute text-3xl bottom-2 right-0 p-4"
      >
        <FaArrowAltCircleUp />
      </button>
    </div>
  );
};

export default Home;
