
import SideMenu from "../../Components/SideMenu/SideMenu";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "./Banner";


const Home = () => {
    return (
        <div className="bg-gradient-to-r  text-white from-sky-900 to-slate-700">
            <SideMenu />
            <Banner />
            <AboutUs />

        </div>
    );
};

export default Home;