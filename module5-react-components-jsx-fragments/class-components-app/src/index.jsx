import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Employee from "./components/EmployeeData";
import './style.css'
createRoot(document.getElementById("root")).render(
    <>
      <div className="app">
      <Employee /> 
      </div>
      
    </>
)