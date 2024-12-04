import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ExternalApp from "./components/ExternalApp";
import SassApp from "./components/SassApp";
import './assets/css/style.scss'
createRoot(document.getElementById("root")).render(
    <StrictMode>
     {/* <ExternalApp />  */}
     <SassApp />

    </StrictMode>
)