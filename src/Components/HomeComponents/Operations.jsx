import { toggleModal } from "../../../store/slices/modalSlice";
import { useDispatch } from "react-redux";
import { MdAddCircle } from "react-icons/md";
import { IoMdRemoveCircle } from "react-icons/io";
import { TbTransferVertical } from "react-icons/tb";
import { motion } from "framer-motion";

const operations = [
  {
    title: "Add Income",
    description: "Create an income manually",
    icon: MdAddCircle,
    color: "text-green-500",
    shadow: "shadow shadow-green-500/50",
    border: "border border-green-500",
  },
  {
    title: "Add Expense",
    description: "Create an expense manually",
    icon: IoMdRemoveCircle,
    color: "text-red-500",
    shadow: "shadow-sm shadow-red-500/50",
    border: "border border-red-500",
  },
  {
    title: "Transfer Money",
    description: "Transfer money manually",
    icon: TbTransferVertical,
    color: "text-blue-500",
    shadow: "shadow shadow-blue-500/50",
    border: "border border-blue-500",
  },
];

function Operations() {
  const dispatch = useDispatch();

  const handleModalToggle = () => {
    dispatch(toggleModal());
  };

  return (
    <section className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {operations.map((operation, idx) => (
        <OperationView key={idx} operation={operation} onOperationClick={handleModalToggle} />
      ))}
    </section>
  );
}

function OperationView({ operation, onOperationClick }) {
  const { icon: Icon, title, description, color, shadow, border } = operation;

  return (
    <motion.div
      onClick={onOperationClick}
      whileHover={{ y: -5, scale: 1.03 }}
      whileTap={{ y: -5, scale: 0.97 }}
      className={`relative flex flex-col items-center justify-center h-[12vh] sm:h-[15vh] p-5 bg-whit-b2 dark:bg-black-b2 text-center rounded-lg cursor-pointer transition-shadow duration-300 ${shadow} hover:shadow-lg`}>
      <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0">
        <Icon size={80} className={`${color} ${border} border-4 rounded-full`} />
      </div>
      <div className="z-10">
        <Icon size={40} className={`${color}`} />
        <h3 className="mt-3 text-lg font-semibold text-gray-700 dark:text-gray-300">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}

export default Operations;
