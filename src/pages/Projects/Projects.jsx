import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import TextHover from "../../Components/Text/TextHover";
import ProjectCard from "../Portfolio/projectCard";
import NewNavbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";


const Projects = () => {
    const { data, isLoading, error, } = useQuery({
        queryKey: ['projectsData'],
        queryFn: async () => {
            const res = await axios.get('projectsData.json')
            return res.data
        }
    }
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    return (
   <div className="p-6 px-2">
  <div>
    <Link to='/'>
    <div className="">
      <h2 className="text-2xl hidden md:block text-white uppercase font-bold">
            Ashek Mahmud{" "}
            <a className="text-[#00FFFF]">
              <TextHover>Ashik</TextHover>
            </a>
          </h2>
        {/* <Toggle /> */}
      </div>
    </Link>
  </div>
         <div id="portfolio" className="min-h-screen text-white container mx-auto   p-10 md:p-20">
        <div className="text-center mt-10 md:mt-0 text-xl md:text-4xl">
            <TextHover> My Recent Projects</TextHover>
            <p className="text-sm my-2">Explore some of my latest MERN stack projects, highlighting the technologies used and their unique features.</p>
        </div>
        <div className="grid grid-cols-1 justify-center mb-10 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                data.map(project => <ProjectCard key={project.id} project={project} ></ProjectCard>)
            }
        </div>
    </div>
   </div>
    );
};

export default Projects;