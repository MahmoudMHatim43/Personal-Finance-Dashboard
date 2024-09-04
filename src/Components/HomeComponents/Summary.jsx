import { useState } from "react";
import Charts from "./Charts";
import { HiRefresh } from "react-icons/hi";
import { useSelector } from "react-redux";
import { iconMap, selectUserChoice } from "../../../store/slices/budgetsSlice";

function Summary() {
  const [type, setType] = useState("Pie");
  const categories = useSelector(selectUserChoice);
  return (
    <div className="col-span-4 md:col-span-1 flex flex-col h-svh bg-white-b2 dark:bg-black-b2 rounded-md shadow-md overflow-hidden">
      <div className="flex items-center justify-between p-4 text-big-header">
        <span>{type} Chart</span>
        <HiRefresh
          onClick={() => setType(type === "Pie" ? "Line" : "Pie")}
          size={30}
          className="cursor-pointer"
          aria-label="change chart"
        />
      </div>

      <div className="flex-grow flex items-center justify-center p-4">
        <Charts type={type} />
      </div>

      <div className="flex flex-col gap-2 p-2 overflow-y-auto">
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
    <div className="flex justify-between items-center w-full text-[clamp(1rem, 1.2vw, 1.2vw)] p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-lg">
      <div className="flex items-center gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <IconComponent size={20} />
        <span className="font-semibold">{name}</span>
      </div>
      <span className="text-small-text font-medium">{100}%</span>
    </div>
  );
}

export default Summary;
