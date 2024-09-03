import { useSelector } from "react-redux";
import { selectFilteredTransactions, selectFilteredBalance } from "../../store/slices/budgetsSlice";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { motion } from "framer-motion";
function ViewSection({ section, type }) {
  const transactions = useSelector(selectFilteredTransactions);
  const balance = useSelector(selectFilteredBalance);
  const amount =
    (type &&
      transactions
        .filter((transaction) => transaction.type === type)
        .reduce((acc, curr) => acc + curr.amount, 0)) ||
    balance;
  console.log({ balance, transactions });

  const rate = 0.5;
  return (
    <motion.div
      initial={{ scale: 1, y: 0 }}
      whileTap={{ scale: 1.01, y: -5 }}
      whileHover={{ scale: 1.01, y: -5 }}
      className="col-span-3 sm:col-span-1 flex flex-col justify-between p-2 font-lato bg-white-b2 dark:bg-black-b2 rounded-md shadow-md">
      <h2 className="p-2 text-small-text text-white-t2 dark:text-black-t2">{section}</h2>
      <div className="flex flex-col justify-between">
        <span className="text-mid-header sm:text-big-header flex items-center">
          {<BsCurrencyDollar />}
          {amount}
        </span>
        <span className="place-self-end flex items-center gap-2 px-2 py-1 text-small-text bg-white-b1 dark:bg-black-b1 rounded-md">
          {rate >= 0 ? <FaArrowTrendUp color="green" /> : <FaArrowTrendDown color="red" />}
          {(rate * 100).toFixed(2) + "%"}
        </span>
      </div>
    </motion.div>
  );
}

function Overview({ sections }) {
  return (
    <section className="col-span-12 grid grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {sections.map((section, idx) => {
        const type = section === "Incomes" ? "in" : section === "Expenses" ? "out" : null;
        return <ViewSection type={type} section={section} key={idx} />;
      })}
    </section>
  );
}
export default Overview;
