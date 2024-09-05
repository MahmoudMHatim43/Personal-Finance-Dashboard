import { useSelector } from "react-redux";
import { selectUserChoice, iconMap } from "../../../store/slices/budgetsSlice";
import { AnimateNumber } from "../../Helpers";
import { FaRegEdit } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Individual category card component
function CategoryCard({ category }) {
  const { name, amount, icon, spent } = category;
  const CatIcon = iconMap[icon];
  const ratio = spent / amount;
  const progressColor =
    ratio > 0.8 ? "bg-red-500" : ratio >= 0.65 ? "bg-yellow-500" : "bg-green-500";

  return (
    <motion.div
      initial={{ scale: 1, y: 0 }}
      whileTap={{ scale: 1.01, y: -5 }}
      whileHover={{ scale: 1.01, y: -5 }}
      className="col-span-5 sm:col-span-2 flex flex-col p-4 bg-white-b2 dark:bg-black-b2 rounded-lg shadow-md transition-all duration-300">
      <div className="flex items-center justify-between text-lg font-semibold text-gray-700 dark:text-gray-200">
        <div className="flex items-center gap-2">
          <CatIcon className="text-2xl" />
          <span>{name}</span>
        </div>
        <Link to="/settings">
          <FaRegEdit
            size={20}
            className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors"
          />
        </Link>
      </div>

      <div className="flex justify-between items-center text-xl font-medium mt-2">
        <span className="text-gray-900 dark:text-gray-100">
          $<AnimateNumber value={spent} duration={2} />
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          / ${amount.toLocaleString("en-US")}
        </span>
      </div>

      <div className="relative w-full h-2 mt-3 rounded-full bg-gray-200 dark:bg-gray-700">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${ratio * 100}%` }}
          transition={{ duration: 2 }}
          className={`absolute left-0 top-0 h-full ${progressColor}`}></motion.div>
      </div>
    </motion.div>
  );
}

function Categories() {
  const categories = useSelector(selectUserChoice);

  return (
    <section className="col-span-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
      {categories.map((category, idx) => (
        <CategoryCard key={idx} category={category} />
      ))}
    </section>
  );
}

export default Categories;
