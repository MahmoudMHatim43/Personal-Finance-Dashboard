import Control from "../Components/Control";
import Overview from "../Components/Overview";
import Operations from "../Components/HomeComponents/Operations";
import Info from "../Components/HomeComponents/Info";
import ProcessModal from "../Components/HomeComponents/ProcessModal";

const sections = ["Balance", "Incomes", "Expenses"];

function Home() {
  return (
    <div className="grid grid-cols-12 gap-y-10 w-full mx-auto text-body-text font-roboto">
      <Control title="Hi, Mahmoud" />
      <Operations />
      <Overview sections={sections} />
      <Info />
      <ProcessModal />
    </div>
  );
}

export default Home;
