import { Outlet } from "react-router-dom";
import SideMenu from "../Components/SideMenu/SideMenu";

const Main = () => {
    return (
        <div>
            <SideMenu />
            <Outlet />
        </div>
    );
};

export default Main;