import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredTransactions } from "../../../store/slices/budgetsSlice";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { TbDotsVertical } from "react-icons/tb";

// Component to display individual transaction information
function TransactionInformation({ data }) {
  const { source, method, amount, date, type } = data;
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <span className="col-span-1 truncate">{source}</span>
      <span className="col-span-1 text-blue-500">{method}</span>
      <span
        className="col-span-1 flex gap-1 items-center justify-center"
        style={{ color: type === "in" ? "green" : "red" }}>
        {type === "in" ? <FaPlus size={12} /> : <FaMinus size={12} />}
        {amount.toLocaleString("en-US")}
      </span>
      <div className="col-span-1 flex justify-around items-center">
        <span>{formattedDate}</span>
        <TbDotsVertical size={25} />
      </div>
    </>
  );
}

// Motion variants for animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

// Main component for displaying transaction history
function History() {
  const transactionsData = useSelector(selectFilteredTransactions);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="col-span-4 md:col-span-3 grid grid-cols-4 max-h-svh overflow-y-scroll history-section">
      {transactionsData.map((item) => (
        <motion.span
          key={item.id}
          variants={itemVariants}
          className="col-span-4 grid grid-cols-4 items-center gap-2 p-2 border-b border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
          <TransactionInformation data={item} />
        </motion.span>
      ))}
    </motion.div>
  );
}

export default History;
