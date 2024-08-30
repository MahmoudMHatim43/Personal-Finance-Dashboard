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

function CategoryView({ item }) {
  const { icon: Icon, title, precent, color } = item;
  return (
    <div className="flex justify-between w-full text-[clamp(1rem,1.2vw,1.2vw)]">
      <div className="flex gap-2">
        <Icon color={color} />
        <span>{title}</span>
      </div>
      <span className="text-small-text">{precent * 100}%</span>
    </div>
  );
}

function Summary() {
  const [type, setType] = useState("Pie");
  const categories = [
    {
      title: "Home",
      icon: FaHome,
      color: "rgba(255, 99, 132, 0.8)",
      precent: 0.2,
    },
    {
      title: "Credit Card",
      icon: FaCreditCard,
      color: "rgba(54, 162, 235, 0.8)",
      precent: 0.15,
    },
    {
      title: "Transportation",
      icon: FaBus,
      color: "rgba(255, 206, 86, 0.8)",
      precent: 0.35,
    },
    {
      title: "Groceries",
      icon: FaShoppingCart,
      color: "rgba(75, 192, 192, 0.8)",
      precent: 0.2,
    },
    {
      title: "Shopping",
      icon: FaShoppingBag,
      color: "rgba(153, 102, 255, 0.8)",
      precent: 0.1,
    },
  ];
  return (
    <div className="col-span-3 md:col-span-1 flex flex-col max-h-svh bg-white-b2 dark:bg-black-b2 rounded-xl overflow-y-scroll chart-section">
      <div className="flex items-center justify-center gap-4 w-full text-logo-name text-center">
        <span>{type} Chart</span>
        <span>
          <HiRefresh
            onClick={() => setType(type === "Pie" ? "Line" : "Pie")}
            size={20}
            className="cursor-pointer"
            aria-label="change chart"
          />
        </span>
      </div>
      <Charts type={type} />
      <div className="flex flex-col gap-10 w-full p-4">
        {categories.map((item, idx) => (
          <CategoryView key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Summary;
