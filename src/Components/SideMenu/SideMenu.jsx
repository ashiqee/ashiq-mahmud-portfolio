import { Fa500Px, FaAward, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideMenu = () => {
    return (
        <div className="fixed right-8 h-full w-12 ">
            <div className=" border-2  h-full  my-auto">
                <div className="grid grid-rows-6 justify-center place-content-center border-2 text-3xl   my-auto gap-5">

                    <Link >
                        <FaHome />
                    </Link>
                    <Link>
                        <FaAward />
                    </Link>
                    <Link>
                        <Fa500Px />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;