import Overview from "../Components/Overview";
import Control from "../Components/Control";
import Categories from "../Components/BudgetComponents/Categories";
import BudgetCharts from "../Components/BudgetComponents/BudgetCharts";
import Goals from "../Components/BudgetComponents/Goals";

const sections = ["Balance", "Incomes", "Expenses"];
function Budget() {
  return (
    <div className="grid grid-cols-12 grid-rows-[repeat(4,minmax(0,auto))] gap-10 mb-10 w-[95%] md:w-[90%] mx-auto font-roboto">
      <Control title="Budget Overview" />
      <Categories />
      <Overview sections={sections} />
      <BudgetCharts />
      <Goals />
    </div>
  );
}

export default Budget;
