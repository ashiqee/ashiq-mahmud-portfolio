import { useQuery } from "@tanstack/react-query";
import TextHover from "../../Components/Text/TextHover";
import axios from "axios";
import ProjectCard from "./projectCard";
import { Link } from "react-router-dom";


const Portfolio = () => {

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
        <div id="portfolio" className=" text-white container mx-auto   p-5 md:p-5">
            <div className="text-center mt-10 md:mt-0 text-xl md:text-4xl">
                <TextHover> My Recent Projects</TextHover>
                <p className="text-sm my-2">Explore some of my latest MERN stack projects, highlighting the technologies used and their unique features.</p>
            </div>
            <div className="grid grid-cols-1 justify-center mb-10 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    data.slice(0,3).map(project => <ProjectCard key={project.id} project={project} ></ProjectCard>)
                }
                  
            </div>
            <Link className="flex items-center justify-center" to='/projects'>
                        <button className="btn text-center btn-primary">More Projects</button>
                    </Link>
        </div>
    );
};

export default Portfolio;