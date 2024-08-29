import { FaPlus, FaMinus } from "react-icons/fa";
function TransactionInformation({ data }) {
  const { name, method, amount, date } = data;
  return (
    <>
      {/* To/from */}
      <div>{name}</div>
      {/* Method */}
      <div className="text-blue-500">{method}</div>
      {/* Amount */}
      <div
        className="flex gap-2 items-center"
        style={{ color: amount > 0 ? "green" : "red" }}>
        {amount > 0 ? <FaPlus size={12} /> : <FaMinus size={12} />}
        {amount}
      </div>
      {/* Date */}
      <div>{date}</div>
    </>
  );
}

export default TransactionInformation;
