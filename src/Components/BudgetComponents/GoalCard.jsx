import React from "react";
import { FaPlus } from "react-icons/fa"; // Importing the plus icon

function GoalCard({ goal }) {
  const { name, amount, rate } = goal;
  const savedAmount = amount * rate;

  return (
    <div className="col-span-6 sm:col-span-4 lg:col-span-3 p-4 bg-white-b2 dark:bg-black-b2 rounded-md shadow-md">
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
          ${savedAmount.toLocaleString("en-US")}
        </span>
        <span className="text-sm text-white-t2 dark:text-black-t2">
          {" "}
          / ${amount.toLocaleString("en-US")}
        </span>
      </div>
      <div className="relative w-full justify-self-end h-4 bg-gray-300 dark:bg-gray-600 rounded">
        <div
          className="absolute top-0 left-0 h-full bg-green-500 rounded"
          style={{ width: `${Math.max(0, Math.min(rate, 1)) * 100}%` }}></div>
      </div>
    </div>
  );
}

export default GoalCard;
