import { createSelector, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { FaHome, FaCreditCard, FaBus, FaShoppingCart, FaShoppingBag, FaPlus } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";

export const iconMap = {
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
    totalBalance: 0,
    balanceHistory: [{ id: uuid(), date: "2024-01-01T00:00:00.000Z", amount: 30000 }],
    incomes: [
      {
        id: uuid(),
        date: "2024-01-01T00:00:00.000Z",
        type: "in",
        amount: 20000,
        source: "salary",
        method: "bank transfer",
        category: "home",
      },
    ],
    expenses: [
      {
        id: uuid(),
        date: "2024-01-01T00:00:00.000Z",
        type: "out",
        amount: 10000,
        source: "walmart",
        method: "bank transfer",
        category: "home",
      },
    ],
    filter: {
      start: null,
      end: null,
      category: null,
      type: null,
    },
    options: [
      { name: "home", icon: "FaHome" },
      { name: "card", icon: "FaCreditCard" },
      { name: "transport", icon: "FaBus" },
      { name: "shopping", icon: "FaShoppingCart" },
      { name: "grocery", icon: "FaShoppingBag" },
      { name: "add", icon: "FaPlus" },
    ],
    userChoice: [
      { name: "home", icon: "FaHome", amount: 3000, spent: 2500 },
      { name: "card", icon: "FaCreditCard", amount: 7000, spent: 3000 },
      { name: "transport", icon: "FaBus", amount: 12000, spent: 8000 },
      { name: "shopping", icon: "FaShoppingCart", amount: 5000, spent: 4000 },
    ],
    userGoals: [
      { title: "Emergency Fund", amount: 15000, rate: 0.4 },
      { title: "Retirement Savings", amount: 100000, rate: 0.6 },
      { title: "College Fund for Children", amount: 50000, rate: 0.25 },
      { title: "Debt Repayment (Credit Card)", amount: 5000, rate: -0.1 },
      { title: "Wedding Fund", amount: 20000, rate: 0.35 },
      { title: "Home Renovation", amount: 12000, rate: 0.55 },
      { title: "Holiday Shopping", amount: 2000, rate: 0.15 },
      { title: "Investment Portfolio", amount: 30000, rate: 0.45 },
      { title: "Fitness Equipment", amount: 1500, rate: 0.7 },
      { title: "Travel Around the World", amount: 25000, rate: 0.1 },
    ],
  },
  reducers: {
    addInitialBalance: (state, action) => {
      const { amount } = action.payload;
      state.initialBalance = amount;
      state.totalBalance = amount;
    },
    addIncome: (state, action) => {
      const { amount, source, category, method, date } = action.payload;
      const newIncome = {
        id: uuid(),
        date: date,
        type: "in",
        amount: amount,
        source: source,
        method: method,
        category: category,
      };
      state.incomes.push(newIncome);
      state.totalBalance += amount;
      state.balanceHistory.push({
        id: uuid(),
        date: date,
        amount: state.totalBalance,
      });
    },
    addExpense: (state, action) => {
      const { amount, source, category, method, date } = action.payload;
      const newExpense = {
        id: uuid(),
        date: date,
        type: "out",
        amount: amount,
        source: source,
        method: method,
        category: category,
      };
      state.expenses.push(newExpense);
      state.totalBalance -= amount;
      state.balanceHistory.push({
        id: uuid(),
        date: date,
        amount: state.totalBalance,
      });
    },
    removeIncome: (state, action) => {
      const id = action.payload;
      const currIncome = state.incomes.find((income) => income.id === id);
      if (currIncome) {
        state.totalBalance -= currIncome.amount;
        state.balanceHistory.push({
          id: uuid(),
          date: new Date().toISOString(),
          amount: state.totalBalance,
        });
        state.incomes = state.incomes.filter((income) => income.id !== id);
      }
    },
    removeExpense: (state, action) => {
      const id = action.payload;
      const currExpense = state.expenses.find((expense) => expense.id === id);
      if (currExpense) {
        state.totalBalance += currExpense.amount;
        state.balanceHistory.push({
          id: uuid(),
          date: new Date().toISOString(),
          amount: state.totalBalance,
        });
        state.expenses = state.expenses.filter((expense) => expense.id !== id);
      }
    },
    addChoice: (state, action) => {
      const { name, icon } = action.payload;
      const userOption = {
        name: name,
        icon: icon,
      };
      state.options.push(userOption);
    },
    setFilter: (state, action) => {
      state.filter = {
        ...state.filter,
        ...action.payload,
      };
    },
  },
});
export const selectIncomes = (state) => state.budget.incomes;
export const selectExpense = (state) => state.budget.expenses;
export const selectTotalBalance = (state) => state.budget.totalBalance;
export const selectInitialBalance = (state) => state.budget.initialBalance;
export const selectBalanceHistory = (state) => state.budget.balanceHistory;
export const selectFilter = (state) => state.budget.filter;
export const selectUserGoals = (state) => state.budget.userGoals;
export const selectAllTransactions = createSelector(
  selectIncomes,
  selectExpense,
  (incomes, expenses) => [...incomes, ...expenses]
);
export const selectFilteredBalance = createSelector(
  selectBalanceHistory,
  selectFilter,
  (history, filter) => {
    const { start, end } = filter;
    let filterd = history;
    filterd = filterd.filter((history) => {
      const date = new Date(history.date);
      const isAfterDate = start ? date >= new Date(start) : true;
      const isBeforeDate = end ? date <= new Date(end) : true;
      return isAfterDate && isBeforeDate;
    });
    return filterd;
  }
);
export const selectFilteredTransactions = createSelector(
  selectAllTransactions,
  selectFilter,
  (transations, filter) => {
    const { start, end, type, category } = filter;
    let filterd = transations;

    filterd = filterd.filter((transaction) => {
      const date = new Date(transaction.date);
      const isAfterDate = start ? date >= new Date(start) : true;
      const isBeforeDate = end ? date <= new Date(end) : true;
      return isAfterDate && isBeforeDate;
    });

    if (type) {
      filterd = filterd.filter((transation) => transation.type === type);
    }
    if (category) {
      filterd = filterd.filter((transation) => transation.category === category);
    }
    return filterd;
  }
);
export const selectOptions = (state) => state.budget.options;
export const selectUserChoice = (state) => state.budget.userChoice;
export const { addInitialBalance, addIncome, addExpense, addChoice, setFilter } =
  budgetSlice.actions;
export default budgetSlice.reducer;
