import profileImg from "../../assets/images/ashiq.png";

import Navbar from "../NavBar/Navbar";
const Banner = () => {
  return (
    <div>
      <div className="absolute text-9xl font-extrabold opacity-10 w-full bottom-0">
        <div className="relative flex overflow-x-hidden">
          <div className="py-12 animate-marquee whitespace-nowrap">
            <span className=" mx-96"> ASHEK MAHMUD ASHIK</span>
          </div>

          <div className="absolute  py-12 animate-marquee2 whitespace-nowrap">
            <span className=" mx-96">ASHEK MAHMUD ASHIK</span>
          </div>
        </div>
      </div>

      <div className="h-screen  md:flex flex md:flex-row flex-col-reverse items-center justify-between mx-auto container">
        <div className="flex gap-5 absolute top-0 py-10 text-4xl  ">
          <Navbar />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl  uppercase font-bold">
            Ashek Mahmud <span className="text-[#00FFFF]">Ashik</span>
          </h2>
          <h2 className="text-6xl font-extrabold">
            <span className="text-[#00FFFF]">MERN</span> STACK <br /> DEVELOPER
          </h2>
          <div className="flex gap-5 mt-10">
            <button className="btn text-white hover:text-[#00FFFF] btn-outline">
              GET RESUME
            </button>
            <button className="btn text-[#00FFFF] btn-outline">
              CONTACT ME
            </button>
          </div>
        </div>
        <div
          data-aos="flip-fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="-z-50"
        >
          <img className="md:h-screen" src={profileImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
