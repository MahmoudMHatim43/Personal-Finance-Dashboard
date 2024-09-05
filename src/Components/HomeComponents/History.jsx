import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredTransactions } from "../../../store/slices/budgetsSlice";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { TbDotsVertical } from "react-icons/tb";

function TransactionInformation({ data }) {
  const { source, method, amount, date, type } = data;

  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="grid grid-cols-4 items-center gap-4 p-2">
      <span className="truncate font-medium text-gray-700 dark:text-gray-300 col-span-1">
        {source}
      </span>
      <span className="text-blue-500 col-span-1">{method}</span>
      <span
        className={`flex gap-1 items-center justify-center font-semibold col-span-1 ${
          type === "in" ? "text-green-500" : "text-red-500"
        }`}>
        {type === "in" ? <FaPlus size={12} /> : <FaMinus size={12} />}
        {amount.toLocaleString("en-US")}
      </span>
      <div className="col-span-1 flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">{formattedDate}</span>
        <TbDotsVertical className="text-gray-400 dark:text-gray-500" size={20} />
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

function History() {
  const transactionsData = useSelector(selectFilteredTransactions);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="col-span-4 md:col-span-3 bg-white dark:bg-gray-900 shadow-md rounded-lg max-h-[60vh] overflow-y-auto p-4">
      {transactionsData.length > 0 ? (
        transactionsData.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="border-b border-gray-200 dark:border-gray-700 last:border-none hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors p-2 rounded-md">
            <TransactionInformation data={item} />
          </motion.div>
        ))
      ) : (
        <div className="text-center text-gray-500 dark:text-gray-400">
          No transactions available
        </div>
      )}
    </motion.div>
  );
}

export default History;
