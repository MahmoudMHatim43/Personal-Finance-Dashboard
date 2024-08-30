import Overview from "../Components/Overview";
import Control from "../Components/Control";
import CategoryCard from "../Components/BudgetComponents/CategoryCard";
import BudgetCharts from "../Components/BudgetComponents/BudgetCharts";
import {
  FaHome,
  FaCreditCard,
  FaBus,
  FaShoppingCart,
  FaShoppingBag,
} from "react-icons/fa";

function Budget() {
  const sections = [
    { name: "Income", amount: 34000, rate: 0.23 },
    { name: "Expenses", amount: 22000, rate: 0.37 },
    { name: "Savings", amount: 12000, rate: -0.17 },
  ];
  const categories = [
    {
      title: "Home",
      icon: FaHome,
      color: "rgba(255, 99, 132, 0.8)",
      precent: 0.2,
      budget: 2000,
    },
    {
      title: "Credit Card",
      icon: FaCreditCard,
      color: "rgba(54, 162, 235, 0.8)",
      precent: 0.9,
      budget: 4000,
    },
    {
      title: "Transportation",
      icon: FaBus,
      color: "rgba(255, 206, 86, 0.8)",
      precent: 0.6,
      budget: 1500,
    },
    {
      title: "Groceries",
      icon: FaShoppingCart,
      color: "rgba(75, 192, 192, 0.8)",
      precent: 0.2,
      budget: 2700,
    },
    {
      title: "Shopping",
      icon: FaShoppingBag,
      color: "rgba(153, 102, 255, 0.8)",
      precent: 0.8,
      budget: 3000,
    },
  ];
  return (
    <div className="grid grid-cols-12 grid-rows-[repeat(4,minmax(0,auto))] gap-10 mb-10 w-[95%] md:w-[90%] mx-auto font-roboto">
      <Control title={"Budget Overview"} />
      <section className="col-span-12 grid grid-cols-10 gap-4">
        {categories.map((cat, idx) => (
          <CategoryCard key={idx} cat={cat} />
        ))}
      </section>
      <Overview section={sections} />
      <BudgetCharts />
    </div>
  );
}

export default Budget;
