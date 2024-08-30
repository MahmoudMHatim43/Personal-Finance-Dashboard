import Control from "../Components/Control";
import Overview from "../Components/Overview";
import Operations from "../Components/HomeComponents/Operations";
import Info from "../Components/HomeComponents/Info";
function Home() {
  const sections = [
    { name: "Balance", amount: 34000, rate: 0.23 },
    { name: "Income", amount: 12000, rate: 0.37 },
    { name: "Expenses", amount: 12000, rate: -0.17 },
  ];
  return (
    <div className="grid grid-cols-12 grid-rows-[repeat(4,minmax(0,auto))] gap-y-10 w-[95%] md:w-[90%] mx-auto font-roboto">
      <Control title={"Hi, Mahmoud"} />
      <Operations />
      <Overview section={sections} />
      <Info />
    </div>
  );
}

export default Home;
