import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
import budgetReducer from "./slices/budgetsSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    budget: budgetReducer,
  },
});

export default store;
