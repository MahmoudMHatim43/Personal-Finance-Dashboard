import { PiChart, LineChart } from "../../Helpers";

function BudgetCharts() {
  const labels = [
    "Home",
    "Credit Card",
    "Transportation",
    "Groceries",
    "Shopping",
  ];
  const data = [3000 * 0.2, 3000 * 0.15, 3000 * 0.35, 3000 * 0.2, 3000 * 0.1];
  return (
    <section className="col-span-12 grid grid-cols-4 gap-4 items-center justify-center">
      <div className="col-span-2 flex items-center justify-center h-1/2 my-auto">
        <span>
          <PiChart
            userData={data}
            userLable={"Transactions"}
            userLabels={labels}
          />
        </span>
      </div>
      <div className="col-span-2">
        <LineChart userLabels={labels} userLable={"income"} userData={data} />
      </div>
    </section>
  );
}

export default BudgetCharts;
