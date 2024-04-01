import { Outlet } from "react-router-dom";
import NewNavbar from "../Components/Navbar/Navbar";


const Main = () => {
  return (
    <div>
    
      <Outlet />
    </div>
  );
};

export default Main;
