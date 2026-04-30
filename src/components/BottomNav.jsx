import { NavLink } from "react-router";

import HomeIcon from "../assets/svg/HomeIcon.svg?react";
import SearchIcon from "../assets/svg/SearchIcon.svg?react"; 
import BellIcon from "../assets/svg/BellIcon.svg?react";
import MessageIcon from "../assets/svg/MessageIcon.svg?react";

export default function BottomNav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 h-20 z-40 flex justify-around items-center pb-3 bg-bg border-primary-line border-t">
            
            <NavLink to="/" end className={({ isActive }) => `flex justify-center items-center w-10 h-10 transition-all duration-300 ${isActive ? 'text-accent' : 'text-text-secondary'}`}>
                <HomeIcon className="w-6 h-6" />
            </NavLink>

            <NavLink to="/trends" end className={({ isActive }) => `flex justify-center items-center w-10 h-10 transition-all duration-300 ${isActive ? 'text-accent' : 'text-text-secondary'}`}>
                <SearchIcon className="w-6 h-6" />
            </NavLink>

            <NavLink to="/notifications" end className={({ isActive }) => `flex justify-center items-center w-10 h-10 transition-all duration-300 ${isActive ? 'text-accent' : 'text-text-secondary'}`}>
                <BellIcon className="w-6 h-6" />
            </NavLink>

            <NavLink to="/messages" end className={({ isActive }) => `flex justify-center items-center w-10 h-10 transition-all duration-300 ${isActive ? 'text-accent' : 'text-text-secondary'}`}>
                <MessageIcon className="w-6 h-6" />
            </NavLink>
            
        </nav>
    );
}