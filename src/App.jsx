import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
/* COMPONENTS */
import NavBar from "./Components/NavBar";
/* PAGES */
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Budget from "./Pages/Budget";
import Help from "./Pages/Help";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import Reports from "./Pages/Reports";
import Transactions from "./Pages/Transactions";
import Alerts from "./Pages/Alerts";
import Dashboard from "./Pages/Dashboard";
/* APP */
function App() {
  return (
    <div
      className="grid grid-cols-12 grid-rows-[auto,1fr] gap-y-5 min-h-svh 
     bg-white-b1 dark:bg-black-b1 text-white-t1 dark:text-black-t1">
      <NavBar />
      <main className="col-span-12">
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
      </main>
    </div>
  );
}

export default App;
