import { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/slices/budgetsSlice";
import { TfiCalendar } from "react-icons/tfi";

const periods = ["All Time", "This Month", "Last Month", "This Year"];

function Control({ title }) {
  const [activePeriod, setActivePeriod] = useState("All Time");
  const dispatch = useDispatch();

  const { startDate, endDate } = useMemo(() => {
    const date = new Date();
    let start = null;
    let end = date.toISOString();

    switch (activePeriod) {
      case "This Month":
        start = new Date(date.getFullYear(), date.getMonth(), 1).toISOString(); // first day this month
        break;
      case "Last Month":
        start = new Date(date.getFullYear(), date.getMonth() - 1, 1).toISOString(); // first day this month
        end = new Date(date.getFullYear(), date.getMonth(), 0).toISOString(); // last day prev month
        break;
      case "This Year":
        start = new Date(date.getFullYear(), 0, 1).toISOString(); // first day and month this year
        break;
      default:
        start = null;
        end = null;
    }

    return { startDate: start, endDate: end };
  }, [activePeriod]);

  useEffect(() => {
    dispatch(
      setFilter({
        start: startDate,
        end: endDate,
      })
    );
  }, [startDate, endDate, dispatch]);

  const getPeriodClass = (period) =>
    `px-2 py-1 bg-white-b2 dark:bg-black-b2 rounded-md shadow-md cursor-pointer transition-colors duration-300 ${
      period === activePeriod ? "bg-blue-300 dark:bg-blue-800" : ""
    }`;

  return (
    <section className="col-span-12 grid grid-cols-3 gap-2">
      <h1 className="col-span-3 md:col-span-1 text-big-header font-bold tracking-wider">{title}</h1>
      <div className="col-span-3 md:col-span-2 place-self-end mx-auto md:mx-0 flex items-center h-full space-x-2 text-small-text">
        {periods.map((period, idx) => (
          <span
            key={idx}
            onClick={() => setActivePeriod(period)}
            className={getPeriodClass(period)}>
            {period}
          </span>
        ))}
        <span className="flex flex-col gap-1 p-2 items-center rounded-md cursor-pointer hover:bg-blue-300 dark:hover:bg-blue-800 transition-colors duration-300">
          <TfiCalendar size={20} aria-label="set date" />
        </span>
      </div>
    </section>
  );
}

export default Control;
