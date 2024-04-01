import { useQuery } from "@tanstack/react-query";
import TextHover from "../../Components/Text/TextHover";
import axios from "axios";
import ProjectCard from "./projectCard";


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
    );
};

export default Portfolio;