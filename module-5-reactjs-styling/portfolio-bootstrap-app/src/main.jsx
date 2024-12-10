import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// bootstrap stylesheet
import 'bootstrap/dist/css/bootstrap.min.css'
// bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css'
// bootstrap js 
import 'bootstrap/dist/js/bootstrap.min.js'
// main styleshseet module
import './assets/css/style.css'
// animate.css 
import 'animate.css'
import Layout from "./Layout";
createRoot(document.getElementById("portfolio-app")).render(
    <StrictMode>
    <Layout />
    </StrictMode>
)