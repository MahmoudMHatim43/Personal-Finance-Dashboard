import ViewSection from "../HomeComponents/ViewSection";

function Overview() {
  const sections = [
    { name: "Balance", amount: 34000, rate: 0.23 },
    { name: "Income", amount: 12000, rate: 0.37 },
    { name: "Expenses", amount: 12000, rate: -0.17 },
  ];
  return (
    <section className="col-span-3 grid grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {sections.map((section, idx) => (
        <ViewSection section={section} key={idx} />
      ))}
    </section>
  );
}

export default Overview;
