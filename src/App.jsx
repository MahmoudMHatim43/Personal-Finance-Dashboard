import "./App.css";
import SideBar from "./Components/SideBar";
import Body from "./Components/Body";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

/* APP */
function App() {
  const { isSideBarOpen } = useSelector((state) => state.nav);
  return (
    <div className="main-grid grid gap-5 bg-white-b1 dark:bg-black-b1 text-white-t1 dark:text-black-t1">
      <motion.div
        initial={{ display: isSideBarOpen ? 0 : "250px", opacity: 0 }}
        animate={{
          width: isSideBarOpen ? "250px" : 0,
          opacity: isSideBarOpen ? 1 : 0,
        }}
        className="side-part">
        <SideBar />
      </motion.div>
      <main className="body-part border">
        <Body />
      </main>
    </div>
  );
}

export default App;
