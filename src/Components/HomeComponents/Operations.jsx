import PropTypes from "prop-types";
import { MdAddCircle } from "react-icons/md";
import { IoMdRemoveCircle } from "react-icons/io";
import { TbTransferVertical } from "react-icons/tb";
import { motion } from "framer-motion";

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
    <section className="col-span-12 grid grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {operations.map((operation, idx) => (
        <OperationView key={idx} operation={operation} />
      ))}
    </section>
  );
}
function OperationView({ operation }) {
  const { icon: Icon, title, color } = operation;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      whileTap={{ y: -5, scale: 0.98 }}
      className="relative z-10 col-span-1 flex flex-col h-[10svh] p-4 bg-white-b2 dark:bg-black-b2 text-center rounded-md overflow-hidden cursor-pointer"
      style={{ boxShadow: `0px 0px 3px ${color}` }}>
      <Icon
        size={100}
        className="absolute right-5 translate-x-1/2 top-0 opacity-50 -z-10 rounded-full"
        style={{ border: `5px solid ${color}` }}
      />
      <span className="text-xl font-roboto font-semibold">{title}</span>
    </motion.div>
  );
}
OperationView.propTypes = {
  operation: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default Operations;
