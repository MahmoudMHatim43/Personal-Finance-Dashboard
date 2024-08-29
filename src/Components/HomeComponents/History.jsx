import React from "react";
import TransactionInformation from "./TransactionInformation.jsx";
import { motion } from "framer-motion";

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
    name: "Facebook",
    method: "Bank Transfer",
    amount: 4530,
    date: "2022-01-01",
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="col-span-3 md:col-span-2 grid grid-cols-4 max-h-svh overflow-y-scroll history-section">
      {[...Array(50)].map((_, idx) => (
        <motion.div
          variants={itemVariants}
          className="col-span-4 flex justify-between p-2 border-b border-[#e1e1e1] dark:border-[#3d3d3d] text-small-text sm:text-body-text hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors">
          <TransactionInformation key={idx} data={transactionData} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default History;
