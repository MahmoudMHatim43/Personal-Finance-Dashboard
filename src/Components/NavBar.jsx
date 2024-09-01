import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../../store/slices/navSlice";
import { NavLink } from "react-router-dom";
// icons
import { FaBell, FaHome } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const isItTop = navRef.current.getBoundingClientRect().top;
      setScrolled(isItTop === 12);
    };
    document
      .querySelector(".body-part")
      .addEventListener("scroll", handleScroll);
    return () =>
      document
        .querySelector(".body-part")
        .removeEventListener("scroll", handleScroll);
  }, []);
  const dispatch = useDispatch();

  return (
    <header
      className={`sticky top-1 z-50 w-[95%] mx-auto mt-8 p-2 rounded-xl transition-colors duration-300 ${
        scrolled
          ? "bg-[rgba(225,225,255,0.5)] dark:bg-[rgba(0,0,0,0.5)] backdrop-blur-md"
          : ""
      }`}>
      <nav ref={navRef} className="flex items-center justify-between">
        {/* Burger Menu Icon */}
        <div className="flex items-center gap-4">
          <TfiMenuAlt
            onClick={() => dispatch(toggleSideBar())}
            size={25}
            className="cursor-pointer"
            aria-label="toggle sidebar"
          />
          <NavLink to="/home" className="hover:text-blue-400 duration-500">
            <FaHome size={20} />
          </NavLink>
          <div className="flex items-center gap-4">
            <NavLink
              to="/home"
              className="dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 duration-500">
              Home
            </NavLink>
            <NavLink
              to="/budget"
              className="dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 duration-500">
              Budget
            </NavLink>
            <NavLink
              to="/reports"
              className="dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 duration-500">
              Reports
            </NavLink>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <NavLink
            to="/settings"
            className="hover:text-blue-400 cursor-pointer duration-500">
            <MdSettings size={20} aria-label="settings" />
          </NavLink>
          <FaBell
            size={20}
            aria-label="alerts"
            className="hover:text-blue-400 cursor-pointer duration-500"
          />
          <div
            className="bg-gray-500 w-10 h-10 rounded-full cursor-pointer"
            aria-label="user profile">
            {/* Avatar */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
