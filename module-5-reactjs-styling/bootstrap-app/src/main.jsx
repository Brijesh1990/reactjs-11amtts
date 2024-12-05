import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import ContainerApp from "./components/Container";
// import ContainerFluid from "./components/ContainerFluid";
// import IconsApp from "./components/IconsApp";
import Layout from "./Layout";
import './assets/css/style.css'
createRoot(document.getElementById("root")).render(
    <StrictMode>
     {/* <ContainerFluid />
     <ContainerApp />
     <IconsApp />     */}
     <Layout />
    </StrictMode>
)