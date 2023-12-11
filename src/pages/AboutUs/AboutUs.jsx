import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const AboutUs = () => {
  const data = [
    {
      label: "Main skills",
      value: "mainSkills",
      desc: <>MERN STACK DEVELOPER</>,
    },
    {
      label: "Education & Certification",
      value: "education",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },

    {
      label: "Awards",
      value: "awards",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <div
      id="aboutUs"
      className="h-screen items-center justify-between mx-auto container"
    >
      <div className="grid grid-cols-3  ">
        <div className="text-right  py-28 mr-5">
          <img
            className="rounded-e-md "
            src="https://cadmore.media/wp-content/uploads/2022/05/digital-web-designer-900x900-1-495x400.jpg"
            alt=""
          />
        </div>
        <div className="col-span-2 py-28 space-y-6">
          <div className="space-y-6">
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
          <Tabs id="custom-animation" value="html">
            <TabsHeader>
              {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
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
