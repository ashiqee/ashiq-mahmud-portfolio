import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";


const AboutUs = () => {
  const data = [
    {
      label: "Main skills",
      value: "mainSkills",
      desc: <>
        <h2 className="text-xl text-white">MERN STACK DEVELOPER</h2>
        <hr />
        <div className="space-y-2 mt-2">
          <span className="flex gap-2 items-center text-3xl text-green-600">

            <SiMongodb /><progress className="progress progress-success w-full md:w-56" value={85} max="100"></progress>
          </span>
          <span className="flex gap-2 items-center text-3xl text-red-400">

            <SiExpress /><progress className="progress progress-error w-full md:w-56" value={80} max="100"></progress>
          </span>
          <span className="flex gap-2 items-center text-3xl text-[#00FFFF]">

            <FaReact className="animate-spin" /><progress className="progress progress-info w-full md:w-56" value={99} max="100"></progress>
          </span>

          <span className="flex gap-2 items-center text-3xl text-green-800">

            <FaNodeJs /><progress className="progress  progress-success w-full md:w-56" value={81} max="100"></progress>
          </span>
        </div>


        {/* html5 css3 javascript
        git
        react tailwind nodejs express firebase mongodb nextjs */}
      </>,
    },
    {
      label: "Education",
      value: "education",
      desc: <>
        <div>
          <h2 className="text-md text-white ">
            BSc in CSE - <span className="text-gray-300"> Canadian University of Bangladesh</span>
            <br />
            2022
          </h2>
        </div>

      </>,
    },

    // {
    //   label: "Awards",
    //   value: "awards",
    //   desc: `We're not always in the position that we want to be at.
    //       We're constantly growing. We're constantly making mistakes. We're
    //       constantly trying to express ourselves and actualize our dreams.`,
    // },
  ];
  return (
    <div
      id="aboutUs"
      className="min-h-screen text-white p-12 items-center  justify-between mx-auto container"
    >



      <div className="grid grid-cols-1 lg:grid-cols-3  ">
        <div className="text-right md:py-5 hidden md:block  lg:py-10 lg:mr-5">
          <img
            className="rounded-md h-[430px]"
            src="https://cadmore.media/wp-content/uploads/2022/05/digital-web-designer-900x900-1-495x400.jpg"
            alt=""
          />
        </div>
        <div className="col-span-2  md:py-5 lg:py-16 py-2  space-y-6">
          <div className="space-y-6 mt-10 md:mt-0">
            <h2 className="text-4xl uppercase">About Me</h2>
            <p className="text-justify">
              🔭 Hi! I am Ashik. As a MERN Stack Developer, my journey is fueled
              by a relentless ambition to learn and grow.My passion for staying
              at the for front of technology propels me to continuously expand
              my skill set. I am not just a developer; I am a perpetual learner,
              embracing challenges and transforming them into opportunities for
              innovation. Let's build the future together through code and
              creativity."
            </p>
          </div>
          <Tabs id="custom-animation" defaultIndex='mainSkills' value="html">
            <TabsHeader className="bg-[#00FFFF] w-96">
              {data.map(({ label, value }) => (
                <Tab key={value}  value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
