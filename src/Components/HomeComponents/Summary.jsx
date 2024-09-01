import { useState } from "react";
import Charts from "./Charts";
import { HiRefresh } from "react-icons/hi";
import {
  FaHome,
  FaCreditCard,
  FaBus,
  FaShoppingCart,
  FaShoppingBag,
} from "react-icons/fa";

function Summary() {
  const [type, setType] = useState("Pie");
  const categories = [
    {
      title: "Home",
      icon: FaHome,
      color: "rgba(255, 99, 132, 0.8)",
      percent: 0.2,
    },
    {
      title: "Credit Card",
      icon: FaCreditCard,
      color: "rgba(54, 162, 235, 0.8)",
      percent: 0.15,
    },
    {
      title: "Transportation",
      icon: FaBus,
      color: "rgba(255, 206, 86, 0.8)",
      percent: 0.35,
    },
    {
      title: "Groceries",
      icon: FaShoppingCart,
      color: "rgba(75, 192, 192, 0.8)",
      percent: 0.2,
    },
    {
      title: "Shopping",
      icon: FaShoppingBag,
      color: "rgba(153, 102, 255, 0.8)",
      percent: 0.1,
    },
  ];

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
  const { icon: Icon, title, percent, color } = item;

  return (
    <div className="flex justify-between items-center w-full text-[clamp(1rem, 1.2vw, 1.2vw)] p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-lg">
      <div className="flex items-center gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <Icon size={20} style={{ color: color }} />
        <span className="font-semibold">{title}</span>
      </div>
      <span className="text-small-text font-medium">{percent * 100}%</span>
    </div>
  );
}

export default Summary;
