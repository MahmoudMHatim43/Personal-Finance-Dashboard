import { useState } from "react";
import { TfiCalendar } from "react-icons/tfi";

function Control({ title }) {
  const [activePeriod, setActivePeriod] = useState("This Month");
  const periods = ["This Month", "Last Month", "This Year", "Last 12 Months"];
  return (
    <section className="col-span-12 grid grid-cols-3 grid-rows-[repeat(2,minmax(0,auto))] gap-2">
      <div className="col-span-3 md:col-span-1 text-big-header font-lato font-bold tracking-wide">
        {title}
      </div>
      <div className="col-span-3 md:col-span-2 place-self-end flex items-center justify-between h-full space-x-2 text-small-text">
        {periods.map((period, idx) => (
          <span
            key={idx}
            onClick={() => setActivePeriod(period)}
            className={`px-2 py-1 bg-white-b2 dark:bg-black-b2 rounded-md shadow-md cursor-pointer transition-colors duration-300 ${
              period === activePeriod && "bg-blue-light dark:bg-blue-dark"
            }`}>
            {period}
          </span>
        ))}
        <span className="hidden sm:flex flex-col gap-1 p-2 items-center rounded-md cursor-pointer hover:bg-blue-light dark:hover:bg-blue-dark transition-colors duration-300">
          <TfiCalendar size={20} aria-label="set date" />
        </span>
      </div>
    </section>
  );
}

export default Control;
