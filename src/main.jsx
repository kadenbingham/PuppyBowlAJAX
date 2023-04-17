import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Search from "./components/Search";
import Puppies from "./ajaxHelpers/puppies";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Search />
    <Puppies />
  </React.StrictMode>
);
