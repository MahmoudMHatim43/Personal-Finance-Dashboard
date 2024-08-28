import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import {
  FaBell,
  FaHome,
  FaWallet,
  FaChartBar,
  FaExchangeAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
const pages = [
  { name: "Home", icon: FaHome },
  { name: "Budget", icon: FaWallet },
  { name: "Reports", icon: FaChartBar },
  { name: "Transactions", icon: FaExchangeAlt },
  { name: "Alerts", icon: FaBell },
  { name: "Help", icon: FaQuestionCircle },
];
function NavBar() {
  const [isActive, setIsActive] = useState("");
  const [showNav, setShowNav] = useState(false);
  const activePage = useLocation().pathname;
  useEffect(() => {
    setIsActive(activePage.slice(1));
    console.log(activePage);
  }, [activePage]);
  return (
    <header className="col-span-12 bg-white-b2 dark:bg-black-b2">
      <nav className="flex items-center justify-between w-[95%] mx-auto">
        <TfiMenuAlt
          size={30}
          onClick={() => setShowNav(!showNav)}
          className="block md:hidden cursor-pointer"
        />
        <h1 className="p-1 text-logo-name text-blue-400 font-bree font-bold tracking-wider">
          iFinance
        </h1>
        <motion.ul
          initial={{ left: "-100%", opacity: 0 }}
          animate={{ left: showNav ? 0 : "-100%", opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 z-50 md:static flex flex-col md:flex-row md:flex-grow justify-evenly w-1/3 md:w-auto p-4 md:p-0 h-full bg-white-b2 dark:bg-black-b2 text-body-text">
          <RxCross2
            size={30}
            onClick={() => setShowNav(!showNav)}
            className="block md:hidden cursor-pointer"
          />
          {pages.map((page) => (
            <NavLink
              to={`/${page.name.toLowerCase()}`}
              onClick={() => setShowNav(false)}
              className="flex items-center gap-2">
              <page.icon size={20} className="block md:hidden" />
              <span
                className={
                  page?.name.toLowerCase() === isActive &&
                  "text-orange-500 duration-500"
                }>
                {page.name}
              </span>
            </NavLink>
          ))}
        </motion.ul>
        <div className="flex items-center justify-between h-full p-1">
          <div className="flex items-center gap-4">
            <MdSettings size={20} />
            <FaBell size={20} />
            <div className="bg-gray-500 w-10 h-10 rounded-full">
              {/* Avatar */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
