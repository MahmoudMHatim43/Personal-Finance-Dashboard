import { PiChart, LineChart } from "../../Helpers";
function Charts({ type }) {
  const labels = [
    "Home",
    "Credit Card",
    "Transportation",
    "Groceries",
    "Shopping",
  ];
  const data = [3000 * 0.2, 3000 * 0.15, 3000 * 0.35, 3000 * 0.2, 3000 * 0.1];
  return (
    <>
      <div className={`${type === "Line" && "hidden"}`}>
        <PiChart
          userData={data}
          userLable={"Transactions"}
          userLabels={labels}
        />
      </div>
      <div className={`${type === "Pie" && "hidden"}`}>
        <LineChart userLabels={labels} userLable={"income"} userData={data} />
      </div>
    </>
  );
}

export default Charts;
