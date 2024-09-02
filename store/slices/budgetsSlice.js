import { createSlice, createSelector } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import {
  FaHome,
  FaCreditCard,
  FaBus,
  FaShoppingCart,
  FaShoppingBag,
  FaPlus,
} from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
const iconMap = {
  FaHome,
  FaCreditCard,
  FaBus,
  FaShoppingCart,
  FaShoppingBag,
  FaPlus,
  BiCategoryAlt,
};
const budgetSlice = createSlice({
  name: "budget",
  initialState: {
    initialBalance: 0,
    currbalance: 0,
    balanceHistory: [],
    income: [],
    expense: [],
    options: [
      {
        name: "Home",
        icon: "FaHome",
        color: "rgba(255, 100, 120, 1)",
      },
      {
        name: "Credit Card",
        icon: "FaCreditCard",
        color: "rgba(55, 160, 255, 1)",
      },
      {
        name: "Transportation",
        icon: "FaBus",
        color: "rgba(255, 210, 80, 1)",
      },
      {
        name: "Groceries",
        icon: "FaShoppingCart",
        color: "rgba(80, 190, 100, 1)",
      },
      {
        name: "Shopping",
        icon: "FaShoppingBag",
        color: "rgba(150, 100, 255, 1)",
      },
      { name: "Custom", icon: "FaPlus", color: "rgba(255, 150, 0, 1)" },
    ],
    userChoice: [],
  },
  reducers: {
    addInitialBalance: (state, action) => {
      state.initialBalance = action.payload;
      state.currbalance = action.payload;
      state.balanceHistory.push({
        balance: state.currbalance,
        date: new Date().toISOString(),
      });
    },
    addTransaction: (state, action) => {
      const { method, amount, source, type } = action.payload;
      const transactionDetails = {
        id: uuid(),
        date: new Date().toISOString(),
        source: source,
        amount: amount,
        method: method,
      };
      if (type === "income") {
        state.currbalance += amount;
        state.income.push(transactionDetails);
      }
      if (type === "expense") {
        state.currbalance -= amount;
        state.expense.push(transactionDetails);
      }
      state.balanceHistory.push({
        balance: state.currbalance,
        date: new Date().toISOString(),
      });
    },
    removeIncome: (state, action) => {
      const { amount, id } = action.payload;
      state.income = state.income.filter(
        (transaction) => transaction.id !== id
      );
      state.currbalance -= amount;
      state.balanceHistory.push({
        balance: state.currbalance,
        date: new Date().toISOString(),
      });
    },
    removeExpense: (state, action) => {
      const { amount, id } = action.payload;
      state.expense = state.expense.filter(
        (transaction) => transaction.id !== id
      );
      state.currbalance += amount;
      state.balanceHistory.push({
        balance: state.currbalance,
        date: new Date().toISOString(),
      });
    },
    addChoice: (state, action) => {
      const { name, amount } = action.payload;
      const option = state.options.find((option) => option.name === name);
      const newCategory = {
        name: name,
        amount: amount,
        rate: state.currbalance > 0 ? amount / state.currbalance : 0,
        icon: option ? option.icon : "BiCategoryAlt",
        color: option ? option.color : "rgba(255, 150, 0, 1)",
      };
      state.userChoice.push(newCategory);
    },
  },
});
export const selectBalance = (state) => state.budget.currbalance;
export const selectIncome = (state) => state.budget.income;
export const selectExpense = (state) => state.budget.expense;
export const selectOptions = (state) => state.budget.options;
export const selectUserChoice = (state) => state.budget.userChoice;
export const selectAllTransactions = createSelector(
  selectIncome,
  selectExpense,
  (income, expense) =>
    [...income, ...expense].sort((a, b) => new Date(b.date) - new Date(a.date))
);
export const getIconComponent = (iconName) => iconMap[iconName];
export const {
  addInitialBalance,
  addTransaction,
  removeIncome,
  removeExpense,
  addChoice,
} = budgetSlice.actions;
export default budgetSlice.reducer;
