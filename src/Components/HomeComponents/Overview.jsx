import PropTypes from "prop-types";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";

function ViewSection({ section }) {
  const { name, amount, rate } = section;
  return (
    <div className="col-span-3 sm:col-span-1 flex flex-col justify-between p-2 font-lato bg-white-b2 dark:bg-black-b2 rounded-xl shadow-md">
      <h2 className="p-2 text-small-text text-white-t2 dark:text-black-t2">
        {name}
      </h2>
      <div className="flex flex-col justify-between">
        <span className="text-logo-name flex items-center">
          {<BsCurrencyDollar />}
          {amount.toLocaleString("en-US")}
        </span>
        <span className="place-self-end flex items-center gap-2 px-2 py-1 text-lg sm:text-small-text bg-white-b1 dark:bg-black-b1 rounded-md">
          {rate >= 0 ? (
            <FaArrowTrendUp color="green" />
          ) : (
            <FaArrowTrendDown color="red" />
          )}
          {rate * 100 + "%"}
        </span>
      </div>
    </div>
  );
}

function Overview() {
  const sections = [
    { name: "Balance", amount: 34000, rate: 0.23 },
    { name: "Income", amount: 12000, rate: 0.37 },
    { name: "Expenses", amount: 12000, rate: -0.17 },
  ];
  return (
    <section className="col-span-3 grid grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {sections.map((section, idx) => (
        <ViewSection section={section} key={idx} />
      ))}
    </section>
  );
}
ViewSection.propTypes = {
  section: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
  }).isRequired,
};
export default Overview;
