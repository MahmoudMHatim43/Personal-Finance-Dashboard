import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./NavBar";
/* PAGES */
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Budget from "../Pages/Budget";
import Help from "../Pages/Help";
import Profile from "../Pages/Profile";
import Settings from "../Pages/Settings";
import Reports from "../Pages/Reports";
import Transactions from "../Pages/Transactions";
import Alerts from "../Pages/Alerts";
import Dashboard from "../Pages/Dashboard";

function Body() {
  return (
    <div className="w-[95%] sm:w-[90%] mx-auto">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/help" element={<Help />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default Body;
