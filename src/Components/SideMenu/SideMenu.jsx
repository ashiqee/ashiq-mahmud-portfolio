import { Fa500Px, FaAward, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideMenu = () => {
    return (
        <div className="fixed right-0  ">
            <div className=" ">
                <div className="grid 
                 items-center 
                 justify-center w-1/2 my-48  text-white  text-3xl  
                 gap-2">

                    <Link className="bg-gray-600 bg-opacity-50 p-2 rounded-lg" >
                        <FaHome />
                    </Link>
                    <Link to="#aboutUs" className="bg-gray-600 bg-opacity-50 p-2  rounded-lg">
                        <FaAward />
                    </Link>
                    <Link className="bg-gray-600 bg-opacity-50 p-2  rounded-lg">
                        <Fa500Px />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;