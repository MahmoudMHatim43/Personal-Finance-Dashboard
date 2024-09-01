import React from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { TbDotsVertical } from "react-icons/tb";

function TransactionInformation({ data }) {
  const { name, method, amount, date } = data;
  return (
    <>
      <span className="col-span-1 truncate">{name}</span>
      <span className="col-span-1 text-blue-500">{method}</span>
      <span
        className="col-span-1 flex gap-1 items-center justify-center"
        style={{ color: amount > 0 ? "green" : "red" }}>
        {amount > 0 ? <FaPlus size={12} /> : <FaMinus size={12} />}
        {amount.toLocaleString("en-US")}
      </span>
      <div className="col-span-1 flex justify-around items-center">
        <span>{date}</span>
        <TbDotsVertical size={25} />
      </div>
    </>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function History() {
  const transactionData = {
    name: "Binance",
    method: "Bank Transfer",
    amount: 4530,
    date: "2022-01-01",
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="col-span-4 md:col-span-3 grid grid-cols-4 max-h-svh overflow-y-scroll history-section">
      {[...Array(40)].map((_, idx) => (
        <motion.span
          key={idx}
          variants={itemVariants}
          className="col-span-4 grid grid-cols-4 items-center gap-2 p-2 border-b border-[#e1e1e1] dark:border-[#3d3d3d] text-small-text sm:text-body-text text-nowrap hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors">
          <TransactionInformation data={transactionData} />
        </motion.span>
      ))}
    </motion.div>
  );
}

export default History;
