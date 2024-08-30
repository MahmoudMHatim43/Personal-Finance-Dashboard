import Summary from "./Summary";
import History from "./History";
function Info() {
  return (
    <section className="col-span-12 grid grid-cols-3 gap-4 mb-10">
      <Summary />
      <History />
    </section>
  );
}

export default Info;
