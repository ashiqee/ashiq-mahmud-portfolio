import { FaArrowAltCircleUp, FaHome, FaSkiing } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "./Banner";
import { useState } from "react";
import Portfolio from "../Portfolio/Portfolio";
import "./home.scss";
import ContactMe from './../ContactMe/ContactMe';
import Navbar from "../NavBar/Navbar";
import Skills from "../Skills/Skills";

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
    } else if (e.deltaY > 0 && activePage !== "contact") {
      handlePageChange("contact");
    } else if (e.deltaY < 0 && activePage !== "home") {
      handlePageChange("home");
    }
  };

  // const activeCSS = `border text-[#00FFFF]  rotate-90  my-12 rounded-md`;
  const activeCSS = `md:border border-[#00FFFF] text-[#00FFFF] pr-2  my-1 rounded-md`;
  const menuNormalCSS = ` md:border pr-2 hover:border-[#00FFFF] hover:text-[#00FFFF]  rounded-md`;
  const iconActiveCSS = `bg-opacity- p-2 bg-[#00FFFF]   rounded-md text-black text-xl`;
  const iconNorCss = "bg-gray-600 bg-opacity-50 rounded-md p-2  hover:bg-[#00FFFF]  hover:text-black text-xl";
  const textCSS = `hover:scale-x-110 mx-auto hidden md:block transition-transform transform`
  return (
    <div
      onWheel={handleScroll}
      className="bg-gradient-to-r  text-white from-[#0c0c1d] to-slate-700"
    >
      {/* sidebar  */}
      <div className="fixed right-0  lg:block z-40">
        <div className=" my-2 mx-10 ">
          <div
            className="flex
                 items-center 
                 justify-center    text-white   
                 gap-2"
          >
            <Link
              onClick={() => handlePageChange("home")}
              className={
                activePage === "home"
                  ? `${activeCSS}`
                  : `${menuNormalCSS}`
              }
            >
              <div className="flex items-center gap-2">
                <span
                  className={
                    activePage === "home"
                      ? `${iconActiveCSS}`
                      : `${iconNorCss}`
                  }
                >
                  <FaHome />
                </span>
                <h3 className={`${textCSS}`}>
                  HOME
                </h3>
              </div>
            </Link>
            <Link
              onClick={() => handlePageChange("about")}
              className={
                activePage === "about"
                  ? `${activeCSS}`
                  : `${menuNormalCSS}`
              }
            >
              <div className="flex items-center gap-2">
                <span
                  className={
                    activePage === "about"
                      ? `${iconActiveCSS}`
                      : `${iconNorCss}`
                  }
                >
                  <FcAbout />
                </span>
                <h3 className={`${textCSS}`}>
                  ABOUT
                </h3>
              </div>
            </Link>
            <Link
              onClick={() => handlePageChange("skills")}
              className={
                activePage === "skills"
                  ? `${activeCSS}`
                  : `${menuNormalCSS}`
              }
            >
              <div className="flex items-center gap-2">
                <span
                  className={
                    activePage === "skills"
                      ? `${iconActiveCSS}`
                      : `${iconNorCss}`
                  }
                >
                  <FaSkiing />
                </span>
                <h3 className={`${textCSS}`}>
                  SKILLS
                </h3>
              </div>
            </Link>
            <Link
              onClick={() => handlePageChange("projects")}
              className={
                activePage === "projects"
                  ? `${activeCSS}`
                  : `${menuNormalCSS}`
              }
            >
              <div className="flex items-center gap-2">
                <span
                  className={
                    activePage === "projects"
                      ? `${iconActiveCSS}`
                      : `${iconNorCss}`
                  }
                >
                  <FaSkiing />
                </span>
                <h3 className={`${textCSS}`}>
                  PROJECTS
                </h3>
              </div>
            </Link>
            <Link
              onClick={() => handlePageChange("contact")}
              className={
                activePage === "contact"
                  ? `${activeCSS}`
                  : `${menuNormalCSS}`
              }
            >
              <div className="flex items-center gap-2">
                <span
                  className={
                    activePage === "projects"
                      ? `${iconActiveCSS}`
                      : `${iconNorCss}`
                  }
                >
                  <FaSkiing />
                </span>
                <h3 className={`${textCSS}`}>
                  CONTACT
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="fixed flex flex-col gap-5 z-50 p-2  ml-2  top-0 py-5 text-xl md:text-4xl  ">
        <Navbar />
      </div>
      {/* main Home Page  */}
      <div className="overflow-y-scroll overscroll-none ">
        <section>
          {activePage === "home" && (
            <div
              className="-z-50"
              data-aos="flip-up"
              data-aos-offset="200" data-aos-delay="50"

            >
              <Banner handlePageChange={handlePageChange} />
            </div>
          )}
        </section>

        <section>
          {activePage === "about" && (
            <div data-aos="flip-left" data-aos-offset="200" data-aos-delay="50">
              <AboutUs />
            </div>
          )}
        </section>
        <section>
          {activePage === "skills" && (
            <div data-aos="flip-left" data-aos-offset="200" data-aos-delay="50">
              <Skills />
            </div>
          )}
        </section>

        {/* <section>{activePage === "skills" && <Portfolio />}</section> */}


        <section>
          {activePage === "contact" && (
            <div data-aos="flip-left" data-aos-offset="200" data-aos-delay="50">
              <ContactMe />
            </div>
          )}
        </section>
      </div>

      {/* <button
        onClick={() => handlePageChange("home")}
        className="absolute text-3xl bottom-2 right-0 p-4"
      >
        <FaArrowAltCircleUp />
      </button> */}
    </div>
  );
};

export default Home;
