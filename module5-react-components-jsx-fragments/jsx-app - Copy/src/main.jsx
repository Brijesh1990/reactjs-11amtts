import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Employee from "./Employee";
createRoot(document.getElementById("demo")).render(

    <StrictMode>
     <Employee />
    </StrictMode>
)