import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
import budgetReducer from "./slices/budgetsSlice";
import modalReducer from "./slices/modalSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    budget: budgetReducer,
    modal: modalReducer,
  },
});

export default store;
