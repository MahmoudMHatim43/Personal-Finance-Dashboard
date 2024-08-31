import { createSlice } from "@reduxjs/toolkit";
import {
  FaBell,
  FaHome,
  FaWallet,
  FaChartBar,
  FaExchangeAlt,
  FaQuestionCircle,
} from "react-icons/fa";
const navSlice = createSlice({
  name: "nav",
  initialState: {
    pages: [
      { name: "Home", icon: FaHome },
      { name: "Budget", icon: FaWallet },
      { name: "Reports", icon: FaChartBar },
      { name: "Transactions", icon: FaExchangeAlt },
      { name: "Alerts", icon: FaBell },
      { name: "Help", icon: FaQuestionCircle },
    ],
    isSideBarOpen: true,
  },
  reducers: {
    openSideBar: (state) => {
      state.isSideBarOpen = true;
    },
    closeSideBar: (state) => {
      state.isSideBarOpen = false;
    },
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  },
});
export const { openSideBar, closeSideBar, toggleSideBar } = navSlice.actions;
export default navSlice.reducer;
