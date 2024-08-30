import { AnimateNumber } from "../../Helpers";
import { FaRegEdit } from "react-icons/fa";
import { motion } from "framer-motion";
function CategoryCard({ cat }) {
  const { icon: Icon, color, title, precent, budget } = cat;
  const spent = budget - budget * precent;
  return (
    <motion.div
      initial={{ scale: 1, y: 0 }}
      whileTap={{ scale: 1.01, y: -5 }}
      whileHover={{ scale: 1.01, y: -5 }}
      className="col-span-5 sm:col-span-2 flex flex-col gap-4 sm:gap-10 p-2 bg-white-b2 dark:bg-black-b2 rounded-md shadow-md">
      <div className="flex items-center justify-between gap-2 text-lg font-lato font-bold">
        <div className="flex items-center gap-2">
          <Icon color={color} />
          <span>{title}</span>
        </div>
        <FaRegEdit size={20} className="cursor-pointer" />
      </div>
      <span className="flex gap-1 items-center text-small-text sm:text-body-text italic">
        $<AnimateNumber value={spent} duration={2} />
        {"/"}
        <span>$ {budget.toLocaleString("en-US")}</span>
      </span>
      <div className="relative h-2 rounded-md overflow-hidden">
        <div className="absolute inset-0 h-2 bg-black dark:bg-white opacity-20"></div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${precent * 100}%` }}
          transition={{ duration: 2 }}
          className="absolute left-0 h-2 bg-green-500"></motion.div>
      </div>
    </motion.div>
  );
}

export default CategoryCard;
