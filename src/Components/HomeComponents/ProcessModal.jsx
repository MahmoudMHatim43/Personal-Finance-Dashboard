import React from "react";
import { motion } from "framer-motion";
import { toggleModal } from "../../../store/slices/modalSlice";
import { useSelector, useDispatch } from "react-redux";

function ProcessModal() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  console.log(isOpen);

  return (
    <div
      className={`${
        !isOpen ? "hidden" : "block"
      } absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-full w-full home-modal`}>
      <motion.div
        initial={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0 : 1 }}
        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-[90%] sm:w-1/3 p-2 bg-white-b1 dark:bg-black-b1 rounded-xl shadow-xl">
        <h1 className="text-mid-header text-center">Enter Information</h1>
        <form action="" className="flex flex-col gap-5 m-5">
          <input
            type="text"
            placeholder="Enter Source"
            className="p-2 outline-none shadow-sm text-body-text"
          />
          <input
            type="text"
            placeholder="Enter Method"
            className="p-2 outline-none shadow-sm text-body-text"
          />
          <input
            type="number"
            placeholder="Enter Amount"
            className="p-2 outline-none shadow-sm text-body-text"
          />
          <div className="flex flex-col gap-2">
            <span className="text-lg">Type :</span>
            <div className="flex gap-1">
              <input type="radio" name="type" id="income-btn" />
              <label htmlFor="income-btn">Income</label>
            </div>
            <div className="flex gap-1">
              <input type="radio" name="type" id="expense-btn" />
              <label htmlFor="expense-btn">Expense</label>
            </div>
            <div className="flex gap-1">
              <input type="radio" name="type" id="income-btn" />
              <label htmlFor="Transaction-btn">Transaction</label>
            </div>
          </div>
          <div className="flex gap-4 place-self-end text-white">
            <button
              onClick={() => dispatch(toggleModal())}
              className="p-2 text-center font-bold rounded-md shadow-md bg-blue-700">
              Process
            </button>
            <button
              onClick={() => dispatch(toggleModal())}
              className="p-2 text-center font-bold rounded-md shadow-md bg-red-700">
              Cancle
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default ProcessModal;
