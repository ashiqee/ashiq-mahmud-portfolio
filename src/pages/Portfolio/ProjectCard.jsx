import { Link } from "react-router-dom";


const ProjectCard = ({ project }) => {
    const { title, description, technologies, image, link, id, githubLink } = project;
    return (


        <div className="card md:w-96 z-20 md:z-40 glass">
            <figure><img className="h-60 w-full" src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title text-[#00FFFF]">{title}</h2>
                <p className="text-sm">{description}</p>

                <div className="flex gap-1 justify-start flex-wrap">

                    {technologies?.map((tech, index) => (
                        <span key={index} className="inline-block rounded-full  py-1 text-sm font-sm text-[#00FFFF] mr-2">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="card-actions justify-end">
                    <Link target="_blank" to={link}>
                        <button className="btn btn-outline text-[#00FFFF]">Live Link</button>
                    </Link>
                    <Link to={githubLink}>
                        <button className="btn btn-primary">Project Details!</button>
                    </Link>
                </div>
            </div>
        </div>
        // <div className="max-w-xs  mx-auto overflow-hidden rounded shadow-lg">
        //     <img className="w-full h-48 object-cover" src={image} alt={title} />
        //     <div className="px-0 py-4">
        //         <div className="font-bold text-xl mb-2">{title}</div>
        //         <p className="text-gray-700 text-base">{description?.splite(0, 100)}</p>
        //     </div>
        //     <div className="px-6 pt-4 pb-2">
        //         <div className="flex space-x-2">
        //             {technologies?.map((tech, index) => (
        //                 <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        //                     {tech}
        //                 </span>
        //             ))}
        //         </div>
        //     </div>
        // </div>
    );
};

export default ProjectCard;