import Overview from "../Components/Overview";
import Control from "../Components/Control";
import CategoryCard from "../Components/BudgetComponents/CategoryCard";
import GoalCard from "../Components/BudgetComponents/GoalCard";
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
  const goals = [
    { name: "Emergency Fund", amount: 15000, rate: 0.4 },
    { name: "Retirement Savings", amount: 100000, rate: 0.6 },
    { name: "College Fund for Children", amount: 50000, rate: 0.25 },
    { name: "Debt Repayment (Credit Card)", amount: 5000, rate: -0.1 },
    { name: "Wedding Fund", amount: 20000, rate: 0.35 },
    { name: "Home Renovation", amount: 12000, rate: 0.55 },
    { name: "Holiday Shopping", amount: 2000, rate: 0.15 },
    { name: "Investment Portfolio", amount: 30000, rate: 0.45 },
    { name: "Fitness Equipment", amount: 1500, rate: 0.7 },
    { name: "Travel Around the World", amount: 25000, rate: 0.1 },
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
      <section className="col-span-12 grid grid-cols-12 gap-4">
        <h1 className="col-span-12 text-6xl font-lato font-bold">Goals</h1>
        <div className="col-span-12 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-3xl">
            Total Savings ${sections[2].amount.toLocaleString("en-US")}
          </h2>
          <span className="text-small-text text-white-t2 dark:text-black-t2">
            Use the + icon to manage your savings across your goals
          </span>
        </div>
        {goals.map((goal, idx) => (
          <GoalCard key={idx} goal={goal} />
        ))}
      </section>
    </div>
  );
}

export default Budget;
