import Control from "../Components/HomeComponents/Control";
import Overview from "../Components/HomeComponents/Overview";
import Operations from "../Components/HomeComponents/Operations";
import Info from "../Components/HomeComponents/Info";
function Home() {
  return (
    <div className="grid grid-cols-3 grid-rows-4 w-[95%] md:w-[90%] w mx-auto font-roboto">
      <Control />
      <Overview />
      <Operations />
      <Info />
    </div>
  );
}

export default Home;
