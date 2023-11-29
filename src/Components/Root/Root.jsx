import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";



const Root = () => {
    return (
        <div className="max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mb-44">
            <NavBar></NavBar>           
            <Outlet></Outlet>
        </div>
    );
};

export default Root;