import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // React Router
import { Provider } from "react-redux"; // Redux
import store from "../store/store.js"; // Redux
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  </Router>
);
