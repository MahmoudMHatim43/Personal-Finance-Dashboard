import OperationView from "../HomeComponents/OperationView.jsx";
import { MdAddCircle } from "react-icons/md";
import { IoMdRemoveCircle } from "react-icons/io";
import { TbTransferVertical } from "react-icons/tb";
function Operations() {
  const operations = [
    {
      title: "Add Income",
      p: "create an income manually",
      icon: MdAddCircle,
      color: "green",
    },
    {
      title: "Add Expense",
      p: "create an expense manually",
      icon: IoMdRemoveCircle,
      color: "red",
    },
    {
      title: "Transfer Money",
      p: "transfer money from one account to another",
      icon: TbTransferVertical,
      color: "blue",
    },
  ];
  return (
    <section className="col-span-3 grid grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {operations.map((operation, idx) => (
        <OperationView key={idx} operation={operation} />
      ))}
    </section>
  );
}

export default Operations;
