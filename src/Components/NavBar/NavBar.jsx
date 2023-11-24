import React from "react";
import { NavLink } from "react-router-dom";



const NavBar = () => {

   
    
    const link = <>
       <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to='/donation'>Donation</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
    </>
    return (
        <div>
            <div className="flex justify-between items-center mt-12 z-20">
                <div className="">
                    <img src="/public/images/Logo.png" alt="" />
                </div>
                <div className="">
                    <ul className="flex gap-6 lg:gap-12">
                        {link}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default NavBar;