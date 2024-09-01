import "./App.css";
import SideBar from "./Components/SideBar";
import Body from "./Components/Body";
import { useSelector } from "react-redux";
import { selectIsSideBarOpen } from "../store/slices/navSlice";
import { motion } from "framer-motion";

/* APP */
function App() {
  const isOpen = useSelector(selectIsSideBarOpen);
  return (
    <div className="main-grid grid bg-white-b1 dark:bg-black-b1 text-white-t1 dark:text-black-t1">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: isOpen ? "250px" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="side-part">
        <SideBar />
      </motion.div>
      <main className="body-part">
        <Body />
      </main>
    </div>
  );
}

export default App;
