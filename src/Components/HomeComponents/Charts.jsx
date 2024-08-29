import SummaryPiChart from "./SummaryPiChart";
import SummaryLineChart from "./SummaryLineChart";
function Charts({ type }) {
  return (
    <>
      <div className={`${type === "Line" && "hidden"}`}>
        <SummaryPiChart />
      </div>
      <div className={`${type === "Pie" && "hidden"}`}>
        <SummaryLineChart />
      </div>
    </>
  );
}

export default Charts;
