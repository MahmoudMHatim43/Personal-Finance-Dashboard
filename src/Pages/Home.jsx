import Control from "../Components/Control";
import Overview from "../Components/Overview";
import Operations from "../Components/HomeComponents/Operations";
import Info from "../Components/HomeComponents/Info";
function Home() {
  const sections = ["Balance", "Income", "Expenses"];
  return (
    <div className="grid grid-cols-12 grid-rows-[repeat(4,minmax(0,auto))] gap-y-10 w-full mx-auto text-body-text font-roboto">
      <Control title={"Hi, Mahmoud"} />
      <Operations />
      <Overview sections={sections} />
      <Info />
    </div>
  );
}

export default Home;
