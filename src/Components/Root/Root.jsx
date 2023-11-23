import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto mb-44 relative">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;