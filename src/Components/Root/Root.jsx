import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
// import { useLocation, redirect } from "react-router-dom";


const Root = () => {
    // const location = useLocation();
    
    // // const isHome = location.pathname === "/home" || location.pathname === "/";
    // // const redkt = () =>{
    // //     if(isHome){
    // //         console.log('redirect')
    // //         redirect("/login");
            
    // //     }
    // // };
    // redkt();
    return (
        <div className="max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mb-44">
            <NavBar></NavBar>           
            <Outlet></Outlet>
        </div>
    );
};

export default Root;