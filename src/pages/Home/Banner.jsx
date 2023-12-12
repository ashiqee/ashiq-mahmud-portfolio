
import profileImg from "../../assets/images/ashiq.png";
import TextHover from "../../Components/Text/TextHover";

import Navbar from "../NavBar/Navbar";
const resumePdf_URL = "http://localhost:5173/Ashik_Mahmud_Resume.pdf"
const Banner = ({ handlePageChange }) => {


  const downloadPdf = (url) => {
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url;
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()

  }
  return (
    <div className="overscroll-none">
      <div className="absolute z-0 text-9xl font-extrabold opacity-10 w-full bottom-0">
        <div className="relative  flex overflow-x-hidden">
          <div className="py-12 animate-marquee whitespace-nowrap">
            <span className=" mx-96"> ASHEK MAHMUD ASHIK</span>
          </div>

          <div className="absolute  py-12 animate-marquee2 whitespace-nowrap">
            <span className=" mx-96">ASHEK MAHMUD ASHIK</span>
          </div>
        </div>
      </div>

      <div className="min-h-screen  md:flex flex md:flex-row flex-col-reverse items-center justify-start md:justify-between mx-auto container">
        {/* <div className="md:flex gap-5 absolute hidden top-0 py-10 text-4xl  ">
          <Navbar />
        </div> */}
        <div className="space-y-6 mt-5 md:mt-0 z-20 ">
          <h2 className="text-2xl  uppercase font-bold">
            Ashek Mahmud{" "}
            <span className="text-[#00FFFF]">
              <TextHover>Ashik</TextHover>
            </span>
          </h2>
          <h2 className="md:text-6xl text-5xl font-extrabold">
            <span className="text-[#00FFFF]">MERN</span> STACK <br /> DEVELOPER
          </h2>
          <div className="flex   gap-5">

            <button onClick={() => { downloadPdf(resumePdf_URL) }} className="btn text-white hover:text-[#00FFFF] btn-outline">
              GET RESUME
            </button>

            <button onClick={() => handlePageChange("contact")} className="btn text-[#00FFFF] btn-outline">
              CONTACT ME
            </button>
          </div>
          <div className="flex md:hidden gap-5 absolute  py-5 text-4xl  ">
            <Navbar />
          </div>
        </div>
        <div
          data-aos="flip-fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="-z-50"
        >
          <img className="md:h-screen h-[600px] w-full mx-auto " src={profileImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
