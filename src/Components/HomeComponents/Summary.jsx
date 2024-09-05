import { useState } from "react";
import Charts from "./Charts";
import { HiRefresh } from "react-icons/hi";
import { useSelector } from "react-redux";
import { iconMap, selectUserChoice } from "../../../store/slices/budgetsSlice";

function Summary() {
  const [type, setType] = useState("Pie");
  const categories = useSelector(selectUserChoice);

  const toggleChartType = () => setType((prevType) => (prevType === "Pie" ? "Line" : "Pie"));

  return (
    <div className="col-span-4 lg:col-span-1 flex flex-col h-svh bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center justify-between p-4 text-lg font-bold text-gray-700 dark:text-gray-200">
        <span>{type} Chart</span>
        <HiRefresh
          onClick={toggleChartType}
          size={30}
          className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          aria-label="change chart"
        />
      </div>

      <div className="flex-grow flex items-center justify-center p-4">
        <Charts type={type} />
      </div>

      <div className="flex flex-col gap-2 p-4 overflow-y-auto max-h-[30vh]">
        {categories.map((item, idx) => (
          <CategoryView key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

function CategoryView({ item }) {
  const { icon, name } = item;
  const IconComponent = iconMap[icon];

  return (
    <div className="flex justify-between items-center w-full p-2 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 hover:shadow-md">
      <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
        <IconComponent size={24} className="text-blue-500 dark:text-blue-400" />
        <span className="font-medium text-gray-700 dark:text-gray-200">{name}</span>
      </div>
      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">100%</span>
    </div>
  );
}

export default Summary;
