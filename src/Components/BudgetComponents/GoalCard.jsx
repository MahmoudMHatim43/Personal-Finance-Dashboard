import React from "react";
import { FaPlus } from "react-icons/fa";
import { AnimateNumber } from "../../Helpers";
import { motion } from "framer-motion";

function GoalCard({ goal }) {
  const { name, amount, rate } = goal;
  const savedAmount = amount * rate;

  return (
    <motion.div
      initial={{ scale: 1, y: 0 }}
      whileTap={{ scale: 1.01, y: -5 }}
      whileHover={{ scale: 1.01, y: -5 }}
      className="col-span-6 sm:col-span-4 lg:col-span-3 p-4 bg-white-b2 dark:bg-black-b2 rounded-md shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <button
          className="text-blue-500 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-700 transition"
          aria-label={`Add from savings to ${name}`}>
          <FaPlus size={15} />
        </button>
      </div>
      <div className="mb-2">
        <span className="text-xl font-semibold">
          $<AnimateNumber value={savedAmount} duration={2} />
        </span>
        <span className="text-sm text-white-t2 dark:text-black-t2">
          {" "}
          / ${amount.toLocaleString("en-US")}
        </span>
      </div>
      <div className="relative w-full justify-self-end h-4 bg-gray-300 dark:bg-gray-600 rounded">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.max(0, Math.min(rate, 1)) * 100}%` }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-0 h-full bg-green-500 rounded"></motion.div>
      </div>
    </motion.div>
  );
}

export default GoalCard;
