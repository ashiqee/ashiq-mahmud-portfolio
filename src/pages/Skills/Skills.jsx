import { FaHtml5 } from "react-icons/fa";
import { motion } from "framer-motion"


const skillData = [


    { "id": 1, "img": "https://github.com/tandpfun/skill-icons/raw/main/icons/JavaScript.svg" },
    { "id": 2, "img": "https://github.com/tandpfun/skill-icons/raw/main/icons/HTML.svg" },
    { "id": 3, "img": "https://github.com/tandpfun/skill-icons/raw/main/icons/MongoDB.svg" },
    { "id": 4, "img": "https://github.com/tandpfun/skill-icons/raw/main/icons/NodeJS-Dark.svg" },
    { "id": 5, "img": "https://github.com/tandpfun/skill-icons/raw/main/icons/React-Dark.svg" },
    { "id": 6, "img": "https://github.com/tandpfun/skill-icons/raw/main/icons/ExpressJS-Dark.svg" },
    { "id": 7, "img": "https://github.com/tandpfun/skill-icons/raw/main/icons/Firebase-Dark.svg" },
    { "id": 8, "img": "https://github.com/tandpfun/skill-icons/raw/main/icons/Vite-Dark.svg" },
    { "id": 9, "img": "https://github.com/tandpfun/skill-icons/raw/main/icons/CSS.svg" },
    { "id": 10, "img": "https://github.com/tandpfun/skill-icons/raw/main/icons/TailwindCSS-Dark.svg" },
    { "id": 11, "img": "https://github.com/tandpfun/skill-icons/raw/main/icons/VSCode-Dark.svg" },
    { "id": 12, "img": "https://github.com/tandpfun/skill-icons/raw/main/icons/Postman.svg" },
    // { "id": 13, "img": "https://github.com/tandpfun/skill-icons/raw/main/icons/Github-Dark.svg" },

]

const Skills = () => {
    return (
        <div className="container mx-auto pt-20 my-auto min-h-screen">
            <div className="text-center  ">
                <div className="pb-10">
                    <h2>What i Do</h2>
                    <p>Some Text</p>
                </div>
                <div className="grid max-w-screen-lg md:mx-auto mx-10   lg:grid-cols-6 md:grid-cols-4  grid-cols-3 justify-around gap-5">


                    {skillData.map(data =>
                        <div className=" w-32" key={data.id}>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ rotate: 360, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                            >
                                <div className=" w-32">

                                    <img className="mask mask-circle object-fit"
                                        src={data.img} />

                                </div>
                            </motion.div> </div>)

                    }



                    <img className='animate-bounce ' src="https://github.com/tandpfun/skill-icons/raw/main/icons/Github-Dark.svg" alt="" />




                </div>
            </div>
        </div >
    );
};

export default Skills;