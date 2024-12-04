import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ExternalApp from "./components/ExternalApp";
import './assets/css/style.css'
createRoot(document.getElementById("root")).render(
    <StrictMode>
     <ExternalApp /> 
    </StrictMode>
)